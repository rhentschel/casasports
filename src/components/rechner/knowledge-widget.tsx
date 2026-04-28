"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  overline: string;
  title: string;
  preview: string;
  readingTime: string;
  children: React.ReactNode;
};

export function KnowledgeWidget({ overline, title, preview, readingTime, children }: Props) {
  const [open, setOpen] = useState(false);
  const contentId = useId();
  const ref = useRef<HTMLDivElement | null>(null);

  // Listen fuer externes "scroll & expand" via Custom Event
  useEffect(() => {
    const handler = () => {
      setOpen(true);
      requestAnimationFrame(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
    window.addEventListener("rechner:open-knowledge", handler);
    return () => window.removeEventListener("rechner:open-knowledge", handler);
  }, []);

  return (
    <section
      ref={ref}
      id="rechner-knowledge"
      className="scroll-mt-24 bg-cs-black pb-3 pt-12 md:pb-4 md:pt-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="border border-white/10 bg-gradient-to-br from-white/[0.025] to-white/[0.005]">
          {/* Header / Toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={contentId}
            className="group flex w-full items-center gap-6 px-8 py-7 text-left transition-colors hover:bg-white/[0.015] md:px-12 md:py-8"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-cs-accent/30 bg-cs-accent/10 transition-all duration-500 group-hover:border-cs-accent group-hover:bg-cs-accent/25">
              <BookOpen className="h-5 w-5 text-cs-accent" aria-hidden />
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cs-accent">
                {overline}
              </p>
              <h2 className="mt-1.5 text-xl font-black uppercase leading-tight tracking-[-0.02em] text-white md:text-2xl">
                {title}
              </h2>
              <p className="mt-2 text-[14px] leading-snug text-white/55">{preview}</p>
            </div>

            <div className="hidden flex-col items-end gap-1 sm:flex">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                {readingTime}
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-cs-accent transition-opacity duration-300 group-hover:opacity-100">
                {open ? "Einklappen" : "Einblenden"}
              </span>
            </div>

            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-cs-accent transition-transform duration-500",
                open && "rotate-180"
              )}
              aria-hidden
            />
          </button>

          {/* Content */}
          <div
            id={contentId}
            className={cn(
              "grid border-t border-white/10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-t-transparent opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <div className="px-8 py-10 md:px-12 md:py-14">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper-Komponenten fuer den Inhalt (typografisch konsistent)
export function KSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-6 border-t border-white/10 pt-10 first:border-t-0 first:pt-0 md:grid-cols-[auto_1fr] md:gap-12">
      <div className="md:w-44">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">{number}</p>
        <h3 className="mt-2 text-xl font-black uppercase leading-tight tracking-[-0.02em] text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-4 text-[15px] leading-[1.75] text-white/70">{children}</div>
    </section>
  );
}

export function KTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: { label: string; value: string; tone?: "neutral" | "accent" | "warn" | "good" }[];
}) {
  const toneMap: Record<NonNullable<(typeof rows)[number]["tone"]>, string> = {
    neutral: "text-white/80",
    accent: "text-cs-accent",
    warn: "text-amber-400",
    good: "text-emerald-400",
  };

  return (
    <div className="overflow-hidden border border-white/10">
      <table className="w-full text-left text-[14px]">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.02]">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white/50"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-white/5 last:border-b-0">
              <td className="px-4 py-3 text-white/75">{row.label}</td>
              <td className={cn("px-4 py-3 font-medium", toneMap[row.tone ?? "neutral"])}>
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function KSources({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <ul className="space-y-2 text-[13px]">
      {items.map((s) => (
        <li key={s.label} className="flex items-start gap-3 text-white/55">
          <span className="mt-2 h-px w-4 shrink-0 bg-cs-accent/60" aria-hidden />
          <span>
            {s.href ? (
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline-offset-4 transition-colors hover:text-cs-accent hover:underline"
              >
                {s.label}
              </a>
            ) : (
              s.label
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
