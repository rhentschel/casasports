import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const mobilityRoutineAlltag = {
  slug: "mobility-routine-alltag",
  title: "Mobility-Routine für den Alltag: 10 Minuten täglich gegen Büro-Schmerzen",
  excerpt:
    "Eine strukturierte Mobility-Routine beugt Rücken-, Nacken- und Hüftschmerzen vor und verbessert Bewegungsqualität im Alltag. Hier der 10-Minuten-Plan für jeden Tag.",
  categorySlug: "wellness",
  authorSlug: "hidayet",
  coverImagePath: "/images/casasports-functional-training.webp",
  keyTakeaway:
    "10 Minuten Mobility täglich sind wirksamer als eine Stunde einmal pro Woche. Fokus auf die vier problematischsten Bereiche moderner Büro-Menschen: Brustwirbelsäule, Hüftbeuger, obere Schultern und Knöchel. Schon nach 4-6 Wochen sind messbare Verbesserungen in Beweglichkeit und Wohlbefinden spürbar.",
  faq: [
    {
      question: "Was ist der Unterschied zwischen Stretching und Mobility?",
      answer:
        "Stretching dehnt passiv einen Muskel. Mobility trainiert aktive Kontrolle über den vollen Bewegungsumfang eines Gelenks - also Beweglichkeit plus Kraft in endständigen Positionen. Mobility ist wirksamer für Alltagsleistung und Verletzungsprävention.",
    },
    {
      question: "Wie oft Mobility pro Woche?",
      answer:
        "Täglich ist optimal. 10-15 Minuten pro Tag bringen mehr als 60 Minuten einmal pro Woche. Der Körper passt sich an regelmäßige Reize besser an. Minimum: 3-4 Mal pro Woche für spürbare Effekte.",
    },
    {
      question: "Ab wann sehe ich Ergebnisse?",
      answer:
        "Nach 2 Wochen: weniger Verspannungsgefühl. Nach 4-6 Wochen: messbare Beweglichkeitsverbesserung. Nach 12 Wochen: deutlich bessere Körperhaltung, reduzierte Schmerzen. Geduld ist die wichtigste Zutat.",
    },
    {
      question: "Vor oder nach dem Training?",
      answer:
        "Beides möglich. Vor dem Training: dynamische Mobility zum Aktivieren. Nach dem Training: kombination aus statischem Stretching und aktiven Mobility-Übungen. Für Büromenschen: ideale Zeit ist morgens direkt nach dem Aufstehen oder abends vor dem Schlaf.",
    },
    {
      question: "Ich bin sehr unbeweglich - kann ich überhaupt anfangen?",
      answer:
        "Genau deswegen solltest du anfangen. Unbeweglich ist kein Zustand, sondern ein Trainingsdefizit. Die Übungen lassen sich skalieren: in beliebiger Intensität und Tiefe durchführbar. Wichtig ist Konsistenz.",
    },
    {
      question: "Kann Mobility Rückenschmerzen heilen?",
      answer:
        "Bei unspezifischen Schmerzen (die häufigste Art): oft ja. Mobility verbessert Haltung und entlastet strapazierte Strukturen. Bei akuten Verletzungen, Bandscheibenvorfällen oder neurologischen Symptomen: vorher ärztlich abklären.",
    },
    {
      question: "Welche Ausrüstung brauche ich?",
      answer:
        "Nichts außer einer Matte. Keine Gewichte, keine Geräte. Für Fortgeschrittene eignet sich ein Widerstandsband (10-20 Euro) für zusätzliche Varianten. Foam Roller als Ergänzung für Selbst-Massage.",
    },
  ],
  content: root([
    paragraph(
      "Der Alltag moderner Menschen bewegt sich in wenigen, sich wiederholenden Mustern: sitzen, nach vorn gebeugt am Schreibtisch, nach vorn gebeugt am Handy, Auto fahren, schlafen. Das Ergebnis sind Hüfte die nicht mehr streckt, Brustwirbelsäule die nicht mehr rotiert, Schultern die chronisch nach vorn rollen. Mobility ist die Antwort darauf."
    ),

    heading("h2", "Was Mobility ist und was nicht"),
    paragraph(
      "Mobility ist die aktive Kontrolle über den vollen Bewegungsumfang eines Gelenks. Ein Schulterkreis geht weiter als nur Armheben. Eine tiefe Hocke weiter als nur Knie beugen. Mobility unterscheidet sich in drei wichtigen Punkten von klassischem Stretching:"
    ),
    ul([
      "Aktiv statt passiv: du kontrollierst die Bewegung, nicht die Schwerkraft",
      "Kraft in Endpositionen: du trainierst die Muskeln, die dich an den äußersten Punkt bringen",
      "Funktional: die Übungen entsprechen alltäglichen Bewegungsmustern",
    ]),

    heading("h2", "Die vier Problemzonen des modernen Büromenschen"),

    heading("h3", "1. Brustwirbelsäule (Thorax)"),
    paragraph(
      "8 Stunden gekrümmt am Bildschirm - die Brustwirbelsäule verliert Rotations- und Extensionsfähigkeit. Folgen: Nackenschmerzen, Schulterprobleme, flache Atmung."
    ),

    heading("h3", "2. Hüftbeuger"),
    paragraph(
      "Sitzen hält die Hüftbeuger in verkürzter Position. Wenn du aufstehst, wird das Becken nach vorn gezogen, der untere Rücken überlastet. Rückenschmerzen-Ursache Nummer eins bei Büromenschen."
    ),

    heading("h3", "3. Schultern (oberer Rücken und Brust)"),
    paragraph(
      "Nach-vorn-gerollte Schultern durch Maus-Benutzung und Handy. Die Brustmuskeln verkürzen sich, die oberen Rückenmuskeln werden schwach und überdehnt."
    ),

    heading("h3", "4. Knöchel"),
    paragraph(
      "Durch Schuhe mit Absatz und wenig Bewegung verlieren Knöchel ihre Dorsalflexion-Fähigkeit. Folgen: schlechte Kniebeugen, Hüft-Kompensationen, Knieschmerzen."
    ),

    heading("h2", "Die 10-Minuten Daily-Mobility-Routine"),
    paragraph(
      "Jede Übung 60 Sekunden oder 10 Wiederholungen pro Seite. Keine Pause zwischen den Übungen, flüssige Sequenz."
    ),

    table([
      ["Nr", "Übung", "Ziel", "Dauer"],
      ["1", "Cat-Cow (Katzen-Buckel)", "Wirbelsäulen-Mobilität", "60 Sek"],
      ["2", "Thoracic Rotation in Seitlage", "Brustwirbel-Rotation", "10/Seite"],
      ["3", "World's Greatest Stretch", "Hüftbeuger + Oberkörper", "5/Seite"],
      ["4", "90/90 Hüftmobilität", "Innen-/Außenrotation Hüfte", "10/Seite"],
      ["5", "Doorway Pec Stretch", "Brustmuskel öffnen", "60 Sek"],
      ["6", "Scapula Pulls an der Stange", "Obere Rückenmuskulatur", "10 Wdh"],
      ["7", "Wall Squat Hold", "Tiefe Hocke trainieren", "60 Sek"],
      ["8", "Ankle Dorsiflexion", "Knöchel-Mobilität", "10/Seite"],
    ]),

    heading("h2", "Die Übungen im Detail"),

    heading("h3", "Cat-Cow (Katzen-Buckel)"),
    paragraph(
      "Vierfüßlerstand. Einatmen: Rücken durchstrecken, Kopf nach oben (Cow). Ausatmen: Rücken runden, Kinn zur Brust (Cat). Langsame kontrollierte Bewegung, 15 Wiederholungen."
    ),

    heading("h3", "Thoracic Rotation in Seitlage"),
    paragraph(
      "Seitlich liegen, oberes Bein angewinkelt auf Kissen/Block. Oberen Arm nach vorne strecken, dann langsam nach hinten öffnen, Blick folgt. Brustwirbelsäule dreht sich in beide Richtungen. 10 Wiederholungen pro Seite."
    ),

    heading("h3", "World's Greatest Stretch"),
    paragraph(
      "Aus der Liegestütz-Position rechter Fuß neben rechte Hand. Rechten Arm unter dem Körper durchführen und dann nach oben heben, Brustwirbel dreht sich auf. 5 Wiederholungen pro Seite. Eine der effektivsten Ganzkörper-Mobility-Übungen."
    ),

    heading("h3", "90/90 Hüftmobilität"),
    paragraph(
      "Sitzen mit Beinen in 90-Grad-Winkel vor und hinter dem Körper. Oberkörper aufrecht, dann langsam auf die andere Seite drehen und Beine tauschen. Öffnet Hüften in beide Richtungen. 10 Wiederholungen."
    ),

    heading("h3", "Doorway Pec Stretch"),
    paragraph(
      "Im Türrahmen stehen, Unterarm an Rahmen, 90-Grad-Winkel zum Körper. Einen Schritt nach vorn, spüren wie Brustmuskel gedehnt wird. 60 Sekunden pro Seite. Bei Büromenschen oft deutliche Verbesserung nach 2-3 Wochen."
    ),

    heading("h3", "Scapula Pulls"),
    paragraph(
      "An einer Klimmzugstange hängen mit gestreckten Armen. Schulterblätter nach unten und zusammen ziehen ohne Arme zu beugen - Körper hebt sich 2-5 cm. Wichtig für gesunden oberen Rücken und Schulter-Basis."
    ),

    heading("h3", "Wall Squat Hold"),
    paragraph(
      "Rücken an der Wand, in tiefe Hocke gehen (Ober-/Unterschenkel 90 Grad), 60 Sekunden halten. Trainiert Oberschenkel und Glutes isometrisch, fördert Hüft-Mobilität in tiefer Position."
    ),

    heading("h3", "Ankle Dorsiflexion"),
    paragraph(
      "Kniebeuge-Position, eine Hand am Boden, Knie über Zehen des vorderen Fußes schieben, Ferse bleibt am Boden. 10 Wiederholungen, pulsierend. Grundlage für alle Squat- und Lauf-Übungen."
    ),

    heading("h2", "Wann du welche Routine machen solltest"),

    table([
      ["Tageszeit", "Routine", "Fokus"],
      ["Morgens", "Komplette 10-Min-Routine", "Körper wecken, Steifheit lösen"],
      ["Vor dem Training", "Kurze 5-Min dynamisch", "Aktivierung für Training"],
      ["Nach dem Training", "5 Min statisch + Foam Rolling", "Regeneration"],
      ["Im Büro (alle 60 Min)", "2 Min Desk-Stretches", "Gegen Haltungsprobleme"],
      ["Abends", "5 Min ruhige Routine", "Entspannung vor dem Schlaf"],
    ]),

    heading("h2", "Desk-Stretches für zwischendurch"),
    paragraph(
      "Drei Stretches, die am Schreibtisch funktionieren, alle 60-90 Minuten:"
    ),
    ol([
      "Nacken-Dehnung: Kopf zur Seite neigen, mit Hand leicht verstärken, 30 Sek pro Seite",
      "Schulterkreisen: 10x vorwärts, 10x rückwärts, bewusst weit ausholen",
      "Sitz-90/90: ein Bein auf dem anderen kreuzen, Oberkörper vorbeugen, 30 Sek pro Seite",
    ]),

    heading("h2", "Häufige Fehler"),
    ul([
      "Zu ambitioniert am Anfang: lieber täglich 5 Min als einmal pro Woche 60 Min",
      "Schmerz statt Dehnung: Unterschied lernen, nie in scharfen Schmerz dehnen",
      "Falsche Atmung: tiefe, ruhige Atemzüge, nicht Luft anhalten",
      "Zu starke Bewegungen: Mobility ist kontrolliert, nicht explosiv",
      "Vergleichen mit anderen: Beweglichkeit ist individuell, nur eigener Fortschritt zählt",
      "Aufgeben nach 2 Wochen: Effekte sind über 4-8 Wochen spürbar",
    ]),

    heading("h2", "Mobility-Testing alle 4 Wochen"),
    paragraph(
      "Messe deinen Fortschritt mit einfachen Tests:"
    ),
    ul([
      "Kniebeuge ohne Last: wie tief ohne Fersen abheben?",
      "Sitzen und Vorbeugen: Finger wie weit Richtung Zehen?",
      "Schulter-Reach: Hand von oben hinter Rücken, andere von unten - schaffen sich zu berühren?",
      "Kniender Hüftbeuger-Stretch: Wie tief ohne Kompensation?",
      "Thoracic Rotation: Wie weit dreht der Oberkörper im Sitz?",
    ]),
    paragraph(
      "Werte notieren oder fotografieren, alle 4-6 Wochen wiederholen. Fortschritt ist die beste Motivation."
    ),

    heading("h2", "Was Casa Sports bietet"),
    paragraph(
      "Im Functional-Bereich haben wir Matten, Widerstandsbänder und Foam Roller für deine Mobility-Routine. In unseren Kursen arbeiten wir immer auch an Beweglichkeit. Für strukturierte Begleitung bietet sich Personal Training an."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Mobility ist keine optionale Ergänzung, sondern die Grundlage für gesunde Bewegung ein Leben lang. 10 Minuten täglich reichen, um die vier Problemzonen moderner Menschen anzugehen. Wer durchhält, fühlt sich nach 4-6 Wochen deutlich besser in seinem Körper und beugt ernsthaften Schmerzen vor."
    ),
    paragraph(
      "Mehr zum Thema Bewegung im Alltag im ",
      link("/blog/functional-training-im-alltag", "Functional Training Guide", false),
      "."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC4637917/",
          "Self-Myofascial Release on ROM and Performance"
        ),
      ],
      [
        link(
          "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1672010/full",
          "Core Training and Mobility for Chronic Low Back Pain (Frontiers 2025)"
        ),
      ],
    ]),
  ]),
}
