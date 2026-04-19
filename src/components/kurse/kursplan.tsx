"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Calendar,
  Download,
  Heart,
  Clock,
  MapPin,
  User,
  Zap,
  X,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";
import {
  kursTypeConfig,
  dayNames,
  dayNamesFull,
  type KursEntry,
  type KursTypeName,
} from "@/data/kursplan";
import {
  getCurrentCourse,
  getNextCourse,
  formatTimeUntil,
  toMinutes,
  getScheduleDay,
  getNowMinutes,
  googleCalendarUrl,
  downloadIcs,
} from "@/lib/kursplan-utils";

const STORAGE_KEY = "cs-mein-kursplan";

function loadFavorites(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

function IntensityDots({ level }: { level: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-1" title={`Intensitaet ${level}/3`}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={cn(
            "h-1.5 w-3 rounded-sm transition-colors",
            i <= level ? "bg-cs-accent" : "bg-white/10"
          )}
        />
      ))}
    </div>
  );
}

function DetailOverlay({
  entry,
  isFav,
  onToggleFav,
  onClose,
}: {
  entry: KursEntry;
  isFav: boolean;
  onToggleFav: () => void;
  onClose: () => void;
}) {
  const cfg = kursTypeConfig[entry.name];
  const day = dayNamesFull[entry.day];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div
        className={cn(
          "absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500",
          visible ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      <div
        className={cn(
          "relative w-full max-w-md overflow-hidden bg-cs-black shadow-[0_32px_80px_rgba(0,0,0,0.8)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          visible
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-95 opacity-0 translate-y-4"
        )}
      >
        {/* Image header with Ken Burns */}
        <div className="relative h-48 overflow-hidden sm:h-56">
          <div className="absolute inset-0 animate-[kenburns_20s_ease-in-out_infinite_alternate]">
            <Image
              src={cfg.image}
              alt={entry.name}
              fill
              className="img-cinema object-cover"
            />
          </div>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-cs-black/60 to-transparent" />

          {/* Accent line bottom */}
          <div className={cn("absolute bottom-0 left-0 right-0 h-[2px]", cfg.dot)} />

          {/* Close button on image */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center bg-black/40 text-white/60 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
            aria-label="Schliessen"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Favorite on image */}
          <button
            onClick={onToggleFav}
            className={cn(
              "absolute left-4 top-4 flex h-9 w-9 items-center justify-center backdrop-blur-sm transition-all",
              isFav
                ? "bg-cs-accent/80 text-white"
                : "bg-black/40 text-white/60 hover:bg-black/60 hover:text-white"
            )}
            aria-label={isFav ? "Entfernen" : "Merken"}
          >
            <Heart className={cn("h-4 w-4", isFav && "fill-current")} />
          </button>

          {/* Content overlaid on image bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-5">
            <p className={cn("text-[10px] font-bold uppercase tracking-[0.3em]", cfg.text)}>
              {day}
            </p>
            <h3 className="mt-1 text-2xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-cs-white sm:text-3xl">
              {entry.name}
            </h3>
          </div>
        </div>

        {/* Content area */}
        <div className="px-8 pb-8 pt-6">
          {/* Time prominent */}
          <div className="flex items-baseline gap-3">
            <Clock className={cn("h-5 w-5 -translate-y-0.5", cfg.text)} />
            <span className="text-3xl font-black tabular-nums tracking-[-0.04em] text-white sm:text-4xl">
              {entry.time}
            </span>
            <span className="text-[13px] text-white/50">
              {entry.duration} Min
            </span>
          </div>

          {/* Divider */}
          <div className="mt-5 h-px bg-white/[0.06]" />

          {/* Meta grid */}
          <div className="mt-5 grid grid-cols-3 gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Trainer
              </p>
              <p className="mt-1 text-[15px] font-semibold text-white">
                {entry.trainer}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Raum
              </p>
              <p className="mt-1 text-[15px] font-semibold text-white">
                {entry.room}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Intensitaet
              </p>
              <div className="mt-2">
                <IntensityDots level={entry.intensity} />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-5 h-px bg-white/[0.06]" />

          {/* Actions */}
          <div className="mt-5 flex gap-3">
            <a
              href={googleCalendarUrl(entry)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 flex-1 items-center justify-center gap-2 border border-white/[0.08] text-[11px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              <Calendar className="h-4 w-4" />
              Google
            </a>
            <button
              onClick={() => downloadIcs(entry)}
              className="flex h-12 flex-1 items-center justify-center gap-2 border border-cs-accent bg-cs-accent text-[11px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
            >
              <Download className="h-4 w-4" />
              Kalender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface KursplanProps {
  schedule?: KursEntry[];
}

export function Kursplan({ schedule: scheduleProp }: KursplanProps) {
  const schedule = scheduleProp ?? [];
  const ref = useReveal();
  const [activeFilters, setActiveFilters] = useState<Set<KursTypeName>>(new Set());
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [showFavsOnly, setShowFavsOnly] = useState(false);
  const [mobileDay, setMobileDay] = useState(Math.max(0, getScheduleDay()));
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);
  const [countdown, setCountdown] = useState("");
  const [nextKurs, setNextKurs] = useState<KursEntry | null>(null);
  const [currentKurs, setCurrentKurs] = useState<KursEntry | null>(null);

  const selectedKurs = selectedEntry
    ? schedule.find((e) => e.id === selectedEntry) ?? null
    : null;

  useEffect(() => {
    setFavorites(loadFavorites());
  }, []);

  useEffect(() => {
    function tick() {
      const cur = getCurrentCourse(schedule);
      const next = getNextCourse(schedule);
      setCurrentKurs(cur);
      setNextKurs(next);
      setCountdown(next ? formatTimeUntil(next) : "");
    }
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedEntry(null);
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const toggleFilter = useCallback((name: KursTypeName) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }, []);

  const toggleFav = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const isVisible = useCallback(
    (entry: KursEntry) => {
      if (showFavsOnly && !favorites.has(entry.id)) return false;
      if (activeFilters.size > 0 && !activeFilters.has(entry.name)) return false;
      return true;
    },
    [activeFilters, favorites, showFavsOnly]
  );

  const today = getScheduleDay();
  const nowMin = getNowMinutes();
  const times = [...new Set(schedule.map((e) => e.time))].sort();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        {/* Countdown Banner */}
        {(currentKurs || nextKurs) && (
          <div className="mb-12 flex items-center gap-4 border border-white/[0.06] bg-white/[0.02] px-6 py-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-cs-accent/10">
              <Clock className="h-4 w-4 text-cs-accent" />
            </div>
            {currentKurs ? (
              <p className="text-[13px] text-white/60">
                <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="font-bold text-white">Jetzt:</span>{" "}
                {currentKurs.name} mit {currentKurs.trainer}
              </p>
            ) : nextKurs ? (
              <p className="text-[13px] text-white/60">
                <span className="font-bold text-white">Nächster Kurs:</span>{" "}
                {nextKurs.name} mit {nextKurs.trainer}{" "}
                <span className="text-cs-accent">in {countdown}</span>
              </p>
            ) : null}
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Kursplan
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
              Deine Woche.
            </h2>
          </div>
          <button
            onClick={() => setShowFavsOnly((p) => !p)}
            className={cn(
              "group flex items-center gap-2 border px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300",
              showFavsOnly
                ? "border-cs-accent bg-cs-accent/10 text-cs-accent"
                : "border-white/10 text-white/60 hover:border-white/20 hover:text-white/60"
            )}
          >
            <Heart className={cn("h-3.5 w-3.5", showFavsOnly && "fill-current")} />
            Mein Plan{favorites.size > 0 ? ` (${favorites.size})` : ""}
          </button>
        </div>

        {/* Filter Chips */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Filter className="mr-1 h-3.5 w-3.5 text-white/50" />
          {(Object.keys(kursTypeConfig) as KursTypeName[]).map((name) => {
            const cfg = kursTypeConfig[name];
            const active = activeFilters.has(name);
            return (
              <button
                key={name}
                onClick={() => toggleFilter(name)}
                className={cn(
                  "flex items-center gap-2 border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] transition-all duration-300",
                  active
                    ? `${cfg.bg} border-transparent ${cfg.text}`
                    : "border-white/[0.06] text-white/50 hover:border-white/15 hover:text-white/50"
                )}
              >
                <span className={cn("h-2 w-2 rounded-full", active ? cfg.dot : "bg-white/20")} />
                {name}
              </button>
            );
          })}
          {activeFilters.size > 0 && (
            <button
              onClick={() => setActiveFilters(new Set())}
              className="ml-1 text-[11px] text-white/50 underline underline-offset-2 transition-colors hover:text-white/60"
            >
              Alle
            </button>
          )}
        </div>

        {/* Desktop Table */}
        <div className="mt-10 hidden overflow-hidden border border-white/[0.06] md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="w-24 px-6 py-4 text-left text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gray-500">
                  Uhrzeit
                </th>
                {dayNames.map((d, i) => (
                  <th
                    key={d}
                    className={cn(
                      "px-3 py-4 text-center text-[10px] font-bold uppercase tracking-[0.3em]",
                      i === today ? "text-cs-accent" : "text-cs-gray-500"
                    )}
                  >
                    {d}
                    {i === today && (
                      <span className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cs-accent" />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map((time) => {
                const timeMin = toMinutes(time);
                const isPast = today >= 0 && timeMin + 60 < nowMin;

                return (
                  <tr
                    key={time}
                    className={cn(
                      "border-b border-white/[0.04] transition-colors duration-300 hover:bg-white/[0.02]",
                      isPast && "opacity-40"
                    )}
                  >
                    <td className="px-6 py-4 text-[14px] font-bold tabular-nums text-cs-white">
                      {time}
                    </td>
                    {dayNames.map((_, dayIdx) => {
                      const entry = schedule.find(
                        (e) => e.time === time && e.day === dayIdx
                      );
                      if (!entry) {
                        return (
                          <td key={dayIdx} className="px-3 py-4 text-center">
                            <span className="text-[11px] text-cs-gray-800">—</span>
                          </td>
                        );
                      }
                      const cfg = kursTypeConfig[entry.name];
                      const visible = isVisible(entry);
                      const isFav = favorites.has(entry.id);
                      const isCurrent = currentKurs?.id === entry.id;
                      const isSelected = selectedEntry === entry.id;

                      return (
                        <td key={dayIdx} className="relative px-3 py-4 text-center">
                          <div
                            className={cn(
                              "transition-all duration-300",
                              !visible && "scale-95 opacity-10"
                            )}
                          >
                            <button
                              onClick={() =>
                                setSelectedEntry(isSelected ? null : entry.id)
                              }
                              className={cn(
                                "relative inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-[11px] font-medium uppercase tracking-[0.08em] transition-all duration-300",
                                cfg.bg,
                                cfg.text,
                                isCurrent && "ring-1 ring-emerald-400/50",
                                "hover:brightness-125 cursor-pointer"
                              )}
                            >
                              {isFav && (
                                <Heart className="h-2.5 w-2.5 fill-current opacity-60" />
                              )}
                              {entry.name}
                              {isCurrent && (
                                <span className="ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                              )}
                            </button>
                          </div>

                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile: Day Tabs + Cards */}
        <div className="mt-10 md:hidden">
          <div className="flex border-b border-white/[0.06]">
            {dayNames.map((d, i) => (
              <button
                key={d}
                onClick={() => setMobileDay(i)}
                className={cn(
                  "flex-1 py-3 text-center text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300",
                  i === mobileDay
                    ? "border-b-2 border-cs-accent text-cs-accent"
                    : i === today
                      ? "text-white/50"
                      : "text-white/50 hover:text-white/60"
                )}
              >
                {d}
                {i === today && i !== mobileDay && (
                  <span className="ml-1 inline-block h-1 w-1 rounded-full bg-cs-accent/50" />
                )}
              </button>
            ))}
          </div>

          <p className="mt-4 text-[13px] text-cs-gray-500">
            {dayNamesFull[mobileDay]}
          </p>

          <div className="mt-4 space-y-3">
            {schedule
              .filter((e) => e.day === mobileDay)
              .sort((a, b) => toMinutes(a.time) - toMinutes(b.time))
              .map((entry) => {
                const cfg = kursTypeConfig[entry.name];
                const visible = isVisible(entry);
                const isFav = favorites.has(entry.id);
                const isCurrent = currentKurs?.id === entry.id;

                return (
                  <div
                    key={entry.id}
                    onClick={() => setSelectedEntry(entry.id)}
                    className={cn(
                      "cursor-pointer border border-white/[0.06] p-5 transition-all duration-300 active:scale-[0.99]",
                      !visible && "scale-[0.98] opacity-10",
                      isCurrent && "border-emerald-400/30"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={cn(
                              "inline-block rounded-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em]",
                              cfg.bg,
                              cfg.text
                            )}
                          >
                            {entry.name}
                          </span>
                          {isCurrent && (
                            <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                              Jetzt
                            </span>
                          )}
                        </div>
                        <p className="mt-3 text-[14px] font-bold tabular-nums text-cs-white">
                          {entry.time} Uhr
                          <span className="ml-2 text-[12px] font-normal text-white/50">
                            {entry.duration} Min
                          </span>
                        </p>
                      </div>
                      <button
                        onClick={() => toggleFav(entry.id)}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center border transition-all duration-300",
                          isFav
                            ? "border-cs-accent/30 text-cs-accent"
                            : "border-white/[0.06] text-white/50"
                        )}
                        aria-label="Favorit"
                      >
                        <Heart className={cn("h-4 w-4", isFav && "fill-current")} />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center gap-4 text-[12px] text-white/60">
                      <span className="flex items-center gap-1.5">
                        <User className="h-3 w-3 text-cs-accent/60" />
                        {entry.trainer}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3 text-cs-accent/60" />
                        {entry.room}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <IntensityDots level={entry.intensity} />
                      <div className="flex gap-2">
                        <a
                          href={googleCalendarUrl(entry)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 items-center gap-1.5 border border-white/[0.06] px-3 text-[10px] uppercase tracking-[0.1em] text-white/50 transition-colors hover:text-white/60"
                        >
                          <Calendar className="h-3 w-3" />
                          Kalender
                        </a>
                        <button
                          onClick={() => downloadIcs(entry)}
                          className="flex h-8 items-center gap-1.5 border border-white/[0.06] px-3 text-[10px] uppercase tracking-[0.1em] text-white/50 transition-colors hover:text-white/60"
                        >
                          <Download className="h-3 w-3" />
                          .ics
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            {schedule.filter((e) => e.day === mobileDay && isVisible(e))
              .length === 0 && (
              <p className="py-8 text-center text-[13px] text-white/50">
                {showFavsOnly
                  ? "Keine Favoriten an diesem Tag."
                  : "Keine Kurse für diesen Filter."}
              </p>
            )}
          </div>
        </div>

        <p className="mt-8 text-[12px] text-cs-gray-600">
          Aenderungen vorbehalten. Aktuelle Zeiten im Studio erfragen.
        </p>
      </div>

      {/* Detail Overlay */}
      {selectedKurs && (
        <DetailOverlay
          entry={selectedKurs}
          isFav={favorites.has(selectedKurs.id)}
          onToggleFav={() => toggleFav(selectedKurs.id)}
          onClose={() => setSelectedEntry(null)}
        />
      )}
    </section>
  );
}
