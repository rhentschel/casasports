import { buildConfig } from "payload"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { nodemailerAdapter } from "@payloadcms/email-nodemailer"
import { de } from "@payloadcms/translations/languages/de"
import sharp from "sharp"
import path from "path"
import { fileURLToPath } from "url"

import { Users } from "./collections/users"
import { Media } from "./collections/media"
import { Posts } from "./collections/blog/posts"
import { Categories } from "./collections/blog/categories"
import { Authors } from "./collections/blog/authors"
import { TopicClusters } from "./collections/blog/topic-clusters"
import { TeamMembers } from "./collections/team-members"
import { Courses } from "./collections/courses"
import { JobPositions } from "./collections/jobs/positions"
import { JobApplications } from "./collections/jobs/applications"
import { MembershipSignups } from "./collections/membership-signups"
import { SiteSettings } from "./globals/site-settings"
import { Navigation } from "./globals/navigation"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  i18n: {
    supportedLanguages: { de },
    fallbackLanguage: "de",
  },
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " | Casa Sports Admin",
    },
    theme: "dark",
    components: {
      beforeDashboard: ["/components/admin/BeforeDashboard#BeforeDashboard"],
      graphics: {
        Logo: "/components/admin/Logo#Logo",
        Icon: "/components/admin/Icon#Icon",
      },
      views: {
        login: {
          Component: "/components/admin/LoginView#LoginView",
        },
      },
    },
  },
  collections: [
    Users,
    Media,
    Posts,
    Categories,
    Authors,
    TopicClusters,
    TeamMembers,
    Courses,
    JobPositions,
    JobApplications,
    MembershipSignups,
  ],
  globals: [SiteSettings, Navigation],
  editor: lexicalEditor(),
  email: process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD
    ? nodemailerAdapter({
        defaultFromAddress: process.env.EMAIL_FROM_ADDRESS || "info@casasports.de",
        defaultFromName: process.env.EMAIL_FROM_NAME || "Casa Sports",
        transportOptions: {
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "465", 10),
          secure: parseInt(process.env.SMTP_PORT || "465", 10) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        },
      })
    : undefined,
  db: postgresAdapter({
    push: true,
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  secret: process.env.PAYLOAD_SECRET || "casasports-dev-secret-change-me",
})
