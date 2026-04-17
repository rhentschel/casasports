import { NextResponse } from "next/server";
import { getPayload } from "payload";
import { headers as nextHeaders } from "next/headers";
import config from "@payload-config";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const payload = await getPayload({ config });
    const h = await nextHeaders();
    const { user } = await payload.auth({ headers: h });

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const signups = await payload.find({
      collection: "membership-signups",
      limit: 10000,
      sort: "-createdAt",
    });

    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const active = signups.docs.filter((d: any) => d.status === "aktiv");
    const cancelled = signups.docs.filter((d: any) => d.status === "gekuendigt");
    const paused = signups.docs.filter((d: any) => d.status === "pausiert");

    const thisMonth = signups.docs.filter(
      (d: any) => new Date(d.createdAt) >= startOfMonth
    );
    const lastMonth = signups.docs.filter((d: any) => {
      const dt = new Date(d.createdAt);
      return dt >= startOfLastMonth && dt < startOfMonth;
    });
    const thisYear = signups.docs.filter(
      (d: any) => new Date(d.createdAt) >= startOfYear
    );
    const last30Days = signups.docs.filter(
      (d: any) => new Date(d.createdAt) >= thirtyDaysAgo
    );

    const mrr = active.reduce(
      (sum: number, d: any) => sum + (d.monthlyPrice || 0),
      0
    );
    const arr = mrr * 12;

    const planCounts: Record<string, number> = {};
    active.forEach((d: any) => {
      const key = d.plan || "Unbekannt";
      planCounts[key] = (planCounts[key] || 0) + 1;
    });

    const monthlyTrend: Array<{ month: string; count: number; mrr: number }> = [];
    for (let i = 11; i >= 0; i--) {
      const start = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const end = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
      const inMonth = signups.docs.filter((d: any) => {
        const dt = new Date(d.createdAt);
        return dt >= start && dt < end;
      });
      const monthMrr = inMonth
        .filter((d: any) => d.status === "aktiv")
        .reduce((sum: number, d: any) => sum + (d.monthlyPrice || 0), 0);
      monthlyTrend.push({
        month: start.toLocaleDateString("de-DE", { month: "short", year: "2-digit" }),
        count: inMonth.length,
        mrr: monthMrr,
      });
    }

    const churnRate =
      active.length + cancelled.length > 0
        ? (cancelled.length / (active.length + cancelled.length)) * 100
        : 0;

    return NextResponse.json({
      kpis: {
        total: signups.totalDocs,
        active: active.length,
        cancelled: cancelled.length,
        paused: paused.length,
        thisMonth: thisMonth.length,
        lastMonth: lastMonth.length,
        thisYear: thisYear.length,
        last30Days: last30Days.length,
        mrr,
        arr,
        churnRate,
      },
      planBreakdown: Object.entries(planCounts)
        .map(([plan, count]) => ({ plan, count }))
        .sort((a, b) => b.count - a.count),
      monthlyTrend,
      recent: signups.docs.slice(0, 10).map((d: any) => ({
        id: d.id,
        customerName: d.customerName,
        email: d.email,
        plan: d.plan,
        termMonths: d.termMonths,
        monthlyPrice: d.monthlyPrice,
        status: d.status,
        createdAt: d.createdAt,
      })),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
