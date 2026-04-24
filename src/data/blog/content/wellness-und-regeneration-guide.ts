import { root, paragraph, heading, ul, ol, bold, link, text } from "../lexical-builder"

export const wellnessUndRegenerationGuide = {
  slug: "wellness-und-regeneration-guide",
  title: "Wellness und Regeneration: Der vollständige Guide",
  excerpt:
    "Warum Regeneration genauso wichtig ist wie Training, welche Strategien wirklich wirken und wie du Übertraining erkennst - basierend auf aktuellen Reviews zu Schlaf und Erholung.",
  keyTakeaway:
    "Regeneration ist die Phase, in der dein Körper aus Training stärker wird. Die wichtigsten Hebel sind sieben bis neun Stunden Schlaf, aktive Erholung, gezielte Wärme- oder Kältereize und Stress-Management. Wer über Wochen zu wenig schläft oder Ruhetage überspringt, riskiert Leistungsabfall, Infekte und Übertrainingssyndrom.",
  faq: [
    {
      question: "Wie viel Schlaf brauche ich bei regelmäßigem Training?",
      answer:
        "Sieben bis neun Stunden sind der Richtwert. Aktuelle Reviews zeigen: Schlafmangel reduziert Glykogen-Nachschub, erhöht die Herzfrequenz bei Belastung und senkt die VO2max messbar. Sportler profitieren oft von 30-60 Minuten mehr Schlaf als Durchschnittsmenschen, besonders in intensiven Trainingsphasen.",
    },
    {
      question: "Sauna oder Kältetherapie, was ist besser?",
      answer:
        "Beides wirkt, aber unterschiedlich. Wärme unterstützt Entspannung, Durchblutung und langfristige Herz-Kreislauf-Anpassungen. Kälte reduziert akute Entzündung und subjektiven Muskelkater, kann aber Muskelaufbau direkt nach Krafttraining dämpfen. Faustregel: Sauna bei Fokus auf Regeneration und Muskelaufbau, Kälte bei akuten Wettkämpfen oder Turnier-Pausen. Details im ",
      answer_link: "/blog/sauna-nach-dem-training",
    },
    {
      question: "Aktive oder passive Regeneration?",
      answer:
        "Eine Mischung ist optimal. Passives Ruhen gibt dem Nervensystem tiefe Erholung, aktive Erholung wie lockeres Radeln oder Spazieren fördert Durchblutung und beschleunigt Stoffwechsel-Abbau. Faustregel: 60-70% der Regeneration passiv, 30-40% aktiv mit sehr niedriger Intensität.",
    },
    {
      question: "Wie erkenne ich Übertraining?",
      answer:
        "Typische Zeichen: anhaltende Müdigkeit trotz Ausschlafen, schlechter Schlaf, Leistungsabfall trotz gleichbleibendem Training, häufige Infekte, Reizbarkeit, erhöhte Ruheherzfrequenz (5+ Schläge über Normal) und reduzierte Herzfrequenzvariabilität. Frühzeichen ernst nehmen, eine Woche richtige Pause ist besser als drei Monate Leistungstief.",
    },
    {
      question: "Wann ist ein kompletter Ruhetag Pflicht?",
      answer:
        "Mindestens ein Tag komplette Pause pro Woche. Bei intensivem Training (fünf bis sechs Einheiten pro Woche) eher zwei. Aktive Erholung wie Spaziergang oder lockeres Radeln ist an Ruhetagen erlaubt und oft sogar hilfreich.",
    },
    {
      question: "Was ist mit Massage, Foam Rolling und Stretching?",
      answer:
        "Alle drei haben moderate Evidenz für subjektives Wohlbefinden und reduzierten Muskelkater. Foam Rolling und Stretching sind kostenlos und einfach einsetzbar, Massage teurer, aber besonders bei hartem Training sinnvoll. Keiner dieser Reize ersetzt Schlaf oder Ernährung, alle sind Feinschliff auf solider Basis.",
    },
    {
      question: "Beeinflusst Stress die Regeneration?",
      answer:
        "Erheblich. Chronischer Stress erhöht Cortisol dauerhaft, das blockiert Muskelproteinsynthese, stört Schlaf und erhöht den Bedarf an Ruhetagen. Wer im Job gerade durch eine intensive Phase geht, sollte das Trainingsvolumen reduzieren, nicht konstant halten.",
    },
    {
      question: "Hilft Alkohol beim Entspannen nach dem Training?",
      answer:
        "Nein. Alkohol reduziert Muskelproteinsynthese für bis zu 24 Stunden, stört Tiefschlaf, dehydriert und hemmt die körpereigene Regeneration. Ein Bier nach dem Training ist kein Katastrophe, aber auch definitiv kein Regenerationshelfer.",
    },
  ],
  content: root([
    paragraph(
      "Regeneration ist die oft unterschätzte Hälfte jedes Trainingsplans. In den Pausen zwischen Einheiten passiert der eigentliche Muskel- und Leistungsaufbau, dort wachsen Sehnen, konsolidiert sich das Nervensystem, füllen sich Glykogen-Speicher. Wer Training priorisiert, aber Regeneration vernachlässigt, erlebt früher oder später einen Leistungsknick. Dieser Guide zeigt, wie du systematisch regenerierst."
    ),

    heading("h2", "Warum Regeneration der eigentliche Wachstumsreiz ist"),
    paragraph(
      "Während des Trainings verursachst du mikroskopische Muskelfaser-Schäden, verbrauchst Glykogen, belastest das Nervensystem und das Immunsystem. Kein Fortschritt ohne diesen Reiz. Aber: Der tatsächliche Aufbau passiert erst in der Erholung. Schlaf, Ernährung und strategische Pausen entscheiden, wie effizient dein Körper den Trainingsreiz in Leistung und Muskelmasse übersetzt."
    ),
    paragraph(
      "Wer konstant zu wenig regeneriert, kumuliert Ermüdung. Anfangs unmerklich, nach Wochen als schlechter Schlaf, erhöhte Infektanfälligkeit, dann als Leistungsabfall. Im Extremfall als Übertrainingssyndrom, das Monate zur Rückbildung braucht."
    ),

    heading("h2", "Was die aktuelle Forschung zu Schlaf und Übertraining zeigt"),
    paragraph(
      "Die am besten belegte Regenerationssäule ist Schlaf. Eine 2024 im Journal Cureus erschienene ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC11015874/",
        "Literature Review zu Schlaf und Übertrainingssyndrom"
      ),
      " zeigt klar: Chronischer Schlafmangel ist ein zentraler Risikofaktor für Übertraining. Die Mechanismen sind vielfältig: reduzierte Glykogen-Speicherung, gestörte Ausschüttung von Wachstumshormonen, verschlechterte emotionale Regulation."
    ),
    paragraph(
      "Ein 2025 veröffentlichter ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC12010411/",
        "Review zu molekularen Mechanismen von Übertraining"
      ),
      " beschreibt zusätzliche Pfade: Glykogen-Depletion, Zytokin-Dysregulation, oxidativer Stress und Veränderungen im autonomen Nervensystem. Wichtig: Die Unterscheidung zwischen Overreaching (kurzzeitige Überlastung, mit Pause reversibel) und Overtraining Syndrome (länger anhaltend, braucht Monate) ist klinisch bedeutsam."
    ),

    heading("h2", "Die 5 Säulen guter Regeneration"),

    heading("h3", "Säule 1: Schlaf"),
    paragraph(
      "Der wichtigste Einzelhebel überhaupt. 7-9 Stunden pro Nacht, regelmäßige Zeiten, dunkles und kühles Schlafzimmer, kein Bildschirm eine Stunde vorher, Schlafhygiene ernst nehmen. Wachstumshormon wird vor allem im Tiefschlaf ausgeschüttet, zu wenig Schlaf blockiert direkt die körperliche Reparatur."
    ),

    heading("h3", "Säule 2: Ernährung"),
    paragraph(
      "Ausreichend Kalorien (kein Dauer-Defizit), Protein auf drei bis fünf Mahlzeiten verteilt, Kohlenhydrate passend zum Trainingspensum, genug Flüssigkeit. Wer regelmäßig unter Energieverfügbarkeit trainiert, riskiert hormonelle Dysregulation und schlechtere Regeneration."
    ),

    heading("h3", "Säule 3: Aktive und passive Erholung"),
    paragraph(
      "Mindestens ein kompletter Ruhetag pro Woche, an intensiven Wochen zwei. Aktive Erholung an manchen Tagen: 30-45 Minuten Spaziergang, lockeres Radeln oder leichtes Schwimmen. Diese niedrig-intensive Bewegung fördert Durchblutung und beschleunigt Stoffwechsel-Abbau."
    ),

    heading("h3", "Säule 4: Wärme und Kälte"),
    paragraph(
      "Sauna (siehe ",
      link("/blog/sauna-nach-dem-training", "unseren Sauna-Guide", false),
      ") unterstützt Regeneration und Herz-Kreislauf-Anpassungen. Eisbäder reduzieren akute Entzündung und Muskelkater. Für Hypertrophie-Phasen lieber Wärme, für akute Wettkampfpausen Kälte. Bei Casa Sports stehen beide Varianten zur Verfügung, KLAFS Sauna und kühle Tauchzone."
    ),

    heading("h3", "Säule 5: Stress-Management"),
    paragraph(
      "Chronischer Stress aus Beruf oder Privatleben addiert sich zum Trainingsstress. Cortisol bleibt erhöht, Schlaf wird schlechter, Regeneration leidet. Atemübungen, Meditation, Zeit in der Natur, klare Trennung zwischen Arbeit und Freizeit sind keine Esoterik, sondern Leistungsfaktoren."
    ),

    heading("h2", "Praktische Wochenstruktur für verschiedene Trainingshäufigkeiten"),

    heading("h3", "3 Trainingstage pro Woche (Einsteiger)"),
    ul([
      "Mo, Mi, Fr Training",
      "Di: Spaziergang 30-45 Min + Mobility 15 Min",
      "Do: Komplette Pause oder lockeres Schwimmen",
      "Sa: Optional Sauna oder Gruppenkurs",
      "So: Komplette Pause, Familien-/Freizeit-Aktivitäten",
    ]),

    heading("h3", "5 Trainingstage pro Woche (Fortgeschritten)"),
    ul([
      "Mo: Kraft, Di: Cardio, Mi: Pause (Mobility), Do: Kraft, Fr: Cardio",
      "Sa: Aktive Erholung (Wandern, Radeln) + Sauna",
      "So: Komplette Pause, 10-12 Stunden Schlafzeit einplanen",
      "Mindestens ein Abend pro Woche ohne Bildschirm",
    ]),

    heading("h3", "6+ Trainingstage (ambitioniert)"),
    ul([
      "Einen Ruhetag fix im Kalender, nicht verhandelbar",
      "Deload-Woche alle 6-8 Wochen: Volumen um 30-50% reduzieren",
      "Schlaf-Tracking (auch einfach per App) zur Früherkennung von Problemen",
      "Regelmäßige Massage oder Physio-Besuche",
      "Stress-Management als fester Baustein (Atemübung, Meditation)",
    ]),

    heading("h2", "Regenerations-Strategien im Detail"),

    heading("h3", "Foam Rolling"),
    paragraph(
      "10-15 Minuten, Fokus auf große Muskelgruppen, Bereiche mit Verspannung länger bearbeiten. Nicht schmerzhaft, sondern deutlich aber erträglich. Am effektivsten nach dem Training oder an Ruhetagen."
    ),

    heading("h3", "Dehnen"),
    paragraph(
      "Statisch: 20-30 Sekunden pro Muskelgruppe, nach dem Training. Dynamisch (Mobility): vor dem Training, 5-10 Minuten. Reines statisches Dehnen vor dem Training reduziert Kraftleistung um einige Prozent, ist also kontraproduktiv für Kraftsport."
    ),

    heading("h3", "Kompressionskleidung"),
    paragraph(
      "Kleine, aber konsistente Effekte auf subjektive Erholung. Kein Must-have, aber für lange Reisen oder sehr intensives Training einen Versuch wert."
    ),

    heading("h3", "Atemübungen"),
    paragraph(
      "5-10 Minuten Box-Breathing (4 Sek ein, 4 halten, 4 aus, 4 halten) aktivieren den Parasympathikus, senken Puls und Cortisol. Besonders abends zum Runterfahren wirksam."
    ),

    heading("h2", "Warnzeichen für Überlastung"),
    ul([
      "Schlechter Schlaf trotz Erschöpfung: Stress und Cortisol halten wach.",
      "Erhöhte Ruheherzfrequenz (5+ Schläge über Normal) über mehrere Tage.",
      "Anhaltende Lustlosigkeit gegenüber Training, das sonst Spaß macht.",
      "Häufige kleine Infekte, besonders in den oberen Atemwegen.",
      "Leistungsrückgang trotz konstantem oder reduziertem Volumen.",
      "Reizbarkeit, Stimmungsschwankungen, sozialer Rückzug.",
      "Sehr starker Muskelkater, der länger als 3-4 Tage anhält.",
      "Gelenkschmerzen, die ohne klaren Grund auftreten.",
    ]),
    paragraph(
      "Bei mehreren dieser Zeichen zusammen: Eine komplette Trainingspause von 7-14 Tagen ist oft der beste Schritt. Gefolgt von einer Deload-Woche mit 50% Volumen, dann schrittweise zurück ins normale Training."
    ),

    heading("h2", "Was Casa Sports für deine Regeneration bietet"),
    paragraph(
      "Unser Wellness-Bereich ist mehr als ein Add-on: ",
      bold("KLAFS Premium Sauna"),
      ", ",
      bold("Roeger Infrarotkabine"),
      ", ",
      bold("kühle Abkühlzone"),
      " und eine ruhige Ruheebene. Alles in der All-in-Mitgliedschaft enthalten, also ohne Aufpreis nutzbar."
    ),
    paragraph(
      "Für strukturierte Regenerationsplanung bieten wir Beratung: Welche Mischung aus Training, Wärme, Kälte und Pause passt zu deinem Leben und Ziel. Mehr Details auf unserer ",
      link("/wellness", "Wellness-Seite", false),
      "."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Regeneration ist kein Luxus, sondern der Multiplikator deines Trainings. Sieben bis neun Stunden Schlaf, ausreichend Protein, aktive und passive Erholungseinheiten und bewusstes Stress-Management bringen langfristig mehr Fortschritt als jede zusätzliche Trainingseinheit. Wer die Säulen dieses Guides umsetzt, hält Leistung stabil, beugt Verletzungen vor und holt aus seinem Training das Maximum heraus."
    ),
    paragraph(
      "Probier den Wellness-Bereich bei uns aus: ",
      link("/probetraining", "Kostenloses Probetraining buchen", false),
      " und Sauna, Infrarot und Wellness direkt mit nutzen."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC11015874/",
          "Impact of Inadequate Sleep on Overtraining Syndrome (2024)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC12010411/",
          "Understanding Overtraining Syndrome: Molecular Mechanisms (2025)"
        ),
      ],
      [
        link(
          "https://www.mdpi.com/2077-0383/14/21/7606",
          "Sleep and Athletic Performance: Multidimensional Review (MDPI 2025)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC5019445/",
          "Diagnosis and Prevention of Overtraining Syndrome"
        ),
      ],
    ]),
  ]),
}
