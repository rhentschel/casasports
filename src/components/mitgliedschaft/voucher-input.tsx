"use client";

import { useState } from "react";
import { Check, Loader2, X, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

export type VoucherState = {
  code: string;
  valid: boolean;
  data: unknown | null;
};

type Props = {
  value: VoucherState | null;
  onChange: (voucher: VoucherState | null) => void;
};

export function VoucherInput({ value, onChange }: Props) {
  const [code, setCode] = useState(value?.code ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const applied = !!value?.valid;

  async function handleApply() {
    const clean = code.trim();
    if (!clean) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/magicline/voucher?code=${encodeURIComponent(clean)}`
      );
      const data = await res.json();
      if (res.ok && data.valid) {
        onChange({ code: clean, valid: true, data: data.voucher });
      } else {
        setError(data.error || "Dieser Gutschein ist nicht gueltig.");
        onChange(null);
      }
    } catch {
      setError("Netzwerkfehler. Bitte erneut versuchen.");
    } finally {
      setLoading(false);
    }
  }

  function handleRemove() {
    setCode("");
    setError("");
    onChange(null);
  }

  if (applied && value) {
    return (
      <div className="flex items-center justify-between border border-green-500/30 bg-green-500/5 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center border border-green-500/40 bg-green-500/10">
            <Check className="h-3.5 w-3.5 text-green-400" />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-green-400">
              Gutschein aktiv
            </p>
            <p className="mt-0.5 font-mono text-[12px] text-cs-white">
              {value.code.toUpperCase()}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleRemove}
          aria-label="Gutschein entfernen"
          className="flex h-8 w-8 items-center justify-center text-white/40 transition-colors hover:text-cs-accent"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
        <Tag className="h-3 w-3" />
        Gutschein-Code
      </label>
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            if (error) setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleApply();
            }
          }}
          placeholder="z.B. WILLKOMMEN"
          className="flex-1 border border-white/[0.08] bg-transparent px-3 py-2.5 font-mono text-[14px] uppercase tracking-wider text-cs-white outline-none transition-colors focus:border-cs-accent"
        />
        <button
          type="button"
          onClick={handleApply}
          disabled={!code.trim() || loading}
          className={cn(
            "flex items-center justify-center gap-2 border border-white/[0.08] px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 transition-all hover:border-cs-accent hover:text-cs-accent",
            (!code.trim() || loading) && "cursor-not-allowed opacity-40"
          )}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Einloesen"}
        </button>
      </div>
      {error && <p className="mt-2 text-[12px] text-cs-accent">{error}</p>}
    </div>
  );
}
