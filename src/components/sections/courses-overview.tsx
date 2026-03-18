"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const courses = [
  { name: "Power Training", image: "/images/casasports-krafttraining-1.webp" },
  { name: "Cycling", image: "/images/casasports-spinning-kurs-1.webp" },
  { name: "Functional", image: "/images/casasports-functional-training.webp" },
  { name: "Gruppentraining", image: "/images/casasports-gruppentraining.webp" },
  { name: "Cardio", image: "/images/casasports-kardio-power.webp" },
  { name: "Kurse für alle", image: "/images/casasports-kurse-fuer-alle.webp" },
];

export function CoursesOverview() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-cs-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-4xl italic tracking-tight text-cs-white md:text-5xl">
            Unsere Kurse
          </h2>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center border border-cs-gray-700 text-cs-gray-400 transition-all duration-300 hover:border-white hover:text-white"
              aria-label="Vorheriger Kurs"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center border border-cs-gray-700 text-cs-gray-400 transition-all duration-300 hover:border-white hover:text-white"
              aria-label="Nächster Kurs"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="mt-14 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
          {courses.map((course) => (
            <div
              key={course.name}
              className="group relative min-w-0 flex-[0_0_75%] sm:flex-[0_0_40%] lg:flex-[0_0_28%]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-700 ease-out group-hover:w-full" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl italic text-white">
                    {course.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6">
        <Link
          href="/kurse"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cs-gray-500 transition-colors duration-300 hover:text-white"
        >
          Alle Kurse entdecken
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
