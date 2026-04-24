import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const klimmzugLernenVonNull = {
  slug: "klimmzug-lernen-von-null",
  title: "Klimmzug lernen von null: Der 8-Wochen-Plan zum ersten Pull-up",
  excerpt:
    "Ein Klimmzug ist das Aufnahmeritual im Fitnessstudio. Mit strukturierter Progression über Negativ-Klimmzüge, Bandunterstützung und Scapula-Pulls schaffst du den ersten sauberen Klimmzug in 6-8 Wochen.",
  categorySlug: "training",
  authorSlug: "hidayet",
  coverImagePath: "/images/casasports-functional-training.webp",
  keyTakeaway:
    "Den ersten Klimmzug lernst du systematisch über 4 Progressions-Stufen: Dead Hang, Scapular Pulls, Negative Klimmzüge (3-5 Sekunden Abstieg), Band-unterstützte Klimmzüge. Mit 2-3 Einheiten pro Woche kommen die meisten Anfänger nach 6-8 Wochen zum ersten Reppullup.",
  faq: [
    {
      question: "Wie lange dauert es, bis ich den ersten Klimmzug schaffe?",
      answer:
        "Mit systematischem Training und 2-3 Einheiten pro Woche schaffen die meisten Anfänger den ersten Klimmzug in 6-12 Wochen. Wer übergewichtig ist oder wenig Grundkraft hat, braucht 3-6 Monate. Geduld ist die wichtigste Zutat.",
    },
    {
      question: "Was hilft mehr: Negative oder Band-unterstützt?",
      answer:
        "Beides hat seinen Platz. Negative Klimmzüge bauen die maximale Kraft auf, Band-unterstützt trainiert die komplette Bewegung. Beste Kombination: 2-3 Sätze Negative + 2-3 Sätze Band-unterstützt pro Einheit.",
    },
    {
      question: "Kann ich Klimmzüge an der Türrahmen-Stange lernen?",
      answer:
        "Ja, solange die Stange sicher montiert ist und deine Körpergröße passt. Wichtig: Stange muss mindestens 15 cm Platz zum Rahmen haben, damit die Hand sauber greifen kann. Im Studio hast du besseres Equipment und mehr Varianten.",
    },
    {
      question: "Welcher Griff ist für Anfänger am besten?",
      answer:
        "Schulterbreit mit Handflächen nach vorn (Pronation, Pull-up). Der Chin-up (Handflächen zum Körper) ist etwas leichter, weil der Bizeps stärker mitarbeitet. Beide Varianten sind gut, viele Anfänger fangen mit Chin-ups an.",
    },
    {
      question: "Was tun, wenn ich schnell aus dem Hang rutsche?",
      answer:
        "Griffkraft ist bei vielen Anfängern der Flaschenhals. Trainiere sie mit Dead Hangs (Ziel: 30+ Sekunden), Farmer's Walks und wenn nötig Chalk auf den Händen. Griffkraft kommt schnell, wenn du sie gezielt trainierst.",
    },
    {
      question: "Muss ich bis ganz nach oben?",
      answer:
        "Ein Klimmzug gilt erst als 'sauber', wenn dein Kinn die Stange überquert. In der Lernphase zählen auch Halb-Klimmzüge zum Fortschritt, aber das Ziel ist die volle Bewegung.",
    },
    {
      question: "Ab welchem Gewicht wird es schwierig?",
      answer:
        "Je mehr du wiegst, desto mehr Kraft brauchst du. Als Faustregel: für den ersten Klimmzug brauchst du etwa 80-100 Prozent deines Körpergewichts an Zugkraft. Wer 10-15 Kilo abnimmt, verkürzt den Weg zum ersten Klimmzug oft erheblich.",
    },
  ],
  content: root([
    paragraph(
      "Der erste saubere Klimmzug ist für viele ein magischer Moment. Gleichzeitig ist er für viele Anfänger der unerreichbar scheinende Gipfel. Die gute Nachricht: mit strukturiertem Training schaffen es fast alle innerhalb von 8 bis 12 Wochen. Dieser Guide zeigt den bewährten Plan."
    ),

    heading("h2", "Warum Klimmzüge so anspruchsvoll sind"),
    paragraph(
      "Beim Klimmzug ziehst du dein gesamtes Körpergewicht gegen die Schwerkraft. Rücken (besonders Latissimus), Schultern, Bizeps, Unterarme und Rumpf arbeiten simultan. Die Übung ist technisch komplex, weil der Körper im freien Raum hängt und stabilisiert werden muss."
    ),
    paragraph(
      "Viele Studios-Anfänger können einige Kniebeugen, Liegestütz und vielleicht ein paar Kreuzheben machen, aber null Klimmzüge. Grund: der Körper hebt beim Liegestütz nur etwa 65 Prozent des Körpergewichts, beim Klimmzug 100 Prozent. Ein großer Sprung."
    ),

    heading("h2", "Die 4-Stufen-Progression"),

    heading("h3", "Stufe 1: Dead Hang (Wochen 1-2)"),
    paragraph(
      "Einfach nur an der Stange hängen, Arme voll gestreckt, Schultern aktiv (nicht schlaff). Ziel: Griffkraft und Gewöhnung an die Position."
    ),
    ul([
      "Übungsvolumen: 3 Sätze à 15-30 Sekunden, 3x pro Woche",
      "Progression: jede Woche 5 Sekunden länger",
      "Ziel nach 2 Wochen: 45 Sekunden in einem Satz",
    ]),

    heading("h3", "Stufe 2: Scapular Pulls (Wochen 2-4)"),
    paragraph(
      "Aus dem Dead Hang die Schulterblätter nach unten und zusammenziehen, ohne die Arme zu beugen. Der Körper hebt sich dabei nur 2-5 cm."
    ),
    ul([
      "Übungsvolumen: 3 Sätze à 8-10 kontrollierte Wiederholungen",
      "Fokus: oberer Rücken, Aktivierung des Latissimus",
      "Progression: 10-12 Wiederholungen pro Satz",
    ]),

    heading("h3", "Stufe 3: Negative Klimmzüge (Wochen 3-6)"),
    paragraph(
      "Mit Hilfe (Box oder Sprung) in die obere Position, Kinn über der Stange. Dann langsam 3-5 Sekunden abwärts kontrolliert. Oben erneut hochspringen, nicht aus der unteren Position ziehen."
    ),
    ul([
      "Übungsvolumen: 3-4 Sätze à 3-5 Wiederholungen",
      "Progression: längere Absenkzeit (bis 7 Sekunden)",
      "Wichtig: keine freien Fälle nach unten",
    ]),

    heading("h3", "Stufe 4: Band-unterstützte Klimmzüge (Wochen 4-8)"),
    paragraph(
      "Ein Widerstandsband um die Stange, Knie oder Fuß ins Band. Das Band nimmt einen Teil deines Gewichts ab und macht die volle Bewegung möglich."
    ),
    ul([
      "Übungsvolumen: 3 Sätze à 6-8 Wiederholungen",
      "Progression: schwächere Bänder nutzen",
      "Ziel: schwächstes Band vor erstem unassisted Klimmzug",
    ]),

    heading("h3", "Stufe 5: Der erste Klimmzug (Woche 6-12)"),
    paragraph(
      "Ein- oder zweimal pro Einheit versuchen, einen Klimmzug ohne Band zu machen. Wenn er funktioniert: feiern, protokollieren, nächstes Ziel sind zwei. Wenn nicht: noch zwei Wochen Progression, neuer Versuch."
    ),

    heading("h2", "Wochenplan für den Klimmzug-Einstieg"),

    table([
      ["Tag", "Übung", "Sätze × Wdh", "Fokus"],
      ["Montag", "Dead Hangs + Scapular Pulls", "3 × 30s + 3 × 10", "Griffkraft"],
      ["Mittwoch", "Negative Klimmzüge", "4 × 3-5 (5s Abstieg)", "Exzentrische Kraft"],
      ["Freitag", "Band-unterstützte Klimmzüge", "3 × 6-8", "Volle Bewegung"],
      ["Täglich", "2 × 30s Dead Hang (am Ende jeder Session)", "—", "Griffkraft"],
    ]),

    heading("h2", "Ergänzende Übungen"),

    ul([
      [bold("Australian Pull-ups (Inverted Rows)"), text(": Stange auf Hüfthöhe, Körper schräg, ziehen. 3 x 10 als Aufwärmen oder Finisher.")],
      [bold("Latzug"), text(": klassisches Gerät, schult genau die Klimmzug-Muskulatur. 3 x 10 mit 60-70% Körpergewicht.")],
      [bold("Rudern am Kabel"), text(": hintere Schulter und Latissimus. 3 x 10 mit moderatem Gewicht.")],
      [bold("Farmer's Walk"), text(": Griffkraft und Rumpf. 3 x 30 Meter mit mittelschweren Kurzhanteln.")],
    ]),

    heading("h2", "Typische Fehler"),
    ul([
      "Ungeduld: Klimmzüge sind nicht in 2 Wochen da, egal was Instagram zeigt",
      "Schwung nehmen (Kipping): bei der Lernphase tabu, das trainiert nicht die reine Zugkraft",
      "Zu frühes Absenken: wenn das Kinn die Stange nicht überquert hat, war es kein ganzer Klimmzug",
      "Nur eine Übung: Dead Hangs allein reichen nicht, alle 4 Stufen sind wichtig",
      "Zu wenig Regeneration: Klimmzug-Muskulatur braucht 48-72 Stunden zwischen Einheiten",
      "Zu viel auf einmal: 2-3 Einheiten pro Woche sind das Optimum",
    ]),

    heading("h2", "Wenn der Fortschritt stockt"),
    paragraph(
      "Nach 6-8 Wochen sollte sichtbarer Fortschritt da sein. Wenn nicht, check:"
    ),
    ul([
      "Frequenz zu niedrig? Mindestens 2x pro Woche spezifisch für Klimmzüge",
      "Technik-Breakdown unter Ermüdung? Lieber weniger Wiederholungen sauber",
      "Griffkraft? Check mit Dead Hang Zeit",
      "Gewicht zu hoch für die aktuelle Phase? Bandunterstützung verstärken",
      "Regeneration? Schlaf, Ernährung, Stress prüfen",
    ]),

    heading("h2", "Griffvarianten und ihre Unterschiede"),

    table([
      ["Griff", "Handposition", "Primäre Muskeln", "Schwierigkeit"],
      ["Chin-Up (Supination)", "Handflächen zum Körper", "Latissimus, Bizeps", "Leichteste Variante"],
      ["Pull-Up (Pronation)", "Handflächen weg vom Körper", "Latissimus, Rücken breit", "Standard-Klimmzug"],
      ["Neutral Grip", "Parallele Griffe, Handflächen zueinander", "Lat, Bizeps, wenig Schulter-Stress", "Mittel, schulterfreundlich"],
      ["Weiter Griff", "Deutlich über Schulterbreit", "Breiter Rücken, Schulter", "Schwieriger, Fokus Breite"],
      ["Enger Griff", "Schmaler als Schulter", "Mittlerer Rücken, Bizeps", "Fokus auf Volumen, enge Bewegung"],
      ["Ein-Arm-Klimmzug", "Eine Hand, andere assistiert", "Maximale Kraft", "Elite-Niveau"],
    ]),

    heading("h2", "Anatomie: Welche Muskeln arbeiten?"),
    paragraph(
      "Klimmzüge sind eine der komplexesten Körpergewichtsübungen. Beteiligt sind:"
    ),
    ul([
      [bold("Latissimus dorsi"), text(": der breite Rückenmuskel, Hauptantrieb der Zugbewegung")],
      [bold("Rhomboids + Trapezius mittel"), text(": ziehen die Schulterblätter zusammen")],
      [bold("Bizeps brachii + Brachialis"), text(": beugen den Arm (bei Chin-Up dominanter)")],
      [bold("Deltoideus posterior"), text(": hintere Schulter, stabilisiert")],
      [bold("Rectus abdominis + Core"), text(": hält den Körper in gerader Linie")],
      [bold("Unterarmflexoren"), text(": Griffkraft, oft der limitierende Faktor")],
    ]),
    paragraph(
      "Wer Probleme hat, dem Kinn die Stange zu überqueren, hat meist ein schwaches Latissimus-Aktivierungsmuster. Scapular Pulls und Face Pulls davor helfen."
    ),

    heading("h2", "Zusatzgewicht-Progression"),
    paragraph(
      "Sobald du 8-10 saubere Klimmzüge schaffst, beginnt die Gewichts-Progression mit Dip-Gürtel:"
    ),

    table([
      ["Stufe", "Klimmzüge Körpergewicht", "Zusatzgewicht", "Ziel"],
      ["Einstieg", "5-8 sauber", "0 kg", "Grundtechnik"],
      ["Intermediate", "8-12", "5-10 kg", "Kraft aufbauen"],
      ["Fortgeschritten", "5-8 mit 15-20 kg", "15-25 kg", "Maximalkraft"],
      ["Elite", "3-5 mit 30+ kg", "30+ kg", "Spezialisierung"],
      ["One-Arm-Vorbereitung", "5 mit 50% Körpergewicht", "50% KG", "Richtung Ein-Arm"],
    ]),

    heading("h2", "Was nach dem ersten Klimmzug?"),
    paragraph(
      "Herzlichen Glückwunsch - du gehörst jetzt zu einer kleinen Minderheit. Die nächsten Ziele:"
    ),
    ol([
      "5 Klimmzüge hintereinander",
      "10 Klimmzüge",
      "Pull-up (Pronation) statt Chin-up",
      "Unterschiedliche Griffbreiten (weit, eng, neutral)",
      "Mit Zusatzgewicht (Dip-Gürtel mit Hantelscheiben)",
      "Muscle-up als nächstes Fernziel",
    ]),

    heading("h2", "Klimmzug-Training bei Casa Sports"),
    paragraph(
      "Im Functional-Bereich stehen mehrere Klimmzug-Stangen, Widerstandsbänder und TRX-Schlingen bereit. Im Kraftbereich haben wir Latzug-Maschinen mit voller Gewichtsprogression. Der Einführungstermin zeigt dir den passenden Einstieg."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Der erste Klimmzug ist kein Mythos. Mit der richtigen Progression schaffen ihn die meisten in 6-12 Wochen. Wichtig sind Geduld, Frequenz und die saubere Ausführung jeder Vorstufe. Wer die 4 Progressions-Stufen systematisch durchgeht und sich nicht vom Ego treiben lässt, kommt zuverlässig ans Ziel."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://www.phd.com/perform-smart/pull-up-progression/",
          "Pull Up Progression Plan (PHD)"
        ),
      ],
      [
        link(
          "https://www.powrpersonaltraining.com/guides/negative-pull-ups/",
          "Negative Pull Ups Guide (POWR Personal Training)"
        ),
      ],
      [
        link(
          "https://www.nerdfitness.com/blog/do-a-pull-up/",
          "Get Your First Pull-Up in 30 Days (Nerd Fitness)"
        ),
      ],
    ]),
  ]),
}
