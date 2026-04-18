"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const topics = [
  "Allgemeine Anfrage",
  "Probetraining",
  "Mitgliedschaft",
  "Kurse",
  "Wellness & Sauna",
  "Personal Training",
  "Mein Neues Ich",
  "Sonstiges",
];

export function KontaktForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? ""),
      honeypot: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Unbekannter Fehler");
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Bitte versuche es erneut.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-cs-accent/30 bg-white/[0.02] p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center border border-cs-accent bg-cs-accent/10 text-cs-accent">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-2xl font-black uppercase tracking-tight text-cs-white">
          Danke für deine Nachricht.
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-white/60">
          Wir melden uns innerhalb von 24 Stunden bei dir. In dringenden Fällen
          erreichst du uns telefonisch.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-cs-accent underline underline-offset-[6px] transition-colors hover:text-cs-white"
        >
          Noch eine Nachricht schreiben
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 border border-white/[0.06] bg-white/[0.02] p-6 md:p-8"
      noValidate
    >
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
          Nachricht schreiben
        </p>
        <h2 className="mt-3 text-2xl font-black uppercase leading-[1.1] tracking-tight text-cs-white md:text-3xl">
          Schreib uns direkt.
        </h2>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="E-Mail" name="email" type="email" required />
        <Field label="Telefon (optional)" name="phone" type="tel" />
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
            Thema
          </label>
          <select
            name="topic"
            defaultValue={topics[0]}
            className="border border-white/10 bg-cs-black px-4 py-3 text-[14px] text-cs-white transition-colors focus:border-cs-accent focus:outline-none"
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
          Nachricht <span className="text-cs-accent">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={5000}
          className="resize-y border border-white/10 bg-cs-black px-4 py-3 text-[14px] leading-relaxed text-cs-white transition-colors focus:border-cs-accent focus:outline-none"
          placeholder="Was können wir für dich tun?"
        />
      </div>

      {status === "error" && (
        <p className="border border-cs-accent/40 bg-cs-accent/10 px-4 py-3 text-[13px] text-cs-accent">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center">
        <p className="text-[11px] text-white/40">
          Mit dem Absenden stimmst du unserer{" "}
          <a
            href="/datenschutz"
            className="text-cs-accent underline underline-offset-4 hover:text-cs-white"
          >
            Datenschutzerklärung
          </a>{" "}
          zu.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 bg-cs-accent px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-cs-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Senden...
            </>
          ) : (
            <>
              Nachricht senden
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
};

function Field({ label, name, type = "text", required }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
        {label} {required && <span className="text-cs-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="border border-white/10 bg-cs-black px-4 py-3 text-[14px] text-cs-white transition-colors placeholder:text-white/30 focus:border-cs-accent focus:outline-none"
      />
    </div>
  );
}
