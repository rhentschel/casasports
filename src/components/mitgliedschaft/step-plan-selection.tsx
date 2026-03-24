"use client";

import {
  Star,
  ArrowRight,
  Check,
  Dumbbell,
  Flame,
  Users,
  Clock,
  Sun,
  Waves,
} from "lucide-react";
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

const bundleFeatures: Record<string, { icon: React.ReactNode; text: string }[]> = {
  "all in": [
    { icon: <Dumbbell className="h-3.5 w-3.5" />, text: "Kompletter Fitnessbereich" },
    { icon: <Users className="h-3.5 w-3.5" />, text: "Alle Gruppenkurse inklusive" },
    { icon: <Flame className="h-3.5 w-3.5" />, text: "KLAFS Sauna" },
    { icon: <Sun className="h-3.5 w-3.5" />, text: "Roeger Infrarotkabine" },
    { icon: <Waves className="h-3.5 w-3.5" />, text: "Wellness-Bereich" },
    { icon: <Clock className="h-3.5 w-3.5" />, text: "7 Tage die Woche Zugang" },
  ],
  basis: [
    { icon: <Dumbbell className="h-3.5 w-3.5" />, text: "Kompletter Fitnessbereich" },
    { icon: <Users className="h-3.5 w-3.5" />, text: "Alle Gruppenkurse inklusive" },
    { icon: <Clock className="h-3.5 w-3.5" />, text: "7 Tage die Woche Zugang" },
  ],
};

function getFeaturesForBundle(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("all in")) return bundleFeatures["all in"];
  if (lower.includes("basis")) return bundleFeatures["basis"];
  return bundleFeatures["basis"];
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
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-gold">
        Tarif waehlen
      </p>
      <h2 className="mt-3 text-2xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-3xl">
        Finde deinen Plan.
      </h2>
      <p className="mt-4 text-[14px] leading-relaxed text-white/50">
        Alle Tarife mit Startpaket. Keine versteckten Kosten.
      </p>

      <div className="mt-10 space-y-6">
        {bundles.map((bundle, bundleIndex) => {
          const isAllIn = bundle.name.toLowerCase().includes("all in");
          const features = getFeaturesForBundle(bundle.name);
          const sortedTerms = [...bundle.terms].sort(
            (a, b) => b.termValue - a.termValue
          );

          return (
            <div
              key={bundle.id}
              className={cn(
                "relative border p-6 transition-all duration-500 lg:p-8",
                isAllIn
                  ? "border-cs-gold/30 bg-cs-gold/[0.02]"
                  : "border-white/[0.08]"
              )}
            >
              {/* Badge */}
              {isAllIn && (
                <div className="absolute -top-2.5 left-6 flex items-center gap-1.5 bg-cs-gold px-3 py-1">
                  <Star className="h-2.5 w-2.5 fill-cs-black text-cs-black" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cs-black">
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              {/* Bundle name */}
              <h3 className="text-base font-black uppercase tracking-[-0.01em] text-cs-white">
                {bundle.name}
              </h3>

              {/* Features */}
              <ul className="mt-4 space-y-2">
                {features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2.5">
                    <span className={cn("shrink-0", isAllIn ? "text-cs-gold/50" : "text-white/30")}>
                      {f.icon}
                    </span>
                    <span className="text-[13px] text-white/50">{f.text}</span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className={cn("my-5 h-px", isAllIn ? "bg-cs-gold/15" : "bg-white/[0.06]")} />

              {/* Terms */}
              <div className="grid gap-3 sm:grid-cols-2">
                {sortedTerms.map((term, i) => {
                  const isSelected = selectedTermId === term.id;
                  const isLonger = i === 0;
                  const starterFee = term.flatFees.find((f) => f.isStarterPackage);

                  return (
                    <div
                      key={term.id}
                      className={cn(
                        "relative cursor-pointer border p-4 transition-all duration-300",
                        isSelected
                          ? "border-cs-accent bg-cs-accent/[0.06]"
                          : "border-white/[0.06] hover:border-white/[0.12]"
                      )}
                      onClick={() => onSelectTerm(term)}
                    >
                      {/* Selected indicator */}
                      {isSelected && (
                        <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center bg-cs-accent">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      )}

                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                        {term.termValue} Monate
                        {isLonger && (
                          <span className="ml-2 text-cs-gold">Bester Preis</span>
                        )}
                      </p>

                      <div className="mt-2 flex items-baseline gap-1">
                        <span
                          className={cn(
                            "text-2xl font-black tracking-[-0.03em]",
                            isSelected
                              ? "text-cs-white"
                              : isAllIn && isLonger
                                ? "text-cs-gold"
                                : "text-cs-white"
                          )}
                        >
                          {formatPrice(term.price)}€
                        </span>
                        <span className="text-[11px] text-white/30">/ Monat</span>
                      </div>

                      {starterFee && (
                        <p className="mt-1 text-[11px] text-white/30">
                          + {formatPrice(starterFee.price)}€ {starterFee.name}
                        </p>
                      )}

                      {/* Optional modules */}
                      {term.optionalModules.length > 0 && (
                        <div className="mt-3 border-t border-white/[0.04] pt-2">
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
                              <span className="text-[11px] text-white/40">
                                {mod.name} {formatPrice(mod.price)}€/J.
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
      <div className="mt-8 flex justify-end">
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
