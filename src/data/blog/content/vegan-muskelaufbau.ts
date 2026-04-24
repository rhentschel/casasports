import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const veganMuskelaufbau = {
  slug: "vegan-muskelaufbau",
  title: "Vegan Muskelaufbau: So funktioniert es mit pflanzlicher Ernährung",
  excerpt:
    "Muskelaufbau mit pflanzlicher Ernährung ist wissenschaftlich belegt genauso möglich wie mit tierischem Protein. Hier die Strategie mit Fokus auf Protein-Qualität, Leucin und optimaler Verteilung.",
  categorySlug: "ernaehrung",
  authorSlug: "naim",
  coverImagePath: "/images/casasports-ernaehrung.webp",
  keyTakeaway:
    "Vegane Ernährung unterstützt Muskelaufbau ebenso effektiv wie omnivore, wenn Protein und Leucin korrekt eingestellt sind. 1,8-2,2 g Protein pro kg Körpergewicht, davon 3-5 Mahlzeiten mit je 2,5-3 g Leucin. Kombiniere Hülsenfrüchte mit Getreide, Soja oder Pea-Rice-Blends für komplette Aminosäureprofile.",
  faq: [
    {
      question: "Kann ich als Veganer so viele Muskeln aufbauen wie Omnivore?",
      answer:
        "Ja, die Forschung bestätigt das. Eine 2025 im NPR berichtete Studie zeigt, dass vegane Ernährung mit strukturiertem Krafttraining die gleichen Muskelaufbau-Ergebnisse bringt wie omnivore Ernährung. Entscheidend ist die Protein-Menge und Verteilung, nicht die Quelle.",
    },
    {
      question: "Wie viel Protein pro Tag als Veganer?",
      answer:
        "1,8 bis 2,2 Gramm pro kg Körpergewicht. Das ist etwa 10-20 Prozent mehr als bei Omnivoren, um die niedrigere Bioverfügbarkeit und das weniger ideale Aminosäureprofil auszugleichen. Bei 75 kg: 135-165 g Protein täglich.",
    },
    {
      question: "Was ist Leucin und warum ist es wichtig?",
      answer:
        "Leucin ist die anabol stärkste Aminosäure. Sie triggert die Muskelproteinsynthese. Pro Mahlzeit brauchst du 2,5-3 g Leucin, um die MPS maximal zu aktivieren. Tierische Proteine haben 8-10% Leucin-Gehalt, pflanzliche oft nur 6-8%, deshalb die höhere Gesamtmenge.",
    },
    {
      question: "Reicht Erbsenprotein oder brauche ich Blends?",
      answer:
        "Erbse allein ist ok, aber nicht optimal (wenig Methionin). Blends aus Erbse, Reis und Chlorella bzw. Erbse + Reis liefern ein vollständiges Aminosäure-Profil, das mit Whey vergleichbar ist. Soja ist die einzige pflanzliche Einzelquelle mit komplettem Profil.",
    },
    {
      question: "Was ist mit Kreatin als Veganer?",
      answer:
        "Besonders wichtig. Veganer haben im Durchschnitt deutlich niedrigere Kreatin-Speicher, weil Kreatin fast nur in Fleisch und Fisch vorkommt. 3-5 g Kreatin-Monohydrat täglich ist die wirksamste Supplementation für Veganer. Siehe ",
      answer_link: "/blog/kreatin-monohydrat-guide",
    },
    {
      question: "Ist Soja hormonell problematisch?",
      answer:
        "Nein. Phytoöstrogene in Soja wirken nicht wie menschliche Östrogene. Meta-Analysen zeigen keine negativen Effekte von Soja-Konsum auf Testosteron oder Fruchtbarkeit bei Männern. 50-100 g Tofu oder Tempeh pro Tag sind unbedenklich.",
    },
    {
      question: "Welche Supplements brauche ich als vegan trainierender Mensch?",
      answer:
        "Vitamin B12 (zwingend), Vitamin D (saisonal), Omega-3 aus Algenöl, Kreatin und eventuell ein pflanzliches Proteinpulver für praktische Zufuhr. Eisen, Zink und Jod über Blutwerte checken lassen.",
    },
  ],
  content: root([
    paragraph(
      "Die Zeiten, in denen Kraftsport mit Steak gleichgesetzt wurde, sind vorbei. Aktuelle Forschung zeigt: Veganer können genauso viel Muskelmasse aufbauen wie Omnivore. Der Schlüssel liegt in der richtigen Strategie. Dieser Guide zeigt, wie du als Veganer oder Vegetarier effektiv Muskeln aufbaust."
    ),

    heading("h2", "Was die aktuelle Forschung sagt"),
    paragraph(
      "Eine ",
      link(
        "https://pubmed.ncbi.nlm.nih.gov/38846451/",
        "Studie zu pflanzlichen Protein-Isolaten in ScienceDirect"
      ),
      " hat untersucht, wie Muskelproteinsynthese auf pflanzliche vs. Whey-Protein reagiert. Ergebnis: Bei ausreichender Dosierung (≥30 g mit ~2,5 g Leucin) erzielen gut formulierte pflanzliche Blends vergleichbare MPS-Raten wie Whey. Die Zugabe von Leucin oder Soja-Anteil verbessert das Ergebnis zusätzlich."
    ),
    paragraph(
      "Eine ",
      link(
        "https://www.npr.org/2025/05/19/nx-s1-5384995/protein-vegan-muscle-growth-strength-training",
        "2025 von NPR berichtete Studie"
      ),
      " bestätigt: Vegane und omnivore Ernährung haben bei gleichem Protein-Input das gleiche Muskelaufbau-Potenzial. Langzeit-Gewinne in Muskel- und Kraftwerten zeigen keine Unterschiede."
    ),

    heading("h2", "Die 3 Herausforderungen der veganen Ernährung"),

    heading("h3", "1. Niedrigere Protein-Dichte"),
    paragraph(
      "Pflanzliche Lebensmittel haben meist weniger Protein pro 100 g als tierische. Fleisch kommt auf 20-25 g, Linsen gekocht nur auf 9 g. Das heißt: du musst in absoluten Mengen mehr essen, um die gleiche Protein-Menge zu bekommen."
    ),

    heading("h3", "2. Aminosäure-Profile sind oft unvollständig"),
    paragraph(
      "Die meisten pflanzlichen Quellen haben eines der 9 essentiellen Aminosäuren als limitierenden Faktor. Getreide ist arm an Lysin, Hülsenfrüchte an Methionin. Kombinieren löst das Problem: Reis + Bohnen, Linsen + Vollkornbrot."
    ),

    heading("h3", "3. Leucin-Konzentration niedriger"),
    paragraph(
      "Leucin ist die anabol wichtigste Aminosäure. Tierisches Protein hat 8-10% Leucin, pflanzliches oft nur 6-8%. Lösung: größere Portionen, oder Leucin-reiche Quellen bevorzugen (Soja, Erbse)."
    ),

    heading("h2", "Die besten veganen Protein-Quellen"),

    table([
      ["Lebensmittel", "Protein/100g", "Leucin", "Hinweis"],
      ["Tempeh", "19 g", "1,5 g", "Höchster Leucin-Gehalt, fermentiert"],
      ["Soja-Bohnen gekocht", "17 g", "1,3 g", "Komplettes Profil"],
      ["Tofu fest", "13 g", "1,0 g", "Vielseitig, günstig"],
      ["Linsen gekocht", "9 g", "0,7 g", "Plus Ballaststoffe"],
      ["Kichererbsen gekocht", "9 g", "0,6 g", "Gut mit Getreide"],
      ["Seitan", "25 g", "1,7 g", "Weizenprotein, reich an Protein"],
      ["Haferflocken trocken", "13 g", "1,0 g", "Plus Kohlenhydrate"],
      ["Quinoa gekocht", "4 g", "0,3 g", "Komplettes Aminoprofil"],
      ["Erbsenprotein-Pulver", "80 g", "6,5 g", "Konzentriert, einfach"],
      ["Soja-Pulver-Isolat", "90 g", "7,5 g", "Höchste Konzentration"],
    ]),

    heading("h2", "Tagesplan für vegan muskelaufbauen (Beispiel 75 kg)"),
    paragraph(
      "Ziel: ~150 g Protein, ~2800 kcal für Aufbau."
    ),

    table([
      ["Mahlzeit", "Gericht", "Protein"],
      ["Frühstück", "Haferflocken 80g + Soja-Joghurt 200g + Beeren + Nüsse", "25 g"],
      ["Snack 1", "Soja-Shake 30g Pulver + Banane", "28 g"],
      ["Mittag", "Tempeh 200g + Reis 80g + Gemüse + Olivenöl", "45 g"],
      ["Pre-Workout", "Haferflocken-Porridge 50g", "7 g"],
      ["Post-Workout", "Erbsenprotein 30g + Hafermilch", "26 g"],
      ["Abend", "Linsen-Eintopf mit Vollkornbrot + Salat", "30 g"],
      ["Summe", "—", "~161 g"],
    ]),

    heading("h2", "Die wichtigsten Supplements"),

    heading("h3", "Zwingend: Vitamin B12"),
    paragraph(
      "Pflanzen enthalten praktisch kein B12. Ein Mangel entwickelt sich schleichend über 2-5 Jahre und verursacht ernste neurologische Probleme. 250-1000 µg B12 einmal wöchentlich oder 50-100 µg täglich."
    ),

    heading("h3", "Empfohlen: Kreatin-Monohydrat"),
    paragraph(
      "Veganer haben signifikant niedrigere Muskel-Kreatinspeicher. 3-5 g täglich bringen bei Veganern oft größere Effekte als bei Omnivoren. Details im ",
      link("/blog/kreatin-monohydrat-guide", "Kreatin-Guide", false),
      "."
    ),

    heading("h3", "Empfohlen: Omega-3 (EPA+DHA)"),
    paragraph(
      "Aus Algenöl, NICHT aus Leinöl oder Chiasamen (die haben nur ALA, das vom Körper ineffizient in EPA/DHA konvertiert wird). 1-2 g EPA+DHA täglich."
    ),

    heading("h3", "Nach Bluttest: Vitamin D, Eisen, Zink, Jod"),
    paragraph(
      "Vegane Ernährung kann zu Defiziten in diesen Nährstoffen führen. 1-2x pro Jahr Bluttest machen lassen und gezielt supplementieren."
    ),

    heading("h2", "Protein-Kombinationen für komplettes Aminosäureprofil"),

    table([
      ["Kombination", "Protein/Portion", "Leucin", "Komplett?"],
      ["Reis + schwarze Bohnen", "18 g", "1,5 g", "Ja"],
      ["Haferflocken + Sojamilch", "12 g", "1,0 g", "Ja"],
      ["Vollkornbrot + Hummus", "15 g", "1,2 g", "Ja"],
      ["Quinoa + Kichererbsen", "14 g", "1,1 g", "Ja"],
      ["Linsen + Reis", "16 g", "1,3 g", "Ja"],
      ["Tofu + Sesamsaat", "14 g", "1,2 g", "Ja"],
      ["Edamame + Quinoa", "20 g", "1,6 g", "Ja"],
      ["Nur Reis", "4 g", "0,3 g", "Nein (Lysin arm)"],
      ["Nur Linsen", "9 g", "0,7 g", "Nein (Methionin arm)"],
    ]),

    heading("h2", "Trainingsplanung für Veganer"),
    paragraph(
      "Grundsätzlich dasselbe wie bei omnivoren Kraftsportlern. Einziger Unterschied: auf ausreichende Kalorienversorgung achten. Pflanzliche Ernährung ist oft sättigender (viel Volumen, viele Ballaststoffe), was bei Muskelaufbau-Phasen problematisch sein kann, wenn Kalorien reichen müssen."
    ),
    ul([
      "3-4 Krafteinheiten pro Woche, Progressive Overload",
      "Grundübungen betonen (Kniebeuge, Kreuzheben, Bankdrücken, Klimmzug)",
      "Nach Training: 30-40 g Protein-Shake plus Kohlenhydrate",
      "Moderate Cardio-Anteile (2-3 mal pro Woche)",
      "Schlaf und Regeneration nicht unterschätzen",
    ]),

    heading("h2", "Typische Fehler"),
    ul([
      "Zu wenig Protein: 1 g/kg reicht für Erhalt, nicht für Aufbau",
      "Nur Nüsse als Protein-Quelle: zu wenig Protein pro Kalorie",
      "Kein B12 supplementieren: Langzeit-Schaden garantiert",
      "Whey als einzige Inspiration: pflanzliche Alternative suchen",
      "Soja meiden aus Angst: wissenschaftlich unbegründet",
      "Kalorien unterschätzen: Veganer-Essen ist oft volumenreich, aber kalorienarm",
    ]),

    heading("h2", "Meal Prep Tipps"),
    ul([
      "Sonntag: 500g Linsen kochen, 500g Reis, Tempeh marinieren",
      "Hafer-Overnight-Oats in Gläser füllen für die Woche",
      "Proteinpulver als Backup für Tage ohne Zeit",
      "Tofu in großer Menge portionsweise vorbraten und einfrieren",
      "Gemüse waschen und vorschneiden",
    ]),

    heading("h2", "Wann vegan besser ist als omnivor"),
    ul([
      "Ballaststoff-Zufuhr (besser für Verdauung und Sättigung)",
      "Cholesterin-Werte (tierisches Fett fehlt)",
      "Umweltbilanz und ethische Aspekte",
      "Oft höhere Mikronährstoff-Dichte durch viel Gemüse",
      "Entzündungsmarker oft niedriger",
    ]),

    heading("h2", "Was Casa Sports bietet"),
    paragraph(
      "Unsere Ernährungsberatung arbeitet auch mit veganen und vegetarischen Mitgliedern. Wir rechnen dir die Makros durch, planen Supplements, und helfen bei praktikablen Tages-Setups. Siehe ",
      link("/ernaehrung", "Ernährungsseite", false),
      "."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Vegan Muskelaufbau ist nicht nur möglich, sondern wissenschaftlich gleichwertig zu omnivorer Ernährung. Wichtig sind etwas mehr Protein, bewusste Aminosäure-Kombinationen, und drei essenzielle Supplements (B12, Kreatin, Omega-3). Wer das umsetzt, baut Muskeln und Kraft genauso auf wie ein omnivor trainierender Mensch."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://cdnsciencepub.com/doi/10.1139/apnm-2021-0806",
          "Plant-based food patterns for muscle protein synthesis (APNM)"
        ),
      ],
      [
        link(
          "https://pubmed.ncbi.nlm.nih.gov/38846451/",
          "Plant-based Protein Isolates vs Whey (Pubmed)"
        ),
      ],
      [
        link(
          "https://pubmed.ncbi.nlm.nih.gov/40806155/",
          "Plant-Based Proteins on Recovery from Resistance Exercise (Systematic Review)"
        ),
      ],
      [
        link(
          "https://sniglobal.org/supplementing-plant-based-diets-with-soy-protein-increases-muscle-mass-and-strength/",
          "Soy Protein in Plant-Based Diets Increases Muscle Mass and Strength"
        ),
      ],
    ]),
  ]),
}
