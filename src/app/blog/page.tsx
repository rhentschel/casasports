import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCta } from "@/components/blog/blog-cta"
import { getAllPosts } from "@/data/blog/posts"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Blog - Trainingstipps, Ernaehrung & Wellness",
  description:
    "Fitness-Blog von Casa Sports: Trainingstipps, Ernaehrungswissen und Wellness-Strategien. Fundiert, praxisnah und fuer jedes Level.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <BlogHero />
      <BlogCategories />
      <BlogGrid posts={posts} showFeatured />
      <BlogCta />
    </>
  )
}
