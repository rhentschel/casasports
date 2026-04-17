import { NextResponse } from "next/server";
import { MAGICLINE_CONFIG } from "@/data/magicline";

export const revalidate = 300;

export async function GET() {
  try {
    const res = await fetch(
      `${MAGICLINE_CONFIG.baseUrl}/connect/v1/studio/${MAGICLINE_CONFIG.studioId}/utilization`,
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) {
      return NextResponse.json(
        { error: `Magicline utilization fetch failed: ${res.status}` },
        { status: 502 }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
