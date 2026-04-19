import { NextResponse, type NextRequest } from "next/server"
import { getPayload } from "payload"
import config from "@payload-config"

export const dynamic = "force-dynamic"

const STEPS = ["plan", "personal", "payment", "review", "success"] as const
type Step = (typeof STEPS)[number]

function stepIndex(step: string): number {
  return STEPS.indexOf(step as Step)
}

function isValidStep(step: string): step is Step {
  return STEPS.includes(step as Step)
}

export async function POST(request: NextRequest) {
  let body: { sessionId?: string; step?: string; referrer?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const sessionId = (body.sessionId ?? "").trim()
  const step = (body.step ?? "").trim()

  if (!sessionId || !isValidStep(step)) {
    return NextResponse.json({ error: "sessionId und gültiger step erforderlich" }, { status: 400 })
  }

  if (!/^[a-zA-Z0-9_-]{8,64}$/.test(sessionId)) {
    return NextResponse.json({ error: "Ungültige Session ID" }, { status: 400 })
  }

  try {
    const payloadClient = await getPayload({ config })

    const existing = await payloadClient.find({
      collection: "wizard-sessions",
      where: { sessionId: { equals: sessionId } },
      limit: 1,
      overrideAccess: true,
    })

    const userAgent = request.headers.get("user-agent") || undefined
    const referrer = body.referrer?.trim() || request.headers.get("referer") || undefined

    if (existing.docs.length === 0) {
      await payloadClient.create({
        collection: "wizard-sessions",
        data: {
          sessionId,
          furthestStep: step,
          completed: step === "success",
          userAgent,
          referrer,
        },
        overrideAccess: true,
      })
    } else {
      const doc = existing.docs[0] as { id: string | number; furthestStep: string; completed?: boolean }
      const currentIdx = stepIndex(doc.furthestStep)
      const newIdx = stepIndex(step)

      if (newIdx > currentIdx || (step === "success" && !doc.completed)) {
        await payloadClient.update({
          collection: "wizard-sessions",
          id: doc.id,
          data: {
            furthestStep: newIdx > currentIdx ? step : doc.furthestStep,
            completed: step === "success" ? true : !!doc.completed,
          },
          overrideAccess: true,
        })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Wizard track error:", error)
    return NextResponse.json({ ok: false }, { status: 200 })
  }
}
