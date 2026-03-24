"use client";

import { ArrowRight, ArrowLeft, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/lib/use-debounce";
import type { PaymentData, IbanValidation } from "@/data/magicline";
import { useState, useEffect, useRef } from "react";

interface StepPaymentProps {
  data: PaymentData;
  onChange: (field: keyof PaymentData, value: string) => void;
  sepaText: string | null;
  onNext: () => void;
  onBack: () => void;
}

const inputClass =
  "w-full border border-white/[0.08] bg-cs-black px-4 py-3 text-sm text-cs-white placeholder:text-cs-gray-500 focus:border-cs-accent focus:outline-none transition-colors duration-300";

const labelClass =
  "mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-white/40";

function formatIbanDisplay(iban: string): string {
  const cleaned = iban.replace(/\s/g, "").toUpperCase();
  return cleaned.replace(/(.{4})/g, "$1 ").trim();
}

export function StepPayment({
  data,
  onChange,
  sepaText,
  onNext,
  onBack,
}: StepPaymentProps) {
  const [ibanStatus, setIbanStatus] = useState<
    "idle" | "loading" | "valid" | "invalid"
  >("idle");
  const [ibanError, setIbanError] = useState("");
  const debouncedIban = useDebounce(data.iban, 500);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const cleaned = debouncedIban.replace(/\s/g, "");
    if (cleaned.length < 15) {
      setIbanStatus("idle");
      setIbanError("");
      onChange("bic", "");
      onChange("bankName", "");
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIbanStatus("loading");
    setIbanError("");

    fetch(`/api/magicline/iban-validate?iban=${encodeURIComponent(cleaned)}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((result: IbanValidation) => {
        if (controller.signal.aborted) return;
        if (result.validIban && result.supportsSepaDirectDebit) {
          setIbanStatus("valid");
          onChange("bic", result.bic);
          onChange("bankName", `${result.bankName}, ${result.bankCity}`);
        } else {
          setIbanStatus("invalid");
          setIbanError(
            result.errorMessage ||
              (result.validIban
                ? "Diese IBAN unterstuetzt kein SEPA-Lastschriftverfahren"
                : "Ungueltige IBAN")
          );
          onChange("bic", "");
          onChange("bankName", "");
        }
      })
      .catch((err) => {
        if (err instanceof Error && err.name === "AbortError") return;
        setIbanStatus("invalid");
        setIbanError("IBAN konnte nicht geprueft werden");
      });

    return () => controller.abort();
  }, [debouncedIban]);

  const canProceed = ibanStatus === "valid" && data.accountHolder.trim().length > 0;

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Schritt 3
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
          Zahlungsdaten
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-white/60">
          Zahlung per SEPA-Lastschrift. Sicher und bequem.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl space-y-6">
        {/* Account holder */}
        <div>
          <label className={labelClass}>Kontoinhaber *</label>
          <input
            type="text"
            value={data.accountHolder}
            onChange={(e) => onChange("accountHolder", e.target.value)}
            placeholder="Max Mustermann"
            className={inputClass}
          />
        </div>

        {/* IBAN */}
        <div>
          <label className={labelClass}>IBAN *</label>
          <div className="relative">
            <input
              type="text"
              value={formatIbanDisplay(data.iban)}
              onChange={(e) => {
                const raw = e.target.value.replace(/\s/g, "").toUpperCase();
                onChange("iban", raw);
              }}
              placeholder="DE89 3704 0044 0532 0130 00"
              maxLength={27}
              className={cn(
                inputClass,
                "pr-12 font-mono tracking-wider",
                ibanStatus === "valid" && "border-green-500/50",
                ibanStatus === "invalid" && "border-cs-accent/50"
              )}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {ibanStatus === "loading" && (
                <Loader2 className="h-5 w-5 animate-spin text-white/30" />
              )}
              {ibanStatus === "valid" && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              {ibanStatus === "invalid" && (
                <AlertCircle className="h-5 w-5 text-cs-accent" />
              )}
            </div>
          </div>
          {ibanError && (
            <p className="mt-1.5 text-[11px] text-cs-accent">{ibanError}</p>
          )}
        </div>

        {/* BIC + Bank (auto-filled) */}
        {ibanStatus === "valid" && (
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className={labelClass}>BIC</label>
              <input
                type="text"
                value={data.bic}
                readOnly
                className={cn(inputClass, "bg-white/[0.02] text-white/50")}
              />
            </div>
            <div>
              <label className={labelClass}>Bank</label>
              <input
                type="text"
                value={data.bankName}
                readOnly
                className={cn(inputClass, "bg-white/[0.02] text-white/50")}
              />
            </div>
          </div>
        )}

        {/* SEPA text */}
        {sepaText && (
          <div className="border border-white/[0.06] bg-cs-gray-900/50 p-6">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
              SEPA-Lastschriftmandat
            </p>
            <p className="text-[13px] leading-relaxed text-white/50">
              {sepaText}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mx-auto mt-12 flex max-w-2xl items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 border border-white/[0.08] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-500 hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-[400ms] group-hover:-translate-x-1" />
          Zurueck
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={cn(
            "group flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent",
            !canProceed && "cursor-not-allowed opacity-40"
          )}
        >
          Weiter
          <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
