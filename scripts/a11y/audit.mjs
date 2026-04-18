#!/usr/bin/env node
/**
 * WCAG 2.2 AA Audit via Playwright + @axe-core/playwright
 *
 * Separates Mini-Projekt in scripts/a11y/ - nicht Teil des Haupt-Builds
 * um Docker-Build nicht zu blockieren.
 *
 * Setup:
 *   cd scripts/a11y && npm install && npx playwright install chromium
 *
 * Usage (aus Repo-Root):
 *   node scripts/a11y/audit.mjs              (gegen https://sport.casasports.de)
 *   BASE_URL=http://localhost:3000 node scripts/a11y/audit.mjs
 *
 * Output:
 *   a11y-report/report.json   - Volle Violations pro Seite
 *   a11y-report/report.md     - Zusammenfassung
 */

import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "..");
const OUT_DIR = join(ROOT, "a11y-report");

const BASE_URL = process.env.BASE_URL || "https://sport.casasports.de";

const PAGES = [
  { path: "/", name: "Home" },
  { path: "/fitness", name: "Fitness" },
  { path: "/kurse", name: "Kurse" },
  { path: "/wellness", name: "Wellness" },
  { path: "/ernaehrung", name: "Ernaehrung" },
  { path: "/mein-neues-ich", name: "Mein Neues Ich" },
  { path: "/jobs", name: "Jobs" },
  { path: "/mitglied-werden", name: "Mitglied werden" },
  { path: "/probetraining", name: "Probetraining" },
  { path: "/blog", name: "Blog" },
  { path: "/impressum", name: "Impressum" },
  { path: "/datenschutz", name: "Datenschutz" },
];

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

function severityEmoji(impact) {
  return (
    {
      critical: "🔴",
      serious: "🟠",
      moderate: "🟡",
      minor: "🔵",
    }[impact] || "⚪"
  );
}

async function auditPage(browser, page) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const pageObj = await ctx.newPage();
  const url = `${BASE_URL}${page.path}`;

  console.log(`→ ${page.name} (${url})`);

  try {
    await pageObj.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    await pageObj.waitForTimeout(800);

    const results = await new AxeBuilder({ page: pageObj })
      .withTags(WCAG_TAGS)
      .analyze();

    await ctx.close();
    return { page, url, results, error: null };
  } catch (err) {
    await ctx.close();
    return { page, url, results: null, error: err.message };
  }
}

function renderMarkdown(auditResults) {
  const lines = [];
  lines.push(`# Casa Sports - WCAG 2.2 AA Audit`);
  lines.push("");
  lines.push(`**Basis:** ${BASE_URL}`);
  lines.push(`**Datum:** ${new Date().toLocaleString("de-DE", { dateStyle: "full", timeStyle: "short" })}`);
  lines.push(`**Tags:** ${WCAG_TAGS.join(", ")}`);
  lines.push("");

  const totals = { critical: 0, serious: 0, moderate: 0, minor: 0 };
  let totalPasses = 0;
  let totalViolations = 0;

  for (const { results } of auditResults) {
    if (!results) continue;
    totalPasses += results.passes.length;
    for (const v of results.violations) {
      totalViolations += v.nodes.length;
      if (totals[v.impact] !== undefined) totals[v.impact] += v.nodes.length;
    }
  }

  lines.push(`## Gesamt`);
  lines.push("");
  lines.push(`| Severity | Anzahl |`);
  lines.push(`|----------|--------|`);
  lines.push(`| 🔴 Critical | ${totals.critical} |`);
  lines.push(`| 🟠 Serious  | ${totals.serious} |`);
  lines.push(`| 🟡 Moderate | ${totals.moderate} |`);
  lines.push(`| 🔵 Minor    | ${totals.minor} |`);
  lines.push(`| **Summe Violations** | **${totalViolations}** |`);
  lines.push(`| Passes   | ${totalPasses} |`);
  lines.push("");

  lines.push(`## Pro Seite`);
  lines.push("");

  for (const { page, url, results, error } of auditResults) {
    lines.push(`### ${page.name} - \`${page.path}\``);
    lines.push(`URL: ${url}`);
    lines.push("");

    if (error) {
      lines.push(`**Fehler beim Laden:** ${error}`);
      lines.push("");
      continue;
    }
    if (!results) {
      lines.push(`Keine Ergebnisse.`);
      lines.push("");
      continue;
    }

    if (results.violations.length === 0) {
      lines.push(`✅ Keine Violations. ${results.passes.length} Passes.`);
      lines.push("");
      continue;
    }

    lines.push(`**${results.violations.length} Regel-Verstoesse** (${results.violations.reduce((s, v) => s + v.nodes.length, 0)} betroffene Elemente)`);
    lines.push("");

    for (const v of results.violations) {
      lines.push(`#### ${severityEmoji(v.impact)} ${v.id} - ${v.help}`);
      lines.push(`- **Impact:** ${v.impact}`);
      lines.push(`- **WCAG:** ${v.tags.filter((t) => t.startsWith("wcag")).join(", ") || "-"}`);
      lines.push(`- **Dokumentation:** ${v.helpUrl}`);
      lines.push(`- **Betroffene Elemente:** ${v.nodes.length}`);
      for (const n of v.nodes.slice(0, 3)) {
        const selector = Array.isArray(n.target) ? n.target.join(" ") : n.target;
        lines.push(`  - \`${selector}\``);
      }
      if (v.nodes.length > 3) {
        lines.push(`  - ... und ${v.nodes.length - 3} weitere`);
      }
      lines.push("");
    }
  }

  return lines.join("\n");
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  console.log(`\n🔍 WCAG 2.2 AA Audit gegen ${BASE_URL}\n`);

  const browser = await chromium.launch({ headless: true });
  const auditResults = [];

  for (const page of PAGES) {
    const result = await auditPage(browser, page);
    auditResults.push(result);
    if (result.results) {
      const violations = result.results.violations.length;
      console.log(`  ${violations === 0 ? "✅" : "⚠ "} ${violations} Violations`);
    } else {
      console.log(`  ❌ ${result.error}`);
    }
  }

  await browser.close();

  const jsonPayload = auditResults.map(({ page, url, results, error }) => ({
    page: page.name,
    path: page.path,
    url,
    error,
    violations: results?.violations ?? [],
    passesCount: results?.passes?.length ?? 0,
  }));

  await writeFile(
    join(OUT_DIR, "report.json"),
    JSON.stringify(jsonPayload, null, 2),
    "utf8"
  );

  const md = renderMarkdown(auditResults);
  await writeFile(join(OUT_DIR, "report.md"), md, "utf8");

  console.log(`\n📄 Report: a11y-report/report.md`);
  console.log(`📄 JSON:   a11y-report/report.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
