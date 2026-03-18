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
    <section className="relative h-screen min-h-[800px] overflow-hidden bg-cs-black">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 animate-[kenburns_20s_ease-in-out_infinite_alternate]">
        <Image
          src="/images/casasports-hero-1.webp"
          alt="Casa Sports Fitnessstudio"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* Decorative vertical line */}
      <div className="absolute left-12 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-cs-accent/30 to-transparent lg:block" />

      {/* Content */}
      <div className="relative flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left: Main content */}
            <div className="lg:col-span-7">
              {/* Rating badge */}
              <div
                className={cn(
                  "mb-10 inline-flex items-center gap-3 transition-all duration-1000",
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-cs-gold text-cs-gold"
                    />
                  ))}
                </div>
                <div className="h-4 w-px bg-white/20" />
                <span className="text-sm font-medium text-white/60">
                  {siteConfig.rating.score}/5 auf Google
                </span>
              </div>

              {/* Tagline */}
              <p
                className={cn(
                  "mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cs-accent transition-all delay-200 duration-1000",
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
              >
                {siteConfig.tagline}
              </p>

              {/* Headline */}
              <h1
                className={cn(
                  "text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-tight text-white transition-all delay-300 duration-1000",
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                )}
              >
                Dein neues
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-cs-accent">Ich</span>
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-cs-accent/30" />
                </span>{" "}
                beginnt
                <br />
                hier.
              </h1>

              {/* Subline */}
              <p
                className={cn(
                  "mt-8 max-w-md text-lg leading-relaxed text-white/50 transition-all delay-500 duration-1000",
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
              >
                Fitnessstudio, Kurse, Wellness und Sauna in Oer-Erkenschwick.
                Persönlich betreut, nicht anonym.
              </p>

              {/* CTAs */}
              <div
                className={cn(
                  "mt-12 flex flex-col gap-4 sm:flex-row transition-all delay-700 duration-1000",
                  loaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
              >
                <Link
                  href="/probetraining"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-cs-accent px-10 py-5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-cs-black"
                >
                  <span className="relative z-10">Gratis Probetraining</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center border border-white/15 px-10 py-5 text-sm font-bold uppercase tracking-wider text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white hover:backdrop-blur-sm"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Right: Vertical feature cards */}
            <div
              className={cn(
                "hidden lg:col-span-5 lg:flex lg:flex-col lg:gap-4 transition-all delay-700 duration-1000",
                loaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              )}
            >
              {[
                {
                  image: "/images/casasports-krafttraining-1.webp",
                  label: "Krafttraining",
                  sub: "Modernste Geräte",
                },
                {
                  image: "/images/casasports-spinning-kurs-1.webp",
                  label: "Kurse",
                  sub: "6 Kursarten",
                },
                {
                  image: "/images/casasports-klafs-sauna.webp",
                  label: "Wellness",
                  sub: "KLAFS Sauna",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="group relative h-36 overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/30"
                >
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/30" />
                  <div className="relative flex h-full items-center justify-between px-6">
                    <div>
                      <p className="text-lg font-bold uppercase tracking-wider text-white">
                        {card.label}
                      </p>
                      <p className="text-xs text-white/50">{card.sub}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-white/30 transition-all duration-500 group-hover:translate-x-2 group-hover:text-cs-accent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl">
          {[
            { value: "500+", label: "Mitglieder" },
            { value: "6", label: "Kursarten" },
            { value: "4,8\u2605", label: "Google Rating" },
            { value: "7/7", label: "Tage geöffnet" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex-1 border-r border-white/5 bg-black/30 px-6 py-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/5",
                i === 3 && "border-r-0"
              )}
            >
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-white/30">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
