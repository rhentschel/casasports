import { calculateReadingTime } from "@/lib/blog-utils"

const siteUrl = "https://sport.casasports.de"
const siteName = "Casa Sports"

interface ArticleSchemaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: any
}

export function ArticleSchema({ post }: ArticleSchemaProps) {
  const authorData = post.authorData || (typeof post.author === "object" ? post.author : null)
  const readingTime = calculateReadingTime(post.content)
  const contentText = typeof post.content === "string" ? post.content.replace(/<[^>]*>/g, "") : ""
  const tags = Array.isArray(post.tags) ? post.tags.map((t: any) => typeof t === "string" ? t : t.tag || "").filter(Boolean) : []

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seo?.description ?? post.excerpt,
    image: post.coverImage?.startsWith?.("http") ? post.coverImage : `${siteUrl}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    wordCount: contentText.split(/\s+/).length,
    timeRequired: `PT${readingTime}M`,
    author: authorData
      ? {
          "@type": "Person",
          name: authorData.name,
          jobTitle: authorData.role,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: { "@type": "ImageObject", url: `${siteUrl}/icon-192.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${post.slug}` },
    keywords: tags.join(", "),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/blog/${post.slug}` },
    ],
  }

  const faqItems = Array.isArray(post.faq) ? post.faq : []
  const faqSchema = faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f: any) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </>
  )
}
