import { NextResponse, type NextRequest } from "next/server";
import { submitContract } from "@/lib/magicline-api";
import { createMembershipSignup } from "@/lib/payload-data";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const result = await submitContract(payload);

    // Nach erfolgreichem MagicLine-Abschluss in Payload speichern
    try {
      const customer = payload.customer || {};
      const rateBundle = payload.rateBundle || {};
      const term = payload.term || {};

      await createMembershipSignup({
        contractId: (result as any)?.contractId?.toString() || null,
        customerId: (result as any)?.customerId?.toString() || null,
        customerName: `${customer.firstName || ""} ${customer.lastName || ""}`.trim() || "Unbekannt",
        email: customer.email || null,
        phone: customer.mobileNumber || customer.phoneNumber || null,
        plan: rateBundle.name || "Unbekannt",
        termMonths: term.termValue || null,
        monthlyPrice: term.price || null,
        magiclineResponse: result,
      });
    } catch (dbError) {
      console.error("Payload storage failed (non-blocking):", dbError);
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Contract submit error:", error);
    const message =
      error instanceof Error ? error.message : "Vertragsabschluss fehlgeschlagen";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
