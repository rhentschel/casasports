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

  const featured = showFeatured ? posts.find((p) => p.featured) : undefined
  const gridPosts = featured ? posts.filter((p) => p.slug !== featured.slug) : posts

  return (
    <section className="bg-cs-black py-24 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        {title && (
          <h2 className="mb-12 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-3xl">
            {title}
          </h2>
        )}

        {featured && (
          <div className="mb-16 border-b border-white/[0.06] pb-16">
            <BlogCard post={featured} featured />
          </div>
        )}

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {gridPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
