import { NextResponse } from "next/server"
import { getPayload } from "payload"
import { headers as nextHeaders } from "next/headers"
import { readdir, readFile, stat } from "fs/promises"
import path from "path"
import config from "@payload-config"

export const dynamic = "force-dynamic"

const PUBLIC_IMAGES_DIR = path.join(process.cwd(), "public", "images")

const MIME_MAP: Record<string, string> = {
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
}

/**
 * Macht aus "casasports-kurse-fuer-alle.webp" ein lesbares Alt-Text:
 * "Casa Sports Kurse für alle"
 */
function filenameToAlt(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "")
  const cleaned = base
    .replace(/casasports?-/gi, "Casa Sports ")
    .replace(/-fuer-/gi, " für ")
    .replace(/-ueber-/gi, " über ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  return cleaned
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export async function POST() {
  const payload = await getPayload({ config })
  const h = await nextHeaders()
  const { user } = await payload.auth({ headers: h })

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const files = await readdir(PUBLIC_IMAGES_DIR)
    const imageFiles = files.filter((f) =>
      Object.keys(MIME_MAP).includes(path.extname(f).toLowerCase())
    )

    const imported: string[] = []
    const skipped: string[] = []
    const errors: Array<{ file: string; error: string }> = []

    for (const filename of imageFiles) {
      try {
        // Check if already imported (by filename)
        const existing = await payload.find({
          collection: "media",
          where: { filename: { equals: filename } },
          limit: 1,
          overrideAccess: true,
        })

        if (existing.docs.length > 0) {
          skipped.push(filename)
          continue
        }

        const filepath = path.join(PUBLIC_IMAGES_DIR, filename)
        const buffer = await readFile(filepath)
        const fileStat = await stat(filepath)
        const ext = path.extname(filename).toLowerCase()
        const mimetype = MIME_MAP[ext] || "application/octet-stream"

        await payload.create({
          collection: "media",
          data: {
            alt: filenameToAlt(filename),
          },
          file: {
            data: buffer,
            name: filename,
            mimetype,
            size: fileStat.size,
          },
          overrideAccess: true,
        })

        imported.push(filename)
      } catch (err) {
        errors.push({
          file: filename,
          error: err instanceof Error ? err.message : String(err),
        })
      }
    }

    return NextResponse.json({
      success: true,
      summary: {
        total: imageFiles.length,
        imported: imported.length,
        skipped: skipped.length,
        errors: errors.length,
      },
      imported,
      skipped,
      errors,
    })
  } catch (err) {
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Unbekannter Fehler",
      },
      { status: 500 }
    )
  }
}
