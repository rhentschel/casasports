"use client";

import Image from "next/image";
import {
  Dumbbell,
  Gauge,
  Repeat,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const highlights = [
  {
    icon: <Dumbbell className="h-5 w-5" />,
    title: "Freihanteln bis 60 kg",
    text: "Komplett ausgestatteter Kurzhantelbereich für jedes Level.",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Moderne Cardiogeraete",
    text: "Laufbaender, Crosstrainer und Bikes mit integrierten Displays.",
  },
  {
    icon: <Repeat className="h-5 w-5" />,
    title: "Kabelzug-Station",
    text: "Vielseitige Übungsauswahl für isoliertes und funktionelles Training.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Functional Equipment",
    text: "Kettlebells, Battle Ropes, Plyoboxen und TRX-Schlingen.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Regelmäßige Wartung",
    text: "Alle Geraete werden professionell gewartet und gepflegt.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Sauberkeit & Hygiene",
    text: "Desinfektionsstationen an jedem Bereich. Weil Respekt Standard ist.",
  },
];

export function EquipmentShowcase() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/casasports-fitnessstudio-oer-erkenschwick.webp"
              alt="Fitnessstudio Casa Sports Ausstattung"
              fill
              className="img-cinema object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cs-black/20 to-transparent lg:bg-gradient-to-l" />
          </div>

          {/* Content side */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Ausstattung
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
              Equipment, das
              <br />
              <span className="text-cs-accent">keine Wuensche</span> offen
              lässt.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60">
              Wir investieren in Qualitaet. Nicht in Masse. Jedes Geraet ist
              ausgewählt, damit du effizient und sicher trainieren kannst.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-0 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    "group/item flex gap-4 border-white/[0.06] py-6 pr-4",
                    index % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6",
                    index < highlights.length - 2 && "border-b"
                  )}
                >
                  <div className="shrink-0 text-cs-gray-500 transition-colors duration-300 group-hover/item:text-cs-accent">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-cs-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-cs-gray-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
