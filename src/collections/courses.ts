import type { CollectionConfig } from "payload"

export const Courses: CollectionConfig = {
  slug: "courses",
  labels: { singular: "Kurs", plural: "Kurse" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "day", "time", "trainer", "room"],
  },
  fields: [
    {
      name: "name",
      label: "Kursart",
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
      label: "Tag",
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
      label: "Uhrzeit",
      type: "text",
      required: true,
      admin: {
        description: "Format: HH:MM (z.B. 09:00)",
      },
    },
    {
      name: "duration",
      label: "Dauer (Min)",
      type: "number",
      required: true,
      defaultValue: 45,
      admin: {
        description: "Dauer in Minuten",
      },
    },
    {
      name: "trainer",
      label: "Trainer",
      type: "text",
      required: true,
    },
    {
      name: "room",
      label: "Raum",
      type: "text",
      required: true,
    },
    {
      name: "intensity",
      label: "Intensitaet",
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
      label: "Aktiv",
      type: "checkbox",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
}
