import { NextResponse, type NextRequest } from "next/server"
import { submitContract } from "@/lib/magicline-api"
import { createMembershipSignup } from "@/lib/payload-data"

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()

    // _meta separat behandeln (nicht an Magicline senden)
    const { _meta, ...magiclinePayload } = payload

    const result = await submitContract(magiclinePayload)

    const customer = magiclinePayload.customer || {}
    const meta = _meta || {}

    const signupData = {
      contractId: (result as any)?.contractId?.toString() || null,
      customerId: (result as any)?.customerId?.toString() || null,
      customerName:
        `${customer.firstName || customer.firstname || ""} ${customer.lastName || customer.lastname || ""}`.trim() ||
        "Unbekannt",
      email: customer.email || null,
      phone:
        customer.mobileNumber ||
        customer.phoneNumber ||
        customer.phone ||
        null,
      plan: meta.rateBundleName || "Unbekannt",
      termMonths: typeof meta.termValue === "number" ? meta.termValue : null,
      monthlyPrice: typeof meta.price === "number" ? meta.price : null,
    }

    // Payload speichern → afterChange Hook triggered E-Mail automatisch
    try {
      await createMembershipSignup({ ...signupData, magiclineResponse: result })
    } catch (dbError) {
      console.error("Payload storage failed (non-blocking):", dbError)
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Contract submit error:", error)
    const message =
      error instanceof Error ? error.message : "Vertragsabschluss fehlgeschlagen"
    return NextResponse.json({ error: message }, { status: 502 })
  }
}
