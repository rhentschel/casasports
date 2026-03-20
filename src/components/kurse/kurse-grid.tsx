"use client";

import Image from "next/image";
import {
  Dumbbell,
  RotateCcw,
  Bike,
  Activity,
  Heart,
  Users,
} from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

const courses = [
  {
    image: "/images/casasports-krafttraining-1.webp",
    title: "Power Training",
    description:
      "Intensives Krafttraining fuer maximale Ergebnisse. Langhantel, Kurzhanteln und Bodyweight in einem strukturierten Kursformat.",
    level: "Alle Level",
    duration: "45 Min",
    icon: <Dumbbell className="h-5 w-5" />,
  },
  {
    image: "/images/casasports-spinning-kurs-1.webp",
    title: "Cycling",
    description:
      "Indoor Cycling mit motivierender Musik und wechselnden Intensitaeten. Dein Herz-Kreislauf-Booster.",
    level: "Alle Level",
    duration: "45 Min",
    icon: <Bike className="h-5 w-5" />,
  },
  {
    image: "/images/casasports-functional-training.webp",
    title: "Functional Training",
    description:
      "Funktionelle Bewegungsmuster fuer mehr Mobilitaet, Stabilitaet und Alltagskraft. Kettlebells, TRX und Eigengewicht.",
    level: "Alle Level",
    duration: "50 Min",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    image: "/images/casasports-kardio-power.webp",
    title: "Cardio Kurse",
    description:
      "Ausdauertraining das Spass macht. Intervalle, Choreografien und Teamwork fuer effektive Fettverbrennung.",
    level: "Einsteiger",
    duration: "45 Min",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    image: "/images/casasports-kurse-fuer-alle.webp",
    title: "Zirkeltraining",
    description:
      "Ganzkörper-Workout im Zirkel. Station fuer Station arbeitest du dich durch Kraft- und Ausdaueruebungen.",
    level: "Alle Level",
    duration: "50 Min",
    icon: <RotateCcw className="h-5 w-5" />,
  },
  {
    image: "/images/casasports-gruppentraining.webp",
    title: "Gruppentraining",
    description:
      "Gemeinsam trainieren, gemeinsam wachsen. Wechselnde Formate und Schwerpunkte halten das Training abwechslungsreich.",
    level: "Alle Level",
    duration: "60 Min",
    icon: <Users className="h-5 w-5" />,
  },
];

export function KurseGrid() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Unser Angebot
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
          Kurse, die bewegen.
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/35">
          Jeder Kurs wird von erfahrenen Trainern geleitet. Kleine Gruppen,
          persoenliche Korrekturen, echte Ergebnisse.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />

                {/* Tags on image */}
                <div className="absolute right-4 top-4 flex gap-2">
                  <span className="bg-cs-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 backdrop-blur-sm">
                    {course.duration}
                  </span>
                  <span className="bg-cs-accent/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Content below */}
              <div className="border border-t-0 border-white/[0.06] p-6 transition-colors duration-500 group-hover:border-white/[0.1]">
                <div className="flex items-center gap-3">
                  <div className="text-cs-gray-500 transition-colors duration-300 group-hover:text-cs-accent">
                    {course.icon}
                  </div>
                  <h3 className="text-[15px] font-black uppercase tracking-[-0.01em] text-cs-white">
                    {course.title}
                  </h3>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-cs-gray-400">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
