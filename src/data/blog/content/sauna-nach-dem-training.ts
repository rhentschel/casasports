import { root, paragraph, heading, ul, ol, bold, link, text, table, image } from "../lexical-builder"

export const saunaNachDemTraining = {
  slug: "sauna-nach-dem-training",
  title: "Sauna nach dem Training: Vorteile, Risiken und optimales Timing",
  excerpt:
    "Was sagt die Forschung zu Sauna nach dem Sport? Die aktuellen Studien zu Regeneration, Muskelkater, Herz-Kreislauf-System, Heat Shock Proteinen und das optimale Timing für verschiedene Trainingsziele.",
  keyTakeaway:
    "Sauna nach dem Training kann Muskelkater reduzieren, Regeneration beschleunigen und das Herz-Kreislauf-System stärken. Entscheidend sind Timing (15-30 Minuten Pause nach dem Workout), Dauer (8-12 Minuten pro Gang) und ausreichend Flüssigkeit. Infrarot-Sauna belastet den Kreislauf weniger als die klassische finnische Variante und dämpft Hypertrophie-Adaptationen weniger.",
  faq: [
    {
      question: "Wie lange sollte ich nach dem Training in die Sauna?",
      answer:
        "In der wissenschaftlichen Literatur werden Sessions zwischen 8 und 30 Minuten als wirksam beschrieben. Ein praktikabler Rahmen: zwei Saunagänge à 8-12 Minuten mit 10-15 Minuten Pause dazwischen. Wichtiger als die exakte Länge ist, dass du den Saunagang abbrichst, sobald dir unwohl wird. Infrarot-Sauna verträgt längere Sessions (15-30 Minuten) wegen niedrigerer Lufttemperatur besser als klassische finnische Sauna.",
    },
    {
      question: "Direkt nach dem Training oder mit Pause?",
      answer:
        "Plane mindestens 15-30 Minuten Pause ein. Dein Kreislauf ist direkt nach dem Training noch aktiviert, Herzfrequenz und Blutdruck brauchen Zeit zum Runterfahren. Dusche kurz ab, trink etwas Wasser und iss einen kleinen Snack, bevor du in die Sauna gehst. Nach sehr intensiven Einheiten (HIIT, Wettkampf) lieber 60+ Minuten warten oder auf den Folgetag verschieben.",
    },
    {
      question: "Wie oft pro Woche ist sinnvoll?",
      answer:
        "Studien zu regelmäßigem Saunabaden in Kombination mit Sport arbeiten meist mit 2-4 Einheiten pro Woche über mehrere Wochen. In dieser Frequenz zeigen sich messbare Effekte auf Kreislauf, Cholesterin und subjektive Regeneration. Wer täglich sauniert, sollte besonders auf Schlaf, Flüssigkeitshaushalt und Trainingsbelastung achten. Mehr ist nicht unbedingt besser.",
    },
    {
      question: "Beeinflusst Sauna nach dem Training den Muskelaufbau?",
      answer:
        "Eine randomisierte Studie aus 2025 fand keinen signifikanten Effekt regelmäßiger Post-Workout-Infrarot-Sauna auf Muskelwachstum, aber Hinweise auf verbesserte Kraftentwicklung langfristig. Klassische sehr heiße Sauna (über 90 Grad) direkt nach Krafttraining kann die Muskelproteinsynthese dämpfen. Wer hart auf Hypertrophie trainiert, nutzt entweder Infrarot oder trennt Sauna zeitlich (z.B. am Ruhetag).",
    },
    {
      question: "Was trinke ich am besten vor und nach der Sauna?",
      answer:
        "Wasser, ungesüßter Tee oder Mineralwasser mit Natrium sind die erste Wahl. Saftschorlen helfen nach intensiven Einheiten, Kohlenhydrate und Flüssigkeit gleichzeitig aufzunehmen. Alkohol ist in Kombination mit Sauna und Training tabu, da er die Dehydrierung verstärkt und den Kreislauf zusätzlich belastet. Faustregel: 0,5-1 Liter vor dem ersten Saunagang, 0,5 Liter nach jedem Gang.",
    },
    {
      question: "Wann sollte ich auf die Sauna verzichten?",
      answer:
        "Bei akuten Infekten mit Fieber, unbehandeltem Bluthochdruck, schweren Herz-Kreislauf-Erkrankungen, frischen Verletzungen oder starker Erschöpfung ist die Sauna tabu. In der Schwangerschaft und bei chronischen Vorerkrankungen immer vorher mit dem behandelnden Arzt abklären. Auch unmittelbar vor einem Wettkampf ist Sauna keine gute Idee, weil Dehydrierung und Kreislaufbelastung die Leistung reduzieren können.",
    },
    {
      question: "Traditionelle Sauna oder Infrarot, was ist besser nach dem Sport?",
      answer:
        "Ein systematischer Review aus 2025 weist darauf hin, dass sehr heiße klassische Saunagänge direkt nach harter Belastung die Leistung am Folgetag vorübergehend reduzieren können, Infrarot-Sitzungen bei moderateren Temperaturen zeigen diesen Effekt nicht. Wenn du hart trainierst und am Folgetag wieder belasten willst, ist Infrarot die schonendere Wahl. Für Entspannung, Herz-Kreislauf-Training und wenn am Folgetag ein Ruhetag ansteht, ist die klassische Sauna kein Problem.",
    },
    {
      question: "Was sind Heat Shock Proteine und warum sind sie wichtig?",
      answer:
        "Heat Shock Proteine (HSP) sind körpereigene Reparaturhelfer, die beschädigte Proteinstrukturen stabilisieren und den Wiederaufbau unterstützen. Sie werden durch Hitze signifikant hochreguliert. HSP spielen eine Rolle bei Muskelregeneration, Insulinsensitivität und möglicherweise bei Zellalterung. Die Hitzeexposition in der Sauna aktiviert diese Proteine auf ähnliche Weise wie moderate Belastung.",
    },
    {
      question: "Verbrenne ich Kalorien in der Sauna?",
      answer:
        "Ja, etwa 1,5-2 mal so viel wie in Ruhe. Ein 20-minütiger Saunagang verbrennt bei einer 75 kg Person ungefähr 100-200 Kalorien, abhängig von Intensität und Schwitzen. Das ist aber kein Abnehm-Programm, sondern ein Nebeneffekt. Der Hauptnutzen liegt in Regeneration, nicht in der Kalorienverbrennung.",
    },
    {
      question: "Wie lange dauert es, bis sich die Effekte einstellen?",
      answer:
        "Subjektive Regenerationsverbesserung ist oft nach der ersten Session spürbar. Messbare Effekte auf Kreislauf und Ausdauer brauchen 4-8 Wochen regelmäßiger Anwendung. Langzeit-Adaptationen wie Plasma-Volumen-Expansion und verbesserte Hitze-Toleranz entwickeln sich über 3-6 Monate.",
    },
  ],
  content: root([
    paragraph(
      "Sauna nach dem Training gehört für viele Sportler zum festen Ritual. Von der klassischen finnischen Sauna über Infrarot-Kabinen bis zum Ayurveda-Dampfbad gibt es zahlreiche Varianten. Doch was bringt die Hitze wirklich, wann ist sie sinnvoll und wann kontraproduktiv? Dieser Guide fasst die aktuelle Studienlage zusammen, erklärt die physiologischen Mechanismen im Detail und zeigt dir, wie du Sauna gezielt für Regeneration und Gesundheit einsetzt."
    ),

    heading("h2", "Was in deinem Körper passiert, wenn du sauniert"),
    paragraph(
      "Bei 60 bis 100 Grad Celsius läuft dein Körper auf Hochtouren, um seine Kerntemperatur von 37 Grad aufrechtzuerhalten. Dafür laufen mehrere physiologische Kaskaden gleichzeitig ab, die du als Sportler gezielt nutzen kannst."
    ),

    heading("h3", "Thermoregulation und Kreislauf"),
    paragraph(
      "Die Kernkörpertemperatur steigt um etwa ein bis zwei Grad. Deine Hautgefäße weiten sich drastisch (Vasodilatation), um Wärme über die Haut abzugeben. Der Kreislauf verteilt sich um: mehr Blut fließt an die Hautoberfläche, weniger zu den Organen. Die Herzfrequenz kann auf 100-150 Schläge pro Minute klettern, ein Niveau das einem moderaten Ausdauertraining entspricht."
    ),
    paragraph(
      "Dieser Herzfrequenzanstieg ist ein echter Trainingsreiz für das Kreislaufsystem. Langfristig adaptieren sich Herzvolumen, Schlagvolumen und Gefäßelastizität ähnlich wie bei Ausdauertraining - ein Effekt, der in großen finnischen Kohortenstudien als kardioprotektiv dokumentiert ist."
    ),

    heading("h3", "Heat Shock Proteine"),
    paragraph(
      "Heat Shock Proteine (HSP), insbesondere HSP70 und HSP90, werden durch Hitzestress um 50-300 Prozent hochreguliert. Sie haben mehrere Funktionen im Körper:"
    ),
    ul([
      "Stabilisierung beschädigter Muskelproteine nach Training",
      "Unterstützung der Muskelproteinsynthese",
      "Reduktion zellulären Stresses und oxidativer Schäden",
      "Mögliche Rolle bei Insulinsensitivität und Stoffwechsel",
      "Neuroprotektive Effekte bei regelmäßiger Aktivierung",
    ]),
    paragraph(
      "HSP sind ein zentraler Grund, warum Hitzebelastung nicht nur subjektiv, sondern biologisch messbar regenerativ wirkt."
    ),

    heading("h3", "Plasma-Volumen-Expansion"),
    paragraph(
      "Regelmäßige Hitzeexposition (2-3 Wochen, 3-5 Sessions/Woche) steigert das Plasmavolumen - den flüssigen Anteil deines Blutes - um 4-7 Prozent. Mehr Plasma bedeutet besseren Kreislauf, effizientere Wärmeabfuhr bei Belastung und verbesserte Ausdauer-Leistung. Dieser Effekt wird im Hochleistungssport unter dem Begriff 'Heat Acclimation' gezielt für Vorbereitungen auf heiße Wettkampfbedingungen genutzt."
    ),

    heading("h3", "Hormonelle Reaktionen"),
    paragraph(
      "Die Sauna löst eine komplexe hormonelle Antwort aus:"
    ),
    ul([
      [bold("Wachstumshormon"), text(": Anstieg um 140-250 Prozent, besonders bei mehreren Saunagängen hintereinander")],
      [bold("Noradrenalin"), text(": Anstieg um 200-400 Prozent, verbessert Fokus und Stressresistenz")],
      [bold("Endorphine"), text(": Ausschüttung führt zur subjektiven Entspannung nach dem Gang")],
      [bold("Cortisol"), text(": paradoxerweise sinkt über Zeit trotz Akutbelastung, adaptiert durch Stress-Training")],
    ]),

    heading("h2", "Was die aktuelle Forschung zeigt"),

    heading("h3", "Systematische Reviews 2025"),
    paragraph(
      "Ein systematischer Review aus dem Jahr 2025 im Journal Sports Medicine Open hat zusammengefasst, was nach dem Training passiert, wenn Hitze gezielt als Regenerationsreiz eingesetzt wird. Das Hauptergebnis: ",
      link(
        "https://link.springer.com/article/10.1186/s40798-025-00910-0",
        "Post-Exercise Heat"
      ),
      " reduziert subjektiven Muskelkater zuverlässig und kann die Wiederherstellung neuromuskulärer Leistung unterstützen. Die Effekte auf Langzeit-Adaptationen sind je nach Studiendesign unterschiedlich, weil die meisten Studien unterschiedliche Protokolle, Temperaturen und Trainingsarten einsetzen."
    ),

    heading("h3", "Infrarot-Sauna spezifisch"),
    paragraph(
      "Besonders gut untersucht ist die Infrarot-Sauna bei niedrigeren Temperaturen (55-70 Grad). Eine ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC10286597/",
        "Studie mit Basketballspielern (2023)"
      ),
      " zeigte, dass 20-minütige Infrarot-Sessions nach Krafttraining die Sprungkraft 14 Stunden später besser wiederherstellten als passive Erholung. Ein Follow-up-Projekt von ",
      link(
        "https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2025.1462901/full",
        "Frontiers in Sports and Active Living (2025)"
      ),
      " beobachtete über acht Wochen bei dreimaliger wöchentlicher Anwendung signifikante Verbesserungen in Kraftparametern und Herz-Kreislauf-Markern. Interessant: in dieser Studie wurden keine negativen Effekte auf Muskelaufbau festgestellt."
    ),

    heading("h3", "Klassische finnische Sauna"),
    paragraph(
      "Für die klassische finnische Sauna gibt es Hinweise, dass sehr heiße, lange Sitzungen direkt nach intensivem Training die maximale Leistung am Folgetag kurzfristig reduzieren können. Die ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC9394774/",
        "RCT zu Sauna plus Exercise in PMC (2022)"
      ),
      " zeigte, dass regelmäßige finnische Saunagänge (15 Minuten, 3x pro Woche, 8 Wochen) in Kombination mit Bewegung systolischen Blutdruck und Gesamt-Cholesterin signifikant senken."
    ),

    heading("h3", "Langzeit-Kohortenstudien aus Finnland"),
    paragraph(
      "Finnische Forschungsgruppen haben über Jahrzehnte die Bevölkerung zu Sauna-Gewohnheiten und Gesundheitsergebnissen befragt. Die Daten zeigen: 4-7 Saunagänge pro Woche sind mit 40 Prozent reduziertem kardiovaskulärem Sterblichkeitsrisiko assoziiert, verglichen mit 1 Sauna pro Woche. Diese Korrelation beweist keine Kausalität, aber die biologische Plausibilität (bekannte Effekte auf Blutdruck, Gefäße, Stress) ist hoch."
    ),

    image(
      "/images/blog/sauna-timing-chart.svg",
      "Timing-Empfehlungen für Sauna nach verschiedenen Trainingsarten",
      "Wann Sauna nach dem Training sinnvoll ist - abhängig von Trainingsziel und Intensität."
    ),

    heading("h2", "Die 7 wichtigsten Vorteile nach dem Training"),

    heading("h3", "1. Beschleunigte Regeneration und weniger Muskelkater"),
    paragraph(
      "Die erhöhte Hautdurchblutung zieht auch die tieferen Gefäße nach. Nährstoffe kommen schneller in strapazierte Muskeln, Stoffwechselprodukte werden effizienter abtransportiert. In mehreren kontrollierten Studien war der wahrgenommene Muskelkater am Folgetag um 20-30 Prozent niedriger, wenn nach dem Training sauniert wurde. Der Effekt ist bei Infrarot-Sauna etwas stärker als bei finnischer, vermutlich wegen der durchdringenderen Erwärmung der Muskulatur."
    ),

    heading("h3", "2. Stärkeres Herz-Kreislauf-System"),
    paragraph(
      "Regelmäßiges Saunieren funktioniert ähnlich wie ein leichtes Cardio-Training. Studien aus Finnland zeigen zusammen mit Bewegung verbesserte Werte für Blutdruck, Gesamtcholesterin und Herzfrequenzvariabilität. Das Training des Gefäßsystems durch Hitze wird teilweise als eigenständige Intervention diskutiert und ist besonders wertvoll für Menschen, die aufgrund von Verletzungen nicht intensiv trainieren können."
    ),

    heading("h3", "3. Besserer Schlaf"),
    paragraph(
      "Die passive Erwärmung und das darauffolgende Abkühlen am Abend unterstützen das natürliche Absinken der Körperkerntemperatur, ein wichtiges Signal zum Einschlafen. Viele Sportler berichten nach einem Abend-Saunagang von tieferem und erholsamerem Schlaf. Der Effekt lässt sich mit Wearables oft an der Tiefschlafdauer messen - ideales Experiment für Wochen-Vergleich."
    ),

    heading("h3", "4. Mentale Entspannung und Stressabbau"),
    paragraph(
      "Die Ausschüttung von Endorphinen und die deutliche Reduktion des Stresshormons Cortisol nach der Sauna sind mehrfach dokumentiert. Was subjektiv als tiefe Ruhe empfunden wird, ist messbar ein Wechsel vom sympathischen in den parasympathischen Zustand, der Körper geht vom Flucht-Modus in den Erholungs-Modus."
    ),

    heading("h3", "5. Heat Shock Proteine und Zellreparatur"),
    paragraph(
      "Heat Shock Proteine sind ein spannendes Feld der Forschung. Sie helfen, beschädigte Eiweißstrukturen in Muskelzellen wieder zu stabilisieren und werden durch Hitze signifikant hochreguliert. Ob das langfristig zu mehr Muskelmasse oder besserer Zellgesundheit führt, ist noch offen, der Mechanismus ist aber plausibel und gut belegt. HSP werden auch durch intensive Belastung aktiviert - die Sauna ist eine zusätzliche Möglichkeit, diesen Reiz zu setzen ohne neue Gewebeschäden zu provozieren."
    ),

    heading("h3", "6. Bessere Hitze-Toleranz und Plasma-Volumen"),
    paragraph(
      "Nach 2-3 Wochen regelmäßigem Saunieren steigt dein Plasmavolumen um 4-7 Prozent. Das bedeutet mehr Blutflüssigkeit, effizientere Kühlung und bessere Ausdauer-Leistung. Hochleistungssportler nutzen diesen 'Heat Acclimation Effect' gezielt für Wettkämpfe in heißen Ländern oder als Höhentraining-Ersatz."
    ),

    heading("h3", "7. Stärkung des Immunsystems"),
    paragraph(
      "Mehrere Studien zeigen geringere Erkältungs- und Infektraten bei regelmäßigen Saunagängern. Der Mechanismus ist nicht vollständig geklärt - vermutet werden Effekte auf weiße Blutkörperchen, Hitzeshockproteine und generelle Stress-Resilienz. Die Evidenz ist stärker für die Prävention leichter Atemwegsinfekte als für schwere Erkrankungen."
    ),

    heading("h2", "Optimales Timing: Sofort, mit Pause oder am Folgetag?"),
    paragraph(
      "Direkt nach dem letzten Satz in die Kabine zu springen ist keine gute Idee. Dein Kreislauf ist noch aktiviert, Herzfrequenz und Blutdruck sind erhöht, die Kernkörpertemperatur hoch. Die Hitze der Sauna packt dann oben drauf und kann das Ganze kippen lassen."
    ),

    heading("h3", "Der ideale Ablauf bei Casa Sports"),
    ol([
      "Cool-Down: 5-10 Min leichte Bewegung, langsames Auslaufen",
      "Kurze Dusche: Schweiß abwaschen, leicht kühl",
      "10-15 Min Ruhe: Kreislauf stabilisiert sich, Puls fällt",
      "Wasser oder Saftschorle (300-500 ml)",
      "Optional: kleiner Snack mit Kohlenhydraten + etwas Protein",
      "Erst dann in die Sauna (frühestens 20 Min nach Trainingsende)",
    ]),

    heading("h3", "Wann auf den Folgetag verschieben?"),
    paragraph(
      "Wenn am Folgetag ein intensives Training ansteht, kannst du die Sauna auch auf den Folgetag verschieben. Dann wirkt sie als eigenständige Regenerationseinheit und stört die akute Leistung nicht. Auch bei sehr hohen Trainingsvolumen kann eine Sauna-Session am 'Off-Tag' wertvoller sein als direkt nach der letzten harten Einheit."
    ),

    heading("h2", "Temperaturzonen verstehen"),

    table([
      ["Temperatur", "Typ", "Dauer pro Gang", "Feuchte", "Effekt"],
      ["85-100°C", "Finnisch klassisch", "8-12 Min", "niedrig", "Maximale Herzreiz, intensives Schwitzen"],
      ["70-85°C", "Finnisch mild", "10-15 Min", "moderat", "Klassischer Genuss, moderater Reiz"],
      ["60-80°C", "Bio/Sanarium", "15-20 Min", "hoch (40-55%)", "Sanfter, mehr Atemwege"],
      ["55-70°C", "Infrarot (IRS)", "15-30 Min", "niedrig", "Direkte Gewebewärmung, kreislaufschonend"],
      ["45-55°C", "Dampfbad", "10-20 Min", "sehr hoch (100%)", "Atemwegskur, intensive Haut"],
    ]),

    heading("h2", "Praktikables Protokoll für Sportler"),
    ol([
      "Trainings-Cool-down: 5-10 Minuten leichte Bewegung und Stretching",
      "Wasser trinken: 300-500 ml vor dem ersten Saunagang",
      "Erster Gang: 8-12 Minuten bei 75-90 Grad (klassisch) oder 55-65 Grad (Infrarot)",
      "Abkühlphase: 10-15 Minuten in kühler Umgebung, moderate Dusche (nicht eiskalt direkt auf den Rumpf)",
      "Trinken: 200-300 ml Wasser zwischen Gängen",
      "Zweiter Gang: 8-12 Minuten, gleiche Bedingungen",
      "Optional dritter Gang, nur wenn dein Kreislauf stabil ist und du dich gut fühlst",
      "Nach dem letzten Gang: mindestens 30 Minuten ruhen, trinken, mineralhaltige Nahrung",
    ]),
    paragraph(
      "Zwei bis drei Mal pro Woche sind für die meisten Sportler ein guter Rahmen, um Effekte zu spüren ohne den Körper zu überlasten. Wer täglich sauniert, sollte besonders auf Schlaf, Hydration und Gesamtbelastung achten."
    ),

    heading("h2", "Klassische finnische Sauna oder Infrarot?"),

    table([
      ["Kriterium", "Finnisch", "Infrarot", "Empfehlung"],
      ["Temperatur", "80-100 °C", "55-70 °C", "Infrarot schonender"],
      ["Dauer pro Gang", "8-12 Min", "15-30 Min", "Infrarot länger möglich"],
      ["Kreislauf-Belastung", "Hoch", "Moderat", "Infrarot bei hartem Training"],
      ["Schweißproduktion", "Extrem", "Moderat", "Finnisch mehr 'Reinigung'"],
      ["Muskelkater-Effekt", "Stark", "Stark", "Gleichwertig"],
      ["Muskelaufbau-Phase", "Vermeidbar", "Empfohlen", "Infrarot bei Hypertrophie"],
      ["Vor Wettkampf", "Nein", "Eher nein", "Beide vermeiden"],
      ["Entspannung", "Intensiv", "Moderat", "Finnisch klassisch"],
      ["Plasma-Expansion", "Stärker", "Moderater", "Finnisch bei Heat Acclimation"],
      ["Hautgefühl", "Gereinigt", "Tief durchwärmt", "Persönliche Präferenz"],
      ["Für Einsteiger", "Überfordernd", "Sehr geeignet", "Infrarot starten"],
    ]),
    paragraph(
      "Beide Varianten wirken, aber nicht identisch. Die finnische Sauna arbeitet mit hohen Lufttemperaturen (80-100 Grad) und wahlweise niedriger oder höherer Luftfeuchte. Der Kreislauf wird stark gefordert, der Schweißausstoß ist intensiv. Für reine Entspannung und Herz-Kreislauf-Training klassisch stark."
    ),
    paragraph(
      "Infrarot arbeitet mit direkter Strahlungswärme (55-70 Grad) und erwärmt den Körper von innen her, ohne die Raumluft stark zu erhitzen. Die Belastung ist moderater, die Session länger möglich, und die Regenerationseffekte nach Training sind in mehreren Studien besonders deutlich. Wer am Folgetag wieder hart trainieren will, fährt mit Infrarot besser."
    ),
    paragraph(
      "Bei Casa Sports findest du beide Varianten: die ",
      bold("KLAFS Premium Sauna"),
      " für das klassische finnische Erlebnis und die ",
      bold("Roeger Infrarotkabine"),
      " für gezielte Regeneration nach dem Training. Unser Wellness-Bereich ist Teil der All-in-Mitgliedschaft ohne Aufpreis."
    ),

    heading("h2", "Hydration: Oft unterschätzt"),
    paragraph(
      "In einem intensiven Saunagang kannst du 300-800 ml Schweiß verlieren. Zusammen mit Mineralstoffen (vor allem Natrium, Kalium, Magnesium) belastet das deinen Elektrolythaushalt. Die richtige Strategie:"
    ),
    ul([
      "Vor dem Saunagang: 300-500 ml Wasser in den 30 Minuten davor",
      "Während: kein Durst aushalten, aber auch nicht überfüllen (beeinträchtigt Schwitzen)",
      "Zwischen Gängen: 200-300 ml Wasser oder Schorle",
      "Nach der Sauna: 500-1000 ml über 60 Minuten verteilt",
      "Bei mehreren Gängen: zusätzlich eine salzige Brühe oder Mineralstoff-reiches Getränk",
    ]),
    paragraph(
      "Vorsicht bei Alkohol (verstärkt Dehydrierung) und koffeinhaltigen Getränken (harntreibend) im Rahmen der Sauna-Session."
    ),

    heading("h2", "Ernährung rund um die Sauna"),
    paragraph(
      "Nicht mit vollem Magen in die Sauna. Die Verdauung braucht Blut, das dem Kreislauf fehlt und Übelkeit verursachen kann. Aber auch nicht nüchtern - Kreislauf kann kippen."
    ),
    ul([
      "2-3 Stunden vor Sauna: keine große Mahlzeit",
      "30-60 Min vor Sauna: kleiner Snack (Banane, Müsliriegel, Handvoll Nüsse)",
      "Direkt vor Sauna: nur Flüssigkeit",
      "Nach Sauna (nach 20 Min Ruhe): ausgewogene Mahlzeit mit Protein + Kohlenhydraten",
      "Spezialfall Post-Training-Sauna: Protein-Shake nach Sauna ist oft praktisch",
    ]),

    heading("h2", "Die wichtigsten Fehler vermeiden"),
    ul([
      "Zu lange am Anfang (Einsteiger: max. 5-8 Min, erst steigern)",
      "Direkt aus dem intensiven Training in die Sauna ohne Cool-Down",
      "Alkohol im Sauna-Umfeld",
      "Dehydriert starten (vor Sauna trinken)",
      "Kalte Dusche direkt auf den Rumpf (besser Beine/Arme zuerst)",
      "Mehrere Gänge trotz Unwohlsein",
      "Letzte Mahlzeit vergessen (Unterzucker möglich)",
      "Nach der Sauna sofort ins Bett (Körperkern braucht Abkühlung)",
      "Jeden Tag bei hoher Trainingsbelastung",
      "Smartphone mitnehmen (Überhitzungsrisiko für Gerät, Stress für dich)",
    ]),

    heading("h2", "Wann du auf die Sauna nach dem Training verzichten solltest"),
    ul([
      "Akute Infekte, Fieber oder Halsentzündung",
      "Unbehandelter Bluthochdruck (systolisch über 160) oder bekannte Herzrhythmusstörungen",
      "Starke Erschöpfung nach sehr hartem Training (Overreaching-Anzeichen)",
      "Frische offene Wunden oder akute Hautentzündungen",
      "Unmittelbar vor einem Wettkampf oder einer Leistungsdiagnostik",
      "Schwangerschaft ohne ärztliche Freigabe",
      "Kinder unter 14 Jahren nur unter Aufsicht und mit kurzen Einheiten",
      "Starker Alkoholkonsum am selben Tag",
      "Pille-Einnahme in Kombination mit Rauchen erhöht Thromboserisiko",
      "Bestimmte Medikamente (Betablocker, Diuretika - Arzt fragen)",
    ]),
    paragraph(
      "Generell gilt: Wenn du dich nach dem Training bleiern müde oder wacklig fühlst, ist das dein Körper, der Pause sagt. Höre auf ihn. Sauna ist ein Bonus, kein Muss."
    ),

    heading("h2", "Praxistipps aus dem Studio"),
    ul([
      "Starte neu immer vorsichtig: erst kürzere Gänge und niedrigere Temperaturen",
      "Schmuck runter, Haare trocken tupfen, Handtuch als Sitzunterlage",
      "Trinken: über den gesamten Tag verteilt mindestens 2-3 Liter, an Sauna-Tagen gern 500 ml mehr",
      "Nach der Sauna keine eiskalten Duschen direkt auf den Rumpf, lieber Beine und Arme zuerst",
      "Wenn dir schwindelig wird: sofort raus, Beine hoch lagern, trinken",
      "Bei mehreren Gängen: unterer Bereich zuerst, dann obere Ebene (bei Saunen mit Stufen)",
      "Atmung bewusst halten: tief ein durch Nase, langsam aus durch Mund",
      "Augen geschlossen halten: entlastet den Kreislauf, fördert Entspannung",
    ]),

    heading("h2", "Sauna für spezielle Zielgruppen"),

    heading("h3", "Ausdauersportler"),
    paragraph(
      "Heat Acclimation durch regelmäßige Sauna (3-4 Sessions/Woche à 20 Minuten über 2-3 Wochen) verbessert Plasma-Volumen und Ausdauerleistung messbar. Für Marathon- oder Triathlon-Vorbereitung in heißen Wettkampfbedingungen etabliertes Protokoll."
    ),

    heading("h3", "Kraftsportler in Hypertrophie-Phase"),
    paragraph(
      "Infrarot bevorzugen, klassische Sauna entweder auf Off-Tage legen oder sehr moderat (kurz, nicht zu heiß). Kein Saunagang direkt nach schweren Kraftsessions."
    ),

    heading("h3", "Ältere Erwachsene"),
    paragraph(
      "Sauna ist eine der wirksamsten 'sanften' Interventionen im Alter - trainiert das Gefäßsystem, ohne die Gelenke zu belasten. Start mit 8-10 Min bei 70-80 Grad, 2x pro Woche. Bei kardiovaskulären Vorerkrankungen ärztliche Freigabe."
    ),

    heading("h3", "Menschen mit chronischen Erkrankungen"),
    paragraph(
      "Bei Rheuma, Fibromyalgie, bestimmten Autoimmunerkrankungen zeigt Infrarot-Sauna positive Effekte in kleineren Studien. Immer mit behandelndem Arzt absprechen."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Sauna nach dem Training ist in der Regel kein Muss, aber ein sinnvolles Werkzeug für Regeneration, Herz-Kreislauf-Gesundheit und mentale Erholung. Die wissenschaftliche Evidenz unterstützt den positiven Effekt auf Muskelkater und Ausdauer-Adaptationen, während beim Krafttraining die Datenlage für klassische Sauna gemischter ist. Wichtig sind Timing, moderate Dauer und das Hören auf den eigenen Körper."
    ),
    paragraph(
      "Die drei Kernregeln zum Mitnehmen: ",
      bold("Erstens"),
      " mindestens 15-30 Minuten warten nach intensivem Training. ",
      bold("Zweitens"),
      " Infrarot bei Muskelaufbau-Fokus bevorzugen. ",
      bold("Drittens"),
      " genug trinken, vor, während und nach der Sauna."
    ),
    paragraph(
      "In unserer ",
      bold("All-in-Mitgliedschaft"),
      " sind alle Wellness-Bereiche inklusive, du kannst unsere KLAFS Sauna und die Roeger Infrarotkabine ohne Aufpreis nutzen. Komm vorbei und probier es aus."
    ),
    paragraph(
      "Mehr zum Thema Regeneration in unserem ",
      link("/blog/wellness-und-regeneration-guide", "kompletten Wellness-Guide", false),
      ". Für Kältereize als Alternative oder Ergänzung lies den ",
      link("/blog/eisbaden-kaelte-therapie", "Eisbad-Guide", false),
      "."
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
