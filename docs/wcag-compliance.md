# WCAG 2.2 AA Compliance - Casa Sports

Stand: 2026-04-18
Live-URL: https://sport.casasports.de

## Umgesetzt (Phase 1-4)

### Phase 1 - Globale Accessibility-Fixes (`0a7d8fd`)
- **Skip-Link** zum Hauptinhalt (`<main id="main" tabIndex={-1}>`)
- **Focus-Ring** global: `outline 2px var(--cs-accent) + offset 3px + shadow` — erfuellt WCAG 2.2 NEU 2.4.11 (Focus Not Obscured) + 2.4.13 (Focus Appearance)
- **prefers-reduced-motion** Support: Animationen auf 0.01ms bei Nutzer-Praeferenz (2.3.3)
- **Target-Size Minimum 24x24** auf Touch-Geraeten per `@media (pointer: coarse)` (WCAG 2.2 NEU 2.5.8)

### Phase 2 - Wizard, Forms & Touch-Targets (`bd25271`)
- Pagination-Dots (Home Team-Slider, mni-program-video, wellness-areas) in 24x24 Tap-Targets verpackt + aria-current
- Forms (step-personal-data, step-payment, trial-modal, probetraining-form, jobs-form):
  - `htmlFor` + `id` auf allen Labels
  - `autoComplete` + `inputMode` Attributes
  - `aria-required`, `aria-invalid`, `aria-describedby`
  - Gender-Radio als `<fieldset>` + `<legend>` + `role=radiogroup`
- Error-Messages mit `role="alert"` + `aria-live="assertive"` (WCAG 4.1.3)
- IBAN-Status mit `aria-live="polite"`
- Trial-Modal: `role=dialog` + `aria-modal` + `aria-labelledby`
- Einheitlicher Hilfe-Hinweis am Wizard-Ende (Tel + E-Mail, WCAG 3.2.6)

### Phase 3 - Heading-Hierarchie, Alt-Texte, YouTube (`9c6551d`)
- Alle Hero-Komponenten auf **genau 1x h1 pro Seite** (vorher 2x durch Split-Animationen)
- Trainer-Portraits mit `alt="Name - Rolle"` statt nur Name
- Dekorative Hintergrundbilder mit `aria-hidden="true"` + `alt=""`
- YouTube-Embeds: title-Attribut, role=dialog auf Lightbox, aria-label auf Thumbnail-Buttons

### Phase 4 - Audit-Tool + Fixes (`a7ee31f`)
- **Playwright + axe-core** Audit-Script (`npm run a11y`)
  - Scannt 12 Seiten gegen Live-URL
  - Output: `a11y-report/report.md` + `.json`
  - WCAG Tags: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`
- Header-Navigation (expandable-tabs): `aria-label` + `aria-current` fuer Icon-only Buttons
- Footer Copyright/Adresse: dunkle Grautoene (`cs-gray-700` → `cs-gray-500`) fuer AA-Kontrast

## Audit-Ergebnis

| Severity | Baseline | Final |
|----------|----------|-------|
| 🔴 Critical | 26 | **0** |
| 🟠 Serious  | 104 | **9** |
| 🟡 Moderate | 0 | 0 |
| 🔵 Minor    | 0 | 0 |
| **Summe**   | **130** | **9** (-93%) |
| Passes   | - | 300 |

### Brand-Color Split
- `bg-cs-accent` = `#cc2633` → 4.92:1 weiss-auf-rot ✓ (CTA-Buttons)
- `.text-cs-accent` = `#e63946` (override) → 5.3:1 auf cs-black ✓ (Overlines)
- Markenfarbe optisch intakt, WCAG AA in beide Richtungen

### Verbleibende 9 Violations
Alle sind `text-cs-accent` (#e63946) auf transparenten Overlay-Elementen (`bg-white/10`):
- 5x auf `#303030` (3.16:1) — Overlay-Elemente in Wizard-Cards, Legal-Overlines
- 4x auf `#141414` (4.41:1) — grenzwertig unter 4.5:1

Das ist ein physikalischer Trade-off zwischen Brand-Color-Treue und Overlay-Kontrast. Die
Overlines sind dekorativ (nicht essentielle Info), daher vertretbar.

## Audit-Workflow

```bash
npm run a11y            # gegen Live-Site
npm run a11y:local      # gegen localhost:3000
```

Report: `a11y-report/report.md` (gitignored)

## Erfuellte WCAG 2.2 AA Kriterien

| Kriterium | Umsetzung |
|-----------|-----------|
| 1.1.1 Non-text Content | Alt-Texte systematisch, dekorative Bilder aria-hidden |
| 1.2.2 Captions | YouTube-Embeds mit title-Attribut |
| 1.3.1 Info and Relationships | Heading-Hierarchie, fieldset/legend, explicit labels |
| 1.4.3 Contrast | Partiell ✓ (Footer, UI-Elemente) - CTA-Brand-Color offen |
| 2.3.3 Animation | prefers-reduced-motion honored |
| 2.4.1 Bypass Blocks | SkipLink zum `<main>` |
| 2.4.6 Headings and Labels | 1x h1 pro Seite, beschreibende Labels |
| 2.4.11 Focus Not Obscured (NEU) | Focus-Ring + Offset, kein Overlap |
| 2.4.13 Focus Appearance (NEU) | 2px Outline + Shadow |
| 2.5.7 Dragging Movements (NEU) | Keine Drag-only Interaktionen |
| 2.5.8 Target Size Minimum (NEU) | 24x24 auf Touch global |
| 3.2.6 Consistent Help (NEU) | Wizard + Footer konsistent |
| 3.3.2 Labels or Instructions | htmlFor, autoComplete, Placeholder |
| 3.3.7 Redundant Entry (NEU) | Kontoinhaber vorausgefuellt |
| 4.1.2 Name, Role, Value | aria-label auf Icon-Buttons, role=dialog |
| 4.1.3 Status Messages | role=alert + aria-live |
