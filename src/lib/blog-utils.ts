import {
  convertLexicalToHTML,
  defaultHTMLConverters,
} from "@payloadcms/richtext-lexical/html"
import type { SerializedEditorState } from "lexical"

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
}

function addHeadingIds(html: string): string {
  const used = new Set<string>()
  return html.replace(
    /<h([23])(\s[^>]*)?>([^<]+)<\/h[23]>/g,
    (_m, level, attrs, text) => {
      const hasId = /\sid=/.test(attrs || "")
      if (hasId) return _m
      let slug = slugify(text)
      if (!slug) slug = `heading-${used.size + 1}`
      let unique = slug
      let i = 2
      while (used.has(unique)) {
        unique = `${slug}-${i++}`
      }
      used.add(unique)
      return `<h${level} id="${unique}"${attrs || ""}>${text}</h${level}>`
    }
  )
}

/**
 * Convert Payload Lexical JSON to HTML string and inject stable IDs into headings.
 */
export function lexicalToHtml(content: unknown): string {
  if (!content) return ""
  if (typeof content === "string") return addHeadingIds(content)
  if (typeof content === "object" && content !== null && "root" in content) {
    try {
      const html = convertLexicalToHTML({
        converters: defaultHTMLConverters,
        data: content as SerializedEditorState,
      })
      return addHeadingIds(html)
    } catch {
      return ""
    }
  }
  return ""
}

export function calculateReadingTime(content: unknown): number {
  const html = typeof content === "string" ? content : lexicalToHtml(content)
  const text = html.replace(/<[^>]*>/g, "")
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

export function extractHeadings(
  content: unknown
): { id: string; text: string; level: number }[] {
  const html = typeof content === "string" ? content : lexicalToHtml(content)
  const regex = /<h([23])\s+id="([^"]+)"[^>]*>([^<]+)<\/h[23]>/g
  const headings: { id: string; text: string; level: number }[] = []
  let match
  while ((match = regex.exec(html)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3],
    })
  }
  return headings
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
