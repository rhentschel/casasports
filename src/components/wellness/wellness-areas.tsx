"use client";

import { useState } from "react";
import Image from "next/image";
import { Flame, Sun, Waves } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const areas = [
  {
    image: "/images/casasports-wellness-bereich-1.webp",
    icon: <Waves className="h-5 w-5" />,
    title: "Wellness-Bereich",
    subtitle: "Premium Entspannung",
    description:
      "Ein Ort zum Abschalten. Nach dem Training erwartet dich ein Bereich, der Koerper und Geist zur Ruhe kommen laesst. Bequeme Liegen, gedaempftes Licht und die Atmosphaere, die du verdienst.",
    highlights: ["Ruhebereich mit Liegen", "Gedaempftes Ambiente", "Direkt nach dem Training nutzbar"],
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    icon: <Flame className="h-5 w-5" />,
    title: "KLAFS Sauna",
    subtitle: "Finnische Tradition",
    description:
      "Waerme, die tief geht. Unsere KLAFS Sauna bringt dein Herz-Kreislauf-System in Schwung, loest Verspannungen und staerkt dein Immunsystem. Premium-Qualitaet von Europas fuehrendem Sauna-Hersteller.",
    highlights: ["KLAFS Premium-Qualitaet", "Finnische Aufguesse", "Bis zu 90°C"],
  },
  {
    image: "/images/casasports-infrarotkabine-roeger-web.webp",
    icon: <Sun className="h-5 w-5" />,
    title: "Roeger Infrarotkabine",
    subtitle: "Tiefenwaerme",
    description:
      "Sanfte Waerme, die bis in die Muskulatur dringt. Die Roeger Infrarotkabine foerdert die Durchblutung, beschleunigt die Regeneration und hilft bei Muskelkater. Ideal fuer alle, die schonende Waerme bevorzugen.",
    highlights: ["Roeger Markenkabine", "Schonende Tiefenwaerme", "Ideal nach Krafttraining"],
  },
];

export function WellnessAreas() {
  const ref = useReveal();
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-gold">
          Unsere Bereiche
        </p>
        <h2 className="mt-4 max-w-lg text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
          Drei Welten.{" "}
          <span className="text-cs-gold">Ein Erlebnis.</span>
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/35">
          Jeder Bereich ist so gestaltet, dass du nach dem Training genau das
          bekommst, was dein Koerper braucht: Erholung auf hoechstem Niveau.
        </p>

        {/* Tab navigation */}
        <div className="mt-12 flex gap-1 border-b border-white/[0.06]">
          {areas.map((area, index) => (
            <button
              key={area.title}
              onClick={() => setActive(index)}
              className={cn(
                "flex items-center gap-2 px-6 py-4 text-[12px] font-medium uppercase tracking-[0.15em] transition-all duration-300",
                active === index
                  ? "border-b-2 border-cs-gold text-cs-gold"
                  : "text-white/30 hover:text-white/60"
              )}
            >
              {area.icon}
              <span className="hidden sm:inline">{area.title}</span>
            </button>
          ))}
        </div>

        {/* Active area detail */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={areas[active].image}
              alt={areas[active].title}
              fill
              className="img-cinema object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cs-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cs-gold" />
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gold/60">
              {areas[active].subtitle}
            </p>
            <h3 className="mt-3 text-2xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-3xl">
              {areas[active].title}
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-white/40">
              {areas[active].description}
            </p>

            <ul className="mt-8 space-y-3">
              {areas[active].highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-3 text-[14px] text-white/50"
                >
                  <div className="h-1.5 w-1.5 shrink-0 bg-cs-gold" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Small preview cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {areas.map((area, index) => (
            <button
              key={area.title}
              onClick={() => setActive(index)}
              className={cn(
                "group relative aspect-[16/9] cursor-pointer overflow-hidden transition-all duration-500",
                active === index
                  ? "ring-2 ring-cs-gold ring-offset-2 ring-offset-cs-black"
                  : "opacity-50 hover:opacity-80"
              )}
            >
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[13px] font-bold uppercase tracking-wide text-white">
                  {area.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
