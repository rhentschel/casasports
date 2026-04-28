"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function RechnerOverviewHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-[75svh] items-end overflow-hidden bg-cs-black pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="absolute inset-0 animate-[kenburns_30s_ease-in-out_infinite_alternate]">
        <Image
          src="/images/casasports-bodytransformation.webp"
          alt=""
          fill
          className="img-cinema object-cover"
          priority
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/30 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16">
        <p
          className={cn(
            "mb-6 text-xs font-medium uppercase tracking-[0.2em] text-cs-accent transition-all duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          Casa Sports Tools
        </p>

        <h1 className="text-[clamp(2.4rem,7vw,6rem)] font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white">
          <span className="block overflow-hidden">
            <span
              className={cn(
                "block transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              Rechner.
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className={cn(
                "block transition-transform delay-200 duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              <span className="text-cs-accent">Daten.</span>{" "}
              <span className="text-cs-white">Klarheit.</span>
            </span>
          </span>
        </h1>

        <p
          className={cn(
            "mt-8 max-w-xl text-base leading-relaxed text-white/65 transition-all delay-500 duration-1000",
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          Werkzeuge, die deine Trainings- und Ernährungsentscheidungen auf eine
          solide Basis stellen. Schnell, ohne Anmeldung, ohne Tracking.
        </p>
      </div>
    </section>
  );
}
