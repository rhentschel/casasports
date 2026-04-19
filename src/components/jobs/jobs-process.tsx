"use client";

import { useReveal } from "@/lib/use-reveal";
import { Send, Users, Dumbbell, PartyPopper } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Send,
    title: "Bewerben",
    description:
      "Füllle unser Formular aus oder schick uns eine E-Mail. Kein formelles Anschreiben noetig, erzähl einfach von dir.",
    detail: "Dauert ca. 5 Minuten",
  },
  {
    number: "02",
    icon: Users,
    title: "Kennenlernen",
    description:
      "Wir laden dich zu einem lockeren Gespräch ins Studio ein. Kein Assessment-Center, sondern echtes Kennenlernen auf Augenhoehe.",
    detail: "Innerhalb von 7 Tagen",
  },
  {
    number: "03",
    icon: Dumbbell,
    title: "Probearbeiten",
    description:
      "Arbeite 1-2 Tage bei uns mit. Lerne das Team kennen, erlebe den Alltag und finde heraus, ob wir zueinander passen.",
    detail: "1-2 Tage bezahlt",
  },
  {
    number: "04",
    icon: PartyPopper,
    title: "Willkommen",
    description:
      "Passt alles? Dann starten wir gemeinsam durch. Mit persönlicher Einarbeitung und deinem eigenen Mentoren aus dem Team.",
    detail: "Individuelle Einarbeitung",
  },
];

export function JobsProcess() {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal bg-cs-gray-900/30 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Dein Weg zu uns
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
            In 4 Schritten <span className="text-cs-accent">ins Team.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
            Unser Bewerbungsprozess ist unkompliziert und transparent.
            Kein Marathon aus Bewerbungsrunden, sondern ein ehrlicher Austausch.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Connection line (desktop) */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-cs-accent/20 to-transparent lg:block" />

          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap lg:flex-nowrap">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="group relative flex flex-1 flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative mb-8 flex h-20 w-20 shrink-0 items-center justify-center border border-white/[0.06] bg-cs-black transition-all duration-500 group-hover:border-cs-accent/30">
                  <step.icon className="h-6 w-6 text-cs-accent" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center bg-cs-accent text-[10px] font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-cs-white">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cs-gray-400">
                  {step.description}
                </p>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.15em] text-cs-accent/70">
                  {step.detail}
                </p>

                {/* Arrow between steps (desktop) */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-4 top-10 hidden text-white/10 lg:block">
                    &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
