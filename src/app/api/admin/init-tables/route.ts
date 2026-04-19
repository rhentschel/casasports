import { NextResponse } from "next/server"
import { getPayload } from "payload"
import { headers as nextHeaders } from "next/headers"
import config from "@payload-config"
import { sql } from "drizzle-orm"

export const dynamic = "force-dynamic"

const SCHEMA = [
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
  `CREATE INDEX IF NOT EXISTS wizard_sessions_session_id_idx ON wizard_sessions (session_id)`,
  `CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email)`,
  `CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at)`,
  `CREATE INDEX IF NOT EXISTS wizard_sessions_created_at_idx ON wizard_sessions (created_at)`,
]

export async function POST() {
  const payload = await getPayload({ config })
  const h = await nextHeaders()
  const { user } = await payload.auth({ headers: h })

  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const db = payload.db as unknown as {
    drizzle: { execute: (q: ReturnType<typeof sql>) => Promise<unknown> }
  }

  const results: Array<{ sql: string; ok: boolean; error?: string }> = []

  for (const stmt of SCHEMA) {
    try {
      await db.drizzle.execute(sql.raw(stmt))
      results.push({ sql: stmt.slice(0, 80), ok: true })
    } catch (err) {
      results.push({
        sql: stmt.slice(0, 80),
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      })
    }
  }

  return NextResponse.json({ results })
}
