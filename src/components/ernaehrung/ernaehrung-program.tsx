"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Utensils, TrendingUp, Users } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const steps = [
  {
    icon: <Utensils className="h-5 w-5" />,
    title: "Analyse",
    text: "Wir schauen uns an, wie du dich aktuell ernaehrst und wo die Stellschrauben sind.",
  },
  {
    icon: <Flame className="h-5 w-5" />,
    title: "Strategie",
    text: "Gemeinsam entwickeln wir eine Ernaehrungsstrategie, die zu deinem Training und Alltag passt.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Umsetzung",
    text: "Schritt fuer Schritt setzen wir um. Keine radikale Umstellung, sondern nachhaltige Anpassungen.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Begleitung",
    text: "Unser Team begleitet dich. Fragen, Anpassungen, Motivation. Du bist nicht allein.",
  },
];

export function ErnaehrungProgram() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/team-training-1.webp"
              alt="Ernaehrungsprogramm Casa Sports"
              fill
              className="img-cinema object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cs-black/20 to-transparent lg:bg-gradient-to-l" />

            {/* Overlay badge */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="border border-white/10 bg-cs-black/80 px-6 py-4 backdrop-blur-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
                  Mein Neues Ich
                </p>
                <p className="mt-1 text-[14px] font-semibold text-white">
                  12-Wochen-Programm
                </p>
                <p className="mt-1 text-[12px] text-white/35">
                  Training + Ernaehrung + Betreuung. Alles in einem Programm.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              So laeuft es ab
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
              In vier Schritten
              <br />
              <span className="text-cs-accent">zu besserer Ernaehrung.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/35">
              Ob du abnehmen, Muskeln aufbauen oder einfach gesuender leben
              willst. Wir starten dort, wo du gerade stehst.
            </p>

            <div className="mt-10 space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/[0.08] text-cs-accent/60">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-bold text-cs-accent/40">
                        0{index + 1}
                      </span>
                      <h3 className="text-[15px] font-bold text-cs-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/40">
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
                Mehr zum Programm
                <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
