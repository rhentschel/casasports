"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const courses = [
  {
    name: "Power Training",
    image: "/images/casasports-krafttraining-1.webp",
  },
  {
    name: "Cycling",
    image: "/images/casasports-spinning-kurs-1.webp",
  },
  {
    name: "Functional",
    image: "/images/casasports-functional-training.webp",
  },
  {
    name: "Gruppentraining",
    image: "/images/casasports-gruppentraining.webp",
  },
  {
    name: "Cardio",
    image: "/images/casasports-kardio-power.webp",
  },
  {
    name: "Kurse für alle",
    image: "/images/casasports-kurse-fuer-alle.webp",
  },
];

export function CoursesOverview() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="flex min-h-screen items-center bg-cs-black py-24">
      <div className="w-full">
        {/* Header */}
        <div className="mx-auto flex max-w-7xl items-end justify-between px-6">
          <div>
            <p className="text-sm font-light uppercase tracking-[0.3em] text-cs-accent">
              Kursangebot
            </p>
            <h2 className="mt-4 text-4xl font-extralight tracking-tight text-cs-white md:text-5xl">
              Gemeinsam <span className="font-bold">stärker.</span>
            </h2>
          </div>

          {/* Slider controls */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={scrollPrev}
              className="flex h-12 w-12 items-center justify-center border border-cs-gray-700 text-cs-gray-400 transition-all duration-300 hover:border-cs-accent hover:text-white"
              aria-label="Vorheriger Kurs"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-12 w-12 items-center justify-center border border-cs-gray-700 text-cs-gray-400 transition-all duration-300 hover:border-cs-accent hover:text-white"
              aria-label="Nächster Kurs"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-16 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
            {courses.map((course) => (
              <div
                key={course.name}
                className="group relative min-w-0 flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-700 group-hover:w-full" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold tracking-wide text-white">
                      {course.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View all link */}
        <div className="mx-auto mt-12 max-w-7xl px-6">
          <Link
            href="/kurse"
            className="group inline-flex items-center gap-3 text-sm font-light tracking-wider text-cs-gray-400 transition-all duration-300 hover:text-white"
          >
            Alle Kurse entdecken
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
