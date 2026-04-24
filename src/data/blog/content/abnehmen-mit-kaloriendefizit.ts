import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const abnehmenMitKaloriendefizit = {
  slug: "abnehmen-mit-kaloriendefizit",
  title: "Abnehmen mit Kaloriendefizit: Der nachhaltige Weg zum Wunschgewicht",
  excerpt:
    "Kaloriendefizit ist die einzige wissenschaftlich belegte Methode zum Abnehmen. Hier der praktikable Ansatz mit Fokus auf Muskelerhalt, Nachhaltigkeit und messbaren Ergebnissen.",
  categorySlug: "ernaehrung",
  authorSlug: "naim",
  coverImagePath: "/images/casasports-ernaehrung.webp",
  keyTakeaway:
    "Wer nachhaltig abnehmen will, braucht ein Kaloriendefizit von 300-500 kcal pro Tag, ausreichend Protein (mindestens 1,6 g/kg) und Krafttraining zum Muskelerhalt. Realistisch sind 0,5-1 Prozent Körpergewicht pro Woche. Aggressive Diäten führen zu Muskelverlust, Jojo-Effekt und Stoffwechsel-Anpassung.",
  faq: [
    {
      question: "Wie viel darf ich pro Woche abnehmen?",
      answer:
        "0,5 bis 1 Prozent des Körpergewichts pro Woche ist der Goldstandard. Bei 80 kg also 400-800 Gramm pro Woche. Mehr führt zu signifikantem Muskelverlust und erhöht den Jojo-Risiko. Langsamer Fortschritt bedeutet nachhaltigeren Erfolg.",
    },
    {
      question: "Wie berechne ich mein Kaloriendefizit?",
      answer:
        "Grundumsatz + Aktivitätslevel = Erhaltungskalorien. Davon 300-500 kcal abziehen. Online-Rechner geben Orientierung, aber das wahre Erhaltungslevel ermittelst du über 2-3 Wochen: Tracke deine Zufuhr und dein Gewicht. Bleibt es stabil, hast du dein Erhaltungslevel gefunden.",
    },
    {
      question: "Soll ich Kohlenhydrate meiden?",
      answer:
        "Nein. Entscheidend sind die Gesamtkalorien, nicht die Quelle. Low-Carb, Keto und intermittierendes Fasten funktionieren, weil sie oft zu Kaloriendefizit führen. Wer sich damit wohlfühlt, kann das nutzen. Wer gern Kohlenhydrate isst, kann normal essen und einfach im Defizit bleiben.",
    },
    {
      question: "Wie bleibe ich trotz Hunger im Defizit?",
      answer:
        "Strategien, die funktionieren: viel Protein (sättigt stark), viel Gemüse (Volumen ohne Kalorien), 2-3 Liter Wasser täglich, genug Schlaf (6 Stunden Schlaf = deutlich mehr Hunger), moderate Alkoholreduktion, Bewegung als Stress-Hebel statt Essen.",
    },
    {
      question: "Plateau nach ein paar Wochen. Was tun?",
      answer:
        "Normal. Dein Stoffwechsel passt sich an. Optionen: 300 kcal weiter reduzieren, 1-2 Wochen pausieren (Diet-Break) und bei Erhaltung essen, oder Aktivitätslevel erhöhen. Wichtig: Plateaus sind kein Zeichen für Versagen, sondern ein biologischer Prozess.",
    },
    {
      question: "Muss ich jede Kalorie tracken?",
      answer:
        "Nicht dauerhaft. Am Anfang hilft 2-4 Wochen Tracking, um ein Gefühl für Portionen zu bekommen. Danach reichen einfache Regeln: Handteller Protein pro Mahlzeit, Faust Kohlenhydrate, Daumen Fett, unbegrenzt Gemüse.",
    },
    {
      question: "Was ist mit Cheat Days?",
      answer:
        "Ein hochkalorischer Tag pro Woche ist okay, solange die Woche im Defizit bleibt. Psychologisch hilfreich für Durchhalten. Aber: 1 Cheat Day mit 1500 kcal über dem Bedarf frisst 3-4 Tage Defizit auf. Maßhalten.",
    },
  ],
  content: root([
    paragraph(
      "Über keine Ernährungsform gibt es so viele Mythen wie über das Abnehmen. Low-Carb, Keto, Paleo, intermittierendes Fasten - alle funktionieren über denselben Mechanismus: Kaloriendefizit. Dieser Guide erklärt wissenschaftlich fundiert, wie du nachhaltig abnimmst ohne Jojo-Effekt."
    ),

    heading("h2", "Die Physik des Abnehmens: Energiebilanz"),
    paragraph(
      "Der menschliche Körper folgt dem ersten Hauptsatz der Thermodynamik: Energie kann nicht aus dem Nichts verschwinden. Wer mehr Energie zuführt als er verbraucht, speichert den Überschuss als Fett. Wer weniger zuführt, greift auf Reserven zurück. Alles andere sind Variationen über dieses Thema."
    ),
    paragraph(
      "Dein Energieverbrauch setzt sich zusammen aus:"
    ),
    ul([
      [bold("Grundumsatz (60-70%)"), text(": was dein Körper in Ruhe braucht - Gehirn, Organe, Körpertemperatur")],
      [bold("Aktivitätsumsatz (15-30%)"), text(": bewusste Bewegung, Sport")],
      [bold("NEAT (10-20%)"), text(": unbewusste Alltagsaktivität - Fidgeting, Spaziergänge, Haltung")],
      [bold("Thermic Effect (5-10%)"), text(": Energie zur Verdauung der Nahrung, besonders hoch bei Protein")],
    ]),

    heading("h2", "Was die Forschung sagt"),
    paragraph(
      "Eine ",
      link(
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC3447534/",
        "wissenschaftliche Analyse zur Rate of Weight Loss"
      ),
      " zeigt klar: Moderate Defizite mit 0,5-1 Prozent Körpergewicht pro Woche führen zu deutlich besserem Erhalt der Muskelmasse als aggressive Ansätze. Aggressive Defizite (>1 Prozent pro Woche) verursachen messbare Stoffwechsel-Anpassungen und erhöhen das Risiko für Rückprall-Effekte."
    ),
    paragraph(
      "Eine andere Schlüsselstudie zeigt: Bei gleichem Gesamt-Defizit ist die Fettabnahme unabhängig von der Makronährstoff-Verteilung. Low-Carb, High-Carb, Low-Fat - alle führen zu ähnlichen Ergebnissen, wenn Kalorien und Protein gleich sind."
    ),

    heading("h2", "Dein Kaloriendefizit berechnen"),
    paragraph(
      "Schritt 1: Grundumsatz (ungefähr):"
    ),
    ul([
      "Männer: Körpergewicht (kg) × 24 = Grundumsatz",
      "Frauen: Körpergewicht (kg) × 22 = Grundumsatz",
    ]),
    paragraph(
      "Schritt 2: Aktivitätsfaktor multiplizieren:"
    ),

    table([
      ["Aktivitätslevel", "Faktor", "Beispiel"],
      ["Sitzend", "1,2", "Bürojob, kaum Bewegung"],
      ["Leicht aktiv", "1,4", "Spaziergänge, 1-2 Trainings/Woche"],
      ["Moderat aktiv", "1,6", "3-4 Trainings/Woche, aktiv im Alltag"],
      ["Sehr aktiv", "1,8", "5-6 Trainings, Handwerker"],
      ["Extrem aktiv", "2,0+", "Mehrere Trainings pro Tag, schwere Arbeit"],
    ]),
    paragraph(
      "Schritt 3: Von den Erhaltungskalorien 300-500 abziehen. Das ist dein Zielwert."
    ),
    paragraph(
      "Beispiel: 75 kg Mann, moderat aktiv: 75 × 24 × 1,6 = 2880 kcal Erhalt. Ziel: 2380-2580 kcal für stetigen Fortschritt."
    ),

    heading("h2", "Die drei nicht-verhandelbaren Säulen"),

    heading("h3", "Säule 1: Protein hochhalten"),
    paragraph(
      "1,6 bis 2,2 Gramm Protein pro kg Körpergewicht pro Tag. In einem Kaloriendefizit darf es gern mehr sein (bis 2,5 g/kg), weil Protein vor Muskelverlust schützt. 75 kg = 120-165 g Protein täglich. Details im ",
      link("/blog/proteinbedarf-berechnen", "Protein-Guide", false),
      "."
    ),

    heading("h3", "Säule 2: Krafttraining"),
    paragraph(
      "Ohne Krafttraining verlierst du in einem Defizit anteilig mehr Muskeln als Fett. Mit Krafttraining kehrt sich das um. Zwei bis drei Einheiten pro Woche reichen, drei sind optimal. Siehe ",
      link("/blog/krafttraining-fuer-anfaenger", "Krafttraining für Anfänger", false),
      "."
    ),

    heading("h3", "Säule 3: Schlaf"),
    paragraph(
      "Weniger als 7 Stunden Schlaf erhöhen das Hungerhormon Ghrelin und senken das Sättigungshormon Leptin. Schlafmangel sabotiert jede Diät. Sieben bis neun Stunden sind Pflicht, nicht optional."
    ),

    heading("h2", "Praktischer Tagesplan (Beispiel)"),
    paragraph(
      "Für die beispielhaften 2380 kcal und 140 g Protein bei 75 kg Körpergewicht:"
    ),

    table([
      ["Mahlzeit", "Beispiel", "kcal", "Protein"],
      ["Frühstück", "Haferflocken 60g + Quark 250g + Beeren 100g", "500", "35 g"],
      ["Mittag", "Hähnchen 150g + Reis 80g roh + Salat + Öl 1 EL", "650", "45 g"],
      ["Snack", "Apfel + Handvoll Mandeln (30g)", "240", "6 g"],
      ["Abend", "Lachs 150g + Süßkartoffel 250g + Gemüse", "650", "40 g"],
      ["Spätsnack", "Skyr 200g + Honig", "200", "22 g"],
      ["Summe", "—", "2240", "148 g"],
    ]),
    paragraph(
      "Genügend Puffer für Gemüse, Getränke, Gewürze. Wer will, nimmt den Cheat-Spielraum für ein Bier oder ein Stück Schokolade."
    ),

    heading("h2", "Häufige Fehler"),
    ul([
      "Zu aggressives Defizit (1000+ kcal): Muskelverlust, Heißhunger, Jojo",
      "Zu wenig Protein: Körper baut Muskeln ab",
      "Nur Cardio, kein Krafttraining: Muskeln verschwinden, Figur wirkt schlapp",
      "Alles auf einmal ändern: zu groß, nicht durchhaltbar",
      "Wiegen täglich: Gewicht schwankt normal 1-2 kg pro Tag (Wasser)",
      "Kein Plan für die Zeit nach der Diät: Gewichtswiederzunahme",
    ]),

    heading("h2", "Sättigung: Der unterschätzte Faktor"),
    paragraph(
      "Lebensmittel mit hohem Sättigungsindex machen das Defizit deutlich erträglicher. Die Sättigung wird beeinflusst durch Protein, Ballaststoffe, Wasser und Kauzeit."
    ),

    table([
      ["Lebensmittel", "Sättigungsindex (Weißbrot = 100)", "Gründe"],
      ["Kartoffeln (gekocht)", "323", "Hohe Dichte, Wasser, Ballaststoffe"],
      ["Fisch", "225", "Protein, niedrige Kaloriendichte"],
      ["Haferflocken", "209", "Beta-Glucan, Ballaststoffe"],
      ["Eier", "150", "Protein, Fett"],
      ["Äpfel", "197", "Ballaststoffe, Wasser, Kauzeit"],
      ["Vollkornbrot", "154", "Ballaststoffe"],
      ["Quark / Skyr", "140", "Protein, Volumen"],
      ["Cornflakes", "118", "Leer, wenig sättigend"],
      ["Weißbrot (Referenz)", "100", "-"],
      ["Donut", "68", "Zucker + Fett, kaum sättigend"],
      ["Croissant", "47", "Schlechtester Wert"],
    ]),

    heading("h2", "Häufige Plateaus und wie du sie löst"),

    table([
      ["Plateau-Grund", "Symptom", "Lösung"],
      ["Gewicht unverändert 2 Wochen", "Stoffwechsel-Adaptation", "50-100 kcal weiter reduzieren oder Diet-Break"],
      ["Extreme Müdigkeit", "Zu aggressives Defizit", "Defizit auf 300 kcal reduzieren, 1 Woche pausieren"],
      ["Heißhunger-Attacken", "Protein zu niedrig oder Schlafmangel", "Protein auf 2,2 g/kg, 7+ Std Schlaf"],
      ["Ständiges Grübeln über Essen", "Psychologische Erschöpfung", "2 Wochen Erhaltung, dann neu ansetzen"],
      ["Kraftverlust im Training", "Zu wenig Kohlenhydrate", "50-100 g mehr KH an Trainingstagen"],
      ["Stimmungsschwankungen", "Diät-Dauer zu lang", "Refeed-Mahlzeit + 1 Woche Pause"],
    ]),

    heading("h2", "Wenn der Fortschritt stoppt"),
    paragraph(
      "Nach 3-4 Wochen sind Plateaus normal. Strategien:"
    ),
    ol([
      "Check ob das Defizit noch stimmt: Berechnung anpassen, Gewicht hat sich verändert",
      "Diet-Break: 1-2 Wochen auf Erhaltung essen, Stoffwechsel und Hormone resetten",
      "Aktivität erhöhen: mehr Schritte, zusätzliche Cardio-Einheit",
      "Protein checken: oft ist das der versteckte Fehler",
      "Schlaf analysieren: durchschnittlich 7-9h?",
    ]),

    heading("h2", "Was nach der Diät?"),
    paragraph(
      "Die wichtigste Phase, die die meisten ignorieren. Strategien gegen Jojo:"
    ),
    ul([
      "Reverse Diet: Kalorien alle 2 Wochen um 50-100 kcal erhöhen, bis Erhaltung",
      "Krafttraining beibehalten: Muskeln erhalten den Grundumsatz",
      "Gewicht weiter monitoren, aber nicht täglich",
      "5-Kilo-Regel: wenn du wieder 5 kg zugenommen hast, Gegensteuern statt weiter zunehmen",
    ]),

    heading("h2", "Was Casa Sports dir bietet"),
    paragraph(
      "In unserer ",
      link("/ernaehrung", "Ernährungsberatung", false),
      " bekommst du einen individuellen Plan mit Kaloriendefizit, Protein-Zielen und Strategien für deinen Alltag. Unser ",
      link("/mein-neues-ich", "12-Wochen Mein Neues Ich Programm", false),
      " kombiniert strukturierte Diät mit Krafttraining und regelmäßigen Check-ins."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Nachhaltiges Abnehmen ist einfacher als Werbung und TikTok behaupten. Drei Regeln reichen: moderates Defizit, ausreichend Protein, Krafttraining. Wer das 3-6 Monate durchzieht, erreicht Ergebnisse, die auch in zwei Jahren noch stehen. Keine Wunder-Diät, kein Detox, keine Fatburner. Nur Disziplin und Geduld."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC3447534/",
          "Rate of weight loss can be predicted by patient characteristics (PMC)"
        ),
      ],
      [
        link(
          "https://pubmed.ncbi.nlm.nih.gov/18025815/",
          "Fat loss depends on energy deficit only (PubMed)"
        ),
      ],
    ]),
  ]),
}
