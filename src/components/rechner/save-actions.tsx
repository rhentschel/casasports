"use client";

import { useState } from "react";
import { Download, Mail, Check, Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  onDownloadPdf: () => void;
  rechnerName: string;
  resultSummary: string;
};

type LeadStatus = "idle" | "open" | "sending" | "success" | "error";

const goalOptions = [
  { id: "abnehmen", label: "Abnehmen" },
  { id: "muskelaufbau", label: "Muskelaufbau" },
  { id: "fit-bleiben", label: "Fit bleiben" },
  { id: "wohlfühlen", label: "Wohlfühlen" },
] as const;

const frequencyOptions = [
  { id: "1-2", label: "1–2x pro Woche" },
  { id: "3-4", label: "3–4x pro Woche" },
  { id: "5plus", label: "5+ pro Woche" },
] as const;

const experienceOptions = [
  { id: "anfaenger", label: "Anfänger" },
  { id: "fortgeschritten", label: "Fortgeschritten" },
  { id: "profi", label: "Profi" },
] as const;

export function SaveActions({ onDownloadPdf, rechnerName, resultSummary }: Props) {
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [error, setError] = useState<string>("");

  // Kontaktdaten
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  // Quick-Profile
  const [goal, setGoal] = useState<typeof goalOptions[number]["id"] | "">("");
  const [frequency, setFrequency] = useState<typeof frequencyOptions[number]["id"] | "">("");
  const [experience, setExperience] = useState<typeof experienceOptions[number]["id"] | "">("");
  const [note, setNote] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setError("Bitte stimme der Datenschutzerklärung zu.");
      return;
    }
    setStatus("sending");
    setError("");

    const goalLabel = goalOptions.find((g) => g.id === goal)?.label ?? "Nicht angegeben";
    const frequencyLabel = frequencyOptions.find((f) => f.id === frequency)?.label ?? "Nicht angegeben";
    const experienceLabel = experienceOptions.find((x) => x.id === experience)?.label ?? "Nicht angegeben";

    const message = [
      `Anfrage über: ${rechnerName}-Rechner`,
      `Ergebnis: ${resultSummary}`,
      "",
      "── Trainingsprofil ──",
      `Hauptziel: ${goalLabel}`,
      `Geplante Frequenz: ${frequencyLabel}`,
      `Erfahrung: ${experienceLabel}`,
      ...(note ? ["", "Persönliche Notiz:", note] : []),
    ].join("\n");

    try {
      const res = await fetch("/api/magicline/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          phone: phone || undefined,
          message,
          source: `Rechner ${rechnerName}`,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Anfrage fehlgeschlagen.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten.");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-8 border border-emerald-400/30 bg-emerald-400/[0.06] p-6 md:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-emerald-400/50 bg-emerald-400/15">
            <Check className="h-5 w-5 text-emerald-400" aria-hidden />
          </span>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400">
              Anfrage erhalten
            </p>
            <h3 className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-white">
              Wir melden uns bei dir
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/65">
              Innerhalb von 24 Stunden bekommst du eine E-Mail mit deinem persönlichen
              Plan und einem Gutschein für dein gratis Probetraining.
            </p>
            <button
              type="button"
              onClick={onDownloadPdf}
              className="mt-5 inline-flex items-center gap-2 border border-emerald-400/40 bg-emerald-400/10 px-4 py-2.5 text-[12px] uppercase tracking-[0.15em] text-emerald-400 transition-colors hover:bg-emerald-400/20"
            >
              <Download className="h-3.5 w-3.5" aria-hidden />
              Ergebnis als PDF
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 border border-cs-accent/25 bg-gradient-to-br from-cs-accent/[0.08] to-cs-accent/[0.02]">
      {/* Header / Pitch */}
      <div className="border-b border-white/10 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cs-accent/40 bg-cs-accent/15">
            <Mail className="h-5 w-5 text-cs-accent" aria-hidden />
          </span>
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-[0.2em] text-cs-accent">
              Ergebnisse sichern
            </p>
            <h3 className="mt-2 text-xl font-black uppercase leading-tight tracking-[-0.02em] text-white md:text-2xl">
              Hol dir deinen Plan vom Trainer
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/65">
              Lade dein Ergebnis als PDF herunter — oder lass dir kostenlos einen
              persönlichen Trainings- und Ernährungsplan von unseren Coaches
              zusenden. Plus: Gutschein für dein gratis Probetraining.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onDownloadPdf}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/[0.04] px-4 py-2.5 text-[12px] uppercase tracking-[0.15em] text-white transition-colors hover:border-white/40 hover:bg-white/[0.08]"
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            Als PDF herunterladen
          </button>
          {status === "idle" && (
            <button
              type="button"
              onClick={() => setStatus("open")}
              className="inline-flex items-center gap-2 border border-cs-accent bg-cs-accent px-4 py-2.5 text-[12px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-cs-accent/85"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden />
              Plan vom Trainer
            </button>
          )}
        </div>
      </div>

      {/* Lead-Form (collapsible) */}
      {(status === "open" || status === "sending" || status === "error") && (
        <form onSubmit={submit} className="p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/55">
              Persönlicher Plan kostenlos anfordern
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              aria-label="Schließen"
              className="text-white/40 transition-colors hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Quick-Profile: Trainings-Kontext */}
          <div className="space-y-6 border-b border-white/10 pb-6">
            <div>
              <p className="mb-2.5 text-[11px] uppercase tracking-[0.15em] text-white/55">
                Was ist dein Hauptziel?
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {goalOptions.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id)}
                    className={cn(
                      "border px-3 py-2.5 text-[12px] uppercase tracking-[0.1em] transition-all",
                      goal === g.id
                        ? "border-cs-accent bg-cs-accent text-white"
                        : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"
                    )}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2.5 text-[11px] uppercase tracking-[0.15em] text-white/55">
                Wie oft willst du trainieren?
              </p>
              <div className="grid grid-cols-3 gap-2">
                {frequencyOptions.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFrequency(f.id)}
                    className={cn(
                      "border px-3 py-2.5 text-[12px] uppercase tracking-[0.1em] transition-all",
                      frequency === f.id
                        ? "border-cs-accent bg-cs-accent text-white"
                        : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2.5 text-[11px] uppercase tracking-[0.15em] text-white/55">
                Trainings-Erfahrung
              </p>
              <div className="grid grid-cols-3 gap-2">
                {experienceOptions.map((x) => (
                  <button
                    key={x.id}
                    type="button"
                    onClick={() => setExperience(x.id)}
                    className={cn(
                      "border px-3 py-2.5 text-[12px] uppercase tracking-[0.1em] transition-all",
                      experience === x.id
                        ? "border-cs-accent bg-cs-accent text-white"
                        : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"
                    )}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="lead-note"
                className="mb-2.5 block text-[11px] uppercase tracking-[0.15em] text-white/55"
              >
                Wünsche oder Einschränkungen{" "}
                <span className="lowercase tracking-normal text-white/35">
                  (optional)
                </span>
              </label>
              <textarea
                id="lead-note"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Z.B. Rückenprobleme, bevorzugte Trainingszeiten, Knie-OP, Sportverbote..."
                className="w-full resize-none border border-white/15 bg-cs-black px-4 py-3 text-[14px] leading-relaxed text-white placeholder:text-white/30 focus:border-cs-accent focus:outline-none"
              />
            </div>
          </div>

          {/* Kontaktdaten */}
          <p className="mb-3 mt-6 text-[11px] uppercase tracking-[0.15em] text-white/55">
            Deine Kontaktdaten
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <input
              type="text"
              required
              placeholder="Vorname *"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="border border-white/15 bg-cs-black px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:border-cs-accent focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="Nachname *"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="border border-white/15 bg-cs-black px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:border-cs-accent focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="E-Mail *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-white/15 bg-cs-black px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:border-cs-accent focus:outline-none md:col-span-2"
            />
            <input
              type="tel"
              placeholder="Telefon (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-white/15 bg-cs-black px-4 py-3 text-[14px] text-white placeholder:text-white/35 focus:border-cs-accent focus:outline-none md:col-span-2"
            />
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-3 text-[12px] leading-snug text-white/55">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-cs-accent"
            />
            <span>
              Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage
              verarbeitet werden.{" "}
              <a
                href="/datenschutz"
                className="text-white/75 underline-offset-4 hover:text-cs-accent hover:underline"
              >
                Datenschutzerklärung
              </a>
            </span>
          </label>

          {error && (
            <p className="mt-4 text-[13px] text-red-400">{error}</p>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className={cn(
                "inline-flex items-center gap-2 border border-cs-accent bg-cs-accent px-5 py-3 text-[12px] uppercase tracking-[0.15em] text-white transition-all",
                status === "sending"
                  ? "cursor-not-allowed opacity-60"
                  : "hover:bg-cs-accent/85"
              )}
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                  Wird gesendet
                </>
              ) : (
                <>
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                  Anfrage senden
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-[12px] uppercase tracking-[0.15em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              Abbrechen
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
