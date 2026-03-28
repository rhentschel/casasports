export function calculateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "")
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 220))
}

export function extractHeadings(
  html: string
): { id: string; text: string; level: number }[] {
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
