import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const muskelaufbauNaturalGuide = {
  slug: "muskelaufbau-natural-guide",
  title: "Muskelaufbau natural: Der komplette evidenzbasierte Guide",
  excerpt:
    "Wie viel Muskelmasse kannst du natural aufbauen? Mit welcher Strategie? Hier die realistischen Zahlen, der optimale Trainings- und Ernährungsplan, ohne Marketing.",
  categorySlug: "training",
  authorSlug: "naim",
  coverImagePath: "/images/casasports-kraftbereich.webp",
  keyTakeaway:
    "Natürlicher Muskelaufbau ist ein langsamer, aber zuverlässiger Prozess. Anfänger bauen 0,5-1 kg pro Monat auf, Fortgeschrittene 0,25-0,5 kg, Erfahrene 0,1-0,25 kg. Die drei Hebel: progressive Überlastung, 1,8-2,2 g Protein pro kg, leichter Kalorienüberschuss und ausreichend Schlaf. Keine Shortcuts, keine Wundermittel.",
  faq: [
    {
      question: "Wie viel Muskelmasse kann ich natural aufbauen?",
      answer:
        "Realistische Schätzungen: Männer 10-20 kg Muskelmasse über 3-5 Jahre Training. Frauen 5-10 kg über die gleiche Zeit. Danach verlangsamt sich das Wachstum stark. Diese Werte setzen konsistentes Training und Ernährung voraus.",
    },
    {
      question: "Wie schnell baue ich Muskeln auf?",
      answer:
        "Anfänger (erstes Jahr): 0,5-1 kg Muskel pro Monat möglich. Intermediate (Jahr 2-3): 0,25-0,5 kg. Fortgeschritten (Jahr 4+): 0,1-0,25 kg. Frauen bauen etwa die Hälfte der Rate auf wie Männer.",
    },
    {
      question: "Muss ich im Kalorienüberschuss sein?",
      answer:
        "Für maximalen Muskelaufbau ja. Ein leichter Überschuss (200-400 kcal) erlaubt den Körper, neue Strukturen aufzubauen. Anfänger können unter bestimmten Bedingungen (sogenannte Newbie Gains) auch bei neutraler Bilanz Muskeln aufbauen, aber dann langsamer.",
    },
    {
      question: "Wie oft pro Muskelgruppe trainieren?",
      answer:
        "Zweimal pro Woche pro Muskelgruppe ist optimal für Hypertrophie. Einmal funktioniert aber weniger effektiv. Dreimal nur für Fortgeschrittene mit guter Regeneration.",
    },
    {
      question: "Wie viele Sätze pro Woche pro Muskelgruppe?",
      answer:
        "Die Evidenz deutet auf 10-20 Arbeitssätze pro Woche pro Muskelgruppe für Hypertrophie hin. Anfänger starten bei 6-10 Sätzen, steigern langsam. Mehr als 20 Sätze bringt kaum mehr, erhöht aber Verletzungsrisiko.",
    },
    {
      question: "Grundübungen oder Isolations-Übungen?",
      answer:
        "80/20-Regel. 80 Prozent Grundübungen (Kniebeuge, Kreuzheben, Bankdrücken, Klimmzug, Schulterdrücken, Rudern), 20 Prozent Isolation (Bizeps-Curl, Trizeps-Pushdown etc.). Grundübungen bauen die meiste Masse auf, Isolation ergänzt schwache Stellen.",
    },
    {
      question: "Wie wichtig ist der Satz bis zum Versagen?",
      answer:
        "Nicht in jedem Satz nötig. 1-2 RIR (Reps in Reserve) bei den meisten Sätzen, gelegentlich ein Satz bis zum Versagen. Komplettes Versagen bei jeder Übung führt zu Übertraining und längerer Erholungszeit.",
    },
    {
      question: "Was ist mit Pump und Volumen-Schwankungen?",
      answer:
        "Das intraworkout Anschwellen ('Pump') ist nicht mit Muskelaufbau gleichzusetzen. Es ist hauptsächlich Wasser und Blut. Echter Aufbau ist über Wochen messbar, nicht Stunden.",
    },
  ],
  content: root([
    paragraph(
      "Natürlicher Muskelaufbau ist ein jahrelanger Prozess. Wer bereit ist, geduldig zu sein und konsequent zu arbeiten, kann beeindruckende Ergebnisse erzielen. Ohne Anabolika, ohne Wundermittel, ohne Abkürzungen. Dieser Guide zeigt dir den evidenzbasierten Weg."
    ),

    heading("h2", "Wie Muskelaufbau biologisch funktioniert"),
    paragraph(
      "Krafttraining verursacht mikroskopische Schäden in den Muskelfasern. In der Erholungsphase repariert der Körper diese Schäden und macht die Fasern etwas dicker als zuvor - dieser Prozess heißt Muskelproteinsynthese (MPS). Wiederholt über Monate und Jahre entsteht sichtbarer Aufbau."
    ),
    paragraph(
      "Drei Signale triggern MPS:"
    ),
    ul([
      [bold("Mechanische Spannung"), text(": Die Hauptquelle, entsteht bei schweren Wiederholungen")],
      [bold("Metabolischer Stress"), text(": Das 'Brennen' bei hohen Wiederholungszahlen")],
      [bold("Muskelschaden"), text(": Moderate Mikrotraumen, aktivieren Satellitenzellen")],
    ]),

    heading("h2", "Die realistische Rate des Aufbaus"),

    table([
      ["Trainingsjahr", "Männer (kg/Monat)", "Frauen (kg/Monat)"],
      ["Jahr 1", "0,75-1,0", "0,4-0,5"],
      ["Jahr 2", "0,5", "0,25"],
      ["Jahr 3", "0,25", "0,15"],
      ["Jahr 4+", "0,1", "0,05"],
      ["Lifetime-Potenzial", "15-25 kg ab Basis", "8-12 kg ab Basis"],
    ]),
    paragraph(
      "Diese Zahlen setzen strukturiertes Training, ausreichend Protein und Schlaf voraus. Wer Instagram-Bilder mit 5 kg Muskel in 8 Wochen sieht, schaut entweder auf Retuschierungen oder nicht-natürliches Training."
    ),

    heading("h2", "Die drei Säulen des Muskelaufbaus"),

    heading("h3", "Säule 1: Progressive Overload"),
    paragraph(
      "Dein Körper adaptiert an Reize. Ohne Steigerung stagniert jeder Effekt. Die sechs Progressions-Hebel sind im ",
      link("/blog/krafttraining-fuer-anfaenger", "Krafttraining-Guide", false),
      " detailliert beschrieben. Ohne Trainingstagebuch funktioniert Progressive Overload nicht."
    ),

    heading("h3", "Säule 2: Ausreichend Protein"),
    paragraph(
      "1,8-2,2 g Protein pro kg Körpergewicht pro Tag, verteilt auf 3-5 Mahlzeiten. Jede Mahlzeit braucht 2,5-3 g Leucin für optimale MPS. Details zu Mengen und Quellen im ",
      link("/blog/proteinbedarf-berechnen", "Protein-Guide", false),
      "."
    ),

    heading("h3", "Säule 3: Kalorienüberschuss und Schlaf"),
    paragraph(
      "200-400 kcal über dem Erhaltungsbedarf. Zu aggressiver Überschuss führt zu unnötigem Fettaufbau. Plus: 8-9 Stunden Schlaf pro Nacht, in denen der Hauptteil der Reparatur stattfindet."
    ),

    heading("h2", "Trainings-Frequenz und Volumen"),

    table([
      ["Level", "Einheiten/Woche", "Sätze/Muskel/Woche", "Split-Empfehlung"],
      ["Anfänger", "3", "6-10", "Ganzkörper"],
      ["Intermediate", "4", "10-15", "Oberkörper/Unterkörper"],
      ["Fortgeschritten", "4-5", "12-20", "Push-Pull-Beine"],
      ["Erfahren", "5-6", "15-22", "Body-Part-Split"],
    ]),

    heading("h2", "Der ideale Anfänger-Aufbauplan (12 Wochen)"),

    heading("h3", "Struktur: 3x Ganzkörper pro Woche"),

    table([
      ["Übung", "Sätze", "Wiederholungen", "RIR"],
      ["Kniebeuge", "4", "6-8", "2"],
      ["Bankdrücken", "4", "6-8", "2"],
      ["Kreuzheben", "3", "5-6", "2"],
      ["Klimmzug oder Latzug", "4", "8-10", "1-2"],
      ["Schulterdrücken", "3", "8-10", "1-2"],
      ["Rudern am Kabel", "3", "8-10", "1"],
      ["Bizeps-Curl", "3", "10-12", "1"],
      ["Trizeps-Pushdown", "3", "10-12", "1"],
    ]),
    paragraph(
      "Progression: Jede Woche versuchen, eine Wiederholung mehr oder 1-2,5 kg mehr zu schaffen. Wenn alle Wiederholungen im Zielbereich sauber sind, Gewicht steigern."
    ),

    heading("h2", "Die 10 häufigsten Fehler beim Muskelaufbau"),
    ul([
      "Programm-Hopping alle 4 Wochen: keine Adaptation möglich",
      "Zu wenig Protein: 1,2 g/kg reichen nicht für optimalen Aufbau",
      "Zu aggressiver Kalorienüberschuss: mehr Fett als Muskel",
      "Kein Trainingstagebuch: keine messbare Progression",
      "Jeder Satz bis zum Versagen: zu hohe Ermüdung, schlechte Regeneration",
      "Cardio-Überschuss: über 5h intensives Cardio pro Woche bremst Aufbau",
      "Vergleich mit Enhanced-Athleten: frustrierend und demotivierend",
      "Nur Grundübungen, keine Isolation: schwache Punkte bleiben schwach",
      "Nur Isolation, keine Grundübungen: massive Masse-Limitierung",
      "Kein Deload alle 6-8 Wochen: Überlastung über Zeit",
    ]),

    heading("h2", "Plateaus überwinden"),
    paragraph(
      "Fortschritt kommt nie linear. Plateaus treten typischerweise alle 8-12 Wochen auf. Strategien:"
    ),
    ol([
      "Deload-Woche: 50% Volumen bei gleichem Gewicht",
      "Programm-Wechsel: andere Übungen für gleiche Muskelgruppe",
      "Volumen erhöhen: +2-3 Sätze pro Muskelgruppe pro Woche",
      "Volumen reduzieren: manchmal ist zu viel das Problem",
      "Kalorien überprüfen: Erhaltungsbedarf ändert sich mit Masse",
      "Schlaf messen: 7h vs. 8,5h macht messbaren Unterschied",
      "Technik-Check: oft ist nicht das Volumen, sondern die Qualität das Problem",
    ]),

    heading("h2", "Bulk-Cut-Zyklen oder kontinuierlicher Aufbau?"),

    table([
      ["Strategie", "Vorgehen", "Wann geeignet"],
      ["Kontinuierlich", "Leichter Überschuss (100-200 kcal) dauerhaft", "Fortgeschrittene, wenig Fettzuwachs"],
      ["Bulk-Cut klassisch", "6 Monate Überschuss, 2-3 Monate Defizit", "Anfänger/Intermediate"],
      ["Mini-Bulks", "8-12 Wochen Überschuss, 4-6 Wochen Erhaltung", "Balance zwischen Aufbau und Leanness"],
      ["Body-Recomp", "Leichtes Defizit + Protein hoch + Training hart", "Nur für Anfänger und Wiedereinsteiger"],
    ]),

    heading("h2", "Supplements für Muskelaufbau"),
    paragraph(
      "Drei Supplements haben starke Evidenz: Kreatin-Monohydrat, Proteinpulver und Koffein. Details im ",
      link("/blog/supplements-was-lohnt-sich", "Supplement-Guide", false),
      ". Alles andere ist Feinschliff oder Marketing."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Natürlicher Muskelaufbau ist kein Sprint, sondern ein Marathon. 3-5 Jahre strukturiertes Training mit Protein-fokussierter Ernährung und ausreichend Schlaf bringen für die meisten Menschen beeindruckende Ergebnisse. Wer ehrliche Erwartungen hat und konsequent bleibt, wird mit einem gesunden, starken Körper belohnt."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/",
          "ACSM Position Stand: Resistance Training for Muscle Hypertrophy"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/",
          "ISSN Position Stand: Protein and Exercise"
        ),
      ],
    ]),
  ]),
}
