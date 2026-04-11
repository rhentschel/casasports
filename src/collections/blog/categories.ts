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
      name: "color",
      label: "Farbe",
      type: "text",
      defaultValue: "cs-accent",
    },
  ],
}
