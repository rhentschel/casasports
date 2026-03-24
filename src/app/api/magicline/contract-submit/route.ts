import { NextResponse, type NextRequest } from "next/server";
import { submitContract } from "@/lib/magicline-api";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const result = await submitContract(payload);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Contract submit error:", error);
    const message =
      error instanceof Error ? error.message : "Vertragsabschluss fehlgeschlagen";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
