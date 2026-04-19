import { NextResponse } from "next/server";
import { createJobApplication, uploadCv } from "@/lib/payload-data";

export const dynamic = "force-dynamic";

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

const ALLOWED_CV_MIMES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_CV_SIZE = 8 * 1024 * 1024; // 8 MB

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    // Legacy JSON support (Forms ohne Datei) + FormData support fuer CV-Upload
    let name = "";
    let email = "";
    let phone = "";
    let position = "";
    let experience = "";
    let availability = "";
    let startDate = "";
    let message = "";
    let privacy = false;
    let cvFile: File | null = null;

    if (contentType.startsWith("multipart/form-data")) {
      const form = await request.formData();
      name = String(form.get("name") ?? "");
      email = String(form.get("email") ?? "");
      phone = String(form.get("phone") ?? "");
      position = String(form.get("position") ?? "");
      experience = String(form.get("experience") ?? "");
      availability = String(form.get("availability") ?? "");
      startDate = String(form.get("startDate") ?? "");
      message = String(form.get("message") ?? "");
      privacy = form.get("privacy") === "true";
      const fileEntry = form.get("cv");
      if (fileEntry instanceof File && fileEntry.size > 0) {
        cvFile = fileEntry;
      }
    } else {
      const body = await request.json();
      name = body.name ?? "";
      email = body.email ?? "";
      phone = body.phone ?? "";
      position = body.position ?? "";
      experience = body.experience ?? "";
      availability = body.availability ?? "";
      startDate = body.startDate ?? "";
      message = body.message ?? "";
      privacy = !!body.privacy;
    }

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !position.trim() ||
      !message.trim() ||
      !privacy
    ) {
      return NextResponse.json(
        { error: "Bitte alle Pflichtfelder ausfuellen." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Ungueltige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    // CV validation
    let cvId: number | string | null = null;
    if (cvFile) {
      if (!ALLOWED_CV_MIMES.includes(cvFile.type)) {
        return NextResponse.json(
          { error: "Lebenslauf muss PDF, DOC oder DOCX sein." },
          { status: 400 }
        );
      }
      if (cvFile.size > MAX_CV_SIZE) {
        return NextResponse.json(
          { error: "Lebenslauf maximal 8 MB gross." },
          { status: 400 }
        );
      }

      const arrayBuffer = await cvFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      cvId = await uploadCv(
        buffer,
        cvFile.name,
        cvFile.type,
        name.trim(),
        cvFile.size
      );
    }

    const positionLabel = positionLabels[position] || position;
    const experienceLabel = experienceLabels[experience] || experience || "Nicht angegeben";
    const availabilityLabel = availabilityLabels[availability] || availability || "Nicht angegeben";

    console.log("=== NEUE BEWERBUNG ===");
    console.log(`Name: ${name}`);
    console.log(`E-Mail: ${email}`);
    console.log(`Stelle: ${positionLabel}`);
    console.log(`CV: ${cvFile ? cvFile.name : "keiner"}`);
    console.log("======================");

    await createJobApplication({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      position: positionLabel,
      experience: experience ? experienceLabel : null,
      availability: availability ? availabilityLabel : null,
      startDate: startDate || null,
      message: message.trim(),
      ...(cvId ? { cv: cvId } : {}),
    });

    return NextResponse.json({
      success: true,
      message: "Bewerbung erfolgreich gesendet.",
    });
  } catch (error) {
    console.error("Application submission failed:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}
