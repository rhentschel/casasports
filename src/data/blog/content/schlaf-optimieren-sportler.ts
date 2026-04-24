import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const schlafOptimierenSportler = {
  slug: "schlaf-optimieren-sportler",
  title: "Schlaf optimieren für Sportler: Der wichtigste Regenerations-Hebel",
  excerpt:
    "Schlaf ist der größte Einzel-Faktor für Regeneration, Leistung und Gewichtsregulation. Wie du deinen Schlaf messbar verbesserst mit evidenzbasierten Hygiene- und Extensions-Strategien.",
  categorySlug: "wellness",
  authorSlug: "hidayet",
  coverImagePath: "/images/casasports-wellness.webp",
  keyTakeaway:
    "Sportler brauchen 8-10 Stunden Schlaf pro Nacht. Jede Stunde weniger als 8 erhöht Verletzungsrisiko, senkt Kraftleistung und bremst Regeneration messbar. Sleep Hygiene plus gezielter Sleep Extension um 1-2 Stunden bringen oft den größten Leistungssprung bei Freizeitsportlern.",
  faq: [
    {
      question: "Wie viel Schlaf brauche ich wirklich als Sportler?",
      answer:
        "8-10 Stunden pro Nacht. Eine aktuelle Review aus Current Sleep Medicine Reports (2025) bestätigt, dass aktive Menschen mehr brauchen als Nicht-Sportler. Profisportler in NBA und NFL schlafen im Schnitt 9-10 Stunden.",
    },
    {
      question: "Ist 6 Stunden Schlaf wirklich so schlimm?",
      answer:
        "Ja, die Daten sind eindeutig. Eine 2025er Meta-Analyse zeigt: Sportler mit weniger als 8 Stunden Schlaf haben 1,7-fach höheres Verletzungsrisiko. Kraftleistung, Reaktion und kognitive Leistung sind messbar reduziert.",
    },
    {
      question: "Können Nickerchen den Nachtschlaf ersetzen?",
      answer:
        "Teilweise ja. 20-90 Minuten Nap am Nachmittag kompensieren nicht vollständig einen kürzeren Nachtschlaf, helfen aber bei Regeneration und Leistung. Ideal: 20-30 Minuten kurzer Nap für Erfrischung, 90 Minuten für ganzen Schlaf-Zyklus.",
    },
    {
      question: "Was tun bei Einschlafproblemen nach dem Abendtraining?",
      answer:
        "Die Temperaturregulation ist nach dem Training gestört. Strategien: Kühle Dusche oder leichtes Stretching 30-60 Minuten vor dem Schlaf, Raumtemperatur 16-19°C, 90-120 Minuten Abstand zwischen Training und Schlaf, kein Koffein nach 15 Uhr.",
    },
    {
      question: "Helfen Schlaf-Tracker wirklich?",
      answer:
        "Grundsätzlich ja, aber nicht zu akribisch. Geräte wie Oura, Whoop oder Apple Watch liefern gute Trends über Wochen. Aber: Nicht auf einzelne Nächte fokussieren, das verursacht Stress (Orthosomnia). Wochen-Durchschnitt zählt.",
    },
    {
      question: "Sollte ich am Trainingstag anders schlafen?",
      answer:
        "Ja, Sleep Extension ist belegt wirksam. In Trainingsblöcken 30-60 Minuten mehr Schlaf einplanen. Studien zeigen, dass Spieler mit 10 Stunden Schlaf über mehrere Wochen bessere Sprungkraft, Sprintzeiten und Freiwurfquoten erreichen.",
    },
    {
      question: "Alkohol am Trainingsabend - wie schlimm?",
      answer:
        "Deutlich spürbar. Auch ein Glas Wein reduziert Tiefschlaf und REM-Phasen messbar. Bei Wettkampfvorbereitung und harten Trainingsblöcken komplett meiden.",
    },
  ],
  content: root([
    paragraph(
      "Schlaf wird in der Fitness-Welt massiv unterschätzt. Während Supplements und Ernährung endlose Debatten auslösen, bekommt Schlaf kaum Aufmerksamkeit - obwohl er der größte Einzelhebel für Leistung und Regeneration ist. Dieser Guide zeigt, wie du deinen Schlaf systematisch optimierst."
    ),

    heading("h2", "Warum Schlaf für Sportler so wichtig ist"),
    paragraph(
      "Im Schlaf passieren die wichtigsten Regenerations-Prozesse: Wachstumshormon wird ausgeschüttet, Muskelprotein synthetisiert, Gedächtnis konsolidiert, Hormone balanciert. Eine ",
      link(
        "https://www.mdpi.com/2077-0383/14/21/7606",
        "multidimensionale Review in MDPI Journal of Clinical Medicine (2025)"
      ),
      " fasst zusammen: Schlaf-Defizit beeinträchtigt Muskelkraft, Sprung- und Sprintleistung, Ausdauer, kognitive Reaktion und Motivation gleichzeitig."
    ),
    paragraph(
      "Bei Jugendlichen kommt hinzu: jede fehlende Stunde Schlaf unter 8 Stunden erhöht das Verletzungsrisiko um 70 Prozent. Das gilt abgeschwächt auch für Erwachsene."
    ),

    heading("h2", "Wie viel Schlaf Sportler brauchen"),

    table([
      ["Aktivitätslevel", "Empfehlung", "Zusätzlich"],
      ["Inaktiv", "7-9 Std", "-"],
      ["Freizeitsport 2-3x/Wo", "8-9 Std", "Ausreichend für Baseline"],
      ["Ambitioniert 4-5x/Wo", "8-10 Std", "Sleep Extension lohnt sich"],
      ["Leistungssport 6+/Wo", "9-10 Std", "Plus 20-30 Min Nap möglich"],
      ["Wettkampfphasen", "10+ Std", "Plus Nap, Sleep-Prio absolut"],
    ]),

    heading("h2", "Sleep Hygiene: Die 10 evidenzbasierten Regeln"),
    paragraph(
      "Eine narrative Review in ",
      link(
        "https://link.springer.com/article/10.1007/s40675-025-00342-y",
        "Current Sleep Medicine Reports (2025)"
      ),
      " hat die wirksamsten Hygiene-Maßnahmen identifiziert:"
    ),
    ol([
      "Feste Schlafzeiten: auch am Wochenende maximal 1 Stunde Abweichung",
      "Schlafzimmer kühl (16-19°C), dunkel (Verdunkelung oder Schlafmaske), ruhig (Ohropax wenn nötig)",
      "Keine Bildschirme 60 Min vor dem Schlaf, oder zumindest Nachtmodus",
      "Koffein-Stopp nach 14-15 Uhr (Halbwertszeit 5-6 Stunden)",
      "Kein Alkohol vor dem Schlaf (reduziert Tiefschlaf messbar)",
      "Letzte Mahlzeit 2-3 Stunden vor Schlaf, klein und eiweißbetont",
      "Morgens 10-15 Min Tageslicht (Circadian-Rhythmus)",
      "Nachmittags Bewegung, aber nicht direkt vor dem Schlaf",
      "Gleiche Routine vor dem Schlaf: Lesen, Stretching, Meditation",
      "Bei Einschlafproblemen: Bett verlassen, leise Tätigkeit, zurück wenn müde",
    ]),

    heading("h2", "Sleep Extension: Der Leistungs-Booster"),
    paragraph(
      "Das Konzept: bewusst länger schlafen über mehrere Wochen. Eine ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC10354314/",
        "systematische Review zu Schlaf-Interventionen bei Athleten"
      ),
      " zeigt: Sleep Extension um 1-2 Stunden pro Nacht für 3-7 Wochen verbessert Leistung in allen gemessenen Parametern."
    ),
    paragraph(
      "Praktische Umsetzung:"
    ),
    ul([
      "Aktuelle durchschnittliche Schlafzeit über 2 Wochen tracken",
      "Ziel: 60-120 Minuten mehr pro Nacht",
      "Zeitpunkt wählen: lieber früher ins Bett als später aufstehen",
      "Konsistent über 3-4 Wochen durchziehen",
      "Leistungs-Parameter vorher und nachher testen (Sprungkraft, Kraft, Ausdauer)",
    ]),

    heading("h2", "Das perfekte Schlafzimmer"),

    heading("h3", "Temperatur: 16-19°C"),
    paragraph(
      "Die Kerntemperatur muss zum Einschlafen sinken. Zu warme Räume (über 22°C) behindern das. Ideal: leicht kühl mit warmer Decke."
    ),

    heading("h3", "Licht: Absolute Dunkelheit"),
    paragraph(
      "Schon schwaches Licht (Handy-LED, Straßenlaterne) reduziert Melatonin-Produktion. Verdunkelungsvorhänge oder Schlafmaske sind Pflicht für optimalen Schlaf."
    ),

    heading("h3", "Geräuschpegel: unter 30 dB"),
    paragraph(
      "Ohropax wenn Partner schnarcht oder Straßenlärm besteht. White Noise Machines sind eine Alternative. Stille Umgebung verbessert REM-Schlaf messbar."
    ),

    heading("h3", "Matratze und Bettzeug"),
    paragraph(
      "Keine harte Wissenschaft, aber individuell wichtig. Matratze alle 7-10 Jahre ersetzen. Kissen passend zur Schlafposition (Seitenschläfer: höher, Rückenschläfer: mittel)."
    ),

    heading("h2", "Was den Schlaf zerstört"),

    table([
      ["Schlaf-Killer", "Effekt", "Fix"],
      ["Abend-Koffein", "Reduziert Tiefschlaf um 30%+", "Keine Kaffee/Tee/Cola nach 15 Uhr"],
      ["Alkohol", "REM-Schlaf geht verloren", "Meiden oder nur früh am Abend"],
      ["Bildschirme", "Blaulicht blockt Melatonin", "60 Min vorher weg oder Nachtmodus"],
      ["Intensives Abendtraining", "Cortisol hoch, Kerntemperatur hoch", "90-120 Min Abstand, kühle Dusche"],
      ["Stress-Gedanken", "Einschlaf-Verzögerung", "Journaling, Atemübungen vor Bett"],
      ["Schwere Mahlzeiten", "Verdauung aktiv", "2-3h Abstand, leichter essen"],
    ]),

    heading("h2", "Naps: Das strategische Mittagsschläfchen"),
    paragraph(
      "Naps sind besonders wirksam für Sportler im Schlafdefizit oder mit Doppeltrainings-Tagen. Regeln:"
    ),
    ul([
      "20-30 Minuten: 'Power Nap' - erfrischt ohne Schlaftrunkenheit",
      "60-90 Minuten: kompletter Schlaf-Zyklus, tiefere Regeneration",
      "Nicht zwischen 16-18 Uhr: kann Nachtschlaf stören",
      "In ruhiger Umgebung: Ohropax, Schlafmaske auch mittags sinnvoll",
      "Bei Profis: Nap in Trainingslagern oft fest eingeplant",
    ]),

    heading("h2", "Schlaf-Tracking: Sinnvoll oder Stressor?"),
    paragraph(
      "Wearables wie Oura, Whoop, Apple Watch oder Garmin messen Schlafdauer relativ zuverlässig, Schlafphasen weniger präzise. Wochen-Trends sind wertvoll, einzelne Nächte wenig aussagekräftig."
    ),
    paragraph(
      "Vorsicht vor Orthosomnia: die zwanghafte Perfektion-Suche beim Schlaf. Wer jeden Morgen nervös auf den Score schaut, stresst sich mehr als er profitiert. Monatliche Auswertungen reichen für Optimierung."
    ),

    heading("h2", "Was ist mit Melatonin-Supplementen?"),
    paragraph(
      "Für Jet-Lag und Schichtarbeit hilfreich (0,5-3 mg 30 Minuten vor Schlaf). Bei normalem Schlafproblem meist nicht die Lösung - Sleep Hygiene ist wirksamer. Bei länger anhaltenden Problemen ärztlich abklären."
    ),

    heading("h2", "Wann ärztliche Hilfe?"),
    ul([
      "Schlaf über 3+ Wochen deutlich gestört trotz guter Hygiene",
      "Extreme Tagesmüdigkeit trotz ausreichender Schlafzeit (Schlafapnoe-Verdacht)",
      "Häufiges Schnarchen mit Atemaussetzern",
      "Restless Legs oder unerklärliche Bewegungen",
      "Albträume, Angstzustände beim Einschlafen",
      "Langfristige Einschlafdauer über 45 Minuten",
    ]),

    heading("h2", "Casa Sports und deine Regeneration"),
    paragraph(
      "Der Wellness-Bereich mit Sauna und Ruhe-Zone unterstützt die Entspannung vor dem Schlaf. Unsere Kurse sind so getaktet, dass Abendtraining gut 90 Minuten vor den typischen Schlafenszeiten endet. Im 12-Wochen-Programm ",
      link("/mein-neues-ich", "Mein Neues Ich", false),
      " besprechen wir auch Schlafstrategien individuell."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Schlaf ist der unglamouröseste, aber mit Abstand wirksamste Hebel für Regeneration und Leistung. 8-10 Stunden pro Nacht, konsistent, mit guter Hygiene - das schlägt jedes Supplement. Wer seinen Schlaf über 4-8 Wochen optimiert, erlebt oft spürbare Leistungs- und Wohlfühl-Sprünge."
    ),
    paragraph(
      "Mehr zu Regeneration findest du im ",
      link("/blog/wellness-und-regeneration-guide", "kompletten Wellness-Guide", false),
      "."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://link.springer.com/article/10.1007/s40675-025-00342-y",
          "Sleep Hygiene and Sleep Extension for Athletes (Current Sleep Medicine Reports 2025)"
        ),
      ],
      [
        link(
          "https://www.mdpi.com/2077-0383/14/21/7606",
          "Sleep and Athletic Performance: Multidimensional Review (MDPI 2025)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC10354314/",
          "Impact of Sleep Interventions on Athletic Performance"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC11996801/",
          "Sleep Deprivation on Sports Performance (2025 Meta-Analysis)"
        ),
      ],
    ]),
  ]),
}
