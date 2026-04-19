"use client";

import Image from "next/image";
import { useReveal } from "@/lib/use-reveal";

const areas = [
  {
    image: "/images/casasports-krafttraining-1.webp",
    title: "Kraftbereich",
    description:
      "Freihanteln, Kabelzuege und gefuehrte Geraete. Alles, was du für gezielten Muskelaufbau brauchst.",
    stats: "Freihantel & Maschinen",
  },
  {
    image: "/images/casasports-kardio-power.webp",
    title: "Cardio-Floor",
    description:
      "Laufbaender, Crosstrainer und Ergometer. Effektives Ausdauertraining mit Blick aufs Ganze.",
    stats: "Ausdauer & Fettverbrennung",
  },
  {
    image: "/images/casasports-functional-training.webp",
    title: "Functional Area",
    description:
      "Kettlebells, Battle Ropes, TRX und freie Flaeche. Training das deinen Körper als Einheit fordert.",
    stats: "Beweglichkeit & Stabilitaet",
  },
];

export function TrainingAreas() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Trainingsbereiche
        </p>
        <h2 className="mt-4 max-w-lg text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
          Drei Bereiche. Ein Ziel.
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
          Jeder Bereich ist durchdacht eingerichtet. Damit du dich auf das
          konzentrieren kannst, was zählt: dein Training.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
            >
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-black/90 via-cs-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cs-accent/70">
                  {area.stats}
                </p>
                <h3 className="mt-2 text-xl font-black uppercase tracking-[-0.01em] text-white">
                  {area.title}
                </h3>
                <p className="mt-3 max-h-0 overflow-hidden text-[14px] leading-relaxed text-white/50 transition-all duration-[600ms] ease-[var(--ease-hover)] group-hover:max-h-24">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
