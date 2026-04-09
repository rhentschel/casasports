import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCta } from "@/components/blog/blog-cta"
import { categories, getCategory } from "@/data/blog/categories"
import { getPostsByCategory } from "@/data/blog/posts"
import { siteConfig } from "@/data/site"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return {}

  return {
    title: `${category.name} - Blog`,
    description: category.description,
    alternates: {
      canonical: `${siteConfig.url}/blog/kategorie/${category.slug}`,
    },
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  const posts = getPostsByCategory(slug)

  return (
    <>
      <section className="bg-cs-black pb-8 pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-8 md:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Blog / Kategorie
          </p>
          <h1 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
            {category.description}
          </p>
        </div>
      </section>

      <BlogCategories />
      <BlogGrid
        posts={posts}
        title={posts.length === 0 ? "Noch keine Artikel in dieser Kategorie." : undefined}
      />
      <BlogCta />
    </>
  )
}
