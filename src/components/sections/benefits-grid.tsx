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
    title: "Individuelle Trainingspläne",
    description:
      "Kein Schema F. Dein Plan wird auf dein Ziel, dein Level und deinen Alltag zugeschnitten.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Hochwertige Ausstattung",
    description:
      "Von Freihantel bis Kabelzug. Professionelles Equipment auf Studiofläche.",
    icon: <Dumbbell className="h-6 w-6" />,
  },
  {
    title: "Wellness nach dem Workout",
    description:
      "Sauna und Infrarotkabine direkt im Studio. Training und Recovery unter einem Dach.",
    icon: <Flame className="h-6 w-6" />,
  },
  {
    title: "7 Tage geöffnet",
    description:
      "Frühmorgens oder nach Feierabend. Dein Zeitplan bestimmt, wann du kommst.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "12-Wochen-Challenge",
    description:
      "Verbindliches Programm mit Fortschrittskontrolle und echten Ergebnissen.",
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Vielfältige Kurse",
    description:
      "Von Einsteiger bis Fortgeschritten. Gruppentraining, das motiviert.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Ernährungsberatung",
    description:
      "80% passiert in der Küche. Wir zeigen dir was auf den Teller gehört.",
    icon: <Gift className="h-6 w-6" />,
  },
  {
    title: "Starke Community",
    description:
      "Leute die sich gegenseitig pushen. Kein anonymes Laufband-Studio.",
    icon: <Heart className="h-6 w-6" />,
  },
];

export function BenefitsGrid() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Deine Vorteile
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
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
