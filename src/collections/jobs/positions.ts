import type { CollectionConfig } from "payload"

export const JobPositions: CollectionConfig = {
  slug: "job-positions",
  labels: { singular: "Stelle", plural: "Stellen" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "hours", "sortOrder"],
  },
  fields: [
    {
      name: "title",
      label: "Stellenbezeichnung",
      type: "text",
      required: true,
    },
    {
      name: "type",
      label: "Anstellungsart",
      type: "text",
      required: true,
      admin: {
        description: "z.B. Festanstellung, Ausbildung, Freiberuflich",
      },
    },
    {
      name: "hours",
      label: "Arbeitszeit",
      type: "text",
      required: true,
      admin: {
        description: "z.B. Vollzeit, Teilzeit, Minijob",
      },
    },
    {
      name: "icon",
      label: "Symbol",
      type: "select",
      defaultValue: "Dumbbell",
      options: [
        { label: "Hantel (Trainer)", value: "Dumbbell" },
        { label: "Gruppe (Kursleiter)", value: "Users" },
        { label: "Ausbildung", value: "GraduationCap" },
        { label: "Empfang", value: "Headphones" },
      ],
    },
    {
      name: "description",
      label: "Beschreibung",
      type: "textarea",
      required: true,
    },
    {
      name: "tasks",
      label: "Aufgaben",
      type: "array",
      required: true,
      fields: [
        {
          name: "task",
          label: "Aufgabe",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "requirements",
      label: "Anforderungen",
      type: "array",
      required: true,
      fields: [
        {
          name: "requirement",
          label: "Anforderung",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "active",
      label: "Aktiv",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
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
