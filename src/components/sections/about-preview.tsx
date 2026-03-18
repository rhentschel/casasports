"use client";

import Image from "next/image";
import { useReveal } from "@/lib/use-reveal";

export function AboutPreview() {
  const ref = useReveal();

  return (
    <section className="bg-cs-gray-900 py-40 md:py-48">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-5 lg:gap-24">
          {/* Image - 3 cols */}
          <div className="relative lg:col-span-3">
            <div className="group relative overflow-hidden">
              <Image
                src="/images/naim-casasports.webp"
                alt="Naim Obeid"
                width={800}
                height={1000}
                className="img-cinema w-full object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.03]"
              />
            </div>
            {/* Offset frame */}
            <div className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full border border-cs-accent/10 lg:block" />
          </div>

          {/* Text - 2 cols */}
          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Naim Obeid
            </p>
            <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
              Persönlich.
              <br />
              Nicht anonym.
            </h2>

            <p className="mt-10 text-[15px] leading-[1.7] text-cs-gray-300">
              Casa Sports ist anders. Hier kennt man sich, hier wird trainiert
              und hier wird Ergebnis geliefert. Inhaber Naim Obeid und sein Team
              stehen für persönliche Betreuung statt Massenabfertigung.
            </p>

            <blockquote className="mt-10 border-l border-cs-accent/20 pl-6">
              <p className="text-[15px] leading-[1.7] text-white/40">
                &ldquo;Wahre Stärke zeigt sich nicht darin, was du kannst,
                sondern darin, was du überwindest.&rdquo;
              </p>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.2em] text-cs-gray-500">
                Naim Obeid, Inhaber
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
