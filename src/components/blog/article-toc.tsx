"use client"

import { useState, useEffect } from "react"
import { List, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { extractHeadings } from "@/lib/blog-utils"

interface ArticleTocProps {
  content: string
  hasFaq?: boolean
}

export function ArticleToc({ content, hasFaq = false }: ArticleTocProps) {
  const headings = extractHeadings(content)
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    )

    for (const h of headings) {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    }
    if (hasFaq) {
      const el = document.getElementById("faq")
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [headings, hasFaq])

  if (headings.length < 2 && !hasFaq) return null

  return (
    <nav className="sticky top-24" aria-label="Inhaltsverzeichnis">
      <div className="border-l-2 border-white/[0.08] pl-6">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-cs-gray-400">
          <List className="h-3.5 w-3.5" />
          Inhalt
        </p>

        <ul className="mt-4 space-y-3">
          {headings.map((h) => {
            const isActive = activeId === h.id
            return (
              <li key={h.id} className="relative">
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute -left-[26px] top-1 h-[calc(100%-4px)] w-0.5 bg-cs-accent"
                  />
                )}
                <a
                  href={`#${h.id}`}
                  className={cn(
                    "block text-[14px] leading-snug transition-colors duration-300",
                    h.level === 3 && "pl-4",
                    isActive
                      ? "text-cs-accent"
                      : "text-cs-gray-400 hover:text-cs-white"
                  )}
                >
                  {h.text}
                </a>
              </li>
            )
          })}
          {hasFaq && (
            <li className="relative">
              {activeId === "faq" && (
                <span
                  aria-hidden
                  className="absolute -left-[26px] top-1 h-[calc(100%-4px)] w-0.5 bg-cs-accent"
                />
              )}
              <a
                href="#faq"
                className={cn(
                  "flex items-center gap-1.5 text-[14px] leading-snug transition-colors duration-300",
                  activeId === "faq"
                    ? "text-cs-accent"
                    : "text-cs-gray-400 hover:text-cs-white"
                )}
              >
                <HelpCircle className="h-3.5 w-3.5" />
                Häufige Fragen
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
