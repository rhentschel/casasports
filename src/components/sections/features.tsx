"use client";

import Image from "next/image";
import { useReveal } from "@/lib/use-reveal";

const features = [
  {
    image: "/images/casasports-geraete.webp",
    title: "Training",
    text: "Dein Körper verdient das beste Equipment. Punkt.",
  },
  {
    image: "/images/casasports-personal-training.webp",
    title: "Betreuung",
    text: "Hier bist du keine Nummer. Hier bist du Name, Ziel und Plan.",
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    title: "Regeneration",
    text: "Nach dem Training beginnt das Wachstum. Sauna, Infrarot, Ruhe.",
  },
];

export function Features() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-40 md:py-48">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Was uns ausmacht
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
          Drei Gründe.
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-black/90 via-cs-black/20 to-transparent" />

              {/* Accent line bottom */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 max-h-0 overflow-hidden text-[14px] leading-relaxed text-white/50 transition-all duration-[600ms] ease-[var(--ease-hover)] group-hover:max-h-24">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
