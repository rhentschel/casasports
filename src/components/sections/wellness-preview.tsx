"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const items = [
  {
    image: "/images/casasports-wellness-bereich-1.webp",
    label: "Wellness-Bereich",
    brand: "",
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    label: "Sauna",
    brand: "KLAFS",
  },
  {
    image: "/images/casasports-infrarotkabine-roeger-web.webp",
    label: "Infrarotkabine",
    brand: "Röger",
  },
];

export function WellnessPreview() {
  const ref = useReveal();

  return (
    <section className="bg-cs-gray-900 py-40 md:py-48">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-gold">
          Wellness & Sauna
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
          Regeneration.
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-cs-gray-300">
          KLAFS Sauna, Röger Infrarotkabine und ein Wellness-Bereich, der keine
          Wünsche offen lässt. Training und Recovery gehören zusammen.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-black/90 via-cs-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-gold transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                {item.brand && (
                  <span className="mb-2 inline-block text-[10px] font-medium uppercase tracking-[0.25em] text-cs-gold/50">
                    {item.brand}
                  </span>
                )}
                <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-white">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/wellness"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cs-gold/50 transition-colors duration-[400ms] hover:text-white"
          >
            Wellness entdecken
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[400ms] group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
