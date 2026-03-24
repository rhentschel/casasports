"use client";

import { useState } from "react";
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
    { icon: <Dumbbell className="h-3 w-3" />, text: "Fitnessbereich" },
    { icon: <Users className="h-3 w-3" />, text: "Alle Kurse" },
    { icon: <Flame className="h-3 w-3" />, text: "KLAFS Sauna" },
    { icon: <Sun className="h-3 w-3" />, text: "Infrarotkabine" },
    { icon: <Waves className="h-3 w-3" />, text: "Wellness" },
    { icon: <Clock className="h-3 w-3" />, text: "7 Tage Zugang" },
  ],
  basis: [
    { icon: <Dumbbell className="h-3 w-3" />, text: "Fitnessbereich" },
    { icon: <Users className="h-3 w-3" />, text: "Alle Kurse" },
    { icon: <Clock className="h-3 w-3" />, text: "7 Tage Zugang" },
  ],
};

function getFeaturesForBundle(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("all in")) return bundleFeatures["all in"];
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

  // Sort: All In first
  const sorted = [...bundles].sort((a, b) => {
    const aIsAllIn = a.name.toLowerCase().includes("all in") ? 0 : 1;
    const bIsAllIn = b.name.toLowerCase().includes("all in") ? 0 : 1;
    return aIsAllIn - bIsAllIn;
  });

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-gold">
        Tarif waehlen
      </p>
      <h2 className="mt-3 text-2xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white">
        Finde deinen Plan.
      </h2>

      {/* Side-by-side bundles */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {sorted.map((bundle) => {
          const isAllIn = bundle.name.toLowerCase().includes("all in");
          const features = getFeaturesForBundle(bundle.name);
          const hasSelected = bundle.terms.some((t) => t.id === selectedTermId);

          return (
            <BundleCard
              key={bundle.id}
              bundle={bundle}
              isAllIn={isAllIn}
              features={features}
              hasSelected={hasSelected}
              selectedTermId={selectedTermId}
              selectedModuleIds={selectedModuleIds}
              onSelectTerm={onSelectTerm}
              onToggleModule={onToggleModule}
            />
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

function BundleCard({
  bundle,
  isAllIn,
  features,
  hasSelected,
  selectedTermId,
  selectedModuleIds,
  onSelectTerm,
  onToggleModule,
}: {
  bundle: RateBundle;
  isAllIn: boolean;
  features: { icon: React.ReactNode; text: string }[];
  hasSelected: boolean;
  selectedTermId: number | null;
  selectedModuleIds: number[];
  onSelectTerm: (term: RateBundleTerm) => void;
  onToggleModule: (moduleId: number) => void;
}) {
  const sortedTerms = [...bundle.terms].sort(
    (a, b) => b.termValue - a.termValue
  );
  const cheapest = sortedTerms[0];

  return (
    <div
      className={cn(
        "relative flex flex-col border p-5 transition-all duration-500",
        isAllIn
          ? "border-cs-gold/30 bg-cs-gold/[0.02]"
          : "border-white/[0.08]",
        hasSelected && isAllIn && "border-cs-gold/50",
        hasSelected && !isAllIn && "border-white/[0.15]"
      )}
    >
      {/* Badge */}
      {isAllIn && (
        <div className="absolute -top-2.5 left-5 flex items-center gap-1 bg-cs-gold px-2.5 py-0.5">
          <Star className="h-2.5 w-2.5 fill-cs-black text-cs-black" />
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-cs-black">
            Beliebteste Wahl
          </span>
        </div>
      )}

      {/* Name + starting price */}
      <h3 className="text-sm font-black uppercase tracking-[-0.01em] text-cs-white">
        {bundle.name}
      </h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span className={cn("text-3xl font-black tracking-[-0.04em]", isAllIn ? "text-cs-gold" : "text-cs-white")}>
          ab {formatPrice(cheapest.price)}€
        </span>
        <span className="text-[11px] text-white/30">/ Monat</span>
      </div>

      {/* Features */}
      <ul className="mt-4 grid grid-cols-2 gap-x-2 gap-y-1.5">
        {features.map((f) => (
          <li key={f.text} className="flex items-center gap-1.5">
            <span className={cn("shrink-0", isAllIn ? "text-cs-gold/40" : "text-white/25")}>
              {f.icon}
            </span>
            <span className="text-[11px] text-white/50">{f.text}</span>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className={cn("my-4 h-px", isAllIn ? "bg-cs-gold/15" : "bg-white/[0.06]")} />

      {/* Term selection */}
      <div className="space-y-2">
        {sortedTerms.map((term, i) => {
          const isSelected = selectedTermId === term.id;
          const isLonger = i === 0;
          const starterFee = term.flatFees.find((f) => f.isStarterPackage);

          return (
            <div
              key={term.id}
              className={cn(
                "flex cursor-pointer items-center justify-between border px-3 py-2.5 transition-all duration-300",
                isSelected
                  ? "border-cs-accent bg-cs-accent/[0.06]"
                  : "border-white/[0.05] hover:border-white/[0.1]"
              )}
              onClick={() => onSelectTerm(term)}
            >
              <div className="flex items-center gap-2.5">
                {/* Radio circle */}
                <div
                  className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all",
                    isSelected
                      ? "border-cs-accent bg-cs-accent"
                      : "border-white/20"
                  )}
                >
                  {isSelected && (
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  )}
                </div>
                <div>
                  <span className="text-[12px] font-medium text-white/70">
                    {term.termValue} Monate
                  </span>
                  {isLonger && (
                    <span className="ml-1.5 text-[9px] font-bold uppercase tracking-wider text-cs-gold">
                      Bester Preis
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className={cn("text-[15px] font-black", isSelected ? "text-cs-white" : "text-white/60")}>
                  {formatPrice(term.price)}€
                </span>
                <span className="text-[10px] text-white/30"> /Mon.</span>
                {starterFee && (
                  <p className="text-[9px] text-white/25">
                    + {formatPrice(starterFee.price)}€ einmalig
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Optional modules */}
      {sortedTerms[0]?.optionalModules.length > 0 && (
        <div className="mt-3">
          {sortedTerms[0].optionalModules.map((mod) => (
            <label
              key={mod.id}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                checked={selectedModuleIds.includes(mod.id)}
                onChange={() => onToggleModule(mod.id)}
                className="h-3.5 w-3.5 accent-cs-accent"
              />
              <span className="text-[11px] text-white/40">
                {mod.name} {formatPrice(mod.price)}€/Jahr
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
