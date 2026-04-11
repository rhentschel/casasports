"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
// eslint-disable-next-line @typescript-eslint/no-explicit-any


import { calculateReadingTime, formatDate } from "@/lib/blog-utils"

interface ArticleHeaderProps {
  post: any
}

function resolveObj(field: unknown): any {
  if (!field) return null
  if (typeof field === "object") return field
  return null
}

export function ArticleHeader({ post }: ArticleHeaderProps) {
  const [loaded, setLoaded] = useState(false)
  const author = resolveObj(post.authorData) || resolveObj(post.author)
  const category = resolveObj(post.categoryData) || resolveObj(post.category)
  const readingTime = calculateReadingTime(post.content)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <header className="relative flex min-h-[60svh] items-end overflow-hidden md:min-h-[65svh]">
      <Image
        src={post.coverImage}
        alt={post.title}
        fill
        priority
        className="img-cinema object-cover animate-[kenburns_30s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 pb-16 md:px-16">
        <div className="max-w-3xl">
          {category && (
            <Link
              href={`/blog/kategorie/${category.slug}`}
              className={cn(
                "inline-block text-xs font-medium uppercase tracking-[0.2em] text-cs-accent transition-all duration-1000",
                loaded ? "opacity-100" : "opacity-0"
              )}
            >
              {category.name}
            </Link>
          )}

          {post.isPillar && (
            <span
              className={cn(
                "ml-4 inline-block border border-cs-accent/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cs-accent transition-all duration-1000",
                loaded ? "opacity-100" : "opacity-0"
              )}
            >
              Pillar Guide
            </span>
          )}

          <div className="mt-4 overflow-hidden">
            <h1
              className={cn(
                "text-[clamp(1.8rem,4.5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              {post.title}
            </h1>
          </div>

          <div
            className={cn(
              "mt-6 flex flex-wrap items-center gap-4 text-[13px] text-cs-gray-400 transition-all duration-1000 delay-500",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {author && (
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-cs-white">{author.name}</span>
                  <span className="ml-1 hidden text-cs-gray-500 sm:inline">{author.role}</span>
                </div>
              </div>
            )}

            <span className="text-white/20">|</span>

            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.publishedAt)}
            </span>

            {post.updatedAt && (
              <span className="flex items-center gap-1.5 text-cs-gray-500">
                <RefreshCw className="h-3 w-3" />
                Aktualisiert {formatDate(post.updatedAt)}
              </span>
            )}

            <span className="text-white/20">|</span>

            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readingTime} Min. Lesezeit
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
