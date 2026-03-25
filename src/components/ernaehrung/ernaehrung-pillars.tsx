"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const points = [
  "Individuelle Beratung durch unser Team",
  "Keine Diaeten. Nachhaltige Gewohnheiten",
  "Abgestimmt auf dein Ziel: Aufbau, Definition oder Gesundheit",
  "Anpassung an deinen Fortschritt",
  "Umsetzbar, ohne Kalorienzaehlen",
];

export function ErnaehrungPillars() {
  const ref = useReveal();

  return (
    <section className="relative overflow-hidden bg-cs-black">
      <div ref={ref} className="reveal relative">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[500px] lg:min-h-0">
            <Image
              src="/images/casasports-personal-training.webp"
              alt="Ernaehrungsberatung bei Casa Sports"
              fill
              className="img-cinema object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-cs-black via-cs-black/40 to-transparent lg:from-cs-black lg:via-transparent lg:to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-8 py-32 md:px-16 md:py-40">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Unser Ansatz
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
              Keine Verbote.
              <br />
              <span className="text-cs-accent">Sondern Verstehen.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              Wir glauben nicht an Crash-Diaeten. Wir zeigen dir, wie Ernaehrung
              funktioniert, damit du es selbst umsetzen kannst. Nicht nur bis
              zum Sommer, sondern dauerhaft.
            </p>

            <ul className="mt-10 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cs-accent/60" />
                  <span className="text-[14px] leading-relaxed text-white/50">
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
