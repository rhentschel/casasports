"use client"

import { useReveal } from "@/lib/use-reveal"
import { BlogCard } from "./blog-card"
import type { BlogPost } from "@/data/blog/types"

interface BlogGridProps {
  posts: BlogPost[]
  title?: string
  showFeatured?: boolean
}

export function BlogGrid({ posts, title, showFeatured = false }: BlogGridProps) {
  const ref = useReveal()
  const refGrid = useReveal()

  const featured = showFeatured ? posts.find((p) => p.featured) : undefined
  const remaining = featured ? posts.filter((p) => p.slug !== featured.slug) : posts

  // Split: first 2 as wide cards, rest as overlay cards
  const widePosts = remaining.slice(0, 2)
  const gridPosts = remaining.slice(2)

  return (
    <section className="bg-cs-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        {title && (
          <h2 className="mb-12 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-3xl">
            {title}
          </h2>
        )}

        {/* Featured: full-bleed hero card */}
        {featured && (
          <div ref={ref} className="reveal -mx-8 mb-16 md:-mx-16">
            <BlogCard post={featured} variant="featured" />
          </div>
        )}

        {/* Wide cards row */}
        {widePosts.length > 0 && (
          <div className="mb-10 grid gap-px bg-white/[0.04] sm:grid-cols-2">
            {widePosts.map((post) => (
              <BlogCard key={post.slug} post={post} variant="wide" />
            ))}
          </div>
        )}

        {/* Overlay cards grid */}
        {gridPosts.length > 0 && (
          <div ref={refGrid} className="reveal">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
