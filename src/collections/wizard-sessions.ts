import type { CollectionConfig } from "payload"

export const WizardSessions: CollectionConfig = {
  slug: "wizard-sessions",
  labels: { singular: "Wizard-Session", plural: "Wizard-Sessions" },
  admin: {
    useAsTitle: "sessionId",
    defaultColumns: ["sessionId", "furthestStep", "completed", "createdAt"],
    group: "Verwaltung",
    hidden: ({ user }) => user?.role !== "admin",
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => true,
    update: () => true,
    delete: ({ req: { user } }) => user?.role === "admin",
  },
  fields: [
    { name: "sessionId", label: "Session ID", type: "text", required: true, index: true },
    {
      name: "furthestStep",
      label: "Weitester Schritt",
      type: "select",
      defaultValue: "plan",
      options: [
        { label: "Plan", value: "plan" },
        { label: "Persönlich", value: "personal" },
        { label: "Zahlung", value: "payment" },
        { label: "Review", value: "review" },
        { label: "Abgeschlossen", value: "success" },
      ],
    },
    { name: "completed", label: "Abgeschlossen", type: "checkbox", defaultValue: false },
    { name: "userAgent", label: "User Agent", type: "text" },
    { name: "referrer", label: "Referrer", type: "text" },
  ],
}
