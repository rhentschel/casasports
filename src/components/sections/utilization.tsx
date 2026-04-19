"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

type UtilizationItem = {
  startTime: string;
  endTime: string;
  percentage: number;
  level: "LOW" | "MEDIUM" | "HIGH";
  isCurrent: boolean;
};

type UtilizationData = {
  startTime: string;
  endTime: string;
  items: UtilizationItem[];
};

const levelColors: Record<UtilizationItem["level"], string> = {
  LOW: "bg-green-500/70",
  MEDIUM: "bg-amber-500/70",
  HIGH: "bg-cs-accent",
};

const levelLabels: Record<UtilizationItem["level"], string> = {
  LOW: "Entspannt",
  MEDIUM: "Gut besucht",
  HIGH: "Voll",
};

function formatHour(t: string): string {
  return t.slice(0, 5);
}

export function Utilization() {
  const ref = useReveal();
  const [data, setData] = useState<UtilizationData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/magicline/utilization");
        if (!res.ok) throw new Error();
        const json = (await res.json()) as UtilizationData;
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) setError(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error || !data) return null;

  const maxPct = Math.max(...data.items.map((i) => i.percentage), 1);
  const current = data.items.find((i) => i.isCurrent);

  return (
    <section className="bg-cs-black py-24 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Live im Studio
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
              Wann ist am wenigsten los?
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-white/60">
              Live-Auslastung für heute. So findest du deine ruhige Trainingszeit.
            </p>
          </div>

          {current && (
            <div className="flex items-center gap-3 border border-white/[0.08] px-5 py-3">
              <div className={cn("h-2 w-2 animate-pulse rounded-full", levelColors[current.level])} />
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
                  Gerade jetzt
                </p>
                <p className="mt-0.5 text-[13px] font-bold uppercase tracking-[-0.01em] text-cs-white">
                  {levelLabels[current.level]}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="flex min-w-full items-end gap-1 md:gap-1.5">
            {data.items.map((item) => {
              const heightPct = Math.max((item.percentage / maxPct) * 100, 6);
              return (
                <div key={item.startTime} className="flex flex-1 flex-col items-center gap-2">
                  <div className="relative flex h-32 w-full items-end md:h-40">
                    <div
                      className={cn(
                        "w-full transition-all duration-700",
                        levelColors[item.level],
                        item.isCurrent && "ring-2 ring-cs-white/80"
                      )}
                      style={{ height: `${heightPct}%` }}
                      title={`${levelLabels[item.level]} (${item.percentage}%)`}
                    />
                  </div>
                  <span
                    className={cn(
                      "text-[10px] font-medium tracking-wider text-white/60 md:text-[11px]",
                      item.isCurrent && "font-bold text-cs-accent"
                    )}
                  >
                    {formatHour(item.startTime)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-5 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500/70" />
            Entspannt
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-amber-500/70" />
            Gut besucht
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cs-accent" />
            Voll
          </div>
        </div>
      </div>
    </section>
  );
}
