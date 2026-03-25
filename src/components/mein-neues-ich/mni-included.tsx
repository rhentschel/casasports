"use client";

import { Users, Dumbbell, Apple, Monitor } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const features = [
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Personal Training",
    description: "Individuell angepasste Trainingseinheiten mit persönlicher Betreuung.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gruppen Training",
    description: "Zusammen trainieren, zusammen schwitzen, zusammen wachsen.",
  },
  {
    icon: <Apple className="h-6 w-6" />,
    title: "Ernährungsberatung",
    description: "Rezept-E-Book und Konzept, das zu deinem Alltag passt. Kein Kalorienzählen.",
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Online Coaching",
    description: "Begleitung auch außerhalb des Studios. Motivation, Tipps und Support.",
  },
];

export function MniIncluded() {
  const ref = useReveal();

  return (
    <section className="bg-cs-gray-900 py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Alles inklusive
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
            Das steckt drin.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/60">
            299 € für 12 Wochen. Training, Ernährungscoaching, Motivation
            in der Gruppe und persönliche Betreuung. Keine versteckten Kosten,
            kein Abo.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-5 border border-white/[0.06] p-6"
            >
              <div className="shrink-0 text-cs-accent">{f.icon}</div>
              <div>
                <h3 className="text-sm font-black uppercase text-cs-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/50">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
