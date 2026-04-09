import type { CollectionConfig } from "payload"

export const Courses: CollectionConfig = {
  slug: "courses",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "day", "time", "trainer", "active"],
  },
  fields: [
    {
      name: "name",
      type: "select",
      required: true,
      options: [
        { label: "Power Training", value: "Power Training" },
        { label: "Cycling", value: "Cycling" },
        { label: "Functional", value: "Functional" },
        { label: "Cardio", value: "Cardio" },
        { label: "Zirkeltraining", value: "Zirkeltraining" },
        { label: "Gruppentraining", value: "Gruppentraining" },
      ],
    },
    {
      name: "day",
      type: "select",
      required: true,
      options: [
        { label: "Montag", value: "0" },
        { label: "Dienstag", value: "1" },
        { label: "Mittwoch", value: "2" },
        { label: "Donnerstag", value: "3" },
        { label: "Freitag", value: "4" },
        { label: "Samstag", value: "5" },
      ],
    },
    {
      name: "time",
      type: "text",
      required: true,
      admin: {
        description: "Format: HH:MM (z.B. 09:00)",
      },
    },
    {
      name: "duration",
      type: "number",
      required: true,
      defaultValue: 45,
      admin: {
        description: "Dauer in Minuten",
      },
    },
    {
      name: "trainer",
      type: "text",
      required: true,
    },
    {
      name: "room",
      type: "text",
      required: true,
    },
    {
      name: "intensity",
      type: "select",
      required: true,
      defaultValue: "2",
      options: [
        { label: "Leicht", value: "1" },
        { label: "Mittel", value: "2" },
        { label: "Intensiv", value: "3" },
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
  ],
}
