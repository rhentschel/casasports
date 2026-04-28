export type RechnerMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  category: "Körper" | "Ernährung" | "Training";
  available: boolean;
};

export const rechnerList: RechnerMeta[] = [
  {
    slug: "bmi",
    title: "BMI Rechner",
    shortTitle: "BMI",
    tagline: "Body-Mass-Index",
    description:
      "Berechne deinen Body-Mass-Index und sieh, in welcher Gewichtsklasse du dich aktuell befindest.",
    category: "Körper",
    available: true,
  },
  {
    slug: "proteinbedarf",
    title: "Protein Rechner",
    shortTitle: "Protein",
    tagline: "Täglicher Eiweißbedarf",
    description:
      "Berechne deinen täglichen Proteinbedarf basierend auf Gewicht, Trainingsintensität und Ziel.",
    category: "Ernährung",
    available: true,
  },
  {
    slug: "kalorienbedarf",
    title: "Kalorienbedarf",
    shortTitle: "Kalorien",
    tagline: "TDEE & Grundumsatz",
    description:
      "Dein täglicher Kalorienbedarf nach Mifflin-St Jeor inkl. Aktivitätsfaktor.",
    category: "Ernährung",
    available: true,
  },
  {
    slug: "1rm",
    title: "1-Rep-Max",
    shortTitle: "1-RM",
    tagline: "Maximalkraft",
    description: "Schätze dein Maximalgewicht für eine Wiederholung (Epley-Formel).",
    category: "Training",
    available: true,
  },
  {
    slug: "trainingspuls",
    title: "Trainingspuls",
    shortTitle: "Puls",
    tagline: "Karvonen-Zonen",
    description:
      "Optimaler Puls-Bereich für Cardio, Fettverbrennung und Ausdauer.",
    category: "Training",
    available: true,
  },
  {
    slug: "wasserbedarf",
    title: "Wasserbedarf",
    shortTitle: "Wasser",
    tagline: "Hydration pro Tag",
    description: "Wie viel Wasser du pro Tag brauchst inkl. Trainings-Aufschlag.",
    category: "Ernährung",
    available: true,
  },
  {
    slug: "koerperfett",
    title: "Körperfett",
    shortTitle: "KFA",
    tagline: "Navy-Methode",
    description: "Körperfettanteil per Bauchumfang, Hals und Größe — präziser als der BMI.",
    category: "Körper",
    available: true,
  },
  {
    slug: "taille-huefte",
    title: "Taille-Hüfte-Verhältnis",
    shortTitle: "WHR",
    tagline: "Risiko-Indikator",
    description: "WHO-Standardmaß für viszerales Fett und Herz-Kreislauf-Risiko.",
    category: "Körper",
    available: true,
  },
  {
    slug: "kalorienverbrauch",
    title: "Kalorienverbrauch",
    shortTitle: "Verbrauch",
    tagline: "Sport & Aktivität",
    description: "Wie viel verbrennst du in 60 Min Cycling, Krafttraining oder Sauna?",
    category: "Training",
    available: true,
  },
];
