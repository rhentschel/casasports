"use client"

import { useReveal } from "@/lib/use-reveal"
import { BlogCard } from "./blog-card"
import type { BlogPost } from "@/data/blog/types"

interface BlogGridProps {
  posts: BlogPost[]
  title?: string
}

export function BlogGrid({ posts, title }: BlogGridProps) {
  const ref = useReveal()

  return (
    <section className="bg-cs-black py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        {title && (
          <h2 className="mb-12 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-3xl">
            {title}
          </h2>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
