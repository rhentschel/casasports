import { NextResponse, type NextRequest } from "next/server";
import { submitContract } from "@/lib/magicline-api";
import { createMembershipSignup } from "@/lib/payload-data";
import { sendMembershipNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const result = await submitContract(payload);

    const customer = payload.customer || {};
    const rateBundle = payload.rateBundle || {};
    const term = payload.term || {};

    const signupData = {
      contractId: (result as any)?.contractId?.toString() || null,
      customerId: (result as any)?.customerId?.toString() || null,
      customerName:
        `${customer.firstName || customer.firstname || ""} ${customer.lastName || customer.lastname || ""}`.trim() ||
        "Unbekannt",
      email: customer.email || null,
      phone: customer.mobileNumber || customer.phoneNumber || customer.phone || null,
      plan: rateBundle.name || "Unbekannt",
      termMonths: term.termValue || null,
      monthlyPrice: term.price || null,
    };

    // Payload speichern (non-blocking)
    try {
      await createMembershipSignup({ ...signupData, magiclineResponse: result });
    } catch (dbError) {
      console.error("Payload storage failed (non-blocking):", dbError);
    }

    // E-Mail Benachrichtigung (non-blocking)
    try {
      await sendMembershipNotification(signupData);
    } catch (mailError) {
      console.error("Email notification failed (non-blocking):", mailError);
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Contract submit error:", error);
    const message =
      error instanceof Error ? error.message : "Vertragsabschluss fehlgeschlagen";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
