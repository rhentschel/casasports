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
const ALLOWED_CV_EXTENSIONS = ["pdf", "doc", "docx"] as const;
const MAX_CV_SIZE = 8 * 1024 * 1024; // 8 MB

/**
 * Magic-Byte-Check: verifiziert anhand der ersten Bytes, dass die Datei
 * wirklich das behauptete Format hat. MIME-Type allein reicht nicht, weil
 * er Client-kontrolliert ist.
 */
function verifyFileMagic(buffer: Buffer, extension: string): boolean {
  if (buffer.length < 8) return false;

  // PDF: "%PDF-" (25 50 44 46 2D)
  if (extension === "pdf") {
    return (
      buffer[0] === 0x25 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x44 &&
      buffer[3] === 0x46 &&
      buffer[4] === 0x2d
    );
  }

  // DOCX: ZIP-Header "PK\x03\x04" (50 4B 03 04)
  if (extension === "docx") {
    return (
      buffer[0] === 0x50 &&
      buffer[1] === 0x4b &&
      buffer[2] === 0x03 &&
      buffer[3] === 0x04
    );
  }

  // DOC (legacy): Compound File Binary "D0 CF 11 E0 A1 B1 1A E1"
  if (extension === "doc") {
    return (
      buffer[0] === 0xd0 &&
      buffer[1] === 0xcf &&
      buffer[2] === 0x11 &&
      buffer[3] === 0xe0 &&
      buffer[4] === 0xa1 &&
      buffer[5] === 0xb1 &&
      buffer[6] === 0x1a &&
      buffer[7] === 0xe1
    );
  }

  return false;
}

/**
 * Entfernt path traversal, special chars und control chars.
 * Erzwingt nur a-z 0-9 . _ - und begrenzt Laenge.
 */
function sanitizeFilename(raw: string): string {
  const base = raw.split(/[\\/]/).pop() || "lebenslauf";
  const cleaned = base
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // Diakritika
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^[-.]+|[-.]+$/g, "");
  const truncated = cleaned.length > 120 ? cleaned.slice(0, 120) : cleaned;
  return truncated || "lebenslauf.pdf";
}

function getExtension(filename: string): string {
  const m = filename.toLowerCase().match(/\.([a-z0-9]+)$/);
  return m ? m[1] : "";
}

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
      // 1. MIME-Type whitelist (Client-kontrolliert, aber erster Filter)
      if (!ALLOWED_CV_MIMES.includes(cvFile.type)) {
        return NextResponse.json(
          { error: "Lebenslauf muss PDF, DOC oder DOCX sein." },
          { status: 400 }
        );
      }

      // 2. Size Limit
      if (cvFile.size > MAX_CV_SIZE) {
        return NextResponse.json(
          { error: "Lebenslauf maximal 8 MB gross." },
          { status: 400 }
        );
      }
      if (cvFile.size === 0) {
        return NextResponse.json(
          { error: "Leere Datei." },
          { status: 400 }
        );
      }

      // 3. Extension whitelist
      const ext = getExtension(cvFile.name);
      if (!ALLOWED_CV_EXTENSIONS.includes(ext as (typeof ALLOWED_CV_EXTENSIONS)[number])) {
        return NextResponse.json(
          { error: "Dateiendung muss .pdf, .doc oder .docx sein." },
          { status: 400 }
        );
      }

      // 4. Magic-Byte-Check - verifiziert echtes Format (schuetzt vor
      // umbenannten Dateien z.B. JS-Payload als evil.pdf)
      const arrayBuffer = await cvFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      if (!verifyFileMagic(buffer, ext)) {
        return NextResponse.json(
          {
            error:
              "Dateiinhalt passt nicht zur Endung. Bitte echte PDF/DOC/DOCX hochladen.",
          },
          { status: 400 }
        );
      }

      // 5. Filename sanitize (path traversal + special chars raus)
      const safeName = sanitizeFilename(cvFile.name);

      cvId = await uploadCv(
        buffer,
        safeName,
        cvFile.type,
        name.trim().slice(0, 100),
        cvFile.size
      );

      if (!cvId) {
        return NextResponse.json(
          { error: "Lebenslauf konnte nicht gespeichert werden." },
          { status: 500 }
        );
      }
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
