"use client"

import { useReveal } from "@/lib/use-reveal"
import "./article-body-styles.css"

interface ArticleBodyProps {
  content: string
}

export function ArticleBody({ content }: ArticleBodyProps) {
  const ref = useReveal()

  return (
    <div ref={ref} className="reveal bp-article" id="article-content">
      <div
        className="blog-prose"
        spellCheck={false}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
