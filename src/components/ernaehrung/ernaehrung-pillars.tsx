"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const points = [
  "Individuelle Beratung durch unser Team",
  "Keine Diäten. Nachhaltige Gewohnheiten",
  "Abgestimmt auf dein Ziel: Aufbau, Definition oder Gesundheit",
  "Anpassung an deinen Fortschritt",
  "Umsetzbar, ohne Kalorienzählen",
];

export function ErnaehrungPillars() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="grid md:grid-cols-[30fr_70fr]">
          {/* Left: Image */}
          <div className="relative hidden overflow-hidden md:block">
            <Image
              src="/images/casasports-personal-training.webp"
              alt="Ernährungsberatung bei Casa Sports"
              fill
              className="img-cinema object-cover object-center"
              sizes="30vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cs-black/70 via-transparent to-cs-black/30" />

            <div className="absolute bottom-12 left-10 right-10 lg:left-14 lg:right-14">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Unser Ansatz
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white lg:text-5xl">
                Nachhaltig.
                <br />
                <span className="text-cs-accent">Ehrlich.</span>
              </h2>
            </div>
          </div>

          {/* Mobile hero */}
          <div className="relative aspect-[16/9] overflow-hidden md:hidden">
            <Image
              src="/images/casasports-personal-training.webp"
              alt="Ernährungsberatung bei Casa Sports"
              fill
              className="img-cinema object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-cs-black/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cs-accent">
                Unser Ansatz
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white">
                Nachhaltig. <span className="text-cs-accent">Ehrlich.</span>
              </h2>
            </div>
          </div>

          {/* Right: Content panel */}
          <div className="bg-[#141414] px-8 py-12 md:px-12 md:py-16 lg:px-16">
            <h2 className="text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-3xl">
              Keine Verbote.
              <br />
              <span className="text-cs-accent">Sondern Verstehen.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              Wir glauben nicht an Crash-Diäten. Wir zeigen dir, wie Ernährung
              funktioniert, damit du es selbst umsetzen kannst. Nicht nur bis
              zum Sommer, sondern dauerhaft.
            </p>

            <div className="mt-8 h-px bg-white/[0.06]" />

            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cs-accent/60" />
                  <span className="text-base leading-relaxed text-white/50">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
