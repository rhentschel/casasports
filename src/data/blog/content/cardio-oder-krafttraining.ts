import { root, paragraph, heading, ul, ol, bold, link, text } from "../lexical-builder"

export const cardioOderKrafttraining = {
  slug: "cardio-oder-krafttraining",
  title: "Cardio oder Krafttraining: Was bringt dir mehr?",
  excerpt:
    "Die ewige Frage: Ausdauer oder Kraft? Die aktuelle Meta-Analyse zu Concurrent Training zeigt, warum die Kombination für Fettabbau und Figur meist die beste Wahl ist.",
  keyTakeaway:
    "Keine der beiden Trainingsformen ist pauschal besser. Für Fettabbau bei gleichzeitigem Muskelerhalt ist die Kombination (Concurrent Training) am effektivsten. Für reine Ausdauer dominiert Cardio, für Muskelaufbau Krafttraining. Wer beides im selben Training macht, sollte mit Kraft beginnen.",
  faq: [
    {
      question: "Verbrenne ich mit Cardio oder Kraft mehr Fett?",
      answer:
        "Eine 2025 im Journal of the International Society of Sports Nutrition erschienene Meta-Analyse zeigt: Cardio und die Kombination aus beiden reduzieren absolute Fettmasse effektiver als reines Krafttraining. Krafttraining allein bremst den Fettabbau aber nicht, wenn es in ein kombiniertes Programm integriert wird. Der entscheidende Hebel für Fettabbau bleibt das Kaloriendefizit durch Ernährung plus Training.",
    },
    {
      question: "Macht Krafttraining Frauen muskulös?",
      answer:
        "Nein. Um sichtbar viel Muskelmasse aufzubauen, braucht es einen deutlich erhöhten Testosteronspiegel, kalorischen Überschuss und jahrelanges gezieltes Training mit hohen Lasten. Das passiert nicht nebenbei. Frauen, die regelmäßig Krafttraining machen, bekommen eine festere und definiertere Figur, keinen massigen Körper.",
    },
    {
      question: "Soll ich Cardio oder Kraft zuerst machen?",
      answer:
        "Wenn Muskelaufbau oder Fettabbau mit Muskelerhalt das Ziel sind, lift zuerst, cardioe danach. Eine 2025 veröffentlichte Untersuchung zeigt: Wer Krafttraining vor Cardio macht, verliert in Kombinationsprogrammen mehr Gesamtfett und mehr viszerales Fett. Geht es primär um Ausdauer, beginne mit Cardio.",
    },
    {
      question: "Wie viele Einheiten pro Woche sind sinnvoll?",
      answer:
        "Ein solider Basisplan umfasst zwei bis drei Krafteinheiten plus zwei bis drei Cardio-Einheiten pro Woche, passend zu den WHO-Empfehlungen von 150-300 Minuten moderater Aktivität plus zwei Tagen Muskel-Stärkung. Wer mit weniger Zeit startet, kombiniert beides in je drei Hybrid-Einheiten.",
    },
    {
      question: "Kann ich Kraft und Cardio am gleichen Tag kombinieren?",
      answer:
        "Ja. Zwanzig bis dreißig Minuten Krafttraining gefolgt von fünfzehn bis zwanzig Minuten moderatem Cardio ist ein effektives Format. Wer intensives Intervall-Cardio wie HIIT plant, sollte das an separaten Tagen machen, damit die Kraftleistung nicht leidet.",
    },
    {
      question: "Reicht Cardio zum Abnehmen, ohne Krafttraining?",
      answer:
        "Kurzfristig ja, langfristig nein. Ohne Krafttraining verlierst du in einem Kaloriendefizit anteilig mehr Muskelmasse als Fett. Dein Grundumsatz sinkt, die Figur wirkt schlapp, und nach der Diät ist der Jojo-Effekt wahrscheinlicher. Krafttraining schützt Muskelmasse und hält deinen Stoffwechsel aktiv.",
    },
    {
      question: "Was ist besser fürs Herz?",
      answer:
        "Für akute Herz-Kreislauf-Fitness führt moderates Cardio. Krafttraining hat aber inzwischen etablierte Effekte auf Blutdruck, Insulinempfindlichkeit und Gefäßgesundheit, die Cardio allein nicht ersetzt. Die WHO empfiehlt deshalb beides, nicht entweder-oder.",
    },
  ],
  content: root([
    paragraph(
      "Die Frage Cardio oder Kraft hält sich hartnäckig, obwohl die Forschung sie längst beantwortet hat. Wer schlanker, stärker und gesünder werden will, profitiert in den meisten Fällen am stärksten von einer Kombination beider Trainingsformen. Dieser Guide erklärt, warum, wie du kombinierst und welches Ziel welche Gewichtung braucht."
    ),

    heading("h2", "Was macht Cardio und was macht Krafttraining?"),
    paragraph(
      "Cardio (oder Ausdauertraining) ist jede Aktivität, die dein Herz-Kreislauf-System über längere Zeit auf einem erhöhten Niveau hält. Laufen, Radfahren, Schwimmen, Rudern, Cycling-Kurse. Hauptadaption: verbesserte VO2max, niedrigerer Ruhepuls, bessere Gefäßgesundheit, höherer Fettstoffwechsel in Ruhe."
    ),
    paragraph(
      "Krafttraining setzt die Skelettmuskulatur unter gezielten Widerstand. Kurzhanteln, Maschinen, Körpergewicht, Kettlebells. Hauptadaption: mehr Muskelmasse, höhere Maximalkraft, dichtere Knochen, besserer Grundumsatz, bessere Insulinsensitivität."
    ),
    paragraph(
      "Beide Systeme sind ",
      bold("nicht austauschbar"),
      ". Wer nur cardioet, baut keine Muskelmasse auf. Wer nur Kraft trainiert, entwickelt seine Ausdauer nicht. Die WHO empfiehlt deshalb seit 2020 explizit beides kombiniert."
    ),

    heading("h2", "Was die aktuelle Forschung zu Concurrent Training zeigt"),
    paragraph(
      "Die bisher umfassendste Meta-Analyse zum Thema erschien 2025 im Journal of the International Society of Sports Nutrition. Sie verglich Cardio allein, Krafttraining allein und Concurrent Training (beides kombiniert) auf Körperzusammensetzung bei Übergewichtigen und Übergewichtigen."
    ),
    paragraph(
      "Kernergebnis: Cardio und Concurrent Training reduzieren absolute Fettmasse stärker als reines Krafttraining. Concurrent Training hat aber einen entscheidenden Vorteil: Es schützt die fettfreie Masse (also Muskulatur) besser als reines Cardio. Das Ergebnis ist eine bessere Körperzusammensetzung bei gleicher Gewichtsabnahme."
    ),
    paragraph(
      "Eine weitere 2025 erschienene Untersuchung aus The Conversation hat die Frage der Reihenfolge geklärt: Wer in einer Einheit Kraft vor Cardio absolviert, verliert mehr viszerales Fett (das gesundheitlich problematische Bauchfett) als in umgekehrter Reihenfolge. Der Effekt ist über Monate klinisch relevant."
    ),

    heading("h2", "Welches Ziel braucht welche Gewichtung?"),

    heading("h3", "Ziel 1: Abnehmen und Figur verbessern"),
    paragraph(
      "Empfohlene Gewichtung: 50 Prozent Kraft, 50 Prozent Cardio. Drei Krafteinheiten und zwei bis drei Cardio-Einheiten pro Woche. Krafttraining schützt die Muskelmasse im Defizit, Cardio verbrennt zusätzliche Kalorien und verbessert die Herzgesundheit. Mit dieser Mischung siehst du nach 8 bis 12 Wochen deutliche Veränderungen."
    ),

    heading("h3", "Ziel 2: Muskelaufbau"),
    paragraph(
      "Empfohlene Gewichtung: 70 Prozent Kraft, 30 Prozent Cardio. Drei bis vier Krafteinheiten, ein bis zwei kurze Cardio-Einheiten pro Woche. Cardio bleibt für Herzgesundheit und Regeneration wichtig, darf aber nicht so viel Energie kosten, dass Muskelaufbau leidet. Lange intensive Läufe reduzieren Hypertrophie messbar."
    ),

    heading("h3", "Ziel 3: Ausdauer verbessern"),
    paragraph(
      "Empfohlene Gewichtung: 30 Prozent Kraft, 70 Prozent Cardio. Zwei Krafteinheiten pro Woche reichen für stabile Rumpfmuskulatur und Verletzungsprävention. Der Rest fließt in Ausdauer, idealerweise mit unterschiedlichen Intensitäten (Grundlagen, Schwellen, Intervalle)."
    ),

    heading("h3", "Ziel 4: Allgemeine Gesundheit und Langlebigkeit"),
    paragraph(
      "Empfohlene Gewichtung: 50:50, kombiniert mit Beweglichkeit und Regeneration. Die Mischung nach WHO-Vorgabe: mindestens 150 Minuten moderate Aktivität pro Woche plus zwei Krafteinheiten. Das ist der goldene Korridor für maximale gesundheitliche Rendite pro Zeiteinheit."
    ),

    heading("h2", "Ein praktikabler Wochenplan"),
    paragraph(
      "Beispiel für jemanden, der drei- bis viermal pro Woche trainieren kann:"
    ),
    ul([
      "Montag: Kraft Unterkörper (45 Min) + 15 Min Cardio als Cool-Down",
      "Mittwoch: Cardio Intervall (25-30 Min) oder Gruppenkurs",
      "Freitag: Kraft Oberkörper (45 Min) + 15 Min moderates Cardio",
      "Samstag: Längere moderate Cardio-Einheit (45-60 Min Fahrrad, Lauf oder Schwimmen)",
    ]),
    paragraph(
      "An Sonntag und Dienstag/Donnerstag bewusst Pause machen oder aktive Erholung wie Spaziergang oder Mobility. Das Programm deckt WHO-Vorgaben ab, trainiert beide Systeme und lässt genug Regeneration."
    ),

    heading("h2", "Wann Krafttraining und Cardio separieren?"),
    paragraph(
      "Konflikte gibt es nur bei sehr hoher Intensität. Wer in einer Einheit ein hartes HIIT-Intervall macht und direkt danach Krafttraining versucht, bekommt weder Ausdauer- noch Kraftreiz richtig ab. Zwei Strategien:"
    ),
    ul([
      "Intensive Einheiten auf unterschiedliche Tage legen (z.B. HIIT Dienstag, Kraft Mittwoch).",
      "Kraft und moderates Cardio in eine Session, Intensität in die separate Cardio-Einheit.",
    ]),

    heading("h2", "Die fünf häufigsten Fehler"),
    ul([
      "Ausschließlich cardioen, um abzunehmen: Muskelmasse geht verloren, Körper wirkt schlapp.",
      "Nur Krafttraining, keine Ausdauer: Herzgesundheit und Ausdauer im Alltag leiden.",
      "Cardio vor Kraft bei Ziel Muskelaufbau: Kraftleistung ist im anschließenden Training messbar schlechter.",
      "HIIT täglich: Hohes Verletzungs- und Überlastungsrisiko, Regeneration kommt zu kurz.",
      "Gewichtsabnahme ohne Eiweiß-Zufuhr anpassen: Muskelverlust wird wahrscheinlicher.",
    ]),

    heading("h2", "Was die Forschung zur optimalen Dosis sagt"),
    paragraph(
      "Die WHO empfiehlt pro Woche mindestens 150 Minuten moderate oder 75 Minuten vigorose Aktivität plus zwei Tage Muskel-Stärkung. Für ",
      bold("substanzielle"),
      " gesundheitliche Effekte eher 300 bzw. 150 Minuten. Mehr ist möglich, ab 450 Minuten moderater Aktivität pro Woche flachen die gesundheitlichen Gewinne aber ab. Das klassische 10.000-Schritte-Ziel liefert einen guten Teil der Cardio-Belastung im Alltag."
    ),

    heading("h2", "Was das bei Casa Sports konkret bedeutet"),
    paragraph(
      "In unserem Studio deckst du beide Bereiche komplett ab: ",
      bold("Kraftbereich"),
      " mit Geräten und freien Gewichten, ",
      bold("Cardio-Bereich"),
      " mit Laufband, Crosstrainer, Fahrrad, Rudergerät und Ski-Ergometer. Unsere Gruppenkurse wie Cycling, Functional und Zirkel verbinden beides in einer Einheit. Wer noch nicht weiß, welche Mischung zu seinem Ziel passt, bekommt das im Einführungstermin geklärt."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Cardio oder Krafttraining ist die falsche Frage. Sinnvoll ist fast immer beides, in einer Gewichtung, die zu deinem Ziel passt. Wer abnehmen, definieren oder einfach gesünder werden will, trainiert am besten drei bis vier Mal pro Woche in einer 50:50-Mischung und beginnt kombinierte Einheiten mit Krafttraining."
    ),
    paragraph(
      "Probiere die Mischung bei uns aus: ",
      link("/probetraining", "Kostenloses Probetraining buchen", false),
      "."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://www.tandfonline.com/doi/full/10.1080/15502783.2025.2507949",
          "Comparison of concurrent, resistance, or aerobic training on body fat loss: Meta-Analysis (JISSN 2025)"
        ),
      ],
      [
        link(
          "https://theconversation.com/should-you-do-cardio-before-or-after-lifting-weights-new-research-might-finally-have-the-answer-257502",
          "Research on training order (2025)"
        ),
      ],
      [
        link(
          "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
          "WHO Factsheet Physical Activity"
        ),
      ],
      [
        link(
          "https://www.mdpi.com/2227-9032/13/7/776",
          "Effects of Concurrent Training on Body Composition in Middle-Aged and Older Adults (MDPI 2025)"
        ),
      ],
    ]),
  ]),
}
