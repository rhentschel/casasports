import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const supplementsWasLohntSich = {
  slug: "supplements-was-lohnt-sich",
  title: "Supplements: Was wirklich lohnt und was reine Geldverschwendung ist",
  excerpt:
    "Die Supplement-Industrie macht Milliarden mit überflüssigen Produkten. Hier die evidenzbasierte Rangliste: Was wirkt, was ist umstritten und was kannst du sicher weglassen.",
  categorySlug: "ernaehrung",
  authorSlug: "naim",
  coverImagePath: "/images/casasports-ernaehrung.webp",
  keyTakeaway:
    "Nur drei Supplements haben starke wissenschaftliche Belege für Kraftsportler: Kreatin-Monohydrat, Proteinpulver und Koffein. Vitamin D, Omega-3 und Magnesium sind bei individuellen Defiziten sinnvoll. Alles andere von Fatburnern bis Pre-Workout-Blends ist meist Geldverschwendung oder sogar riskant.",
  faq: [
    {
      question: "Brauche ich überhaupt Supplements?",
      answer:
        "Nein, theoretisch nicht. Eine gute Ernährung deckt den Bedarf für die meisten Menschen. Supplements sind Bonus-Ergänzungen, keine Pflicht. Die Ausnahme sind gezielte Defizite (z.B. B12 bei Veganern, Vitamin D im Winter).",
    },
    {
      question: "Was ist das wirksamste Supplement für Kraftsportler?",
      answer:
        "Kreatin-Monohydrat. 3-5 g täglich bringen messbare Kraftsteigerung, Muskelaufbau und bessere Regeneration. Die Evidenzlage ist so klar wie bei keinem anderen Supplement.",
    },
    {
      question: "Sind Pre-Workout-Booster sinnvoll?",
      answer:
        "Die meisten sind Marketing. Der wirksame Bestandteil ist Koffein (200-400 mg = 2-4 Tassen Kaffee). Der Rest - Beta-Alanin, Citrullin, Taurin, B-Vitamine - hat teilweise wissenschaftliche Belege, aber die Effekte sind klein und oft nicht den Preis wert.",
    },
    {
      question: "Und was ist mit BCAA oder EAA?",
      answer:
        "Überflüssig bei ausreichender Proteinzufuhr. Wenn du 1,6-2,2 g Protein pro kg bekommst, sind BCAAs und EAAs unnötige Zusatzkosten. Beta-Alanin kann bei sehr kurzen Hochintensitäts-Belastungen minimale Vorteile bringen.",
    },
    {
      question: "Testo-Booster, Fatburner, Detox-Produkte?",
      answer:
        "Alle drei haben so gut wie keine wissenschaftliche Substanz. Testo-Booster erhöhen Testosteron nicht signifikant. Fatburner können gefährliche Stimulanzien enthalten. Detox-Produkte sind reine Abzocke - Leber und Niere detoxen von selbst.",
    },
    {
      question: "Woran erkenne ich ein seriöses Supplement?",
      answer:
        "Kurze Zutatenliste, keine Propaganda-Claims, unabhängige Zertifizierung (NSF, Informed Sport, Cologne List), transparente Dosierung. Marken wie Rocka Nutrition, MyProtein oder ESN haben solide Qualität zu fairem Preis.",
    },
    {
      question: "Vitamin D supplementieren?",
      answer:
        "Ja, in Deutschland im Winter (Oktober-März) fast jedem zu empfehlen. 2000-4000 IE pro Tag ist sicher und sinnvoll. Einmal pro Jahr Bluttest (Ziel: 25-OH-D zwischen 40-60 ng/ml).",
    },
  ],
  content: root([
    paragraph(
      "Der Supplement-Markt ist ein Milliardengeschäft mit wenig Regulation. Für jedes Problem gibt es angeblich die Pille, das Pulver, den Shot. Tatsächlich belegbar wirksam sind nur eine Handvoll. Dieser Guide zeigt die evidenzbasierte Rangliste."
    ),

    heading("h2", "Die Tier-Liste der Supplements"),

    heading("h3", "S-Tier: Unbedingt empfehlenswert"),
    table([
      ["Supplement", "Wirkung", "Dosis", "Preis/Monat"],
      ["Kreatin-Monohydrat", "Kraft, Muskelaufbau, Regeneration", "3-5 g täglich", "3-5 €"],
      ["Proteinpulver (Whey/Vegan)", "Protein-Zufuhr ergänzen", "1-2 Portionen täglich", "15-25 €"],
      ["Vitamin D3", "Immunsystem, Knochen, Stimmung", "2000-4000 IE (Winter)", "1-3 €"],
    ]),

    heading("h3", "A-Tier: Nützlich für spezifische Situationen"),
    table([
      ["Supplement", "Wann sinnvoll", "Dosis"],
      ["Koffein", "Vor Training, Mentale Klarheit", "200-400 mg vor Workout"],
      ["Omega-3 (EPA+DHA)", "Wenig Fisch im Speiseplan", "1-2 g täglich"],
      ["Magnesium", "Schlaf, Muskelkrämpfe", "300-400 mg abends"],
      ["Vitamin B12", "Veganer, Vegetarier", "250-1000 µg wöchentlich"],
      ["Beta-Alanin", "Hochintensives Training", "3-5 g täglich"],
    ]),

    heading("h3", "B-Tier: Sehr spezifisch, oft überbewertet"),
    ul([
      "Citrullin-Malat: geringer Pump-Effekt, teuer pro Wirkung",
      "HMB: nur für absolute Anfänger oder Senioren mit Muskelverlust",
      "Ashwagandha: mögliche Stress-Effekte, mehr Forschung nötig",
      "Rhodiola: kann bei mentaler Fatigue helfen",
      "L-Theanin: leichter Entspannungseffekt, Kombination mit Koffein",
      "Tongkat Ali: Testo-Effekt klein, Evidenz dünn",
    ]),

    heading("h3", "F-Tier: Spar dir das Geld"),
    ul([
      "BCAA (bei ausreichender Protein-Zufuhr überflüssig)",
      "Testo-Booster (Tribulus, Zink-Magnesium-Stacks): minimaler Effekt",
      "Fatburner mit Stimulanzien: gefährlich, kein nachhaltiger Effekt",
      "Detox- und Reinigungsprodukte: Abzocke",
      "Glutamin: Körper produziert genug selbst",
      "Arginin: zu schlechte Bioverfügbarkeit",
      "Wachstumshormon-Booster: nicht möglich ohne Injektion",
    ]),

    heading("h2", "Kreatin-Monohydrat im Detail"),
    paragraph(
      "Das mit Abstand wirksamste legale Supplement im Kraftsport. 3-5 g täglich, jeden Tag, zu jeder Tageszeit. Bringt nach 4-8 Wochen messbare Kraft- und Muskelgewinne. Sicher bei gesunden Menschen, keine belegten Nebenwirkungen. Mehr dazu im ",
      link("/blog/kreatin-monohydrat-guide", "Kreatin-Guide", false),
      "."
    ),

    heading("h2", "Proteinpulver: Wann brauchst du es?"),
    paragraph(
      "Proteinpulver ist eine Bequemlichkeit, kein Pflicht. Es lohnt sich, wenn:"
    ),
    ul([
      "Dein Tagesbedarf (1,6-2,2 g/kg) schwer zu erreichen ist",
      "Zeit knapp ist und du schnell Protein brauchst",
      "Nach dem Training und bis zur nächsten Mahlzeit mehr als 2 Stunden vergehen",
      "Unterwegs und Eiweißquellen limitiert",
    ]),
    paragraph(
      "Formen: Whey (schnell absorbiert, günstig), Casein (langsam, gut abends), Erbsen-Reis-Blends (pflanzlich). Unterschiede sind klein wenn Gesamtmenge passt."
    ),

    heading("h2", "Koffein: Das effektivste Pre-Workout"),
    paragraph(
      "Koffein ist bestens erforscht. 200-400 mg (ein bis zwei Espresso-Shots oder ein starker schwarzer Kaffee) vor dem Training:"
    ),
    ul([
      "Steigert Kraft-Output um 3-7 Prozent",
      "Erhöht Ausdauer-Leistung messbar",
      "Verbessert mentale Fokussierung",
      "Reduziert subjektives Anstrengungsempfinden",
    ]),
    paragraph(
      "Vorsicht: Nicht später als 6-8 Stunden vor dem Schlaf, sonst leidet der Schlaf. Toleranz baut sich bei täglicher Einnahme auf - 1-2 koffein-freie Tage pro Woche helfen."
    ),

    heading("h2", "Vitamin D: Fast jeder sollte supplementieren"),
    paragraph(
      "In Deutschland bekommt etwa jeder Zweite zu wenig Vitamin D. Grund: Sonnenbestrahlung zwischen Oktober und März reicht nicht für körpereigene Synthese. Nahrung deckt den Bedarf nicht."
    ),
    ul([
      "Empfohlen: 2000-4000 IE Vitamin D3 täglich",
      "Idealer Wert im Blut (25-OH-D): 40-60 ng/ml",
      "Einmal pro Jahr Bluttest, dann individuell dosieren",
      "Mit Fett einnehmen (fettlöslich)",
    ]),

    heading("h2", "Omega-3: Wenn Fisch fehlt"),
    paragraph(
      "Zwei bis drei Portionen fetter Fisch pro Woche (Lachs, Makrele, Hering) decken den Bedarf. Wer das nicht schafft:"
    ),
    ul([
      "Fischöl-Kapseln: 1-2 g EPA+DHA täglich",
      "Algenöl-Kapseln (vegan): 1-2 g EPA+DHA täglich",
      "Leinöl, Walnüsse, Chiasamen: enthalten ALA, wird im Körper nur ineffizient zu EPA/DHA konvertiert - als alleinige Quelle nicht ausreichend",
    ]),

    heading("h2", "Das umstrittene Drittel: Beta-Alanin, Citrullin, HMB"),

    heading("h3", "Beta-Alanin"),
    paragraph(
      "Puffert Muskelsäure bei hochintensiven Kurzbelastungen (1-4 Minuten). Effekt bei typischen Kraftsätzen (30-60 Sekunden) minimal. Sinnvoll für CrossFit, Sprint-Training, HIIT. Dosis: 3-5 g täglich, meist als Split-Dose wegen Kribbel-Effekt."
    ),

    heading("h3", "L-Citrullin / Citrullin-Malat"),
    paragraph(
      "Wird vom Körper zu Arginin umgewandelt, erhöht Stickoxid, 'Pump'. Kleine Studien zeigen leichte Verbesserung bei Ausdauer in einzelnen Sätzen. Effekt klein, teuer. Skippable."
    ),

    heading("h3", "HMB"),
    paragraph(
      "Metabolit der Aminosäure Leucin. Evidenz: gut bei absoluten Anfängern und Senioren mit Muskelverlust. Bei trainierten Athleten marginal. 3 g täglich."
    ),

    heading("h2", "Rote Flaggen: Was nie funktioniert"),
    ul([
      "'Natürlicher Testo-Booster' - Wirkung auf Testosteron nicht messbar",
      "'Fatburner-Komplex' - meist nur Koffein plus Stimulanzien in teurer Verpackung",
      "'Detox-Tee' - Leber und Niere brauchen keinen Tee zur Funktion",
      "'Growth Hormone Booster' - ohne Injektion unmöglich zu steigern",
      "'Pre-Workout mit 20 Zutaten' - Underdosed, Wirkung ist pure Koffein-Auswirkung",
      "'Wunder-Pillen fürs Gehirn' - fast alle ohne wissenschaftliche Basis",
    ]),

    heading("h2", "So baust du deinen Supplement-Stack auf"),
    ol([
      "Basis-Stack (jeder): Kreatin + Vitamin D + evtl. Proteinpulver",
      "Bei Bedarf ergänzen: Koffein vor Training, Omega-3 bei wenig Fisch",
      "Bei Defiziten (per Bluttest): Vitamin B12, Eisen, Magnesium, Zink",
      "Alles andere nur wenn starker spezifischer Grund vorhanden",
      "Nicht blind kaufen: jede neue Ergänzung 4-8 Wochen testen und bewerten",
    ]),

    heading("h2", "Budget-Tipp"),
    paragraph(
      "Der Supplement-Aufwand für einen ambitionierten Kraftsportler liegt bei 20-40 Euro pro Monat. Wer mehr ausgibt, zahlt meist für Marketing. Gute Quellen: MyProtein, ESN, Rocka Nutrition (Deutschland) oder direkt vom Hersteller mit Zertifizierung."
    ),

    heading("h2", "Was Casa Sports dir empfehlen kann"),
    paragraph(
      "Wir verkaufen keine Supplements im Studio und haben keine Partnerschaften - unsere Empfehlungen sind neutral. In der Ernährungsberatung besprechen wir deinen individuellen Bedarf auf Basis deiner Bluttest-Werte und Trainingsziele."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Drei Supplements lohnen sich für fast jeden Kraftsportler: Kreatin-Monohydrat, Proteinpulver zur Ergänzung und Vitamin D im Winter. Vier weitere sind situativ sinnvoll: Koffein, Omega-3, Magnesium, B12. Alles andere ist meist Marketing. Wer sich daran orientiert, spart pro Jahr mehrere hundert Euro und verliert nichts an Effekt."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC5545206/",
          "Timing, optimal dose and intake duration of dietary supplements (ISSN)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC7871530/",
          "ISSN Position on Creatine"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153/",
          "ISSN Protein Position Stand"
        ),
      ],
    ]),
  ]),
}
