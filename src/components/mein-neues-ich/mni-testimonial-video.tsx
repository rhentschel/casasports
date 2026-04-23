"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const YOUTUBE_ID = "aviDr0BCT1g";

export function MniTestimonialVideo() {
  const ref = useReveal();
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Unsere Erfolgsgeschichten
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
            Echte Menschen.
            <br />
            <span className="text-cs-accent">Echte Ergebnisse.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60">
            Hör von Teilnehmenden, die mit dem 12-Wochen-Programm ihr Leben verändert haben.
          </p>
        </div>

        <div className="relative mx-auto mt-14 aspect-video max-w-5xl overflow-hidden border border-white/[0.06] md:mt-20">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="Casa Sports Erfolgsgeschichten"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label="Erfolgsgeschichten Video abspielen"
              className="group absolute inset-0 block h-full w-full"
            >
              <Image
                src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                alt="Casa Sports Erfolgsgeschichten"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="img-cinema object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-black/60 via-cs-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cs-accent/90 backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-cs-accent md:h-24 md:w-24">
                  <Play className="ml-1 h-8 w-8 fill-cs-white text-cs-white md:h-10 md:w-10" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-5 md:px-10 md:py-7">
                <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-cs-white/80">
                  Video ansehen
                </span>
                <span className="text-[11px] font-medium tracking-[0.15em] text-cs-white/50">
                  YouTube
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
