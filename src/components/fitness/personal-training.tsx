"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Phone,
  Mail,
  Clock,
  MapPin,
  Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { useReveal } from "@/lib/use-reveal";

const benefits = [
  "Individueller Trainingsplan nach deinen Zielen",
  "Regelmaessige Koerperanalyse und Fortschrittskontrolle",
  "Technik-Coaching fuer sichere Ausfuehrung",
  "Ernaehrungstipps passend zu deinem Training",
  "Flexible Terminvereinbarung",
];

function TerminModal({ onClose }: { onClose: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div
        className={cn(
          "absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500",
          visible ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          "relative w-full max-w-md overflow-hidden bg-cs-black shadow-[0_32px_80px_rgba(0,0,0,0.8)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          visible
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        )}
      >
        {/* Image header */}
        <div className="relative h-52 overflow-hidden sm:h-60">
          <div className="absolute inset-0 animate-[kenburns_20s_ease-in-out_infinite_alternate]">
            <Image
              src="/images/casasports-personal-training.webp"
              alt="Personal Training Termin"
              fill
              className="img-cinema object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-cs-black/60 to-transparent" />

          {/* Gold accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cs-gold" />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-black/40 text-white/60 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
            aria-label="Schliessen"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gold">
              Personal Training
            </p>
            <h3 className="mt-1 text-2xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-cs-white sm:text-3xl">
              Termin vereinbaren
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 pt-6">
          <p className="text-[14px] leading-relaxed text-white/45">
            Ruf uns an oder schreib uns. Wir finden einen Termin, der in deinen
            Alltag passt.
          </p>

          {/* Divider */}
          <div className="mt-5 h-px bg-white/[0.06]" />

          {/* Contact options */}
          <div className="mt-5 space-y-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-4 border border-white/[0.06] p-4 transition-all duration-300 hover:border-cs-gold/30 hover:bg-cs-gold/[0.03]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cs-gold/10">
                <Phone className="h-4 w-4 text-cs-gold" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white">
                  {siteConfig.phone}
                </p>
                <p className="text-[12px] text-white/50">Direkt anrufen</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cs-gold" />
            </a>

            <a
              href={`mailto:${siteConfig.email}?subject=Personal Training Anfrage`}
              className="group flex items-center gap-4 border border-white/[0.06] p-4 transition-all duration-300 hover:border-cs-gold/30 hover:bg-cs-gold/[0.03]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cs-gold/10">
                <Mail className="h-4 w-4 text-cs-gold" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white">
                  {siteConfig.email}
                </p>
                <p className="text-[12px] text-white/50">E-Mail schreiben</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cs-gold" />
            </a>

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-white/[0.06] p-4 transition-all duration-300 hover:border-cs-gold/30 hover:bg-cs-gold/[0.03]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cs-gold/10">
                <Instagram className="h-4 w-4 text-cs-gold" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white">
                  @casa__sports
                </p>
                <p className="text-[12px] text-white/50">
                  DM auf Instagram
                </p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-white/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cs-gold" />
            </a>
          </div>

          {/* Divider */}
          <div className="mt-5 h-px bg-white/[0.06]" />

          {/* Info row */}
          <div className="mt-5 flex gap-6">
            <div className="flex items-center gap-2 text-[12px] text-white/50">
              <Clock className="h-3.5 w-3.5 text-cs-gold/50" />
              7 Tage geoeffnet
            </div>
            <div className="flex items-center gap-2 text-[12px] text-white/50">
              <MapPin className="h-3.5 w-3.5 text-cs-gold/50" />
              {siteConfig.address.street}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PersonalTraining() {
  const ref = useReveal();
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-cs-black py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="grid md:grid-cols-[30fr_70fr]">
          {/* Left: Image */}
          <div className="relative hidden overflow-hidden md:block">
            <Image
              src="/images/casasports-personal-training.webp"
              alt="Personal Training bei Casa Sports"
              fill
              className="img-cinema object-cover object-center"
              sizes="30vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cs-black/70 via-transparent to-cs-black/30" />

            <div className="absolute bottom-12 left-10 right-10 lg:left-14 lg:right-14">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-gold">
                Personal Training
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white lg:text-5xl">
                Dein Trainer.
                <br />
                <span className="text-cs-gold">Dein Tempo.</span>
              </h2>
            </div>
          </div>

          {/* Mobile hero */}
          <div className="relative aspect-[16/9] overflow-hidden md:hidden">
            <Image
              src="/images/casasports-personal-training.webp"
              alt="Personal Training bei Casa Sports"
              fill
              className="img-cinema object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-cs-black/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cs-gold">
                Personal Training
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white">
                Dein Trainer. <span className="text-cs-gold">Dein Tempo.</span>
              </h2>
            </div>
          </div>

          {/* Right: Content panel */}
          <div className="bg-[#141414] px-8 py-12 md:px-12 md:py-16 lg:px-16">
            <p className="text-[15px] leading-relaxed text-white/60">
              Du willst mehr als nur ein Geraet bedienen? Im Personal Training
              arbeiten wir gemeinsam an deinen Zielen. Strukturiert,
              motivierend, auf den Punkt.
            </p>

            <div className="mt-8 h-px bg-white/[0.06]" />

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cs-gold/60" />
                  <span className="text-[14px] leading-relaxed text-white/50">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 h-px bg-white/[0.06]" />

            <div className="mt-8">
              <button
                onClick={() => setShowModal(true)}
                className="group inline-flex items-center gap-3 border border-cs-gold/30 px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-cs-gold transition-all duration-500 hover:border-cs-gold hover:bg-cs-gold/10"
              >
                Termin vereinbaren
                <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && <TerminModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
