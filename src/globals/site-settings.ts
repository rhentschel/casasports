import type { GlobalConfig } from "payload"

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Einstellungen",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      defaultValue: "Casa Sports",
    },
    {
      name: "tagline",
      type: "text",
      defaultValue: "MEIN NEUES ICH",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "owner",
      type: "text",
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "taxId",
      type: "text",
    },
    {
      name: "address",
      type: "group",
      fields: [
        { name: "street", type: "text", required: true },
        { name: "zip", type: "text", required: true },
        { name: "city", type: "text", required: true },
        { name: "country", type: "text", defaultValue: "Deutschland" },
      ],
    },
    {
      name: "social",
      type: "group",
      fields: [
        { name: "instagram", type: "text" },
        { name: "facebook", type: "text" },
      ],
    },
    {
      name: "rating",
      type: "group",
      fields: [
        { name: "score", type: "number" },
        { name: "max", type: "number", defaultValue: 5 },
        { name: "label", type: "text" },
      ],
    },
  ],
}
