import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const fitnessTrainingDerKompletteGuide = {
  slug: "fitness-training-der-komplette-guide",
  title: "Fitness-Training: Der komplette Guide für Einsteiger",
  excerpt:
    "Der vollständige Leitfaden zum Einstieg in strukturiertes Training: Was die WHO empfiehlt, wie du Kraft und Ausdauer kombinierst und wie du in 12 Wochen deine Basis legst.",
  keyTakeaway:
    "Ein solider Fitnessplan für Einsteiger deckt drei Bausteine ab: Krafttraining zwei- bis dreimal pro Woche, 150-300 Minuten moderate Ausdauerbelastung und regelmäßige Mobility. Die WHO-Empfehlung von 2020 bleibt der Goldstandard und bringt laut Evidenz den größten gesundheitlichen Nutzen pro Zeiteinheit.",
  faq: [
    {
      question: "Wie fange ich am besten an?",
      answer:
        "Starte mit einem Einführungstermin im Studio oder einem Arzt-Check, wenn du Vorerkrankungen hast. Baue dann langsam auf: drei Einheiten pro Woche à 30-45 Minuten, Ganzkörper-Krafttraining plus Cardio im Wechsel. Fokus auf saubere Technik und Konsistenz, nicht auf Volumen.",
    },
    {
      question: "Wie lange sollte eine Einheit dauern?",
      answer:
        "45 bis 60 Minuten inklusive Aufwärmen und Abkühlen sind für die meisten ideal. Kürzere, intensive Einheiten (30 Min) sind oft effektiver als lange Sessions, besonders in den ersten Wochen.",
    },
    {
      question: "Wann sehe ich erste Ergebnisse?",
      answer:
        "Nach 4 bis 6 Wochen fühlst du dich fitter, hast mehr Energie und schläfst besser. Nach 8 bis 12 Wochen sind Kraft-, Ausdauer- und Figurveränderungen messbar. Nachhaltige Ergebnisse brauchen Monate, keine Tage. Wer nach 2 Wochen aufhört, verschenkt den eigentlichen Gewinn.",
    },
    {
      question: "Soll ich jeden Tag trainieren?",
      answer:
        "Nein. Muskeln wachsen in den Pausen. 3-5 Trainingstage pro Woche plus Bewegung im Alltag sind für die meisten optimal. Jeden Tag intensiv zu trainieren führt schneller zu Übertraining als zu besseren Ergebnissen.",
    },
    {
      question: "Brauche ich separate Bauchmuskel-Einheiten?",
      answer:
        "Grundübungen wie Kniebeuge, Kreuzheben und Klimmzüge trainieren den Rumpf bereits mit. Zwei kurze gezielte Einheiten pro Woche (Planks, Dead Bugs, Pallof-Press) reichen als Ergänzung. Sichtbare Bauchmuskeln kommen primär durch niedrigen Körperfettanteil, nicht durch isoliertes Training.",
    },
    {
      question: "Kann ich zu Hause statt im Studio trainieren?",
      answer:
        "Für Einsteiger funktioniert Zuhause-Training mit Körpergewicht und ein paar Kurzhanteln gut. Nach einigen Monaten wird Progression zu Hause aber schwierig, weil Ausrüstung und Platz limitieren. Das Studio bietet Gerätevielfalt, fachliche Begleitung und die soziale Komponente, die Langzeit-Konsistenz deutlich erleichtert.",
    },
    {
      question: "Was mache ich gegen fehlende Motivation?",
      answer:
        "Konsistenz schlägt Motivation. Feste Trainingstage und -zeiten im Kalender, Trainingspartner oder Gruppenkurse, kleine messbare Ziele und kein Perfektionismus. Wer sich auf 80 Prozent konzentriert und 20 Prozent schlechte Tage akzeptiert, bleibt langfristig dabei.",
    },
    {
      question: "Ab welchem Alter ist Krafttraining sinnvoll?",
      answer:
        "Strukturiertes Krafttraining ist ab dem Jugendalter sinnvoll und bleibt bis ins hohe Alter der wichtigste Erhaltungsreiz für Muskeln und Knochen. Senioren profitieren besonders stark, weil Muskelabbau (Sarkopenie) sonst kontinuierlich voranschreitet.",
    },
  ],
  content: root([
    paragraph(
      "Fitness-Training ist keine Frage der Ästhetik, sondern der Investition in jeden zukünftigen Lebensabschnitt. Wer regelmäßig trainiert, reduziert Risiken für Herz-Kreislauf-Erkrankungen, Typ-2-Diabetes, bestimmte Krebsarten und Depressionen deutlich. Dieser Guide zeigt, wie du strukturiert einsteigst und eine Basis legst, die dir Jahrzehnte trägt."
    ),

    heading("h2", "Was Fitness-Training wirklich leisten kann"),
    paragraph(
      "Regelmäßige körperliche Aktivität ist die wirksamste Einzelmaßnahme, die ein gesunder Erwachsener für seine Lebenserwartung und -qualität ergreifen kann. Die ",
      link(
        "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
        "WHO fasst das in ihrem Factsheet"
      ),
      " zusammen: Bewegung reduziert nichtübertragbare Krankheiten, verbessert mentale Gesundheit, Schlaf und Kognition, und verlangsamt altersbedingten Leistungsabfall."
    ),
    paragraph(
      "Wer mit dem Training anfängt, erlebt diese Effekte teilweise schon nach Tagen (besserer Schlaf, mehr Energie), teilweise nach Wochen (Kraft, Ausdauer), teilweise nach Monaten (Körperzusammensetzung, Bluthochdruck, Cholesterin)."
    ),

    heading("h2", "Die drei Säulen jedes guten Fitness-Programms"),

    heading("h3", "Säule 1: Krafttraining"),
    paragraph(
      "Mindestens zwei Tage pro Woche Training aller großen Muskelgruppen, so der WHO-Konsens. Krafttraining erhält Muskelmasse (die sonst ab dem 30. Lebensjahr stetig sinkt), stärkt Knochen, verbessert Insulinempfindlichkeit und formt die Figur. Die ACSM hat 2026 ihre Empfehlungen aktualisiert: auch niedrig-volumige, aber konsistente Programme bringen den Großteil der Effekte."
    ),

    heading("h3", "Säule 2: Ausdauertraining"),
    paragraph(
      "150 bis 300 Minuten moderate Aktivität pro Woche, alternativ 75 bis 150 Minuten intensive Aktivität. Das kann sich aufteilen: drei Laufeinheiten à 30 Minuten, zwei Cycling-Kurse à 50 Minuten, 10.000 Schritte am Tag plus zwei kurze Rad-Einheiten. Wichtig ist das Gesamtvolumen, nicht die Form."
    ),

    heading("h3", "Säule 3: Mobility und Regeneration"),
    paragraph(
      "Kürzer, aber regelmäßig: 10-15 Minuten Mobility oder Stretching nach dem Training, ein bis zwei Tage komplette Pause pro Woche, ausreichend Schlaf (7-9 Stunden). Ohne diese Säule kippt das gesamte Programm schneller als viele denken."
    ),

    heading("h2", "Ein 12-Wochen-Plan für absolute Einsteiger"),

    table([
      ["Phase", "Woche", "Kraft", "Cardio", "Fokus"],
      ["Aufbau", "1-4", "3x Ganzkörper 30-40 Min", "1-2x moderat 25-35 Min", "Technik und Gewohnheit"],
      ["Progression", "5-8", "3x Ganzkörper 40-50 Min", "2x, davon 1x Intervall", "Gewicht und Wiederholungen steigern"],
      ["Konsolidierung", "9-12", "3-4x Split 45-60 Min", "2-3x unterschiedliche Intensität", "Plateaus brechen, Routine festigen"],
      ["Spezialisierung", "12+", "4x Split 45-60 Min", "2-3x zielabhängig", "Ziel-fokussierte Planung"],
    ]),

    heading("h3", "Woche 1-4: Technik und Gewohnheit"),
    paragraph(
      "Fokus: Regelmäßigkeit schaffen, Grundübungen lernen, Körper an Belastung gewöhnen."
    ),
    ul([
      "3× Krafttraining pro Woche (Ganzkörper à 30-40 Min)",
      "1-2× moderates Cardio (Fahrrad, Laufband, Schwimmen, 25-35 Min)",
      "Tägliche 10-Minuten-Mobility-Routine",
      "Keine Spitzenbelastung, lieber im 60-70% Intensitätsbereich bleiben",
    ]),

    heading("h3", "Woche 5-8: Progression einbauen"),
    paragraph(
      "Fokus: Gewichte steigern, Volumen erhöhen, erste Leistungsfortschritte messen."
    ),
    ul([
      "3× Krafttraining (leichte Gewichtssteigerung oder mehr Wiederholungen)",
      "2× Cardio, davon 1× Intervall (1 Min schnell, 2 Min moderat, 20 Min Total)",
      "Beweglichkeits-Einheit 1× pro Woche (20 Min)",
      "Wochenbilanz: Gewicht, Umfänge, Energielevel",
    ]),

    heading("h3", "Woche 9-12: Konsolidierung und Feintuning"),
    paragraph(
      "Fokus: Plateaus überwinden, Routine verfestigen, Ziel für nächste Phase definieren."
    ),
    ul([
      "3-4× Krafttraining (erste Split-Versuche möglich: Oberkörper/Unterkörper)",
      "2-3× Cardio mit unterschiedlicher Intensität",
      "1 Gruppenkurs pro Woche für Abwechslung",
      "Standortbestimmung: Ziele für die nächsten drei Monate anpassen",
    ]),

    heading("h2", "Typische Fehler im ersten Jahr"),
    ul([
      "Zu viel zu schnell: Wer sofort fünfmal pro Woche intensiv trainiert, überlastet und hört meist nach vier Wochen wieder auf.",
      "Fehlende Progression: Immer die gleichen Gewichte bedeuten keine neuen Reize. Jede Woche kleine Steigerungen.",
      "Kein Trainingsplan: Zufälliges Herumprobieren bringt nicht die gleichen Fortschritte wie strukturiertes Training.",
      "Ernährung ignorieren: Training ohne passende Ernährung limitiert Fortschritt deutlich.",
      "Vergleich mit anderen: Fortschritt ist individuell, social-media-Vergleiche demotivieren.",
      "Keine Pausen: Muskeln wachsen in der Erholung, nicht im Training.",
    ]),

    heading("h2", "Die drei häufigsten Ziele und ihre Umsetzung"),

    heading("h3", "Ziel: Abnehmen"),
    ul([
      "Moderates Kaloriendefizit (300-500 kcal unter Tagesbedarf)",
      "Protein hoch halten (1,6-2,2 g/kg) zum Muskelerhalt",
      "50:50-Mischung Kraft und Cardio",
      "Schritte im Alltag hoch (8-12k pro Tag)",
      "Realistischer Fortschritt: 0,5-1 kg pro Woche",
    ]),

    heading("h3", "Ziel: Muskelaufbau"),
    ul([
      "Leichter Kalorienüberschuss (200-400 kcal über Bedarf)",
      "Protein 1,8-2,2 g/kg, Kohlenhydrate ausreichend für Energie",
      "70:30-Mischung Kraft und Cardio",
      "Progression im Krafttraining penibel verfolgen",
      "Realistischer Fortschritt: 0,25-0,5 kg Muskelmasse pro Monat",
    ]),

    heading("h3", "Ziel: Fitness erhalten, gesund älter werden"),
    ul([
      "Kalorienneutral (Erhaltungsbedarf)",
      "Protein 1,2-1,6 g/kg, ausgewogene Mischkost",
      "WHO-Basis: 150-300 Min moderate Aktivität plus 2× Kraft",
      "Beweglichkeit und Balance nicht vergessen",
      "Fokus auf Konsistenz statt Maximum",
    ]),

    heading("h2", "Trainingspläne: Solo, im Studio oder mit Trainer?"),
    paragraph(
      "Alle drei Wege funktionieren. ",
      bold("Solo zu Hause"),
      " ist günstig, erfordert aber Selbstdisziplin und limitiert Ausrüstung. ",
      bold("Studio mit eigenem Plan"),
      " bietet Gerätevielfalt und Atmosphäre, eigener Plan bedeutet aber eigene Verantwortung für Progression. ",
      bold("Persönlicher Trainer"),
      " liefert die höchste Qualität und Ergebnisgeschwindigkeit, ist aber entsprechend teurer."
    ),
    paragraph(
      "Bei Casa Sports bekommst du im ",
      bold("Einführungstermin"),
      " einen strukturierten Basisplan und Geräte-Einweisung, ohne extra Kosten. Für tiefergehende Begleitung bieten wir Personal Training."
    ),

    heading("h2", "Wie du dranbleibst: Die 80/20-Regel"),
    paragraph(
      "Langfristig dabeibleiben ist wichtiger als jeden Trainingstag optimal zu nutzen. Folgende Muster helfen:"
    ),
    ul([
      "Feste Trainingstage und -zeiten im Kalender, nicht 'wenn ich Zeit habe'.",
      "Trainingspartner oder Gruppenkurs als soziale Verpflichtung.",
      "Kleine messbare Ziele (3 Monate Plan, dann neu bewerten).",
      "Protokollieren: Ohne Daten kein Fortschritt sichtbar.",
      "Schlechte Tage akzeptieren, nicht aufgeben. 80% Konsistenz schlägt perfekte 20%.",
      "Gute Ausrüstung, die du gern nutzt (Sportschuhe, Trainingshose, Musik)",
    ]),

    heading("h2", "Was bei Casa Sports für dich dabei ist"),
    paragraph(
      "Unsere ",
      bold("All-in-Mitgliedschaft"),
      " deckt alles ab, was du für strukturiertes Training brauchst: modernster Kraftbereich, Cardio-Bereich, Functional Area, über 30 Kurse pro Woche (Cycling, Functional, Zirkel, Power-Kurse), Wellness-Bereich mit KLAFS-Sauna und Roeger Infrarot, persönlicher Einführungstermin, Trainerfläche."
    ),
    paragraph(
      "Wer tiefergehende Begleitung möchte, bekommt ",
      bold("Personal Training"),
      " oder ",
      bold("Ernährungsberatung"),
      " als Option dazu. Für den kompletten Transformations-Prozess gibt es das ",
      link("/mein-neues-ich", "12-Wochen-Programm Mein Neues Ich", false),
      "."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Fitness-Training für Einsteiger funktioniert nach einem einfachen Rezept: zwei bis drei Krafteinheiten, zwei bis drei Cardio-Einheiten und ein wenig Mobility pro Woche. Die WHO-Empfehlungen geben den Rahmen, die ACSM-Leitlinien die Details. Wer das drei Monate konsequent durchzieht, hat die Grundlage für das gesamte weitere Trainingsleben."
    ),
    paragraph(
      "Starte bei uns mit einem kostenlosen ",
      link("/probetraining", "Probetraining", false),
      ". Unsere Trainer zeigen dir das Studio und machen dir einen ersten Plan."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
          "WHO Factsheet: Physical Activity"
        ),
      ],
      [
        link(
          "https://iris.who.int/server/api/core/bitstreams/faa83413-d89e-4be9-bb01-b24671aef7ca/content",
          "WHO Guidelines on Physical Activity and Sedentary Behaviour (PDF)"
        ),
      ],
      [
        link(
          "https://acsm.org/resistance-training-guidelines-update-2026/",
          "ACSM Resistance Training Guidelines Update 2026"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/",
          "WHO 2020 Guidelines: Scientific Background"
        ),
      ],
    ]),
  ]),
}
