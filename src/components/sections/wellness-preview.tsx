"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

export function WellnessPreview() {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal bg-cs-black">
      {/* Full-width immersive hero image */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/images/casasports-wellness-bereich-1.webp"
          alt="Wellness-Bereich Casa Sports"
          fill
          className="img-cinema object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/30 to-cs-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-cs-black/50 to-transparent" />

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-8 pb-16 md:px-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-gold">
              Wellness & Sauna
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
              Trainiere hart.
              <br />
              Regeneriere besser.
            </h2>
          </div>
        </div>
      </div>

      {/* Detail images */}
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              image: "/images/casasports-klafs-sauna.webp",
              label: "KLAFS Sauna",
              text: "Finnische Sauna auf Premiumlevel. Wärme, die tief geht.",
            },
            {
              image: "/images/casasports-infrarotkabine-roeger-web.webp",
              label: "Röger Infrarot",
              text: "Tiefenwärme für Muskelentspannung und Regeneration.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[16/9] cursor-pointer overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-black/80 via-cs-black/20 to-transparent transition-all duration-500 group-hover:from-cs-black/60" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-gold transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-white">
                  {item.label}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-[14px] text-white/50 transition-all duration-[600ms] ease-[var(--ease-hover)] group-hover:max-h-16">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="py-10">
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
