import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const kreuzhebenFuerAnfaenger = {
  slug: "kreuzheben-fuer-anfaenger",
  title: "Kreuzheben für Anfänger: Sichere Technik und Progression",
  excerpt:
    "Kreuzheben ist die Ganzkörper-Übung schlechthin. So lernst du die Technik sicher, vermeidest Rückenverletzungen und baust strukturiert auf schwere Lasten auf.",
  categorySlug: "training",
  authorSlug: "naim",
  coverImagePath: "/images/casasports-krafttraining.webp",
  keyTakeaway:
    "Sauberes Kreuzheben braucht neutrale Wirbelsäule, straffen Rumpf und die Hantel immer eng am Körper. Die größte Belastung liegt am Lift-off, dort entscheidet die Technik über Verletzung oder Erfolg. Progression maximal 10 Prozent pro Woche, sonst steigt das Verletzungsrisiko stark.",
  faq: [
    {
      question: "Ist Kreuzheben für den Rücken gefährlich?",
      answer:
        "Nein, nicht korrekt ausgeführt. Studien aus 2023-2025 zeigen, dass Kreuzheben mit sauberer Technik die Rückenmuskulatur stärkt und Schmerzen reduziert. Gefährlich wird es, wenn die Technik unter zu hoher Last zusammenbricht. Die Regel: lieber leichter und sauber als schwerer und wacklig.",
    },
    {
      question: "Konventionell oder sumo?",
      answer:
        "Für die meisten Einsteiger ist konventionell (Füße schulterbreit) der einfachere Einstieg und entspricht dem natürlichen Hebemuster. Sumo (breiter Stand) reduziert den Hebelarm zur Wirbelsäule und kann bei kurzem Oberkörper oder guter Hüftabduktion leichter sein. Beide Varianten trainieren den gesamten Körper.",
    },
    {
      question: "Wie halte ich die Stange richtig?",
      answer:
        "Beginne mit dem klassischen Ristgriff (beide Handflächen zum Körper). Bei sehr schweren Gewichten hilft der Wechselgriff (eine Hand oben, eine unten) oder Zughilfen. Daumen immer um die Stange, nie 'suicide-Grip' mit Daumen auf derselben Seite.",
    },
    {
      question: "Wie schwer darf ich starten?",
      answer:
        "Beginne mit einer leeren Olympia-Hantel (20 kg Männer, 15 kg Frauen) und übe mehrere Wochen die Technik, bevor du steigerst. Eine ",
        answer_link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9837526/",
    },
    {
      question: "Soll der Rücken gerade oder leicht rund sein?",
      answer:
        "Neutrale Wirbelsäule ist ideal. Leichte Rundung im oberen Rücken ist unter Wettkampflast normal und nicht automatisch gefährlich, wie neuere Forschung zeigt. Im Lendenbereich solltest du als Anfänger aber konsequent neutral bleiben. Bewusste Rundung gehört zur Expertise, nicht zum Einstieg.",
    },
    {
      question: "Wie oft pro Woche Kreuzheben?",
      answer:
        "Einmal pro Woche als Anfänger ist ausreichend. Die Übung ist ZNS-intensiv und braucht lange Regeneration. Fortgeschrittene können zweimal pro Woche mit unterschiedlicher Intensität trainieren.",
    },
    {
      question: "Gürtel ja oder nein?",
      answer:
        "Am Anfang nein. Lerne zuerst ohne Gürtel Rumpf aufzubauen. Ein Gürtel ist eine Ergänzung für sehr schwere Lasten (meist ab 80-85 Prozent des Einer-Maximums), keine Krücke für unsaubere Technik.",
    },
  ],
  content: root([
    paragraph(
      "Kreuzheben ist die Ganzkörper-Übung mit dem höchsten Kraft-Output. Rücken, Gesäß, Oberschenkel, Rumpf, Arme arbeiten simultan. Keine andere Übung spiegelt besser die alltägliche Bewegung des Hebens wider. Dieser Guide zeigt dir die saubere Technik und wie du als Einsteiger strukturiert aufbaust."
    ),

    heading("h2", "Was kreuzheben im Körper bewirkt"),
    paragraph(
      "Kreuzheben ist eine geschlossene kinetische Kette aus der Tiefe. Die posteriore Muskelkette (hintere Oberschenkel, Gesäß, unterer Rücken, Rückenstrecker) hebt die Last gegen die Schwerkraft. Die anteriore Muskelkette (Bauch, Hüftbeuger) stabilisiert. Schulter-Stabilisatoren halten die Stange, Griffkraft hält alles zusammen."
    ),
    paragraph(
      "Die positive Wirkung auf Rückenschmerzen ist mehrfach belegt: richtig ausgeführtes Kreuzheben stärkt die Strukturen, die im Alltag beansprucht werden. Studien zeigen, dass Kreuzheben in der Reha von unspezifischem Rückenschmerz wirksam ist, wenn Technik und Progression stimmen."
    ),

    heading("h2", "Was die Biomechanik sagt"),
    paragraph(
      "Eine ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC9837526/",
        "Narrative Review zu Low Back Biomechanics während Kreuzheben"
      ),
      " von 2023 quantifiziert die Belastung: Maximale Kompressionskräfte in der Lendenwirbelsäule erreichen bei Männern bis zu 18 kN, bei Frauen bis zu 8 kN. Verletzungsschwellen für die Bandscheiben liegen bei 5-10 kN Druck und 1-2 kN Scherkraft. Die höchste Belastung entsteht am Lift-off, also im Moment, wo die Hantel den Boden verlässt."
    ),
    paragraph(
      "Eine ",
      link(
        "https://www.mdpi.com/2075-4663/14/4/151",
        "aktuellere Review aus 2026 in Sports (MDPI)"
      ),
      " relativiert die starre 'neutrale Wirbelsäule um jeden Preis' Ideologie: moderate Lendenbeugung unter Last ist nicht automatisch schädlich. Entscheidend sind Lastgröße, Progression, Ermüdungsmanagement und Gesamttechnik."
    ),

    heading("h2", "Der 7-Schritte-Ansatz für saubere Technik"),

    heading("h3", "1. Füße unter die Stange"),
    paragraph(
      "Schulterbreit hinstellen, Mittelfuß unter der Stange. Die Hantel sollte etwa zwei bis drei Zentimeter vom Schienbein entfernt sein."
    ),

    heading("h3", "2. Hinunter in Startposition"),
    paragraph(
      "Hüfte nach hinten, leicht in die Knie. Greife die Stange so, dass die Arme außen an den Knien sind, etwa schulterbreit. Brust raus, Schultern über der Stange oder leicht davor."
    ),

    heading("h3", "3. Spannung aufbauen"),
    paragraph(
      "Latissimus anspannen, als würdest du die Stange in Richtung Körper ziehen. Oberkörper bleibt aufrecht, Brust raus. Der Rücken zeigt eine leichte natürliche Krümmung, kein Hohlkreuz, keine Rundung."
    ),

    heading("h3", "4. Bracing und Atmung"),
    paragraph(
      "Tief in den Bauch einatmen, Rumpf fest. Jetzt beginnt die Bewegung. Kein Zögern."
    ),

    heading("h3", "5. Hochziehen"),
    paragraph(
      "Push the floor away - drück den Boden weg mit den Beinen, Hüfte und Schultern heben sich gemeinsam. Die Stange bleibt in Kontakt mit Schienbein und Oberschenkel."
    ),

    heading("h3", "6. Hüfte durchstrecken"),
    paragraph(
      "Oben angekommen: Hüfte voll strecken, Schultern hinter die Stange, nicht nach hinten lehnen. Gesäß angespannt, Rumpf fest."
    ),

    heading("h3", "7. Kontrolliert ablassen"),
    paragraph(
      "Rückweg exakt umgekehrt. Hüfte zuerst nach hinten, dann Knie beugen, Stange geführt am Bein entlang. Nicht mit rundem Rücken nach unten fallen lassen."
    ),

    heading("h2", "Häufige Fehler"),

    table([
      ["Fehler", "Problem", "Fix"],
      ["Rundung unterer Rücken am Start", "Stress auf Bandscheiben", "Anpassen der Anfangsposition, Brust raus"],
      ["Stange zu weit vom Körper", "Hebelarm zur Wirbelsäule wird groß", "Latissimus aktivieren, Stange am Bein"],
      ["Hüfte schießt zu schnell hoch", "Rücken macht die Arbeit", "Beine und Hüfte gemeinsam strecken"],
      ["Zurücklehnen am Top", "Hyperextension, Bandscheibe", "Nur so weit bis Hüfte neutral"],
      ["Zu großer Satzzuwachs", "Technik-Breakdown", "Max 5-10% Steigerung pro Woche"],
      ["Kein Bracing", "Zu viel Last auf passive Strukturen", "Vor jeder Wiederholung bracing"],
    ]),

    heading("h2", "Progression in 12 Wochen"),

    table([
      ["Woche", "Ziel", "Empfohlener Satz"],
      ["1-2", "Technik mit leerer Hantel", "3 x 8 mit 20/40 kg"],
      ["3-4", "Leichte Steigerung", "3 x 6-8 mit moderatem Gewicht"],
      ["5-8", "Kraftaufbau", "4 x 5 Working Sets"],
      ["9-12", "Progression mit Wettkampf-Tiefe", "5 x 3-5 bei 75-85%"],
    ]),

    heading("h2", "Hilfreiche Zusatzübungen"),
    ul([
      [bold("Rumänisches Kreuzheben"), text(": betont die hintere Kette, gut für Hypertrophie")],
      [bold("Block Pulls"), text(": Hantel auf Boxen 10-15 cm über dem Boden, reduziert den schwersten Bereich")],
      [bold("Good Mornings"), text(": stärken die Rückenstrecker und das Hip-Hinge-Muster")],
      [bold("Bauch- und Core-Training"), text(": Planks, Dead Bugs, Pallof-Press für Rumpfstabilität")],
      [bold("Klimmzüge und Rudern"), text(": stärken den Latissimus, wichtig fürs Halten der Stange")],
    ]),

    heading("h2", "Kreuzheben-Varianten im Vergleich"),

    table([
      ["Variante", "Fußstand", "Primäre Muskeln", "Geeignet für"],
      ["Konventionell", "Hüftbreit", "Rücken, Glutes, Hamstrings", "Einstieg, breite Wirkung"],
      ["Sumo", "Breit, Füße ausgedreht", "Quads, Glutes, Innenschenkel", "Kurzer Oberkörper, Hüftmobility"],
      ["Rumänisch (RDL)", "Hüftbreit, Knie leicht gebeugt", "Hamstrings, Glutes", "Hypertrophie hintere Kette"],
      ["Kreuzheben von Block", "Hüftbreit, Hantel erhöht", "Lockout, Rücken", "Unterstützt Oberschenkel-Probleme"],
      ["Deficit-Deadlift", "Hüftbreit, auf Erhöhung stehend", "Extra ROM, Hamstrings", "Fortgeschrittene"],
      ["Snatch-Grip", "Breiter Griff (Langhantel)", "Oberer Rücken, Kraft unten", "Olympische Heber"],
      ["Trap-Bar-Deadlift", "Mittig in Trap-Bar", "Quads, Glutes", "Anfängerfreundlich, weniger Rücken"],
    ]),

    heading("h2", "Kreuzheben und die Wirbelsäule"),
    paragraph(
      "Die meistgestellte Frage: 'Ist Kreuzheben mit rundem Rücken immer gefährlich?' Neuere Forschung differenziert. Eine 2026 veröffentlichte ",
      link(
        "https://www.mdpi.com/2075-4663/14/4/151",
        "Review in Sports (MDPI)"
      ),
      " fasst zusammen: Moderate Lumbalflexion ist nicht per se verletzend, aber mehrere Faktoren erhöhen das Risiko:"
    ),
    ul([
      "Last zu hoch für die aktuelle Konditionsstufe",
      "Schnelle Belastungssteigerung (>10% pro Woche)",
      "Ermüdung in späten Sätzen",
      "Schlafmangel und hoher Lebensstress",
      "Vorausgegangene Rückenverletzungen ohne Reha",
      "Fehlendes Bracing der Rumpfmuskulatur",
    ]),

    heading("h2", "Grip-Varianten und Griffkraft"),
    paragraph(
      "Die Griffkraft ist oft der limitierende Faktor bei Kreuzheben. Die drei häufigsten Griffe:"
    ),

    table([
      ["Griff", "Technik", "Vorteil", "Nachteil"],
      ["Doppel-Overhand", "Beide Handflächen zum Körper", "Symmetrisch, sicher", "Griffkraft-limitiert"],
      ["Wechselgriff (Mixed)", "Eine Hand zum, eine weg", "Mehr Griffkraft", "Asymmetrisch, Bizeps-Risiko"],
      ["Hook Grip", "Daumen unter Fingern", "Sehr sicher, wie Olympisch", "Schmerzhaft am Anfang"],
    ]),
    paragraph(
      "Griffkraft trainieren: Farmer Walks, Dead Hangs, Grip Trainer. Zughilfen (Wrist Straps) sind als Werkzeug erlaubt, aber am Anfang lieber Griffkraft selbst aufbauen."
    ),

    heading("h2", "Wann du Kreuzheben nicht machen solltest"),
    ul([
      "Akute Rückenschmerzen ohne ärztliche Abklärung",
      "Bandscheibenvorfall in akuter Phase",
      "Unklare Kreislaufprobleme (Kreuzheben erhöht kurzfristig Blutdruck stark)",
      "Schwangerschaft in späten Phasen",
      "Unbehandelte Hernien",
      "Sehr hoher Stresslevel und Schlafmangel - Verletzungsrisiko steigt",
    ]),

    heading("h2", "Was du bei Casa Sports findest"),
    paragraph(
      "In unserem Kraftbereich gibt es Olympia-Hanteln, Bumper Plates, Chalk und Power-Racks. Die Böden sind verstärkt, damit du Kreuzheben ohne Sorgen machen kannst. Im Einführungstermin lernst du die Technik an leichten Gewichten. Wer schon Erfahrung hat, kann direkt mit seinem Setup starten."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Kreuzheben ist die effektivste Übung für Ganzkörperkraft und Alltagsleistung. Die Angst vor Rückenschmerzen ist fast immer übertrieben, solange Technik und Progression stimmen. Wer die 7 Schritte sauber lernt und geduldig aufbaut, bekommt eine Übung geschenkt, die ein Trainingsleben lang begleitet."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC9837526/",
          "Low Back Biomechanics during Repetitive Deadlifts (Narrative Review 2023)"
        ),
      ],
      [
        link(
          "https://www.mdpi.com/2075-4663/14/4/151",
          "Beyond the Neutral Spine: Modern Framework for Low Back Injury Prevention in Deadlifting (MDPI Sports 2026)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC4925752/",
          "Lumbar Spine Biomechanical Model for Olympic Lifts"
        ),
      ],
    ]),
  ]),
}
