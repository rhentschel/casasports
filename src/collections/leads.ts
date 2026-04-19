import type { CollectionConfig } from "payload"

export const Leads: CollectionConfig = {
  slug: "leads",
  labels: { singular: "Lead", plural: "Leads" },
  admin: {
    useAsTitle: "email",
    defaultColumns: ["firstname", "lastname", "email", "source", "status", "createdAt"],
    group: "Verwaltung",
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => true,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    { name: "firstname", label: "Vorname", type: "text", required: true },
    { name: "lastname", label: "Nachname", type: "text", required: true },
    { name: "email", label: "E-Mail", type: "email", required: true },
    { name: "phone", label: "Telefon", type: "text" },
    { name: "message", label: "Nachricht", type: "textarea" },
    {
      name: "source",
      label: "Quelle",
      type: "text",
      admin: { description: "z.B. Probetraining Page, Kontakt, Kurse" },
    },
    {
      name: "magiclineLeadId",
      label: "Magicline Lead ID",
      type: "text",
      admin: { description: "ID aus Magicline Connect API" },
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      defaultValue: "neu",
      options: [
        { label: "Neu", value: "neu" },
        { label: "Kontaktiert", value: "kontaktiert" },
        { label: "Probetraining", value: "probetraining" },
        { label: "Konvertiert", value: "konvertiert" },
        { label: "Verloren", value: "verloren" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "convertedToSignup",
      label: "Verknuepfte Mitgliedschaft",
      type: "relationship",
      relationTo: "membership-signups",
      admin: {
        description: "Gesetzt, wenn Lead zu Abschluss geworden ist",
        position: "sidebar",
      },
    },
  ],
}
