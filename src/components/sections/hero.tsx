import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-cs-black pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(230,57,70,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,168,76,0.05)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cs-gray-700 bg-cs-gray-800/50 px-4 py-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-cs-gold text-cs-gold"
                />
              ))}
            </div>
            <span className="text-sm text-cs-gray-300">
              {siteConfig.rating.score}/{siteConfig.rating.max} &mdash;{" "}
              {siteConfig.rating.label}
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cs-accent">
            {siteConfig.tagline}
          </p>

          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-cs-white md:text-7xl">
            Dein Fitnessstudio
            <br />
            in{" "}
            <span className="bg-gradient-to-r from-cs-white to-cs-gray-400 bg-clip-text text-transparent">
              Oer-Erkenschwick
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cs-gray-400 md:text-xl">
            Jeder Tag ist eine neue Chance auf das Leben, das du verdienst.
            Fitness, Wellness und Kurse unter einem Dach.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/probetraining"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cs-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-cs-accent-hover hover:gap-3"
            >
              Kostenloses Probetraining
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/fitness"
              className="inline-flex items-center justify-center rounded-lg border border-cs-gray-700 px-8 py-4 text-base font-semibold text-cs-white transition-colors hover:border-cs-gray-500 hover:bg-cs-gray-800"
            >
              Studio entdecken
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-cs-gray-800 pt-12 md:grid-cols-4">
          {[
            { value: "500+", label: "Aktive Mitglieder" },
            { value: "6+", label: "Kursangebote" },
            { value: "4,8", label: "Google Bewertung" },
            { value: "7/7", label: "Tage geöffnet" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-cs-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-cs-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
