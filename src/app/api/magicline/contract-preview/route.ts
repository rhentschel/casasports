import { NextResponse, type NextRequest } from "next/server";
import { createContractPreview } from "@/lib/magicline-api";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const result = await createContractPreview(payload);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Contract preview error:", error);
    const message =
      error instanceof Error ? error.message : "Vertragsvorschau fehlgeschlagen";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
