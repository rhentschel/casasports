"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const items = [
  {
    image: "/images/casasports-wellness-bereich-1.webp",
    title: "Wellness-Bereich",
    text: "Entspannung auf Premium-Niveau nach deinem Workout.",
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    title: "KLAFS Sauna",
    text: "Finnische Sauna. Wärme, die tief geht.",
  },
  {
    image: "/images/casasports-infrarotkabine-roeger-web.webp",
    title: "Röger Infrarot",
    text: "Tiefenwärme für Muskelentspannung und Regeneration.",
  },
];

export function WellnessPreview() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-gold">
              Wellness & Sauna
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
              Trainiere hart. Regeneriere besser.
            </h2>
          </div>
          <Link
            href="/wellness"
            className="group hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cs-gold/50 transition-colors duration-[400ms] hover:text-white sm:inline-flex"
          >
            Entdecken
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[400ms] group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-black/90 via-cs-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-gold transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-[14px] leading-relaxed text-white/50 transition-all duration-[600ms] ease-[var(--ease-hover)] group-hover:max-h-16">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
