"use client";

import { useCallback } from "react";
import Image from "next/image";
import { Flame, Sun, Waves, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";
import useEmblaCarousel from "embla-carousel-react";

const areas = [
  {
    image: "/images/casasports-wellness-bereich-1.webp",
    icon: <Waves className="h-4 w-4" />,
    title: "Wellness-Bereich",
    subtitle: "Premium Entspannung",
    description:
      "Bequeme Liegen, gedaempftes Licht und die Atmosphaere, die du nach dem Training verdienst.",
    highlights: ["Ruhebereich mit Liegen", "Gedaempftes Ambiente", "Direkt nach dem Training"],
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    icon: <Flame className="h-4 w-4" />,
    title: "KLAFS Sauna",
    subtitle: "Finnische Tradition",
    description:
      "Waerme, die tief geht. Dein Herz-Kreislauf-System in Schwung, Verspannungen geloest, Immunsystem gestaerkt.",
    highlights: ["KLAFS Premium-Qualitaet", "Finnische Aufguesse", "Bis zu 90°C"],
  },
  {
    image: "/images/casasports-infrarotkabine-roeger-web.webp",
    icon: <Sun className="h-4 w-4" />,
    title: "Roeger Infrarot",
    subtitle: "Tiefenwaerme",
    description:
      "Sanfte Waerme bis in die Muskulatur. Foerdert Durchblutung, beschleunigt Regeneration.",
    highlights: ["Roeger Markenkabine", "Schonende Tiefenwaerme", "Ideal nach Krafttraining"],
  },
];

export function WellnessAreas() {
  const ref = useReveal();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Unsere Bereiche
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
              Drei Welten.{" "}
              <span className="text-cs-accent">Ein Erlebnis.</span>
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="hidden gap-2 md:flex">
            <button
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-white/50 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-white/50 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {areas.map((area) => (
              <div
                key={area.title}
                className="relative min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-10px)]"
              >
                {/* Image */}
                <div className="group relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cs-accent" />

                  {/* Content overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-2 text-cs-accent">
                      {area.icon}
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                        {area.subtitle}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-black uppercase leading-[0.9] tracking-[-0.02em] text-cs-white md:text-2xl">
                      {area.title}
                    </h3>
                  </div>
                </div>

                {/* Text below image */}
                <div className="mt-5">
                  <p className="text-[14px] leading-relaxed text-white/50">
                    {area.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {area.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2.5 text-[13px] text-white/40"
                      >
                        <div className="h-1 w-1 shrink-0 bg-cs-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile nav dots */}
        <div className="mt-8 flex justify-center gap-2 md:hidden">
          {areas.map((area, i) => (
            <button
              key={area.title}
              onClick={() => emblaApi?.scrollTo(i)}
              className="h-1.5 w-6 bg-white/[0.1] transition-all duration-300"
              aria-label={`Zu ${area.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
