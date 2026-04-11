import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbsProps {
  category: string
  title: string
}

export function Breadcrumbs({ category, title }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-8 py-6 md:px-16">
      <ol className="flex flex-wrap items-center gap-1 text-[12px] text-cs-gray-500">
        <li>
          <Link href="/" className="transition-colors duration-300 hover:text-cs-white">Home</Link>
        </li>
        <li><ChevronRight className="h-3 w-3 text-white/20" /></li>
        <li>
          <Link href="/blog" className="transition-colors duration-300 hover:text-cs-white">Blog</Link>
        </li>
        {category && (
          <>
            <li><ChevronRight className="h-3 w-3 text-white/20" /></li>
            <li>
              <Link href={`/blog/kategorie/${category}`} className="transition-colors duration-300 hover:text-cs-white">
                {category}
              </Link>
            </li>
          </>
        )}
        <li><ChevronRight className="h-3 w-3 text-white/20" /></li>
        <li className="truncate text-cs-gray-400" aria-current="page">{title}</li>
      </ol>
    </nav>
  )
}
