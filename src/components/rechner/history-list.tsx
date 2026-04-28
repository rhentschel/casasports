"use client";

import { Clock, Trash2 } from "lucide-react";
import { type HistoryEntry, formatRelative } from "@/lib/rechner-history";

type Props<T> = {
  entries: HistoryEntry<T>[];
  onRemove: (id: string) => void;
  onClear: () => void;
  renderInputSummary: (entry: HistoryEntry<T>) => string;
};

export function HistoryList<T>({ entries, onRemove, onClear, renderInputSummary }: Props<T>) {
  if (entries.length === 0) return null;

  return (
    <div className="mt-8 border border-white/10 bg-white/[0.015] p-5 md:p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Clock className="h-4 w-4 text-white/45" aria-hidden />
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/55">
            Deine letzten Berechnungen
          </p>
        </div>
        {entries.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-cs-accent"
          >
            Alle löschen
          </button>
        )}
      </div>

      <ul className="space-y-1.5">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className="group flex items-center gap-4 border border-white/[0.06] bg-white/[0.02] px-3.5 py-3 transition-colors hover:border-white/15"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              {formatRelative(entry.timestamp)}
            </span>
            <span className="flex-1 truncate text-[13px] text-white/65">
              {renderInputSummary(entry)}
            </span>
            <span className="text-[14px] font-bold tracking-[-0.02em] text-white">
              {entry.result.primary}
              {entry.result.primaryUnit && (
                <span className="ml-1 text-[10px] uppercase tracking-[0.15em] text-white/45">
                  {entry.result.primaryUnit}
                </span>
              )}
            </span>
            {entry.result.label && (
              <span className="hidden text-[10px] uppercase tracking-[0.2em] text-cs-accent sm:block">
                {entry.result.label}
              </span>
            )}
            <button
              type="button"
              onClick={() => onRemove(entry.id)}
              aria-label="Eintrag löschen"
              className="text-white/30 opacity-0 transition-all group-hover:opacity-100 hover:text-cs-accent"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
