import { root, paragraph, heading, ul, ol, bold, link, text } from "../lexical-builder"

export const krafttrainingFuerAnfaenger = {
  slug: "krafttraining-fuer-anfaenger",
  title: "Krafttraining für Anfänger: Der evidenzbasierte Einstieg",
  excerpt:
    "Wie du als Einsteiger sicher mit Krafttraining startest: Frequenz, Volumen und Übungsauswahl nach den aktuellen ACSM-Leitlinien von 2026, plus praktische Tipps vom Casa Sports Team.",
  keyTakeaway:
    "Starte mit zwei bis drei Ganzkörper-Einheiten pro Woche, trainiere alle großen Muskelgruppen zweimal wöchentlich und lege den Fokus auf saubere Technik statt auf hohe Gewichte. Die 2026 aktualisierten ACSM-Leitlinien empfehlen moderate Intensität mit Fokus auf Konsistenz, nicht auf Maximal-Volumen.",
  faq: [
    {
      question: "Wie oft sollte ich als Anfänger pro Woche trainieren?",
      answer:
        "Die American College of Sports Medicine (ACSM) empfiehlt für Einsteiger zwei bis drei Krafteinheiten pro Woche an nicht aufeinanderfolgenden Tagen. Jede große Muskelgruppe soll mindestens zweimal pro Woche trainiert werden. Mehr ist am Anfang selten besser, weil dein Körper Zeit zum Anpassen braucht.",
    },
    {
      question: "Geräte oder freie Gewichte für den Start?",
      answer:
        "Eine Mischung ist ideal. Geräte führen die Bewegung sicher und eignen sich, wenn du die Zielmuskulatur bewusst erspüren willst. Freie Gewichte wie Kurz- und Langhantel schulen Koordination und Stabilisation. In der Einführung bei Casa Sports zeigen wir dir, welche Kombination zu deinem Ziel passt.",
    },
    {
      question: "Wie viele Sätze und Wiederholungen?",
      answer:
        "Zwei bis drei Sätze pro Übung mit acht bis zwölf sauberen Wiederholungen sind ein bewährter Startrahmen. Arbeite mit einem Gewicht, bei dem du die letzten zwei Wiederholungen konzentriert schaffen musst, aber die Technik nicht verlierst.",
    },
    {
      question: "Muskelkater ist stark, was jetzt?",
      answer:
        "Leichter Muskelkater 24 bis 48 Stunden nach dem Training ist normal und verschwindet wieder. Starker Muskelkater bedeutet meist, dass Volumen oder Intensität zu hoch waren. Leichte Bewegung, warmes Duschen und ausreichend Schlaf helfen, zur nächsten Einheit erholt zu sein. Reduziere beim Folge-Workout Gewicht oder Sätze.",
    },
    {
      question: "Wann sehe ich erste Ergebnisse?",
      answer:
        "Nach vier bis sechs Wochen fühlst du dich deutlich fitter, Kraftverbesserungen sind messbar. Sichtbare Veränderungen an der Figur brauchen meist acht bis zwölf Wochen und hängen stark von Ernährung, Schlaf und Gesamtaktivität ab. Bleib dran, die ersten Monate sind die Phase der schnellsten Fortschritte.",
    },
    {
      question: "Brauche ich einen Trainer am Anfang?",
      answer:
        "Nicht zwingend, aber ein Einführungstermin mit Technik-Check spart dir Wochen an Fehlern. Bei Casa Sports ist ein persönlicher Einführungstermin in jeder Mitgliedschaft enthalten. Danach kannst du selbstständig trainieren und bei Fragen jederzeit unsere Trainer auf der Fläche ansprechen.",
    },
    {
      question: "Kann ich als Anfänger mit Fitnessstudio-Apps trainieren?",
      answer:
        "Apps können eine sinnvolle Ergänzung sein, ersetzen aber kein Technik-Feedback am Anfang. Nutze Apps für Trainingsprotokoll, Progression und Motivation, lass aber die ersten Einheiten von einem Trainer begleiten oder zeichne dich selbst beim Training auf, um Technikfehler früh zu erkennen.",
    },
  ],
  content: root([
    paragraph(
      "Krafttraining ist die wirksamste Form körperlicher Aktivität, um Muskulatur, Knochendichte, Stoffwechsel und Alltagskraft zu erhalten. Die gute Nachricht: Der Einstieg ist einfacher, als viele denken. Die 2026 aktualisierten Leitlinien des American College of Sports Medicine zeigen klar, dass Konsistenz und saubere Technik wichtiger sind als komplexe Programme. Dieser Guide fasst zusammen, worauf du in den ersten Wochen achten solltest."
    ),

    heading("h2", "Warum Krafttraining für jeden Erwachsenen wichtig ist"),
    paragraph(
      "Ab dem dreißigsten Lebensjahr verliert der Mensch ohne gezielten Reiz jedes Jahrzehnt Muskelmasse. Weniger Muskeln bedeuten einen niedrigeren Grundumsatz, schlechtere Insulinempfindlichkeit und höheres Sturzrisiko im Alter. Krafttraining dreht diesen Trend um, unabhängig von Alter, Geschlecht oder Trainingserfahrung."
    ),
    paragraph(
      "Neben der Körperzusammensetzung verbessert Krafttraining Knochendichte, Rückenstabilität, Insulinsensitivität und psychische Gesundheit. Die WHO zählt Muskel-Stärkung deshalb zu den Grundpfeilern ihrer globalen Bewegungsempfehlungen."
    ),

    heading("h2", "Was die aktuelle Forschung zeigt"),
    paragraph(
      "Die ACSM hat ihre Leitlinien zum Krafttraining 2026 erstmals nach 17 Jahren aktualisiert, unterstützt durch ein Expertenteam der McMaster University. Die Kernaussage: Schon zwei kurze Einheiten pro Woche bringen den Großteil der gesundheitlichen Effekte. Die 2025 veröffentlichte ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/",
        "ACSM Position Stand zum Resistance Training"
      ),
      " bestätigt: Der größte Hebel für Gesundheit ist der Schritt von keinem zu irgendeinem strukturierten Krafttraining."
    ),
    paragraph(
      "Neu in 2026: Die ACSM rückt von prozentualen Gewichtsangaben (% vom Einer-Maximum) ab und empfiehlt für Einsteiger das RIR-Konzept (Reps in Reserve), also wie viele Wiederholungen du noch mit sauberer Technik schaffen würdest. Das macht Training intuitiver und passt sich besser an Tagesform an."
    ),

    heading("h2", "Das ideale Einsteiger-Programm: 3×20 Minuten"),
    paragraph(
      "Gute Programme für Anfänger haben drei Merkmale: Ganzkörper-Abdeckung, Grundübungen und Platz für Progression. Drei Einheiten à 20 bis 45 Minuten pro Woche sind realistisch und decken alles ab."
    ),

    heading("h3", "Einheit 1: Unterkörper-Fokus"),
    ul([
      "Beinpresse oder Kniebeuge: 3 Sätze à 10 Wiederholungen",
      "Rumänisches Kreuzheben mit Kurzhanteln: 3 × 10",
      "Ausfallschritte mit Körpergewicht: 3 × 10 pro Seite",
      "Bauch-Plank: 3 × 30 Sekunden",
    ]),

    heading("h3", "Einheit 2: Oberkörper-Fokus"),
    ul([
      "Latzug oder Klimmzug unterstützt: 3 × 10",
      "Bankdrücken oder Liegestütz erhöht: 3 × 10",
      "Rudern am Kabelzug: 3 × 10",
      "Schulterdrücken sitzend: 3 × 10",
    ]),

    heading("h3", "Einheit 3: Ganzkörper + Core"),
    ul([
      "Kreuzheben mit Kettlebell: 3 × 10",
      "Dips am Barren unterstützt: 3 × 10",
      "Farmers Walk mit Kurzhanteln: 3 × 30 Meter",
      "Pallof-Press am Kabelzug: 3 × 12 pro Seite",
    ]),

    heading("h2", "Die fünf wichtigsten Grundregeln"),

    heading("h3", "1. Technik vor Gewicht"),
    paragraph(
      "Jede Übung solltest du mit Körpergewicht oder minimalem Zusatzgewicht so lange üben, bis sie sich automatisiert anfühlt. Erst dann steigere die Last. Verletzungen bei Anfängern entstehen fast immer aus Technikfehlern unter zu hoher Belastung, nicht aus dem Gewicht selbst."
    ),

    heading("h3", "2. Progression statt Plateau"),
    paragraph(
      "Dein Körper passt sich an. Wer acht Wochen lang mit dem gleichen Gewicht trainiert, erhält seinen Fortschritt nicht mehr. Steigere entweder Wiederholungen (von 10 auf 12), Gewicht (plus 1 bis 2,5 Kilo) oder Sätze, sobald du alle geplanten Wiederholungen sauber schaffst."
    ),

    heading("h3", "3. Ausreichend Pause zwischen Sätzen"),
    paragraph(
      "Ein bis zwei Minuten Pause zwischen den Sätzen sind für Anfänger ideal. Zu kurze Pausen führen dazu, dass du die nächsten Wiederholungen mit schlechterer Technik machst. Nutz die Pause zum Wassertrinken und bewusst zu atmen."
    ),

    heading("h3", "4. Regeneration ernst nehmen"),
    paragraph(
      "Muskeln wachsen in der Pause, nicht im Training. Plane mindestens einen vollen Ruhetag zwischen Einheiten derselben Muskelgruppe. Sieben bis neun Stunden Schlaf pro Nacht sind keine Empfehlung, sondern Pflicht für Fortschritt."
    ),

    heading("h3", "5. Ernährung unterstützt, ersetzt aber nichts"),
    paragraph(
      "Wer Muskeln aufbauen will, braucht ausreichend Protein (etwa 1,6 bis 2 Gramm pro Kilo Körpergewicht pro Tag) und genug Gesamtkalorien. Wer abnehmen will, kombiniert leichtes Kaloriendefizit mit Krafttraining, um Muskeln zu erhalten. Mehr zu Ernährung in unserem ",
      link("/blog/sporternaehrung-der-komplette-guide", "Guide Sporternährung", false),
      "."
    ),

    heading("h2", "Häufige Fehler in den ersten drei Monaten"),
    ul([
      "Zu hohes Gewicht zu früh: Ego-Lifting führt zu Technikfehlern und Verletzungen.",
      "Zu viele Isolations-Übungen: Bizeps-Curls sind nett, aber Grundübungen bringen mehr Fortschritt.",
      "Keine Trainingsprotokolle: Ohne Aufzeichnung weißt du nicht, ob du stärker wirst.",
      "Zu wenig Essen: Unter Defizit baut niemand Muskeln auf, besonders nicht am Anfang.",
      "Programm-Hopping: Alle zwei Wochen ein neuer Trainingsplan verhindert Fortschritt.",
      "Keine Aufwärmphase: Fünf Minuten Mobility und leichte Sätze schützen vor Verletzungen.",
    ]),

    heading("h2", "Wie lange dauert eine sinnvolle Einheit?"),
    paragraph(
      "Zwischen 30 und 60 Minuten reichen völlig. Länger trainiert zu haben heißt nicht besser. Wer kürzer und intensiver arbeitet, bekommt oft mehr Fortschritt als mit zweistündigen Sessions. Am Anfang hilft ein fester Zeitblock (zum Beispiel dienstags, donnerstags und samstags von 18 bis 19 Uhr), weil Konsistenz wichtiger ist als Perfektion."
    ),

    heading("h2", "Praxistipps aus dem Studio"),
    ul([
      "Trainings-Tagebuch führen: App oder Notizblock, Gewicht und Wiederholungen pro Satz festhalten.",
      "Aufwärmen nicht skippen: 5 Minuten Fahrrad oder Rudergerät plus dynamisches Mobility.",
      "Letzter Satz nicht bis zum Totalversagen: Reps in Reserve von 1-2 ist produktiver.",
      "Handy im Schrank lassen oder nur für Timer nutzen.",
      "Wasser mitbringen: 500-750 ml pro Einheit.",
      "Nach drei bis vier Wochen Technik-Check mit Trainer: zeigt Schwächen auf, die man selbst nicht sieht.",
    ]),

    heading("h2", "Wann ist Krafttraining nicht empfehlenswert?"),
    paragraph(
      "Bei akuten Verletzungen, frischen Operationen, unkontrolliertem Bluthochdruck oder Herzerkrankungen solltest du vor dem Start mit deinem Arzt sprechen. In der Schwangerschaft ist Krafttraining mit angepasstem Volumen grundsätzlich erlaubt, aber individuell abzuklären. Kinder unter 14 sollten mit Körpergewichtsübungen und leichten Gewichten starten."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Krafttraining für Anfänger funktioniert nach einem einfachen Rezept: zwei bis drei Einheiten pro Woche, Ganzkörper-Abdeckung, saubere Technik, schrittweise Steigerung. Die neuen ACSM-Leitlinien bestätigen, dass Konsistenz und Einfachheit die wirksamste Mischung sind. Wer die ersten drei Monate durchzieht, hat die Basis für jahrelange Fortschritte gelegt."
    ),
    paragraph(
      "Bei Casa Sports helfen wir dir beim Einstieg: persönlicher Einführungstermin, strukturierter Trainingsplan und Trainer, die dir auf der Fläche zuschauen und korrigieren. Komm für ein kostenloses ",
      link("/probetraining", "Probetraining", false),
      " vorbei."
    ),

    heading("h2", "Quellen und weiterführende Literatur"),
    ul([
      [
        link(
          "https://acsm.org/resistance-training-guidelines-update-2026/",
          "ACSM Resistance Training Guidelines 2026 Update"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/",
          "ACSM Position Stand: Resistance Training Prescription for Muscle Function, Hypertrophy, and Physical Performance (2025)"
        ),
      ],
      [
        link(
          "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
          "WHO Factsheet Physical Activity"
        ),
      ],
    ]),
  ]),
}
