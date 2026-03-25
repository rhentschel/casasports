"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const highlights = [
  "Personal Training & Gruppentraining",
  "Individuelles Ernährungskonzept",
  "Motivation & mentales Coaching",
  "Familiäre Atmosphäre im Studio",
  "Kein Abo, keine versteckten Kosten",
];

export function MniQuote() {
  const ref = useReveal();

  return (
    <section className="relative overflow-hidden bg-cs-black">
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-7xl lg:grid-cols-2"
      >
        {/* Left: Content */}
        <div className="flex flex-col justify-center px-8 py-24 md:px-16 md:py-32 lg:pr-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Motivation, die dich stark macht
          </p>
          <blockquote className="mt-6 text-2xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-cs-white md:text-3xl">
            &bdquo;Dein neues Ich ist nicht das, was du erreichen wirst.
            Es ist das, was du heute schaffst.&ldquo;
          </blockquote>

          <div className="mt-6 flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/images/naim-casasports.webp"
                alt="Naim Obeid"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-cs-white">Naim Obeid</p>
              <p className="text-[13px] text-white/50">Personal Trainer</p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/[0.06] pt-8">
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cs-accent/60" />
                  <span className="text-[14px] leading-relaxed text-white/50">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <Image
            src="/images/casasports-personal-training.webp"
            alt="Personal Training bei Casa Sports"
            fill
            className="img-cinema object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cs-black via-cs-black/30 to-transparent lg:from-cs-black lg:via-transparent lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
