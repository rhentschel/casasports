"use client"

import { useReveal } from "@/lib/use-reveal"
import { BlogCard } from "./blog-card"
import type { BlogPost } from "@/data/blog/types"

interface ArticleRelatedProps {
  posts: BlogPost[]
}

export function ArticleRelated({ posts }: ArticleRelatedProps) {
  const ref = useReveal()

  if (posts.length === 0) return null

  return (
    <section className="bg-cs-black py-24 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Weiterlesen
        </p>
        <h2 className="mt-3 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-3xl">
          Verwandte Artikel
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
