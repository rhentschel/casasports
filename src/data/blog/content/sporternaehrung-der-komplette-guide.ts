import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const sporternaehrungDerKompletteGuide = {
  slug: "sporternaehrung-der-komplette-guide",
  title: "Sporternährung: Der komplette Guide für aktive Menschen",
  excerpt:
    "Der vollständige Leitfaden für Sporternährung: Kohlenhydrate, Protein, Fette, Timing und Hydration - praxisnah erklärt auf Basis aktueller ISSN- und ACSM-Empfehlungen.",
  keyTakeaway:
    "Gute Sporternährung hat drei Hebel: ausreichend Protein für Regeneration (1,6 bis 2,2 g/kg), Kohlenhydrate passend zum Trainingsumfang (3 bis 12 g/kg je nach Intensität) und genug Flüssigkeit über den Tag. Timing ist wichtig, aber sekundär zur Gesamtqualität der Ernährung.",
  faq: [
    {
      question: "Was esse ich vor dem Training?",
      answer:
        "Ein bis zwei Stunden vor dem Training eine leichte, kohlenhydratbetonte Mahlzeit mit etwas Protein: Haferflocken mit Quark, Reis mit Huhn, Brot mit Ei. Nahe am Training (30 Min) lieber kleinere, leicht verdauliche Snacks wie Banane, Reiswaffeln oder eine kleine Portion Haferschleim. Die konkrete Menge hängt von der Dauer und Intensität des Workouts ab.",
    },
    {
      question: "Und nach dem Training?",
      answer:
        "Eine ausgewogene Mahlzeit mit Protein und Kohlenhydraten innerhalb von zwei Stunden. Der Mythos vom anabolen Fenster von 30 Minuten ist überholt, aber nicht stundenlang warten. Ideal: 20-40 g Protein plus komplexe Kohlenhydrate (Reis, Kartoffeln, Vollkorn) plus Gemüse. Bei hartem Training oder zwei Einheiten am Tag auch schneller.",
    },
    {
      question: "Wie viele Mahlzeiten pro Tag sind optimal?",
      answer:
        "Drei bis fünf Hauptmahlzeiten plus ein bis zwei Snacks passen für die meisten. Wichtiger als die exakte Anzahl ist, dass Protein über den Tag verteilt wird (drei bis fünf Portionen mit je 20-40 g) und die Gesamtqualität stimmt. Intermittent Fasting funktioniert auch, erfordert aber mehr Planung, um die Proteinmenge in den kürzeren Essfenstern unterzubekommen.",
    },
    {
      question: "Muss ich Kalorien zählen?",
      answer:
        "Am Anfang hilft das Tracken für zwei bis vier Wochen, um ein Gefühl für Portionen zu bekommen. Langfristig ist Zählen unnötig, sobald du weißt, wie deine Mahlzeiten aussehen sollen. Zwei einfache Regeln ersetzen oft tausend Kalorien-Apps: Handteller Protein pro Mahlzeit, Faustgröße Kohlenhydrate bei Trainingstagen.",
    },
    {
      question: "Welche Supplements sind wirklich sinnvoll?",
      answer:
        "Drei Supplements haben solide Evidenz: Protein-Pulver als Ergänzung, Kreatin-Monohydrat (3-5 g täglich) für Kraft und Muskelaufbau, Omega-3 (1-2 g EPA+DHA) bei wenig Fisch im Speiseplan. Vitamin D im Winter je nach Blutwert. Alles andere ist Feinschliff oder Marketing.",
    },
    {
      question: "Wie viel Wasser brauche ich?",
      answer:
        "30-40 ml pro Kilo Körpergewicht täglich als Basis, bei Training plus 500-1000 ml pro Stunde belastung. Wer schwer schwitzt (Saunagänge, heißes Wetter, intensive Intervalle) braucht mehr. Indikator: heller Urin, kein Durstgefühl. Vorsicht bei extremen Mengen, das ist selten notwendig und führt zu Elektrolyt-Störungen.",
    },
    {
      question: "Was passt wann: Low-Carb, High-Carb, zyklisch?",
      answer:
        "Für reine Gesundheit und moderates Training reicht eine ausgewogene Mischkost. Wer hart Ausdauer trainiert, profitiert von höherer Kohlenhydrat-Zufuhr (5-10 g/kg). Wer Fett abbauen will, kann zyklisch arbeiten (Kohlenhydrate hauptsächlich an Trainingstagen). Reine Low-Carb-Ansätze schränken die Leistung bei hochintensivem Training deutlich ein.",
    },
    {
      question: "Muss ich bio essen und alle Zusatzstoffe meiden?",
      answer:
        "Nein. Was stimmen muss: Kalorien, Makronährstoffe, ausreichend Gemüse und ausreichend Protein. Bio ist Feinschliff, nicht Grundlage. Wer 80% seiner Ernährung aus unverarbeiteten Lebensmitteln deckt, macht den Großteil richtig, egal ob Bio oder konventionell.",
    },
  ],
  content: root([
    paragraph(
      "Sporternährung ist kein Hexenwerk und auch keine Hochwissenschaft. Wer ein paar Grundregeln kennt und in den Alltag einbaut, holt aus dem Training deutlich mehr raus, regeneriert besser und hält das Gewicht dort, wo es sein soll. Dieser Guide geht die wichtigsten Hebel durch, basierend auf aktuellen Empfehlungen von ACSM, ISSN und anderen Fachgesellschaften."
    ),

    heading("h2", "Makronährstoffe im Überblick"),

    table([
      ["Nährstoff", "Bedarf pro kg / Tag", "Funktion", "Hauptquellen"],
      ["Protein", "1,4 - 2,2 g", "Muskelaufbau und -reparatur", "Fleisch, Fisch, Eier, Quark, Hülsenfrüchte"],
      ["Kohlenhydrate", "3 - 12 g", "Energie fürs Training", "Reis, Haferflocken, Kartoffeln, Obst"],
      ["Fett", "0,8 - 1,2 g", "Hormone, Vitamine, Zellbau", "Olivenöl, Nüsse, Avocado, fetter Fisch"],
      ["Wasser", "30 - 40 ml", "Alles", "Wasser, Tee, Mineralwasser"],
    ]),

    heading("h2", "Die drei Makronährstoffe im Überblick"),

    heading("h3", "Protein: der Baustein"),
    paragraph(
      "Protein repariert Muskelschäden, baut neue Muskelmasse auf und hält in Diäten die Substanz. Aktive Menschen brauchen 1,4 bis 2,2 Gramm pro Kilogramm Körpergewicht pro Tag, verteilt auf drei bis fünf Mahlzeiten mit je 20 bis 40 Gramm. Details im ",
      link("/blog/proteinbedarf-berechnen", "Protein-Guide", false),
      "."
    ),

    heading("h3", "Kohlenhydrate: der Treibstoff"),
    paragraph(
      "Kohlenhydrate füllen Muskel- und Leberglykogen, die Hauptenergiequelle bei mittlerer bis hoher Intensität. Laut aktueller Empfehlungen brauchen Sportler 3 bis 12 Gramm pro Kilogramm täglich, abhängig von Trainingsumfang und -intensität. Für moderate Freizeitsportler reichen 3 bis 5 Gramm pro Kilo, intensives Ausdauertraining kann 8 bis 12 Gramm erfordern."
    ),

    heading("h3", "Fette: der Hormon- und Zellbaustein"),
    paragraph(
      "Fette sind essentiell für Hormonproduktion, Zellmembranen und Aufnahme fettlöslicher Vitamine. 20 bis 35 Prozent der Gesamtkalorien aus Fett sind der gesunde Korridor, mit Schwerpunkt auf ungesättigten Fettsäuren aus Nüssen, Olivenöl, fettem Fisch. Gesättigte Fette und Transfette begrenzt halten."
    ),

    heading("h2", "Was die Forschung zu Timing und Nährstoff-Verteilung zeigt"),
    paragraph(
      "Eine 2023 in Frontiers in Nutrition veröffentlichte ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC10848936/",
        "narrative Review zu Athletenernährung"
      ),
      " fasst den aktuellen Stand zusammen: Gesamtmengen an Makronährstoffen sind entscheidender als exakte Timings, aber strategisches Timing rund um Training verbessert Leistung und Regeneration messbar."
    ),
    paragraph(
      "Vor dem Training helfen Kohlenhydrate beim Energieaufbau. Während langer Einheiten (über 60 Min) sind 30 bis 60 Gramm Kohlenhydrate pro Stunde evidenzbasiert. Nach dem Training beschleunigen 1,0 bis 1,2 Gramm Kohlenhydrate pro Kilo plus Protein die Glykogen-Wiederauffüllung. Für Muskelerhalt und -aufbau sind 0,25 bis 0,40 Gramm Protein pro Kilo innerhalb von zwei Stunden nach dem Training sinnvoll."
    ),

    heading("h2", "Ein praktikabler Ernährungsplan für Trainingstage"),
    paragraph(
      "Beispiel für einen 75 kg aktiven Mann mit drei Krafteinheiten und zwei Cardio-Einheiten pro Woche (Basis: ca. 2500 kcal, 150 g Protein, 300 g Kohlenhydrate):"
    ),

    heading("h3", "Frühstück: 8:00 Uhr"),
    ul([
      "80 g Haferflocken (gekocht) mit 300 g Magerquark",
      "150 g Beeren",
      "1 TL Honig",
      "Kaffee oder Tee",
      "→ ca. 550 kcal, 50 g Protein, 65 g KH",
    ]),

    heading("h3", "Mittag: 12:30 Uhr"),
    ul([
      "150 g Hähnchenbrust",
      "100 g Reis (roh gewogen)",
      "Gemüse nach Wahl",
      "1 EL Olivenöl",
      "→ ca. 700 kcal, 45 g Protein, 80 g KH",
    ]),

    heading("h3", "Snack vor dem Training: 15:30 Uhr"),
    ul([
      "1 Banane",
      "1 kleines Vollkornbrot mit Frischkäse",
      "→ ca. 300 kcal, 10 g Protein, 55 g KH",
    ]),

    heading("h3", "Abend (nach Training): 19:00 Uhr"),
    ul([
      "150 g Lachs oder Tofu",
      "250 g Süßkartoffeln",
      "Salat mit Olivenöl und Essig",
      "→ ca. 650 kcal, 40 g Protein, 55 g KH",
    ]),

    heading("h3", "Spät-Snack (optional): 21:30 Uhr"),
    ul([
      "100 g Skyr",
      "Handvoll Mandeln",
      "→ ca. 250 kcal, 15 g Protein, 15 g KH",
    ]),

    heading("h2", "Pre-Workout: Was und wann essen?"),
    paragraph(
      "Je näher das Training, desto leichter die Mahlzeit. Als Grundregel:"
    ),
    ul([
      "3 Stunden vor dem Training: Volle Mahlzeit (Reis + Fleisch + Gemüse)",
      "1-2 Stunden vorher: Kleinere Mahlzeit (Haferflocken mit Obst, Vollkornbrot mit Honig)",
      "30-45 Min vorher: Schnelle Kohlenhydrate (Banane, Reiswaffeln, kleiner Shake)",
      "Direkt vorher: Nur für sehr kurze Einheiten, sonst Übelkeit-Risiko",
    ]),

    heading("h2", "Post-Workout: Die 2-Stunden-Regel"),
    paragraph(
      "Nach dem Training sollten Protein und Kohlenhydrate innerhalb von zwei Stunden zugeführt werden. Der konkrete Zeitpunkt ist weniger wichtig als der erwartete Abstand zur nächsten Hauptmahlzeit. Isst du ohnehin eine Stunde später, brauchst du keinen Shake. Passt die nächste Mahlzeit erst in drei Stunden, bietet sich ein Zwischen-Shake oder Snack an."
    ),

    heading("h2", "Hydration: Oft unterschätzt"),
    paragraph(
      "Schon 2 Prozent Flüssigkeitsverlust reduzieren messbar die Leistung. Die Grundregeln:"
    ),
    ul([
      "30-40 ml pro Kilo Körpergewicht täglich als Basis",
      "Plus 500 ml pro Stunde moderate Belastung",
      "Plus 750-1000 ml pro Stunde hohe Belastung oder Hitze",
      "Sportgetränke (6% Kohlenhydrate) ab 60 Min Dauerbelastung",
      "Urinfarbe ist der einfachste Indikator: hellgelb ist gut",
    ]),

    heading("h2", "Die drei evidenzbasierten Supplements"),

    heading("h3", "1. Protein-Pulver"),
    paragraph(
      "Praktisch für unterwegs oder als Ergänzung bei knappem Zeitfenster. Whey oder pflanzliche Alternativen funktionieren beide. 20-30 g pro Shake. Kein Ersatz für echte Lebensmittel."
    ),

    heading("h3", "2. Kreatin-Monohydrat"),
    paragraph(
      "Das am besten untersuchte Supplement im Sport. 3-5 Gramm täglich, zu jeder Tageszeit, mit Wasser. Wirkt auf Kraft, Muskelaufbau und sogar kognitive Leistung. Sicher und günstig. Kein Coaching- oder Marken-Gimmick nötig, einfach Monohydrat."
    ),

    heading("h3", "3. Omega-3 (EPA+DHA)"),
    paragraph(
      "Sinnvoll, wenn der Fischanteil in der Ernährung niedrig ist. 1-2 Gramm EPA+DHA pro Tag reduzieren Entzündungsmarker, unterstützen Herzgesundheit und Regeneration. Fischöl-Kapseln oder Algenöl für Veganer."
    ),

    heading("h2", "Was Sporternährung nicht braucht"),
    ul([
      "Teure 'Pre-Workout-Boost' mit 20 Inhaltsstoffen: meist Zucker und Koffein.",
      "Fatburner-Pillen: keine signifikanten Effekte, oft Nebenwirkungen.",
      "BCAA-Shakes: unnötig, wenn die Proteinzufuhr ausreicht.",
      "Detox-Tees und Cleanses: Leber und Niere sind die körpereigene Detox-Abteilung.",
      "Teure Elektrolyt-Drinks bei kurzen Einheiten: eine Messerspitze Salz im Wasser reicht.",
    ]),

    heading("h2", "Typische Fehler"),
    ul([
      "Zu wenig Protein: Der häufigste Fehler, besonders bei Vegetarier und Veganer.",
      "Kohlenhydrate pauschal vermeiden: Reduziert Leistung bei intensivem Training deutlich.",
      "Direkt vor dem Training fettreich essen: Fett verlangsamt die Verdauung, Leistung leidet.",
      "Alles aus der Packung: Fertiggerichte enthalten oft zu viel Salz, Zucker und Transfette.",
      "Alkohol am Trainingstag: Reduziert Muskelproteinsynthese für bis zu 24 Stunden.",
    ]),

    heading("h2", "Wie Casa Sports dich unterstützt"),
    paragraph(
      "Wir haben eine eigene ",
      bold("Ernährungsberatung"),
      " für Mitglieder, die ihren Ernährungsplan passend zu Training und Ziel aufbauen wollen. Teil unseres ",
      link("/mein-neues-ich", "12-Wochen-Programms Mein Neues Ich", false),
      " ist eine umfassende Begleitung, inklusive Ernährungscoaching und Trainingsplanung."
    ),
    paragraph(
      "Auf unserer ",
      link("/ernaehrung", "Ernährungsseite", false),
      " findest du die Details zu unserem Ansatz: nachhaltig, alltagstauglich, ohne Verbote."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Sporternährung ist simpler, als viele denken. Kenne deinen Proteinbedarf (1,6-2,2 g/kg), passe die Kohlenhydrate an dein Trainingspensum an, iss genug Gemüse und trinke ausreichend Wasser. Timing ist Feinschliff, Gesamtqualität ist der Hauptschalter. Drei gut strukturierte Mahlzeiten plus ein oder zwei Snacks pro Tag decken alles ab, was ein aktiver Mensch braucht."
    ),
    paragraph(
      "Starte mit einer Bestandsaufnahme: Protokolliere drei Tage lang, was du isst, und vergleiche mit den Empfehlungen aus diesem Guide. Die Lücken, die dabei sichtbar werden, sind dein einfachster Hebel für bessere Leistung und Regeneration."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC10848936/",
          "Athletes' nutritional demands (Frontiers in Nutrition 2023)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/",
          "ISSN Position Stand: Protein and Exercise"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC5596471/",
          "ISSN Position Stand: Nutrient Timing"
        ),
      ],
      [
        link(
          "https://pubmed.ncbi.nlm.nih.gov/19225360/",
          "ACSM Position Stand: Nutrition and Athletic Performance"
        ),
      ],
    ]),
  ]),
}
