"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_PREFIX = "cs-rechner-";
const MAX_ENTRIES = 5;

export type HistoryEntry<T = Record<string, unknown>> = {
  id: string;
  timestamp: number;
  inputs: T;
  result: {
    primary: string;
    primaryUnit?: string;
    label?: string;
    secondary?: string;
  };
};

export function useCalculationHistory<T = Record<string, unknown>>(rechnerSlug: string) {
  const storageKey = `${STORAGE_PREFIX}${rechnerSlug}`;
  const [entries, setEntries] = useState<HistoryEntry<T>[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as HistoryEntry<T>[];
        if (Array.isArray(parsed)) setEntries(parsed);
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, [storageKey]);

  const save = useCallback(
    (inputs: T, result: HistoryEntry["result"]) => {
      setEntries((prev) => {
        const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        const next: HistoryEntry<T> = { id, timestamp: Date.now(), inputs, result };
        // De-Dupe: wenn letzter Eintrag identische Inputs hat, ueberschreiben
        const trimmed = prev.filter(
          (e) => JSON.stringify(e.inputs) !== JSON.stringify(inputs)
        );
        const updated = [next, ...trimmed].slice(0, MAX_ENTRIES);
        try {
          localStorage.setItem(storageKey, JSON.stringify(updated));
        } catch {
          // quota / private mode
        }
        return updated;
      });
    },
    [storageKey]
  );

  const remove = useCallback(
    (id: string) => {
      setEntries((prev) => {
        const updated = prev.filter((e) => e.id !== id);
        try {
          localStorage.setItem(storageKey, JSON.stringify(updated));
        } catch {
          // ignore
        }
        return updated;
      });
    },
    [storageKey]
  );

  const clear = useCallback(() => {
    setEntries([]);
    try {
      localStorage.removeItem(storageKey);
    } catch {
      // ignore
    }
  }, [storageKey]);

  return { entries, save, remove, clear, hydrated };
}

export function formatRelative(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60_000);
  const hours = Math.floor(diff / 3_600_000);
  const days = Math.floor(diff / 86_400_000);

  if (minutes < 1) return "gerade eben";
  if (minutes < 60) return `vor ${minutes} Min`;
  if (hours < 24) return `vor ${hours} Std`;
  if (days < 7) return `vor ${days} Tagen`;

  return new Date(timestamp).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}
