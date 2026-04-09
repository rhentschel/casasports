import type { GlobalConfig } from "payload"

export const Navigation: GlobalConfig = {
  slug: "navigation",
  label: "Navigation",
  fields: [
    {
      name: "mainNav",
      type: "array",
      label: "Hauptnavigation",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
      ],
    },
  ],
}
