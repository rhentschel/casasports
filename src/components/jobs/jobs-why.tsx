"use client";

import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";
import { Heart, Users, TrendingUp, Dumbbell, Clock, GraduationCap } from "lucide-react";

const benefits = [
  {
    title: "Familiaeres Team",
    description:
      "Bei uns bist du kein Angestellter, sondern Teil der Familie. Flache Hierarchien und echte Wertschaetzung.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Kostenlos trainieren",
    description:
      "Als Teammitglied trainierst du kostenlos in unserem Studio. Inklusive aller Kurse und Wellness.",
    icon: <Dumbbell className="h-6 w-6" />,
  },
  {
    title: "Weiterbildung",
    description:
      "Wir investieren in dich. Schulungen, Lizenzen und Fortbildungen auf unsere Kosten.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "Entwicklung",
    description:
      "Vom Praktikanten zum Trainer, vom Trainer zur Leitung. Wir fördern deinen persönlichen Aufstieg.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "Flexible Zeiten",
    description:
      "Wir planen Schichten gemeinsam. Deine Work-Life-Balance ist uns genauso wichtig wie unseren Mitgliedern.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Sinn statt nur Job",
    description:
      "Du hilfst Menschen, ihre Ziele zu erreichen. Jeden Tag siehst du, was deine Arbeit bewirkt.",
    icon: <Heart className="h-6 w-6" />,
  },
];

export function JobsWhy() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Warum Casa Sports
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
          Mehr als ein Arbeitsplatz.
        </h2>

        <div className="relative z-10 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "group/feature relative flex flex-col border-white/[0.06] py-10",
                "lg:border-r",
                (index === 0 || index === 3) && "lg:border-l",
                index < 3 && "lg:border-b"
              )}
            >
              {/* Hover gradient */}
              {index < 3 ? (
                <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-cs-accent/[0.06] to-transparent opacity-0 transition duration-300 group-hover/feature:opacity-100" />
              ) : (
                <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-cs-accent/[0.06] to-transparent opacity-0 transition duration-300 group-hover/feature:opacity-100" />
              )}

              {/* Icon */}
              <div className="relative z-10 mb-4 px-8 text-cs-gray-500 transition-colors duration-300 group-hover/feature:text-cs-accent">
                {benefit.icon}
              </div>

              {/* Title with accent bar */}
              <div className="relative z-10 mb-2 px-8 text-[15px] font-bold">
                <div className="absolute inset-y-0 left-0 h-6 w-[2px] origin-center rounded-r-full bg-cs-gray-700 transition-all duration-300 group-hover/feature:h-8 group-hover/feature:bg-cs-accent" />
                <span className="inline-block text-cs-white transition-transform duration-300 group-hover/feature:translate-x-2">
                  {benefit.title}
                </span>
              </div>

              {/* Description */}
              <p className="relative z-10 max-w-xs px-8 text-[13px] leading-relaxed text-cs-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
