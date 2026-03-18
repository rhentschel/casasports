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
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-cs-black">
      {/* Background */}
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Content - links, kraftvoll */}
      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          {/* Rating */}
          <div
            className={cn(
              "mb-10 flex items-center gap-3 transition-all duration-700",
              loaded ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-cs-gold text-cs-gold" />
              ))}
            </div>
            <span className="text-xs tracking-widest text-white/40">
              {siteConfig.rating.score}/5 Google
            </span>
          </div>

          {/* Headline - clip reveal */}
          <div className="overflow-hidden">
            <h1
              className={cn(
                "text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-white transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              Dein neues
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className={cn(
                "text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] transition-transform delay-150 duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              <span className="text-cs-accent">Ich</span>{" "}
              <span className="text-white">beginnt hier.</span>
            </h1>
          </div>

          {/* Sub */}
          <p
            className={cn(
              "mt-8 max-w-md text-base leading-relaxed text-white/40 transition-all delay-500 duration-1000",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Fitness, Kurse, Wellness & Sauna in Oer-Erkenschwick.
            <br />
            Persönlich betreut, nicht anonym.
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "mt-10 flex items-center gap-6 transition-all delay-700 duration-1000",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Link
              href="/probetraining"
              className="group flex items-center gap-3 bg-cs-accent px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-white hover:text-cs-black"
            >
              Gratis Probetraining
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="hidden text-xs tracking-[0.15em] text-white/30 transition-colors duration-300 hover:text-white sm:block"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl gap-16 px-6 py-6">
          {[
            { value: "500+", label: "Mitglieder" },
            { value: "6", label: "Kursarten" },
            { value: "7/7", label: "Tage offen" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-sm font-bold text-white/50">{stat.value}</p>
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
