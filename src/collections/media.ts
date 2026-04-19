import type { CollectionConfig } from "payload"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Medium", plural: "Medien" },
  access: {
    read: () => true, // oeffentlich, damit Frontend + Admin Bilder laden
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  upload: {
    staticDir: path.resolve(__dirname, "..", "..", "public", "media"),
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
