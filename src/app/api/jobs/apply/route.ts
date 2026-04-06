import { NextResponse } from "next/server";

interface ApplicationPayload {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  availability: string;
  startDate: string;
  message: string;
  privacy: boolean;
}

const positionLabels: Record<string, string> = {
  fitnesstrainer: "Fitnesstrainer/in",
  kursleiter: "Kursleiter/in",
  azubi: "Auszubildende/r",
  empfang: "Empfang & Kundenbetreuung",
  initiativ: "Initiativbewerbung",
};

const experienceLabels: Record<string, string> = {
  none: "Keine / Quereinsteiger",
  beginner: "Unter 1 Jahr",
  intermediate: "1-3 Jahre",
  experienced: "3-5 Jahre",
  expert: "Ueber 5 Jahre",
};

const availabilityLabels: Record<string, string> = {
  fulltime: "Vollzeit",
  parttime: "Teilzeit",
  minijob: "Minijob (520 EUR)",
  freelance: "Freiberuflich / Honorar",
  training: "Ausbildung",
};

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

    const positionLabel = positionLabels[body.position] || body.position;
    const experienceLabel = experienceLabels[body.experience] || body.experience || "Nicht angegeben";
    const availabilityLabel = availabilityLabels[body.availability] || body.availability || "Nicht angegeben";

    console.log("=== NEUE BEWERBUNG ===");
    console.log(`Name: ${body.name}`);
    console.log(`E-Mail: ${body.email}`);
    console.log(`Telefon: ${body.phone}`);
    console.log(`Stelle: ${positionLabel}`);
    console.log(`Erfahrung: ${experienceLabel}`);
    console.log(`Verfuegbarkeit: ${availabilityLabel}`);
    console.log(`Fruehester Start: ${body.startDate || "Nicht angegeben"}`);
    console.log(`Nachricht: ${body.message}`);
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
            experience: body.experience || null,
            experience_label: body.experience ? experienceLabel : null,
            availability: body.availability || null,
            availability_label: body.availability ? availabilityLabel : null,
            start_date: body.startDate || null,
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
