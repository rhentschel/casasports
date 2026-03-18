"use client";

import Image from "next/image";
import { useReveal } from "@/lib/use-reveal";

export function AboutPreview() {
  const ref = useReveal();

  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden bg-cs-black py-20 md:py-28">
      {/* Full-bleed Naim image */}
      <Image
        src="/images/naim-casasports.webp"
        alt="Naim Obeid - Inhaber Casa Sports"
        fill
        className="img-cinema object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-cs-black/60 to-transparent" />

      {/* Content at bottom */}
      <div ref={ref} className="reveal relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Dein Studio
        </p>
        <h2 className="mt-4 max-w-lg text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
          Persönlich. Nicht anonym.
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-white/40">
          Inhaber Naim Obeid und sein Team stehen für persönliche Betreuung
          statt Massenabfertigung. Hier kennt man sich.
        </p>
      </div>
    </section>
  );
}
