"use client";

import Image from "next/image";
import { useReveal } from "@/lib/use-reveal";

export function MniQuote() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Motivation, die dich stark macht
            </p>
            <blockquote className="mt-6 text-2xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-cs-white md:text-3xl lg:text-4xl">
              &bdquo;Dein neues Ich ist nicht das, was du erreichen wirst.
              Es ist das, was du heute schaffst, indem du alles ablegst,
              was du nicht mehr bist.&ldquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src="/images/naim-casasports.webp"
                  alt="Naim Obeid"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-cs-white">Naim Obeid</p>
                <p className="text-[13px] text-white/50">
                  Personal Trainer & Gründer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
