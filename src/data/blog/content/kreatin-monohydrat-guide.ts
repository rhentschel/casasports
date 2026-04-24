import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const kreatinMonohydratGuide = {
  slug: "kreatin-monohydrat-guide",
  title: "Kreatin-Monohydrat: Das am besten erforschte Supplement im Kraftsport",
  excerpt:
    "Kreatin ist das am besten untersuchte Nahrungsergänzungsmittel in der Sportwissenschaft. Hier findest du die evidenzbasierten Empfehlungen zu Dosierung, Timing, Loading-Phase und wissenschaftlich belegten Wirkungen.",
  categorySlug: "ernaehrung",
  authorSlug: "naim",
  coverImagePath: "/images/casasports-kraftbereich.webp",
  keyTakeaway:
    "Drei bis fünf Gramm Kreatin-Monohydrat täglich steigern Maximalkraft und Muskelaufbau messbar, besonders bei hochintensiven Kurzzeitbelastungen. Eine Loading-Phase mit 20 Gramm pro Tag für 5-7 Tage beschleunigt den Effekt, ist aber nicht nötig. Kreatin ist sicher und hat keine belegten Nebenwirkungen bei gesunden Erwachsenen.",
  faq: [
    {
      question: "Brauche ich eine Loading-Phase?",
      answer:
        "Nicht zwingend. Mit der Loading-Phase (4 x 5 g pro Tag für 5-7 Tage) füllst du die Muskelspeicher in einer Woche. Ohne Loading (3-5 g täglich) erreichst du dasselbe nach etwa 4 Wochen. Beide Wege führen zum gleichen Endergebnis.",
    },
    {
      question: "Wann am Tag sollte ich Kreatin nehmen?",
      answer:
        "Der Zeitpunkt ist zweitrangig. Wichtig ist die tägliche Einnahme. Mit Kohlenhydraten (z.B. Saftschorle) verbessert sich die Aufnahme leicht, deshalb nehmen viele es direkt nach dem Training oder zum Frühstück mit Haferflocken.",
    },
    {
      question: "Welche Kreatin-Form ist die beste?",
      answer:
        "Kreatin-Monohydrat. Alle anderen Formen (Ethyl-Ester, HCL, Creapure) sind schlechter erforscht und bieten keine messbaren Vorteile. Monohydrat ist gleichzeitig die günstigste Variante. Creapure ist eine besonders reine Monohydrat-Form aus Deutschland, ist eine gute Wahl.",
    },
    {
      question: "Muss ich Zyklen machen?",
      answer:
        "Nein. Kreatin-Zyklen sind ein überholtes Konzept. Die International Society of Sports Nutrition sagt: langfristige Einnahme bis zu 30 Gramm pro Tag über 5 Jahre ist ohne Probleme belegt. Ein 'Pausieren' hilft nicht, im Gegenteil, die Speicher leeren sich.",
    },
    {
      question: "Wie schnell wirkt Kreatin?",
      answer:
        "Kraftsteigerung ist oft nach 1-2 Wochen messbar, voll ausgeprägt nach 4-8 Wochen. Das gleichzeitige Plus auf der Waage (1-2 kg in den ersten Wochen) ist hauptsächlich Wasser in den Muskelzellen - normal und gewünscht.",
    },
    {
      question: "Ist Kreatin für Frauen anders dosiert?",
      answer:
        "Nein. 3-5 Gramm pro Tag gelten für beide Geschlechter. Frauen haben oft niedrigere Kreatinspeicher als Männer und können deshalb sogar stärker profitieren, besonders im Alter.",
    },
    {
      question: "Nebenwirkungen?",
      answer:
        "Die ISSN stellt klar: Weder Krämpfe, Dehydrierung noch Nieren- oder Leberbelastung sind bei gesunden Erwachsenen belegt. Leichte Magen-Darm-Beschwerden bei höheren Dosen sind möglich - dann Dosis splitten oder auf 3g reduzieren.",
    },
  ],
  content: root([
    paragraph(
      "Kreatin-Monohydrat ist das am besten untersuchte Supplement in der Sportwissenschaft. Hunderte kontrollierte Studien zeigen positive Effekte auf Kraft, Muskelaufbau, Regeneration und sogar kognitive Leistung. Dieser Guide fasst den aktuellen Forschungsstand zusammen und zeigt, wie du Kreatin effektiv nutzt."
    ),

    heading("h2", "Was Kreatin im Körper macht"),
    paragraph(
      "Kreatin ist ein körpereigener Stoff, der in Muskeln und Gehirn gespeichert wird. Er funktioniert als Schnell-Energiespeicher für das ATP-System, die schnelle Energiequelle für explosive Bewegungen. Wer seine Kreatin-Speicher maximal füllt, hat mehr Energie für die letzten Wiederholungen, kann schwerere Gewichte bewegen und regeneriert schneller zwischen Sätzen."
    ),
    paragraph(
      "Natürlich vorkommen tut Kreatin vor allem in rotem Fleisch (3-5 g/kg) und Fisch. Vegetarier und Veganer haben deutlich niedrigere Ausgangsspeicher und profitieren besonders stark von Supplementation."
    ),

    heading("h2", "Die Evidenz: Was kann Kreatin wirklich?"),
    paragraph(
      "Die International Society of Sports Nutrition hat in ihrem ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC7871530/",
        "Position Stand zu Kreatin"
      ),
      " folgende Wirkungen belegt:"
    ),
    ul([
      "Kraftsteigerung bei hochintensiven Kurzzeitbelastungen (5-20 Prozent)",
      "Mehr Muskelmasse bei Krafttraining (1-2 kg zusätzlich über 8-12 Wochen)",
      "Schnellere Regeneration zwischen Sätzen",
      "Reduziertes Muskelkater-Empfinden",
      "Verbesserte kognitive Leistung unter Stress und Schlafentzug",
      "Bessere Knochengesundheit im Alter",
      "Mögliche neuroprotektive Wirkung",
    ]),

    heading("h2", "Dosierung: Loading-Phase oder nicht?"),

    table([
      ["Strategie", "Dosis", "Dauer bis Full-Effekt", "Vorteile", "Nachteile"],
      ["Loading", "4 x 5 g für 5-7 Tage", "1 Woche", "Schnell", "Mehr Einnahmen, mögl. Magen-Darm"],
      ["Gradual", "3-5 g täglich", "3-4 Wochen", "Einfach, sanft", "Langsam sichtbar"],
      ["Maintenance", "3-5 g täglich", "N/A", "Erhält Speicher", "Dauer-Einnahme"],
    ]),
    paragraph(
      "Für die meisten Anwender ist die Gradual-Strategie einfacher. Wer einen schnellen Effekt braucht (z.B. vor einem Wettkampf), nutzt Loading."
    ),

    heading("h2", "Timing: Vor, während oder nach dem Training?"),
    paragraph(
      "Eine ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC8401986/",
        "Review in Nutrients 2021"
      ),
      " hat Timing-Effekte systematisch untersucht: Der Unterschied zwischen verschiedenen Einnahmezeiten ist marginal. Wichtig ist die tägliche Regelmäßigkeit. Die Kombination mit Kohlenhydraten und etwas Protein (z.B. Saftschorle oder eine kleine Mahlzeit) verbessert die Aufnahme minimal."
    ),
    paragraph(
      "Praktische Empfehlung: zur selben Tageszeit einnehmen, damit die Gewohnheit hält. Viele nehmen es zum Frühstück oder direkt nach dem Training."
    ),

    heading("h2", "Häufige Mythen"),

    heading("h3", "Mythos 1: 'Kreatin schadet den Nieren'"),
    paragraph(
      "Für gesunde Erwachsene ist das nicht belegt. Kreatin erhöht leicht den Kreatinin-Wert im Blut (ein Abbauprodukt), aber das ist kein Zeichen für Nierenschaden - nur ein Nebenprodukt des höheren Kreatin-Spiegels. Bei bestehenden Nierenerkrankungen vorher ärztlich abklären."
    ),

    heading("h3", "Mythos 2: 'Man muss Kreatin zyklen'"),
    paragraph(
      "Langfristige Einnahme bis zu 5 Jahre ist sicher und hält die Speicher voll. Pausen führen nur dazu, dass die Speicher wieder leerer werden."
    ),

    heading("h3", "Mythos 3: 'Kreatin zieht Wasser, macht aufgeschwemmt'"),
    paragraph(
      "Kreatin speichert Wasser IN den Muskelzellen, nicht unter der Haut. Das ist gewünscht - volle Muskelzellen sind die Grundlage für Wachstum. Die 1-2 kg Plus auf der Waage sind intrazellulär, nicht fettig."
    ),

    heading("h3", "Mythos 4: 'Ethyl-Ester oder HCL sind besser'"),
    paragraph(
      "Keine einzige Studie zeigt messbare Vorteile dieser Varianten gegenüber Monohydrat. Sie sind nur teurer."
    ),

    heading("h2", "Wer besonders profitiert"),
    ul([
      "Kraftsportler und Bodybuilder (stärkster Effekt)",
      "Vegetarier und Veganer (niedrigere Ausgangsspeicher)",
      "Sportler mit kurzen intensiven Belastungen (Sprint, Sprung, Gewichtheben)",
      "Ältere Erwachsene (Muskelerhalt, Knochenschutz, Kognition)",
      "Frauen ab 40 Jahren (zusätzlicher hormoneller Nutzen)",
      "Menschen in kognitiv fordernden Berufen (Konzentration unter Druck)",
    ]),

    heading("h2", "Wer eher nicht profitiert"),
    ul([
      "Reine Ausdauersportler (Marathon, Langdistanz): Vorteil minimal",
      "Menschen mit bestehenden Nierenerkrankungen (nur nach ärztlicher Freigabe)",
      "Wer die tägliche Einnahme nicht durchhält: dann lieber nicht starten",
    ]),

    heading("h2", "So integrierst du Kreatin in deine Routine"),
    ol([
      "Kaufe reines Kreatin-Monohydrat-Pulver (z.B. Creapure), günstige Marken sind völlig ausreichend",
      "Wähle: Loading (4 x 5 g für eine Woche) oder Gradual (3-5 g täglich ab sofort)",
      "Mische mit Wasser, Saft oder einem Proteinshake",
      "Nimm es zur selben Tageszeit, damit du es nicht vergisst",
      "Warte 4-8 Wochen, dann bewerte die Effekte über Trainings-Protokoll",
      "Trinke ausreichend Wasser über den Tag (mindestens 35 ml pro kg)",
    ]),

    heading("h2", "Wie Casa Sports dich unterstützt"),
    paragraph(
      "Unsere Ernährungsberatung integriert Supplements wie Kreatin in einen individuellen Plan. Für unsere Mitglieder im ",
      link("/mein-neues-ich", "Mein Neues Ich Programm", false),
      " sind Ernährungs- und Supplementation-Fragen Teil der Betreuung."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Kreatin-Monohydrat ist das wirksamste legale Supplement im Kraftsport. 3-5 Gramm täglich, regelmäßig eingenommen, bringen messbare Verbesserungen in Kraft, Muskelmasse und Regeneration. Die Evidenzlage ist so klar wie bei kaum einem anderen Supplement - und gleichzeitig ist Monohydrat eines der günstigsten."
    ),
    paragraph(
      "Mehr zu einer gesamten Nährstoff-Strategie findest du in unserem ",
      link("/blog/sporternaehrung-der-komplette-guide", "Sporternährungs-Guide", false),
      "."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC7871530/",
          "ISSN Position Stand on Creatine (Common Questions and Misconceptions)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC8401986/",
          "Timing of Creatine Supplementation around Exercise (PMC 2021)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC8001551/",
          "Short-Term Creatine Loading Improves Total Work and Power"
        ),
      ],
      [
        link(
          "https://www.uclahealth.org/news/article/why-everyones-talking-about-creatine",
          "UCLA Health: Why everyone's talking about creatine"
        ),
      ],
    ]),
  ]),
}
