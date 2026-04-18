import nodemailer, { type Transporter } from "nodemailer";

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;
const from = process.env.EMAIL_FROM || "Casa Sports <info@casasports.de>";
const adminEmail = process.env.ADMIN_EMAIL || "info@casasports.de";

const secure = port === 465;

let transporter: Transporter | null = null;
function getTransporter(): Transporter | null {
  if (transporter) return transporter;
  if (!host || !user || !pass) return null;
  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
  return transporter;
}

type SendArgs = {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
};

async function send({ to, subject, html, replyTo }: SendArgs): Promise<void> {
  const tx = getTransporter();
  if (!tx) {
    console.log("[email:noop]", { to, subject, smtpConfigured: false });
    return;
  }
  try {
    await tx.sendMail({
      from,
      to,
      subject,
      html,
      ...(replyTo && { replyTo }),
    });
  } catch (err) {
    console.error("[email:error]", err);
  }
}

function escapeHtml(v: unknown): string {
  if (v === null || v === undefined) return "";
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function layout(title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8"/>
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#f5f5f0;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0a0a0a;padding:40px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#0f0f0f;border:1px solid rgba(255,255,255,0.06);">
<tr><td style="padding:32px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
<p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#e63946;font-weight:500;">Casa Sports</p>
<h1 style="margin:8px 0 0;font-size:22px;letter-spacing:-0.02em;color:#f5f5f0;font-weight:900;text-transform:uppercase;">${escapeHtml(title)}</h1>
</td></tr>
<tr><td style="padding:32px 40px;">${content}</td></tr>
<tr><td style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);font-size:11px;color:rgba(255,255,255,0.3);">
Automatische Nachricht von sport.casasports.de — nicht direkt antworten.
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

function formatPrice(n: number | null | undefined): string {
  if (typeof n !== "number") return "—";
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(n);
}

type MembershipData = {
  customerName: string;
  email?: string | null;
  phone?: string | null;
  plan: string;
  termMonths?: number | null;
  monthlyPrice?: number | null;
  contractId?: string | null;
  customerId?: string | null;
};

export async function sendMembershipNotification(data: MembershipData): Promise<void> {
  const rows = [
    ["Kundenname", data.customerName],
    ["E-Mail", data.email || "—"],
    ["Telefon", data.phone || "—"],
    ["Tarif", data.plan],
    ["Laufzeit", data.termMonths ? `${data.termMonths} Monate` : "—"],
    ["Monatsbeitrag", formatPrice(data.monthlyPrice)],
    ["Magicline Vertragsnr.", data.contractId || "—"],
    ["Magicline Kundennr.", data.customerId || "—"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:12px;color:rgba(255,255,255,0.5);width:180px;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;color:#f5f5f0;font-weight:500;">${escapeHtml(value)}</td>
    </tr>`
    )
    .join("");

  const content = `
    <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.7);">
      Ein neuer Vertrag wurde ueber sport.casasports.de abgeschlossen.
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">${tableRows}</table>
    <p style="margin:24px 0 0;font-size:12px;color:rgba(255,255,255,0.5);">
      <a href="https://sport.casasports.de/intern/dashboard" style="color:#e63946;text-decoration:none;">Dashboard oeffnen</a>
      ·
      <a href="https://sport.casasports.de/admin/collections/membership-signups" style="color:#e63946;text-decoration:none;">Im Admin anzeigen</a>
    </p>`;

  await send({
    to: adminEmail,
    subject: `Neue Mitgliedschaft: ${data.customerName} (${data.plan})`,
    html: layout("Neue Mitgliedschaft", content),
    replyTo: data.email || undefined,
  });
}

type LeadData = {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  message?: string;
  source?: string;
};

export async function sendLeadNotification(data: LeadData): Promise<void> {
  const rows = [
    ["Name", `${data.firstname} ${data.lastname}`],
    ["E-Mail", data.email],
    ["Telefon", data.phone || "—"],
    ["Quelle", data.source || "Website"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:12px;color:rgba(255,255,255,0.5);width:140px;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;color:#f5f5f0;font-weight:500;">${escapeHtml(value)}</td>
    </tr>`
    )
    .join("");

  const messageBlock = data.message
    ? `
    <div style="margin-top:24px;padding:16px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.015);">
      <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.4);">Nachricht</p>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#f5f5f0;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
    </div>`
    : "";

  const content = `
    <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.7);">
      Eine neue Probetraining-Anfrage ist eingegangen.
    </p>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">${tableRows}</table>
    ${messageBlock}`;

  await send({
    to: adminEmail,
    subject: `Neue Probetraining-Anfrage: ${data.firstname} ${data.lastname}`,
    html: layout("Neue Probetraining-Anfrage", content),
    replyTo: data.email,
  });
}
