"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play, X } from "lucide-react";
import { useReveal } from "@/lib/use-reveal";

type Clip = { id: string; title: string };

const clips: Clip[] = [
  { id: "5AnOMIU7w-s", title: "So laeuft das Training ab" },
  { id: "bHMwkfxOVdQ", title: "Ernaehrung ohne Verbote" },
  { id: "o6_nN9A_QwA", title: "Das Team stellt sich vor" },
  { id: "WuaKm57qVqI", title: "Motivation und Gemeinschaft" },
  { id: "DaQjtJiiJL8", title: "Fortschritt sichtbar machen" },
  { id: "EYMOo7c8gIE", title: "Tipps fuer den Alltag" },
  { id: "XzHcFjMRamI", title: "Dein Weg zum Ziel" },
];

function VideoLightbox({
  videoId,
  onClose,
}: {
  videoId: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-cs-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Video schliessen"
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center border border-white/20 text-cs-white transition-all duration-300 hover:border-cs-accent hover:text-cs-accent"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative mx-6 aspect-video w-full max-w-5xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Casa Sports Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}

function VideoCard({
  clip,
  onOpen,
}: {
  clip: Clip;
  onOpen: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(clip.id)}
      className="group relative block min-w-0 flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
      aria-label={`${clip.title} abspielen`}
    >
      <div className="relative aspect-video overflow-hidden border border-white/[0.06]">
        <Image
          src={`https://i.ytimg.com/vi/${clip.id}/maxresdefault.jpg`}
          alt={clip.title}
          fill
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
          className="img-cinema object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cs-black/75 via-cs-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cs-accent/90 backdrop-blur transition-all duration-500 group-hover:scale-110 md:h-20 md:w-20">
            <Play className="ml-0.5 h-6 w-6 fill-cs-white text-cs-white md:h-7 md:w-7" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-[800ms] group-hover:w-full" />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-cs-white/70">
            Zum Programm
          </p>
          <p className="mt-2 text-[15px] font-bold uppercase tracking-[-0.01em] text-cs-white md:text-lg">
            {clip.title}
          </p>
        </div>
      </div>
    </button>
  );
}

export function MniProgramVideo() {
  const ref = useReveal();
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

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
    <section className="relative overflow-hidden bg-cs-black py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div
          ref={ref}
          className="reveal flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Kurz zusammengefasst
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
              Videos
              <br />
              <span className="text-cs-accent">zum Programm.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              Einblicke in das 12-Wochen-Programm. Naim, das Team und die Mitglieder erzaehlen.
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white"
              aria-label="Vorheriges Video"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-white/30 hover:text-white"
              aria-label="Naechstes Video"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-14 overflow-hidden md:mt-20" ref={emblaRef}>
        <div className="flex gap-[3px] pl-8 md:pl-16">
          {clips.map((c) => (
            <VideoCard key={c.id} clip={c} onOpen={setOpenId} />
          ))}
          <div className="min-w-0 flex-[0_0_8px]" />
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl items-center gap-2 px-8 md:px-16">
        {clips.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-[3px] transition-all duration-500 ${
              i === selectedIndex
                ? "w-8 bg-cs-accent"
                : "w-4 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Video ${i + 1}`}
          />
        ))}
      </div>

      {openId && <VideoLightbox videoId={openId} onClose={() => setOpenId(null)} />}
    </section>
  );
}
