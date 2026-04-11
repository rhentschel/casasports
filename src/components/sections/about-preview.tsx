"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  video: string | null;
  quote: string;
}

interface AboutPreviewProps {
  team: TeamMember[];
}

function TeamSlide({
  member,
}: {
  member: TeamMember;
}) {
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
        {/* Image (always visible) */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="img-cinema object-cover object-top"
        />

        {/* Video overlay on hover */}
        {member.video && (
          <video
            ref={videoRef}
            src={member.video}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-cs-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            {member.role}
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
            {member.name}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-white/60">
            &ldquo;{member.quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutPreview({ team }: AboutPreviewProps) {
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
      {/* Slider */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {team.map((member) => (
            <TeamSlide key={member.name} member={member} />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20 md:bottom-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 md:px-16">
          <div className="flex items-center gap-2">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-[3px] transition-all duration-500 ${
                  i === selectedIndex
                    ? "w-8 bg-cs-accent"
                    : "w-4 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white"
              aria-label="Vorheriges Teammitglied"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white"
              aria-label="Nächstes Teammitglied"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
