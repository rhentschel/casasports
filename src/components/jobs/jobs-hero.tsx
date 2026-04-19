"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function JobsHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex h-[85svh] min-h-[600px] items-end overflow-hidden bg-cs-black pb-24 md:pb-32">
      <div className="absolute inset-0 animate-[kenburns_30s_ease-in-out_infinite_alternate]">
        <Image
          src="/images/casasports-gruppentraining.webp"
          alt="Team Casa Sports"
          fill
          className="img-cinema object-cover"
          priority
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-black/[0.55]" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-transparent to-cs-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16">
        <p
          className={cn(
            "mb-6 text-xs font-medium uppercase tracking-[0.2em] text-cs-accent transition-all duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          Karriere bei Casa Sports
        </p>

        <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white">
          <span className="block overflow-hidden">
            <span
              className={cn(
                "block transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              Werde Teil
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className={cn(
                "block transition-transform delay-200 duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              <span className="text-cs-accent">unseres</span>{" "}
              <span className="text-cs-white">Teams.</span>
            </span>
          </span>
        </h1>

        <p
          className={cn(
            "mt-8 max-w-md text-[15px] leading-relaxed text-white/60 transition-all delay-600 duration-1000",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Du brennst fuer Fitness und willst Menschen auf ihrem Weg begleiten?
          Dann bist du bei uns genau richtig.
        </p>

        <div
          className={cn(
            "mt-10 flex items-center gap-6 transition-all delay-800 duration-1000",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <a
            href="#stellen"
            className="group relative overflow-hidden border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
          >
            Offene Stellen
          </a>
          <a
            href="#bewerbung"
            className="hidden text-[13px] tracking-[0.15em] text-white/50 transition-colors duration-500 hover:text-white sm:block"
          >
            Direkt bewerben
          </a>
        </div>
      </div>
    </section>
  );
}
