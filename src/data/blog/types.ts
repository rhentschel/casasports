export interface Author {
  slug: string
  name: string
  role: string
  bio: string
  expertise: string[]
  image: string
  social?: {
    instagram?: string
    linkedin?: string
  }
}

export interface Category {
  slug: string
  name: string
  description: string
  color: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  updatedAt?: string
  featured?: boolean
  isPillar?: boolean
  topicCluster?: string
  relatedSlugs: string[]
  seo: {
    title?: string
    description?: string
  }
}

export interface TopicCluster {
  slug: string
  name: string
  description: string
  pillarSlug: string
  articleSlugs: string[]
}
