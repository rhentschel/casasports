import type { CollectionConfig } from "payload"

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Beitrag", plural: "Beitraege" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "author", "publishedAt", "featured"],
  },
  fields: [
    {
      name: "title",
      label: "Titel",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "URL-Slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "excerpt",
      label: "Kurzfassung",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      label: "Inhalt",
      type: "richText",
      required: true,
    },
    {
      name: "coverImage",
      label: "Titelbild",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "category",
      label: "Kategorie",
      type: "relationship",
      relationTo: "categories",
    },
    {
      name: "tags",
      label: "Tags",
      type: "array",
      fields: [
        {
          name: "tag",
          label: "Tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "author",
      label: "Autor",
      type: "relationship",
      relationTo: "authors",
      required: true,
    },
    {
      name: "publishedAt",
      label: "Veroeffentlicht am",
      type: "date",
      required: true,
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "updatedAt",
      label: "Aktualisiert am",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "featured",
      label: "Hervorgehoben",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "isPillar",
      label: "Pillar-Artikel",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Pillar-Artikel fuer Topic-Cluster",
      },
    },
    {
      name: "topicCluster",
      label: "Themencluster",
      type: "relationship",
      relationTo: "topic-clusters",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "relatedPosts",
      label: "Verwandte Beitraege",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
    },
    {
      name: "seo",
      label: "SEO",
      type: "group",
      fields: [
        {
          name: "title",
          label: "SEO-Titel",
          type: "text",
        },
        {
          name: "description",
          label: "SEO-Beschreibung",
          type: "textarea",
        },
      ],
    },
  ],
}
