"use client";

import {
  Target,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const pillars = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Zielorientiert",
    description:
      "Kein planloses Trainieren. Wir setzen gemeinsam Ziele und arbeiten darauf hin.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Progressiv",
    description:
      "Dein Plan waechst mit dir. Regelmaessige Anpassungen sorgen fuer stetige Fortschritte.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Persoenlich",
    description:
      "Unser Team kennt dich beim Namen. Hier bist du Mensch, nicht Mitgliedsnummer.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexibel",
    description:
      "7 Tage die Woche geoeffnet. Trainiere wann es in deinen Alltag passt.",
  },
];

export function FitnessPhilosophy() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Unsere Philosophie
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
            Wir glauben an Training
            <br />
            mit <span className="text-cs-accent">System.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/60">
            Gutes Training ist kein Zufall. Es ist das Ergebnis von Planung,
            Betreuung und der richtigen Umgebung.
          </p>
        </div>

        <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={cn(
                "group/feature relative flex flex-col border-white/[0.06] py-10",
                "lg:border-r",
                (index === 0 || index === 4) && "lg:border-l",
                index < 4 && "lg:border-b"
              )}
            >
              <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-cs-accent/[0.06] to-transparent opacity-0 transition duration-300 group-hover/feature:opacity-100" />

              <div className="relative z-10 mb-4 px-8 text-cs-gray-500 transition-colors duration-300 group-hover/feature:text-cs-accent">
                {pillar.icon}
              </div>

              <div className="relative z-10 mb-2 px-8 text-[15px] font-bold">
                <div className="absolute inset-y-0 left-0 h-6 w-[2px] origin-center rounded-r-full bg-cs-gray-700 transition-all duration-300 group-hover/feature:h-8 group-hover/feature:bg-cs-accent" />
                <span className="inline-block text-cs-white transition-transform duration-300 group-hover/feature:translate-x-2">
                  {pillar.title}
                </span>
              </div>

              <p className="relative z-10 max-w-xs px-8 text-[13px] leading-relaxed text-cs-gray-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
