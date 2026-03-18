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
    setLoaded(true);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[700px] items-center overflow-hidden bg-cs-black">
      {/* Ken Burns Background */}
      <div className="absolute inset-0 animate-[kenburns_25s_ease-in-out_infinite_alternate]">
        <Image
          src="/images/casasports-hero-1.webp"
          alt="Casa Sports Fitnessstudio"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      {/* Thin decorative line */}
      <div className="absolute left-[calc(50%-600px)] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent xl:block" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Rating */}
        <div
          className={cn(
            "mb-12 flex items-center gap-3 transition-all duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-cs-gold text-cs-gold" />
            ))}
          </div>
          <span className="text-sm font-light tracking-wide text-white/50">
            {siteConfig.rating.score}/5 Google
          </span>
        </div>

        {/* Headline with clip reveal */}
        <div className="overflow-hidden">
          <h1
            className={cn(
              "text-[clamp(3.5rem,9vw,8rem)] font-extralight leading-[0.9] tracking-[-0.03em] text-white transition-transform duration-1000 ease-out",
              loaded ? "translate-y-0" : "translate-y-full"
            )}
          >
            Dein neues
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className={cn(
              "text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.9] tracking-[-0.03em] text-white transition-transform delay-150 duration-1000 ease-out",
              loaded ? "translate-y-0" : "translate-y-full"
            )}
          >
            <span className="text-cs-accent">Ich</span> beginnt hier.
          </h1>
        </div>

        {/* Subline */}
        <p
          className={cn(
            "mt-10 max-w-md text-lg font-light leading-relaxed text-white/40 transition-all delay-500 duration-1000",
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          Fitness, Kurse, Wellness und Sauna.
          <br />
          Persönlich betreut in Oer-Erkenschwick.
        </p>

        {/* CTAs */}
        <div
          className={cn(
            "mt-12 flex flex-col gap-4 sm:flex-row transition-all delay-700 duration-1000",
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <Link
            href="/probetraining"
            className="group inline-flex items-center gap-3 bg-cs-accent px-10 py-5 text-sm font-medium tracking-wider text-white transition-all duration-500 hover:bg-white hover:text-cs-black"
          >
            Gratis Probetraining
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center px-10 py-5 text-sm font-light tracking-wider text-white/40 transition-all duration-500 hover:text-white"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>

      {/* Minimal bottom stats */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto flex max-w-7xl justify-start gap-16 px-6 py-8">
          {[
            { value: "500+", label: "Mitglieder" },
            { value: "6", label: "Kursarten" },
            { value: "7/7", label: "Tage offen" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-light text-white/60">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/20">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
