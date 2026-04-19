import { NextResponse, type NextRequest } from "next/server"
import { MAGICLINE_CONFIG } from "@/data/magicline"

export const dynamic = "force-dynamic"
export const revalidate = 300

export type TrialSlot = {
  id: string
  start: string
  end: string
  staffName?: string
  available: boolean
}

export async function GET(request: NextRequest) {
  const fromParam = request.nextUrl.searchParams.get("from")
  const toParam = request.nextUrl.searchParams.get("to")

  const from = fromParam ? new Date(fromParam) : new Date()
  const to = toParam
    ? new Date(toParam)
    : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)

  if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) {
    return NextResponse.json(
      { error: "Ungültiges Datum" },
      { status: 400 }
    )
  }

  const params = new URLSearchParams({
    organizationUnitId: String(MAGICLINE_CONFIG.studioId),
    from: from.toISOString(),
    to: to.toISOString(),
  })

  try {
    const res = await fetch(
      `${MAGICLINE_CONFIG.baseUrl}/connect/v1/trial-session/available-timeslots?${params.toString()}`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
      }
    )

    if (res.status === 404 || res.status === 400) {
      return NextResponse.json({
        enabled: false,
        slots: [],
        message: "Slot-Buchung ist aktuell nicht aktiviert.",
      })
    }

    if (!res.ok) {
      console.error("Trial slots fetch failed:", res.status)
      return NextResponse.json({
        enabled: false,
        slots: [],
        message: "Slots konnten nicht geladen werden.",
      })
    }

    const data = (await res.json()) as Array<{
      id?: string | number
      startDateTime?: string
      endDateTime?: string
      start?: string
      end?: string
      staff?: { firstname?: string; lastname?: string }
      staffName?: string
      available?: boolean
    }>

    const slots: TrialSlot[] = (Array.isArray(data) ? data : [])
      .map((slot, idx) => ({
        id: String(slot.id ?? `${slot.startDateTime ?? slot.start ?? idx}`),
        start: slot.startDateTime ?? slot.start ?? "",
        end: slot.endDateTime ?? slot.end ?? "",
        staffName:
          slot.staffName ||
          (slot.staff
            ? [slot.staff.firstname, slot.staff.lastname].filter(Boolean).join(" ")
            : undefined),
        available: slot.available !== false,
      }))
      .filter((s) => s.start && s.end && s.available)

    return NextResponse.json({
      enabled: slots.length > 0,
      slots,
    })
  } catch (error) {
    console.error("Trial slots error:", error)
    return NextResponse.json({
      enabled: false,
      slots: [],
      message: "Netzwerkfehler beim Laden der Slots.",
    })
  }
}
