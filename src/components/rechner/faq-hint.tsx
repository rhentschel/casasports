"use client";

import { ArrowUp, BookOpen } from "lucide-react";

type Props = {
  teaser: string;
  readingTime: string;
};

export function FaqHint({ teaser, readingTime }: Props) {
  const open = () => {
    window.dispatchEvent(new CustomEvent("rechner:open-knowledge"));
  };

  return (
    <button
      type="button"
      onClick={open}
      className="group mt-8 flex w-full items-center gap-4 border border-cs-accent/30 bg-cs-accent/[0.06] px-5 py-4 text-left transition-all duration-500 hover:border-cs-accent hover:bg-cs-accent/[0.12]"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-cs-accent/40 bg-cs-accent/10 transition-colors group-hover:border-cs-accent group-hover:bg-cs-accent/30">
        <BookOpen className="h-4 w-4 text-cs-accent" aria-hidden />
      </span>
      <span className="flex-1">
        <span className="block text-[10px] uppercase tracking-[0.2em] text-cs-accent">
          Mehr verstehen · {readingTime}
        </span>
        <span className="mt-1 block text-[14px] leading-snug text-white">{teaser}</span>
      </span>
      <ArrowUp
        className="h-4 w-4 shrink-0 text-cs-accent transition-transform duration-500 group-hover:-translate-y-1"
        aria-hidden
      />
    </button>
  );
}
