import type { CollectionConfig } from "payload"

export const JobApplications: CollectionConfig = {
  slug: "job-applications",
  labels: { singular: "Bewerbung", plural: "Bewerbungen" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "position", "status", "createdAt"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "position",
      type: "text",
      required: true,
    },
    {
      name: "experience",
      type: "text",
    },
    {
      name: "availability",
      type: "text",
    },
    {
      name: "startDate",
      type: "date",
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
    {
      name: "status",
      type: "select",
      defaultValue: "neu",
      options: [
        { label: "Neu", value: "neu" },
        { label: "In Bearbeitung", value: "in_bearbeitung" },
        { label: "Eingeladen", value: "eingeladen" },
        { label: "Abgelehnt", value: "abgelehnt" },
        { label: "Eingestellt", value: "eingestellt" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "notes",
      type: "richText",
      admin: {
        description: "Interne Notizen zur Bewerbung",
      },
    },
  ],
}
