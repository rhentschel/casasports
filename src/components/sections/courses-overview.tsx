"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const courses = [
  { name: "Power Training", image: "/images/casasports-krafttraining-1.webp" },
  { name: "Cycling", image: "/images/casasports-spinning-kurs-1.webp" },
  { name: "Functional", image: "/images/casasports-functional-training.webp" },
  { name: "Gruppentraining", image: "/images/casasports-gruppentraining.webp" },
  { name: "Cardio", image: "/images/casasports-kardio-power.webp" },
  { name: "Kurse für alle", image: "/images/casasports-kurse-fuer-alle.webp" },
];

export function CoursesOverview() {
  const ref = useReveal();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-cs-black py-40 md:py-48">
      <div ref={ref} className="reveal">
        {/* Header */}
        <div className="mx-auto flex max-w-7xl items-end justify-between px-8 md:px-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Kursangebot
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
              Unsere Kurse.
            </h2>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition-all duration-[400ms] ease-[var(--ease-hover)] hover:border-white/30 hover:text-white"
              aria-label="Vorheriger Kurs"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition-all duration-[400ms] ease-[var(--ease-hover)] hover:border-white/30 hover:text-white"
              aria-label="Nächster Kurs"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-[3px]">
            {courses.map((course) => (
              <div
                key={course.name}
                className="group relative min-w-0 flex-[0_0_85%] sm:flex-[0_0_42%] lg:flex-[0_0_26%]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cs-black/80 via-cs-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-white">
                      {course.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Link */}
        <div className="mx-auto mt-10 max-w-7xl px-8 md:px-16">
          <Link
            href="/kurse"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cs-gray-500 transition-colors duration-[400ms] hover:text-white"
          >
            Alle Kurse entdecken
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[400ms] group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
