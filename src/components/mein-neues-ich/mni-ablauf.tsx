"use client";

import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Anmeldung",
    description:
      "Ob per E-Mail, Telefon, persönlich im Studio oder online: Du bekommst alle Infos zur Challenge. Danach meldest du dich verbindlich an.",
  },
  {
    number: "02",
    title: "Vorbereitung",
    description:
      "Wir machen ein Startfoto, messen deine Körperwerte und besprechen gemeinsam deine Ziele.",
  },
  {
    number: "03",
    title: "Kennenlernen",
    description:
      "In einer kleinen Runde treffen sich alle Teilnehmenden. Das motiviert, verbindet und macht es leichter dranzubleiben.",
  },
  {
    number: "04",
    title: "Ernährungskonzept",
    description:
      "Du bekommst ein Ernährungskonzept, das zu deinem Alltag und deinem Ziel passt. Keine Diät, sondern ein System, das funktioniert.",
  },
  {
    number: "05",
    title: "Start der Challenge",
    description:
      "Du trainierst bei uns im Studio, angeleitet von unserem Team und zusammen mit anderen, die das gleiche Ziel haben.",
  },
];

export function MniAblauf() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Ablauf der Challenge
        </p>
        <h2 className="mt-4 max-w-lg text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
          Programmablauf
        </h2>

        <div className="mt-16 space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={cn(
                "grid gap-6 border-t border-white/[0.06] py-10 md:grid-cols-[80px_200px_1fr] md:items-start md:gap-12",
                i === steps.length - 1 && "border-b border-white/[0.06]"
              )}
            >
              <span className="text-4xl font-black tracking-[-0.04em] text-white/[0.06] md:text-5xl">
                {step.number}
              </span>
              <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-cs-white">
                {step.title}
              </h3>
              <p className="max-w-lg text-[15px] leading-relaxed text-white/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
