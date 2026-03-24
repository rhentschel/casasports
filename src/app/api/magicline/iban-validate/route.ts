import { NextResponse, type NextRequest } from "next/server";
import { validateIban } from "@/lib/magicline-api";

export async function GET(request: NextRequest) {
  const iban = request.nextUrl.searchParams.get("iban");

  if (!iban || iban.replace(/\s/g, "").length < 15) {
    return NextResponse.json(
      { error: "IBAN ist zu kurz" },
      { status: 400 }
    );
  }

  try {
    const result = await validateIban(iban);
    return NextResponse.json(result);
  } catch (error) {
    console.error("IBAN validation error:", error);
    return NextResponse.json(
      { error: "IBAN konnte nicht validiert werden" },
      { status: 502 }
    );
  }
}
