export const dynamic = "force-dynamic"
import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCta } from "@/components/blog/blog-cta"
import { getAllPosts, getAllCategories } from "@/lib/payload-data"

export const metadata: Metadata = {
  title: "Blog - Trainingstipps, Ernährung & Wellness",
  description:
    "Fitness-Blog von Casa Sports: Trainingstipps, Ernährungswissen und Wellness-Strategien. Fundiert, praxisnah und für jedes Level.",
  alternates: {
    canonical: "https://sport.casasports.de/blog",
  },
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ])

  return (
    <>
      <BlogHero />
      <BlogCategories categories={categories} totalPosts={posts.length} />
      <BlogGrid posts={posts as any} />
      <BlogCta />
    </>
  )
}
