import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const fitUeber40 = {
  slug: "fit-ueber-40",
  title: "Fit über 40: Warum Krafttraining ab jetzt Pflicht ist",
  excerpt:
    "Ab 40 beginnt Sarkopenie - der altersbedingte Muskelabbau. Krafttraining ist das wissenschaftlich belegte Gegenmittel. So trainierst du effektiv in der zweiten Lebenshälfte.",
  categorySlug: "training",
  authorSlug: "naim",
  coverImagePath: "/images/casasports-training.webp",
  keyTakeaway:
    "Ab dem 40. Lebensjahr verliert der Körper ohne Krafttraining 0,5-1% Muskelmasse pro Jahr. Dieser Abbau beschleunigt sich nach 60 stark. Strukturiertes Krafttraining 2-3x pro Woche ist das einzige wissenschaftlich bewiesene Mittel, um diesen Prozess zu stoppen oder umzukehren - in jedem Alter.",
  faq: [
    {
      question: "Ab wann beginnt der Muskelabbau wirklich?",
      answer:
        "Sarkopenie kann bereits ab dem 40. Lebensjahr beginnen. Etwa 8,85% der 40-64-Jährigen haben bereits messbare Sarkopenie. Der Prozess verläuft zunächst langsam, beschleunigt sich aber nach 65 (Frauen) oder 70 (Männer) deutlich.",
    },
    {
      question: "Wie viel Muskelaufbau ist über 40 noch möglich?",
      answer:
        "Viel mehr als die meisten denken. Studien zeigen: nach 3-6 Monaten strukturiertem Krafttraining steigt die Muskelkraft um 40-150%, die fettfreie Masse um 1-3 kg und die Muskelfaserfläche um 10-30%. Auch 70-Jährige können messbar Muskeln aufbauen.",
    },
    {
      question: "Wie oft pro Woche sollte ich trainieren?",
      answer:
        "Mindestens 3x pro Woche Krafttraining, zusätzlich 2-3x Cardio. Eine Woche mit weniger als 2 Krafteinheiten bringt kaum Anpassungen. Die Intensität ist wichtiger als die Dauer: kurze intensive Einheiten schlagen lange Spazier-Workouts.",
    },
    {
      question: "Muss ich hart trainieren oder reicht moderat?",
      answer:
        "Moderate bis hohe Intensität (60-80% des Einer-Maximums) ist nötig für Muskelaufbau. Leichte Bewegung erhält Beweglichkeit, aber stoppt keinen Muskelabbau. Wer mit 40 genauso trainiert wie ein 20-Jähriger, bekommt ähnliche relative Gewinne.",
    },
    {
      question: "Wie wichtig ist Ernährung über 40?",
      answer:
        "Kritisch. Ältere Erwachsene haben anabole Resistenz - sie brauchen mehr Protein pro Mahlzeit für die gleichen Effekte. 1,2-1,6 g Protein pro kg Körpergewicht, mit 25-40 g hochwertigem Protein pro Mahlzeit.",
    },
    {
      question: "Was mache ich bei Gelenkschmerzen?",
      answer:
        "Gelenkschmerzen sind selten ein Grund gegen Krafttraining, sondern meist dafür. Richtiges Training stärkt die Strukturen rund ums Gelenk. Bei akuten Schmerzen erst ärztliche Abklärung, dann gezielt mit Trainer arbeiten. Knieprobleme? Beinpresse statt freie Kniebeuge. Schulter? Neutraler Griff statt breiter.",
    },
    {
      question: "Hormonell verändert sich viel nach 40. Wie kompensiere ich das?",
      answer:
        "Testosteron und Wachstumshormon sinken messbar. Krafttraining ist der stärkste natürliche Booster. Zusätzlich: ausreichend Schlaf (Hauptausschüttung im Tiefschlaf), Stress-Reduktion, Vitamin D und Zink im Normalbereich, kein Übergewicht.",
    },
    {
      question: "Ist Cardio noch wichtig?",
      answer:
        "Ja, aber nicht als Hauptfokus. 150-300 Min moderate Aktivität pro Woche decken Herz-Kreislauf-Bedarf. Kraft wird wichtiger als Cardio ab 40, besonders ab 60.",
    },
  ],
  content: root([
    paragraph(
      "Mit 40 beginnt für viele der 'Plötzlich-älter-Effekt'. Die Jeans sitzt anders, die Leistung auf dem Platz geht zurück, am Morgen ist der Rücken steif. Der Grund ist nicht das Alter an sich, sondern ein biologischer Prozess namens Sarkopenie - altersbedingter Muskelabbau. Die gute Nachricht: er ist umkehrbar."
    ),

    heading("h2", "Was ist Sarkopenie?"),
    paragraph(
      "Sarkopenie ist der progressive Verlust von Muskelmasse und -funktion mit dem Alter. Ab etwa 30-35 Jahren erreicht der Mensch seinen Muskelpeak. Ohne Gegensteuer verliert er dann pro Jahrzehnt:"
    ),
    ul([
      "30-40 Jahre: 3-5% Muskelmasse",
      "40-50 Jahre: 5-8% zusätzlich",
      "50-60 Jahre: 8-10% zusätzlich",
      "60-70 Jahre: 10-15% zusätzlich",
      "70+ Jahre: bis zu 15% pro Jahrzehnt",
    ]),
    paragraph(
      "Die Konsequenzen sind weitreichend: niedriger Grundumsatz, Sturz-Risiko steigt, Alltagsaktivitäten werden schwieriger, das Risiko für Knochenbrüche und Folgekomplikationen steigt."
    ),

    heading("h2", "Wissenschaftliche Evidenz: Krafttraining wirkt"),
    paragraph(
      "Eine ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC7390512/",
        "systematische Review und Meta-Analyse (PMC)"
      ),
      " zeigt: Krafttraining ist die einzige Intervention, die Sarkopenie nachweislich verlangsamt oder umkehrt. Kombiniert mit Ernährungsintervention erzielt es die stärksten Effekte."
    ),
    paragraph(
      "Die konkreten Ergebnisse nach 3-6 Monaten strukturiertem Krafttraining:"
    ),
    ul([
      "Muskelkraft: +40 bis 150% (je nach Ausgangslage)",
      "Fettfreie Masse: +1 bis 3 kg",
      "Muskelfaserfläche: +10 bis 30%",
      "Gehgeschwindigkeit: +15-20%",
      "Sturzrate: reduziert um 30-50%",
    ]),

    heading("h2", "Der ideale Wochenplan ab 40"),

    table([
      ["Tag", "Training", "Dauer", "Intensität"],
      ["Montag", "Krafttraining Ganzkörper", "45-60 Min", "Moderat-hoch"],
      ["Dienstag", "Moderates Cardio (Fahrrad, Schwimmen)", "30-40 Min", "Zone 2"],
      ["Mittwoch", "Mobility + leichte Aktivität", "20-30 Min", "Niedrig"],
      ["Donnerstag", "Krafttraining Ganzkörper", "45-60 Min", "Moderat-hoch"],
      ["Freitag", "Pause oder Spaziergang", "-", "-"],
      ["Samstag", "Krafttraining oder Gruppenkurs", "45-60 Min", "Moderat"],
      ["Sonntag", "Aktive Erholung", "Flexibel", "Leicht"],
    ]),

    heading("h2", "Die wichtigsten Übungen ab 40"),
    paragraph(
      "Konzentriere dich auf Grundübungen, die mehrere Muskelgruppen trainieren und alltagsrelevant sind:"
    ),

    table([
      ["Übung", "Zweck", "Variante bei Einschränkungen"],
      ["Kniebeuge", "Beine, Glutes, Core", "Geführt an Multipresse, Box-Squat"],
      ["Kreuzheben (oder RDL)", "Hüftstrecker, Rücken", "Trap-Bar, leichter Sumo"],
      ["Bankdrücken", "Brust, Trizeps", "Multipresse, Kurzhantel"],
      ["Rudern", "Rücken, Bizeps", "T-Bar, Kabelzug"],
      ["Schulterdrücken", "Schulter, Trizeps", "Sitzend mit Kurzhanteln"],
      ["Beinpresse", "Beine bei Knieproblemen", "Alternative zur Kniebeuge"],
      ["Latzug", "Rücken bei Klimmzug-Schwäche", "Ersetzt Pull-ups"],
      ["Farmer's Walk", "Ganzkörper, Grip", "Perfekte Alltagsübung"],
    ]),

    heading("h2", "Ernährung ab 40: Anabole Resistenz"),
    paragraph(
      "Ab 40 reagieren die Muskelzellen weniger empfindlich auf Protein-Signale. Was früher mit 20 g Protein pro Mahlzeit funktioniert hat, braucht jetzt 30-40 g für die gleiche MPS-Antwort."
    ),
    ul([
      "Tagesbedarf: 1,2-1,6 g Protein pro kg Körpergewicht",
      "Pro Mahlzeit: 30-40 g Protein (höher als bei jungen Erwachsenen)",
      "Leucin-Fokus: 3-4 g pro Mahlzeit (Whey, Eier, Fleisch)",
      "Kreatin-Monohydrat: besonders wertvoll ab 40, 3-5 g täglich",
      "Vitamin D: oft defizitär, 2000-4000 IE im Winter",
      "Omega-3: 1-2 g EPA+DHA täglich für Entzündungshemmung",
    ]),

    heading("h2", "Typische Gedanken und warum sie falsch sind"),

    table([
      ["Gedanke", "Realität"],
      ["Ich bin zu alt zum Anfangen", "Studien an 80+-Jährigen zeigen deutliche Muskelgewinne"],
      ["Ich werde zu muskulös", "Ohne Steroide keine 'Bodybuilder-Maße' möglich"],
      ["Krafttraining ist schlecht für die Knie", "Im Gegenteil, es stärkt die Strukturen"],
      ["Ich muss erst abnehmen", "Parallel funktioniert besser, Muskel-Erhalt im Defizit"],
      ["Ich brauche leichte Gewichte", "Moderate bis schwere Gewichte sind effektiver"],
      ["Ein Kurs pro Woche reicht", "Nein, 2-3 gezielte Krafteinheiten nötig"],
    ]),

    heading("h2", "Balance und Sturzprävention"),
    paragraph(
      "Ab 50 wird Balance ein zusätzliches Ziel. Stürze sind im Alter die häufigste Verletzungsursache mit schweren Folgen. Einfache Integration ins Training:"
    ),
    ul([
      "Bulgarian Split Squat: ein Bein, Balance + Kraft",
      "Single-Leg Deadlift: Stabilität und hintere Kette",
      "Farmer Walk mit einer Hantel (einseitig)",
      "Plank mit gehobenem Bein oder Arm",
      "Einfach: auf einem Bein die Socken anziehen",
    ]),

    heading("h2", "Krafttraining und Hormone"),
    paragraph(
      "Krafttraining ist der stärkste natürliche Hormonbooster. Nach einer intensiven Einheit steigen messbar:"
    ),
    ul([
      "Testosteron: kurzfristig +20-30%, langfristig Erhalt",
      "Wachstumshormon: +150-250% akut, Erhalt der Grundproduktion",
      "IGF-1: zellulärer Wachstumsfaktor, langfristig erhöht",
      "Insulinsensitivität: verbessert, besonders bei Übergewicht",
    ]),
    paragraph(
      "Ergänzend: 7-9h Schlaf (Hauptzeit für Wachstumshormon), Stress-Reduktion, moderater Alkoholkonsum, Nicht-Rauchen."
    ),

    heading("h2", "Für Frauen über 40: Spezifische Aspekte"),
    paragraph(
      "Die Wechseljahre bringen hormonelle Umstellungen mit sich, die Muskelerhalt erschweren. Östrogen-Abfall führt zu schnellerem Muskelabbau und Knochendichteverlust."
    ),
    ul([
      "Krafttraining wird noch wichtiger als davor",
      "Knochendichte-Erhalt durch belastende Übungen",
      "Hormonelle Schwankungen beachten, flexibel bleiben",
      "Osteoporose-Prävention: Kniebeugen, Kreuzheben, Sprungbelastung",
      "Kalzium und Vitamin D überprüfen lassen",
    ]),

    heading("h2", "Wenn der Arzt sagt 'nehmen Sie ab'"),
    paragraph(
      "Die klassische Empfehlung 'weniger essen, mehr bewegen' funktioniert ab 40 besser, wenn Krafttraining im Fokus steht. Grund: ohne Krafttraining verlierst du im Defizit überproportional Muskelmasse, was den Grundumsatz dauerhaft senkt (Jojo-Effekt)."
    ),

    heading("h2", "Was Casa Sports für dich bietet"),
    paragraph(
      "Wir haben viele Mitglieder über 40, 50 und 60. Unser Setup ist speziell auf verschiedene Fitness-Level ausgerichtet:"
    ),
    ul([
      "Persönlicher Einführungstermin mit Technik-Check",
      "Altersfreundliche Geräte-Ausstattung",
      "Trainer auf der Fläche für Fragen",
      "Kurse mit verschiedenen Intensitäten",
      "Wellness-Bereich für Regeneration",
      "Personal Training für individuelle Begleitung",
    ]),

    heading("h2", "Fazit"),
    paragraph(
      "Über 40 zu sein ist keine Ausrede, sondern eine Aufforderung. Krafttraining wird von einer Option zur Notwendigkeit. Die gute Nachricht: es ist nie zu spät. Starte mit 2-3 Einheiten pro Woche, fokussiere auf Grundübungen, achte auf Protein. Nach 3-6 Monaten wirst du dich anders fühlen - jünger, stärker, selbstbewusster."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC7390512/",
          "Exercise Programs for Sarcopenia: Meta-Analysis (PMC)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC10235889/",
          "Exercise for Sarcopenia: Network Meta-Analysis (PMC)"
        ),
      ],
      [
        link(
          "https://www.nia.nih.gov/news/how-can-strength-training-build-healthier-bodies-we-age",
          "NIH National Institute on Aging"
        ),
      ],
    ]),
  ]),
}
