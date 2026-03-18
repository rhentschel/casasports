"use client";

import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const programs = [
  {
    title: "Mein Neues Ich",
    subtitle: "12-Wochen-Challenge",
    text: "12W",
  },
  {
    title: "Probetraining",
    subtitle: "Kostenlos & unverbindlich",
    text: "FREE",
  },
  {
    title: "Mitgliedschaft",
    subtitle: "Flexible Tarife",
    text: "JOIN",
  },
];

export function ProgramCards() {
  const ref = useReveal();

  return (
    <section className="bg-cs-gray-900 py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Dein Start
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
          Wähle deinen Weg.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="relative flex flex-col items-start border border-white/[0.08] p-5"
            >
              <Icon className="absolute -left-3 -top-3 h-6 w-6 text-white/20" />
              <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-white/20" />

              <div className="h-[280px] w-full">
                <EvervaultCard text={program.text} />
              </div>

              <h3 className="mt-4 text-sm font-black uppercase tracking-[-0.01em] text-cs-white">
                {program.title}
              </h3>
              <p className="mt-1 text-[13px] text-cs-gray-400">
                {program.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/mein-neues-ich"
            className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cs-gray-500 transition-colors duration-[400ms] hover:text-white"
          >
            Mehr erfahren
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-[400ms] group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
