import type { Author } from "./types"

export const authors: Author[] = [
  {
    slug: "naim-obeid",
    name: "Naim Obeid",
    role: "Inhaber & Fitness-Experte",
    bio: "Naim hat Casa Sports 2016 gegruendet und ist zertifizierter Personal Trainer mit ueber 15 Jahren Erfahrung im Fitnessbereich. Seine Leidenschaft: individuelle Trainingskonzepte, die wirklich funktionieren.",
    expertise: ["Personal Training", "Krafttraining", "Studiomanagement"],
    image: "/images/naim-casasports.webp",
    social: {
      instagram: "https://www.instagram.com/casa__sports/",
    },
  },
  {
    slug: "hidayet",
    name: "Hidayet",
    role: "Studioleiter & Trainer",
    bio: "Hidayet leitet das taegliche Training bei Casa Sports und betreut unsere Mitglieder von der Einweisung bis zum Wettkampf. Sein Fokus liegt auf Krafttraining und funktionellem Training.",
    expertise: ["Krafttraining", "Functional Training", "Trainingsplanung"],
    image: "/images/casasports-personal-training.webp",
  },
  {
    slug: "jennifer",
    name: "Jennifer",
    role: "Trainerin & Kursleitung",
    bio: "Jennifer ist zertifizierte Gruppenfitness-Trainerin und leitet unsere beliebtesten Kurse. Ihr Spezialgebiet: Kurse, die Spass machen und trotzdem Ergebnisse liefern.",
    expertise: ["Gruppenfitness", "Cycling", "Cardio-Training"],
    image: "/images/casasports-gruppentraining.webp",
  },
]

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}
