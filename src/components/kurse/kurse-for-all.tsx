"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const points = [
  "Kleine Gruppen fuer individuelle Betreuung",
  "Uebungen werden an dein Level angepasst",
  "Erfahrene Trainer korrigieren deine Technik",
  "Motivierende Atmosphaere ohne Leistungsdruck",
  "Kein Vorwissen noetig, einfach mitmachen",
];

export function KurseForAll() {
  const ref = useReveal();

  return (
    <section className="relative overflow-hidden bg-cs-black">
      <div ref={ref} className="reveal relative">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[500px] lg:min-h-0 lg:order-2">
            <Image
              src="/images/casasports-kurse-fuer-alle.webp"
              alt="Kurse fuer alle Level bei Casa Sports"
              fill
              className="img-cinema object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cs-black/30 to-cs-black lg:from-transparent lg:via-transparent lg:to-cs-black" />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-8 py-32 md:px-16 md:py-40 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Fuer jedes Level
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
              Du musst nicht fit sein,
              <br />
              um <span className="text-cs-accent">anzufangen.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              Egal ob du zum ersten Mal trainierst oder seit Jahren dabei bist.
              Unsere Kurse sind so aufgebaut, dass jeder mitkommt und
              gefordert wird.
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
