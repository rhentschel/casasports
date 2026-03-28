import type { Category } from "./types"

export const categories: Category[] = [
  {
    slug: "training",
    name: "Training",
    description: "Trainingswissen, Uebungen und Methoden fuer jedes Level.",
    color: "cs-accent",
  },
  {
    slug: "ernaehrung",
    name: "Ernaehrung",
    description: "Ernaehrungstipps, Rezepte und Strategien fuer Sportler.",
    color: "cs-gold",
  },
  {
    slug: "wellness",
    name: "Wellness & Regeneration",
    description: "Sauna, Erholung und alles rund um die Regeneration.",
    color: "cs-accent",
  },
  {
    slug: "studio",
    name: "Studio-News",
    description: "Neuigkeiten, Events und Aktionen von Casa Sports.",
    color: "cs-gold",
  },
]

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
