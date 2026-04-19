"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { useReveal } from "@/lib/use-reveal"
// eslint-disable-next-line @typescript-eslint/no-explicit-any

interface ArticleAuthorProps {
  author: any
}

export function ArticleAuthor({ author }: ArticleAuthorProps) {
  const ref = useReveal()

  return (
    <aside ref={ref} className="reveal mt-16 border-t border-white/[0.06] pt-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gray-500">
        Über den Autor
      </p>

      <div className="mt-6 flex gap-6">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold text-cs-white">{author.name}</h3>
          <p className="text-[13px] text-cs-accent">{author.role}</p>
          <p className="mt-3 text-[14px] leading-relaxed text-white/60">
            {author.bio}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {author.expertise.map((e: any) => (
              <span
                key={e}
                className="border border-white/[0.06] px-2.5 py-1 text-[11px] text-cs-gray-400"
              >
                {e}
              </span>
            ))}
          </div>

          {author.social?.instagram && (
            <a
              href={author.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[12px] text-cs-gray-500 transition-colors duration-300 hover:text-cs-accent"
            >
              <Instagram className="h-3.5 w-3.5" />
              Instagram
            </a>
          )}
        </div>
      </div>
    </aside>
  )
}
