"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const benefits = [
  "Familiaeres Team mit flachen Hierarchien und echter Wertschaetzung",
  "Kostenloses Training inklusive aller Kurse und Wellness",
  "Schulungen, Lizenzen und Fortbildungen auf unsere Kosten",
  "Echte Aufstiegsmoeglichkeiten, wenn du dich einbringst",
  "Flexible Schichtplanung fuer deine Work-Life-Balance",
  "Sinnvolle Arbeit: Du hilfst Menschen, ihre Ziele zu erreichen",
];

export function JobsWhy() {
  const ref = useReveal();

  return (
    <section className="relative overflow-hidden bg-cs-black">
      <div ref={ref} className="reveal relative">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Image left */}
          <div className="relative min-h-[400px] lg:min-h-0">
            <Image
              src="/images/team-training-2.webp"
              alt="Team Casa Sports"
              fill
              className="img-cinema object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-cs-black via-cs-black/40 to-transparent lg:from-cs-black lg:via-transparent lg:to-transparent" />
          </div>

          {/* Content right */}
          <div className="flex flex-col justify-center px-8 py-28 md:px-16 md:py-36">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Warum Casa Sports
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
              Mehr als ein
              <br />
              <span className="text-cs-accent">Arbeitsplatz.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              Wir sind ein kleines, eingeschweisstes Team mit einer grossen
              Mission: Menschen staerker machen. Und das faengt bei unserem
              Team an.
            </p>

            <ul className="mt-10 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cs-accent/60" />
                  <span className="text-[14px] leading-relaxed text-white/50">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#bewerbung"
                className="group inline-flex items-center gap-3 border border-cs-accent/30 px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-cs-accent transition-all duration-500 hover:border-cs-accent hover:bg-cs-accent/10"
              >
                Jetzt bewerben
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
