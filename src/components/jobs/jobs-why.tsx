"use client";

import { useReveal } from "@/lib/use-reveal";
import { Heart, Users, TrendingUp, Dumbbell, Clock, GraduationCap } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Familiäres Team",
    description: "Bei uns bist du kein Angestellter, sondern Teil der Familie. Flache Hierarchien und echte Wertschaetzung.",
  },
  {
    icon: Dumbbell,
    title: "Kostenlos trainieren",
    description: "Als Teammitglied trainierst du kostenlos in unserem Studio. Inklusive aller Kurse und Wellness.",
  },
  {
    icon: GraduationCap,
    title: "Weiterbildung",
    description: "Wir investieren in dich. Regelmaessige Schulungen, Lizenzen und Fortbildungen auf unsere Kosten.",
  },
  {
    icon: TrendingUp,
    title: "Entwicklung",
    description: "Vom Praktikanten zum Trainer, vom Trainer zur Leitung. Wir foerdern deinen persoenlichen Aufstieg.",
  },
  {
    icon: Clock,
    title: "Flexible Zeiten",
    description: "Wir planen Schichten gemeinsam. Deine Work-Life-Balance ist uns genauso wichtig wie unseren Mitgliedern.",
  },
  {
    icon: Heart,
    title: "Sinn statt nur Job",
    description: "Du hilfst Menschen, ihre Ziele zu erreichen. Jeden Tag siehst du, was deine Arbeit bewirkt.",
  },
];

export function JobsWhy() {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal bg-cs-black py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Warum Casa Sports
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
          Mehr als ein <span className="text-cs-accent">Arbeitsplatz.</span>
        </h2>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
          Wir sind ein kleines, eingeschweisstes Team mit einer grossen Mission:
          Menschen staerker machen. Und das faengt bei unserem Team an.
        </p>

        <div className="mt-16 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group border border-white/[0.04] bg-cs-gray-900/50 p-8 transition-all duration-500 hover:border-cs-accent/20 hover:bg-cs-gray-900"
            >
              <benefit.icon className="h-5 w-5 text-cs-accent transition-transform duration-500 group-hover:scale-110" />
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.1em] text-cs-white">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cs-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
