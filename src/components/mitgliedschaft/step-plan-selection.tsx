"use client";

import { Star, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RateBundle, RateBundleTerm } from "@/data/magicline";

interface StepPlanSelectionProps {
  bundles: RateBundle[];
  selectedTermId: number | null;
  selectedModuleIds: number[];
  onSelectTerm: (term: RateBundleTerm) => void;
  onToggleModule: (moduleId: number) => void;
  onNext: () => void;
}

function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",");
}

export function StepPlanSelection({
  bundles,
  selectedTermId,
  selectedModuleIds,
  onSelectTerm,
  onToggleModule,
  onNext,
}: StepPlanSelectionProps) {
  const bundle = bundles[0];
  if (!bundle) return null;

  const sortedTerms = [...bundle.terms].sort(
    (a, b) => b.termValue - a.termValue
  );

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Schritt 1
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
          Waehle deinen Tarif
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-white/60">
          {bundle.name} - mit allem, was du fuer dein Training brauchst.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
        {sortedTerms.map((term, i) => {
          const isRecommended = i === 0;
          const isSelected = selectedTermId === term.id;
          const starterFee = term.flatFees.find((f) => f.isStarterPackage);

          return (
            <div
              key={term.id}
              className={cn(
                "relative flex cursor-pointer flex-col border p-8 transition-all duration-500 md:p-10",
                isRecommended
                  ? "border-cs-gold/40 bg-cs-gold/[0.03] shadow-[0_0_60px_rgba(200,169,110,0.08)]"
                  : "border-white/[0.08] hover:border-white/[0.15]",
                isSelected && !isRecommended && "border-cs-accent/40 bg-cs-accent/[0.03]",
                isSelected && isRecommended && "border-cs-gold/60"
              )}
              onClick={() => onSelectTerm(term)}
            >
              {/* Badge */}
              {isRecommended && (
                <div className="absolute -top-3 left-8 flex items-center gap-1.5 bg-cs-gold px-4 py-1.5">
                  <Star className="h-3 w-3 fill-cs-black text-cs-black" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cs-black">
                    Empfohlen
                  </span>
                </div>
              )}

              {/* Selected check */}
              {isSelected && (
                <div className="absolute right-6 top-6 flex h-6 w-6 items-center justify-center bg-cs-accent">
                  <Check className="h-3.5 w-3.5 text-white" />
                </div>
              )}

              {/* Duration */}
              <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-cs-white">
                {term.termValue} Monate
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={cn(
                    "text-5xl font-black tracking-[-0.04em]",
                    isRecommended ? "text-cs-gold" : "text-cs-white"
                  )}
                >
                  {formatPrice(term.price)}€
                </span>
                <span className="text-[14px] text-white/50">/ Monat</span>
              </div>

              {/* Starter fee */}
              {starterFee && (
                <p className="mt-2 text-[13px] text-white/40">
                  + {formatPrice(starterFee.price)}€ {starterFee.name} (einmalig)
                </p>
              )}

              {/* Divider */}
              <div
                className={cn(
                  "mt-6 h-px",
                  isRecommended ? "bg-cs-gold/20" : "bg-white/[0.06]"
                )}
              />

              {/* Contract details */}
              <ul className="mt-6 space-y-2.5 pb-4">
                <li className="flex items-center gap-3 text-[14px] text-white/50">
                  <Check className="h-3.5 w-3.5 shrink-0 text-white/30" />
                  Kuendigungsfrist: {term.cancellationPeriod}{" "}
                  {term.cancellationPeriodUnit === "MONTH" ? "Monat" : "Monate"}
                </li>
                <li className="flex items-center gap-3 text-[14px] text-white/50">
                  <Check className="h-3.5 w-3.5 shrink-0 text-white/30" />
                  Gesamtvolumen: {formatPrice(term.contractVolumeInformation.totalContractVolume)}€
                </li>
                <li className="flex items-center gap-3 text-[14px] text-white/50">
                  <Check className="h-3.5 w-3.5 shrink-0 text-white/30" />
                  SEPA-Lastschrift
                </li>
              </ul>

              {/* Optional modules */}
              {term.optionalModules.length > 0 && (
                <div className="border-t border-white/[0.06] pt-4">
                  {term.optionalModules.map((mod) => (
                    <label
                      key={mod.id}
                      className="flex cursor-pointer items-center gap-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        checked={selectedModuleIds.includes(mod.id)}
                        onChange={() => onToggleModule(mod.id)}
                        className="h-4 w-4 accent-cs-accent"
                      />
                      <span className="text-[13px] text-white/50">
                        {mod.name}: {formatPrice(mod.price)}€ /{" "}
                        {mod.paymentFrequencyValue === 12 ? "Jahr" : `${mod.paymentFrequencyValue} Mon.`}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Next button */}
      <div className="mx-auto mt-12 flex max-w-4xl justify-end">
        <button
          onClick={onNext}
          disabled={!selectedTermId}
          className={cn(
            "group flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent",
            !selectedTermId && "cursor-not-allowed opacity-40"
          )}
        >
          Weiter
          <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
