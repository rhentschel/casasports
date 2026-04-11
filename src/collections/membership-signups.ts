import type { CollectionConfig } from "payload"

export const MembershipSignups: CollectionConfig = {
  slug: "membership-signups",
  labels: { singular: "Mitgliedschaft", plural: "Mitgliedschaften" },
  admin: {
    useAsTitle: "customerName",
    defaultColumns: ["customerName", "plan", "monthlyPrice", "status", "createdAt"],
  },
  fields: [
    {
      name: "contractId",
      label: "Vertragsnr.",
      type: "text",
      admin: {
        description: "Magicline Contract ID",
      },
    },
    {
      name: "customerId",
      label: "Kundennr.",
      type: "text",
      admin: {
        description: "Magicline Customer ID",
      },
    },
    {
      name: "customerName",
      label: "Kundenname",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "E-Mail",
      type: "email",
    },
    {
      name: "phone",
      label: "Telefon",
      type: "text",
    },
    {
      name: "plan",
      label: "Tarif",
      type: "text",
      required: true,
    },
    {
      name: "termMonths",
      label: "Laufzeit (Monate)",
      type: "number",
    },
    {
      name: "monthlyPrice",
      label: "Monatspreis",
      type: "number",
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      defaultValue: "aktiv",
      options: [
        { label: "Aktiv", value: "aktiv" },
        { label: "Gekuendigt", value: "gekuendigt" },
        { label: "Pausiert", value: "pausiert" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "magiclineResponse",
      label: "API-Antwort",
      type: "json",
      admin: {
        description: "Rohe API-Antwort von Magicline",
      },
    },
  ],
}
