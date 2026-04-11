export const dynamic = "force-dynamic"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCta } from "@/components/blog/blog-cta"
import {
  getPostsByCategory,
  getAllCategorySlugs,
  getCategoryBySlug,
  getAllPosts,
  getAllCategories,
} from "@/lib/payload-data"

interface PageProps {
  params: Promise<{ slug: string }>
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)
  if (!category) return {}

  return {
    title: `${category.name} - Blog`,
    description: category.description || "",
    alternates: {
      canonical: `https://sport.casasports.de/blog/kategorie/${category.slug}`,
    },
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)
  if (!category) notFound()

  const [posts, allPosts, categories] = await Promise.all([
    getPostsByCategory(slug),
    getAllPosts(),
    getAllCategories(),
  ])

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
          {category.description && (
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
              {category.description}
            </p>
          )}
        </div>
      </section>

      <BlogCategories categories={categories} totalPosts={allPosts.length} />
      <BlogGrid
        posts={posts as any}
        title={posts.length === 0 ? "Noch keine Artikel in dieser Kategorie." : undefined}
      />
      <BlogCta />
    </>
  )
}
