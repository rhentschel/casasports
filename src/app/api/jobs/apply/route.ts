import { NextResponse } from "next/server";

interface ApplicationPayload {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  privacy: boolean;
}

export async function POST(request: Request) {
  try {
    const body: ApplicationPayload = await request.json();

    if (
      !body.name?.trim() ||
      !body.email?.trim() ||
      !body.phone?.trim() ||
      !body.position?.trim() ||
      !body.message?.trim() ||
      !body.privacy
    ) {
      return NextResponse.json(
        { error: "Bitte alle Pflichtfelder ausfuellen." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Ungueltige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    const positionLabels: Record<string, string> = {
      fitnesstrainer: "Fitnesstrainer/in",
      kursleiter: "Kursleiter/in",
      azubi: "Auszubildende/r",
      empfang: "Empfang & Kundenbetreuung",
      initiativ: "Initiativbewerbung",
    };

    const positionLabel = positionLabels[body.position] || body.position;

    console.log("=== NEUE BEWERBUNG ===");
    console.log(`Name: ${body.name}`);
    console.log(`E-Mail: ${body.email}`);
    console.log(`Telefon: ${body.phone}`);
    console.log(`Stelle: ${positionLabel}`);
    console.log(`Nachricht: ${body.message}`);
    console.log(`Datenschutz: ${body.privacy ? "Zugestimmt" : "Nein"}`);
    console.log(`Datum: ${new Date().toISOString()}`);
    console.log("======================");

    // Store to Supabase if configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        await fetch(`${supabaseUrl}/rest/v1/job_applications`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: "return=minimal",
          },
          body: JSON.stringify({
            name: body.name.trim(),
            email: body.email.trim(),
            phone: body.phone.trim(),
            position: body.position,
            position_label: positionLabel,
            message: body.message.trim(),
            created_at: new Date().toISOString(),
          }),
        });
      } catch (dbError) {
        console.error("Supabase storage failed (non-blocking):", dbError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Bewerbung erfolgreich gesendet.",
    });
  } catch {
    console.error("Application submission failed");
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}
