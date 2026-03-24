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
  if (bundles.length === 0) return null;

  return (
    <div>
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Schritt 1
        </p>
        <h2 className="mt-4 text-2xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-3xl">
          Waehle deinen Tarif
        </h2>
      </div>

      <div className="mt-10 space-y-10">
        {bundles.map((bundle) => {
          const sortedTerms = [...bundle.terms].sort(
            (a, b) => b.termValue - a.termValue
          );

          return (
            <div key={bundle.id}>
              {/* Bundle name */}
              <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-cs-gold">
                {bundle.name}
              </h3>

              <div className="grid gap-4 lg:grid-cols-2">
                {sortedTerms.map((term, i) => {
                  const isLonger = i === 0;
                  const isSelected = selectedTermId === term.id;
                  const starterFee = term.flatFees.find(
                    (f) => f.isStarterPackage
                  );

                  return (
                    <div
                      key={term.id}
                      className={cn(
                        "relative flex cursor-pointer flex-col border p-6 transition-all duration-500",
                        isSelected
                          ? "border-cs-accent/50 bg-cs-accent/[0.04]"
                          : "border-white/[0.08] hover:border-white/[0.15]"
                      )}
                      onClick={() => onSelectTerm(term)}
                    >
                      {/* Best value badge for longer term */}
                      {isLonger && (
                        <div className="absolute -top-2.5 left-6 flex items-center gap-1 bg-cs-gold px-3 py-1">
                          <Star className="h-2.5 w-2.5 fill-cs-black text-cs-black" />
                          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-cs-black">
                            Bester Preis
                          </span>
                        </div>
                      )}

                      {/* Selected check */}
                      {isSelected && (
                        <div className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center bg-cs-accent">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      )}

                      {/* Duration + Price */}
                      <div className="flex items-baseline justify-between">
                        <h4 className="text-sm font-bold uppercase text-cs-white">
                          {term.termValue} Monate
                        </h4>
                        <div className="flex items-baseline gap-1">
                          <span
                            className={cn(
                              "text-3xl font-black tracking-[-0.04em]",
                              isSelected ? "text-cs-accent" : isLonger ? "text-cs-gold" : "text-cs-white"
                            )}
                          >
                            {formatPrice(term.price)}€
                          </span>
                          <span className="text-[12px] text-white/40">
                            / Monat
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-white/40">
                        {starterFee && (
                          <span>
                            + {formatPrice(starterFee.price)}€{" "}
                            {starterFee.name}
                          </span>
                        )}
                        <span>
                          Gesamt:{" "}
                          {formatPrice(
                            term.contractVolumeInformation
                              .totalContractVolume
                          )}
                          €
                        </span>
                        <span>
                          Kuendigung: {term.cancellationPeriod} Mon.
                        </span>
                      </div>

                      {/* Optional modules */}
                      {term.optionalModules.length > 0 && (
                        <div className="mt-3 border-t border-white/[0.06] pt-3">
                          {term.optionalModules.map((mod) => (
                            <label
                              key={mod.id}
                              className="flex cursor-pointer items-center gap-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <input
                                type="checkbox"
                                checked={selectedModuleIds.includes(mod.id)}
                                onChange={() => onToggleModule(mod.id)}
                                className="h-3.5 w-3.5 accent-cs-accent"
                              />
                              <span className="text-[12px] text-white/50">
                                {mod.name}: {formatPrice(mod.price)}€ /{" "}
                                {mod.paymentFrequencyValue === 12
                                  ? "Jahr"
                                  : `${mod.paymentFrequencyValue} Mon.`}
                              </span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Next button */}
      <div className="mt-10 flex justify-end">
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
