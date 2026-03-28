import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ReadingProgress } from "@/components/blog/reading-progress"
import { Breadcrumbs } from "@/components/blog/breadcrumbs"
import { ArticleHeader } from "@/components/blog/article-header"
import { ArticleToc } from "@/components/blog/article-toc"
import { ArticleBody } from "@/components/blog/article-body"
import { ArticleAuthor } from "@/components/blog/article-author"
import { ArticleTags } from "@/components/blog/article-tags"
import { ArticleClusterNav } from "@/components/blog/article-cluster-nav"
import { ArticleRelated } from "@/components/blog/article-related"
import { ArticleSchema } from "@/components/blog/article-schema"
import { BlogCta } from "@/components/blog/blog-cta"
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/data/blog/posts"
import { getAuthor } from "@/data/blog/authors"
import { getClusterForPost } from "@/data/blog/topic-clusters"
import { siteConfig } from "@/data/site"
import { calculateReadingTime } from "@/lib/blog-utils"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const readingTime = calculateReadingTime(post.content)

  return {
    title: post.seo.title ?? post.title,
    description: post.seo.description ?? post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.seo.title ?? post.title,
      description: post.seo.description ?? post.excerpt,
      images: [{ url: post.coverImage, width: 1200, height: 630 }],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      tags: post.tags,
    },
    other: {
      "article:reading_time": `${readingTime} min`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const author = getAuthor(post.author)
  const related = getRelatedPosts(post)
  const cluster = getClusterForPost(post.slug)

  return (
    <>
      <ArticleSchema post={post} />
      <ReadingProgress />
      <ArticleHeader post={post} />
      <Breadcrumbs category={post.category} title={post.title} />

      <article className="mx-auto max-w-7xl px-8 py-12 md:px-16 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0">
            <ArticleBody content={post.content} />
            <ArticleTags tags={post.tags} />
            {author && <ArticleAuthor author={author} />}
            {cluster && (
              <ArticleClusterNav cluster={cluster} currentSlug={post.slug} />
            )}
          </div>

          <aside className="hidden lg:block">
            <ArticleToc content={post.content} />
          </aside>
        </div>
      </article>

      <ArticleRelated posts={related} />
      <BlogCta />
    </>
  )
}
