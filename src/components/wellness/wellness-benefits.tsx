"use client";

import {
  Heart,
  Shield,
  Moon,
  Zap,
  Sparkles,
  Brain,
  Droplets,
  Timer,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const benefits = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Schnellere Regeneration",
    description:
      "Wärme steigert die Durchblutung und beschleunigt den Abtransport von Stoffwechselprodukten. Dein nächstes Training kommt schneller.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Herz-Kreislauf-Training",
    description:
      "Regelmäßige Saunagaenge trainieren dein Herz-Kreislauf-System und senken nachweislich den Blutdruck.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Stärkeres Immunsystem",
    description:
      "Der Wechsel zwischen Wärme und Abkuehlung haertet ab. Studien zeigen: Saunagaenger sind seltener krank.",
  },
  {
    icon: <Moon className="h-6 w-6" />,
    title: "Besserer Schlaf",
    description:
      "Die Tiefenentspannung nach der Sauna fördert einen tiefen, erholsamen Schlaf. Und im Schlaf wachsen Muskeln.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Stressabbau",
    description:
      "Wärme senkt den Cortisolspiegel und schüttet Endorphine aus. Du gehst entspannter nach Hause als du gekommen bist.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Besseres Hautbild",
    description:
      "Sauna oeffnet die Poren und regt die Hauterneuerung an. Der Glow kommt von innen.",
  },
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Entgiftung",
    description:
      "Intensives Schwitzen unterstützt den Körper beim Ausscheiden von Giftstoffen über die Haut.",
  },
  {
    icon: <Timer className="h-6 w-6" />,
    title: "Weniger Muskelkater",
    description:
      "Infrarotwärme dringt tief in die Muskulatur und lindert Verspannungen und Muskelkater nach dem Training.",
  },
];

export function WellnessBenefits() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Warum Wellness zum Training gehoert
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
            Training allein ist nur
            <br />
            <span className="text-cs-accent">die halbe Wahrheit.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/60">
            Wer trainiert, baut Reize. Wer regeneriert, baut Ergebnisse. Sauna
            und Infrarot sind keine Extras, sie gehoeren zu jedem ernsthaften
            Trainingsplan.
          </p>
        </div>

        <div className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "group/feature relative flex flex-col border-white/[0.06] py-10",
                "lg:border-r",
                (index === 0 || index === 4) && "lg:border-l",
                index < 4 && "lg:border-b"
              )}
            >
              <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-cs-accent/[0.04] to-transparent opacity-0 transition duration-300 group-hover/feature:opacity-100" />

              <div className="relative z-10 mb-4 px-8 text-cs-gray-500 transition-colors duration-300 group-hover/feature:text-cs-accent">
                {benefit.icon}
              </div>

              <div className="relative z-10 mb-2 px-8 text-[15px] font-bold">
                <div className="absolute inset-y-0 left-0 h-6 w-[2px] origin-center rounded-r-full bg-cs-gray-700 transition-all duration-300 group-hover/feature:h-8 group-hover/feature:bg-cs-accent" />
                <span className="inline-block text-cs-white transition-transform duration-300 group-hover/feature:translate-x-2">
                  {benefit.title}
                </span>
              </div>

              <p className="relative z-10 max-w-xs px-8 text-[13px] leading-relaxed text-cs-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
