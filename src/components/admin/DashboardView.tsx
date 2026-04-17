"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  Euro,
  Calendar,
  AlertCircle,
  Loader2,
  ExternalLink,
  Settings,
} from "lucide-react";

type Stats = {
  kpis: {
    total: number;
    active: number;
    cancelled: number;
    paused: number;
    thisMonth: number;
    lastMonth: number;
    thisYear: number;
    last30Days: number;
    mrr: number;
    arr: number;
    churnRate: number;
  };
  planBreakdown: Array<{ plan: string; count: number }>;
  monthlyTrend: Array<{ month: string; count: number; mrr: number }>;
  recent: Array<{
    id: string;
    customerName: string;
    email: string;
    plan: string;
    termMonths: number;
    monthlyPrice: number;
    status: string;
    createdAt: string;
  }>;
};

function formatPrice(n: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

const statusColors: Record<string, string> = {
  aktiv: "text-green-400 border-green-400/30 bg-green-400/5",
  gekuendigt: "text-red-400 border-red-400/30 bg-red-400/5",
  pausiert: "text-amber-400 border-amber-400/30 bg-amber-400/5",
};

export function DashboardView({ userName }: { userName: string }) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/admin/stats");
        if (!res.ok) {
          setError("Daten konnten nicht geladen werden.");
          return;
        }
        const data = (await res.json()) as Stats;
        setStats(data);
      } catch {
        setError("Netzwerkfehler.");
      }
    })();
  }, []);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-8 py-40 text-center">
        <AlertCircle className="mx-auto h-10 w-10 text-cs-accent" />
        <p className="mt-4 text-cs-white">{error}</p>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-white/30" />
      </div>
    );
  }

  const { kpis } = stats;
  const monthDelta = kpis.lastMonth > 0
    ? ((kpis.thisMonth - kpis.lastMonth) / kpis.lastMonth) * 100
    : 0;
  const maxTrend = Math.max(...stats.monthlyTrend.map((m) => m.count), 1);

  return (
    <div className="min-h-screen bg-cs-black pb-20 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-5 border-b border-white/[0.08] pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Intern · {userName}
            </p>
            <h1 className="mt-3 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
              Mitgliederverwaltung
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/collections/membership-signups"
              className="flex items-center gap-2 border border-white/10 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white/70 transition-colors hover:border-white/30 hover:text-cs-white"
            >
              Alle Mitglieder <ExternalLink className="h-3 w-3" />
            </Link>
            <Link
              href="/admin"
              className="flex items-center gap-2 border border-white/10 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white/70 transition-colors hover:border-white/30 hover:text-cs-white"
            >
              <Settings className="h-3 w-3" />
              Admin
            </Link>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="mt-8 grid grid-cols-1 gap-[1px] border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            icon={<Users className="h-4 w-4" />}
            label="Aktive Mitglieder"
            value={kpis.active.toString()}
            sub={`${kpis.total} gesamt`}
          />
          <KpiCard
            icon={<Euro className="h-4 w-4" />}
            label="MRR"
            value={formatPrice(kpis.mrr)}
            sub={`ARR ${formatPrice(kpis.arr)}`}
            accent
          />
          <KpiCard
            icon={<TrendingUp className="h-4 w-4" />}
            label="Diesen Monat"
            value={`+${kpis.thisMonth}`}
            sub={
              monthDelta === 0
                ? "keine Veraenderung"
                : `${monthDelta > 0 ? "+" : ""}${monthDelta.toFixed(0)}% ggue. Vormonat`
            }
            trend={monthDelta}
          />
          <KpiCard
            icon={<Calendar className="h-4 w-4" />}
            label="Churn Rate"
            value={`${kpis.churnRate.toFixed(1)}%`}
            sub={`${kpis.cancelled} gekuendigt`}
          />
        </div>

        {/* Monthly Trend Chart */}
        <div className="mt-10 border border-white/[0.06] p-6 md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-cs-accent">
                12 Monate
              </p>
              <h2 className="mt-2 text-lg font-black uppercase tracking-[-0.01em] text-cs-white md:text-xl">
                Abschluesse pro Monat
              </h2>
            </div>
            <p className="text-[11px] tracking-wider text-white/40">
              Balken = Anzahl Abschluesse
            </p>
          </div>

          <div className="mt-6 flex h-48 items-end gap-2">
            {stats.monthlyTrend.map((m) => {
              const h = (m.count / maxTrend) * 100;
              return (
                <div key={m.month} className="flex flex-1 flex-col items-center gap-2">
                  <div className="relative flex h-40 w-full items-end">
                    <div
                      className="w-full bg-cs-accent/70 transition-all hover:bg-cs-accent"
                      style={{ height: `${Math.max(h, 3)}%` }}
                      title={`${m.count} Abschluesse · MRR ${formatPrice(m.mrr)}`}
                    />
                  </div>
                  <span className="text-[10px] tracking-wider text-white/40">{m.month}</span>
                  <span className="text-[11px] font-bold text-cs-white">{m.count}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Plan Breakdown + Recent */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.5fr]">
          {/* Plan Breakdown */}
          <div className="border border-white/[0.06] p-6 md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-cs-accent">
              Tarifverteilung
            </p>
            <h2 className="mt-2 text-lg font-black uppercase tracking-[-0.01em] text-cs-white md:text-xl">
              Aktive nach Tarif
            </h2>
            <div className="mt-5 space-y-3">
              {stats.planBreakdown.length === 0 && (
                <p className="text-[13px] text-white/40">Noch keine aktiven Mitglieder.</p>
              )}
              {stats.planBreakdown.map((p) => {
                const pct = kpis.active > 0 ? (p.count / kpis.active) * 100 : 0;
                return (
                  <div key={p.plan}>
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="font-medium text-cs-white">{p.plan}</span>
                      <span className="text-white/60">
                        {p.count} · {pct.toFixed(0)}%
                      </span>
                    </div>
                    <div className="mt-2 h-1 w-full bg-white/[0.05]">
                      <div
                        className="h-full bg-cs-accent"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Signups */}
          <div className="border border-white/[0.06] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-cs-accent">
                  Letzte 10
                </p>
                <h2 className="mt-2 text-lg font-black uppercase tracking-[-0.01em] text-cs-white md:text-xl">
                  Neue Mitglieder
                </h2>
              </div>
            </div>
            <div className="mt-5 divide-y divide-white/[0.06]">
              {stats.recent.length === 0 && (
                <p className="py-4 text-[13px] text-white/40">Noch keine Abschluesse.</p>
              )}
              {stats.recent.map((r) => (
                <Link
                  key={r.id}
                  href={`/admin/collections/membership-signups/${r.id}`}
                  className="group flex items-center justify-between gap-4 py-3 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium text-cs-white group-hover:text-cs-accent">
                      {r.customerName || "—"}
                    </p>
                    <p className="truncate text-[11px] text-white/40">
                      {r.email || "—"} · {formatDate(r.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="hidden text-right sm:block">
                      <p className="text-[12px] text-white/60">{r.plan}</p>
                      <p className="text-[11px] text-white/40">
                        {r.termMonths}M · {formatPrice(r.monthlyPrice || 0)}
                      </p>
                    </div>
                    <span
                      className={`border px-2 py-1 text-[10px] font-medium uppercase tracking-wider ${
                        statusColors[r.status] || "border-white/10 text-white/40"
                      }`}
                    >
                      {r.status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-[11px] text-white/30">
          Daten aus Payload CMS. Magicline-Sync wird verfuegbar, sobald der Open API Key hinterlegt ist.
        </p>
      </div>
    </div>
  );
}

function KpiCard({
  icon,
  label,
  value,
  sub,
  accent = false,
  trend,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
  trend?: number;
}) {
  return (
    <div className="flex flex-col gap-3 bg-cs-black p-6 md:p-7">
      <div className="flex items-center gap-2 text-white/40">
        {icon}
        <span className="text-[11px] font-medium uppercase tracking-[0.15em]">
          {label}
        </span>
      </div>
      <p
        className={`text-3xl font-black tracking-[-0.03em] md:text-4xl ${
          accent ? "text-cs-accent" : "text-cs-white"
        }`}
      >
        {value}
      </p>
      {sub && (
        <p
          className={`text-[11px] tracking-wider ${
            trend !== undefined && trend > 0
              ? "text-green-400"
              : trend !== undefined && trend < 0
                ? "text-red-400"
                : "text-white/40"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
