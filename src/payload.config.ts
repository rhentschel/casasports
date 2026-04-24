import { buildConfig } from "payload"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { sql } from "drizzle-orm"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { nodemailerAdapter } from "@payloadcms/email-nodemailer"
import { de } from "@payloadcms/translations/languages/de"
import sharp from "sharp"
import path from "path"
import { fileURLToPath } from "url"
import { readdir, readFile, stat } from "fs/promises"

import { Users } from "./collections/users"
import { Media } from "./collections/media"
import { Posts } from "./collections/blog/posts"
import { Categories } from "./collections/blog/categories"
import { Authors } from "./collections/blog/authors"
import { TopicClusters } from "./collections/blog/topic-clusters"
import { TeamMembers } from "./collections/team-members"
import { Courses } from "./collections/courses"
import { JobPositions } from "./collections/jobs/positions"
import { JobApplications } from "./collections/jobs/applications"
import { CvUploads } from "./collections/jobs/cv-uploads"
import { MembershipSignups } from "./collections/membership-signups"
import { Leads } from "./collections/leads"
import { WizardSessions } from "./collections/wizard-sessions"
import { SiteSettings } from "./globals/site-settings"
import { Navigation } from "./globals/navigation"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const INIT_TABLES_SQL = [
  `CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone VARCHAR,
    message VARCHAR,
    source VARCHAR,
    magicline_lead_id VARCHAR,
    status VARCHAR DEFAULT 'neu',
    converted_to_signup_id INTEGER,
    updated_at TIMESTAMP(3) WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP(3) WITH TIME ZONE DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS wizard_sessions (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR NOT NULL,
    furthest_step VARCHAR DEFAULT 'plan',
    completed BOOLEAN DEFAULT FALSE,
    user_agent VARCHAR,
    referrer VARCHAR,
    updated_at TIMESTAMP(3) WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP(3) WITH TIME ZONE DEFAULT NOW()
  )`,
  `CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email)`,
  `CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at)`,
  `CREATE INDEX IF NOT EXISTS wizard_sessions_session_id_idx ON wizard_sessions (session_id)`,
  `CREATE INDEX IF NOT EXISTS wizard_sessions_created_at_idx ON wizard_sessions (created_at)`,
  `CREATE TABLE IF NOT EXISTS cv_uploads (
    id SERIAL PRIMARY KEY,
    applicant_name VARCHAR,
    url VARCHAR,
    thumbnail_u_r_l VARCHAR,
    filename VARCHAR,
    mime_type VARCHAR,
    filesize DOUBLE PRECISION,
    width DOUBLE PRECISION,
    height DOUBLE PRECISION,
    focal_x DOUBLE PRECISION,
    focal_y DOUBLE PRECISION,
    updated_at TIMESTAMP(3) WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP(3) WITH TIME ZONE DEFAULT NOW()
  )`,
  `CREATE INDEX IF NOT EXISTS cv_uploads_filename_idx ON cv_uploads (filename)`,
  `CREATE INDEX IF NOT EXISTS cv_uploads_created_at_idx ON cv_uploads (created_at)`,
  `ALTER TABLE job_applications ADD COLUMN IF NOT EXISTS cv_id INTEGER`,
  `CREATE INDEX IF NOT EXISTS job_applications_cv_idx ON job_applications (cv_id)`,
  `ALTER TABLE payload_locked_documents_rels ADD COLUMN IF NOT EXISTS leads_id INTEGER`,
  `ALTER TABLE payload_locked_documents_rels ADD COLUMN IF NOT EXISTS wizard_sessions_id INTEGER`,
  `ALTER TABLE payload_locked_documents_rels ADD COLUMN IF NOT EXISTS cv_uploads_id INTEGER`,
  `CREATE INDEX IF NOT EXISTS pld_rels_leads_id_idx ON payload_locked_documents_rels (leads_id)`,
  `CREATE INDEX IF NOT EXISTS pld_rels_wizard_sessions_id_idx ON payload_locked_documents_rels (wizard_sessions_id)`,
  `CREATE INDEX IF NOT EXISTS pld_rels_cv_uploads_id_idx ON payload_locked_documents_rels (cv_uploads_id)`,
  // Posts: keyTakeaway + faq (JSON) - idempotent
  `ALTER TABLE posts ADD COLUMN IF NOT EXISTS key_takeaway TEXT`,
  `ALTER TABLE posts ADD COLUMN IF NOT EXISTS faq JSONB`,
]

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  i18n: {
    supportedLanguages: { de },
    fallbackLanguage: "de",
  },
  onInit: async (payload) => {
    try {
      const db = payload.db as unknown as {
        drizzle?: { execute: (q: ReturnType<typeof sql>) => Promise<unknown> }
      }
      if (!db.drizzle) return
      for (const stmt of INIT_TABLES_SQL) {
        await db.drizzle.execute(sql.raw(stmt))
      }
      payload.logger.info("init-tables: leads + wizard_sessions ready")
    } catch (err) {
      payload.logger.error({ err }, "init-tables failed")
    }

    // Auto-Import public/images/ in die Media-Collection (idempotent)
    try {
      const MIME_MAP: Record<string, string> = {
        ".webp": "image/webp",
        ".avif": "image/avif",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".gif": "image/gif",
      }

      const filenameToAlt = (fn: string): string => {
        const base = fn.replace(/\.[^.]+$/, "")
        return base
          .replace(/casasports?-/gi, "Casa Sports ")
          .replace(/-fuer-/gi, " für ")
          .replace(/-ueber-/gi, " über ")
          .replace(/-/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .split(" ")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")
      }

      const imagesDir = path.join(process.cwd(), "public", "images")
      let files: string[] = []
      try {
        files = await readdir(imagesDir)
      } catch {
        payload.logger.info("images-sync: public/images not found, skipped")
        files = []
      }

      const imageFiles = files.filter((f) =>
        Object.keys(MIME_MAP).includes(path.extname(f).toLowerCase())
      )

      const mediaDir = path.resolve(
        __dirname,
        "..",
        "..",
        "public",
        "media"
      )
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { existsSync, mkdirSync } = await import("fs")
      try {
        mkdirSync(mediaDir, { recursive: true })
      } catch {
        // bereits da
      }

      let imported = 0
      let skipped = 0
      let repaired = 0
      for (const fn of imageFiles) {
        try {
          const ext = path.extname(fn).toLowerCase()
          // AVIF skippen - sharp im Container kann HEIF/AVIF nicht parsen
          if (ext === ".avif") continue

          const existing = await payload.find({
            collection: "media",
            where: { filename: { equals: fn } },
            limit: 1,
            overrideAccess: true,
          })

          if (existing.docs.length > 0) {
            // Check ob File auf Disk existiert - wenn nicht: DB-Eintrag löschen und re-import
            const diskPath = path.join(mediaDir, fn)
            if (existsSync(diskPath)) {
              skipped++
              continue
            }
            // Datei fehlt, lösche broken Eintrag
            await payload.delete({
              collection: "media",
              id: existing.docs[0].id,
              overrideAccess: true,
            })
            repaired++
          }

          const filepath = path.join(imagesDir, fn)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const buffer: any = await readFile(filepath)
          const mimetype = MIME_MAP[ext]
          const size = (await stat(filepath)).size

          await payload.create({
            collection: "media",
            data: { alt: filenameToAlt(fn) },
            file: {
              data: buffer,
              name: fn,
              mimetype,
              size,
            },
            overrideAccess: true,
          })
          imported++
        } catch (e) {
          payload.logger.error(
            { err: e, file: fn },
            "images-sync: single file failed"
          )
        }
      }

      payload.logger.info(
        `images-sync: imported=${imported} skipped=${skipped} repaired=${repaired} total=${imageFiles.length}`
      )
    } catch (err) {
      payload.logger.error({ err }, "images-sync failed")
    }

    // Blog-Artikel-Content-Seed: komplette Neuschreibung mit Lexical-content + keyTakeaway + faq
    // Idempotent via content-version Marker in keyTakeaway (erste 20 Zeichen)
    try {
      const { saunaNachDemTraining } = await import("./data/blog/content/sauna-nach-dem-training")
      const CONTENT_SEEDS = [saunaNachDemTraining]

      let updated = 0
      for (const seed of CONTENT_SEEDS) {
        const found = await payload.find({
          collection: "posts",
          where: { slug: { equals: seed.slug } },
          limit: 1,
          overrideAccess: true,
        })
        if (found.docs.length === 0) continue
        const p = found.docs[0] as { id: string | number; keyTakeaway?: string }
        // Version-Marker: wenn der aktuelle keyTakeaway mit dem neuen exakt startet, skip
        const currentKT = (p.keyTakeaway || "").trim()
        const newKT = seed.keyTakeaway.trim()
        if (currentKT === newKT) continue

        await payload.update({
          collection: "posts",
          id: p.id,
          data: {
            title: seed.title,
            excerpt: seed.excerpt,
            content: seed.content,
            keyTakeaway: seed.keyTakeaway,
            faq: seed.faq,
          } as unknown as Record<string, unknown>,
          overrideAccess: true,
        })
        updated++
        payload.logger.info(`blog-rewrite: ${seed.slug} aktualisiert`)
      }
      payload.logger.info(`blog-rewrite-seed: ${updated}/${CONTENT_SEEDS.length} Artikel neu geschrieben`)
    } catch (err) {
      payload.logger.error({ err }, "blog-rewrite-seed failed")
    }

    // Blog-Content-Seed: keyTakeaway + faq fuer bestehende Artikel (idempotent, nur wenn leer)
    try {
      type BlogSeed = { keyTakeaway: string; faq: { question: string; answer: string }[] }
      const BLOG_CONTENT: Record<string, BlogSeed> = {
        "sauna-nach-dem-training": {
          keyTakeaway:
            "Sauna nach dem Training unterstützt Regeneration, Durchblutung und Entspannung. Wichtig sind kurze Saunagänge zwischen acht und zwölf Minuten sowie ausreichend Flüssigkeit davor und danach.",
          faq: [
            { question: "Wie lange sollte ich nach dem Training in die Sauna?", answer: "Für Sportler sind zwei Saunagänge à acht bis zwölf Minuten ideal. Wichtiger als die Länge ist, dass du auf deinen Körper hörst und nicht erschöpft in die Hitze gehst." },
            { question: "Direkt nach dem Training oder mit Pause?", answer: "Plane etwa fünfzehn bis dreißig Minuten Pause ein, damit dein Kreislauf runterfährt. Dusche kurz ab, trinke etwas und iss einen kleinen Snack bevor du in die Sauna gehst." },
            { question: "Wie oft pro Woche ist sinnvoll?", answer: "Zwei- bis dreimal pro Woche sind eine gute Orientierung. Wer intensiv trainiert, kann häufiger saunieren, sollte dann aber besonders auf Flüssigkeitshaushalt und Schlaf achten." },
            { question: "Was trinke ich am besten vorher und nachher?", answer: "Wasser und ungesüßter Tee sind die beste Wahl. Nach dem Saunieren hilft eine leicht salzhaltige Brühe oder Mineralwasser, um Elektrolyte aufzufüllen." },
            { question: "Wann sollte ich auf die Sauna nach dem Training verzichten?", answer: "Bei Infekten, Kreislaufproblemen, unbehandeltem Bluthochdruck oder starker Erschöpfung ist die Sauna tabu. Bei Schwangerschaft oder Vorerkrankungen immer vorher ärztlich abklären." },
          ],
        },
        "krafttraining-fuer-anfaenger": {
          keyTakeaway:
            "Als Anfänger brauchst du keine perfekte Technik am ersten Tag. Starte mit Ganzkörper-Einheiten zweimal pro Woche, lerne Grundübungen langsam und steigere Gewicht oder Wiederholungen erst, wenn die Bewegung sauber sitzt.",
          faq: [
            { question: "Wie oft pro Woche sollte ich als Anfänger trainieren?", answer: "Zwei bis drei Ganzkörper-Einheiten pro Woche mit mindestens einem Tag Pause dazwischen sind optimal. Dein Körper braucht die Ruhezeit, um stärker zu werden." },
            { question: "Geräte oder freie Gewichte zum Einstieg?", answer: "Eine Mischung ist ideal. Geräte geben Sicherheit und führen die Bewegung, mit freien Gewichten lernst du Koordination und Stabilisation. Unsere Trainer zeigen dir, womit du starten solltest." },
            { question: "Wie viele Sätze und Wiederholungen?", answer: "Drei Sätze à acht bis zwölf Wiederholungen pro Übung sind ein bewährter Startpunkt. Wichtig ist, dass die letzten zwei Wiederholungen anstrengend, aber technisch sauber ausgeführt werden." },
            { question: "Ist starker Muskelkater ein gutes Zeichen?", answer: "Leichter Muskelkater ist normal, starker Muskelkater bedeutet meist, dass du zu viel zu schnell wolltest. Fahre die Intensität zurück und gib dem Körper mehr Zeit zur Anpassung." },
            { question: "Brauche ich am Anfang einen Trainer?", answer: "Ein Einführungstermin ist sehr empfehlenswert, auch wenn du kein Komplettpaket buchst. So lernst du die Grundübungen technisch richtig und sparst dir Rückschritte durch falsche Ausführung." },
          ],
        },
        "cardio-oder-krafttraining": {
          keyTakeaway:
            "Weder Cardio noch Krafttraining ist pauschal besser. Für Fettabbau und eine definierte Figur wirkt die Kombination am stärksten, für reine Ausdauer liegt der Fokus auf Cardio, für Muskelaufbau auf Kraft.",
          faq: [
            { question: "Reicht Cardio allein zum Abnehmen?", answer: "Cardio verbrennt Kalorien während des Trainings, Krafttraining erhöht deinen Grundumsatz langfristig. Die Kombination ist für die meisten Menschen der nachhaltigste Weg." },
            { question: "Macht Krafttraining Frauen muskulös?", answer: "Nein. Ohne gezielte Ernährung und sehr hohe Trainingsvolumen baust du keine massiven Muskeln auf. Du bekommst eine festere und definiertere Figur." },
            { question: "Zuerst Kraft oder Cardio im Training?", answer: "Wenn Muskelaufbau das Ziel ist, starte mit Krafttraining. Cardio im Anschluss ist dann Feinschliff. Beim reinen Ausdauertraining kehrt sich die Reihenfolge um." },
            { question: "Wie viele Einheiten pro Woche sind optimal?", answer: "Drei bis vier Einheiten mit einer Mischung aus beidem sind für die meisten realistisch und wirksam. Wichtig ist Regelmäßigkeit, nicht die perfekte Aufteilung." },
            { question: "Kann ich beides im selben Training machen?", answer: "Ja, das nennt sich Hybrid-Training. Ideal sind zwanzig bis dreißig Minuten Krafttraining gefolgt von fünfzehn bis zwanzig Minuten Cardio auf moderatem Niveau." },
          ],
        },
        "functional-training-im-alltag": {
          keyTakeaway:
            "Functional Training trainiert komplette Bewegungsmuster statt einzelner Muskeln. Das spiegelt wider, was du im Alltag brauchst und beugt Schmerzen, Haltungsproblemen und Verletzungen vor.",
          faq: [
            { question: "Was ist der Unterschied zu klassischem Krafttraining?", answer: "Klassisches Training isoliert Muskeln an Geräten, Functional Training verbindet mehrere Gelenke und Muskeln in einer Bewegung. Das Ergebnis ist alltagsnahe Kraft und bessere Koordination." },
            { question: "Für wen ist Functional Training geeignet?", answer: "Für wirklich jeden. Ob Einsteiger, Büromensch mit Rückenschmerzen oder Leistungssportler, die Übungen lassen sich individuell anpassen." },
            { question: "Brauche ich spezielles Equipment?", answer: "Für den Einstieg reicht dein Körpergewicht. Bei uns im Studio gibt es zusätzlich Kettlebells, TRX-Schlingen, Bälle und Boxen für mehr Variation." },
            { question: "Wie oft pro Woche sollte ich üben?", answer: "Zwei bis drei Einheiten pro Woche reichen für spürbare Verbesserungen. Die Übungen sind gelenkschonend und gut mit anderem Training kombinierbar." },
            { question: "Hilft Functional Training bei Rückenschmerzen?", answer: "Ja, weil es die Tiefenmuskulatur und Rumpfstabilität stärkt. Bei akuten Beschwerden zuerst ärztlich abklären und dann gezielt mit einem Trainer starten." },
          ],
        },
        "proteinbedarf-berechnen": {
          keyTakeaway:
            "Dein Proteinbedarf hängt von Gewicht, Trainingspensum und Ziel ab. Als Orientierung für aktive Sportler gelten etwa 1,6 bis 2 Gramm Protein pro Kilogramm Körpergewicht pro Tag.",
          faq: [
            { question: "Wie berechne ich meinen Bedarf konkret?", answer: "Multipliziere dein Körpergewicht in Kilogramm mit einem Faktor zwischen 1,6 und 2. Bei achtzig Kilo Körpergewicht landest du also bei ungefähr 128 bis 160 Gramm Protein pro Tag." },
            { question: "Reicht normale Ernährung oder brauche ich Shakes?", answer: "Wer regelmäßig Fleisch, Fisch, Eier, Milchprodukte oder Hülsenfrüchte isst, schafft den Bedarf meist ohne Shakes. Pulver ist ein bequemer Backup für unterwegs, kein Muss." },
            { question: "Ist zu viel Protein schädlich?", answer: "Für gesunde Menschen mit ausreichend Flüssigkeit ist ein Überschuss unkritisch, wird aber nicht zusätzlich für Muskelaufbau genutzt. Bei Nierenvorerkrankungen vorher ärztlich abklären." },
            { question: "Wann sollte ich Protein zu mir nehmen?", answer: "Verteile Protein auf drei bis fünf Mahlzeiten über den Tag. Eine proteinreiche Mahlzeit nach dem Training ist sinnvoll, der magische Zeitpunkt direkt danach ist aber überholt." },
            { question: "Pflanzlich oder tierisch, was ist besser?", answer: "Tierisches Protein ist von Natur aus komplett, pflanzliches musst du kombinieren. Mit etwas Planung funktioniert pflanzliche Ernährung genauso gut, besonders bei Hülsenfrüchten und Vollkorn." },
          ],
        },
        "fitness-training-der-komplette-guide": {
          keyTakeaway:
            "Ein solider Fitnessplan für Einsteiger besteht aus Ganzkörper-Krafttraining zwei- bis dreimal pro Woche, ergänzt durch moderates Cardio und mindestens einem Ruhetag zwischen intensiven Einheiten.",
          faq: [
            { question: "Wie fange ich am besten an?", answer: "Beginne mit einem Einführungstermin, bei dem wir Ziele besprechen und Grundübungen zeigen. Starte mit weniger Gewicht als du dir zutraust, Technik kommt vor Kraft." },
            { question: "Wie lange sollte eine Einheit dauern?", answer: "Fünfundvierzig bis sechzig Minuten inklusive Aufwärmen und Abkühlen sind für die meisten optimal. Kürzer und intensiver ist oft effektiver als stundenlang." },
            { question: "Wann sehe ich erste Ergebnisse?", answer: "Nach vier bis sechs Wochen fühlst du dich fitter, nach acht bis zwölf Wochen siehst du Veränderungen. Nachhaltige Ergebnisse brauchen Monate, keine Tage." },
            { question: "Soll ich jeden Tag trainieren?", answer: "Nein. Muskeln wachsen in den Pausen. Drei bis vier Trainingstage plus Bewegung im Alltag sind für die meisten ideal." },
            { question: "Brauche ich separate Bauchmuskel-Einheiten?", answer: "Grundübungen wie Kniebeuge und Kreuzheben trainieren den Rumpf bereits mit. Zwei kurze gezielte Einheiten pro Woche reichen als Ergänzung." },
          ],
        },
        "sporternaehrung-der-komplette-guide": {
          keyTakeaway:
            "Sporternährung dreht sich um drei Hebel: genug Protein für Muskeln, Kohlenhydrate als Energie ums Training herum und Mikronährstoffe für Regeneration. Dazu ausreichend Wasser über den Tag verteilt.",
          faq: [
            { question: "Was esse ich vor dem Training?", answer: "Etwa ein bis zwei Stunden vor dem Training eine leichte Mahlzeit mit Kohlenhydraten und etwas Protein, zum Beispiel Haferflocken mit Quark und Beeren." },
            { question: "Und nach dem Training?", answer: "Eine ausgewogene Mahlzeit innerhalb der nächsten zwei Stunden reicht völlig. Ideal sind Protein und Kohlenhydrate, etwa Reis mit Hähnchen oder Tofu und Gemüse." },
            { question: "Wie viele Mahlzeiten pro Tag sind optimal?", answer: "Drei bis vier Hauptmahlzeiten plus ein bis zwei Snacks passen für die meisten. Wichtiger als die Anzahl ist, dass du über den Tag genug Protein und Gesamtkalorien erreichst." },
            { question: "Muss ich Kalorien zählen?", answer: "Am Anfang hilft es, ein Gefühl für Portionen zu bekommen. Dauerhaft zählen ist nicht nötig, sobald du weißt, wie viel du wovon brauchst." },
            { question: "Welche Supplements sind wirklich sinnvoll?", answer: "Proteinpulver als Ergänzung, Kreatin für Kraft und Omega-3 bei wenig Fisch im Speiseplan sind die drei am besten untersuchten. Alles andere ist Feinschliff oder unnötig." },
          ],
        },
        "wellness-und-regeneration-guide": {
          keyTakeaway:
            "Regeneration ist kein Extra, sondern Teil deines Trainings. In der Erholung wachsen Muskeln. Wechsel aus Sauna, Kältereiz, gutem Schlaf und aktivem Stretching macht deutlich mehr aus als reine Belastung.",
          faq: [
            { question: "Wie viel Schlaf brauche ich bei regelmäßigem Training?", answer: "Sieben bis neun Stunden sind der wichtigste Regenerationshebel überhaupt. Ohne ausreichend Schlaf bleibt der beste Trainingsplan unter seinen Möglichkeiten." },
            { question: "Sauna oder Kältetherapie, was ist besser?", answer: "Beides wirkt, aber anders. Sauna entspannt und fördert Durchblutung, Kälte reduziert Entzündungsreaktionen akut. Für Muskelaufbau direkt nach dem Training lieber keine Kälte, für reine Regeneration gerne." },
            { question: "Aktive oder passive Regeneration?", answer: "Eine Mischung. Passives Ausruhen gibt dem Nervensystem Ruhe, leichte Bewegung wie Spaziergang oder lockeres Radfahren bringt Nährstoffe in die Muskeln." },
            { question: "Wie erkenne ich Übertraining?", answer: "Typische Zeichen sind dauerhafte Müdigkeit, schlechter Schlaf, Leistungsabfall, häufige Infekte und Lustlosigkeit. Dann hilft nur eine echte Pause von mindestens einer Woche." },
            { question: "Wann ist ein kompletter Ruhetag Pflicht?", answer: "Mindestens ein voller Ruhetag pro Woche sollte fest eingeplant sein. Wer hart trainiert, braucht eher zwei. Aktive Erholung wie Spaziergang ist an Ruhetagen erlaubt." },
          ],
        },
      }

      const allPosts = await payload.find({
        collection: "posts",
        limit: 200,
        overrideAccess: true,
      })

      let seeded = 0
      for (const post of allPosts.docs) {
        const p = post as {
          id: string | number
          slug?: string
          keyTakeaway?: string | null
          faq?: unknown
        }
        if (!p.slug) continue
        const seed = BLOG_CONTENT[p.slug]
        if (!seed) continue

        const hasKeyTakeaway =
          typeof p.keyTakeaway === "string" && p.keyTakeaway.trim().length > 0
        const hasFaq = Array.isArray(p.faq) && p.faq.length > 0

        if (hasKeyTakeaway && hasFaq) continue

        const updateData: Record<string, unknown> = {}
        if (!hasKeyTakeaway) updateData.keyTakeaway = seed.keyTakeaway
        if (!hasFaq) updateData.faq = seed.faq

        await payload.update({
          collection: "posts",
          id: p.id,
          data: updateData,
          overrideAccess: true,
        })
        seeded++
      }
      payload.logger.info(`blog-content-seed: ${seeded}/${allPosts.docs.length} aktualisiert`)
    } catch (err) {
      payload.logger.error({ err }, "blog-content-seed failed")
    }

    // Autor-Bild-Link: verknuepft authors.image mit team-*.webp aus Media-Collection (idempotent)
    try {
      const AUTHOR_IMAGE_MAP: Record<string, string> = {
        hidayet: "team-hidayet.webp",
        naim: "naim-casasports.webp",
        jennifer: "team-jennifer.webp",
        eren: "team-eren.webp",
        renate: "team-renate.webp",
      }
      let linked = 0
      for (const [slug, filename] of Object.entries(AUTHOR_IMAGE_MAP)) {
        const author = await payload.find({
          collection: "authors",
          where: { slug: { equals: slug } },
          limit: 1,
          overrideAccess: true,
        })
        if (author.docs.length === 0) continue
        const a = author.docs[0] as { id: string | number; image?: unknown }
        if (a.image && typeof a.image === "object") continue
        const media = await payload.find({
          collection: "media",
          where: { filename: { equals: filename } },
          limit: 1,
          overrideAccess: true,
        })
        if (media.docs.length === 0) continue
        await payload.update({
          collection: "authors",
          id: a.id,
          data: { image: media.docs[0].id } as unknown as Record<string, unknown>,
          overrideAccess: true,
        })
        linked++
      }
      payload.logger.info(`authors-image-link: ${linked} verknuepft`)
    } catch (err) {
      payload.logger.error({ err }, "authors-image-link failed")
    }

    // Umlaut-Korrektur fuer bestehende job-positions (idempotent)
    try {
      const UMLAUT_MAP: [RegExp, string][] = [
        [/Trainingsplaene/g, "Trainingspläne"],
        [/Trainingsplaen/g, "Trainingsplän"],
        [/Plaene/g, "Pläne"],
        [/plaen/g, "plän"],
        [/Geraete/g, "Geräte"],
        [/Geraet/g, "Gerät"],
        [/geraet/g, "gerät"],
        [/Koerper/g, "Körper"],
        [/koerper/g, "körper"],
        [/Hoeher/g, "Höher"],
        [/hoeher/g, "höher"],
        [/Fuehrung/g, "Führung"],
        [/Durchfuehrung/g, "Durchführung"],
        [/fuehrst/g, "führst"],
        [/fuehrt/g, "führt"],
        [/fuehren/g, "führen"],
        [/einfuehr/g, "einführ"],
        [/Einfuehr/g, "Einführ"],
        [/Faehigkeit/g, "Fähigkeit"],
        [/faehigkeit/g, "fähigkeit"],
        [/faehig/g, "fähig"],
        [/Zuverlaessig/g, "Zuverlässig"],
        [/zuverlaessig/g, "zuverlässig"],
        [/Selbststaendig/g, "Selbstständig"],
        [/selbststaendig/g, "selbstständig"],
        [/Staerke/g, "Stärke"],
        [/staerke/g, "stärke"],
        [/Taeglich/g, "Täglich"],
        [/taeglich/g, "täglich"],
        [/regelmaessig/g, "regelmäßig"],
        [/Regelmaessig/g, "Regelmäßig"],
        [/Qualitaet/g, "Qualität"],
        [/Naehe/g, "Nähe"],
        [/Ueber /g, "Über "],
        [/ ueber /g, " über "],
        [/Mueller/g, "Müller"],
        [/fuer /g, "für "],
        [/Fuer /g, "Für "],
      ]

      const all = await payload.find({
        collection: "job-positions",
        limit: 100,
        overrideAccess: true,
      })

      let fixed = 0
      for (const pos of all.docs) {
        const apply = (s: string | null | undefined): string => {
          if (!s) return s as unknown as string
          let out = s
          for (const [re, rep] of UMLAUT_MAP) out = out.replace(re, rep)
          return out
        }
        const newData: Record<string, unknown> = {}
        let changed = false
        const origDesc = pos.description as string | undefined
        const newDesc = apply(origDesc)
        if (origDesc && newDesc !== origDesc) {
          newData.description = newDesc
          changed = true
        }
        const tasks = (pos.tasks as { task: string; id?: string }[] | undefined) ?? []
        const newTasks = tasks.map((t) => ({ ...t, task: apply(t.task) }))
        if (JSON.stringify(tasks.map((t) => t.task)) !== JSON.stringify(newTasks.map((t) => t.task))) {
          newData.tasks = newTasks
          changed = true
        }
        const reqs = (pos.requirements as { requirement: string; id?: string }[] | undefined) ?? []
        const newReqs = reqs.map((r) => ({ ...r, requirement: apply(r.requirement) }))
        if (JSON.stringify(reqs.map((r) => r.requirement)) !== JSON.stringify(newReqs.map((r) => r.requirement))) {
          newData.requirements = newReqs
          changed = true
        }

        if (changed) {
          await payload.update({
            collection: "job-positions",
            id: pos.id,
            data: newData,
            overrideAccess: true,
          })
          fixed++
        }
      }
      payload.logger.info(`positions-umlaut-fix: ${fixed}/${all.docs.length} aktualisiert`)
    } catch (err) {
      payload.logger.error({ err }, "positions-umlaut-fix failed")
    }

    // Seed job-positions (idempotent) - Praktikum
    try {
      const existing = await payload.find({
        collection: "job-positions",
        where: { title: { equals: "Praktikum" } },
        limit: 1,
        overrideAccess: true,
      })
      if (existing.docs.length === 0) {
        await payload.create({
          collection: "job-positions",
          data: {
            title: "Praktikum",
            type: "Praktikum",
            hours: "Vollzeit / Teilzeit",
            icon: "Briefcase",
            description:
              "Schnupper in den Alltag eines modernen Fitnessstudios. Du bekommst Einblicke in Training, Kundenbetreuung, Kurse und Wellness und entscheidest am Ende, ob eine Ausbildung oder Karriere bei uns das Richtige ist.",
            tasks: [
              { task: "Trainingsflaeche begleiten und Mitglieder unterstuetzen" },
              { task: "In Kurse, Personal Training und Wellness reinschnuppern" },
              { task: "Empfang und Kundenservice kennenlernen" },
              { task: "Eigene Projekte je nach Interesse uebernehmen" },
            ],
            requirements: [
              { requirement: "Interesse an Fitness, Gesundheit und Menschen" },
              { requirement: "Zuverlaessig, offen und motiviert" },
              { requirement: "Mindestalter 15 Jahre (Schuelerpraktikum moeglich)" },
              { requirement: "Keine Vorkenntnisse noetig" },
            ],
            active: true,
            sortOrder: 50,
          },
          overrideAccess: true,
        })
        payload.logger.info("positions-seed: Praktikum angelegt")
      } else {
        payload.logger.info("positions-seed: Praktikum existiert bereits")
      }
    } catch (err) {
      payload.logger.error({ err }, "positions-seed failed")
    }
  },
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " | Casa Sports Admin",
    },
    theme: "dark",
    components: {
      beforeNavLinks: ["/components/admin/DashboardLink#DashboardLink"],
      graphics: {
        Logo: "/components/admin/Logo#Logo",
        Icon: "/components/admin/Icon#Icon",
      },
      views: {
        login: {
          Component: "/components/admin/LoginView#LoginView",
        },
      },
    },
  },
  collections: [
    Users,
    Media,
    Posts,
    Categories,
    Authors,
    TopicClusters,
    TeamMembers,
    Courses,
    JobPositions,
    JobApplications,
    CvUploads,
    MembershipSignups,
    Leads,
    WizardSessions,
  ],
  globals: [SiteSettings, Navigation],
  editor: lexicalEditor(),
  email: process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD
    ? nodemailerAdapter({
        defaultFromAddress: process.env.EMAIL_FROM_ADDRESS || "info@casasports.de",
        defaultFromName: process.env.EMAIL_FROM_NAME || "Casa Sports",
        transportOptions: {
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "465", 10),
          secure: parseInt(process.env.SMTP_PORT || "465", 10) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        },
      })
    : undefined,
  db: postgresAdapter({
    push: true,
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  secret: process.env.PAYLOAD_SECRET || "casasports-dev-secret-change-me",
})
