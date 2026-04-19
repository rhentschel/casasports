import { NextResponse, type NextRequest } from "next/server"
import { getPayload } from "payload"
import config from "@payload-config"
import { MAGICLINE_CONFIG } from "@/data/magicline"
import { sendLeadNotification } from "@/lib/email"

export const dynamic = "force-dynamic"

type BookInput = {
  slotId: string
  firstname: string
  lastname: string
  email: string
  phone?: string
  message?: string
  source?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  let body: Partial<BookInput>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const slotId = (body.slotId ?? "").trim()
  const firstname = (body.firstname ?? "").trim()
  const lastname = (body.lastname ?? "").trim()
  const email = (body.email ?? "").trim().toLowerCase()
  const phone = (body.phone ?? "").trim()
  const message = (body.message ?? "").trim()
  const source = (body.source ?? "Probetraining Slot").trim()

  if (!slotId || !firstname || !lastname || !email) {
    return NextResponse.json(
      { error: "Slot, Vorname, Nachname und E-Mail sind Pflicht." },
      { status: 400 }
    )
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Bitte eine gueltige E-Mail-Adresse angeben." },
      { status: 400 }
    )
  }

  const bookingPayload = {
    studioId: MAGICLINE_CONFIG.studioId,
    timeslotId: slotId,
    firstname,
    lastname,
    email,
    ...(phone && { phone }),
    ...(message && { message }),
  }

  try {
    const res = await fetch(
      `${MAGICLINE_CONFIG.baseUrl}/connect/v1/trial-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(bookingPayload),
      }
    )

    if (!res.ok) {
      const errBody = await res.text()
      console.error("Trial booking error:", res.status, errBody)
      return NextResponse.json(
        {
          error:
            "Der gewuenschte Termin konnte nicht gebucht werden. Vielleicht ist er bereits vergeben.",
        },
        { status: 502 }
      )
    }

    const data = await res.json()

    const payloadClient = await getPayload({ config })
    try {
      await payloadClient.create({
        collection: "leads",
        data: {
          firstname,
          lastname,
          email,
          phone: phone || undefined,
          message: message
            ? `${message}\n\nGebuchter Slot: ${slotId}`
            : `Probetraining gebucht (Slot: ${slotId})`,
          source,
          magiclineLeadId: data?.id ? String(data.id) : undefined,
          status: "probetraining",
        },
        overrideAccess: true,
      })
    } catch (persistError) {
      console.error("Trial lead persist failed (non-blocking):", persistError)
    }

    try {
      await sendLeadNotification(
        {
          firstname,
          lastname,
          email,
          phone,
          message: `[Probetraining-Slot gebucht] ${message}`,
          source,
        },
        payloadClient
      )
    } catch (mailError) {
      console.error("Trial notification failed (non-blocking):", mailError)
    }

    return NextResponse.json({ ok: true, booking: data })
  } catch (error) {
    console.error("Trial booking unexpected error:", error)
    return NextResponse.json(
      { error: "Netzwerkfehler. Bitte versuche es erneut." },
      { status: 502 }
    )
  }
}
