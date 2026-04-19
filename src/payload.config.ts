import { buildConfig } from "payload"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { sql } from "drizzle-orm"
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
import { Leads } from "./collections/leads"
import { WizardSessions } from "./collections/wizard-sessions"
import { SiteSettings } from "./globals/site-settings"
import { Navigation } from "./globals/navigation"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const INIT_TABLES_SQL = [
  `CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone VARCHAR,
    message VARCHAR,
    source VARCHAR,
    magicline_lead_id VARCHAR,
    status VARCHAR DEFAULT 'neu',
    converted_to_signup_id INTEGER,
    updated_at TIMESTAMP(3) WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP(3) WITH TIME ZONE DEFAULT NOW()
  )`,
  `CREATE TABLE IF NOT EXISTS wizard_sessions (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR NOT NULL,
    furthest_step VARCHAR DEFAULT 'plan',
    completed BOOLEAN DEFAULT FALSE,
    user_agent VARCHAR,
    referrer VARCHAR,
    updated_at TIMESTAMP(3) WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP(3) WITH TIME ZONE DEFAULT NOW()
  )`,
  `CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email)`,
  `CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at)`,
  `CREATE INDEX IF NOT EXISTS wizard_sessions_session_id_idx ON wizard_sessions (session_id)`,
  `CREATE INDEX IF NOT EXISTS wizard_sessions_created_at_idx ON wizard_sessions (created_at)`,
  `ALTER TABLE payload_locked_documents_rels ADD COLUMN IF NOT EXISTS leads_id INTEGER`,
  `ALTER TABLE payload_locked_documents_rels ADD COLUMN IF NOT EXISTS wizard_sessions_id INTEGER`,
  `CREATE INDEX IF NOT EXISTS pld_rels_leads_id_idx ON payload_locked_documents_rels (leads_id)`,
  `CREATE INDEX IF NOT EXISTS pld_rels_wizard_sessions_id_idx ON payload_locked_documents_rels (wizard_sessions_id)`,
]

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  i18n: {
    supportedLanguages: { de },
    fallbackLanguage: "de",
  },
  onInit: async (payload) => {
    try {
      const db = payload.db as unknown as {
        drizzle?: { execute: (q: ReturnType<typeof sql>) => Promise<unknown> }
      }
      if (!db.drizzle) return
      for (const stmt of INIT_TABLES_SQL) {
        await db.drizzle.execute(sql.raw(stmt))
      }
      payload.logger.info("init-tables: leads + wizard_sessions ready")
    } catch (err) {
      payload.logger.error({ err }, "init-tables failed")
    }
  },
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " | Casa Sports Admin",
    },
    theme: "dark",
    components: {
      beforeNavLinks: ["/components/admin/DashboardLink#DashboardLink"],
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
    Leads,
    WizardSessions,
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
