"use client";

import { Minus, Plus } from "lucide-react";

type Props = {
  id: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (v: number) => void;
};

export function NumberStepper({ id, label, unit, min, max, step = 1, value, onChange }: Props) {
  const clamp = (v: number) => Math.min(max, Math.max(min, v));
  const dec = () => onChange(clamp(parseFloat((value - step).toFixed(2))));
  const inc = () => onChange(clamp(parseFloat((value + step).toFixed(2))));

  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <label htmlFor={id} className="text-[12px] uppercase tracking-[0.15em] text-white/60">
          {label}
        </label>
        <span className="text-[11px] uppercase tracking-[0.15em] text-white/35">
          {min} – {max} {unit}
        </span>
      </div>

      <div className="flex items-stretch border border-white/15 transition-colors focus-within:border-cs-accent">
        <button
          type="button"
          onClick={dec}
          aria-label={`${label} verringern`}
          disabled={value <= min}
          className="flex w-14 items-center justify-center border-r border-white/15 text-white/60 transition-colors hover:bg-white/[0.04] hover:text-cs-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/60"
        >
          <Minus className="h-4 w-4" aria-hidden />
        </button>

        <div className="relative flex flex-1 items-baseline justify-center gap-2 px-4 py-4">
          <input
            id={id}
            type="number"
            inputMode="decimal"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => {
              const v = parseFloat(e.target.value);
              if (!Number.isNaN(v)) onChange(clamp(v));
            }}
            className="w-full appearance-none bg-transparent text-center text-3xl font-black tracking-[-0.02em] text-white outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.15em] text-white/40">
            {unit}
          </span>
        </div>

        <button
          type="button"
          onClick={inc}
          aria-label={`${label} erhöhen`}
          disabled={value >= max}
          className="flex w-14 items-center justify-center border-l border-white/15 text-white/60 transition-colors hover:bg-white/[0.04] hover:text-cs-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/60"
        >
          <Plus className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
