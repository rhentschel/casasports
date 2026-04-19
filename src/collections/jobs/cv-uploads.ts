import type { CollectionConfig } from "payload"

export const CvUploads: CollectionConfig = {
  slug: "cv-uploads",
  labels: { singular: "Lebenslauf", plural: "Lebenslaeufe" },
  upload: {
    mimeTypes: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    staticDir: "cv-uploads",
  },
  admin: {
    useAsTitle: "filename",
    group: "Verwaltung",
    hidden: ({ user }) => !user,
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => true,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    { name: "applicantName", label: "Bewerber/in", type: "text" },
  ],
}
