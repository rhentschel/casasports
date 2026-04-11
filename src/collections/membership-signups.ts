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
      type: "text",
      admin: {
        description: "Magicline Contract ID",
      },
    },
    {
      name: "customerId",
      type: "text",
      admin: {
        description: "Magicline Customer ID",
      },
    },
    {
      name: "customerName",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "plan",
      type: "text",
      required: true,
    },
    {
      name: "termMonths",
      type: "number",
    },
    {
      name: "monthlyPrice",
      type: "number",
    },
    {
      name: "status",
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
      type: "json",
      admin: {
        description: "Rohe API-Antwort von Magicline",
      },
    },
  ],
}
