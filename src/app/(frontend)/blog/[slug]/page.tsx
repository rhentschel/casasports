export const dynamic = "force-dynamic"
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
import { getPostBySlug, getAllPostSlugs, getAllPosts, getClusterForPost } from "@/lib/payload-data"
import { calculateReadingTime, lexicalToHtml } from "@/lib/blog-utils"

interface PageProps {
  params: Promise<{ slug: string }>
}

// Helper to extract a usable image URL from Payload media field
function getImageUrl(media: unknown): string {
  if (typeof media === "string") return media
  if (media && typeof media === "object" && "url" in media) {
    return (media as { url: string }).url
  }
  return "/images/placeholder.webp"
}

// Helper to extract tags from Payload array-of-objects format
function extractTags(tags: unknown): string[] {
  if (!tags || !Array.isArray(tags)) return []
  return tags.map((t: unknown) => {
    if (typeof t === "string") return t
    if (t && typeof t === "object" && "tag" in t) return (t as { tag: string }).tag
    return ""
  }).filter(Boolean)
}

// Helper to extract slug from a relationship field (object or string)
function getRelSlug(field: unknown): string {
  if (typeof field === "string") return field
  if (field && typeof field === "object" && "slug" in field) {
    return (field as { slug: string }).slug
  }
  return ""
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const readingTime = calculateReadingTime(post.content)
  const seo = (post as any).seo || {}
  const coverUrl = getImageUrl(post.coverImage)
  const tags = extractTags(post.tags)

  return {
    title: seo.title ?? post.title,
    description: seo.description ?? post.excerpt,
    alternates: {
      canonical: `https://sport.casasports.de/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: seo.title ?? post.title,
      description: seo.description ?? post.excerpt,
      images: [{ url: coverUrl, width: 1200, height: 630 }],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      tags,
    },
    other: {
      "article:reading_time": `${readingTime} min`,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  // Convert Payload relationships to the format components expect
  const authorObj = post.author && typeof post.author === "object"
    ? post.author as any
    : null
  const categorySlug = getRelSlug(post.category)
  const tags = extractTags(post.tags)
  const contentHtml = lexicalToHtml(post.content)
  const coverImage = getImageUrl(post.coverImage)

  const categoryObj = post.category && typeof post.category === "object" ? post.category as any : null

  // Build adapted post object for existing components
  const adaptedPost = {
    ...post,
    content: contentHtml,
    coverImage,
    category: categorySlug,
    categoryData: categoryObj ? { name: categoryObj.name, slug: categoryObj.slug } : null,
    author: authorObj?.slug || "",
    authorData: authorObj ? { name: authorObj.name, role: authorObj.role, image: getImageUrl(authorObj.image) } : null,
    tags,
    seo: (post as any).seo || {},
    relatedSlugs: (post as any).relatedSlugs || [],
  }

  // Fetch related posts (use relatedSlugs if available, otherwise get all and filter)
  const allPosts = await getAllPosts()
  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)
    .map((p) => ({
      ...p,
      content: lexicalToHtml(p.content),
      coverImage: getImageUrl(p.coverImage),
      category: getRelSlug(p.category),
      author: getRelSlug(p.author),
      tags: extractTags(p.tags),
      seo: (p as any).seo || {},
      relatedSlugs: [],
    }))

  // Fetch cluster
  const cluster = await getClusterForPost(post.id)

  // Adapt author for ArticleAuthor component
  const authorForComponent = authorObj ? {
    slug: authorObj.slug || "",
    name: authorObj.name || "",
    role: authorObj.role || "",
    bio: authorObj.bio || "",
    expertise: Array.isArray(authorObj.expertise)
      ? authorObj.expertise.map((e: any) => typeof e === "string" ? e : e.skill || e.expertise || "")
      : [],
    image: getImageUrl(authorObj.image || authorObj.photo),
    social: authorObj.social,
  } : null

  // Adapt cluster for ArticleClusterNav
  const clusterForComponent = cluster ? {
    slug: cluster.slug || "",
    name: cluster.name || "",
    description: cluster.description || "",
    pillarSlug: typeof cluster.pillarPost === "object"
      ? (cluster.pillarPost as any)?.slug || ""
      : "",
    articleSlugs: Array.isArray((cluster as any).articles)
      ? (cluster as any).articles.map((a: any) => typeof a === "object" ? a.slug : "").filter(Boolean)
      : [],
  } : null

  return (
    <>
      <ArticleSchema post={adaptedPost as any} />
      <ReadingProgress />
      <ArticleHeader post={adaptedPost as any} />
      <Breadcrumbs category={categorySlug} title={post.title} />

      <article className="mx-auto max-w-7xl px-8 py-12 md:px-16 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="min-w-0">
            <ArticleBody content={contentHtml} />
            <ArticleTags tags={tags} />
            {authorForComponent && <ArticleAuthor author={authorForComponent} />}
            {clusterForComponent && (
              <ArticleClusterNav cluster={clusterForComponent} currentSlug={post.slug} />
            )}
          </div>

          <aside className="hidden lg:block">
            <ArticleToc content={contentHtml} />
          </aside>
        </div>
      </article>

      <ArticleRelated posts={related as any} />
      <BlogCta />
    </>
  )
}
