"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useReveal } from "@/lib/use-reveal";

const marqueeWords = [
  "Proteine",
  "Mahlzeitenplanung",
  "Hydration",
  "Naehrstoff-Timing",
  "Supplements",
  "Koerperanalyse",
];

function NutritionMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);

  const updateHighlight = useCallback(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const centerX = container.offsetWidth / 2;
    const spans = track.querySelectorAll<HTMLSpanElement>("[data-word]");

    spans.forEach((span) => {
      const rect = span.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const spanCenter = rect.left - containerRect.left + rect.width / 2;
      const distance = Math.abs(spanCenter - centerX);
      const maxDist = 150;

      if (distance < maxDist) {
        const brightness = 1 - distance / maxDist;
        span.style.color = `rgba(245,245,240,${0.25 + brightness * 0.75})`;
      } else {
        span.style.color = "rgba(245,245,240,0.25)";
      }
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const halfWidth = track.scrollWidth / 2;
    let paused = false;
    let pauseTimeout: ReturnType<typeof setTimeout> | null = null;
    let lastHighlightedIndex = -1;

    function animate() {
      if (!paused) {
        posRef.current -= 0.5;
        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current += halfWidth;
        }
        track!.style.transform = `translateX(${posRef.current}px)`;
      }

      updateHighlight();

      // Check if a new word is centered — pause briefly
      const container = containerRef.current;
      if (container && track) {
        const centerX = container.offsetWidth / 2;
        const spans = track.querySelectorAll<HTMLSpanElement>("[data-word]");
        let closestIdx = -1;
        let closestDist = Infinity;

        spans.forEach((span, i) => {
          const rect = span.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const spanCenter = rect.left - containerRect.left + rect.width / 2;
          const dist = Math.abs(spanCenter - centerX);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = i % marqueeWords.length;
          }
        });

        if (closestDist < 5 && closestIdx !== lastHighlightedIndex && !paused) {
          lastHighlightedIndex = closestIdx;
          paused = true;
          pauseTimeout = setTimeout(() => {
            paused = false;
          }, 1500);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [updateHighlight]);

  const items = [...marqueeWords, ...marqueeWords];

  return (
    <div ref={containerRef} className="overflow-hidden bg-cs-black py-6">
      <div ref={trackRef} className="flex w-max items-center whitespace-nowrap">
        {items.map((word, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            <span
              data-word
              className="text-[13px] font-medium uppercase tracking-[0.15em]"
              style={{ color: "rgba(245,245,240,0.5)", transition: "color 0.4s" }}
            >
              {word}
            </span>
            <span className="h-1 w-1 rounded-full bg-cs-accent/30" />
          </span>
        ))}
      </div>
    </div>
  );
}

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
      <NutritionMarquee />

      {/* Problem cards - like homepage Features */}
      <section className="bg-cs-black py-40 md:py-48">
        <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Das Problem
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
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
