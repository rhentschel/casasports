import { root, paragraph, heading, ul, ol, bold, link, text } from "../lexical-builder"

export const saunaNachDemTraining = {
  slug: "sauna-nach-dem-training",
  title: "Sauna nach dem Training: Vorteile, Risiken und optimales Timing",
  excerpt:
    "Was sagt die Forschung zu Sauna nach dem Sport? Die aktuellen Studien zu Regeneration, Muskelkater und Herz-Kreislauf sowie das optimale Timing.",
  keyTakeaway:
    "Sauna nach dem Training kann Muskelkater reduzieren, Regeneration beschleunigen und das Herz-Kreislauf-System stärken. Entscheidend sind Timing (15-30 Minuten Pause nach dem Workout), Dauer (8-12 Minuten pro Gang) und ausreichend Flüssigkeit. Infrarot-Sauna belastet den Kreislauf weniger als die klassische finnische Variante.",
  faq: [
    {
      question: "Wie lange sollte ich nach dem Training in die Sauna?",
      answer:
        "In der wissenschaftlichen Literatur werden Sessions zwischen 8 und 30 Minuten als wirksam beschrieben. Ein praktikabler Rahmen: zwei Saunagänge à 8-12 Minuten mit 10-15 Minuten Pause dazwischen. Wichtiger als die exakte Länge ist, dass du den Saunagang abbrichst, sobald dir unwohl wird.",
    },
    {
      question: "Direkt nach dem Training oder mit Pause?",
      answer:
        "Plane mindestens 15-30 Minuten Pause ein. Dein Kreislauf ist direkt nach dem Training noch aktiviert, Herzfrequenz und Blutdruck brauchen Zeit zum Runterfahren. Dusche kurz ab, trink etwas Wasser und iss einen kleinen Snack, bevor du in die Sauna gehst.",
    },
    {
      question: "Wie oft pro Woche ist sinnvoll?",
      answer:
        "Studien zu regelmäßigem Saunabaden in Kombination mit Sport arbeiten meist mit 2-4 Einheiten pro Woche über mehrere Wochen. In dieser Frequenz zeigen sich messbare Effekte auf Kreislauf, Cholesterin und subjektive Regeneration. Wer täglich sauniert, sollte besonders auf Schlaf, Flüssigkeitshaushalt und Trainingsbelastung achten.",
    },
    {
      question: "Beeinflusst Sauna nach dem Training den Muskelaufbau?",
      answer:
        "Eine randomisierte Studie aus 2025 fand keinen signifikanten Effekt regelmäßiger Post-Workout-Infrarot-Sauna auf Muskelwachstum, aber Hinweise auf verbesserte Kraftentwicklung langfristig. Wer in einer harten Hypertrophie-Phase ist, muss keine Sauna meiden, sie bringt aber auch keinen direkten Muskelaufbau-Bonus.",
    },
    {
      question: "Was trinke ich am besten vor und nach der Sauna?",
      answer:
        "Wasser, ungesüßter Tee oder Mineralwasser mit Natrium sind die erste Wahl. Saftschorlen helfen nach intensiven Einheiten, Kohlenhydrate und Flüssigkeit gleichzeitig aufzunehmen. Alkohol ist in Kombination mit Sauna und Training tabu, da er die Dehydrierung verstärkt und den Kreislauf zusätzlich belastet.",
    },
    {
      question: "Wann sollte ich auf die Sauna verzichten?",
      answer:
        "Bei akuten Infekten mit Fieber, unbehandeltem Bluthochdruck, schweren Herz-Kreislauf-Erkrankungen, frischen Verletzungen oder starker Erschöpfung ist die Sauna tabu. In der Schwangerschaft und bei chronischen Vorerkrankungen immer vorher mit dem behandelnden Arzt abklären. Auch unmittelbar vor einem Wettkampf ist Sauna keine gute Idee.",
    },
    {
      question: "Traditionelle Sauna oder Infrarot, was ist besser nach dem Sport?",
      answer:
        "Ein systematischer Review aus 2025 weist darauf hin, dass sehr heiße klassische Saunagänge direkt nach harter Belastung die Leistung am Folgetag vorübergehend reduzieren können, Infrarot-Sitzungen bei moderateren Temperaturen zeigen diesen Effekt nicht. Wenn du hart trainierst und am Folgetag wieder belasten willst, ist Infrarot die schonendere Wahl. Für Entspannung und wenn am Folgetag ein Ruhetag ansteht, ist die klassische Sauna kein Problem.",
    },
  ],
  content: root([
    paragraph(
      "Sauna nach dem Training gehört für viele Sportler zum festen Ritual. Doch was bringt die Hitze wirklich, wann ist sie sinnvoll und wann schadet sie eher? Dieser Guide fasst die aktuelle Studienlage zusammen und zeigt dir, wie du Sauna gezielt für Regeneration und Gesundheit einsetzt."
    ),

    heading("h2", "Was im Körper passiert, wenn du nach dem Training sauniert"),
    paragraph(
      "Bei 60 bis 90 Grad Celsius läuft dein Körper auf Hochtouren. Die Kernkörpertemperatur steigt um etwa ein bis zwei Grad, die Hautgefäße weiten sich und der Kreislauf wird umverteilt zur Hautoberfläche zum Abkühlen. Die Herzfrequenz kann auf ein Niveau klettern, das einem moderaten Ausdauertraining entspricht."
    ),
    paragraph(
      "Parallel werden sogenannte Heat Shock Proteine aktiviert. Das sind körpereigene Reparaturhelfer, die beschädigte Muskelproteine stabilisieren und den Wiederaufbau unterstützen. Zusätzlich steigt die Plasmavolumen-Expansion, also der flüssige Anteil des Blutes, was langfristig die Ausdauerleistung verbessert."
    ),

    heading("h2", "Was die aktuelle Forschung zeigt"),
    paragraph(
      "Ein systematischer Review aus dem Jahr 2025 im Journal Sports Medicine Open hat zusammengefasst, was nach dem Training passiert, wenn Hitze gezielt als Regenerationsreiz eingesetzt wird. Das Hauptergebnis: Post-Exercise-Heat reduziert subjektiven Muskelkater zuverlässig und kann die Wiederherstellung neuromuskulärer Leistung unterstützen, die Effekte auf Langzeit-Adaptationen sind aber je nach Studiendesign unterschiedlich."
    ),
    paragraph(
      "Besonders gut untersucht ist die Infrarot-Sauna. Eine Studie mit Basketballspielern zeigte, dass 20-minütige Infrarot-Sessions nach Krafttraining die Sprungkraft 14 Stunden später besser wiederherstellten als passive Erholung. Ein Follow-up-Projekt von Frontiers in Sports and Active Living aus 2025 beobachtete über acht Wochen bei dreimaliger wöchentlicher Anwendung signifikante Verbesserungen in Kraftparametern und Herz-Kreislauf-Markern."
    ),
    paragraph(
      "Für die klassische finnische Sauna gibt es Hinweise, dass sehr heiße, lange Sitzungen direkt nach intensivem Training die maximale Leistung am Folgetag kurzfristig reduzieren können. Wer also hart trainiert und am nächsten Tag wieder ran will, fährt mit moderaten Temperaturen oder Infrarot besser."
    ),

    heading("h2", "Die 5 wichtigsten Vorteile nach dem Training"),

    heading("h3", "1. Beschleunigte Regeneration und weniger Muskelkater"),
    paragraph(
      "Die erhöhte Hautdurchblutung zieht auch die tieferen Gefäße nach. Nährstoffe kommen schneller in strapazierte Muskeln, Stoffwechselprodukte werden effizienter abtransportiert. In mehreren kontrollierten Studien war der wahrgenommene Muskelkater am Folgetag messbar geringer."
    ),

    heading("h3", "2. Stärkeres Herz-Kreislauf-System"),
    paragraph(
      "Regelmäßiges Saunieren funktioniert ähnlich wie ein leichtes Cardio-Training. Studien aus Finnland zeigen zusammen mit Bewegung verbesserte Werte für Blutdruck, Gesamtcholesterin und Herzfrequenzvariabilität. Das Training des Gefäßsystems durch Hitze wird teilweise als eigenständige Intervention diskutiert."
    ),

    heading("h3", "3. Besserer Schlaf"),
    paragraph(
      "Die passive Erwärmung und das darauffolgende Abkühlen am Abend unterstützen das natürliche Absinken der Körperkerntemperatur, ein wichtiges Signal zum Einschlafen. Viele Sportler berichten nach einem Abend-Saunagang von tieferem und erholsamerem Schlaf."
    ),

    heading("h3", "4. Mentale Entspannung und Stressabbau"),
    paragraph(
      "Die Ausschüttung von Endorphinen und die deutliche Reduktion des Stresshormons Cortisol nach der Sauna sind mehrfach dokumentiert. Was subjektiv als tiefe Ruhe empfunden wird, ist messbar ein Wechsel vom sympathischen in den parasympathischen Zustand, der Körper geht vom Flucht-Modus in den Erholungs-Modus."
    ),

    heading("h3", "5. Heat Shock Proteine und Zellreparatur"),
    paragraph(
      "Heat Shock Proteine sind ein spannendes Feld der Forschung. Sie helfen, beschädigte Eiweißstrukturen in Muskelzellen wieder zu stabilisieren und werden durch Hitze signifikant hochreguliert. Ob das langfristig zu mehr Muskelmasse oder besserer Zellgesundheit führt, ist noch offen, der Mechanismus ist aber plausibel und gut belegt."
    ),

    heading("h2", "Optimales Timing: Sofort, mit Pause oder am Folgetag?"),
    paragraph(
      "Direkt nach dem letzten Satz in die Kabine zu springen ist keine gute Idee. Dein Kreislauf ist noch aktiviert, Herzfrequenz und Blutdruck sind erhöht, die Kernkörpertemperatur hoch. Die Hitze der Sauna packt dann oben drauf und kann das Ganze kippen lassen."
    ),
    paragraph(
      bold("Unser Ablauf bei Casa Sports:"),
      " Nach dem Training erst 15 bis 30 Minuten zur Ruhe kommen. Dusche kurz, trink ein bis zwei Gläser Wasser, iss eventuell einen kleinen Snack mit Kohlenhydraten und Protein. Dann erst in die Sauna."
    ),
    paragraph(
      "Wenn am Folgetag ein intensives Training ansteht, kannst du die Sauna auch auf den Folgetag verschieben. Dann wirkt sie als eigenständige Regenerationseinheit und stört die akute Leistung nicht."
    ),

    heading("h2", "Praktikables Protokoll für Sportler"),
    ol([
      "Trainings-Cool-down: 5-10 Minuten leichte Bewegung und Stretching.",
      "Wasser trinken: 300-500 ml vor dem ersten Saunagang.",
      "Erster Gang: 8-12 Minuten bei 75-90 Grad (klassisch) oder 55-65 Grad (Infrarot).",
      "Abkühlphase: 10-15 Minuten in kühler Umgebung, moderate Dusche.",
      "Zweiter Gang: 8-12 Minuten, gleiche Bedingungen.",
      "Optional dritter Gang, nur wenn dein Kreislauf stabil ist und du dich gut fühlst.",
      "Nach dem letzten Gang: mindestens 30 Minuten ruhen, trinken, mineralhaltige Nahrung.",
    ]),
    paragraph(
      "Zwei bis drei Mal pro Woche sind für die meisten Sportler ein guter Rahmen, um Effekte zu spüren ohne den Körper zu überlasten."
    ),

    heading("h2", "Klassische finnische Sauna oder Infrarot?"),
    paragraph(
      "Beide Varianten wirken, aber nicht identisch. Die finnische Sauna arbeitet mit hohen Lufttemperaturen (80-100 Grad) und wahlweise niedriger oder höherer Luftfeuchte. Der Kreislauf wird stark gefordert, der Schweißausstoß ist intensiv. Für reine Entspannung und Herz-Kreislauf-Training klassisch stark."
    ),
    paragraph(
      "Infrarot arbeitet mit direkter Strahlungswärme (55-70 Grad) und erwärmt den Körper von innen her, ohne die Raumluft stark zu erhitzen. Die Belastung ist moderater, die Session länger möglich, und die Regenerationseffekte nach Training sind in mehreren Studien besonders deutlich. Wer am Folgetag wieder hart trainieren will, fährt mit Infrarot besser."
    ),
    paragraph(
      "Bei Casa Sports findest du beide Varianten: die ",
      bold("KLAFS Premium Sauna"),
      " für das klassische Erlebnis und die ",
      bold("Roeger Infrarotkabine"),
      " für gezielte Regeneration nach dem Training."
    ),

    heading("h2", "Wann du auf die Sauna nach dem Training verzichten solltest"),
    ul([
      "Akute Infekte, Fieber oder Halsentzündung.",
      "Unbehandelter Bluthochdruck oder bekannte Herzrhythmusstörungen.",
      "Starke Erschöpfung nach sehr hartem Training (Overreaching).",
      "Frische offene Wunden oder akute Hautentzündungen.",
      "Unmittelbar vor einem Wettkampf oder einer Leistungsdiagnostik.",
      "Schwangerschaft ohne ärztliche Freigabe.",
      "Kinder unter 14 Jahren nur unter Aufsicht und mit kurzen Einheiten.",
    ]),
    paragraph(
      "Generell gilt: Wenn du dich nach dem Training bleiern müde oder wacklig fühlst, ist das dein Körper, der Pause sagt. Höre auf ihn. Sauna ist ein Bonus, kein Muss."
    ),

    heading("h2", "Praxistipps aus dem Studio"),
    ul([
      "Starte neu immer vorsichtig: erst kürzere Gänge und niedrigere Temperaturen.",
      "Schmuck runter, Haare trocken tupfen, Handtuch als Sitzunterlage.",
      "Trinken: über den gesamten Tag verteilt mindestens 2-3 Liter, an Sauna-Tagen gern etwas mehr.",
      "Nach der Sauna keine eiskalten Duschen direkt auf den Rumpf, lieber Beine und Arme zuerst.",
      "Wenn dir schwindelig wird: sofort raus, Beine hoch lagern, trinken.",
    ]),

    heading("h2", "Fazit"),
    paragraph(
      "Sauna nach dem Training ist in der Regel kein Muss, aber ein sinnvolles Werkzeug für Regeneration, Herz-Kreislauf-Gesundheit und mentale Erholung. Die wissenschaftliche Evidenz unterstützt den positiven Effekt auf Muskelkater und Ausdauer-Adaptationen, während beim Krafttraining die Datenlage gemischter ist. Wichtig sind Timing, moderate Dauer und das Hören auf den eigenen Körper."
    ),
    paragraph(
      "In unserer ",
      bold("All-in-Mitgliedschaft"),
      " sind alle Wellness-Bereiche inklusive, du kannst unsere KLAFS Sauna und die Roeger Infrarotkabine ohne Aufpreis nutzen. Komm vorbei und probier es aus."
    ),

    heading("h2", "Quellen und weiterführende Literatur"),
    ul([
      [
        link(
          "https://link.springer.com/article/10.1186/s40798-025-00910-0",
          "Systematischer Review: Effects of Post-Exercise Heat Exposure on Acute Recovery and Training-Induced Performance Adaptations (Sports Medicine Open, 2025)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC10286597/",
          "Post-Exercise Infrared Sauna and Neuromuscular Performance (2023)"
        ),
      ],
      [
        link(
          "https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2025.1462901/full",
          "Repeated Post-Exercise Infrared Sauna on Neuromuscular Performance and Muscle Hypertrophy (2025)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC9394774/",
          "Regular Sauna Bathing combined with Exercise on Cardiovascular Function (RCT)"
        ),
      ],
    ]),
  ]),
}
