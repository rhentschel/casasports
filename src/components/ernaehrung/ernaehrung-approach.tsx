"use client";

import Image from "next/image";
import { useReveal } from "@/lib/use-reveal";

const problems = [
  {
    image: "/images/casasports-krafttraining-1.webp",
    title: "Hartes Training",
    text: "Du gibst alles. Aber ohne die richtige Ernaehrung baust du langsamer auf als noetig.",
  },
  {
    image: "/images/casasports-kardio-power.webp",
    title: "Keine Energie",
    text: "Muede im Training, muede im Alltag. Oft liegt es nicht am Schlaf, sondern am Teller.",
  },
  {
    image: "/images/casasports-functional-training.webp",
    title: "Kein Fortschritt",
    text: "Wochen vergehen, die Waage bewegt sich nicht. Das Problem ist selten das Training.",
  },
];

export function ErnaehrungApproach() {
  const ref = useReveal();

  return (
    <>
      {/* Marquee statement */}
      <div className="overflow-hidden border-y border-white/[0.04] bg-cs-black py-5">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[
            "Proteine",
            "Mahlzeitenplanung",
            "Hydration",
            "Naehrstoff-Timing",
            "Supplements",
            "Koerperanalyse",
            "Proteine",
            "Mahlzeitenplanung",
            "Hydration",
            "Naehrstoff-Timing",
            "Supplements",
            "Koerperanalyse",
          ].map((item, i) => (
            <span key={i} className="mx-8 flex items-center gap-8">
              <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-cs-gray-600">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-cs-accent/30" />
            </span>
          ))}
        </div>
      </div>

      {/* Problem cards - like homepage Features */}
      <section className="bg-cs-black py-40 md:py-48">
        <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Das Problem
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
            Kennst du das?
          </h2>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
              >
                <Image
                  src={problem.image}
                  alt={problem.title}
                  fill
                  className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cs-black/90 via-cs-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-white">
                    {problem.title}
                  </h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-[14px] leading-relaxed text-white/50 transition-all duration-[600ms] ease-[var(--ease-hover)] group-hover:max-h-24">
                    {problem.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
