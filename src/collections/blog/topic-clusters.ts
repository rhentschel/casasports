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
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "pillarPost",
      type: "relationship",
      relationTo: "posts",
    },
    {
      name: "articles",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
    },
  ],
}
