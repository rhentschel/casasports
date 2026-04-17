"use client";

import { useEffect, useState } from "react";
import { X, Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  source?: string;
};

export function TrialModal({ open, onClose, source = "Probetraining Button" }: Props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", onKey);
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
        document.removeEventListener("keydown", onKey);
      };
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone("");
        setMessage("");
        setError("");
        setSuccess(false);
      }, 300);
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/magicline/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, phone, message, source }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Etwas ist schiefgelaufen.");
        setLoading(false);
        return;
      }
      setSuccess(true);
      setLoading(false);
    } catch {
      setError("Netzwerkfehler. Bitte versuche es erneut.");
      setLoading(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cs-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative mx-6 w-full max-w-xl border border-white/[0.08] bg-cs-black p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Schliessen"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-white/50 transition-colors hover:text-cs-white"
        >
          <X className="h-5 w-5" />
        </button>

        {success ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center border border-cs-accent/30 bg-cs-accent/10">
              <Check className="h-8 w-8 text-cs-accent" />
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Danke
            </p>
            <h3 className="mt-3 text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-cs-white">
              Wir melden uns bei dir.
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-white/60">
              Dein Probetraining-Wunsch ist bei uns eingegangen. Wir melden uns
              innerhalb von 24 Stunden, um einen Termin zu vereinbaren.
            </p>
            <button
              onClick={onClose}
              className="mt-8 inline-flex border border-white/10 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-cs-white transition-colors hover:border-white/30"
            >
              Schliessen
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Kostenlos
            </p>
            <h3 className="mt-2 text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-cs-white md:text-3xl">
              Probetraining anfragen
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-white/60">
              Lass uns deine Daten da und wir melden uns fuer einen Termin.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="w-full border border-white/[0.08] bg-transparent px-3 py-2.5 text-[14px] text-cs-white outline-none transition-colors focus:border-cs-accent"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="w-full border border-white/[0.08] bg-transparent px-3 py-2.5 text-[14px] text-cs-white outline-none transition-colors focus:border-cs-accent"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                  E-Mail *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-white/[0.08] bg-transparent px-3 py-2.5 text-[14px] text-cs-white outline-none transition-colors focus:border-cs-accent"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-white/[0.08] bg-transparent px-3 py-2.5 text-[14px] text-cs-white outline-none transition-colors focus:border-cs-accent"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                  Nachricht
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Welche Trainingszeit passt dir? Hast du bestimmte Wuensche?"
                  className="w-full resize-none border border-white/[0.08] bg-transparent px-3 py-2.5 text-[14px] text-cs-white placeholder-white/20 outline-none transition-colors focus:border-cs-accent"
                />
              </div>

              {error && (
                <div className="border border-cs-accent/30 bg-cs-accent/5 px-4 py-3">
                  <p className="text-[13px] text-cs-accent">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "flex w-full items-center justify-center gap-2 border border-cs-accent bg-cs-accent px-6 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-cs-white transition-all duration-500 hover:bg-transparent hover:text-cs-accent",
                  loading && "cursor-not-allowed opacity-40"
                )}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Wird gesendet
                  </>
                ) : (
                  "Probetraining anfragen"
                )}
              </button>
              <p className="text-[10px] leading-relaxed text-white/30">
                Mit dem Absenden erklaerst du dich einverstanden, dass wir dich zu
                deiner Anfrage kontaktieren. Details in der{" "}
                <a href="/datenschutz" className="text-white/60 underline">
                  Datenschutzerklaerung
                </a>
                .
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
