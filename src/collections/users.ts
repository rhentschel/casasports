import type { CollectionConfig } from "payload"

export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Benutzer", plural: "Benutzer" },
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      label: "Rolle",
      type: "select",
      defaultValue: "editor",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
    },
  ],
}
