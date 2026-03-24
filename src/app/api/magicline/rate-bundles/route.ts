import { NextResponse } from "next/server";
import { fetchRateBundles } from "@/lib/magicline-api";

export const revalidate = 0;

export async function GET() {
  try {
    const bundles = await fetchRateBundles();
    return NextResponse.json(bundles);
  } catch (error) {
    console.error("Rate bundles error:", error);
    return NextResponse.json(
      { error: "Tarife konnten nicht geladen werden" },
      { status: 502 }
    );
  }
}
