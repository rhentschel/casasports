"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const benefits = [
  "Individueller Trainingsplan nach deinen Zielen",
  "Regelmaessige Koerperanalyse und Fortschrittskontrolle",
  "Technik-Coaching fuer sichere Ausfuehrung",
  "Ernaehrungstipps passend zu deinem Training",
  "Flexible Terminvereinbarung",
];

export function PersonalTraining() {
  const ref = useReveal();

  return (
    <section className="relative overflow-hidden bg-cs-black">
      <div ref={ref} className="reveal relative">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-center px-8 py-32 md:px-16 md:py-40">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-gold">
              Personal Training
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
              Dein Trainer.
              <br />
              <span className="text-cs-gold">Dein Tempo.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/35">
              Du willst mehr als nur ein Geraet bedienen? Im Personal Training
              arbeiten wir gemeinsam an deinen Zielen. Strukturiert,
              motivierend, auf den Punkt.
            </p>

            <ul className="mt-10 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cs-gold/60" />
                  <span className="text-[14px] leading-relaxed text-white/50">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/probetraining"
                className="group inline-flex items-center gap-3 border border-cs-gold/30 px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-cs-gold transition-all duration-500 hover:border-cs-gold hover:bg-cs-gold/10"
              >
                Termin vereinbaren
                <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-[500px] lg:min-h-0">
            <Image
              src="/images/casasports-personal-training.webp"
              alt="Personal Training bei Casa Sports"
              fill
              className="img-cinema object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cs-black via-cs-black/40 to-transparent lg:from-cs-black lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
