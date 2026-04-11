import type { CollectionConfig } from "payload"

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Medium", plural: "Medien" },
  upload: {
    mimeTypes: ["image/*", "video/*"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: 512,
        position: "centre",
      },
      {
        name: "hero",
        width: 1920,
        position: "centre",
      },
    ],
  },
  admin: {
    useAsTitle: "alt",
  },
  fields: [
    {
      name: "alt",
      label: "Alternativtext",
      type: "text",
      required: true,
    },
  ],
}
