import { Tag } from "lucide-react"

interface ArticleTagsProps {
  tags: string[]
}

export function ArticleTags({ tags }: ArticleTagsProps) {
  return (
    <div className="mt-10 border-t border-white/[0.06] pt-8">
      <div className="flex items-center gap-2">
        <Tag className="h-3.5 w-3.5 text-cs-gray-500" />
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cs-gray-500">
          Tags
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-white/[0.06] px-3 py-1.5 text-base text-cs-gray-400 transition-colors duration-300 hover:border-cs-accent/30 hover:text-cs-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
