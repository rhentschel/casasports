import { root, paragraph, heading, ul, ol, bold, link, text, table, image } from "../lexical-builder"

export const fitnessTrainingDerKompletteGuide = {
  slug: "fitness-training-der-komplette-guide",
  title: "Fitness-Training: Der komplette Guide für Einsteiger",
  excerpt:
    "Der vollständige Leitfaden zum Einstieg in strukturiertes Training: Was die WHO empfiehlt, wie du Kraft und Ausdauer kombinierst, welche Prinzipien wirklich zählen und wie du in 12 Wochen deine Basis legst.",
  keyTakeaway:
    "Ein solider Fitnessplan für Einsteiger deckt drei Bausteine ab: Krafttraining zwei- bis dreimal pro Woche, 150-300 Minuten moderate Ausdauerbelastung und regelmäßige Mobility. Die WHO-Empfehlung von 2020 bleibt der Goldstandard und bringt laut Evidenz den größten gesundheitlichen Nutzen pro Zeiteinheit. Entscheidend ist Konsistenz über Monate, nicht das perfekte Programm.",
  faq: [
    {
      question: "Wie fange ich am besten an?",
      answer:
        "Starte mit einem Einführungstermin im Studio oder einem Arzt-Check, wenn du Vorerkrankungen hast. Baue dann langsam auf: drei Einheiten pro Woche à 30-45 Minuten, Ganzkörper-Krafttraining plus Cardio im Wechsel. Fokus auf saubere Technik und Konsistenz, nicht auf Volumen. Die ersten vier Wochen sind Technik-Lernphase, nicht Leistungsphase.",
    },
    {
      question: "Wie lange sollte eine Einheit dauern?",
      answer:
        "45 bis 60 Minuten inklusive Aufwärmen und Abkühlen sind für die meisten ideal. Kürzere, intensive Einheiten (30 Min) sind oft effektiver als lange Sessions, besonders in den ersten Wochen. Wer mehr als 90 Minuten trainiert, macht meistens etwas falsch (zu viele Pausen oder zu wenig Intensität).",
    },
    {
      question: "Wann sehe ich erste Ergebnisse?",
      answer:
        "Nach 4 bis 6 Wochen fühlst du dich fitter, hast mehr Energie und schläfst besser. Nach 8 bis 12 Wochen sind Kraft-, Ausdauer- und Figurveränderungen messbar. Nachhaltige Ergebnisse brauchen Monate, keine Tage. Wer nach 2 Wochen aufhört, verschenkt den eigentlichen Gewinn. Die großen Fortschritte kommen zwischen Woche 12 und Monat 6.",
    },
    {
      question: "Soll ich jeden Tag trainieren?",
      answer:
        "Nein. Muskeln wachsen in den Pausen. 3-5 Trainingstage pro Woche plus Bewegung im Alltag sind für die meisten optimal. Jeden Tag intensiv zu trainieren führt schneller zu Übertraining als zu besseren Ergebnissen. An Ruhetagen leichte Aktivitäten wie Spazierengehen sind dennoch sinnvoll.",
    },
    {
      question: "Brauche ich separate Bauchmuskel-Einheiten?",
      answer:
        "Grundübungen wie Kniebeuge, Kreuzheben und Klimmzüge trainieren den Rumpf bereits mit. Zwei kurze gezielte Einheiten pro Woche (Planks, Dead Bugs, Pallof-Press) reichen als Ergänzung. Sichtbare Bauchmuskeln kommen primär durch niedrigen Körperfettanteil, nicht durch isoliertes Training - Bauchmuskeln baut man in der Küche.",
    },
    {
      question: "Kann ich zu Hause statt im Studio trainieren?",
      answer:
        "Für Einsteiger funktioniert Zuhause-Training mit Körpergewicht und ein paar Kurzhanteln gut. Nach einigen Monaten wird Progression zu Hause aber schwierig, weil Ausrüstung und Platz limitieren. Das Studio bietet Gerätevielfalt, fachliche Begleitung und die soziale Komponente, die Langzeit-Konsistenz deutlich erleichtert. Die meisten Zuhause-Trainierenden hören nach 4-6 Monaten auf.",
    },
    {
      question: "Was mache ich gegen fehlende Motivation?",
      answer:
        "Konsistenz schlägt Motivation. Feste Trainingstage und -zeiten im Kalender, Trainingspartner oder Gruppenkurse, kleine messbare Ziele und kein Perfektionismus. Wer sich auf 80 Prozent konzentriert und 20 Prozent schlechte Tage akzeptiert, bleibt langfristig dabei. Motivation kommt durch Ergebnisse, nicht umgekehrt.",
    },
    {
      question: "Ab welchem Alter ist Krafttraining sinnvoll?",
      answer:
        "Strukturiertes Krafttraining ist ab dem Jugendalter sinnvoll und bleibt bis ins hohe Alter der wichtigste Erhaltungsreiz für Muskeln und Knochen. Senioren profitieren besonders stark, weil Muskelabbau (Sarkopenie) sonst kontinuierlich voranschreitet. Ab 65 Jahren ist Krafttraining oft wichtiger als Cardio.",
    },
    {
      question: "Macht Cardio Muskeln kaputt?",
      answer:
        "Nein, in moderaten Dosen. Wer 2-3 Cardio-Einheiten pro Woche macht, baut nicht weniger Muskeln auf als jemand ohne Cardio. Nur extreme Ausdauer-Umfänge (mehr als 5 Stunden pro Woche) können Hypertrophie messbar bremsen. Moderater Cardio ist sogar förderlich für Regeneration und Herzgesundheit.",
    },
    {
      question: "Was ist progressive Overload?",
      answer:
        "Das Prinzip, dass dein Körper stärkere Reize braucht, um weiter zu adaptieren. Praktisch heißt das: Gewicht erhöhen, mehr Wiederholungen, mehr Sätze, kürzere Pausen oder schwierigere Varianten einer Übung. Ohne Progression stagniert jeder Trainingseffekt nach 4-6 Wochen.",
    },
  ],
  content: root([
    paragraph(
      "Fitness-Training ist keine Frage der Ästhetik, sondern der Investition in jeden zukünftigen Lebensabschnitt. Wer regelmäßig trainiert, reduziert Risiken für Herz-Kreislauf-Erkrankungen, Typ-2-Diabetes, bestimmte Krebsarten und Depressionen deutlich. Gleichzeitig ist niemand so verwirrt wie ein Einsteiger, der sich durch TikTok, YouTube und Fitness-Magazine navigiert. Dieser Guide zeigt, wie du wissenschaftlich fundiert startest und eine Basis legst, die dir Jahrzehnte trägt."
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
      "Konkrete Effekte regelmäßigen Trainings:"
    ),
    ul([
      "Herz-Kreislauf-Sterblichkeit bis 30 Prozent niedriger",
      "Typ-2-Diabetes-Risiko bis 40 Prozent reduziert",
      "Dementia-Risiko im Alter deutlich niedriger",
      "Knochendichte bleibt erhalten statt abzubauen",
      "Schlafqualität spürbar verbessert",
      "Stress- und Depressions-Resilienz höher",
      "Sturz-Risiko im Alter halbiert",
      "Höhere kognitive Leistungsfähigkeit",
    ]),
    paragraph(
      "Wer mit dem Training anfängt, erlebt diese Effekte teilweise schon nach Tagen (besserer Schlaf, mehr Energie), teilweise nach Wochen (Kraft, Ausdauer), teilweise nach Monaten (Körperzusammensetzung, Bluthochdruck, Cholesterin)."
    ),

    heading("h2", "Die Fitness-Pyramide: Was wirklich zählt"),
    paragraph(
      "Bevor du dich in Details verlierst, sortiere die Prioritäten. Nicht alles wirkt gleich stark. Die Pyramide zeigt, was 80 Prozent deines Fortschritts ausmacht und was weniger wichtig ist."
    ),

    image(
      "/images/blog/fitness-pyramid.svg",
      "Fitness-Wirksamkeits-Hierarchie: Was bringt was für Fortschritt",
      "Die Pyramide gewichtet die Erfolgsfaktoren nach empirischer Wirksamkeit. Konsistenz und Grundlagen überwiegen Details."
    ),
    paragraph(
      "Die Konsequenz: Wer konsistent trainiert, genug schläft und sich vernünftig ernährt, macht bereits 80 Prozent seines Fortschritts. Supplements, Timing, perfekte Programmdesigns sind Feinschliff. Die meisten Einsteiger scheitern nicht am Programm, sondern an der Basis - Unregelmäßigkeit, zu wenig Schlaf, zu wenig Protein."
    ),

    heading("h2", "Die drei Säulen jedes guten Fitness-Programms"),

    heading("h3", "Säule 1: Krafttraining"),
    paragraph(
      "Mindestens zwei Tage pro Woche Training aller großen Muskelgruppen, so der WHO-Konsens. Krafttraining erhält Muskelmasse (die sonst ab dem 30. Lebensjahr stetig sinkt), stärkt Knochen, verbessert Insulinempfindlichkeit und formt die Figur. Die ",
      link("https://acsm.org/resistance-training-guidelines-update-2026/", "ACSM hat 2026 ihre Empfehlungen aktualisiert"),
      ": auch niedrig-volumige, aber konsistente Programme bringen den Großteil der Effekte. Neu ist die Empfehlung zum RIR-Konzept (Reps in Reserve) statt prozentualer Gewichtsangaben."
    ),

    heading("h3", "Säule 2: Ausdauertraining"),
    paragraph(
      "150 bis 300 Minuten moderate Aktivität pro Woche, alternativ 75 bis 150 Minuten intensive Aktivität. Das kann sich aufteilen: drei Laufeinheiten à 30 Minuten, zwei Cycling-Kurse à 50 Minuten, 10.000 Schritte am Tag plus zwei kurze Rad-Einheiten. Wichtig ist das Gesamtvolumen, nicht die Form."
    ),
    paragraph(
      "Cardio-Intensitäten verstehen:"
    ),
    ul([
      [bold("Zone 1 (leicht)"), text(": Gespräch problemlos möglich, 60-70% Maximal-Puls - perfekt für Regeneration")],
      [bold("Zone 2 (moderat)"), text(": Reden geht, Singen nicht - 70-80% Max-Puls, der wichtigste Ausdauerbereich")],
      [bold("Zone 3 (schnell)"), text(": Nur kurze Sätze, 80-85% - aerobe Schwelle")],
      [bold("Zone 4 (hart)"), text(": Einzelne Worte, 85-90% - anaerobe Schwelle, HIIT-typisch")],
      [bold("Zone 5 (maximal)"), text(": Keine Worte möglich, 90-100% - Sprint-Intervalle")],
    ]),

    heading("h3", "Säule 3: Mobility und Regeneration"),
    paragraph(
      "Kürzer, aber regelmäßig: 10-15 Minuten Mobility oder Stretching nach dem Training, ein bis zwei Tage komplette Pause pro Woche, ausreichend Schlaf (7-9 Stunden). Ohne diese Säule kippt das gesamte Programm schneller als viele denken. Details zu Mobility im ",
      link("/blog/mobility-routine-alltag", "Mobility-Alltag-Guide", false),
      ", zu Regeneration im ",
      link("/blog/wellness-und-regeneration-guide", "Wellness- und Regenerations-Guide", false),
      "."
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
      "Die wichtigste Phase. Hier scheitern 60 Prozent der Einsteiger, weil sie zu viel wollen und das Körper-Feedback ignorieren."
    ),
    paragraph(
      "Trainings-Beispiel Woche 1-4, Ganzkörper à 30-40 Min, 3x/Woche (gleiches Workout):"
    ),

    table([
      ["Übung", "Sätze", "Wiederholungen", "Ziel"],
      ["Kniebeuge (Bodyweight oder leicht)", "3", "10", "Bewegung lernen"],
      ["Rudern am Kabel oder Band", "3", "10", "Oberer Rücken"],
      ["Liegestütz (auch auf Knien)", "3", "8-10", "Brust + Trizeps"],
      ["Kreuzheben mit Kurzhanteln (leicht)", "3", "10", "Hüftstrecker"],
      ["Schulterdrücken sitzend", "3", "10", "Schulter"],
      ["Plank", "3", "30 Sek", "Rumpf"],
    ]),

    heading("h3", "Woche 5-8: Progression einbauen"),
    paragraph(
      "Jetzt beginnst du aktiv zu steigern. Jede Woche eine kleine Progression: entweder plus 1-2 Wiederholungen pro Satz, oder plus 1-2,5 kg Gewicht. Wenn du alle geplanten Wiederholungen sauber schaffst, steigere in der nächsten Woche."
    ),
    ul([
      "3x Krafttraining (leichte Gewichtssteigerung oder mehr Wiederholungen)",
      "2x Cardio, davon 1x Intervall (1 Min schnell, 2 Min moderat, 20 Min Total)",
      "Beweglichkeits-Einheit 1x pro Woche (20 Min)",
      "Wochenbilanz: Gewicht, Umfänge, Energielevel",
      "Split einführen: Oberkörper vs. Unterkörper als Vorbereitung für Phase 3",
    ]),

    heading("h3", "Woche 9-12: Konsolidierung und Feintuning"),
    paragraph(
      "Erste Split-Programme möglich. Zwei-Tage-Split (Oberkörper/Unterkörper) oder Push-Pull-Legs für Fortgeschrittene. Fokus auf Technik bei höheren Gewichten."
    ),
    ul([
      "3-4x Krafttraining (erste Split-Versuche möglich)",
      "2-3x Cardio mit unterschiedlicher Intensität",
      "1 Gruppenkurs pro Woche für Abwechslung",
      "Standortbestimmung: Ziele für die nächsten drei Monate anpassen",
      "Erste Progressions-Tests: 3-Wiederholungs-Max oder 5-RM-Schätzung",
    ]),

    heading("h2", "Die drei häufigsten Ziele und ihre Umsetzung"),

    heading("h3", "Ziel: Abnehmen"),

    table([
      ["Parameter", "Empfehlung"],
      ["Kaloriendefizit", "300-500 kcal unter Bedarf"],
      ["Protein", "2,0-2,2 g/kg Körpergewicht"],
      ["Training-Mix", "50% Kraft, 50% Cardio"],
      ["Alltagsschritte", "8-12k pro Tag"],
      ["Realistische Rate", "0,5-1 kg pro Woche"],
      ["Schlaf", "Mindestens 7-8 Stunden"],
    ]),
    paragraph(
      "Details zum Kaloriendefizit im ",
      link("/blog/abnehmen-mit-kaloriendefizit", "Abnehm-Guide", false),
      "."
    ),

    heading("h3", "Ziel: Muskelaufbau"),

    table([
      ["Parameter", "Empfehlung"],
      ["Kalorienbilanz", "200-400 kcal Überschuss"],
      ["Protein", "1,8-2,2 g/kg, auf 4-5 Mahlzeiten"],
      ["Training-Mix", "70% Kraft, 30% moderates Cardio"],
      ["Progression", "Penibel verfolgen, Trainingstagebuch"],
      ["Realistische Rate", "0,25-0,5 kg Muskelmasse/Monat"],
      ["Schlaf", "Mindestens 8 Stunden"],
    ]),

    heading("h3", "Ziel: Fitness erhalten, gesund älter werden"),

    table([
      ["Parameter", "Empfehlung"],
      ["Kalorienbilanz", "Neutral"],
      ["Protein", "1,2-1,6 g/kg"],
      ["Training-Mix", "WHO-Minimum + 2x Kraft"],
      ["Mobility", "3-4x/Woche 10 Min"],
      ["Balance", "Nicht vergessen, besonders ab 50"],
      ["Fokus", "Konsistenz statt Maximum"],
    ]),

    heading("h2", "Progressive Overload: Das wichtigste Prinzip"),
    paragraph(
      "Dein Körper adaptiert an den Reiz, den du setzt. Ohne progressive Steigerung stagniert jeder Trainingseffekt nach 4-6 Wochen. Progressive Overload bedeutet: systematisch größere Reize setzen. Die sechs Wege:"
    ),
    ol([
      "Mehr Gewicht: gleiche Wiederholungen, 1-2,5 kg mehr",
      "Mehr Wiederholungen: gleiches Gewicht, 1-2 mehr Wdh",
      "Mehr Sätze: 2 auf 3 Sätze, 3 auf 4 Sätze",
      "Kürzere Pausen: von 2 auf 90 Sek bei gleichem Gewicht",
      "Bessere Technik: Tempo langsamer, volle Range of Motion",
      "Schwerere Varianten: Kniebeuge auf einem Bein statt zwei",
    ]),
    paragraph(
      "Nicht alles gleichzeitig! Pro Woche ein Aspekt steigern. Wer Gewicht und Wiederholungen gleichzeitig hochschraubt, verliert schnell die Technik."
    ),

    heading("h2", "Typische Fehler im ersten Jahr"),

    table([
      ["Fehler", "Konsequenz", "Fix"],
      ["Zu viel zu schnell", "Verletzung oder Abbruch nach 4 Wochen", "Erste 4 Wochen 60-70% der Zielintensität"],
      ["Fehlende Progression", "Plateau nach 6 Wochen", "Trainingstagebuch führen"],
      ["Kein Trainingsplan", "Zufällige Fortschritte", "Strukturiertes Programm nutzen"],
      ["Ernährung ignoriert", "Training verpufft", "Protein und Kalorien tracken"],
      ["Vergleich mit anderen", "Demotivation", "Nur eigene Entwicklung messen"],
      ["Keine Pausen", "Übertraining, Verletzung", "1-2 Ruhetage pro Woche fest"],
      ["Alle 2 Wochen Programm wechseln", "Keine Adaptation möglich", "Minimum 8 Wochen einen Plan"],
      ["Cardio nur auf nüchternen Magen", "Mythos ohne Nutzen", "Zeitpunkt zweitrangig"],
      ["Jede Mahlzeit perfekt", "Burnout nach Wochen", "80/20-Regel"],
      ["Krafttraining als Frau meiden", "Verfehltes Potenzial", "Trotzdem trainieren"],
    ]),

    heading("h2", "Trainingspläne: Solo, im Studio oder mit Trainer?"),
    paragraph(
      "Alle drei Wege funktionieren. Die richtige Wahl hängt von Budget, Disziplin und Zielen ab."
    ),

    table([
      ["Option", "Vorteil", "Nachteil", "Eignet sich für"],
      ["Solo Zuhause", "Günstig, zeitlich flexibel", "Limitierte Ausrüstung, niedrige Dauerhaltigkeit", "Sehr disziplinierte Menschen"],
      ["Studio mit eigenem Plan", "Gerätevielfalt, Atmosphäre, günstig/Monat", "Selbstverantwortung für Progression", "Erfahrene oder Autodidakten"],
      ["Studio + Einführungstermin", "Gerätevielfalt + Basisplan", "Begrenzte Begleitung", "Die meisten Einsteiger - Standard-Empfehlung"],
      ["Personal Training", "Individuell, schnelle Ergebnisse", "Teuer (60-120 €/Std)", "Leistungssportler, Reha, schwierige Start-Phase"],
      ["Online-Coaching", "Strukturierter Plan, günstiger als PT", "Kein direktes Feedback zur Technik", "Zwischenlösung wenn Zeit fehlt"],
    ]),
    paragraph(
      "Bei Casa Sports bekommst du im ",
      bold("Einführungstermin"),
      " einen strukturierten Basisplan und Geräte-Einweisung, ohne extra Kosten. Für tiefergehende Begleitung bieten wir Personal Training oder das ",
      link("/mein-neues-ich", "12-Wochen Mein Neues Ich Programm", false),
      "."
    ),

    heading("h2", "Wie du dranbleibst: Die 80/20-Regel"),
    paragraph(
      "Langfristig dabeibleiben ist wichtiger als jeden Trainingstag optimal zu nutzen. Folgende Muster helfen:"
    ),
    ul([
      "Feste Trainingstage und -zeiten im Kalender, nicht 'wenn ich Zeit habe'",
      "Trainingspartner oder Gruppenkurs als soziale Verpflichtung",
      "Kleine messbare Ziele (3 Monate Plan, dann neu bewerten)",
      "Protokollieren: ohne Daten kein Fortschritt sichtbar",
      "Schlechte Tage akzeptieren, nicht aufgeben. 80% Konsistenz schlägt perfekte 20%",
      "Gute Ausrüstung, die du gern nutzt (Sportschuhe, Trainingshose, Musik)",
      "Erfolge sichtbar machen: Fotos, Messwerte, Trainingstagebuch",
      "Mindestens zwei Monate am Stück gleiches Programm",
    ]),

    heading("h2", "Trainingszeiten: Morgens oder abends?"),
    paragraph(
      "Der wissenschaftliche Konsens: Die beste Trainingszeit ist die, an der du konsistent sein kannst. Minimale Leistungsunterschiede zwischen Morgen und Abend (ca. 3-5 Prozent weniger Kraft morgens) sind für Freizeitsportler irrelevant."
    ),

    table([
      ["Tageszeit", "Vorteile", "Nachteile"],
      ["Morgens (6-9 Uhr)", "Kaum Ablenkung, Routine etabliert", "Körper noch steif, etwas weniger Leistung"],
      ["Mittag (11-14 Uhr)", "Energiespitze, gut für intensive Sessions", "Zeitdruck, Arbeitsumfeld"],
      ["Nachmittag (15-18 Uhr)", "Körper maximal bereit, höchste Kraftwerte", "Voll im Studio, Termine kollidieren"],
      ["Abend (18-20 Uhr)", "Stressabbau vom Tag", "Manchmal Einschlafprobleme bei intensivem Training"],
      ["Spätabend (20+ Uhr)", "Studio leer", "Beeinträchtigt Schlaf bei vielen"],
    ]),

    heading("h2", "Spezielle Zielgruppen"),

    heading("h3", "Einsteiger über 40"),
    paragraph(
      "Krafttraining ist hier besonders wichtig gegen altersbedingten Muskelabbau. Start etwas konservativer, längere Warm-ups, mehr Mobility. Fokus auf Grundübungen und Progression in kleineren Schritten. Nach 12 Wochen oft erstaunliche Fortschritte, weil die Ausgangsbasis niedrig ist."
    ),

    heading("h3", "Einsteiger über 60"),
    paragraph(
      "Sarkopenie (Muskelabbau) ist hier das Hauptproblem. Krafttraining 2-3x pro Woche ist fast immer wichtiger als Cardio. Balance-Übungen zusätzlich zur Sturzprävention. Bei Vorerkrankungen immer ärztliche Freigabe."
    ),

    heading("h3", "Nach der Schwangerschaft"),
    paragraph(
      "Frühestens 6-8 Wochen nach der Geburt, nach ärztlicher Freigabe. Beginn mit Beckenboden-Arbeit und leichter Mobility, dann schrittweise Ganzkörper-Training. Rektusdiastase beachten (Bauchmuskeln getrennt). Bei Bedarf spezialisierte Physiotherapie."
    ),

    heading("h3", "Menschen mit Rückenschmerzen"),
    paragraph(
      "Unspezifische Rückenschmerzen profitieren nachweislich von strukturiertem Training. Ausgangspunkt: Core-Stabilität, Hip-Hinge-Muster, Beweglichkeit. Siehe ",
      link("/blog/functional-training-im-alltag", "Functional Training Guide", false),
      ". Bei akuten Schmerzen, Bandscheibenvorfall oder neurologischen Symptomen: erst ärztliche Abklärung."
    ),

    heading("h2", "Messung: Woher weiß ich, dass ich Fortschritt mache?"),
    paragraph(
      "Subjektive Empfindungen ('fühlt sich leichter an') sind unzuverlässig. Objektive Metriken:"
    ),
    ul([
      "Trainingstagebuch mit Gewichten und Wiederholungen",
      "Körperumfänge alle 4 Wochen (Brust, Hüfte, Oberschenkel, Bizeps)",
      "Körpergewicht bei Gewichtszielen, wöchentlich im Durchschnitt",
      "Fotos alle 4-8 Wochen in gleicher Position",
      "Einfache Kraft-Tests (Max-Liegestütz, Plank-Zeit, Sprintzeit)",
      "Ausdauer-Tests (Cooper-Test, 5k-Zeit)",
      "Ruheherzfrequenz morgens",
      "Subjektive Energie und Schlafqualität",
    ]),

    heading("h2", "Was bei Casa Sports für dich dabei ist"),
    paragraph(
      "Unsere ",
      bold("All-in-Mitgliedschaft"),
      " deckt alles ab, was du für strukturiertes Training brauchst:"
    ),
    ul([
      "Moderner Kraftbereich mit Langhantel-Racks, Geräten, Kurzhanteln bis 50 kg",
      "Cardio-Bereich: Laufband, Crosstrainer, Rudergerät, Ski-Ergometer, Fahrräder",
      "Functional Area mit TRX, Kettlebells, Medizinbällen, Plyo-Boxen",
      "Über 30 Kurse pro Woche: Cycling, Functional, Zirkel, Power-Kurse",
      "Wellness-Bereich: KLAFS Sauna, Roeger Infrarot, Ruhebereich",
      "Persönlicher Einführungstermin und Trainingsplan",
      "Trainerfläche für Fragen und Technik-Korrekturen",
    ]),
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
      "Die wichtigste Botschaft: Konsistenz schlägt Perfektion. Ein mittelmäßiges Programm, das du zwei Jahre durchziehst, bringt mehr als ein perfektes Programm, das nach sechs Wochen scheitert. Fang an, bleib dran, dokumentiere deinen Fortschritt."
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
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/",
          "ACSM Position Stand: Resistance Training Prescription"
        ),
      ],
    ]),
  ]),
}
