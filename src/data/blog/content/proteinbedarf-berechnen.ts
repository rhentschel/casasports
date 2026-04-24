import { root, paragraph, heading, ul, ol, bold, link, text } from "../lexical-builder"

export const proteinbedarfBerechnen = {
  slug: "proteinbedarf-berechnen",
  title: "Proteinbedarf berechnen: So viel Eiweiß brauchst du wirklich",
  excerpt:
    "Wie viel Protein Sportler und aktive Erwachsene pro Tag brauchen, wann Shakes sinnvoll sind und wie du dein Eiweiß optimal über den Tag verteilst - basierend auf dem ISSN Position Stand.",
  keyTakeaway:
    "Sportler und aktive Erwachsene brauchen etwa 1,4 bis 2,2 Gramm Protein pro Kilogramm Körpergewicht pro Tag. Für Kraft- und Muskelaufbau empfiehlt die International Society of Sports Nutrition 1,6 bis 2,2 Gramm, in Diätphasen mit Kaloriendefizit bis zu 3,1 Gramm. Entscheidend ist die Verteilung auf drei bis sechs Portionen mit je 0,25 bis 0,40 Gramm pro Kilo Körpergewicht.",
  faq: [
    {
      question: "Wie berechne ich meinen Proteinbedarf konkret?",
      answer:
        "Für aktive Erwachsene und Kraftsportler: Körpergewicht in Kilogramm multipliziert mit 1,6 bis 2,2. Bei 75 Kilo Körpergewicht ergibt das 120 bis 165 Gramm Protein pro Tag. Ausdauersportler liegen mit 1,4 bis 1,8 Gramm pro Kilo etwas niedriger. In aggressiven Diätphasen darf es bis 2,5 oder sogar 3,1 Gramm sein, um Muskelmasse zu schützen.",
    },
    {
      question: "Reicht normale Ernährung oder brauche ich Shakes?",
      answer:
        "Wer regelmäßig Fleisch, Fisch, Eier, Milchprodukte, Hülsenfrüchte und Vollkornprodukte isst, erreicht den Bedarf meist ohne Shake. Protein-Pulver ist eine praktische Ergänzung, kein Muss. Sinnvoll wird es bei engen Zeitfenstern rund ums Training oder wenn es schwerfällt, in einer Mahlzeit 30-40 Gramm Protein unterzubringen.",
    },
    {
      question: "Ist zu viel Protein schädlich?",
      answer:
        "Für gesunde Erwachsene mit intakten Nieren ist eine Zufuhr bis über 3 Gramm pro Kilo pro Tag in Studien unproblematisch. Bei bekannten Nierenerkrankungen oder in der Schwangerschaft vorher ärztlich abklären. Wichtig bei hoher Proteinzufuhr: ausreichend Flüssigkeit und ausgewogene Ernährung.",
    },
    {
      question: "Wann sollte ich Protein zu mir nehmen?",
      answer:
        "Verteile die Tagesmenge auf drei bis sechs Mahlzeiten mit jeweils 20-40 Gramm. Der alte Mythos vom anabolen Fenster direkt nach dem Training ist überholt: die Gesamtmenge pro Tag zählt mehr als die exakte Minute. Eine proteinreiche Mahlzeit innerhalb von zwei Stunden nach dem Training ist trotzdem sinnvoll.",
    },
    {
      question: "Pflanzlich oder tierisch?",
      answer:
        "Tierisches Protein enthält natürlich alle essentiellen Aminosäuren, pflanzliches muss kombiniert werden (z.B. Reis mit Bohnen oder Hülsenfrüchte mit Getreide). Mit etwas Planung funktioniert vegetarische oder vegane Proteinversorgung genauso gut. Soja, Erbse, Lupine und Hanfprotein sind hochwertige Varianten.",
    },
    {
      question: "Gibt es eine Obergrenze pro Mahlzeit?",
      answer:
        "Lange galten 20-30 Gramm pro Mahlzeit als Obergrenze für Muskelaufbau. Neuere Forschung zeigt, dass auch größere Mengen (40+ Gramm) verwertet werden, der Effekt flacht aber ab. Wer auf drei Hauptmahlzeiten setzt, kann problemlos 40-50 Gramm pro Mahlzeit einplanen.",
    },
    {
      question: "Was ist mit älteren Menschen?",
      answer:
        "Ab 60 Jahren steigt der Bedarf aufgrund anaboler Resistenz auf etwa 1,2 bis 1,6 Gramm pro Kilo, wenn Muskelerhalt das Ziel ist. Kombiniert mit Krafttraining ist das der wirksamste Hebel gegen altersbedingten Muskelabbau (Sarkopenie).",
    },
  ],
  content: root([
    paragraph(
      "Protein ist der Baustein für Muskeln, Enzyme, Hormone und Immunzellen. Wer Sport treibt, hat einen höheren Bedarf, weil Muskelproteine ständig abgebaut und neu aufgebaut werden. Dieser Guide zeigt auf Basis aktueller wissenschaftlicher Empfehlungen, wie viel du wirklich brauchst, wie du es optimal über den Tag verteilst und wann Shakes wirklich Sinn machen."
    ),

    heading("h2", "Was macht Protein im Körper?"),
    paragraph(
      "Protein besteht aus Aminosäuren, davon sind neun essentiell und müssen über die Nahrung zugeführt werden. Aus ihnen baut der Körper alles, was seine Struktur ausmacht: Muskelfasern, Kollagen in Sehnen und Haut, Antikörper, Enzyme, Signalstoffe."
    ),
    paragraph(
      "Nach einer Trainingseinheit ist der Bedarf erhöht, weil mikroskopische Muskelfaser-Schäden repariert und neue Muskelproteine synthetisiert werden (Muskelproteinsynthese, MPS). Ohne ausreichend Protein keine Anpassung an Training, keine Muskeln, keine Regeneration."
    ),

    heading("h2", "Die aktuelle wissenschaftliche Empfehlung"),
    paragraph(
      "Die wichtigste Referenz im Ausdauer- und Kraftsport ist der ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/",
        "ISSN Position Stand zu Protein und Exercise"
      ),
      ". Er fasst den Forschungsstand zusammen:"
    ),
    ul([
      [text("Allgemein aktive Erwachsene: "), bold("1,4 bis 2,0 g/kg pro Tag")],
      [text("Krafttrainierende: "), bold("1,6 bis 2,2 g/kg pro Tag")],
      [text("Ausdauersportler: "), bold("1,4 bis 1,8 g/kg pro Tag")],
      [text("In Diätphasen (Kaloriendefizit): "), bold("bis 3,1 g/kg pro Tag")],
      [text("Ältere Erwachsene (60+): "), bold("1,2 bis 1,6 g/kg pro Tag")],
    ]),
    paragraph(
      "Neuere Arbeiten aus 2025 (z.B. in Nutrients veröffentlichte ",
      link(
        "https://www.mdpi.com/2072-6643/17/22/3528",
        "Narrative Review zur Proteinsupplementation"
      ),
      ") bestätigen diese Werte und betonen zusätzlich, dass gezielte Verteilung fast so wichtig ist wie die Gesamtmenge."
    ),

    heading("h2", "Beispielrechnung: Dein persönlicher Bedarf"),
    paragraph("Nehmen wir drei typische Profile:"),

    heading("h3", "Profil 1: Büromensch, trainiert 3× pro Woche, 70 kg"),
    ul([
      "Ziel Muskelaufbau: 1,8 × 70 = 126 g Protein pro Tag",
      "Ziel Fitnesserhalt: 1,4 × 70 = 98 g pro Tag",
      "Das entspricht grob: 4 Eier + 150g Quark + 150g Hähnchen + 100g Thunfisch am Tag",
    ]),

    heading("h3", "Profil 2: Aktive Frau, 60 kg, kombiniert Kraft und Cardio"),
    ul([
      "Standard aktiv: 1,6 × 60 = 96 g Protein pro Tag",
      "In Diätphase: 2,2 × 60 = 132 g pro Tag",
      "Das entspricht grob: 2 Eier + 200g griechischer Joghurt + 120g Lachs + 1 Messlöffel Whey",
    ]),

    heading("h3", "Profil 3: Kraftsportler 90 kg im Aufbau"),
    ul([
      "Aufbau: 2,0 × 90 = 180 g Protein pro Tag",
      "Das entspricht grob: 5 Eier + 250g Hähnchen + 300g Skyr + 100g Thunfisch",
    ]),

    heading("h2", "Die besten Proteinquellen im Vergleich"),

    heading("h3", "Tierische Quellen"),
    ul([
      "Hähnchenbrust, Pute: 23-25 g/100 g, sehr mager",
      "Rind mager: 22-26 g/100 g, plus Eisen und Zink",
      "Lachs, Thunfisch, Makrele: 20-25 g/100 g, plus Omega-3",
      "Quark mager: 12-14 g/100 g, perfekt als Snack",
      "Skyr: 10-12 g/100 g, sehr gut sättigend",
      "Eier: 6 g pro Ei, komplettes Aminosäureprofil",
      "Harzer Käse: 29 g/100 g, nur 120 kcal",
    ]),

    heading("h3", "Pflanzliche Quellen"),
    ul([
      "Linsen, Bohnen, Kichererbsen: 8-10 g/100 g gekocht",
      "Tofu: 12-16 g/100 g, vielseitig einsetzbar",
      "Tempeh: 18-20 g/100 g, fermentiert und gut verträglich",
      "Edamame: 11 g/100 g",
      "Haferflocken: 13 g/100 g trocken",
      "Quinoa: 4-5 g/100 g gekocht, komplettes Aminosäureprofil",
      "Nüsse und Mandeln: 15-25 g/100 g, plus gesunde Fette",
    ]),

    heading("h2", "Timing: Wann Protein essen?"),
    paragraph(
      "Das frühere Dogma vom anabolen Fenster ist überholt. Entscheidend ist die Tages-Gesamtmenge plus eine sinnvolle Verteilung. Die ",
      bold("gleichmäßige Zufuhr"),
      " über den Tag stimuliert die Muskelproteinsynthese besser als eine oder zwei große Dosen."
    ),
    paragraph(
      "Praktisch heißt das: Drei bis fünf Mahlzeiten pro Tag, jeweils mit 0,25 bis 0,40 Gramm Protein pro Kilo Körpergewicht. Eine Portion für einen 80-Kilo-Mann entspricht etwa 20 bis 32 Gramm Protein, also zum Beispiel 150 Gramm Hähnchen, 300 Gramm Skyr oder 40 Gramm Whey im Shake."
    ),

    heading("h2", "Protein-Shakes: Wann sie wirklich helfen"),
    paragraph(
      "Protein-Pulver ist Lebensmittel im Konzentrat. Ein Messlöffel Whey enthält 20-25 Gramm Protein bei 100-120 Kalorien. Sinnvoll ist Pulver in drei Situationen:"
    ),
    ul([
      "Morgens nach der Nacht, wenn wenig Zeit zum Kochen ist.",
      "Direkt nach dem Training, wenn das nächste Essen noch 1-2 Stunden dauert.",
      "Als einfache Möglichkeit, 20-30 g Protein in eine sonst protein-arme Mahlzeit zu bekommen (z.B. ein Müsli).",
    ]),
    paragraph(
      "Nicht sinnvoll: Pulver als Ersatz für vollwertige Mahlzeiten über den Tag. Echte Lebensmittel liefern Ballaststoffe, Mikronährstoffe und Sättigung, was Pulver nicht kann."
    ),

    heading("h2", "Typische Fehler"),
    ul([
      "Zu wenig Protein in der Diät: Wer Kalorien reduziert, aber nicht Protein anhebt, verliert Muskeln statt Fett.",
      "Nur auf Whey setzen: Pulver allein macht keine Mahlzeit, echte Lebensmittel kommen zu kurz.",
      "Alles in einer Mahlzeit: 150 g Protein abends sind nicht optimal, weil MPS den Tag über verteilt werden muss.",
      "Zu wenig Wasser: Hohe Proteinzufuhr braucht ausreichend Flüssigkeit, mindestens 35 ml pro Kilo Körpergewicht täglich.",
      "Ignorieren von Proteinqualität: Ein gutes Aminosäureprofil oder ergänzende pflanzliche Kombinationen sind wichtig, nicht nur die Grammzahl.",
    ]),

    heading("h2", "Was bedeutet das für dich konkret?"),
    paragraph(
      "Rechne deinen Bedarf einmal aus und plane drei bis vier Mahlzeiten mit ausreichend Protein. Frühstück mit Quark oder Eiern, Mittag mit Fleisch, Fisch oder Hülsenfrüchten plus Beilage, Snack mit Skyr oder einem kleinen Shake, Abendessen mit einer weiteren Proteinquelle. Kein Hexenwerk, nur Struktur."
    ),
    paragraph(
      "Wenn du unsicher bist, was zu deinem Ziel passt, kommt die Ernährungsberatung bei Casa Sports ins Spiel. Wir rechnen durch, prüfen deinen Tagesablauf und machen dir einen individuellen Plan. Mehr dazu auf unserer ",
      link("/ernaehrung", "Ernährungsseite", false),
      "."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Proteinbedarf berechnen ist keine Wissenschaft für Spezialisten. Multipliziere dein Körpergewicht mit 1,6 bis 2,2, verteile die Menge auf drei bis fünf Mahlzeiten und setze auf eine Mischung echter Lebensmittel. Pulver ist ein nützliches Werkzeug, kein Must-have. Wer das umsetzt, deckt die wichtigste Säule für Muskelaufbau, Regeneration und Körperkomposition zuverlässig ab."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/",
          "ISSN Position Stand: Protein and Exercise"
        ),
      ],
      [
        link(
          "https://www.mdpi.com/2072-6643/17/22/3528",
          "Current Perspectives on Protein Supplementation in Athletes (Nutrients 2025)"
        ),
      ],
      [
        link(
          "https://link.springer.com/article/10.1186/s12970-017-0177-8",
          "JISSN Position Stand: Protein and Exercise (Volltext)"
        ),
      ],
    ]),
  ]),
}
