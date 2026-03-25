"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

export function MniCta() {
  const ref = useReveal();

  return (
    <section id="anmeldung" className="relative py-32 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="/images/casasports-bodytransformation.webp"
          alt="Body Transformation"
          fill
          className="img-cinema object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/[0.65]" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-transparent to-cs-black/30" />

      <div
        ref={ref}
        className="reveal relative z-10 mx-auto max-w-7xl px-8 text-center md:px-16"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Bereit für dein neues Ich?
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
          299 € für 12 Wochen.
          <br />
          <span className="text-cs-accent">Keine Ausreden.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
          Training, Ernährungscoaching, Motivation in der Gruppe und persönliche
          Betreuung. Alles inklusive. Kein Abo.
        </p>
        <a
          href="mailto:info@casasports.de?subject=Anmeldung%20Mein%20Neues%20Ich"
          className="group mt-10 inline-flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
        >
          Jetzt anmelden
          <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
