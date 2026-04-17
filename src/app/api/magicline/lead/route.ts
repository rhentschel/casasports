import { NextResponse, type NextRequest } from "next/server";
import { MAGICLINE_CONFIG } from "@/data/magicline";

export const dynamic = "force-dynamic";

type LeadInput = {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  message?: string;
  source?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: Partial<LeadInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const firstname = (body.firstname ?? "").trim();
  const lastname = (body.lastname ?? "").trim();
  const email = (body.email ?? "").trim().toLowerCase();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();
  const source = (body.source ?? "Website").trim();

  if (!firstname || !lastname || !email) {
    return NextResponse.json(
      { error: "Vorname, Nachname und E-Mail sind Pflichtfelder." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Bitte eine gueltige E-Mail-Adresse angeben." },
      { status: 400 }
    );
  }

  const payload = {
    studioId: MAGICLINE_CONFIG.studioId,
    firstname,
    lastname,
    email,
    ...(phone && { phone }),
    ...(message && { message: `[${source}] ${message}` }),
  };

  try {
    const res = await fetch(`${MAGICLINE_CONFIG.baseUrl}/connect/v1/lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Magicline lead error:", res.status, errBody);
      return NextResponse.json(
        { error: "Leider konnte deine Anfrage nicht verschickt werden. Bitte versuche es erneut." },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ ok: true, id: data.id, uuid: data.uuid });
  } catch (error) {
    console.error("Lead submit error:", error);
    return NextResponse.json(
      { error: "Netzwerkfehler. Bitte versuche es erneut." },
      { status: 502 }
    );
  }
}
