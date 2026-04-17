"use client";

import Image from "next/image";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

type Trainer = {
  name: string;
  role: string;
  image: string;
  video?: string;
};

const trainers: Trainer[] = [
  {
    name: "Naim",
    role: "Gruender & Personal Trainer",
    image: "/images/naim-casasports.webp",
    video: "/videos/naim.mp4",
  },
  {
    name: "Hidayet",
    role: "Studioleiter",
    image: "/images/team-hidayet.avif",
    video: "/videos/hidayet.mp4",
  },
  {
    name: "Jennifer",
    role: "Trainerin",
    image: "/images/team-jennifer.avif",
    video: "/videos/jennifer.mp4",
  },
  {
    name: "Eren",
    role: "Auszubildender",
    image: "/images/team-eren.avif",
    video: "/videos/eren.mp4",
  },
  {
    name: "Renate",
    role: "Trainerin",
    image: "/images/team-renate.avif",
  },
];

function TrainerCard({ trainer }: { trainer: Trainer }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const onEnter = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      void v.play().catch(() => {});
    }
  };

  const onLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <div
      className="group relative aspect-[3/4] overflow-hidden border border-white/[0.06]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <Image
        src={trainer.image}
        alt={trainer.name}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        className="img-cinema object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />

      {trainer.video && (
        <video
          ref={videoRef}
          src={trainer.video}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/30 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <div className="mb-2 h-[2px] w-8 bg-cs-accent transition-all duration-500 group-hover:w-16" />
        <p className="text-xl font-black uppercase tracking-[-0.02em] text-cs-white md:text-2xl">
          {trainer.name}
        </p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-cs-white/70">
          {trainer.role}
        </p>
      </div>
    </div>
  );
}

export function MniTrainers() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Dein Team
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
            Unsere Trainer.
            <br />
            <span className="text-cs-accent">Deine Begleiter.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/60">
            12 Wochen an deiner Seite. Mit Erfahrung, Herz und einem klaren Plan fuer dich.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-[3px] md:mt-20 md:grid-cols-3 lg:grid-cols-5">
          {trainers.map((t) => (
            <TrainerCard key={t.name} trainer={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
