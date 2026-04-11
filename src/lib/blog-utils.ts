import {
  convertLexicalToHTML,
  defaultHTMLConverters,
} from "@payloadcms/richtext-lexical/html"
import type { SerializedEditorState } from "lexical"

/**
 * Convert Payload Lexical JSON to HTML string.
 * Falls back gracefully if the data is already a plain HTML string.
 */
export function lexicalToHtml(content: unknown): string {
  if (!content) return ""
  if (typeof content === "string") return content
  if (typeof content === "object" && content !== null && "root" in content) {
    try {
      return convertLexicalToHTML({
        converters: defaultHTMLConverters,
        data: content as SerializedEditorState,
      })
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
