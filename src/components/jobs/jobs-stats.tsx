"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 5, suffix: "", label: "Teammitglieder" },
  { value: 800, suffix: "+", label: "Aktive Mitglieder" },
  { value: 15, suffix: "+", label: "Jahre Erfahrung" },
  { value: 30, suffix: "+", label: "Kurse pro Woche" },
];

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function JobsStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-white/[0.04] bg-cs-gray-900/30">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center justify-center py-12 md:py-16",
                i < stats.length - 1 && "border-r border-white/[0.04]",
                i === 1 && "border-r-0 lg:border-r",
                i === 2 && "border-t border-white/[0.04] lg:border-t-0"
              )}
            >
              <span className="text-3xl font-black tracking-[-0.04em] text-cs-accent md:text-5xl">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </span>
              <span className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-cs-gray-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
