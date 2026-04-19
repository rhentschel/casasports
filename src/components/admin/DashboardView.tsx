"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Users,
  Euro,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Calendar,
  Mail,
  Settings,
  Briefcase,
  UserPlus,
  Activity,
  Target,
  Loader2,
  AlertCircle,
  Sparkles,
  Inbox,
  Filter,
  AlertTriangle,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Stats = {
  kpis: {
    total: number
    active: number
    cancelled: number
    paused: number
    thisMonth: number
    lastMonth: number
    thisYear: number
    last7Days: number
    last30Days: number
    last90Days: number
    mrr: number
    arr: number
    churnRate: number
    avgMonthly: number
  }
  leads?: {
    total: number
    thisMonth: number
    last30Days: number
    open: number
    converted: number
    lost: number
    conversionRate: number
    bySource: Array<{ source: string; count: number }>
  }
  wizard?: {
    starts: number
    completions: number
    conversion: number
    funnel: Array<{ step: string; reached: number }>
    biggestDropStep: string | null
    biggestDropPct: number
  }
  planBreakdown: Array<{ plan: string; count: number }>
  monthlyTrend: Array<{ month: string; count: number; mrr: number }>
  heatmap: Array<{ date: string; count: number }>
  sparklineSignups: number[]
  recent: Array<{
    id: string
    customerName: string
    email: string
    plan: string
    termMonths: number
    monthlyPrice: number
    status: string
    createdAt: string
  }>
}

function formatPrice(n: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n)
}

function formatPriceDecimal(n: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(n)
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "short",
  })
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function getGreeting(name: string): string {
  const hour = new Date().getHours()
  const first = name.split(" ")[0] || name
  if (hour < 6) return `Noch wach, ${first}?`
  if (hour < 11) return `Guten Morgen, ${first}`
  if (hour < 14) return `Guten Tag, ${first}`
  if (hour < 18) return `Hallo, ${first}`
  return `Guten Abend, ${first}`
}

function useCounter(target: number, duration = 900): number {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const from = 0
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      const ease = 1 - Math.pow(1 - p, 3)
      setValue(from + (target - from) * ease)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

function Sparkline({ data, accent = false }: { data: number[]; accent?: boolean }) {
  if (data.length < 2) return null
  const max = Math.max(...data, 1)
  const min = Math.min(...data, 0)
  const range = max - min || 1
  const w = 80
  const h = 28
  const step = w / (data.length - 1)
  const points = data
    .map((v, i) => `${i * step},${h - ((v - min) / range) * h}`)
    .join(" ")
  const color = accent ? "#e63946" : "rgba(255,255,255,0.4)"
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-7 w-20" fill="none">
      <polyline
        points={points}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AreaChart({
  data,
  height = 160,
}: {
  data: Array<{ month: string; mrr: number; count: number }>
  height?: number
}) {
  const maxMrr = Math.max(...data.map((d) => d.mrr), 1)
  const maxCount = Math.max(...data.map((d) => d.count), 1)
  const w = 100
  const h = height
  const stepX = w / Math.max(data.length - 1, 1)
  const points = data.map((d, i) => ({
    x: i * stepX,
    y: h - (d.mrr / maxMrr) * (h - 20) - 10,
    count: d.count,
    mrr: d.mrr,
    month: d.month,
  }))

  const linePath =
    points.length > 1
      ? `M ${points[0].x},${points[0].y} ` +
        points
          .slice(1)
          .map((p, i) => {
            const prev = points[i]
            const cpX = (prev.x + p.x) / 2
            return `C ${cpX},${prev.y} ${cpX},${p.y} ${p.x},${p.y}`
          })
          .join(" ")
      : ""
  const areaPath = linePath ? `${linePath} L ${w},${h} L 0,${h} Z` : ""

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        className="w-full"
        style={{ height }}
      >
        <defs>
          <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e63946" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#e63946" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1="0"
            x2={w}
            y1={h * t}
            y2={h * t}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.2"
          />
        ))}
        {areaPath && <path d={areaPath} fill="url(#area-grad)" />}
        {linePath && (
          <path
            d={linePath}
            fill="none"
            stroke="#e63946"
            strokeWidth="0.6"
            vectorEffect="non-scaling-stroke"
          />
        )}
        {points.map((p) => (
          <circle
            key={p.month}
            cx={p.x}
            cy={p.y}
            r="0.6"
            fill="#e63946"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <div className="mt-3 flex justify-between text-[10px] font-medium tracking-[0.1em] text-white/40">
        {data.map((d) => (
          <span key={d.month}>{d.month}</span>
        ))}
      </div>
      <p className="sr-only">
        MRR maximal {formatPrice(maxMrr)}, Signups maximal {maxCount}
      </p>
    </div>
  )
}

function Heatmap({ data }: { data: Array<{ date: string; count: number }> }) {
  const max = Math.max(...data.map((d) => d.count), 1)
  const weeks: Array<Array<{ date: string; count: number } | null>> = []
  let current: Array<{ date: string; count: number } | null> = []

  const first = new Date(data[0]?.date || new Date())
  const firstWeekday = (first.getDay() + 6) % 7
  for (let i = 0; i < firstWeekday; i++) current.push(null)

  data.forEach((d) => {
    current.push(d)
    if (current.length === 7) {
      weeks.push(current)
      current = []
    }
  })
  if (current.length > 0) weeks.push(current)

  function level(count: number): string {
    if (count === 0) return "bg-white/[0.03]"
    const ratio = count / max
    if (ratio < 0.25) return "bg-cs-accent/20"
    if (ratio < 0.5) return "bg-cs-accent/40"
    if (ratio < 0.75) return "bg-cs-accent/70"
    return "bg-cs-accent"
  }

  const dayLabels = ["Mo", "Mi", "Fr"]

  return (
    <div>
      <div className="flex gap-[3px]">
        <div className="flex flex-col justify-between py-0.5 pr-2 text-[9px] tracking-wider text-white/30">
          {dayLabels.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }).map((_, di) => {
                const cell = week[di]
                return (
                  <div
                    key={di}
                    className={cn(
                      "h-2.5 w-2.5 rounded-sm transition-all duration-300 hover:scale-125",
                      cell ? level(cell.count) : "bg-transparent"
                    )}
                    title={
                      cell
                        ? `${new Date(cell.date).toLocaleDateString("de-DE")}: ${cell.count}`
                        : undefined
                    }
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-[10px] tracking-wider text-white/40">
        <span>Weniger</span>
        <div className="h-2 w-2 rounded-sm bg-white/[0.03]" />
        <div className="h-2 w-2 rounded-sm bg-cs-accent/20" />
        <div className="h-2 w-2 rounded-sm bg-cs-accent/40" />
        <div className="h-2 w-2 rounded-sm bg-cs-accent/70" />
        <div className="h-2 w-2 rounded-sm bg-cs-accent" />
        <span>Mehr</span>
      </div>
    </div>
  )
}

const statusColors: Record<string, string> = {
  aktiv: "text-green-400 border-green-400/30 bg-green-400/5",
  gekuendigt: "text-red-400 border-red-400/30 bg-red-400/5",
  pausiert: "text-amber-400 border-amber-400/30 bg-amber-400/5",
}

const STEP_LABELS: Record<string, string> = {
  plan: "Tarif",
  personal: "Persoenlich",
  payment: "Zahlung",
  review: "Review",
  success: "Abschluss",
}

const avatarColors = [
  "bg-cs-accent/80",
  "bg-amber-500/70",
  "bg-emerald-500/70",
  "bg-sky-500/70",
  "bg-violet-500/70",
  "bg-rose-500/70",
]

export function DashboardView({ userName }: { userName: string }) {
  const [stats, setStats] = useState<Stats | null>(null)
  const [error, setError] = useState("")
  const [now] = useState(() => new Date())

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch("/api/admin/stats")
        if (!res.ok) {
          if (!cancelled) setError("Daten konnten nicht geladen werden.")
          return
        }
        const data = (await res.json()) as Stats
        if (!cancelled) setStats(data)
      } catch {
        if (!cancelled) setError("Netzwerkfehler.")
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const mrr = useCounter(stats?.kpis.mrr ?? 0)
  const activeCount = useCounter(stats?.kpis.active ?? 0)

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-8 py-40 text-center">
        <AlertCircle className="mx-auto h-10 w-10 text-cs-accent" />
        <p className="mt-4 text-cs-white">{error}</p>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-white/30" />
      </div>
    )
  }

  const { kpis } = stats
  const monthDelta = kpis.lastMonth > 0
    ? ((kpis.thisMonth - kpis.lastMonth) / kpis.lastMonth) * 100
    : kpis.thisMonth > 0 ? 100 : 0

  const dateStr = now.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="relative min-h-screen overflow-hidden bg-cs-black pb-20 pt-28 md:pt-32">
      {/* Ambient accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cs-accent/[0.06] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-200px] top-[300px] h-[500px] w-[500px] rounded-full bg-cs-accent/[0.04] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* ===== HERO ===== */}
        <div className="grid gap-8 border-b border-white/[0.06] pb-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-accent">
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-3 w-3" />
                Casa Sports · Intern
              </span>
            </p>
            <h1 className="mt-4 text-[44px] font-black uppercase leading-[0.95] tracking-[-0.04em] text-cs-white md:text-[64px]">
              {getGreeting(userName).split(",")[0]},
              <br />
              <span className="text-cs-accent">
                {userName.split(" ")[0] || userName}.
              </span>
            </h1>
            <p className="mt-5 text-[14px] capitalize leading-relaxed text-white/50">
              {dateStr} · {kpis.last7Days} neue{" "}
              {kpis.last7Days === 1 ? "Mitgliedschaft" : "Mitgliedschaften"} in den letzten 7 Tagen
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap gap-2">
              <QuickAction
                href="/admin/collections/membership-signups"
                icon={<UserPlus className="h-3.5 w-3.5" />}
                label="Mitglieder"
              />
              <QuickAction
                href="/admin/collections/job-applications"
                icon={<Briefcase className="h-3.5 w-3.5" />}
                label="Bewerbungen"
              />
              <QuickAction
                href="/admin/collections/posts"
                icon={<Mail className="h-3.5 w-3.5" />}
                label="Blog"
              />
              <QuickAction
                href="/admin"
                icon={<Settings className="h-3.5 w-3.5" />}
                label="Admin"
              />
            </div>
          </div>

          {/* MRR Hero Card */}
          <div className="relative flex flex-col justify-between border border-white/[0.08] bg-gradient-to-br from-cs-accent/[0.08] via-transparent to-transparent p-7">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cs-accent">
                  Monthly Recurring Revenue
                </p>
                <div className="flex h-7 w-7 items-center justify-center border border-cs-accent/30 bg-cs-accent/10">
                  <Euro className="h-3.5 w-3.5 text-cs-accent" />
                </div>
              </div>
              <p className="mt-5 text-5xl font-black tracking-[-0.04em] text-cs-white md:text-6xl">
                {formatPrice(mrr)}
              </p>
              <p className="mt-2 text-[12px] text-white/40">
                ARR {formatPrice(kpis.arr)} · Ø {formatPriceDecimal(kpis.avgMonthly)} pro Mitglied
              </p>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
                  7-Tage Trend
                </p>
                <div className="mt-2">
                  <Sparkline data={stats.sparklineSignups} accent />
                </div>
              </div>
              <p className="text-[11px] tracking-wider text-white/50">
                {stats.sparklineSignups.reduce((a, b) => a + b, 0)} neu
              </p>
            </div>
          </div>
        </div>

        {/* ===== KPI Row ===== */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <MetricCard
            icon={<Users className="h-4 w-4" />}
            label="Aktive Mitglieder"
            value={Math.round(activeCount).toString()}
            sub={`${kpis.total} insgesamt`}
          />
          <MetricCard
            icon={<TrendingUp className="h-4 w-4" />}
            label="Neu diesen Monat"
            value={`+${kpis.thisMonth}`}
            sub={
              monthDelta === 0
                ? "keine Veraenderung"
                : `${monthDelta > 0 ? "+" : ""}${monthDelta.toFixed(0)}% ggue. Vormonat`
            }
            trend={monthDelta}
          />
          <MetricCard
            icon={<Target className="h-4 w-4" />}
            label="Dieses Jahr"
            value={kpis.thisYear.toString()}
            sub={`${kpis.last90Days} in den letzten 90 Tagen`}
          />
          <MetricCard
            icon={<Activity className="h-4 w-4" />}
            label="Churn Rate"
            value={`${kpis.churnRate.toFixed(1)}%`}
            sub={`${kpis.cancelled} gekuendigt, ${kpis.paused} pausiert`}
            trendInverted
            trend={-kpis.churnRate}
          />
        </div>

        {/* ===== Leads + Funnel ===== */}
        {(stats.leads || stats.wizard) && (
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.3fr]">
            {/* Leads */}
            {stats.leads && (
              <div className="border border-white/[0.06] bg-white/[0.01] p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-accent">
                      Leads
                    </p>
                    <h2 className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-cs-white">
                      Interesse &amp; Conversion
                    </h2>
                  </div>
                  <Link
                    href="/admin/collections/leads"
                    className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-cs-accent"
                  >
                    Alle <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <MiniStat
                    icon={<Inbox className="h-3.5 w-3.5" />}
                    value={stats.leads.open.toString()}
                    label="Offen"
                    accent
                  />
                  <MiniStat
                    value={stats.leads.last30Days.toString()}
                    label="30 Tage"
                  />
                  <MiniStat
                    value={`${stats.leads.conversionRate.toFixed(0)}%`}
                    label="Conversion"
                  />
                </div>

                {stats.leads.bySource.length > 0 && (
                  <div className="mt-6 space-y-3">
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
                      <Filter className="mr-1 inline h-3 w-3" />
                      Nach Quelle
                    </p>
                    {stats.leads.bySource.map((s, i) => {
                      const pct =
                        stats.leads!.total > 0
                          ? (s.count / stats.leads!.total) * 100
                          : 0
                      return (
                        <div key={s.source}>
                          <div className="flex items-center justify-between text-[12px]">
                            <div className="flex items-center gap-2">
                              <div
                                className={cn(
                                  "h-2 w-2",
                                  avatarColors[i % avatarColors.length]
                                )}
                              />
                              <span className="truncate font-medium text-cs-white/90">
                                {s.source}
                              </span>
                            </div>
                            <span className="tracking-wider text-white/50">
                              {s.count}
                            </span>
                          </div>
                          <div className="mt-1.5 h-0.5 overflow-hidden bg-white/[0.04]">
                            <div
                              className={cn(
                                "h-full transition-all duration-1000",
                                avatarColors[i % avatarColors.length]
                              )}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Funnel */}
            {stats.wizard && (
              <div className="border border-white/[0.06] bg-white/[0.01] p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-accent">
                      Wizard Funnel · 30 Tage
                    </p>
                    <h2 className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-cs-white">
                      Drop-off &amp; Abschlussrate
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black tracking-[-0.03em] text-cs-accent">
                      {stats.wizard.conversion.toFixed(1)}%
                    </p>
                    <p className="text-[10px] tracking-wider text-white/40">
                      {stats.wizard.completions} / {stats.wizard.starts}
                    </p>
                  </div>
                </div>

                {stats.wizard.biggestDropStep && stats.wizard.biggestDropPct > 5 && (
                  <div className="mt-5 flex items-start gap-2 border border-amber-400/20 bg-amber-400/[0.04] px-3 py-2.5">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                    <p className="text-[12px] leading-relaxed text-white/70">
                      Groesster Dropoff:{" "}
                      <span className="font-bold text-amber-400">
                        {STEP_LABELS[stats.wizard.biggestDropStep] ??
                          stats.wizard.biggestDropStep}
                      </span>{" "}
                      &rarr; verliert {stats.wizard.biggestDropPct.toFixed(0)}%.
                    </p>
                  </div>
                )}

                <div className="mt-6 space-y-4">
                  {stats.wizard.funnel.map((f, i) => {
                    const pct =
                      stats.wizard!.starts > 0
                        ? (f.reached / stats.wizard!.starts) * 100
                        : 0
                    const next = stats.wizard!.funnel[i + 1]
                    const dropPct =
                      next && f.reached > 0
                        ? ((f.reached - next.reached) / f.reached) * 100
                        : 0
                    return (
                      <div key={f.step}>
                        <div className="flex items-center justify-between text-[12px]">
                          <span className="font-medium uppercase tracking-[0.1em] text-cs-white">
                            {STEP_LABELS[f.step] ?? f.step}
                          </span>
                          <span className="tracking-wider text-white/60">
                            {f.reached}{" "}
                            <span className="text-white/30">
                              · {pct.toFixed(0)}%
                            </span>
                          </span>
                        </div>
                        <div className="mt-1.5 h-1 overflow-hidden bg-white/[0.04]">
                          <div
                            className="h-full bg-cs-accent transition-all duration-1000"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        {next && dropPct > 0 && (
                          <p className="mt-1 text-[10px] tracking-wider text-white/35">
                            &darr; {dropPct.toFixed(0)}% Dropoff
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===== Revenue Trend ===== */}
        <div className="mt-10 border border-white/[0.06] bg-white/[0.01] p-7 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-accent">
                12 Monate
              </p>
              <h2 className="mt-3 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-3xl">
                Umsatz-Entwicklung
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-[10px] tracking-wider text-white/40">Aktueller MRR</p>
                <p className="mt-1 text-xl font-bold text-cs-white">
                  {formatPrice(kpis.mrr)}
                </p>
              </div>
              <div className="h-10 w-px bg-white/[0.06]" />
              <div>
                <p className="text-[10px] tracking-wider text-white/40">Ziel ARR</p>
                <p className="mt-1 text-xl font-bold text-cs-accent">
                  {formatPrice(kpis.arr)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <AreaChart data={stats.monthlyTrend} height={180} />
          </div>
        </div>

        {/* ===== Activity + Plan Breakdown + Heatmap ===== */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_1fr]">
          {/* Recent Activity */}
          <div className="border border-white/[0.06] bg-white/[0.01] p-7 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-accent">
                  Letzte Aktivitaet
                </p>
                <h2 className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-cs-white">
                  Neue Mitglieder
                </h2>
              </div>
              <Link
                href="/admin/collections/membership-signups"
                className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-cs-accent"
              >
                Alle ansehen <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="mt-6 divide-y divide-white/[0.04]">
              {stats.recent.length === 0 && (
                <p className="py-8 text-center text-[13px] text-white/40">
                  Noch keine Abschluesse.
                </p>
              )}
              {stats.recent.map((r, idx) => {
                const avatarColor = avatarColors[idx % avatarColors.length]
                return (
                  <Link
                    key={r.id}
                    href={`/admin/collections/membership-signups/${r.id}`}
                    className="group flex items-center gap-4 py-4 transition-colors hover:bg-white/[0.02]"
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center text-[12px] font-bold uppercase tracking-wider text-white",
                        avatarColor
                      )}
                    >
                      {getInitials(r.customerName || "?")}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[14px] font-bold text-cs-white group-hover:text-cs-accent">
                        {r.customerName || "—"}
                      </p>
                      <p className="truncate text-[11px] tracking-wider text-white/40">
                        {r.plan} · {r.termMonths}M · {formatPriceDecimal(r.monthlyPrice || 0)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="hidden text-[11px] tracking-wider text-white/40 sm:block">
                        {formatDate(r.createdAt)}
                      </span>
                      <span
                        className={cn(
                          "border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                          statusColors[r.status] || "border-white/10 text-white/40"
                        )}
                      >
                        {r.status}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Plan Breakdown */}
          <div className="border border-white/[0.06] bg-white/[0.01] p-7 md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-accent">
              Tarifverteilung
            </p>
            <h2 className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-cs-white">
              Aktive nach Tarif
            </h2>

            <div className="mt-6 space-y-5">
              {stats.planBreakdown.length === 0 && (
                <p className="text-[13px] text-white/40">Noch keine aktiven Mitglieder.</p>
              )}
              {stats.planBreakdown.map((p, i) => {
                const pct = kpis.active > 0 ? (p.count / kpis.active) * 100 : 0
                return (
                  <div key={p.plan}>
                    <div className="flex items-center justify-between text-[13px]">
                      <div className="flex items-center gap-2">
                        <div className={cn("h-2 w-2", avatarColors[i % avatarColors.length])} />
                        <span className="font-medium text-cs-white">{p.plan}</span>
                      </div>
                      <span className="tracking-wider text-white/60">
                        {p.count} · {pct.toFixed(0)}%
                      </span>
                    </div>
                    <div className="mt-2 h-1 overflow-hidden bg-white/[0.04]">
                      <div
                        className={cn("h-full transition-all duration-1000", avatarColors[i % avatarColors.length])}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ===== Heatmap ===== */}
        <div className="mt-10 border border-white/[0.06] bg-white/[0.01] p-7 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-cs-accent">
                Aktivitaet
              </p>
              <h2 className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-cs-white md:text-2xl">
                Letzte 90 Tage
              </h2>
              <p className="mt-2 text-[13px] text-white/40">
                Jeder Punkt = ein Tag. Intensivere Farbe = mehr Abschluesse.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Metric value={kpis.last30Days.toString()} label="30T" />
              <Metric value={kpis.last90Days.toString()} label="90T" />
              <Metric value={kpis.thisYear.toString()} label={`${now.getFullYear()}`} accent />
            </div>
          </div>

          <div className="mt-7">
            <Heatmap data={stats.heatmap} />
          </div>
        </div>

        <p className="mt-12 flex items-center gap-2 text-[11px] tracking-wider text-white/30">
          <Calendar className="h-3 w-3" />
          Daten aus Payload CMS · Magicline-Sync verfuegbar sobald Open API Key hinterlegt
        </p>
      </div>
    </div>
  )
}

function QuickAction({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 border border-white/[0.08] bg-white/[0.015] px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all hover:border-cs-accent hover:text-cs-accent"
    >
      {icon}
      {label}
      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  )
}

function MetricCard({
  icon,
  label,
  value,
  sub,
  trend,
  trendInverted = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub: string
  trend?: number
  trendInverted?: boolean
}) {
  const positive = trendInverted ? (trend ?? 0) > 0 : (trend ?? 0) > 0
  const isUp = trend !== undefined && trend > 0
  const isDown = trend !== undefined && trend < 0
  return (
    <div className="group relative overflow-hidden border border-white/[0.06] bg-white/[0.01] p-5 transition-colors hover:border-white/[0.12]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/40">
          {icon}
          <span className="text-[10px] font-medium uppercase tracking-[0.15em]">{label}</span>
        </div>
        {trend !== undefined && trend !== 0 && (
          <span
            className={cn(
              "flex items-center gap-0.5 text-[10px] tracking-wider",
              positive ? "text-green-400" : "text-red-400"
            )}
          >
            {isUp && <TrendingUp className="h-3 w-3" />}
            {isDown && <TrendingDown className="h-3 w-3" />}
          </span>
        )}
      </div>
      <p className="mt-4 text-3xl font-black tracking-[-0.03em] text-cs-white md:text-[32px]">
        {value}
      </p>
      <p className="mt-2 text-[11px] tracking-wider text-white/40">{sub}</p>
    </div>
  )
}

function Metric({
  value,
  label,
  accent = false,
}: {
  value: string
  label: string
  accent?: boolean
}) {
  return (
    <div className="text-right">
      <p className={cn("text-2xl font-black tracking-[-0.03em]", accent ? "text-cs-accent" : "text-cs-white")}>
        {value}
      </p>
      <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
        {label}
      </p>
    </div>
  )
}

function MiniStat({
  value,
  label,
  icon,
  accent = false,
}: {
  value: string
  label: string
  icon?: React.ReactNode
  accent?: boolean
}) {
  return (
    <div className="border border-white/[0.06] bg-white/[0.01] p-3">
      <div className="flex items-center gap-1.5 text-white/40">
        {icon}
        <span className="text-[9px] font-medium uppercase tracking-[0.15em]">
          {label}
        </span>
      </div>
      <p
        className={cn(
          "mt-2 text-2xl font-black tracking-[-0.03em]",
          accent ? "text-cs-accent" : "text-cs-white"
        )}
      >
        {value}
      </p>
    </div>
  )
}
