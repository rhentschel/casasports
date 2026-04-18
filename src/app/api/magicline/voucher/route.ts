import { NextResponse, type NextRequest } from "next/server";
import { MAGICLINE_CONFIG } from "@/data/magicline";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code")?.trim();

  if (!code) {
    return NextResponse.json(
      { valid: false, error: "Gutschein-Code fehlt." },
      { status: 400 }
    );
  }

  if (!/^[A-Za-z0-9_-]{1,64}$/.test(code)) {
    return NextResponse.json(
      { valid: false, error: "Ungueltiges Gutschein-Format." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `${MAGICLINE_CONFIG.baseUrl}/connect/v1/contractvoucher/${encodeURIComponent(code)}/validate?organizationUnitId=${MAGICLINE_CONFIG.studioId}`,
      {
        headers: { Accept: "application/json" },
        cache: "no-store",
      }
    );

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({ valid: true, code, voucher: data });
    }

    if (res.status === 400 || res.status === 404) {
      return NextResponse.json({
        valid: false,
        code,
        error: "Dieser Gutschein-Code ist nicht gueltig.",
      });
    }

    return NextResponse.json(
      { valid: false, error: "Gutschein konnte nicht geprueft werden." },
      { status: 502 }
    );
  } catch (error) {
    console.error("Voucher validation error:", error);
    return NextResponse.json(
      { valid: false, error: "Netzwerkfehler bei der Gutschein-Pruefung." },
      { status: 502 }
    );
  }
}
