export const siteConfig = {
  name: "Casa Sports",
  tagline: "MEIN NEUES ICH",
  description:
    "Fitnessstudio Oer-Erkenschwick - jeder Tag ist eine neue Chance auf das Leben, das du verdienst.",
  url: "https://sport.casasports.de",
  owner: "Naim Obeid",
  address: {
    street: "Karlstraße 4",
    zip: "45739",
    city: "Oer-Erkenschwick",
    country: "Deutschland",
  },
  phone: "02368 57060",
  email: "info@casasports.de",
  taxId: "DE257097414",
  rating: { score: 4.8, max: 5, label: "Viele glückliche Kunden" },
  social: {
    instagram: "https://www.instagram.com/casa__sports/",
    facebook: "https://www.facebook.com/casasportsoe/",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Fitness", href: "/fitness" },
  { label: "Kurse", href: "/kurse" },
  { label: "Wellness", href: "/wellness" },
  { label: "Ernährung", href: "/ernaehrung" },
  { label: "Mein Neues Ich", href: "/mein-neues-ich" },
  { label: "Blog", href: "/blog" },
  { label: "Jobs", href: "/jobs" },
] as const;

export const courses = [
  {
    name: "Power Training",
    slug: "power-training",
    description:
      "Intensives Krafttraining für maximale Ergebnisse. Steigere deine Kraft und baue Muskeln auf.",
    icon: "Dumbbell",
  },
  {
    name: "Zirkeltraining",
    slug: "zirkeltraining",
    description:
      "Ganzkörper-Workout im Zirkel. Effektives Training für Ausdauer und Kraft in einer Session.",
    icon: "RotateCcw",
  },
  {
    name: "Cycling",
    slug: "cycling",
    description:
      "Indoor Cycling mit motivierender Musik. Verbrenne Kalorien und steigere deine Ausdauer.",
    icon: "Bike",
  },
  {
    name: "Functional Training",
    slug: "functional-training",
    description:
      "Funktionelle Bewegungsmuster für den Alltag. Verbessere Mobilität, Stabilität und Kraft.",
    icon: "Activity",
  },
  {
    name: "Cardio Kurse",
    slug: "cardio",
    description:
      "Ausdauertraining das Spaß macht. Verbessere dein Herz-Kreislauf-System und verbrenne Fett.",
    icon: "Heart",
  },
  {
    name: "Gruppentraining",
    slug: "gruppentraining",
    description:
      "Gemeinsam stärker. Trainiere in der Gruppe und profitiere von der Motivation des Teams.",
    icon: "Users",
  },
] as const;

export const wellnessFeatures = [
  {
    name: "Sauna",
    description:
      "Entspanne nach dem Training in unserer finnischen Sauna und fördere deine Regeneration.",
    icon: "Flame",
  },
  {
    name: "Infrarotkabine",
    description:
      "Tiefenwärme für Muskelentspannung und Wohlbefinden. Ideal nach intensiven Trainingseinheiten.",
    icon: "Sun",
  },
  {
    name: "Regeneration",
    description:
      "Dein Workout endet nicht mit dem letzten Satz. Regeneriere smarter und werde schneller stärker.",
    icon: "Battery",
  },
] as const;
