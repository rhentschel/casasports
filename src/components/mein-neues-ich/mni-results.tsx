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

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {results.map((item) => (
            <div
              key={item.title}
              className="group border border-white/[0.08] p-8 transition-all duration-500 hover:border-white/[0.15]"
            >
              <div className="text-white/50 transition-colors duration-300 group-hover:text-cs-accent">
                {item.icon}
              </div>
              <h3 className="mt-5 text-base font-black uppercase tracking-[-0.01em] text-cs-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
