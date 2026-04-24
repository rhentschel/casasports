import { root, paragraph, heading, ul, ol, bold, link, text, table } from "../lexical-builder"

export const eisbadenKaelteTherapie = {
  slug: "eisbaden-kaelte-therapie",
  title: "Eisbaden und Kälte-Therapie: Was die Forschung wirklich zeigt",
  excerpt:
    "Cold Water Immersion reduziert Muskelkater, dämpft aber auch Muskelaufbau. Hier die differenzierte Betrachtung mit Timing-Empfehlungen aus aktuellen Meta-Analysen.",
  categorySlug: "wellness",
  authorSlug: "hidayet",
  coverImagePath: "/images/casasports-wellness.webp",
  keyTakeaway:
    "Eisbaden reduziert Muskelkater und akute Entzündung deutlich, dämpft aber nach Krafttraining die Hypertrophie-Signalkette. Praxis-Tipp: Für schnelle Regeneration in Wettkampf-Phasen oder Turnier-Tagen sinnvoll, nach Aufbau-Einheiten mit Muskelaufbau-Fokus lieber meiden.",
  faq: [
    {
      question: "Wie kalt und wie lange?",
      answer:
        "Eine 2024 Network-Meta-Analyse zeigt: 10-15 Minuten bei 11-15°C bieten den besten Kompromiss aus Effekt und Komfort. Kälter (5-10°C) wirkt stärker gegen Muskelschaden, ist aber weniger angenehm und birgt Kreislaufrisiken für Anfänger.",
    },
    {
      question: "Hemmt Eisbaden den Muskelaufbau wirklich?",
      answer:
        "Eine Meta-Analyse von 2024 zeigt: Regelmäßiges CWI direkt nach Krafttraining dämpft Hypertrophie-Signale und reduziert langfristig Muskelaufbau. Das ist der 'Cold Water Paradox'. Wer Muskeln aufbauen will, sollte auf Eisbaden direkt nach Kraftsessions verzichten.",
    },
    {
      question: "Wann ist Eisbaden wirklich sinnvoll?",
      answer:
        "In Wettkampf-Phasen, bei Turnier-Tagen mit mehreren Einheiten hintereinander, oder als schneller Recovery-Boost bei akuter Übertraining-Gefahr. Für Freizeit-Kraftsportler mit Muskelaufbau-Ziel: eher selten einsetzen.",
    },
    {
      question: "Eisbaden vor oder nach dem Training?",
      answer:
        "Nach. Vor dem Training senkt Kälte die Muskelspannung und die Leistung. Nach dem Training kannst du bewusst entscheiden: Recovery-Fokus → ja. Hypertrophie-Fokus → nein oder erst 4-8 Stunden später.",
    },
    {
      question: "Ist Eisbaden gefährlich?",
      answer:
        "Bei gesunden Erwachsenen relativ sicher. Risiken: Unterkühlung bei zu langen Sessions, Kreislaufschock bei Eintritt, Herzprobleme bei Vorerkrankungen. Einsteiger: langsam beginnen (3-5 Minuten bei 15°C), nie allein, immer Puls spüren.",
    },
    {
      question: "Welche mentalen Effekte hat Eisbaden?",
      answer:
        "Mehrere Studien dokumentieren Stress-Reduktion, verbesserte Stimmung und höhere Belastbarkeit. Die Ausschüttung von Noradrenalin und der bewusste Einsatz von Willenskraft scheinen mentale Resilienz zu trainieren.",
    },
    {
      question: "Sauna oder Eisbaden - was ist besser?",
      answer:
        "Unterschiedliche Zwecke. Sauna (siehe ",
      answer_link: "/blog/sauna-nach-dem-training",
    },
  ],
  content: root([
    paragraph(
      "Eisbaden und Kälte-Therapie sind in den letzten Jahren zum Trend geworden. Von Wim Hof bis zu Profisportlern schwören viele auf die Methode. Was sagt die Wissenschaft wirklich? Dieser Guide fasst die aktuelle Evidenz zusammen und zeigt, wann Kälte nützt und wann sie schadet."
    ),

    heading("h2", "Wie Cold Water Immersion wirkt"),
    paragraph(
      "Beim Eintauchen in kaltes Wasser (typisch 5-15°C) reagiert dein Körper sofort: Blutgefäße ziehen sich zusammen, um Kerntemperatur zu schützen. Das reduziert die Durchblutung der Haut und der oberflächlichen Muskeln, reduziert Schwellung und Entzündungsprozesse."
    ),
    paragraph(
      "Nach dem Verlassen des Kaltbads kehrt die Durchblutung verstärkt zurück. Diese Vasokonstriktion-Vasodilatation-Wechsel hat mehrere Effekte: sie schwemmt Stoffwechselprodukte aus, reduziert DOMS (Muskelkater) und aktiviert das autonome Nervensystem."
    ),

    heading("h2", "Was die aktuelle Forschung zeigt"),

    heading("h3", "Wirksam gegen Muskelkater und Entzündung"),
    paragraph(
      "Eine ",
      link(
        "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2025.1525726/full",
        "Network-Meta-Analyse in Frontiers in Physiology (2025)"
      ),
      " hat die optimale Dosis systematisch untersucht. Ergebnis: 10-15 Minuten bei 11-15°C reduzieren Kreatinkinase-Werte (Muskelschaden-Marker) am stärksten ohne den Komfort zu killen. Deutlich niedrigere Temperaturen (5-10°C) wirken etwas stärker, sind aber unbequemer."
    ),

    heading("h3", "Problem: dämpft Muskelaufbau"),
    paragraph(
      "Eine ",
      link(
        "https://onlinelibrary.wiley.com/doi/full/10.1002/ejsc.12074",
        "Meta-Analyse im European Journal of Sport Science (2024)"
      ),
      " fasst die Evidenz zu Hypertrophie zusammen: regelmäßiges CWI direkt nach Krafttraining dämpft die Muskelproteinsynthese. Der Effekt ist moderat, aber messbar. Wer 3-mal pro Woche direkt nach Krafttraining Eisbaden geht, verliert langfristig einen Teil der Aufbau-Gewinne."
    ),
    paragraph(
      "Die Mechanismen: Kälte senkt die akute Entzündung, die aber ein wichtiges Signal für Muskelwachstum ist. Anabole Signalwege (mTOR) werden schwächer aktiviert."
    ),

    heading("h2", "Die richtige Dosierung im Überblick"),

    table([
      ["Dosis", "Temperatur", "Dauer", "Effekt", "Wann"],
      ["Mild", "15-18°C", "10-15 Min", "Entspannung, leicht anti-inflammatorisch", "Regelmäßig"],
      ["Moderat", "11-15°C", "10-15 Min", "Stark gegen DOMS, moderate Wirkung", "1-2x pro Woche"],
      ["Intensiv", "5-10°C", "5-10 Min", "Maximum gegen Muskelschaden", "Wettkampf-Phasen"],
      ["Extrem", "<5°C", "<5 Min", "Wim-Hof-Style, mentale Effekte", "Sehr selten, erfahren"],
    ]),

    heading("h2", "Timing: Wann Eisbaden einsetzen?"),

    heading("h3", "Empfohlen"),
    ul([
      "Nach intensiven Turnieren oder Spielen (mehrere Einheiten in wenigen Tagen)",
      "Vor wichtigen Wettkämpfen zur Regeneration",
      "Bei akutem Muskelkater der den Alltag stört",
      "Bei Hitze-Belastung nach Outdoor-Training",
      "Als mentales Training für Stressresilienz",
    ]),

    heading("h3", "Besser vermeiden"),
    ul([
      "Direkt nach Krafttraining mit Muskelaufbau-Ziel",
      "Vor intensiven Einheiten (reduziert Leistung)",
      "Bei akuten Erkältungen oder Fieber",
      "Bei Bluthochdruck oder Herzerkrankungen ohne ärztliche Freigabe",
      "Direkt nach sehr langen Ausdauer-Einheiten (Unterkühlungsgefahr)",
    ]),

    heading("h2", "Wie du sicher einsteigst"),
    ol([
      "Start: 3-5 Minuten bei 15°C nach einem lockeren Training",
      "Woche 2: 8 Minuten bei 15°C",
      "Woche 3-4: auf 13-15°C reduzieren, 10-12 Minuten",
      "Langsam atmen: tiefe Ausatmung durch den Mund",
      "Nie direkt nach Mahlzeit",
      "Nach dem Bad: langsam aufwärmen, trockene Kleidung, warme Dusche",
      "Nie allein, immer mit Beobachter",
    ]),

    heading("h2", "Häufige Fehler"),
    ul([
      "Zu kalt zu schnell: Kreislauf kann überfordert werden",
      "Zu lang: mehr als 15-20 Minuten bei sehr kaltem Wasser = Unterkühlungsgefahr",
      "Hyperventilation im Wasser: tief und ruhig atmen",
      "Direkt nach Kraftsession bei Aufbau-Ziel",
      "Jeden Tag: Nervensystem braucht Erholung",
      "In Erwartung von 'Wundern': Kälte ist Werkzeug, kein Zaubermittel",
    ]),

    heading("h2", "Mentale Effekte: Was die Forschung sagt"),
    paragraph(
      "Eine ",
      link(
        "https://journals.plos.org/plosone/article/file?type=printable&id=10.1371/journal.pone.0317615",
        "systematische Review zu Cold Water Immersion und Gesundheit"
      ),
      " zeigt: regelmäßiges Eisbaden (2-3 Mal pro Woche) verbessert subjektive Lebensqualität, reduziert Stress-Marker und verbessert Schlafqualität bei geeigneter Durchführung. Der Effekt auf Depression ist vorläufig positiv, mehr Forschung nötig."
    ),

    heading("h2", "Was Casa Sports anbietet"),
    paragraph(
      "Im Wellness-Bereich haben wir eine ",
      bold("Abkühlzone"),
      " mit kalter Dusche und Ruheflächen. Im nächsten Ausbau ist eine Tauchwanne geplant. Unser Sauna-Infrarot-Setup plus Kältereiz deckt den Wechsel schon jetzt gut ab."
    ),

    heading("h2", "Fazit"),
    paragraph(
      "Eisbaden ist ein präzises Werkzeug, kein Allheilmittel. Für akute Regeneration und Wettkampf-Szenarien klar wirksam, bei Muskelaufbau-Fokus aber kontraproduktiv. Wer das Timing klug wählt und nicht blind dem Trend folgt, kann die Vorteile nutzen ohne die Nachteile."
    ),
    paragraph(
      "Mehr zum Zusammenspiel von Wärme und Kälte in unserem ",
      link("/blog/wellness-und-regeneration-guide", "Wellness-und-Regenerations-Guide", false),
      "."
    ),

    heading("h2", "Quellen"),
    ul([
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC11897523/",
          "Network Meta-Analysis: Cold Water Immersion Doses (PMC)"
        ),
      ],
      [
        link(
          "https://onlinelibrary.wiley.com/doi/full/10.1002/ejsc.12074",
          "Cold Water Immersion on Resistance Training Hypertrophy (EJSS 2024)"
        ),
      ],
      [
        link(
          "https://pmc.ncbi.nlm.nih.gov/articles/PMC11778651/",
          "Effects of cold-water immersion on health and wellbeing (2024)"
        ),
      ],
    ]),
  ]),
}
