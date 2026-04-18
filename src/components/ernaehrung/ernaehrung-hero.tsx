"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function ErnaehrungHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[700px] items-end overflow-hidden bg-cs-black pb-24 md:pb-32">
      <div className="absolute inset-0 animate-[kenburns_30s_ease-in-out_infinite_alternate]">
        <Image
          src="/images/casasports-bodyhealth.webp"
          alt="Ernaehrungsberatung Casa Sports"
          fill
          className="img-cinema object-cover"
          priority
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-black/[0.4]" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-transparent to-cs-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16">
        <p
          className={cn(
            "mb-6 text-xs font-medium uppercase tracking-[0.2em] text-cs-accent transition-all duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          Ernaehrung bei Casa Sports
        </p>

        <h1 className="text-[clamp(2.8rem,7.5vw,6.5rem)] font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white">
          <span className="block overflow-hidden">
            <span
              className={cn(
                "block transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              80% passiert
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className={cn(
                "block transition-transform delay-200 duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              <span className="text-cs-white">in der</span>{" "}
              <span className="text-cs-accent">Kueche.</span>
            </span>
          </span>
        </h1>

        <p
          className={cn(
            "mt-8 max-w-sm text-[15px] leading-relaxed text-white/60 transition-all delay-600 duration-1000",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Du kannst jeden Tag trainieren.
          <br />
          Ohne die richtige Ernaehrung bleiben die Ergebnisse aus.
        </p>

        <div
          className={cn(
            "mt-10 flex items-center gap-6 transition-all delay-800 duration-1000",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Link
            href="/probetraining"
            className="group relative overflow-hidden border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
          >
            Beratung anfragen
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="hidden text-[13px] tracking-[0.15em] text-white/50 transition-colors duration-500 hover:text-white sm:block"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
