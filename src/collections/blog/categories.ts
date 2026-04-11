import type { CollectionConfig } from "payload"

export const Categories: CollectionConfig = {
  slug: "categories",
  labels: { singular: "Kategorie", plural: "Kategorien" },
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
      name: "color",
      type: "text",
      defaultValue: "cs-accent",
    },
  ],
}
