"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const steps = [
  { number: "01", label: "Analyse", text: "Wo stehst du? Was isst du aktuell?" },
  { number: "02", label: "Strategie", text: "Was muss sich ändern? Was funktioniert schon?" },
  { number: "03", label: "Umsetzung", text: "Kleine Schritte, große Wirkung. Keine Radikalkur." },
  { number: "04", label: "Begleitung", text: "Wir bleiben dran. Anpassungen, Fragen, Motivation." },
];

export function ErnaehrungCTA() {
  const ref = useReveal();

  return (
    <>
      {/* Steps section */}
      <section className="bg-cs-black py-32 md:py-40">
        <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image with overlay badge */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/team-training-1.webp"
                alt="Ernährungsprogramm Casa Sports"
                fill
                className="img-cinema object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cs-black/20 to-transparent lg:bg-gradient-to-l" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="border border-white/10 bg-cs-black/80 px-6 py-4 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
                    Mein Neues Ich
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    12-Wochen-Programm
                  </p>
                  <p className="mt-1 text-base text-white/60">
                    Training + Ernährung + Betreuung. Alles in einem.
                  </p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Dein Weg
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
                Vier Schritte.
                <br />
                <span className="text-cs-accent">Kein Hokuspokus.</span>
              </h2>

              <div className="mt-10 space-y-6">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <span className="mt-0.5 text-2xl font-black tracking-[-0.04em] text-cs-accent/20">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-cs-white">
                        {step.label}
                      </h3>
                      <p className="mt-1 text-base leading-relaxed text-white/60">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/mein-neues-ich"
                  className="group inline-flex items-center gap-3 border border-cs-accent/30 px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-cs-accent transition-all duration-500 hover:border-cs-accent hover:bg-cs-accent/10"
                >
                  Zum 12-Wochen-Programm
                  <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/casasports-fitnessstudio-oer-erkenschwick.webp"
          alt="Casa Sports Oer-Erkenschwick"
          fill
          className="img-cinema object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-cs-black/40 to-transparent" />

        <div className="relative z-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Bereit?
          </p>
          <h2 className="mt-6 text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
            Dein Körper verdient
            <br />
            den richtigen <span className="text-cs-accent">Treibstoff.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-sm text-base leading-relaxed text-white/60">
            Komm vorbei, trainiere kostenlos und sprich mit unserem Team über
            deine Ernährung. Unverbindlich.
          </p>
          <Link
            href="/probetraining"
            className="group mt-10 inline-flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
          >
            Gratis Probetraining
          </Link>
        </div>
      </section>
    </>
  );
}
