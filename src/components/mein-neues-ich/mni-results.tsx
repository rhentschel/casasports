"use client";

import { TrendingDown, Dumbbell, Brain, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const results = [
  {
    icon: <TrendingDown className="h-6 w-6" />,
    title: "Gewichtsreduktion",
    description:
      "Fett verlieren, Muskeln aufbauen, Stoffwechsel aktivieren. Ohne Diäten oder Kalorienzählen.",
  },
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Starker Körper",
    description:
      "Intervall- und Krafttraining bringen deinen Kreislauf in Schwung und stärken deine Muskulatur.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Mentale Stärke",
    description:
      "Motivation und mentale Stärke gehören fest zur Challenge. Wir helfen dir, dranzubleiben.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Neues Lebensgefühl",
    description:
      "Wieder mit Energie durch den Alltag gehen. Fitter, stärker und energiegeladener.",
  },
];

export function MniResults() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Was dich erwartet
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
            4 Ziele.
            <br />
            <span className="text-cs-accent">Ein Programm.</span>
          </h2>
        </div>

        {/* Benefits Grid — exact pattern from benefits-grid.tsx */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {results.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "group/feature relative px-8 py-10",
                index < 3 && "lg:border-r lg:border-white/[0.06]",
                "md:border-b md:border-white/[0.06] lg:border-b-0"
              )}
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-cs-accent/[0.06] to-transparent opacity-0 transition duration-300 group-hover/feature:opacity-100" />

              {/* Icon with accent bar */}
              <div className="relative z-10 mb-4 px-8 text-cs-gray-500 transition-colors duration-300 group-hover/feature:text-cs-accent">
                {item.icon}
                <div className="absolute inset-y-0 left-0 h-6 w-[2px] origin-center rounded-r-full bg-cs-gray-700 transition-all duration-300 group-hover/feature:h-8 group-hover/feature:bg-cs-accent" />
              </div>

              <h3 className="relative z-10 px-8 text-base font-black uppercase tracking-[-0.01em] text-cs-white transition-transform duration-300 group-hover/feature:translate-x-2">
                {item.title}
              </h3>
              <p className="relative z-10 mt-3 px-8 text-[14px] leading-relaxed text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
