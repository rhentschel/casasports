"use client";

import { cn } from "@/lib/utils";
import {
  Dumbbell,
  Users,
  Flame,
  Clock,
  Trophy,
  Heart,
  Zap,
  Gift,
} from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const benefits = [
  {
    title: "Persönliche Betreuung",
    description:
      "Dein Trainer kennt dich. Individuelle Pläne statt Massenabfertigung.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Modernste Geräte",
    description:
      "Erstklassiges Equipment für Kraft, Ausdauer und Functional Training.",
    icon: <Dumbbell className="h-6 w-6" />,
  },
  {
    title: "KLAFS Sauna & Infrarot",
    description:
      "Premium Wellness von KLAFS und Röger. Regeneration auf höchstem Niveau.",
    icon: <Flame className="h-6 w-6" />,
  },
  {
    title: "7 Tage geöffnet",
    description:
      "Trainiere wann es dir passt. Flexible Zeiten, die zu deinem Alltag passen.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "12-Wochen-Programm",
    description:
      "Strukturierte Transformation mit messbaren Ergebnissen. Dein neues Ich.",
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "6+ Kursangebote",
    description:
      "Power, Cycling, Functional, Cardio, Zirkel und mehr. Für jedes Level.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Probetraining gratis",
    description:
      "Komm vorbei und überzeug dich selbst. Ohne Verpflichtung, ohne Risiko.",
    icon: <Gift className="h-6 w-6" />,
  },
  {
    title: "Community & Motivation",
    description:
      "Mehr als ein Studio. Eine Gemeinschaft, die dich pusht und trägt.",
    icon: <Heart className="h-6 w-6" />,
  },
];

export function BenefitsGrid() {
  const ref = useReveal();

  return (
    <section className="bg-cs-gray-900 py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Deine Vorteile
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
          Warum Casa Sports.
        </h2>

        <div className="relative z-10 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
              {/* Hover gradient */}
              {index < 4 ? (
                <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-cs-accent/[0.06] to-transparent opacity-0 transition duration-300 group-hover/feature:opacity-100" />
              ) : (
                <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-cs-accent/[0.06] to-transparent opacity-0 transition duration-300 group-hover/feature:opacity-100" />
              )}

              {/* Icon */}
              <div className="relative z-10 mb-4 px-8 text-cs-gray-500 transition-colors duration-300 group-hover/feature:text-cs-accent">
                {benefit.icon}
              </div>

              {/* Title with accent bar */}
              <div className="relative z-10 mb-2 px-8 text-[15px] font-bold">
                <div className="absolute inset-y-0 left-0 h-6 w-[2px] origin-center rounded-r-full bg-cs-gray-700 transition-all duration-300 group-hover/feature:h-8 group-hover/feature:bg-cs-accent" />
                <span className="inline-block text-cs-white transition-transform duration-300 group-hover/feature:translate-x-2">
                  {benefit.title}
                </span>
              </div>

              {/* Description */}
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
