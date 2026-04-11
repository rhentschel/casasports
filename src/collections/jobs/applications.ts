import type { CollectionConfig } from "payload"

export const JobApplications: CollectionConfig = {
  slug: "job-applications",
  labels: { singular: "Bewerbung", plural: "Bewerbungen" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "position", "email", "status", "createdAt"],
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "E-Mail",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      label: "Telefon",
      type: "text",
      required: true,
    },
    {
      name: "position",
      label: "Stelle",
      type: "text",
      required: true,
    },
    {
      name: "experience",
      label: "Erfahrung",
      type: "text",
    },
    {
      name: "availability",
      label: "Verfuegbarkeit",
      type: "text",
    },
    {
      name: "startDate",
      label: "Fruehester Start",
      type: "date",
    },
    {
      name: "message",
      label: "Nachricht",
      type: "textarea",
      required: true,
    },
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
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "notes",
      label: "Interne Notizen",
      type: "richText",
      admin: {
        description: "Interne Notizen zur Bewerbung",
      },
    },
  ],
}
