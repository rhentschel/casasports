"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { X, Shield, BarChart3, Megaphone } from "lucide-react";
import {
  acceptAll,
  getConsent,
  rejectAll,
  setConsent,
  type Consent,
  DEFAULT_CONSENT,
} from "@/lib/consent";

export const OPEN_SETTINGS_EVENT = "cs-cookie-open-settings";

type View = "banner" | "settings";

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<View>("banner");
  const [choices, setChoices] = useState<Consent>(DEFAULT_CONSENT);

  useEffect(() => {
    setMounted(true);
    const existing = getConsent();
    if (!existing) {
      setVisible(true);
    } else {
      setChoices(existing.consent);
    }

    const handleOpen = () => {
      const current = getConsent();
      setChoices(current?.consent ?? DEFAULT_CONSENT);
      setView("settings");
      setVisible(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handleOpen);
  }, []);

  const handleAcceptAll = useCallback(() => {
    acceptAll();
    setVisible(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    rejectAll();
    setVisible(false);
  }, []);

  const handleSave = useCallback(() => {
    setConsent(choices);
    setVisible(false);
  }, [choices]);

  const toggle = useCallback((key: keyof Consent) => {
    if (key === "necessary") return;
    setChoices((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  if (!mounted || !visible) return null;

  if (view === "settings") {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md md:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
      >
        <div className="relative w-full max-w-2xl border border-white/10 bg-cs-black">
          <div className="flex items-start justify-between gap-6 border-b border-white/[0.06] px-8 pb-6 pt-8 md:px-10">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
                Datenschutz
              </p>
              <h2
                id="cookie-settings-title"
                className="mt-3 text-2xl font-black uppercase leading-[1.05] tracking-tight text-cs-white md:text-3xl"
              >
                Cookie-Einstellungen
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-cs-gray-400 transition-colors hover:border-cs-accent hover:text-cs-white"
              aria-label="Schließen"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[60vh] space-y-4 overflow-y-auto px-8 py-6 md:px-10">
            <ConsentRow
              icon={Shield}
              title="Notwendig"
              description="Technisch erforderlich für den Betrieb der Seite. Diese können nicht deaktiviert werden."
              enabled
              locked
              onToggle={() => toggle("necessary")}
            />
            <ConsentRow
              icon={BarChart3}
              title="Statistik"
              description="Helfen uns zu verstehen, wie die Seite genutzt wird, damit wir sie verbessern können."
              enabled={choices.analytics}
              onToggle={() => toggle("analytics")}
            />
            <ConsentRow
              icon={Megaphone}
              title="Marketing"
              description="Für relevante Werbung auf Social Media und das Messen von Kampagnen-Erfolg."
              enabled={choices.marketing}
              onToggle={() => toggle("marketing")}
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-white/[0.06] px-8 py-6 md:flex-row md:items-center md:justify-between md:px-10">
            <p className="text-base text-cs-gray-500">
              Mehr in unserer{" "}
              <Link
                href="/datenschutz"
                className="text-cs-accent underline underline-offset-4 transition-colors hover:text-cs-white"
                onClick={() => setVisible(false)}
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={handleRejectAll}
                className="border border-white/15 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-cs-white transition-colors hover:border-cs-accent hover:text-cs-accent"
              >
                Alle ablehnen
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="bg-cs-accent px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-cs-black"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md md:px-0 md:pb-0"
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-banner-title"
    >
      <div className="border border-white/10 bg-cs-black shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <div className="px-6 pb-6 pt-7 md:px-8 md:pt-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
            Cookies
          </p>
          <h2
            id="cookie-banner-title"
            className="mt-3 text-xl font-black uppercase leading-[1.1] tracking-tight text-cs-white"
          >
            Wir respektieren deine Privatsphäre.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cs-gray-400">
            Wir nutzen Cookies, um diese Seite zu betreiben und besser zu
            machen. Details in der{" "}
            <Link
              href="/datenschutz"
              className="text-cs-white underline underline-offset-4 transition-colors hover:text-cs-accent"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/[0.06] px-6 py-5 md:px-8">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleRejectAll}
              className="border border-white/15 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-cs-white transition-colors hover:border-cs-accent hover:text-cs-accent"
            >
              Ablehnen
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="bg-cs-accent px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-cs-black"
            >
              Akzeptieren
            </button>
          </div>
          <button
            type="button"
            onClick={() => setView("settings")}
            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cs-gray-400 underline underline-offset-[6px] transition-colors hover:text-cs-white"
          >
            Einstellungen anpassen
          </button>
        </div>
      </div>
    </div>
  );
}

type ConsentRowProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  enabled: boolean;
  locked?: boolean;
  onToggle: () => void;
};

function ConsentRow({
  icon: Icon,
  title,
  description,
  enabled,
  locked,
  onToggle,
}: ConsentRowProps) {
  return (
    <div className="flex items-start gap-4 border border-white/[0.06] bg-white/[0.02] p-4 md:p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-cs-accent">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-cs-white">
            {title}
          </h3>
          <button
            type="button"
            onClick={onToggle}
            disabled={locked}
            role="switch"
            aria-checked={enabled}
            aria-label={`${title} ${enabled ? "deaktivieren" : "aktivieren"}`}
            className={`relative inline-flex h-6 w-11 shrink-0 items-center border transition-colors ${
              enabled
                ? "border-cs-accent bg-cs-accent"
                : "border-white/20 bg-white/[0.04]"
            } ${locked ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
          >
            <span
              className={`inline-block h-4 w-4 bg-white transition-transform ${
                enabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
        <p className="mt-2 text-base leading-relaxed text-cs-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_SETTINGS_EVENT));
}
