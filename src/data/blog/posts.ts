import type { BlogPost } from "./types"

export const posts: BlogPost[] = [
  // ─── PILLAR: FITNESS-TRAINING ─────────────────────────────────
  {
    slug: "fitness-training-der-komplette-guide",
    title: "Fitness-Training: Der komplette Guide fuer Einsteiger und Fortgeschrittene",
    excerpt: "Krafttraining, Cardio, Functional Training: Alles, was du ueber effektives Fitness-Training wissen musst. Von den Grundlagen bis zu fortgeschrittenen Methoden.",
    coverImage: "/images/casasports-krafttraining-1.webp",
    category: "training",
    tags: ["Krafttraining", "Cardio", "Functional Training", "Anfaenger", "Fortgeschrittene"],
    author: "naim-obeid",
    publishedAt: "2026-02-10",
    updatedAt: "2026-03-15",
    featured: true,
    isPillar: true,
    topicCluster: "fitness-training",
    relatedSlugs: ["krafttraining-fuer-anfaenger", "cardio-oder-krafttraining", "functional-training-im-alltag"],
    seo: {
      title: "Fitness-Training Guide 2026: Kraft, Cardio & Functional | Casa Sports",
      description: "Der komplette Fitness-Guide: Krafttraining, Cardio und Functional Training erklaert. Mit Trainingsplaenen, Tipps und Methoden fuer Anfaenger und Fortgeschrittene.",
    },
    content: `
<p>Fitness-Training ist mehr als nur Gewichte stemmen. Es ist ein System aus Bewegung, Ernaehrung und Erholung, das deinen Koerper staerker, gesuender und belastbarer macht. In diesem Guide zeigen wir dir alles, was du brauchst, um dein Training auf das naechste Level zu bringen.</p>

<h2 id="was-ist-fitness-training">Was ist Fitness-Training?</h2>
<p>Fitness-Training umfasst jede koerperliche Aktivitaet, die darauf abzielt, deine koerperliche Leistungsfaehigkeit zu verbessern. Das schliesst Krafttraining, Ausdauertraining, Beweglichkeit und funktionelle Uebungen ein. Entscheidend ist nicht, welche Methode du waehlst, sondern dass du sie konsequent umsetzt.</p>
<p>Im Kern geht es um drei Saeulen: Belastung, Ernaehrung und Regeneration. Wenn eine davon fehlt, bleiben Ergebnisse aus. Ein durchdachter Trainingsplan beruecksichtigt alle drei Faktoren.</p>

<h2 id="die-drei-saeulen">Die drei Saeulen des Trainings</h2>

<h3 id="krafttraining">Krafttraining</h3>
<p>Krafttraining ist das Fundament jedes Fitnessprogramms. Es baut Muskelmasse auf, steigert den Grundumsatz und schuetzt Gelenke vor Verletzungen. Ob mit freien Gewichten, Maschinen oder dem eigenen Koerpergewicht: Die progressive Ueberlastung ist der Schluessel zum Fortschritt.</p>
<p>Fuer Anfaenger empfehlen wir ein Ganzkoerper-Training, dreimal pro Woche. Fortgeschrittene profitieren von einem Split-Training, bei dem Muskelgruppen an verschiedenen Tagen trainiert werden. Mehr dazu in unserem <a href="/blog/krafttraining-fuer-anfaenger">Krafttraining-Guide fuer Anfaenger</a>.</p>

<h3 id="cardio-training">Cardio-Training</h3>
<p>Ausdauertraining verbessert dein Herz-Kreislauf-System, steigert die Fettverbrennung und erhoet deine allgemeine Belastbarkeit. Die Frage "Cardio oder Kraft?" stellt sich dabei nicht: Beides gehoert in einen ausgewogenen Trainingsplan.</p>
<p>HIIT (High Intensity Interval Training) ist besonders zeiteffizient. 20 Minuten intensives Intervalltraining koennen genauso effektiv sein wie 45 Minuten moderates Cardio. Lies unseren ausfuehrlichen Vergleich: <a href="/blog/cardio-oder-krafttraining">Cardio oder Krafttraining: Was bringt mehr?</a></p>

<h3 id="functional-training">Functional Training</h3>
<p>Funktionelles Training bereitet deinen Koerper auf die Belastungen des Alltags vor. Statt einzelne Muskeln isoliert zu trainieren, werden komplexe Bewegungsketten geuebt. Das verbessert Koordination, Stabilitaet und Beweglichkeit gleichzeitig.</p>
<p>Uebungen wie Squats, Deadlifts und Lunges sind klassische Functional-Movements, die in keinem Trainingsplan fehlen sollten. Erfahre mehr in unserem Artikel <a href="/blog/functional-training-im-alltag">Functional Training: Warum es dein Leben veraendert</a>.</p>

<h2 id="trainingsplan-erstellen">So erstellst du deinen Trainingsplan</h2>
<p>Ein guter Trainingsplan beruecksichtigt dein Ziel, dein Level und deine verfuegbare Zeit. Hier sind bewaehrte Strukturen:</p>
<ul>
<li><strong>Anfaenger (0-6 Monate):</strong> 3x pro Woche Ganzkoerper, 45-60 Minuten</li>
<li><strong>Fortgeschrittene (6-24 Monate):</strong> 4x pro Woche Upper/Lower Split, 60-75 Minuten</li>
<li><strong>Erfahrene (2+ Jahre):</strong> 5x pro Woche Push/Pull/Legs, 60-90 Minuten</li>
</ul>
<p>Wichtig: Jeder Plan braucht progressive Ueberlastung. Das bedeutet, dass du Gewicht, Wiederholungen oder Saetze regelmaessig steigerst. Ohne diese Steigerung stagniert dein Fortschritt.</p>

<h2 id="haeufige-fehler">Die 5 haeufigsten Fehler im Training</h2>
<ol>
<li><strong>Kein Plan:</strong> Ohne Struktur trainierst du ziellos. Schreib auf, was du tust.</li>
<li><strong>Zu viel zu schnell:</strong> Progressive Ueberlastung bedeutet kleine Schritte, nicht riesige Spruenge.</li>
<li><strong>Regeneration ignorieren:</strong> Muskeln wachsen in der Ruhephase, nicht im Training.</li>
<li><strong>Ernaehrung vernachlaessigen:</strong> Training ohne Ernaehrung ist wie Autofahren ohne Benzin.</li>
<li><strong>Form opfern:</strong> Saubere Technik schlaegt immer schweres Gewicht.</li>
</ol>

<h2 id="ernaehrung-und-training">Ernaehrung und Training</h2>
<p>Dein Training ist nur so gut wie deine Ernaehrung. Protein ist der Baustoff fuer Muskelwachstum, Kohlenhydrate liefern Energie, und gesunde Fette unterstuetzen die Hormonproduktion. Eine ausgewogene Ernaehrung ist kein Luxus, sondern Voraussetzung fuer Ergebnisse.</p>
<p>Wie du deinen individuellen Bedarf berechnest, erklaeren wir in <a href="/blog/proteinbedarf-berechnen">Proteinbedarf berechnen: So viel Eiweiss brauchst du wirklich</a>. Einen umfassenden Ueberblick findest du in unserem <a href="/blog/sporternaehrung-der-komplette-guide">Sporternaehrung-Guide</a>.</p>

<h2 id="regeneration">Regeneration: Der unterschaetzte Faktor</h2>
<p>Ohne Regeneration kein Muskelwachstum. Dein Koerper braucht Zeit, um sich an die Trainingsbelastung anzupassen. Schlaf, aktive Erholung und Wellness-Massnahmen wie Sauna beschleunigen diesen Prozess.</p>
<p>Warum Sauna nach dem Training so effektiv ist und worauf du achten musst, liest du in unserem Artikel <a href="/blog/sauna-nach-dem-training">Sauna nach dem Training</a>.</p>

<h2 id="fazit">Dein naechster Schritt</h2>
<p>Das beste Training ist das, das du regelmaessig machst. Starte mit einem einfachen Plan, bleib konsequent und steigere dich schrittweise. Bei Casa Sports begleiten wir dich auf diesem Weg: mit individueller Betreuung, einem modernen Studio und einer Community, die dich motiviert.</p>
`,
  },

  // ─── PILLAR: SPORTERNAEHRUNG ──────────────────────────────────
  {
    slug: "sporternaehrung-der-komplette-guide",
    title: "Sporternaehrung: Alles was du wissen musst",
    excerpt: "Makros, Timing, Supplements: Der komplette Guide zur Sporternaehrung. Von der Grundlage bis zur Optimierung.",
    coverImage: "/images/casasports-bodytransformation.webp",
    category: "ernaehrung",
    tags: ["Ernaehrung", "Protein", "Makros", "Meal Prep", "Supplements"],
    author: "naim-obeid",
    publishedAt: "2026-02-20",
    updatedAt: "2026-03-10",
    featured: false,
    isPillar: true,
    topicCluster: "sporternaehrung",
    relatedSlugs: ["proteinbedarf-berechnen", "fitness-training-der-komplette-guide"],
    seo: {
      title: "Sporternaehrung Guide 2026: Makros, Timing & Supplements | Casa Sports",
      description: "Der komplette Guide zur Sporternaehrung. Lerne, wie du Protein, Kohlenhydrate und Fette optimal fuer dein Training einsetzt.",
    },
    content: `
<p>80% deiner Ergebnisse passieren in der Kueche. Egal ob Muskelaufbau, Fettabbau oder Ausdauer: Ohne die richtige Ernaehrung bleibst du hinter deinem Potenzial. Dieser Guide zeigt dir, wie Sporternaehrung wirklich funktioniert.</p>

<h2 id="grundlagen">Grundlagen der Sporternaehrung</h2>
<p>Sporternaehrung basiert auf drei Makronaehrstoffen: Protein, Kohlenhydrate und Fette. Jeder hat eine spezifische Funktion im Koerper, und das richtige Verhaeltnis haengt von deinem Trainingsziel ab.</p>
<ul>
<li><strong>Protein:</strong> Baustoff fuer Muskeln. 1,6-2,2g pro Kilogramm Koerpergewicht taeglich.</li>
<li><strong>Kohlenhydrate:</strong> Energielieferant Nummer 1. Besonders wichtig vor und nach dem Training.</li>
<li><strong>Fette:</strong> Essentiell fuer Hormone und Zellgesundheit. Mindestens 0,8g pro Kilogramm.</li>
</ul>

<h2 id="kalorien-verstehen">Kalorien verstehen</h2>
<p>Dein Koerper braucht eine bestimmte Menge Energie taeglich. Dieser Grundumsatz plus deine Aktivitaet ergibt deinen Gesamtbedarf. Willst du Muskeln aufbauen, brauchst du einen leichten Ueberschuss (200-400 kcal). Willst du Fett verlieren, ein moderates Defizit (300-500 kcal).</p>
<p>Extremes Hungern ist kontraproduktiv. Dein Koerper faehrt den Stoffwechsel herunter, baut Muskeln ab und speichert Fett. Ein moderates Defizit mit ausreichend Protein schuetzt deine Muskelmasse waehrend der Diaet.</p>

<h2 id="protein-der-schluessel">Protein: Der Schluessel zum Muskelaufbau</h2>
<p>Protein ist der wichtigste Makronaehrstoff fuer Sportler. Es repariert Muskelgewebe, unterstuetzt die Regeneration und haelt dich laenger satt. Die optimale Menge liegt bei 1,6-2,2g pro Kilogramm Koerpergewicht.</p>
<p>Gute Proteinquellen sind mageres Fleisch, Fisch, Eier, Magerquark, Huelsenfruechte und Proteinpulver. Verteil dein Protein ueber 3-5 Mahlzeiten am Tag fuer optimale Verwertung. Mehr Details findest du in unserem Artikel <a href="/blog/proteinbedarf-berechnen">Proteinbedarf berechnen</a>.</p>

<h2 id="timing">Naehrstoff-Timing</h2>
<p>Wann du isst, ist weniger wichtig als was und wie viel. Trotzdem gibt es bewaehrte Strategien:</p>
<ul>
<li><strong>Pre-Workout (1-2h vorher):</strong> Kohlenhydrate + Protein fuer Energie und Schutz</li>
<li><strong>Post-Workout (innerhalb 2h):</strong> Protein + Kohlenhydrate fuer Regeneration und Glykogenauffuellung</li>
<li><strong>Abends:</strong> Casein-Protein oder Magerquark fuer die Nacht-Regeneration</li>
</ul>

<h2 id="supplements">Supplements: Was wirklich hilft</h2>
<p>Die meisten Supplements sind ueberfluessig. Nur wenige haben eine solide wissenschaftliche Grundlage:</p>
<ol>
<li><strong>Kreatin (5g/Tag):</strong> Bewaehrtes Supplement fuer Kraft und Muskelmasse. Sicher und effektiv.</li>
<li><strong>Proteinpulver:</strong> Kein Wundermittel, aber praktisch, wenn du deinen Bedarf ueber Essen nicht deckst.</li>
<li><strong>Vitamin D (im Winter):</strong> Die meisten Menschen in Deutschland sind unterversorgt.</li>
<li><strong>Omega-3:</strong> Wenn du wenig Fisch isst, kann Supplementierung sinnvoll sein.</li>
</ol>

<h2 id="meal-prep">Meal Prep: Ernaehrung planen</h2>
<p>Meal Prep ist der Gamechanger fuer konsistente Ernaehrung. Einmal pro Woche vorzukochen spart Zeit, Geld und schlechte Entscheidungen. Starte einfach: Koch 3 Proteinquellen, 2 Kohlenhydratquellen und portioniere sie in Boxen.</p>

<h2 id="fazit">Fazit</h2>
<p>Sporternaehrung muss nicht kompliziert sein. Decke deinen Proteinbedarf, iss ausreichend Gemuese, trink genug Wasser und halte deine Kalorienbilanz im Blick. Alles andere ist Feintuning. Bei Casa Sports helfen wir dir, einen Ernaehrungsplan zu erstellen, der zu deinem Leben passt.</p>
`,
  },

  // ─── PILLAR: WELLNESS & REGENERATION ──────────────────────────
  {
    slug: "wellness-und-regeneration-guide",
    title: "Wellness und Regeneration: Warum Erholung genauso wichtig ist wie Training",
    excerpt: "Sauna, Schlaf, aktive Erholung: Wie du durch gezielte Regeneration schneller Fortschritte machst und Verletzungen vermeidest.",
    coverImage: "/images/casasports-wellness-bereich-panorama.webp",
    category: "wellness",
    tags: ["Wellness", "Regeneration", "Sauna", "Schlaf", "Recovery"],
    author: "naim-obeid",
    publishedAt: "2026-03-01",
    featured: false,
    isPillar: true,
    topicCluster: "wellness-regeneration",
    relatedSlugs: ["sauna-nach-dem-training", "fitness-training-der-komplette-guide"],
    seo: {
      title: "Wellness & Regeneration Guide: Erholung fuer Sportler | Casa Sports",
      description: "Warum Regeneration genauso wichtig ist wie Training. Sauna, Schlaf, aktive Erholung und Wellness-Strategien fuer bessere Ergebnisse.",
    },
    content: `
<p>Haerter trainieren ist nicht immer die Antwort. Wer dauerhaft Fortschritte machen will, muss seinem Koerper die Regeneration geben, die er braucht. In diesem Guide zeigen wir dir, warum Erholung kein Zeichen von Schwaeche ist, sondern der Schluessel zu besseren Ergebnissen.</p>

<h2 id="warum-regeneration">Warum Regeneration so wichtig ist</h2>
<p>Muskelwachstum passiert nicht im Training, sondern in der Ruhephase danach. Waehrend des Trainings entstehen mikroskopische Risse in den Muskelfasern. In der Regenerationsphase repariert dein Koerper diese Schaeden und baut die Fasern staerker auf als zuvor. Dieser Prozess heisst Superkompensation.</p>
<p>Ohne ausreichend Regeneration haeufen sich Mikrotraumata an. Das fuehrt zu Uebertraining, Leistungsabfall und einem erhoehten Verletzungsrisiko. Die Symptome: chronische Muedigkeit, Schlafprobleme, Appetitlosigkeit und stagnierende Leistung.</p>

<h2 id="sauna-und-infrarot">Sauna und Infrarot fuer Sportler</h2>
<p>Waermebehandlungen sind eine der effektivsten Regenerationsmethoden. Die Vorteile sind wissenschaftlich belegt: verbesserte Durchblutung, beschleunigte Muskelregeneration und Reduzierung von Entzuendungen.</p>
<p>Bei Casa Sports bieten wir sowohl eine finnische KLAFS Sauna als auch eine Roeger Infrarotkabine an. Beide haben unterschiedliche Staerken. Welche Methode wann am besten ist, erklaeren wir ausfuehrlich in <a href="/blog/sauna-nach-dem-training">Sauna nach dem Training: Vorteile, Risiken und Tipps</a>.</p>

<h2 id="schlaf">Schlaf: Die beste Regeneration</h2>
<p>Schlaf ist die maechtigste Regenerationsmassnahme. Waehrend du schlaefst, schuettet dein Koerper Wachstumshormone aus, repariert Gewebe und konsolidiert Gelerntes. 7-9 Stunden pro Nacht sind das Minimum fuer Sportler.</p>
<ul>
<li><strong>Schlafzimmer kuehl halten:</strong> 16-18 Grad sind optimal</li>
<li><strong>Kein Bildschirm 1h vor dem Schlafen:</strong> Blaues Licht stoert die Melatonin-Produktion</li>
<li><strong>Feste Schlafenszeit:</strong> Dein Koerper liebt Routine</li>
<li><strong>Magnesium:</strong> Kann die Schlafqualitaet verbessern</li>
</ul>

<h2 id="aktive-erholung">Aktive Erholung</h2>
<p>An trainingsfreien Tagen ist leichte Bewegung besser als komplette Ruhe. Aktive Erholung foerdert die Durchblutung und beschleunigt den Abtransport von Stoffwechselprodukten. Spaziergaenge, leichtes Radfahren oder Yoga sind ideale Optionen.</p>

<h2 id="dehnuebungen">Mobilitaet und Stretching</h2>
<p>Regelmaessiges Dehnen und Mobilitaetstraining verbessern deine Bewegungsqualitaet und reduzieren das Verletzungsrisiko. 10 Minuten Foam Rolling und dynamisches Stretching nach dem Training machen einen grossen Unterschied.</p>

<h2 id="regenerationsplan">Dein Regenerationsplan</h2>
<ol>
<li><strong>Nach jedem Training:</strong> 5-10 Minuten Cool-Down und Stretching</li>
<li><strong>1-2x pro Woche:</strong> Sauna oder Infrarot (15-20 Minuten)</li>
<li><strong>Taeglich:</strong> 7-9 Stunden Schlaf, ausreichend Wasser (2-3 Liter)</li>
<li><strong>Woechentlich:</strong> Mindestens 1 komplett trainingsfreier Tag</li>
<li><strong>Alle 4-6 Wochen:</strong> Eine Deload-Woche mit reduziertem Volumen</li>
</ol>

<h2 id="fazit">Fazit</h2>
<p>Regeneration ist kein optionaler Bonus. Sie ist ein fester Bestandteil deines Trainingsplans. Bei Casa Sports bekommst du beides unter einem Dach: ein modernes Studio fuer intensives Training und einen Premium-Wellnessbereich fuer optimale Erholung.</p>
`,
  },

  // ─── CLUSTER: KRAFTTRAINING FUER ANFAENGER ────────────────────
  {
    slug: "krafttraining-fuer-anfaenger",
    title: "Krafttraining fuer Anfaenger: So startest du richtig",
    excerpt: "Dein Einstieg ins Krafttraining. Die wichtigsten Uebungen, Trainingsplaene und Fehler, die du vermeiden solltest.",
    coverImage: "/images/casasports-geraete.webp",
    category: "training",
    tags: ["Krafttraining", "Anfaenger", "Trainingsplan", "Grunduebungen"],
    author: "hidayet",
    publishedAt: "2026-02-15",
    featured: false,
    isPillar: false,
    topicCluster: "fitness-training",
    relatedSlugs: ["fitness-training-der-komplette-guide", "cardio-oder-krafttraining", "functional-training-im-alltag"],
    seo: {
      title: "Krafttraining fuer Anfaenger: Der Einstieg-Guide 2026 | Casa Sports",
      description: "So startest du richtig mit Krafttraining. Die besten Uebungen, ein Trainingsplan fuer Anfaenger und typische Fehler, die du vermeiden solltest.",
    },
    content: `
<p>Du willst mit Krafttraining anfangen, weisst aber nicht, wo du starten sollst? Dann bist du hier richtig. In diesem Guide bekommst du alles, was du fuer deinen Einstieg brauchst: die wichtigsten Uebungen, einen Trainingsplan und die haeufigsten Fehler.</p>

<h2 id="warum-krafttraining">Warum Krafttraining?</h2>
<p>Krafttraining ist die effektivste Trainingsform fuer Koerperkomposition. Es baut Muskeln auf, verbrennt Fett (auch in Ruhe), staerkt Knochen und Gelenke und verbessert deine Haltung. Egal ob du 20 oder 60 bist: Es ist nie zu spaet, damit anzufangen.</p>
<p>Dieser Artikel ist Teil unseres <a href="/blog/fitness-training-der-komplette-guide">kompletten Fitness-Guides</a>, in dem wir alle Trainingsmethoden im Detail erklaeren.</p>

<h2 id="grunduebungen">Die 5 Grunduebungen</h2>
<p>Diese fuenf Uebungen bilden das Fundament jedes Krafttrainingsplans. Wenn du sie beherrschst, hast du 80% abgedeckt:</p>
<ol>
<li><strong>Kniebeuge (Squat):</strong> Die Koenigin aller Uebungen. Trainiert Oberschenkel, Gesaess und Core.</li>
<li><strong>Kreuzheben (Deadlift):</strong> Trainiert die gesamte hintere Kette. Ruecken, Gesaess, hintere Oberschenkel.</li>
<li><strong>Bankdruecken (Bench Press):</strong> Die Hauptuebung fuer Brust, Schultern und Trizeps.</li>
<li><strong>Schulterpress (Overhead Press):</strong> Schultern und Trizeps. Wichtig fuer eine starke Oberkoeperstruktur.</li>
<li><strong>Rudern (Barbell Row):</strong> Der Gegenspieler zum Bankdruecken. Trainiert den gesamten Ruecken.</li>
</ol>

<h2 id="trainingsplan">Dein erster Trainingsplan</h2>
<p>Starte mit einem Ganzkoerper-Plan, dreimal pro Woche. An den Tagen dazwischen regenerierst du. So koennte dein Plan aussehen:</p>
<ul>
<li><strong>Montag:</strong> Kniebeuge 3x8, Bankdruecken 3x8, Rudern 3x8, Plank 3x30s</li>
<li><strong>Mittwoch:</strong> Kreuzheben 3x6, Schulterpress 3x8, Lat-Zug 3x10, Ausfallschritte 3x10</li>
<li><strong>Freitag:</strong> Kniebeuge 3x8, Bankdruecken 3x8, Rudern 3x8, Beinheben 3x12</li>
</ul>
<p>Starte mit einem Gewicht, das du technisch sauber fuer alle Wiederholungen schaffst. Wenn du alle Saetze mit guter Form schaffst, erhoehe das Gewicht um 2,5kg beim naechsten Mal.</p>

<h2 id="haeufige-fehler">5 Anfaenger-Fehler</h2>
<ol>
<li><strong>Zu schwer starten:</strong> Ego zuhause lassen. Technik geht vor Gewicht.</li>
<li><strong>Kein Aufwaermen:</strong> 5-10 Minuten leichtes Cardio plus Aufwaermsaetze sind Pflicht.</li>
<li><strong>Jeden Tag trainieren:</strong> Mehr ist nicht besser. Deine Muskeln brauchen Ruhe.</li>
<li><strong>Nur Spiegelmuskeln:</strong> Brust und Bizeps sind nett, aber Beine und Ruecken sind wichtiger.</li>
<li><strong>Keinen Plan haben:</strong> Ohne Plan trainierst du planlos. Schreib alles auf.</li>
</ol>

<h2 id="progression">Progressive Ueberlastung</h2>
<p>Der wichtigste Begriff im Krafttraining. Du musst deinen Koerper kontinuierlich steigern, um Fortschritte zu machen. Das kann ueber mehr Gewicht, mehr Wiederholungen oder mehr Saetze passieren. Eine einfache Regel: Wenn du alle Saetze mit der Ziel-Wiederholungszahl schaffst, erhoehe das Gewicht.</p>

<h2 id="naechste-schritte">Deine naechsten Schritte</h2>
<p>Das Wichtigste: Anfangen. Bei Casa Sports bekommst du eine kostenlose Einweisung und einen individuellen Trainingsplan. Unser Team zeigt dir die richtige Technik und begleitet dich in den ersten Wochen. Dein erstes Training geht auf uns.</p>
`,
  },

  // ─── CLUSTER: CARDIO ODER KRAFTTRAINING ───────────────────────
  {
    slug: "cardio-oder-krafttraining",
    title: "Cardio oder Krafttraining: Was bringt mehr?",
    excerpt: "Die ewige Debatte: Cardio vs. Kraft. Wir erklaeren, was die Wissenschaft sagt und wie du beides optimal kombinierst.",
    coverImage: "/images/casasports-spinning-kurs-1.webp",
    category: "training",
    tags: ["Cardio", "Krafttraining", "HIIT", "Fettabbau", "Muskelaufbau"],
    author: "jennifer",
    publishedAt: "2026-02-25",
    featured: false,
    isPillar: false,
    topicCluster: "fitness-training",
    relatedSlugs: ["fitness-training-der-komplette-guide", "krafttraining-fuer-anfaenger", "functional-training-im-alltag"],
    seo: {
      title: "Cardio vs. Krafttraining: Was ist besser? | Casa Sports",
      description: "Cardio oder Krafttraining: Was bringt mehr fuer Fettabbau und Fitness? Die Wissenschaft, Vergleich und wie du beides optimal kombinierst.",
    },
    content: `
<p>Cardio oder Kraft? Diese Frage hoeren wir im Studio jeden Tag. Die kurze Antwort: beides. Die lange Antwort liest du hier. Wir erklaeren, was die Wissenschaft sagt, und zeigen dir, wie du beides optimal in deinen Trainingsplan integrierst.</p>

<h2 id="der-vergleich">Cardio vs. Kraft: Der Vergleich</h2>
<p>Beide Trainingsformen haben unterschiedliche Staerken. Hier die Fakten:</p>
<ul>
<li><strong>Kalorienverbrennung:</strong> Cardio verbrennt waehrend des Trainings mehr Kalorien. Krafttraining erhoet aber den Grundumsatz durch Muskelmasse. Langfristig gewinnt Kraft.</li>
<li><strong>Koerperkomposition:</strong> Krafttraining formt den Koerper. Cardio allein fuehrt oft zu einem "skinny fat" Ergebnis ohne Muskeltonus.</li>
<li><strong>Herz-Kreislauf:</strong> Hier hat Cardio die Nase vorn. Regelmaessiges Ausdauertraining staerkt Herz und Lunge.</li>
<li><strong>Knochen und Gelenke:</strong> Krafttraining schuetzt besser vor Osteoporose und Gelenkproblemen.</li>
</ul>

<h2 id="fettabbau">Was ist besser fuer Fettabbau?</h2>
<p>Die ueberraschende Antwort: Krafttraining. Obwohl Cardio pro Minute mehr Kalorien verbrennt, hat Krafttraining einen entscheidenden Vorteil: den Nachbrenneffekt. Nach intensivem Krafttraining verbraucht dein Koerper noch Stunden danach erhoet Energie.</p>
<p>Ausserdem schuetzt Krafttraining waehrend einer Diaet deine Muskelmasse. Wer nur Cardio macht und Kalorien reduziert, verliert oft genauso viel Muskeln wie Fett. Das ist das Gegenteil von dem, was du willst.</p>

<h2 id="hiit">HIIT: Das Beste aus beiden Welten</h2>
<p>High Intensity Interval Training kombiniert kurze, intensive Belastungsphasen mit Erholungsphasen. 20-30 Minuten HIIT koennen die Vorteile von Cardio und Kraft vereinen. Unser Cycling-Kurs bei Casa Sports ist ein perfektes Beispiel fuer effektives HIIT.</p>

<h2 id="optimale-kombi">Die optimale Kombination</h2>
<p>Fuer die meisten Menschen ist diese Aufteilung ideal:</p>
<ul>
<li><strong>3-4x pro Woche:</strong> Krafttraining (Hauptfokus)</li>
<li><strong>2x pro Woche:</strong> Cardio (HIIT oder moderate Ausdauer)</li>
<li><strong>1x pro Woche:</strong> Aktive Erholung (Spaziergang, Yoga)</li>
</ul>
<p>Wenn du an einem Tag beides machst, trainiere zuerst Kraft, dann Cardio. So hast du volle Energie fuer die technisch anspruchsvolleren Kraftuebungen.</p>
<p>Mehr zum Thema Training findest du in unserem <a href="/blog/fitness-training-der-komplette-guide">kompletten Fitness-Guide</a>.</p>

<h2 id="fazit">Fazit</h2>
<p>Die Frage "Cardio oder Kraft?" ist falsch gestellt. Die richtige Frage ist: Wie kombiniere ich beides optimal? Krafttraining bildet das Fundament, Cardio ergaenzt. Bei Casa Sports kannst du beides unter einem Dach trainieren: von der Hantelbank bis zum Spinning-Kurs.</p>
`,
  },

  // ─── CLUSTER: FUNCTIONAL TRAINING ─────────────────────────────
  {
    slug: "functional-training-im-alltag",
    title: "Functional Training: Warum es dein Leben veraendert",
    excerpt: "Mehr als ein Fitness-Trend. Functional Training verbessert deine Bewegungsqualitaet und macht dich fit fuer den Alltag.",
    coverImage: "/images/casasports-functional-training.webp",
    category: "training",
    tags: ["Functional Training", "Mobilitaet", "Core", "Gleichgewicht"],
    author: "hidayet",
    publishedAt: "2026-03-05",
    featured: false,
    isPillar: false,
    topicCluster: "fitness-training",
    relatedSlugs: ["fitness-training-der-komplette-guide", "krafttraining-fuer-anfaenger", "cardio-oder-krafttraining"],
    seo: {
      title: "Functional Training: Uebungen und Vorteile | Casa Sports",
      description: "Functional Training macht dich fit fuer den Alltag. Erfahre, welche Uebungen du brauchst und warum funktionelles Training mehr bringt als isoliertes Maschinentraining.",
    },
    content: `
<p>Functional Training ist kein Trend. Es ist die natuerlichste Art zu trainieren. Anstatt einzelne Muskeln an Maschinen zu isolieren, trainierst du Bewegungsmuster, die du im echten Leben brauchst. Das Ergebnis: ein Koerper, der nicht nur gut aussieht, sondern auch funktioniert.</p>

<h2 id="was-ist-functional-training">Was ist Functional Training?</h2>
<p>Funktionelles Training basiert auf den sieben grundlegenden Bewegungsmustern des Menschen: Druecken, Ziehen, Hocken, Beugen, Drehen, Tragen und Gehen. Jede Uebung trainiert mehrere Muskelgruppen gleichzeitig und verbessert die Zusammenarbeit zwischen ihnen.</p>
<p>Dieser Artikel ist Teil unseres <a href="/blog/fitness-training-der-komplette-guide">kompletten Fitness-Guides</a>.</p>

<h2 id="vorteile">Die Vorteile im Ueberblick</h2>
<ul>
<li><strong>Bessere Alltagsfitness:</strong> Einkaufstueten tragen, Kinder hochheben, Treppen steigen wird leichter</li>
<li><strong>Verletzungspraevention:</strong> Staerkt stabilisierende Muskeln und Gelenke</li>
<li><strong>Verbesserte Koerperbeherrschung:</strong> Mehr Gleichgewicht, Koordination und Mobilitaet</li>
<li><strong>Zeiteffizienz:</strong> Ganzkoeperuebungen trainieren mehr Muskeln in weniger Zeit</li>
<li><strong>Kalorienverbrennung:</strong> Komplexe Bewegungen verbrauchen mehr Energie als isolierte</li>
</ul>

<h2 id="top-uebungen">Top 6 Functional Uebungen</h2>
<ol>
<li><strong>Goblet Squat:</strong> Kniebeuge mit Kurzhantel vor der Brust. Trainiert Beine, Core und Oberkoeperaufrichtung.</li>
<li><strong>Turkish Get-Up:</strong> Vom Boden aufstehen mit Gewicht ueber Kopf. Der ultimative Ganzkoepertest.</li>
<li><strong>Farmers Walk:</strong> Schwere Gewichte tragen und laufen. Griffkraft, Core-Stabilitaet, Kondition.</li>
<li><strong>Kettlebell Swing:</strong> Explosives Hueftstreck-Muster. Trainiert die gesamte hintere Kette.</li>
<li><strong>Pull-Up:</strong> Klimmzuege in verschiedenen Griffvarianten. Ruecken, Bizeps, Unterarme.</li>
<li><strong>Plank-Variationen:</strong> Core-Stabilitaet in verschiedenen Positionen. Die Basis fuer alles.</li>
</ol>

<h2 id="einstieg">So startest du</h2>
<p>Beginne mit deinem eigenen Koerpergewicht. Beherrsche die Grundbewegungen sauber, bevor du Gewicht hinzufuegst. Ein guter Einstieg:</p>
<ul>
<li>Woche 1-2: Bodyweight Squats, Push-Ups, Planks, Lunges</li>
<li>Woche 3-4: Goblet Squats, Kettlebell Deadlifts, Rows mit Band</li>
<li>Woche 5+: Kettlebell Swings, Turkish Get-Ups, Farmers Walks</li>
</ul>

<h2 id="im-studio">Functional Training bei Casa Sports</h2>
<p>Unser Functional-Bereich ist ausgestattet mit Kettlebells, Medizinbaellen, Widerstandsbaendern, TRX und Plyoboxen. Unsere Trainer zeigen dir die richtige Technik und erstellen einen Plan, der zu deinen Zielen passt.</p>
<p>Ergaenze dein Functional Training mit gezieltem <a href="/blog/krafttraining-fuer-anfaenger">Krafttraining</a> und einem durchdachten <a href="/blog/sporternaehrung-der-komplette-guide">Ernaehrungsplan</a> fuer optimale Ergebnisse.</p>

<h2 id="fazit">Fazit</h2>
<p>Functional Training macht dich nicht nur im Studio staerker, sondern im ganzen Leben. Es ist die Bruecke zwischen Training und Alltag. Probier es aus. Dein erstes Training bei Casa Sports geht auf uns.</p>
`,
  },

  // ─── CLUSTER: SAUNA NACH DEM TRAINING ─────────────────────────
  {
    slug: "sauna-nach-dem-training",
    title: "Sauna nach dem Training: Vorteile, Risiken und Tipps",
    excerpt: "Ist Sauna nach dem Training sinnvoll? Wir erklaeren die Vorteile, wann du besser darauf verzichten solltest und wie du es richtig machst.",
    coverImage: "/images/casasports-klafs-sauna.webp",
    category: "wellness",
    tags: ["Sauna", "Regeneration", "Infrarot", "Wellness", "Recovery"],
    author: "naim-obeid",
    publishedAt: "2026-03-10",
    featured: true,
    isPillar: false,
    topicCluster: "wellness-regeneration",
    relatedSlugs: ["wellness-und-regeneration-guide", "fitness-training-der-komplette-guide"],
    seo: {
      title: "Sauna nach dem Training: Vorteile & Tipps | Casa Sports",
      description: "Sauna nach dem Sport: Vorteile fuer Regeneration, Durchblutung und Wohlbefinden. Plus: Wann du besser darauf verzichten solltest.",
    },
    content: `
<p>Nach einem harten Training in die Sauna. Fuer viele ist das der perfekte Abschluss. Aber ist es wirklich sinnvoll? Und worauf solltest du achten? Wir klaeren auf: mit Fakten, nicht mit Mythen.</p>

<h2 id="vorteile">Die Vorteile von Sauna nach dem Training</h2>
<p>Waermebehandlungen nach dem Sport haben messbare Vorteile:</p>
<ul>
<li><strong>Verbesserte Durchblutung:</strong> Die Waerme weitet die Blutgefaesse. Mehr Blut erreicht die Muskeln, was den Abtransport von Stoffwechselprodukten beschleunigt.</li>
<li><strong>Muskelentspannung:</strong> Waerme loest Verspannungen und reduziert Muskelkater (DOMS). Studien zeigen eine Reduktion von bis zu 47% gegenueber keiner Nachbehandlung.</li>
<li><strong>Immunsystem:</strong> Regelmaessige Saunagaenge staerken die Abwehrkraefte. Eine finnische Langzeitstudie zeigte 27% weniger Erkaeltungen bei regelmaessigen Saunagaengern.</li>
<li><strong>Stressabbau:</strong> Die Waerme foerdert die Ausschuettung von Endorphinen und senkt den Cortisolspiegel.</li>
<li><strong>Herz-Kreislauf:</strong> Sauna trainiert das Herz-Kreislauf-System aehnlich wie moderates Cardio.</li>
</ul>
<p>Dieser Artikel ist Teil unseres <a href="/blog/wellness-und-regeneration-guide">Wellness und Regeneration Guides</a>.</p>

<h2 id="finnisch-vs-infrarot">Finnische Sauna vs. Infrarotkabine</h2>
<p>Beide Methoden haben ihre Berechtigung:</p>
<ul>
<li><strong>Finnische Sauna (80-100 Grad C):</strong> Klassisch, intensiv. Ideal fuer erfahrene Saunagaenger. Starke Kreislaufanregung, tiefes Schwitzen. Bei Casa Sports nutzen wir eine KLAFS Premium-Sauna.</li>
<li><strong>Infrarotkabine (40-60 Grad C):</strong> Sanfter, die Waerme dringt tiefer ins Gewebe ein. Besser fuer Anfaenger und Menschen mit Kreislaufproblemen. Unsere Roeger Infrarotkabine bietet gezielte Tiefenwaerme.</li>
</ul>

<h2 id="wann-nicht">Wann du NICHT in die Sauna solltest</h2>
<p>Es gibt Situationen, in denen du besser darauf verzichtest:</p>
<ol>
<li><strong>Direkt nach maximalem Krafttraining:</strong> Warte mindestens 15-20 Minuten, trink Wasser und lass den Puls runter.</li>
<li><strong>Bei Verletzungen:</strong> Akute Entzuendungen werden durch Waerme verschlimmert. Erst kuehlen, dann (nach 48h) waermen.</li>
<li><strong>Dehydriert:</strong> Sauna entzieht dem Koerper Wasser. Wer schon dehydriert reingeht, riskiert Kreislaufprobleme.</li>
<li><strong>Krank:</strong> Bei Fieber oder akuten Infekten ist Sauna tabu.</li>
</ol>

<h2 id="richtig-saunieren">So saunierst du richtig nach dem Training</h2>
<ol>
<li><strong>Warte 15-20 Minuten</strong> nach dem Training. Trink mindestens 500ml Wasser.</li>
<li><strong>Dusche kurz warm</strong> vor dem Saunagang.</li>
<li><strong>Erster Gang:</strong> 8-12 Minuten auf der mittleren Bank. Nicht uebertreiben.</li>
<li><strong>Abkuehlen:</strong> Kalt duschen oder frische Luft. Gibt dem Kreislauf den Kick.</li>
<li><strong>Ruhen:</strong> 10-15 Minuten entspannen. Hier passiert die eigentliche Regeneration.</li>
<li><strong>Optional:</strong> Ein zweiter Gang von 10-15 Minuten.</li>
<li><strong>Danach:</strong> Viel trinken und leicht essen. Dein Koerper braucht Fluessigkeit und Naehrstoffe.</li>
</ol>

<h2 id="fazit">Fazit</h2>
<p>Sauna nach dem Training ist nicht nur angenehm, sondern wissenschaftlich belegt effektiv fuer die Regeneration. Der Schluessel: richtig machen, nicht uebertreiben, und auf deinen Koerper hoeren. Bei Casa Sports findest du mit KLAFS Sauna und Roeger Infrarotkabine beides unter einem Dach.</p>
`,
  },

  // ─── CLUSTER: PROTEINBEDARF ───────────────────────────────────
  {
    slug: "proteinbedarf-berechnen",
    title: "Proteinbedarf berechnen: So viel Eiweiss brauchst du wirklich",
    excerpt: "Wie viel Protein brauchst du taeglich? Wir zeigen dir, wie du deinen individuellen Bedarf berechnest und die besten Proteinquellen.",
    coverImage: "/images/casasports-bodyhealth.webp",
    category: "ernaehrung",
    tags: ["Protein", "Ernaehrung", "Muskelaufbau", "Makros"],
    author: "naim-obeid",
    publishedAt: "2026-03-15",
    featured: false,
    isPillar: false,
    topicCluster: "sporternaehrung",
    relatedSlugs: ["sporternaehrung-der-komplette-guide", "krafttraining-fuer-anfaenger"],
    seo: {
      title: "Proteinbedarf berechnen: Rechner & Guide 2026 | Casa Sports",
      description: "Berechne deinen taeglichen Proteinbedarf. Wie viel Eiweiss brauchst du fuer Muskelaufbau, Fettabbau oder Erhalt? Mit Formel und Lebensmittel-Tabelle.",
    },
    content: `
<p>Protein ist der Baustein deiner Muskeln. Aber wie viel brauchst du wirklich? Im Internet findest du Zahlen von 0,8g bis 4g pro Kilogramm. Wir raeumen auf und zeigen dir, was die aktuelle Forschung sagt.</p>

<h2 id="grundbedarf">Der Grundbedarf</h2>
<p>Die offizielle Empfehlung der DGE liegt bei 0,8g Protein pro Kilogramm Koerpergewicht. Das reicht, um nicht krank zu werden. Fuer Sportler ist das aber viel zu wenig. Wer regelmaessig trainiert, hat einen deutlich hoeheren Bedarf.</p>
<p>Dieser Artikel gehoert zu unserem <a href="/blog/sporternaehrung-der-komplette-guide">kompletten Sporternaehrung-Guide</a>.</p>

<h2 id="berechnung">So berechnest du deinen Bedarf</h2>
<p>Die aktuelle Studienlage empfiehlt folgende Werte:</p>
<ul>
<li><strong>Muskelaufbau:</strong> 1,6-2,2g pro kg Koerpergewicht</li>
<li><strong>Fettabbau (Diaet):</strong> 2,0-2,4g pro kg Koerpergewicht (hoeher, um Muskeln zu schuetzen)</li>
<li><strong>Erhalt:</strong> 1,4-1,6g pro kg Koerpergewicht</li>
<li><strong>Ausdauersportler:</strong> 1,2-1,6g pro kg Koerpergewicht</li>
</ul>
<p><strong>Beispiel:</strong> Eine Person mit 80kg im Muskelaufbau braucht: 80 x 1,8 = 144g Protein taeglich. Das sind etwa 4-5 proteinreiche Mahlzeiten.</p>

<h2 id="beste-quellen">Die besten Proteinquellen</h2>
<p>Nicht jede Proteinquelle ist gleich. Die biologische Wertigkeit zeigt, wie gut dein Koerper das Protein verwerten kann:</p>
<ol>
<li><strong>Eier:</strong> 13g pro Stueck. Hoechste biologische Wertigkeit aller Einzellebensmittel.</li>
<li><strong>Haehnchenbrust:</strong> 31g pro 100g. Mager, vielseitig, guenstig.</li>
<li><strong>Magerquark:</strong> 12g pro 100g. Perfekt als Snack oder im Shake.</li>
<li><strong>Lachs:</strong> 20g pro 100g. Plus Omega-3-Fettsaeuren. Doppelter Nutzen.</li>
<li><strong>Linsen:</strong> 9g pro 100g (gekocht). Beste pflanzliche Quelle.</li>
<li><strong>Whey Protein:</strong> 25-30g pro Portion. Praktisch, schnell aufgenommen.</li>
</ol>

<h2 id="verteilung">Protein ueber den Tag verteilen</h2>
<p>Dein Koerper kann pro Mahlzeit etwa 30-50g Protein effektiv nutzen. Statt alles auf einmal zu essen, verteile dein Protein auf 3-5 Mahlzeiten. Ein Beispiel fuer 150g Protein:</p>
<ul>
<li><strong>Fruehstueck:</strong> 3 Eier + Vollkornbrot (25g)</li>
<li><strong>Mittag:</strong> 200g Haehnchenbrust + Reis + Gemuese (40g)</li>
<li><strong>Snack:</strong> 250g Magerquark + Beeren (30g)</li>
<li><strong>Post-Workout:</strong> Whey Shake (30g)</li>
<li><strong>Abendessen:</strong> 150g Lachs + Kartoffeln + Salat (25g)</li>
</ul>

<h2 id="mythen">3 Protein-Mythen</h2>
<ol>
<li><strong>"Zu viel Protein schadet den Nieren":</strong> Falsch. Bei gesunden Menschen gibt es dafuer keine Evidenz. Nur bei bestehender Nierenerkrankung ist Vorsicht geboten.</li>
<li><strong>"Protein macht dick":</strong> Protein hat die hoechste Saettigung aller Makros und den hoechsten thermischen Effekt. Es ist der unwahrscheinlichste Dickmacher.</li>
<li><strong>"Das Anabole Fenster":</strong> Du musst nicht innerhalb von 30 Minuten nach dem Training einen Shake trinken. Innerhalb von 2-3 Stunden reicht voellig.</li>
</ol>

<h2 id="fazit">Fazit</h2>
<p>Protein ist wichtig, aber kein Hexenwerk. Berechne deinen Bedarf, verteile ihn ueber den Tag und waehle hochwertige Quellen. Im Rahmen unseres <a href="/blog/sporternaehrung-der-komplette-guide">Ernaehrungs-Guides</a> und im Personal Training bei Casa Sports helfen wir dir, deinen individuellen Plan zu erstellen.</p>
`,
  },
]

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === categorySlug)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((p) => p.tags.includes(tag))
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.featured)
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined)
}
