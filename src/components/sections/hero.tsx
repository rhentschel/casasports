"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden bg-cs-black">
      {/* Cinematic background */}
      <div className="absolute inset-0 animate-[kenburns_30s_ease-in-out_infinite_alternate]">
        <Image
          src="/images/casasports-hero-1.webp"
          alt="Casa Sports Fitnessstudio"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Center content */}
      <div className="relative flex h-full flex-col items-center justify-center text-center">
        {/* Stars */}
        <div
          className={cn(
            "flex items-center gap-2 transition-all duration-1000 delay-500",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-cs-gold text-cs-gold" />
            ))}
          </div>
          <span className="text-xs tracking-widest text-white/40">
            {siteConfig.rating.score}/5
          </span>
        </div>

        {/* Display headline */}
        <div className="mt-8 overflow-hidden">
          <h1
            className={cn(
              "font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,9rem)] italic leading-[0.95] tracking-[-0.02em] text-white transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
              loaded ? "translate-y-0" : "translate-y-[120%]"
            )}
          >
            Dein neues Ich
          </h1>
        </div>

        {/* Subline */}
        <p
          className={cn(
            "mt-6 max-w-md text-base tracking-wide text-white/40 transition-all duration-1000 delay-700",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Fitness, Kurse, Wellness & Sauna in Oer-Erkenschwick.
          <br />
          Persönlich betreut, nicht anonym.
        </p>

        {/* CTA */}
        <div
          className={cn(
            "mt-10 flex items-center gap-6 transition-all duration-1000 delay-900",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Link
            href="/probetraining"
            className="group flex items-center gap-3 bg-cs-accent px-10 py-4 text-sm tracking-wider text-white transition-all duration-500 hover:bg-white hover:text-cs-black"
          >
            Gratis Probetraining
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="hidden text-sm tracking-wider text-white/30 transition-colors duration-300 hover:text-white sm:block"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
