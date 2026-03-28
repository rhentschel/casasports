"use client";

import Image from "next/image";
import { useReveal } from "@/lib/use-reveal";

const stats = [
  { value: "12", label: "Wochen" },
  { value: "299€", label: "All-inclusive" },
  { value: "2-3x", label: "Pro Woche" },
  { value: "0", label: "Versteckte Kosten" },
];

export function MniQuote() {
  const ref = useReveal();
  const refStats = useReveal();

  return (
    <section className="relative mt-20 overflow-hidden bg-cs-black md:mt-32">
      {/* Background image - subtle, cinematic */}
      <div className="absolute inset-0">
        <Image
          src="/images/casasports-personal-training.webp"
          alt=""
          fill
          className="img-cinema object-cover opacity-15"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-cs-black via-transparent to-cs-black" />

      <div className="relative z-10">
        {/* Quote */}
        <div ref={ref} className="reveal mx-auto max-w-7xl px-8 pb-20 pt-32 md:px-16 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-cs-accent/30">
                <Image
                  src="/images/naim-casasports.webp"
                  alt="Naim Obeid"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <blockquote className="text-2xl font-black uppercase leading-[1.1] tracking-[-0.02em] text-cs-white md:text-4xl lg:text-5xl">
              &bdquo;Dein neues Ich ist nicht das, was du erreichen wirst.
              <br className="hidden md:block" />
              <span className="text-cs-accent"> Es ist das, was du heute schaffst.&ldquo;</span>
            </blockquote>

            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 bg-cs-accent/40" />
              <p className="text-[13px] font-medium tracking-[0.1em] text-cs-gray-400">
                Naim Obeid, Gruender Casa Sports
              </p>
              <div className="h-[1px] w-8 bg-cs-accent/40" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div ref={refStats} className="reveal border-t border-b border-white/[0.04]">
          <div className="mx-auto grid max-w-5xl grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-10 text-center ${
                  i < 3 ? "border-r border-white/[0.04]" : ""
                } ${i < 2 ? "border-b border-white/[0.04] lg:border-b-0" : ""}`}
              >
                <p className="text-3xl font-black tracking-[-0.03em] text-cs-accent md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.2em] text-cs-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
