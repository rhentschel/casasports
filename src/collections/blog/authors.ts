import type { CollectionConfig } from "payload"

export const Authors: CollectionConfig = {
  slug: "authors",
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
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "textarea",
    },
    {
      name: "expertise",
      type: "array",
      fields: [
        {
          name: "skill",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "social",
      type: "group",
      fields: [
        {
          name: "instagram",
          type: "text",
        },
        {
          name: "linkedin",
          type: "text",
        },
      ],
    },
  ],
}
