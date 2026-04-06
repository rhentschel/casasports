"use client";

import Image from "next/image";
import { useReveal } from "@/lib/use-reveal";
import { Quote } from "lucide-react";

const teamVoices = [
  {
    name: "Naim Obeid",
    role: "Inhaber & Gruender",
    image: "/images/naim-casasports.webp",
    quote:
      "Wir suchen keine Lebenslauefe, wir suchen Persoenlichkeiten. Menschen, die Bock auf Fitness haben und andere mitreissen koennen.",
    years: "Seit 2010",
  },
  {
    name: "Hidayet",
    role: "Studioleiter",
    image: "/images/team-hidayet.avif",
    quote:
      "Was mich hier haelt? Das Team. Wir arbeiten zusammen, trainieren zusammen, wachsen zusammen. Das findest du nicht ueberall.",
    years: "Seit 2018",
  },
  {
    name: "Jennifer",
    role: "Trainerin",
    image: "/images/team-jennifer.avif",
    quote:
      "Wenn ein Mitglied nach Wochen sagt: Ich fuehle mich endlich wieder fit. Das ist der Moment, fuer den ich jeden Morgen aufstehe.",
    years: "Seit 2021",
  },
  {
    name: "Eren",
    role: "Auszubildender",
    image: "/images/team-eren.avif",
    quote:
      "Ich lerne hier mehr als in jedem Klassenzimmer. Vom ersten Tag an wurde ich ernst genommen und durfte Verantwortung uebernehmen.",
    years: "Seit 2024",
  },
];

export function JobsTeamVoices() {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal bg-cs-black py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Stimmen aus dem Team
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
          Was unser Team <span className="text-cs-accent">sagt.</span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {teamVoices.map((member) => (
            <div
              key={member.name}
              className="group relative border border-white/[0.04] bg-cs-gray-900/30 p-8 transition-all duration-500 hover:border-white/[0.08] md:p-10"
            >
              <Quote className="absolute right-8 top-8 h-8 w-8 text-white/[0.03] transition-colors duration-500 group-hover:text-cs-accent/10" />

              <p className="relative text-[15px] leading-[1.8] text-white/60">
                &ldquo;{member.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/[0.04] pt-6">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-cs-white">
                    {member.name}
                  </p>
                  <p className="text-xs text-cs-gray-500">
                    {member.role} &middot; {member.years}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
