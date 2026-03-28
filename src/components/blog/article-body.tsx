"use client"

import { useReveal } from "@/lib/use-reveal"

interface ArticleBodyProps {
  content: string
}

export function ArticleBody({ content }: ArticleBodyProps) {
  const ref = useReveal()

  return (
    <div ref={ref} className="reveal" id="article-content">
      <div
        className="blog-prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
