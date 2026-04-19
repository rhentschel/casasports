import { NextResponse } from "next/server"
import { getPayload } from "payload"
import { headers as nextHeaders } from "next/headers"
import config from "@payload-config"

export const dynamic = "force-dynamic"

function startOfDay(d: Date): Date {
  const r = new Date(d)
  r.setHours(0, 0, 0, 0)
  return r
}

export async function GET() {
  try {
    const payload = await getPayload({ config })
    const h = await nextHeaders()
    const { user } = await payload.auth({ headers: h })

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const [signups, leadsResult, wizardResult] = await Promise.all([
      payload.find({
        collection: "membership-signups",
        limit: 10000,
        sort: "-createdAt",
      }),
      payload
        .find({
          collection: "leads",
          limit: 10000,
          sort: "-createdAt",
        })
        .catch(() => ({ docs: [] as any[], totalDocs: 0 })),
      payload
        .find({
          collection: "wizard-sessions",
          limit: 10000,
          sort: "-createdAt",
        })
        .catch(() => ({ docs: [] as any[], totalDocs: 0 })),
    ])

    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    const startOfYear = new Date(now.getFullYear(), 0, 1)
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    const active = signups.docs.filter((d: any) => d.status === "aktiv")
    const cancelled = signups.docs.filter((d: any) => d.status === "gekuendigt")
    const paused = signups.docs.filter((d: any) => d.status === "pausiert")

    const thisMonth = signups.docs.filter(
      (d: any) => new Date(d.createdAt) >= startOfMonth
    )
    const lastMonth = signups.docs.filter((d: any) => {
      const dt = new Date(d.createdAt)
      return dt >= startOfLastMonth && dt < startOfMonth
    })
    const thisYear = signups.docs.filter(
      (d: any) => new Date(d.createdAt) >= startOfYear
    )
    const last30Days = signups.docs.filter(
      (d: any) => new Date(d.createdAt) >= thirtyDaysAgo
    )
    const last7Days = signups.docs.filter(
      (d: any) => new Date(d.createdAt) >= sevenDaysAgo
    )

    const mrr = active.reduce(
      (sum: number, d: any) => sum + (d.monthlyPrice || 0),
      0
    )
    const arr = mrr * 12

    const planCounts: Record<string, number> = {}
    active.forEach((d: any) => {
      const key = d.plan || "Unbekannt"
      planCounts[key] = (planCounts[key] || 0) + 1
    })

    const monthlyTrend: Array<{ month: string; count: number; mrr: number }> = []
    for (let i = 11; i >= 0; i--) {
      const start = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const end = new Date(now.getFullYear(), now.getMonth() - i + 1, 1)
      const inMonth = signups.docs.filter((d: any) => {
        const dt = new Date(d.createdAt)
        return dt >= start && dt < end
      })
      const monthMrr = inMonth
        .filter((d: any) => d.status === "aktiv")
        .reduce((sum: number, d: any) => sum + (d.monthlyPrice || 0), 0)
      monthlyTrend.push({
        month: start.toLocaleDateString("de-DE", { month: "short" }),
        count: inMonth.length,
        mrr: monthMrr,
      })
    }

    // 90-day heatmap
    const heatmap: Array<{ date: string; count: number }> = []
    for (let i = 89; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      const dayStart = startOfDay(d)
      const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000)
      const count = signups.docs.filter((s: any) => {
        const dt = new Date(s.createdAt)
        return dt >= dayStart && dt < dayEnd
      }).length
      heatmap.push({
        date: dayStart.toISOString().split("T")[0],
        count,
      })
    }

    // 7-day sparkline (daily counts)
    const sparklineSignups: number[] = []
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000)
      const dayStart = startOfDay(d)
      const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000)
      sparklineSignups.push(
        signups.docs.filter((s: any) => {
          const dt = new Date(s.createdAt)
          return dt >= dayStart && dt < dayEnd
        }).length
      )
    }

    const churnRate =
      active.length + cancelled.length > 0
        ? (cancelled.length / (active.length + cancelled.length)) * 100
        : 0

    const avgMonthly =
      active.length > 0
        ? active.reduce((s: number, d: any) => s + (d.monthlyPrice || 0), 0) /
          active.length
        : 0

    const last90Days = signups.docs.filter(
      (d: any) => new Date(d.createdAt) >= ninetyDaysAgo
    )

    // Leads metrics
    const leadsDocs = leadsResult.docs as any[]
    const leadsTotal = leadsDocs.length
    const leadsThisMonth = leadsDocs.filter(
      (l: any) => new Date(l.createdAt) >= startOfMonth
    ).length
    const leadsLast30 = leadsDocs.filter(
      (l: any) => new Date(l.createdAt) >= thirtyDaysAgo
    ).length
    const leadsOpen = leadsDocs.filter(
      (l: any) => l.status === "neu" || l.status === "kontaktiert"
    ).length
    const leadsConverted = leadsDocs.filter((l: any) => l.status === "konvertiert").length
    const leadsLost = leadsDocs.filter((l: any) => l.status === "verloren").length

    // Leads by source
    const sourceCounts: Record<string, number> = {}
    leadsDocs.forEach((l: any) => {
      const key = (l.source || "Unbekannt").toString().trim() || "Unbekannt"
      sourceCounts[key] = (sourceCounts[key] || 0) + 1
    })
    const leadsBySource = Object.entries(sourceCounts)
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6)

    const conversionRate = leadsTotal > 0 ? (leadsConverted / leadsTotal) * 100 : 0

    // Wizard funnel
    const wizardDocs = wizardResult.docs as any[]
    const wizardRecent = wizardDocs.filter(
      (w: any) => new Date(w.createdAt) >= thirtyDaysAgo
    )
    const stepsOrder = ["plan", "personal", "payment", "review", "success"] as const
    const stepIdx = (s: string) => stepsOrder.indexOf(s as (typeof stepsOrder)[number])
    const funnel = stepsOrder.map((step, i) => {
      const reached = wizardRecent.filter(
        (w: any) => stepIdx(w.furthestStep) >= i
      ).length
      return { step, reached }
    })
    const starts = funnel[0]?.reached || 0
    const completions = funnel[funnel.length - 1]?.reached || 0
    const wizardConversion = starts > 0 ? (completions / starts) * 100 : 0

    // Biggest drop-off
    let biggestDropStep: string | null = null
    let biggestDropPct = 0
    for (let i = 1; i < funnel.length; i++) {
      const prev = funnel[i - 1].reached
      const curr = funnel[i].reached
      if (prev === 0) continue
      const dropPct = ((prev - curr) / prev) * 100
      if (dropPct > biggestDropPct) {
        biggestDropPct = dropPct
        biggestDropStep = funnel[i - 1].step
      }
    }

    return NextResponse.json({
      kpis: {
        total: signups.totalDocs,
        active: active.length,
        cancelled: cancelled.length,
        paused: paused.length,
        thisMonth: thisMonth.length,
        lastMonth: lastMonth.length,
        thisYear: thisYear.length,
        last7Days: last7Days.length,
        last30Days: last30Days.length,
        last90Days: last90Days.length,
        mrr,
        arr,
        churnRate,
        avgMonthly,
      },
      leads: {
        total: leadsTotal,
        thisMonth: leadsThisMonth,
        last30Days: leadsLast30,
        open: leadsOpen,
        converted: leadsConverted,
        lost: leadsLost,
        conversionRate,
        bySource: leadsBySource,
      },
      wizard: {
        starts,
        completions,
        conversion: wizardConversion,
        funnel,
        biggestDropStep,
        biggestDropPct,
      },
      planBreakdown: Object.entries(planCounts)
        .map(([plan, count]) => ({ plan, count }))
        .sort((a, b) => b.count - a.count),
      monthlyTrend,
      heatmap,
      sparklineSignups,
      recent: signups.docs.slice(0, 8).map((d: any) => ({
        id: d.id,
        customerName: d.customerName,
        email: d.email,
        plan: d.plan,
        termMonths: d.termMonths,
        monthlyPrice: d.monthlyPrice,
        status: d.status,
        createdAt: d.createdAt,
      })),
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
