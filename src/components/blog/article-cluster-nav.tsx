"use client"

import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"
import { useReveal } from "@/lib/use-reveal"
import type { TopicCluster } from "@/data/blog/types"
import { getPostBySlug } from "@/data/blog/posts"

interface ArticleClusterNavProps {
  cluster: TopicCluster
  currentSlug: string
}

export function ArticleClusterNav({ cluster, currentSlug }: ArticleClusterNavProps) {
  const ref = useReveal()
  const pillar = getPostBySlug(cluster.pillarSlug)
  const articles = cluster.articleSlugs
    .map((s) => getPostBySlug(s))
    .filter((p) => p !== undefined)

  return (
    <aside ref={ref} className="reveal mt-12 border border-white/[0.06] p-6 md:p-8">
      <div className="flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-cs-accent" />
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cs-gray-500">
          Topic Cluster: {cluster.name}
        </p>
      </div>

      {pillar && (
        <div className="mt-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cs-gold">
            Pillar Guide
          </p>
          <Link
            href={`/blog/${pillar.slug}`}
            className={`mt-1.5 block text-[15px] font-bold leading-snug transition-colors duration-300 ${
              pillar.slug === currentSlug
                ? "text-cs-accent"
                : "text-cs-white hover:text-cs-accent"
            }`}
          >
            {pillar.title}
          </Link>
        </div>
      )}

      <div className="mt-6 space-y-3 border-t border-white/[0.06] pt-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cs-gray-500">
          Verwandte Artikel
        </p>
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className={`group flex items-center gap-2 text-[14px] leading-snug transition-colors duration-300 ${
              article.slug === currentSlug
                ? "text-cs-accent"
                : "text-white/60 hover:text-cs-white"
            }`}
          >
            <ArrowRight className="h-3 w-3 shrink-0 text-cs-accent/50 transition-transform duration-300 group-hover:translate-x-0.5" />
            {article.title}
          </Link>
        ))}
      </div>
    </aside>
  )
}
