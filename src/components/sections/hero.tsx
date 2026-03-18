import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <Image
        src="/images/casasports-hero-1.webp"
        alt="Casa Sports Fitnessstudio"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      <div className="relative flex h-full items-end pb-20 md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-cs-gold text-cs-gold"
                  />
                ))}
              </div>
              <span className="text-sm text-white/80">
                {siteConfig.rating.score}/5 auf Google
              </span>
            </div>

            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Dein neues
              <br />
              <span className="text-cs-accent">Ich</span> beginnt
              <br />
              hier.
            </h1>

            <p className="mt-6 max-w-md text-lg text-white/70">
              Fitnessstudio, Kurse, Wellness und Sauna in Oer-Erkenschwick.
              Persönlich betreut, nicht anonym.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/probetraining"
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-cs-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-cs-black"
              >
                Gratis Probetraining
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {[
            { value: "500+", label: "Mitglieder" },
            { value: "6", label: "Kursarten" },
            { value: "4,8\u2605", label: "Google" },
            { value: "7/7", label: "Tage offen" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-bold text-white md:text-xl">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
