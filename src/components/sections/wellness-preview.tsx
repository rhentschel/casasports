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
    <section className="bg-cs-gray-900 py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        {/* Header row - inline with link */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-gold">
              Wellness & Sauna
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
              Regeneration.
            </h2>
          </div>
          <Link
            href="/wellness"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cs-gold/50 transition-colors duration-[400ms] hover:text-white"
          >
            Wellness entdecken
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[400ms] group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Images - landscape ratio so all fit in viewport */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-black/80 via-cs-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-gold transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                {item.brand && (
                  <span className="mb-1 inline-block text-[10px] font-medium uppercase tracking-[0.25em] text-cs-gold/50">
                    {item.brand}
                  </span>
                )}
                <h3 className="text-base font-black uppercase tracking-[-0.01em] text-white">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
