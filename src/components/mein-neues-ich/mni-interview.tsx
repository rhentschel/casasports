"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const YOUTUBE_ID = "eKDN2yc5shk";

const points = [
  {
    label: "Die Idee",
    text: "Warum wir das Programm entwickelt haben und fuer wen es gedacht ist.",
  },
  {
    label: "Der Ablauf",
    text: "Was dich in den 12 Wochen erwartet, Woche fuer Woche.",
  },
  {
    label: "Die Betreuung",
    text: "Wie wir dich begleiten und was dich von Studio-Abos unterscheidet.",
  },
  {
    label: "Dein Ziel",
    text: "Warum Gewicht nicht die einzige Kennzahl ist, die zaehlt.",
  },
];

export function MniInterview() {
  const ref = useReveal();
  const refRight = useReveal();
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-cs-black py-32 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-[900px] -translate-x-1/2 bg-gradient-to-b from-cs-accent/[0.04] via-transparent to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-8 md:px-16">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* Video */}
          <div ref={ref} className="reveal">
            <div className="relative aspect-video overflow-hidden border border-white/[0.08]">
              {playing ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
                  title="Interview: Naim erklaert Mein Neues Ich"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Interview abspielen"
                  className="group absolute inset-0 block h-full w-full"
                >
                  <Image
                    src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                    alt="Interview mit Naim"
                    fill
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="img-cinema object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cs-black/70 via-cs-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-cs-accent/90 backdrop-blur transition-all duration-500 group-hover:scale-110 md:h-24 md:w-24">
                      <span
                        aria-hidden
                        className="absolute inset-0 animate-ping rounded-full bg-cs-accent/40"
                      />
                      <Play className="relative ml-1 h-8 w-8 fill-cs-white text-cs-white md:h-10 md:w-10" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 md:p-8">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-white/70">
                        Interview
                      </p>
                      <p className="mt-2 text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-cs-white md:text-3xl">
                        Naim erklaert das Programm
                      </p>
                    </div>
                    <span className="hidden shrink-0 border border-cs-white/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-cs-white/80 sm:inline-block">
                      YouTube
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div ref={refRight} className="reveal flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Direkt vom Gruender
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
              Naim im
              <br />
              <span className="text-cs-accent">Interview.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              Im Gespraech erklaert Naim, wie das 12-Wochen-Programm aufgebaut ist und warum es auch bei dir funktioniert.
            </p>

            <ul className="mt-10 space-y-5">
              {points.map((p) => (
                <li key={p.label} className="border-l-2 border-cs-accent/40 pl-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-accent">
                    {p.label}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
