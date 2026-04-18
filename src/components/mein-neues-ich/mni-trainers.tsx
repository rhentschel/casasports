"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

type Trainer = {
  name: string;
  role: string;
  image: string;
  video: string | null;
  quote: string;
};

const trainers: Trainer[] = [
  {
    name: "Naim",
    role: "Gruender & Personal Trainer",
    image: "/images/naim-casasports.webp",
    video: "/videos/naim.mp4",
    quote:
      "Jeder startet irgendwo. Wichtig ist, dass du startest. Den Rest machen wir gemeinsam.",
  },
  {
    name: "Hidayet",
    role: "Studioleiter",
    image: "/images/team-hidayet.avif",
    video: "/videos/hidayet.mp4",
    quote:
      "Training heisst nicht perfekt sein. Training heisst, immer besser werden. Schritt fuer Schritt.",
  },
  {
    name: "Jennifer",
    role: "Trainerin",
    image: "/images/team-jennifer.avif",
    video: "/videos/jennifer.mp4",
    quote:
      "Ich hole dich da ab, wo du stehst. Ohne Druck, aber mit klarem Plan fuer dein Ziel.",
  },
  {
    name: "Eren",
    role: "Auszubildender",
    image: "/images/team-eren.avif",
    video: "/videos/eren.mp4",
    quote:
      "Ich weiss, wie es ist, neu anzufangen. Genau deshalb verstehe ich, was du brauchst.",
  },
  {
    name: "Renate",
    role: "Trainerin",
    image: "/images/team-renate.avif",
    video: null,
    quote:
      "Fitness kennt kein Alter. Dein Koerper dankt dir jede Bewegung, egal wann du anfaengst.",
  },
];

function TrainerSlide({ trainer }: { trainer: Trainer }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div
      className="relative min-w-0 flex-[0_0_100%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex min-h-[80vh] items-end overflow-hidden pb-20 md:pb-28">
        <Image
          src={trainer.image}
          alt={`${trainer.name} - ${trainer.role}`}
          fill
          className="img-cinema object-cover object-top"
        />

        {trainer.video && (
          <video
            ref={videoRef}
            src={trainer.video}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-cs-black/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            {trainer.role}
          </p>
          <h3 className="mt-3 text-4xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
            {trainer.name}
          </h3>
          <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-white/60">
            &ldquo;{trainer.quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export function MniTrainers() {
  const ref = useReveal();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 10000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section ref={ref} className="reveal relative bg-cs-black">
      <div className="mx-auto max-w-7xl px-8 pb-14 pt-32 md:px-16 md:pb-20 md:pt-40">
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
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {trainers.map((t) => (
            <TrainerSlide key={t.name} trainer={t} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-20 md:bottom-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 md:px-16">
          <div className="flex items-center gap-1">
            {trainers.map((t, i) => (
              <button
                key={t.name}
                onClick={() => emblaApi?.scrollTo(i)}
                className="group flex h-6 min-w-[24px] items-center justify-center px-1"
                aria-label={`Trainer ${t.name}`}
                aria-current={i === selectedIndex ? "true" : undefined}
              >
                <span
                  className={`block h-[3px] transition-all duration-500 ${
                    i === selectedIndex
                      ? "w-8 bg-cs-accent"
                      : "w-4 bg-white/20 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white"
              aria-label="Vorheriger Trainer"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white"
              aria-label="Naechster Trainer"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
