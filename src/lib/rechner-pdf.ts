"use client";

import { jsPDF } from "jspdf";

export type PdfSection = {
  title: string;
  rows: { label: string; value: string }[];
};

export type PdfConfig = {
  title: string;
  subtitle: string;
  resultLarge: string;
  resultUnit?: string;
  resultLabel?: string;
  sections: PdfSection[];
  recommendation?: string;
};

const COLORS = {
  black: [10, 10, 10] as [number, number, number],
  accent: [230, 57, 70] as [number, number, number],
  gold: [200, 169, 110] as [number, number, number],
  white: [245, 245, 240] as [number, number, number],
  textMuted: [100, 100, 100] as [number, number, number],
  textBody: [40, 40, 40] as [number, number, number],
  border: [220, 220, 220] as [number, number, number],
  lightBg: [248, 248, 246] as [number, number, number],
};

export function generateRechnerPdf(config: PdfConfig): jsPDF {
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  // === HEADER ===
  doc.setFillColor(...COLORS.black);
  doc.rect(0, 0, pageWidth, 32, "F");

  // Casa Sports Logo (Text-Variante, da kein PNG eingebunden ist)
  doc.setTextColor(...COLORS.white);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("CASA SPORTS", margin, 19);

  // Accent-Linie
  doc.setFillColor(...COLORS.accent);
  doc.rect(margin, 22, 16, 1.2, "F");

  // Datum oben rechts
  doc.setTextColor(180, 180, 180);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  const date = new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  doc.text(date.toUpperCase(), pageWidth - margin, 19, { align: "right" });

  // === TITEL ===
  let y = 50;

  doc.setTextColor(...COLORS.accent);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text(config.subtitle.toUpperCase(), margin, y);

  y += 8;
  doc.setTextColor(...COLORS.black);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text(config.title, margin, y);

  // === ERGEBNIS-BLOCK ===
  y += 16;
  doc.setFillColor(...COLORS.lightBg);
  doc.rect(margin, y, contentWidth, 42, "F");
  doc.setDrawColor(...COLORS.border);
  doc.setLineWidth(0.3);
  doc.rect(margin, y, contentWidth, 42, "S");

  // Roter Strich links
  doc.setFillColor(...COLORS.accent);
  doc.rect(margin, y, 2, 42, "F");

  doc.setTextColor(...COLORS.textMuted);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("DEIN ERGEBNIS", margin + 8, y + 10);

  doc.setTextColor(...COLORS.black);
  doc.setFontSize(36);
  doc.setFont("helvetica", "bold");
  // Breite bei aktueller Schriftgroesse (36) merken, BEVOR sie geaendert wird
  const resultWidth = doc.getTextWidth(config.resultLarge);
  const resultBaselineY = y + 28;
  doc.text(config.resultLarge, margin + 8, resultBaselineY);

  if (config.resultUnit) {
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...COLORS.textMuted);
    // Einheit auf gleicher Baseline, aber 4mm Abstand nach der Zahl
    doc.text(config.resultUnit, margin + 8 + resultWidth + 4, resultBaselineY);
  }

  if (config.resultLabel) {
    doc.setTextColor(...COLORS.accent);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(config.resultLabel.toUpperCase(), margin + 8, y + 36);
  }

  y += 56;

  // === DETAIL-SEKTIONEN ===
  for (const section of config.sections) {
    if (y > pageHeight - 60) {
      doc.addPage();
      y = 30;
    }

    doc.setTextColor(...COLORS.accent);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text(section.title.toUpperCase(), margin, y);

    y += 3;
    doc.setDrawColor(...COLORS.border);
    doc.setLineWidth(0.2);
    doc.line(margin, y, pageWidth - margin, y);

    y += 7;

    for (const row of section.rows) {
      doc.setTextColor(...COLORS.textMuted);
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.text(row.label, margin, y);

      doc.setTextColor(...COLORS.black);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text(row.value, pageWidth - margin, y, { align: "right" });

      y += 7;
    }

    y += 6;
  }

  // === EMPFEHLUNG ===
  if (config.recommendation) {
    if (y > pageHeight - 80) {
      doc.addPage();
      y = 30;
    }

    doc.setFillColor(...COLORS.black);
    doc.rect(margin, y, contentWidth, 38, "F");

    doc.setTextColor(...COLORS.gold);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text("UNSERE EMPFEHLUNG", margin + 6, y + 8);

    doc.setTextColor(...COLORS.white);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(config.recommendation, contentWidth - 12);
    doc.text(lines, margin + 6, y + 16);

    y += 50;
  }

  // === FOOTER ===
  const footerY = pageHeight - 24;

  doc.setDrawColor(...COLORS.border);
  doc.setLineWidth(0.2);
  doc.line(margin, footerY - 4, pageWidth - margin, footerY - 4);

  doc.setTextColor(...COLORS.textMuted);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("CASA SPORTS", margin, footerY);

  doc.setFont("helvetica", "normal");
  doc.text("Karlstrasse 40 · 45739 Oer-Erkenschwick", margin, footerY + 4);
  doc.text("Tel. 02368 57060 · info@casasports.de", margin, footerY + 8);

  doc.setTextColor(...COLORS.accent);
  doc.setFont("helvetica", "bold");
  doc.text("DEIN ERSTES TRAINING IST GRATIS", pageWidth - margin, footerY, { align: "right" });
  doc.setTextColor(...COLORS.textMuted);
  doc.setFont("helvetica", "normal");
  doc.text("sport.casasports.de/probetraining", pageWidth - margin, footerY + 4, { align: "right" });

  return doc;
}

export function downloadPdf(doc: jsPDF, filename: string) {
  doc.save(filename);
}
