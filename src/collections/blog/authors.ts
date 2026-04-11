import type { CollectionConfig } from "payload"

export const Authors: CollectionConfig = {
  slug: "authors",
  labels: { singular: "Autor", plural: "Autoren" },
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
      name: "role",
      label: "Rolle",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      label: "Biografie",
      type: "textarea",
    },
    {
      name: "expertise",
      label: "Fachgebiete",
      type: "array",
      fields: [
        {
          name: "skill",
          label: "Fachgebiet",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "image",
      label: "Bild",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "social",
      label: "Social Media",
      type: "group",
      fields: [
        {
          name: "instagram",
          label: "Instagram",
          type: "text",
        },
        {
          name: "linkedin",
          label: "LinkedIn",
          type: "text",
        },
      ],
    },
  ],
}
