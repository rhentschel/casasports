"use client";

import { useCallback } from "react";
import Image from "next/image";
import { Flame, Sun, Waves, ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";
import useEmblaCarousel from "embla-carousel-react";

const areas = [
  {
    image: "/images/casasports-wellness-bereich-1.webp",
    icon: <Waves className="h-4 w-4" />,
    title: "Wellness-Bereich",
    subtitle: "Premium Entspannung",
    description:
      "Bequeme Liegen, gedämpftes Licht und die Atmosphäre, die du nach dem Training verdienst.",
    highlights: ["Ruhebereich mit Liegen", "Gedämpftes Ambiente", "Direkt nach dem Training"],
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    icon: <Flame className="h-4 w-4" />,
    title: "KLAFS Sauna",
    subtitle: "Finnische Tradition",
    description:
      "Wärme, die tief geht. Dein Herz-Kreislauf-System in Schwung, Verspannungen gelöst, Immunsystem gestärkt.",
    highlights: ["KLAFS Premium-Qualität", "Finnische Aufgüsse", "Bis zu 90°C"],
  },
  {
    image: "/images/casasports-infrarotkabine-roeger-web.webp",
    icon: <Sun className="h-4 w-4" />,
    title: "Röger Infrarot",
    subtitle: "Tiefenwärme",
    description:
      "Sanfte Wärme bis in die Muskulatur. Fördert Durchblutung, beschleunigt Regeneration.",
    highlights: ["Röger Markenkabine", "Schonende Tiefenwärme", "Ideal nach Krafttraining"],
  },
];

export function WellnessAreas() {
  const ref = useReveal();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal">
        {/* Header — im Container */}
        <div className="mx-auto flex max-w-7xl items-end justify-between px-8 md:px-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Unsere Bereiche
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
              Drei Welten.{" "}
              <span className="text-cs-accent">Ein Erlebnis.</span>
            </h2>
          </div>

          {/* Nav arrows */}
          <div className="hidden gap-2 md:flex">
            <button
              onClick={scrollPrev}
              aria-label="Vorheriger Wellness-Bereich"
              className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-white/50 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Nächster Wellness-Bereich"
              className="flex h-10 w-10 items-center justify-center border border-white/[0.08] text-white/50 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Slider — fullwidth, kein Container-Padding */}
        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="ml-8 flex gap-[3px] md:ml-16">
            {areas.map((area) => (
              <div
                key={area.title}
                className="relative min-w-0 flex-[0_0_85%] md:flex-[0_0_55%] lg:flex-[0_0_45%]"
              >
                {/* Image — gross, 16:9 */}
                <div className="group relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cs-accent" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-2 text-cs-accent">
                      {area.icon}
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                        {area.subtitle}
                      </span>
                    </div>
                    <h3 className="mt-2 text-2xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-cs-white md:text-3xl">
                      {area.title}
                    </h3>
                  </div>
                </div>

                {/* Text below */}
                <div className="mt-5 pr-8">
                  <p className="text-base leading-relaxed text-white/50">
                    {area.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {area.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-base text-white/60"
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
        <div className="mt-8 flex justify-center gap-1 md:hidden">
          {areas.map((area, i) => (
            <button
              key={area.title}
              onClick={() => emblaApi?.scrollTo(i)}
              className="flex h-6 min-w-[32px] items-center justify-center px-1"
              aria-label={`Zu ${area.title}`}
            >
              <span className="block h-1.5 w-6 bg-white/[0.1] transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
