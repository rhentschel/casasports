"use client";

import { Users, Dumbbell, Apple, Monitor, Heart, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const features = [
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Personal Training",
    description: "Individuell angepasste Trainingseinheiten mit persönlicher Betreuung durch unser Team.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gruppen Training",
    description: "Zusammen trainieren, zusammen schwitzen, zusammen wachsen. Die Gruppe motiviert.",
  },
  {
    icon: <Apple className="h-6 w-6" />,
    title: "Ernährungsberatung",
    description: "Rezept-E-Book und Konzept, das zu deinem Alltag passt. Kein Kalorienzählen.",
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Online Coaching",
    description: "Begleitung auch außerhalb des Studios. Motivation, Tipps und Support.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Gemeinschaft",
    description: "Teil einer motivierten Gruppe, die dich mitzieht, anfeuert und unterstützt.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexibles Training",
    description: "2-3x pro Woche, vormittags oder nachmittags. So wie es in dein Leben passt.",
  },
];

export function MniIncluded() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Alles inklusive für 299 €
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
            Das steckt
            <br />
            <span className="text-cs-accent">im Programm.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/60">
            12 Wochen. Training, Ernährungscoaching, Motivation und persönliche
            Betreuung. Keine versteckten Kosten, kein Abo.
          </p>
        </div>

        {/* 3-column grid with border lines — ernaehrung-program pattern */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "group/feature relative px-8 py-10",
                index < 3 && "lg:border-b lg:border-white/[0.06]",
                index % 3 !== 2 && "lg:border-r lg:border-white/[0.06]",
                index % 2 === 0 && "md:border-r md:border-white/[0.06] lg:border-r-0",
                index < 4 && "md:border-b md:border-white/[0.06] lg:border-b-0",
                index < 3 && "lg:border-b lg:border-white/[0.06]"
              )}
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-cs-accent/[0.04] to-transparent opacity-0 transition duration-300 group-hover/feature:opacity-100" />

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
