import { buildConfig } from "payload"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import sharp from "sharp"
import path from "path"
import { fileURLToPath } from "url"

import { Users } from "./collections/users.ts"
import { Media } from "./collections/media.ts"
import { Posts } from "./collections/blog/posts.ts"
import { Categories } from "./collections/blog/categories.ts"
import { Authors } from "./collections/blog/authors.ts"
import { TopicClusters } from "./collections/blog/topic-clusters.ts"
import { TeamMembers } from "./collections/team-members.ts"
import { Courses } from "./collections/courses.ts"
import { JobPositions } from "./collections/jobs/positions.ts"
import { JobApplications } from "./collections/jobs/applications.ts"
import { MembershipSignups } from "./collections/membership-signups.ts"
import { SiteSettings } from "./globals/site-settings.ts"
import { Navigation } from "./globals/navigation.ts"

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
