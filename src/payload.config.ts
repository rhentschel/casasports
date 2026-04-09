import { buildConfig } from "payload"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
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
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: " | Casa Sports Admin",
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
