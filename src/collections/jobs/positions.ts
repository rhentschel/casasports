import type { CollectionConfig } from "payload"

export const JobPositions: CollectionConfig = {
  slug: "job-positions",
  labels: { singular: "Stelle", plural: "Stellen" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "active", "sortOrder"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "text",
      required: true,
      admin: {
        description: "z.B. Festanstellung, Ausbildung, Freiberuflich",
      },
    },
    {
      name: "hours",
      type: "text",
      required: true,
      admin: {
        description: "z.B. Vollzeit, Teilzeit, Minijob",
      },
    },
    {
      name: "icon",
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
      type: "textarea",
      required: true,
    },
    {
      name: "tasks",
      type: "array",
      required: true,
      fields: [
        {
          name: "task",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "requirements",
      type: "array",
      required: true,
      fields: [
        {
          name: "requirement",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "active",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "sortOrder",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
  ],
}
