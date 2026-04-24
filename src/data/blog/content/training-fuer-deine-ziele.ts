import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const trainingFuerDeineZiele = {
  slug: "training-fuer-deine-ziele",
  title: "Training für deine Ziele: Der strategische Guide",
  excerpt:
    "Ob Abnehmen, Muskelaufbau, fit im Alter oder Rückenschmerzen bekämpfen - jedes Ziel braucht andere Prioritäten. Hier der strategische Überblick mit Verlinkungen zu detaillierten Plänen.",
  categorySlug: "training",
  authorSlug: "naim",
  coverImagePath: "/images/casasports-personal-training.webp",
  keyTakeaway:
    "Training ist kein One-Size-Fits-All. Je nach Ziel verschieben sich Gewichtungen zwischen Kraft, Cardio, Mobility und Ernährung. Dieser Pillar zeigt dir die strategische Orientierung und verlinkt auf die detaillierten Cluster-Artikel zu den sechs häufigsten Zielen: Abnehmen, Muskelaufbau, Fit über 40, Rückenschmerzen, Nach der Schwangerschaft und Büro-Gesundheit.",
  faq: [
    {
      question: "Kann ich mehrere Ziele gleichzeitig verfolgen?",
      answer:
        "Bedingt. Muskelaufbau und extremes Abnehmen gleichzeitig sind schwierig, weil sie entgegengesetzte Kalorienbilanzen brauchen. Muskelerhalt plus moderates Abnehmen funktioniert gut. Allgemeine Fitness plus ein spezifisches Ziel (z.B. Rückenschmerzen) lässt sich parallelisieren.",
    },
    {
      question: "Wie lange braucht ein Ziel?",
      answer:
        "Realistisch: 12-24 Wochen für substanzielle Veränderung. Abnehmen: 4-6 Monate für 5-10 kg. Muskelaufbau: 6-12 Monate für 3-5 kg Muskel. Rückenschmerzen: 8-16 Wochen für signifikante Besserung. Fit im Alter: Dauerhafte Investition, nie abgeschlossen.",
    },
    {
      question: "Was ist das wichtigste unabhängig vom Ziel?",
      answer:
        "Konsistenz. Jedes Ziel scheitert an mangelnder Regelmäßigkeit, nicht am falschen Plan. Drei Monate strukturiertes Training schlägt zehn Jahre gelegentliches Training.",
    },
    {
      question: "Wie weiß ich, ob mein Ziel realistisch ist?",
      answer:
        "Orientierung: maximal 1% Körpergewicht pro Woche Abnehmen, 0,25-0,5 kg Muskelaufbau pro Monat, Kraftsteigerung um 5-10% pro Monat in den ersten 6 Monaten. Wer schneller vorankommen will, riskiert Verletzung oder Rückschlag.",
    },
    {
      question: "Brauche ich Personal Training für mein Ziel?",
      answer:
        "Nicht immer. Einführungstermin und Struktur-Plan reichen für die meisten Menschen. Personal Training lohnt sich bei: nach Verletzung, schwierigem Start, Leistungssport, Zeitnot. Bei Casa Sports ist der Einführungstermin kostenlos enthalten.",
    },
  ],
  content: root([
    paragraph(
      "Training ohne klares Ziel ist Arbeitsbeschaffung. Wer sich regelmäßig ins Studio schleppt, aber nie weiß, worauf er hinarbeitet, verliert früher oder später die Motivation. Dieser Pillar ordnet die sechs häufigsten Ziele und verweist auf die detaillierten Pläne."
    ),

    heading("h2", "Die sechs häufigsten Trainingsziele"),

    table([
      ["Ziel", "Zeitrahmen", "Hauptfokus", "Cluster-Artikel"],
      ["Abnehmen", "3-6 Monate", "Kaloriendefizit + Muskelerhalt", "Kaloriendefizit-Guide"],
      ["Muskelaufbau", "6-12 Monate", "Progressive Overload + Protein", "Muskelaufbau-Guide"],
      ["Fit über 40", "Lebenslang", "Sarkopenie-Prävention", "Fit-über-40-Guide"],
      ["Fit über 60", "Lebenslang", "Balance + Muskel-Erhalt", "Senioren-Training"],
      ["Rückenschmerzen weg", "8-16 Wochen", "Core + Mobility", "Rücken-Guide"],
      ["Nach Schwangerschaft", "6-12 Monate", "Beckenboden + Rumpf", "Post-Partum"],
    ]),

    heading("h2", "Ziel-spezifische Prioritäten"),

    heading("h3", "Abnehmen"),
    paragraph(
      "Prioritäten in dieser Reihenfolge: Kaloriendefizit (Ernährung), ausreichend Protein, Krafttraining (Muskelerhalt), Cardio (zusätzlicher Verbrauch), Schlaf, Stressmanagement. Details im ",
      link("/blog/abnehmen-mit-kaloriendefizit", "Abnehm-Guide", false),
      "."
    ),

    heading("h3", "Muskelaufbau"),
    paragraph(
      "Prioritäten: Progressive Overload im Krafttraining, ausreichend Protein (1,8-2,2 g/kg), leichter Kalorienüberschuss (200-400 kcal), genug Schlaf. Cardio in moderater Dosis. Details im ",
      link("/blog/krafttraining-fuer-anfaenger", "Krafttraining-Guide", false),
      "."
    ),

    heading("h3", "Fit über 40"),
    paragraph(
      "Ab 40 verliert der Körper ohne Reiz jedes Jahr 0,5-1% Muskelmasse (Sarkopenie). Prioritäten: Krafttraining 2-3x pro Woche, Mobility täglich, moderates Cardio, Protein-Zufuhr. Der Muskelerhalt wird zum Hauptziel, nicht das Sixpack."
    ),

    heading("h3", "Rückenschmerzen"),
    paragraph(
      "Bei unspezifischen chronischen Rückenschmerzen ist Training das wirksamste Mittel. Prioritäten: Core-Stabilität, Hip-Hinge-Muster, Beweglichkeit von Brustwirbelsäule und Hüften. Details im ",
      link("/blog/functional-training-im-alltag", "Functional-Training-Guide", false),
      "."
    ),

    heading("h2", "Die gemeinsame Basis: Was jedes Ziel braucht"),
    ul([
      "Regelmäßigkeit (mindestens 3x pro Woche Bewegung)",
      "Saubere Grundtechnik bei Krafttraining",
      "Ausreichend Schlaf (7-9 Stunden)",
      "Proteinzufuhr passend zum Ziel",
      "Progressive Steigerung (nicht immer gleich bleiben)",
      "Messen statt nur fühlen: Gewicht, Umfänge, Leistung",
      "Geduld: 12-24 Wochen minimum für substanzielle Veränderung",
    ]),

    heading("h2", "Wie Casa Sports dich unterstützt"),
    paragraph(
      "Für jedes Ziel gibt es bei uns die passende Begleitung. Im Einführungstermin klären wir dein Ziel und machen dir einen Startplan. Für tiefere Begleitung bietet sich das ",
      link("/mein-neues-ich", "12-Wochen Mein Neues Ich Programm", false),
      " oder Personal Training an."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Kein Training ist per se gut oder schlecht, es kommt immer auf das Ziel an. Die richtige Strategie zu wählen und sie 3-6 Monate konsequent durchzuziehen ist der einzige zuverlässige Weg zu Ergebnissen. Starte mit einem klaren Ziel, einem strukturierten Plan, und sei geduldig."
    ),
  ]),
}
