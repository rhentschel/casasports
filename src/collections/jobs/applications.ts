import type { CollectionConfig } from "payload"
import { sendJobApplicationNotification } from "../../lib/email"

export const JobApplications: CollectionConfig = {
  slug: "job-applications",
  labels: { singular: "Bewerbung", plural: "Bewerbungen" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "position", "email", "status", "createdAt"],
    group: "Verwaltung",
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => true,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation !== "create") return doc
        try {
          await sendJobApplicationNotification(
            {
              name: doc.name,
              email: doc.email,
              phone: doc.phone,
              position: doc.position,
              experience: doc.experience,
              availability: doc.availability,
              startDate: doc.startDate,
              message: doc.message,
            },
            req.payload
          )
        } catch (err) {
          req.payload.logger.error({ err }, "Job application notification failed")
        }
        return doc
      },
    ],
  },
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "E-Mail", type: "email", required: true },
    { name: "phone", label: "Telefon", type: "text", required: true },
    { name: "position", label: "Stelle", type: "text", required: true },
    { name: "experience", label: "Erfahrung", type: "text" },
    { name: "availability", label: "Verfuegbarkeit", type: "text" },
    { name: "startDate", label: "Fruehester Start", type: "date" },
    { name: "message", label: "Nachricht", type: "textarea", required: true },
    {
      name: "status",
      label: "Status",
      type: "select",
      defaultValue: "neu",
      options: [
        { label: "Neu", value: "neu" },
        { label: "In Bearbeitung", value: "in_bearbeitung" },
        { label: "Eingeladen", value: "eingeladen" },
        { label: "Abgelehnt", value: "abgelehnt" },
        { label: "Eingestellt", value: "eingestellt" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "notes",
      label: "Interne Notizen",
      type: "richText",
      admin: { description: "Interne Notizen zur Bewerbung" },
    },
  ],
}
