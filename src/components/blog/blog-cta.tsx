"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useReveal } from "@/lib/use-reveal"

export function BlogCta() {
  const ref = useReveal()

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/casasports-hero-1.webp"
        alt="Casa Sports Fitnessstudio"
        fill
        className="img-cinema object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black/40 to-transparent" />

      <div ref={ref} className="reveal relative z-10 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Jetzt starten
        </p>
        <h2 className="mt-6 text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-white md:text-6xl">
          Genug gelesen.
          <br />
          <span className="text-cs-accent">Zeit zu trainieren.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-sm text-[15px] leading-relaxed text-white/60">
          Dein erstes Training bei Casa Sports geht auf uns. Lern uns kennen und überzeug dich selbst.
        </p>
        <Link
          href="/mitglied-werden"
          className="group mt-10 inline-flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
        >
          Kostenloses Probetraining
          <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
