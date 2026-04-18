"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "4923685706";
const WHATSAPP_TEXT = "Hallo Casa Sports, ich habe eine Frage zu";

function buildUrl(prefillTopic?: string): string {
  const text = prefillTopic
    ? `${WHATSAPP_TEXT} ${prefillTopic}`
    : `${WHATSAPP_TEXT} eurem Angebot.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function WhatsappButton() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`pointer-events-none fixed bottom-4 left-4 z-[80] transition-all duration-500 md:bottom-6 md:left-6 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      {expanded && (
        <div className="pointer-events-auto mb-3 w-[280px] border border-white/10 bg-cs-black p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:w-[320px]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#25D366]">
                WhatsApp
              </p>
              <p className="mt-2 text-[15px] font-black uppercase leading-[1.15] tracking-tight text-cs-white">
                Schnell eine Frage?
              </p>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 text-cs-gray-400 transition-colors hover:border-cs-accent hover:text-cs-white"
              aria-label="Schließen"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="mt-3 text-[12px] leading-relaxed text-white/60">
            Wir antworten meist innerhalb einer Stunde. Wähle ein Thema:
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {[
              "Probetraining",
              "Mitgliedschaft",
              "Kursen",
              "Wellness",
              "Öffnungszeiten",
            ].map((topic) => (
              <a
                key={topic}
                href={buildUrl(topic)}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 bg-white/[0.02] px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-cs-white transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-transform hover:scale-[1.05] md:h-16 md:w-16"
        aria-label={expanded ? "WhatsApp-Menü schließen" : "WhatsApp öffnen"}
        aria-expanded={expanded}
      >
        {expanded ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" strokeWidth={0} />
        )}
      </button>
    </div>
  );
}
