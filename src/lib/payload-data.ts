import { getPayload } from "./payload"

// ─── Blog ─────────────────────────────────────────

export async function getAllPosts() {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "posts",
    sort: "-publishedAt",
    limit: 100,
    depth: 1,
  })
  return result.docs
}

export async function getPostBySlug(slug: string) {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "posts",
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  })
  return result.docs[0] || null
}

export async function getPostsByCategory(categorySlug: string) {
  const payload = await getPayload()

  const categories = await payload.find({
    collection: "categories",
    where: { slug: { equals: categorySlug } },
    limit: 1,
  })

  if (categories.docs.length === 0) return []

  const result = await payload.find({
    collection: "posts",
    where: { category: { equals: categories.docs[0].id } },
    sort: "-publishedAt",
    limit: 100,
    depth: 1,
  })
  return result.docs
}

export async function getFeaturedPosts() {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "posts",
    where: { featured: { equals: true } },
    sort: "-publishedAt",
    limit: 10,
    depth: 1,
  })
  return result.docs
}

export async function getAllPostSlugs() {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "posts",
    limit: 100,
    depth: 0,
  })
  return result.docs.map((p) => ({ slug: p.slug }))
}

// ─── Categories ───────────────────────────────────

export async function getAllCategories() {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "categories",
    limit: 20,
  })
  return result.docs
}

export async function getCategoryBySlug(slug: string) {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "categories",
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return result.docs[0] || null
}

export async function getAllCategorySlugs() {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "categories",
    limit: 20,
    depth: 0,
  })
  return result.docs.map((c) => ({ slug: c.slug }))
}

// ─── Authors ──────────────────────────────────────

export async function getAuthorBySlug(slug: string) {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "authors",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  })
  return result.docs[0] || null
}

// ─── Topic Clusters ──────────────────────────────

export async function getClusterForPost(postId: number | string) {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "topic-clusters",
    where: {
      or: [
        { pillarPost: { equals: postId } },
        { articles: { contains: postId } },
      ],
    },
    limit: 1,
    depth: 1,
  })
  return result.docs[0] || null
}

// ─── Team ─────────────────────────────────────────

export async function getTeamMembers() {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "team-members",
    sort: "sortOrder",
    limit: 20,
    depth: 1,
  })
  return result.docs
}

// ─── Courses ──────────────────────────────────────

export async function getCourses() {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "courses",
    where: { active: { equals: true } },
    sort: "day",
    limit: 100,
  })
  return result.docs
}

// ─── Jobs ─────────────────────────────────────────

export async function getJobPositions() {
  const payload = await getPayload()
  const result = await payload.find({
    collection: "job-positions",
    where: { active: { equals: true } },
    sort: "sortOrder",
    limit: 20,
    depth: 0,
  })
  return result.docs
}

export async function createJobApplication(data: Record<string, unknown>) {
  const payload = await getPayload()
  return payload.create({
    collection: "job-applications",
    data,
  })
}

// ─── Membership ───────────────────────────────────

export async function createMembershipSignup(data: Record<string, unknown>) {
  const payload = await getPayload()
  return payload.create({
    collection: "membership-signups",
    data,
  })
}

// ─── Globals ──────────────────────────────────────

export async function getSiteSettings() {
  const payload = await getPayload()
  return payload.findGlobal({ slug: "site-settings" })
}

export async function getNavigation() {
  const payload = await getPayload()
  return payload.findGlobal({ slug: "navigation" })
}
