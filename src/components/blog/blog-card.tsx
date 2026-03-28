import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "@/data/blog/types"
import { getAuthor } from "@/data/blog/authors"
import { getCategory } from "@/data/blog/categories"
import { calculateReadingTime, formatDate } from "@/lib/blog-utils"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const author = getAuthor(post.author)
  const category = getCategory(post.category)
  const readingTime = calculateReadingTime(post.content)

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
            />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />
            {post.isPillar && (
              <div className="absolute left-4 top-4 bg-cs-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Guide
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            {category && (
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                {category.name}
              </p>
            )}
            <h2 className="mt-3 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white transition-colors duration-500 group-hover:text-cs-accent md:text-3xl">
              {post.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-4 text-[13px] text-cs-gray-400">
              {author && (
                <div className="flex items-center gap-2">
                  <div className="relative h-6 w-6 overflow-hidden rounded-full">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{author.name}</span>
                </div>
              )}
              <span className="text-white/20">|</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {readingTime} Min.
              </span>
            </div>

            <div className="mt-6">
              <span className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.15em] text-cs-accent transition-all duration-500 group-hover:gap-3">
                Artikel lesen
                <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="img-cinema object-cover transition-transform duration-[1.2s] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
          />
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-[800ms] ease-[var(--ease-hover)] group-hover:w-full" />
          {post.isPillar && (
            <div className="absolute left-4 top-4 bg-cs-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Guide
            </div>
          )}
        </div>

        {category && (
          <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            {category.name}
          </p>
        )}
        <h3 className="mt-2 text-lg font-bold leading-[1.2] text-cs-white transition-colors duration-500 group-hover:text-cs-accent">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-white/60">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-3 text-[12px] text-cs-gray-500">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {readingTime} Min.
          </span>
        </div>
      </article>
    </Link>
  )
}
