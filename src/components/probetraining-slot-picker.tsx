"use client";

import { useMemo } from "react";
import { Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

export type TrialSlot = {
  id: string;
  start: string;
  end: string;
  staffName?: string;
  available: boolean;
};

type Props = {
  slots: TrialSlot[];
  selectedId: string | null;
  onSelect: (slot: TrialSlot) => void;
};

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDayLabel(iso: string): string {
  const d = new Date(iso);
  const today = new Date();
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
  if (d.toDateString() === today.toDateString()) return "Heute";
  if (d.toDateString() === tomorrow.toDateString()) return "Morgen";
  return d.toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
  });
}

export function ProbetrainingSlotPicker({ slots, selectedId, onSelect }: Props) {
  const grouped = useMemo(() => {
    const map = new Map<string, TrialSlot[]>();
    for (const slot of slots) {
      const key = new Date(slot.start).toDateString();
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(slot);
    }
    return Array.from(map.entries()).map(([key, daySlots]) => ({
      key,
      label: formatDayLabel(daySlots[0].start),
      slots: daySlots.sort(
        (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
      ),
    }));
  }, [slots]);

  if (slots.length === 0) {
    return (
      <p className="text-[13px] text-white/50">
        Aktuell sind keine freien Slots verfuegbar. Bitte nutze das Formular
        darunter.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {grouped.map((day) => (
        <div key={day.key}>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50">
            {day.label}
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {day.slots.map((slot) => {
              const active = selectedId === slot.id;
              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => onSelect(slot)}
                  className={cn(
                    "group flex flex-col items-start gap-1 border px-3 py-2.5 text-left transition-all",
                    active
                      ? "border-cs-accent bg-cs-accent/10 text-cs-accent"
                      : "border-white/[0.08] bg-transparent text-cs-white hover:border-cs-accent/60"
                  )}
                >
                  <span className="flex items-center gap-1.5 text-[13px] font-bold tracking-wider">
                    <Clock className="h-3 w-3 opacity-70" />
                    {formatTime(slot.start)}
                  </span>
                  {slot.staffName && (
                    <span className="flex items-center gap-1 text-[10px] uppercase tracking-[0.12em] text-white/50">
                      <User className="h-2.5 w-2.5" />
                      {slot.staffName}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
