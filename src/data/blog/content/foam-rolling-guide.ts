import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const foamRollingGuide = {
  slug: "foam-rolling-guide",
  title: "Foam Rolling: Der komplette Guide mit evidenzbasierter Technik",
  excerpt:
    "Foam Rolling reduziert Muskelkater um 20-40 Prozent und verbessert Beweglichkeit messbar. Hier die richtige Technik, Timing und die wichtigsten Übungen für jede Muskelgruppe.",
  categorySlug: "wellness",
  authorSlug: "hidayet",
  coverImagePath: "/images/casasports-functional-training.webp",
  keyTakeaway:
    "90-120 Sekunden pro Muskelgruppe ist die optimale Foam-Rolling-Dosis. Pre-Workout 30-60 Sekunden verbessert Beweglichkeit ohne Kraftverlust. Post-Workout 60-120 Sekunden reduziert Muskelkater um 20-40 Prozent und beschleunigt Regeneration - wissenschaftlich belegt.",
  faq: [
    {
      question: "Wie lange pro Muskelgruppe rollen?",
      answer:
        "Eine 2020 Meta-Analyse zeigt: 90-120 Sekunden sind die optimale Dauer für Beweglichkeitsverbesserung. Pre-Workout reichen 30-60 Sekunden, Post-Workout 60-120 Sekunden reduzieren DOMS am effektivsten.",
    },
    {
      question: "Foam Rolling vor oder nach dem Training?",
      answer:
        "Beides möglich mit unterschiedlichem Zweck. Vor dem Training (30-60 Sekunden pro Muskel): verbessert Range of Motion ohne Kraft zu reduzieren. Nach dem Training (60-120 Sekunden): reduziert Muskelkater 24-72 Stunden später.",
    },
    {
      question: "Soll es weh tun?",
      answer:
        "Moderat unangenehm, nicht schmerzhaft. 6-7 auf einer Skala von 10 ist richtig. Scharfer Schmerz bedeutet zu viel Druck oder falscher Bereich (z.B. direkt über Gelenk oder Sehne). Dann ausweichen oder Rolle wechseln.",
    },
    {
      question: "Welche Rolle für Anfänger?",
      answer:
        "Standard-Foam-Roller (glatte Oberfläche, mittlere Härte, ca. 30 cm lang). Erst wenn die beherrschst, auf strukturierte Rollen mit Noppen wechseln. Vibration-Roller haben in Studien leichte Zusatzwirkung, sind aber teuer.",
    },
    {
      question: "Täglich rollen oder nur nach Training?",
      answer:
        "Nach Training auf jeden Fall. Zusätzliches tägliches Rollen (5-10 Min für verspannte Bereiche) ist unbedenklich und oft hilfreich, besonders bei Büromenschen mit Haltungsproblemen.",
    },
    {
      question: "Ersetzt Foam Rolling Stretching?",
      answer:
        "Nicht komplett. Beide verbessern Beweglichkeit, aber auf unterschiedliche Weise. Optimale Kombination: Foam Rolling 60 Sekunden plus statisches Stretching 30 Sekunden pro Muskelgruppe. Zusammen kommen Verbesserungen in Range of Motion, die keine Einzelmethode allein erreicht.",
    },
    {
      question: "Welche Bereiche sollte ich nicht rollen?",
      answer:
        "Wirbelsäule direkt (nur parallel über Rückenstrecker), akute Verletzungen, entzündete Bereiche, Knochen direkt, Rückseiten der Knie, direkt über Sehnen, bei Krampfadern, während Schwangerschaft ohne ärztliche Freigabe.",
    },
  ],
  content: root([
    paragraph(
      "Foam Rolling, auch Self-Myofascial Release genannt, ist eine der besten kostengünstigen Methoden zur Regeneration und Beweglichkeitsverbesserung. Die wissenschaftliche Evidenz ist solide, die Technik einfach zu lernen. Dieser Guide zeigt, wie du es richtig machst."
    ),

    heading("h2", "Was Foam Rolling wirklich bewirkt"),
    paragraph(
      "Die Theorie des 'Myofascial Release' (mechanische Lösung von Verklebungen im Faszien-Gewebe) ist umstritten. Was wissenschaftlich belegt ist:"
    ),
    ul([
      "Kurzfristig verbesserte Beweglichkeit (Range of Motion)",
      "Reduziertes Muskelkater-Empfinden 24-72 Stunden nach Training",
      "Leicht erhöhte Durchblutung der Haut und oberflächlichen Muskeln",
      "Besseres Körpergefühl und Entspannungs-Wahrnehmung",
      "Keine negativen Effekte auf Kraft- oder Ausdauer-Leistung",
    ]),
    paragraph(
      "Der Mechanismus ist vermutlich eher neurologisch als mechanisch. Foam Rolling reduziert die 'Schutzspannung' der Muskeln, die nach hartem Training erhöht ist."
    ),

    heading("h2", "Was die Forschung zeigt"),
    paragraph(
      "Eine ",
      link(
        "https://pubmed.ncbi.nlm.nih.gov/32825976/",
        "systematische Meta-Analyse im Journal of Sport and Health Science (2020)"
      ),
      " fasst die Evidenz zusammen: Foam Rolling hat einen großen Effekt auf Range of Motion in allen untersuchten Muskelgruppen. Die optimale Dosis ist 90-120 Sekunden pro Bereich, darunter sind Effekte kleiner, darüber stagniert der Nutzen."
    ),
    paragraph(
      "Für die Regeneration zeigen Studien konsistent: 60-120 Sekunden Rollen nach Training reduziert wahrgenommenen Muskelkater um 20-40 Prozent. Der Effekt hält 24-72 Stunden an und beschleunigt die gefühlte Erholung."
    ),

    heading("h2", "Die richtige Technik"),

    heading("h3", "Grundregeln"),
    ul([
      "Langsame Bewegungen: 2-3 cm pro Sekunde, nicht schnell vor und zurück",
      "Druck moderat: Körpergewicht steuert die Intensität, nicht drücken bis es unerträglich ist",
      "Bei einem verspannten Punkt: 20-30 Sekunden statisch bleiben, nicht rollen",
      "Atemung ruhig und tief, keine Luft anhalten",
      "Kein direkter Druck auf Knochen, Gelenke oder Sehnen",
      "90-120 Sekunden Gesamtdauer pro Muskelgruppe",
    ]),

    heading("h3", "Pre-Workout Routine (5-10 Minuten)"),
    paragraph(
      "Ziel: Beweglichkeit verbessern ohne Kraft zu reduzieren. 30-60 Sekunden pro Muskelgruppe:"
    ),
    ol([
      "Oberschenkel vorn (Quadriceps): auf dem Bauch, Rolle unter Oberschenkel",
      "Oberschenkel hinten (Hamstrings): sitzen, Rolle unter Oberschenkeln",
      "Gesäß (Glutes): sitzen auf Rolle, Bein über Knie gelegt",
      "Waden: sitzen, Rolle unter Unterschenkel",
      "Oberer Rücken (Trapez): Rolle quer, Arme verschränken, auf und ab rollen",
      "Brustmuskel (Pectoralis): gegen Wand, Ball oder Lacrosse-Ball",
    ]),

    heading("h3", "Post-Workout Routine (10-15 Minuten)"),
    paragraph(
      "Ziel: Regeneration, DOMS reduzieren. 60-120 Sekunden pro Muskelgruppe:"
    ),
    ul([
      "Alle trainierten Muskelgruppen gezielt durchgehen",
      "Bei verspannten Punkten (Trigger-Points) 30 Sekunden verweilen",
      "Nach intensivem Training lieber kürzer und sanfter als zu aggressiv",
      "Atmung bewusst halten",
      "Nach der Session: 500 ml Wasser trinken",
    ]),

    heading("h2", "Übungen für jede Muskelgruppe"),

    table([
      ["Muskel", "Position", "Pre (Sek)", "Post (Sek)", "Tipp"],
      ["Quadriceps", "Bauchlage, Rolle unter Oberschenkeln", "30-60", "60-120", "Langsam über ganze Länge"],
      ["Hamstrings", "Sitz, Rolle unter Oberschenkeln", "30-60", "60-120", "Kann schmerzhaft sein"],
      ["Waden", "Sitz, Rolle unter Unterschenkel", "30", "60-90", "Bein oben kreuzen für mehr Druck"],
      ["Glutes", "Sitz auf Rolle, Bein gekreuzt", "30", "60-90", "Gezielter mit Lacrosse-Ball"],
      ["IT-Band", "Seitlich liegend, Rolle an Außenseite", "30-45", "60-90", "Sehr unangenehm, aber wirksam"],
      ["Oberer Rücken", "Rückenlage, Rolle quer", "60", "90-120", "NICHT über Lendenwirbel"],
      ["Brust", "Gegen Wand mit Lacrosse-Ball", "30", "60", "Statische Haltepunkte"],
      ["Schulterblätter", "Rolle in Höhe der Schulterblätter", "60", "90-120", "Guter Bürostuhl-Antidot"],
    ]),

    heading("h2", "Was NICHT gerollt werden sollte"),
    ul([
      "Direkt über die Wirbelsäule (nur parallel dazu über die Rückenstrecker)",
      "Bereich hinter den Knien (empfindliches Nervengewebe)",
      "Direkt über Bauchorganen",
      "Akute Verletzungen, frische Zerrungen, offene Wunden",
      "Entzündete Gelenke",
      "Bei Osteoporose oder Knochenbrüchen vorher ärztlich abklären",
    ]),

    heading("h2", "Unterschiedliche Rollen im Vergleich"),

    table([
      ["Rolle", "Beste für", "Preis", "Bemerkung"],
      ["Glatter Standard-Roller", "Einsteiger, alle Muskelgruppen", "15-30 €", "Ideal für 90% der Nutzer"],
      ["Strukturierter Roller (Noppen)", "Fortgeschrittene, Trigger-Points", "25-50 €", "Intensiver, nicht für Einsteiger"],
      ["Vibrations-Roller", "Maximum-Effekt, höheres Budget", "100-200 €", "Leichte Zusatzwirkung in Studien"],
      ["Lacrosse-Ball", "Punktuell, Trigger-Points", "5-15 €", "Ergänzung, nicht Ersatz"],
      ["Massage-Stick", "Unterwegs, Waden/Arme", "10-25 €", "Weniger tiefgreifend als Foam"],
    ]),

    heading("h2", "Häufige Fehler"),
    ul([
      "Zu schnell rollen: Effekt geht verloren, langsam ist besser",
      "Nur 15 Sekunden pro Muskel: unter der wirksamen Schwelle",
      "Auf Schmerzpunkt durchrollen: 30 Sekunden still halten ist wirksamer",
      "Hohlkreuz bei oberem Rücken: Core anspannen, Kopf unterstützen",
      "Lendenwirbel rollen: gefährlich, nur parallel über Rückenstrecker",
      "Jeden Tag 30 Minuten: zu viel, 10-15 Min nach Training reichen",
    ]),

    heading("h2", "Foam Rolling für Büromenschen"),
    paragraph(
      "Wer 8+ Stunden sitzt, hat typische Verspannungen in Brust, Hüftbeuger, oberem Rücken und Glutes. Tägliche 10-Minuten-Routine:"
    ),
    ol([
      "Brustmuskel mit Lacrosse-Ball gegen Wand: 60 Sek pro Seite",
      "Oberer Rücken auf Rolle: 90 Sek",
      "Hüftbeuger (Bauchlage, Rolle unter Leisten): 60 Sek pro Seite",
      "Glutes (sitzend, Bein gekreuzt): 60 Sek pro Seite",
      "IT-Band seitlich: 60 Sek pro Seite",
    ]),

    heading("h2", "Was Casa Sports bietet"),
    paragraph(
      "In unserem Functional-Bereich stehen mehrere Foam Roller und Lacrosse-Bälle bereit. Im Einführungstermin zeigen wir die wichtigsten Techniken. Wer das Rollen strukturiert lernen will, findet das auch in unserem Functional-Kurs."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Foam Rolling ist eine einfache, günstige und wissenschaftlich belegte Methode zur Regeneration und Beweglichkeitsverbesserung. 10-15 Minuten nach dem Training, 90-120 Sekunden pro Muskelgruppe - mehr braucht es nicht. Wer das zur Routine macht, reduziert Muskelkater merklich und verbessert sein Körpergefühl."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC4637917/",
          "Self-Myofascial Release Systematic Review (PMC)"
        ),
      ],
      [
        link(
          "https://pubmed.ncbi.nlm.nih.gov/32825976/",
          "Foam Rolling Meta-Analysis on ROM and Recovery (Pubmed 2020)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC12193259/",
          "Vibration Foam Rolling Systematic Review"
        ),
      ],
    ]),
  ]),
}
