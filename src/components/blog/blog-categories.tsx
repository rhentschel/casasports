"use client"

import Link from "next/link"
import { useReveal } from "@/lib/use-reveal"

interface BlogCategoriesProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  categories: any[]
  totalPosts: number
}

export function BlogCategories({ categories, totalPosts }: BlogCategoriesProps) {
  const ref = useReveal()

  return (
    <section className="bg-cs-black py-16">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="border border-cs-accent bg-cs-accent px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500"
          >
            Alle ({totalPosts})
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/kategorie/${cat.slug}`}
              className="border border-white/[0.08] px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.15em] text-cs-gray-400 transition-all duration-500 hover:border-cs-accent hover:text-cs-white"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
