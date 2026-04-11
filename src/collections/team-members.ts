import type { CollectionConfig } from "payload"

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  labels: { singular: "Teammitglied", plural: "Team" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role", "sortOrder"],
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      label: "Rolle",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Bild (Upload)",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "imagePath",
      label: "Bild (Pfad)",
      type: "text",
      admin: {
        description: "Statischer Bildpfad als Fallback (z.B. /images/naim.webp)",
      },
    },
    {
      name: "video",
      label: "Video",
      type: "text",
      admin: {
        description: "Pfad zum Video (z.B. /videos/naim.mp4)",
      },
    },
    {
      name: "quote",
      label: "Zitat",
      type: "textarea",
    },
    {
      name: "sortOrder",
      label: "Reihenfolge",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
  ],
}
