# Casa Sports

Fitnessstudio Oer-Erkenschwick, Next.js 16 + Payload CMS auf Coolify VPS.

**Live:** https://sport.casasports.de · **Admin:** https://sport.casasports.de/admin

## Quick Commands

```bash
npm run dev        # Dev-Server (nutzt tmux-Hook, muss via 'tmux new -s dev "npm run dev"')
npm run build      # Pflicht vor jedem Deploy
npm run lint       # ESLint
npm run a11y       # Accessibility-Audit gegen live
```

## Deploy Workflow (KRITISCH)

```bash
npm run build                           # lokal testen
git add -A && git commit && git push    # GitHub (rhentschel/casasports, PUBLIC)
curl -s -X POST "http://72.62.151.115:8000/api/v1/applications/tkk8kw4sw4kwswsw40s8scgw/start" \
  -H "Authorization: Bearer <TOKEN>" -H "Accept: application/json"
```

- **`/start` NICHT `/restart`** — Restart pullt keinen neuen Code
- Build dauert ~90s
- Coolify-Token + VPS-IP siehe Memory `casasports-details.md`
- Repo muss PUBLIC bleiben solange kein Deploy-Key (Coolify klont ohne Auth)

## Tech Stack

- Next.js 16 + React 19 + TypeScript + Tailwind v4
- Payload CMS 3.82 (Admin `/admin`, deutsch)
- Supabase self-hosted (Naim-VPS, `https://supabase.naim-obeid.de`)
- Magicline API (Vertragsabschluss via Wizard)
- Docker Container via Coolify auf VPS `72.62.151.115`

## Architecture

- `src/app/(frontend)/` — Alle Public-Seiten
- `src/app/(payload)/` — Admin Panel
- `src/app/api/` — Magicline + Payload API Routes
- `src/collections/` — Payload Schema (`posts.ts`, `authors.ts`, `jobs/*`, `media.ts`)
- `src/components/blog|jobs|kurse|...` — Feature-Ordner
- `src/payload.config.ts` — Seeds + INIT_TABLES_SQL im `onInit`-Hook
- `src/lib/payload-data.ts` — CMS-Fetcher (`getBlogPosts`, `getTeamMembers` etc.)

## Gotchas (nicht wegbauen!)

- **Payload `push: true` nur in dev** → neue Spalten müssen manuell via `ALTER TABLE IF NOT EXISTS` in `INIT_TABLES_SQL` (siehe `payload.config.ts`)
- **Sharp im Container kann AVIF/HEIF nicht decoden** → AVIF-Dateien lokal zu WebP konvertieren (`ffmpeg → jpg → cwebp`), sips/sharp schlagen fehl
- **`output: "standalone"` ist RAUS** seit Payload-Integration, wird `next start` statt standalone
- **next.config.ts braucht `withPayload()` wrapper**
- **Array-Felder in Payload + Prod-DB**: erstellen Sub-Tabellen → bei neuen Array-Fields CREATE TABLE einbauen oder stattdessen JSON-Feld nutzen
- **Coolify-Deploy Reihenfolge:** push → `/start`, NIEMALS amend auf gepushten Commits
- **tmux-Hook blockt `npm run dev` direkt** → immer `tmux new -s dev "npm run dev"`
- **Hostinger NICHT Hetzner** — alle Nicht-Casa-Projekte sind auf Hostinger

## Content-Konventionen

- **Deutsch** für UI-Text und Kommunikation
- **Echte Umlaute ü/ö/ä/ß** in UI-Content, Blog, Seeds
- **ASCII bleibt** in: Code-Identifiern, URL-Slugs, Dateinamen, `filename`-Feldern
- **Mindest-Schriftgröße 16px** für Body-Text (`text-base`), Uppercase-Labels mit `tracking-[0.1em+]` dürfen 11–14px bleiben
- **Keine erfundenen Zahlen/Studien** in Blog-Artikeln (harte Regel, siehe `feedback_blog_statistiken`)
- **Keine Em-Dashes** im Deutschen (wirkt unnatürlich)

## Design-System

- Dark-Only (Light-Mode wurde getestet und verworfen)
- Farben: `cs-black #0a0a0a`, `cs-white #f5f5f0`, `cs-accent #e63946`, `cs-gold #c8a96e`
- Grays WCAG AA: `cs-gray-400/500/600` (mind. 4.84:1), niemals `text-white/20-40`
- Inter-Typografie, cinematische Bildfilter via `.img-cinema`
- Scroll-Reveal via `useReveal`, Premium-Easing `cubic-bezier(0.16,1,0.3,1)`

## Blog-System (Seit Session 2026-04-23)

Artikel haben zusätzlich zum Lexical-Content:
- **`keyTakeaway`** (textarea) — Kernaussage oben als rote Akzent-Box
- **`faq`** (JSON) — Array `[{question,answer}]`, rendert FAQ-Sektion + FAQPage-Schema
- **Headings bekommen auto-IDs** via `addHeadingIds()` in `lexicalToHtml` für TOC + Deep-Links
- **TOC** ist sticky (`top-24`), FAQ-Link integriert

## Wiedereinstieg

```
"weiter mit Casa Sports 5.5"           # Google-Reviews-Section
"weiter mit Casa Sports admin-reset"   # Endpoint entfernen
"weiter mit Casa Sports Repo privat"   # GitHub privat + Coolify Deploy Key
"weiter mit Casa Sports Email-Notif"   # Neu-Abschluss-Mail
```

Details + Credentials + aktueller TODO-Stand: siehe Memory-Files
`casasports-details.md` · `casasports-todos.md` · `casasports-session-2026-04-19.md`
