"use client"

import { useState, useEffect } from "react"
import { List } from "lucide-react"
import { cn } from "@/lib/utils"
import { extractHeadings } from "@/lib/blog-utils"

interface ArticleTocProps {
  content: string
}

export function ArticleToc({ content }: ArticleTocProps) {
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

    return () => observer.disconnect()
  }, [headings])

  if (headings.length < 3) return null

  return (
    <nav className="sticky top-24" aria-label="Inhaltsverzeichnis">
      <div className="border-l border-white/[0.06] pl-6">
        <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-cs-gray-500">
          <List className="h-3.5 w-3.5" />
          Inhalt
        </p>

        <ul className="mt-4 space-y-2.5">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={cn(
                  "block text-[13px] leading-snug transition-colors duration-300",
                  h.level === 3 && "pl-4",
                  activeId === h.id
                    ? "text-cs-accent"
                    : "text-cs-gray-500 hover:text-cs-white"
                )}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
