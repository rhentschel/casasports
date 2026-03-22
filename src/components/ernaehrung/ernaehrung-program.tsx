"use client";

import {
  Beef,
  CalendarCheck,
  Droplets,
  Pill,
  Timer,
  Fingerprint,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const pillars = [
  {
    icon: <Beef className="h-6 w-6" />,
    title: "Proteinversorgung",
    description:
      "Genug Eiweiss ist die Basis. Wir zeigen dir, wie du deinen Bedarf deckst, ohne jeden Tag Haehnchen zu essen.",
  },
  {
    icon: <CalendarCheck className="h-6 w-6" />,
    title: "Mahlzeitenstruktur",
    description:
      "Kein Mealprep-Zwang. Eine einfache Struktur, die in deinen Alltag passt. Fruehstueck, Mittag, Abend.",
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Hydration",
    description:
      "2% Dehydrierung kostet dich 20% Leistung. Wasser trinken ist der einfachste Performance-Hack.",
  },
  {
    icon: <Pill className="h-6 w-6" />,
    title: "Supplementierung",
    description:
      "Was sinnvoll ist, was rausgeworfenes Geld ist. Ehrliche Beratung ohne Verkaufsdruck.",
  },
  {
    icon: <Timer className="h-6 w-6" />,
    title: "Naehrstoff-Timing",
    description:
      "Was du vor und nach dem Training isst, macht einen Unterschied. Kein Hexenwerk, aber wichtig.",
  },
  {
    icon: <Fingerprint className="h-6 w-6" />,
    title: "Individuell",
    description:
      "Dein Alter, dein Alltag, deine Ziele. Kein Copy-Paste-Plan, sondern etwas, das zu dir passt.",
  },
];

export function ErnaehrungProgram() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Die Grundlagen
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
            Sechs Dinge, die
            <br />
            <span className="text-cs-accent">wirklich zaehlen.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/35">
            Vergiss Superfoods und Wunder-Shakes. Diese sechs Prinzipien
            machen 95% des Unterschieds.
          </p>
        </div>

        <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={cn(
                "group/feature relative flex flex-col border-white/[0.06] py-10",
                "lg:border-r",
                (index === 0 || index === 3) && "lg:border-l",
                index < 3 && "lg:border-b"
              )}
            >
              <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-cs-accent/[0.04] to-transparent opacity-0 transition duration-300 group-hover/feature:opacity-100" />

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
