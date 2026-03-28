"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function BlogHero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative flex h-[70svh] min-h-[500px] items-end overflow-hidden">
      <Image
        src="/images/casasports-fitnessstudio-oer-erkenschwick.webp"
        alt="Casa Sports Blog"
        fill
        priority
        className="img-cinema object-cover animate-[kenburns_30s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-transparent to-cs-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-20 md:px-16">
        <p
          className={cn(
            "text-xs font-medium uppercase tracking-[0.2em] text-cs-accent transition-all duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          Wissen & Inspiration
        </p>

        <div className="mt-4 overflow-hidden">
          <h1
            className={cn(
              "text-[clamp(2.4rem,6vw,5rem)] font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
              loaded ? "translate-y-0" : "translate-y-[120%]"
            )}
          >
            Blog
          </h1>
        </div>

        <p
          className={cn(
            "mt-6 max-w-lg text-[15px] leading-relaxed text-white/60 transition-all duration-1000 delay-500",
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Trainingstipps, Ernaehrungswissen und Wellness-Strategien von unserem Team.
          Fundiert, praxisnah, fuer jedes Level.
        </p>
      </div>
    </section>
  )
}
