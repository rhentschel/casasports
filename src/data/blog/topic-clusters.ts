import type { TopicCluster } from "./types"

export const topicClusters: TopicCluster[] = [
  {
    slug: "fitness-training",
    name: "Fitness-Training",
    description: "Alles rund um effektives Training im Fitnessstudio.",
    pillarSlug: "fitness-training-der-komplette-guide",
    articleSlugs: [
      "krafttraining-fuer-anfaenger",
      "cardio-oder-krafttraining",
      "functional-training-im-alltag",
    ],
  },
  {
    slug: "sporternaehrung",
    name: "Sporternaehrung",
    description: "Ernaehrungswissen fuer bessere Trainingsergebnisse.",
    pillarSlug: "sporternaehrung-der-komplette-guide",
    articleSlugs: [
      "proteinbedarf-berechnen",
    ],
  },
  {
    slug: "wellness-regeneration",
    name: "Wellness & Regeneration",
    description: "Erholung als Teil deines Trainingsplans.",
    pillarSlug: "wellness-und-regeneration-guide",
    articleSlugs: [
      "sauna-nach-dem-training",
    ],
  },
]

export function getClusterForPost(postSlug: string): TopicCluster | undefined {
  return topicClusters.find(
    (c) => c.pillarSlug === postSlug || c.articleSlugs.includes(postSlug)
  )
}
