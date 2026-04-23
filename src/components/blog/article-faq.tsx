"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItem {
  question: string
  answer: string
}

interface ArticleFaqProps {
  items: FaqItem[]
}

export function ArticleFaq({ items }: ArticleFaqProps) {
  const [open, setOpen] = useState<number | null>(0)

  if (!items || items.length === 0) return null

  return (
    <section
      id="faq"
      className="mt-16 border-t border-white/[0.06] pt-12"
      aria-label="Haeufige Fragen"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cs-accent">
        Haeufige Fragen
      </p>
      <h2 className="mt-3 text-2xl font-black uppercase leading-[1.05] tracking-[-0.02em] text-cs-white md:text-3xl">
        FAQ zum Thema
      </h2>

      <ul className="mt-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {items.map((item, idx) => {
          const isOpen = open === idx
          return (
            <li key={idx}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
              >
                <span className="text-base font-semibold text-cs-white md:text-lg">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "mt-1 flex h-6 w-6 shrink-0 items-center justify-center border transition-colors",
                    isOpen
                      ? "border-cs-accent bg-cs-accent text-white"
                      : "border-white/20 text-white/60"
                  )}
                  aria-hidden
                >
                  {isOpen ? (
                    <Minus className="h-3.5 w-3.5" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
                  )}
                </span>
              </button>
              <div
                className={cn(
                  "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="max-w-3xl whitespace-pre-line text-base leading-relaxed text-white/70">
                    {item.answer}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
