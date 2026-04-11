import type { CollectionConfig } from "payload"

export const TopicClusters: CollectionConfig = {
  slug: "topic-clusters",
  labels: { singular: "Themencluster", plural: "Themencluster" },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "URL-Slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "description",
      label: "Beschreibung",
      type: "textarea",
    },
    {
      name: "pillarPost",
      label: "Pillar-Beitrag",
      type: "relationship",
      relationTo: "posts",
    },
    {
      name: "articles",
      label: "Zugehoerige Beitraege",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
    },
  ],
}
