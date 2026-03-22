"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function WellnessHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex h-[85svh] min-h-[600px] items-end overflow-hidden bg-cs-black pb-24 md:pb-32">
      <div className="absolute inset-0 animate-[kenburns_30s_ease-in-out_infinite_alternate]">
        <Image
          src="/images/casasports-wellness-bereich-panorama.webp"
          alt="Wellness-Bereich Casa Sports"
          fill
          className="img-cinema object-cover"
          priority
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-black/[0.5]" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-transparent to-cs-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16">
        <p
          className={cn(
            "mb-6 text-xs font-medium uppercase tracking-[0.2em] text-cs-gold transition-all duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          Wellness & Sauna
        </p>

        <div className="overflow-hidden">
          <h1
            className={cn(
              "text-[clamp(2.4rem,6vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-cs-white transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
              loaded ? "translate-y-0" : "translate-y-[120%]"
            )}
          >
            Trainiere hart.
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className={cn(
              "text-[clamp(2.4rem,6vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] transition-transform delay-200 duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
              loaded ? "translate-y-0" : "translate-y-[120%]"
            )}
          >
            <span className="text-cs-gold">Regeneriere</span>{" "}
            <span className="text-cs-white">besser.</span>
          </h1>
        </div>

        <p
          className={cn(
            "mt-8 max-w-md text-[15px] leading-relaxed text-white/60 transition-all delay-600 duration-1000",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          KLAFS Sauna, Roeger Infrarotkabine und ein Wellness-Bereich, der dein
          Training komplett macht. Weil echte Ergebnisse nach dem letzten Satz
          beginnen.
        </p>

        <div
          className={cn(
            "mt-10 flex items-center gap-6 transition-all delay-800 duration-1000",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Link
            href="#tarife"
            className="group relative overflow-hidden border border-cs-gold bg-cs-gold px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-cs-black transition-all duration-500 hover:bg-transparent hover:text-cs-gold"
          >
            Tarife ansehen
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
