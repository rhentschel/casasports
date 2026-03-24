import { NextResponse } from "next/server";
import { fetchSepaAgreement } from "@/lib/magicline-api";

export const revalidate = 86400;

export async function GET() {
  try {
    const text = await fetchSepaAgreement();
    return NextResponse.json({ text });
  } catch (error) {
    console.error("SEPA agreement error:", error);
    return NextResponse.json(
      { error: "SEPA-Mandat konnte nicht geladen werden" },
      { status: 502 }
    );
  }
}
