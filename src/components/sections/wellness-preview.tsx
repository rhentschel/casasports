"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

export function WellnessPreview() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        {/* Header */}
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

        {/* Grid: 1 large left + 2 stacked right */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 md:grid-rows-2">
          {/* Wellness - spans both rows */}
          <div className="group relative overflow-hidden md:row-span-2">
            <div className="relative aspect-[3/4] h-full overflow-hidden md:aspect-auto">
              <Image
                src="/images/casasports-wellness-bereich-1.webp"
                alt="Wellness-Bereich"
                fill
                className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-gold transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl font-black uppercase tracking-[-0.01em] text-white">
                  Wellness-Bereich
                </h3>
                <p className="mt-2 text-[14px] text-white/40">
                  Entspannung nach dem Training auf Premium-Niveau.
                </p>
              </div>
            </div>
          </div>

          {/* Sauna - top right */}
          <div className="group relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/casasports-klafs-sauna.webp"
              alt="KLAFS Sauna"
              fill
              className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cs-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-gold transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cs-gold/50">
                KLAFS
              </span>
              <h3 className="mt-1 text-lg font-black uppercase tracking-[-0.01em] text-white">
                Sauna
              </h3>
            </div>
          </div>

          {/* Infrarot - bottom right */}
          <div className="group relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/casasports-infrarotkabine-roeger-web.webp"
              alt="Röger Infrarotkabine"
              fill
              className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cs-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-gold transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cs-gold/50">
                Röger
              </span>
              <h3 className="mt-1 text-lg font-black uppercase tracking-[-0.01em] text-white">
                Infrarotkabine
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
