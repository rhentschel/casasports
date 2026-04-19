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
        return
      }

      const imageFiles = files.filter((f) =>
        Object.keys(MIME_MAP).includes(path.extname(f).toLowerCase())
      )

      let imported = 0
      let skipped = 0
      for (const fn of imageFiles) {
        try {
          const ext = path.extname(fn).toLowerCase()
          // AVIF zu WebP konvertieren - sharp hat im Container Probleme mit AVIF-Resize
          const isAvif = ext === ".avif"
          const targetName = isAvif
            ? fn.replace(/\.avif$/i, ".webp")
            : fn

          const existing = await payload.find({
            collection: "media",
            where: { filename: { equals: targetName } },
            limit: 1,
            overrideAccess: true,
          })
          if (existing.docs.length > 0) {
            skipped++
            continue
          }
          const filepath = path.join(imagesDir, fn)
          let buffer = await readFile(filepath)
          let mimetype = MIME_MAP[ext]
          let size = (await stat(filepath)).size

          if (isAvif) {
            const converted = await sharp(buffer).webp({ quality: 85 }).toBuffer()
            buffer = Buffer.from(converted.buffer, converted.byteOffset, converted.byteLength)
            mimetype = "image/webp"
            size = buffer.length
          }

          await payload.create({
            collection: "media",
            data: { alt: filenameToAlt(fn) },
            file: {
              data: buffer,
              name: targetName,
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
        `images-sync: imported=${imported} skipped=${skipped} total=${imageFiles.length}`
      )
    } catch (err) {
      payload.logger.error({ err }, "images-sync failed")
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
