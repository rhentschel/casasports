"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { calculateReadingTime, formatDate } from "@/lib/blog-utils"

function getImageUrl(media: unknown, fallbackPath?: string | null): string {
  if (media && typeof media === "object" && "url" in media) return (media as { url: string }).url
  if (typeof media === "string" && media.length > 0) return media
  if (fallbackPath) return fallbackPath
  return "/images/casasports-hero-1.webp"
}

function getCategoryName(cat: unknown): string {
  if (typeof cat === "string") return cat
  if (cat && typeof cat === "object" && "name" in cat) return (cat as { name: string }).name
  return ""
}

function getAuthorData(author: unknown): { name: string; image: string } | null {
  if (!author) return null
  if (typeof author === "object" && "name" in author) {
    const a = author as { name: string; image?: unknown }
    return { name: a.name, image: getImageUrl(a.image) }
  }
  return null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BlogCard({ post, variant = "default" }: { post: any; variant?: "default" | "featured" | "wide" }) {
  const authorData = getAuthorData(post.author)
  const categoryName = getCategoryName(post.category)
  const readingTime = calculateReadingTime(post.content)
  const coverImage = getImageUrl(post.coverImage, post.coverImagePath)

  if (variant === "featured") {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="relative flex min-h-[70vh] items-end overflow-hidden">
          <Image src={coverImage} alt={post.title} fill className="img-cinema object-cover transition-all duration-[1.6s] ease-[var(--ease-premium)] group-hover:scale-[1.04] group-hover:brightness-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-cs-accent transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />
          <div className="relative z-10 w-full px-8 pb-12 md:px-16 md:pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                {post.isPillar && <span className="border border-cs-accent/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cs-accent">Pillar Guide</span>}
                {categoryName && <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-accent">{categoryName}</span>}
              </div>
              <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl lg:text-6xl">{post.title}</h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {authorData && (
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/10"><Image src={authorData.image} alt={authorData.name} fill className="object-cover" /></div>
                    <span className="text-[13px] text-cs-gray-400">{authorData.name}</span>
                  </div>
                )}
                <span className="hidden text-white/10 md:inline">|</span>
                <span className="text-[13px] text-cs-gray-500">{formatDate(post.publishedAt)}</span>
                <span className="flex items-center gap-1 text-[13px] text-cs-gray-500"><Clock className="h-3.5 w-3.5" />{readingTime} Min.</span>
                <span className="ml-auto hidden items-center gap-2 text-[13px] font-medium uppercase tracking-[0.15em] text-cs-accent transition-all duration-500 group-hover:gap-3 md:inline-flex">Lesen<ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" /></span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  if (variant === "wide") {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="grid overflow-hidden border border-white/[0.04] transition-colors duration-500 hover:border-white/[0.08] md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
            <Image src={coverImage} alt={post.title} fill className="img-cinema object-cover transition-all duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05] group-hover:brightness-110" />
            {post.isPillar && <div className="absolute left-0 top-6 bg-cs-accent px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Guide</div>}
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            {categoryName && <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-accent">{categoryName}</p>}
            <h3 className="mt-3 text-xl font-black uppercase leading-[1.1] tracking-[-0.02em] text-cs-white transition-colors duration-500 group-hover:text-cs-accent md:text-2xl">{post.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/50">{post.excerpt}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3 text-[12px] text-cs-gray-500">
                {authorData && (
                  <div className="flex items-center gap-2">
                    <div className="relative h-5 w-5 overflow-hidden rounded-full"><Image src={authorData.image} alt={authorData.name} fill className="object-cover" /></div>
                    <span>{authorData.name}</span>
                  </div>
                )}
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{readingTime} Min.</span>
              </div>
              <ArrowRight className="h-4 w-4 text-cs-accent/40 transition-all duration-[400ms] group-hover:translate-x-1 group-hover:text-cs-accent" />
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="relative flex aspect-[3/4] items-end overflow-hidden">
        <Image src={coverImage} alt={post.title} fill className="img-cinema object-cover transition-all duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.06] group-hover:brightness-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/40 to-transparent transition-opacity duration-700 group-hover:opacity-90" />
        <div className="absolute bottom-0 left-0 z-20 h-[2px] w-0 bg-cs-accent transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />
        <div className="absolute left-0 top-0 z-10 flex gap-2 p-5">
          {post.isPillar && <span className="bg-cs-accent px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white">Guide</span>}
          <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 text-[10px] text-white/70 backdrop-blur-sm"><Clock className="h-2.5 w-2.5" />{readingTime} Min.</span>
        </div>
        <div className="relative z-10 w-full p-6 md:p-7">
          {categoryName && <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cs-accent">{categoryName}</p>}
          <h3 className="mt-2 text-lg font-black uppercase leading-[1.1] tracking-[-0.02em] text-cs-white md:text-xl">{post.title}</h3>
          <p className="mt-0 max-h-0 overflow-hidden text-[13px] leading-relaxed text-white/50 transition-all duration-[600ms] ease-[var(--ease-hover)] group-hover:mt-3 group-hover:max-h-20">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-between">
            {authorData && (
              <div className="flex items-center gap-2">
                <div className="relative h-5 w-5 overflow-hidden rounded-full border border-white/10"><Image src={authorData.image} alt={authorData.name} fill className="object-cover" /></div>
                <span className="text-[11px] text-cs-gray-500">{authorData.name}</span>
              </div>
            )}
            <ArrowRight className="h-4 w-4 -translate-x-2 text-cs-accent opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>
        </div>
      </article>
    </Link>
  )
}
