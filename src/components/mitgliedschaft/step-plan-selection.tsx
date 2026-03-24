"use client";

import { useState } from "react";
import {
  Star,
  ArrowRight,
  Check,
  ChevronDown,
  Dumbbell,
  Flame,
  Users,
  Clock,
  Sun,
  Waves,
  Info,
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

function Accordion({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-3 text-left"
      >
        <span className="flex items-center gap-2 text-[13px] font-medium text-white/60">
          {icon}
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-white/30 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-[500px] pb-4" : "max-h-0"
        )}
      >
        {children}
      </div>
    </div>
  );
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

  const sorted = [...bundles].sort((a, b) => {
    const aIsAllIn = a.name.toLowerCase().includes("all in") ? 0 : 1;
    const bIsAllIn = b.name.toLowerCase().includes("all in") ? 0 : 1;
    return aIsAllIn - bIsAllIn;
  });

  // Which bundle is selected?
  const [selectedBundleId, setSelectedBundleId] = useState<number | null>(null);

  // Auto-select bundle when a term is selected
  let activeBundleId = selectedBundleId;
  for (const b of sorted) {
    if (b.terms.some((t) => t.id === selectedTermId)) {
      activeBundleId = b.id;
      break;
    }
  }

  const activeBundle = sorted.find((b) => b.id === activeBundleId) ?? null;
  const selectedTerm = activeBundle?.terms.find((t) => t.id === selectedTermId) ?? null;
  const starterFee = selectedTerm?.flatFees.find((f) => f.isStarterPackage);

  function handleSelectBundle(bundle: RateBundle) {
    setSelectedBundleId(bundle.id);
    // Auto-select longest term (best price)
    const longest = [...bundle.terms].sort((a, b) => b.termValue - a.termValue)[0];
    if (longest) {
      onSelectTerm(longest);
    }
  }

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
        Tarif waehlen
      </p>
      <h2 className="mt-3 text-2xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white">
        Finde deinen Plan.
      </h2>

      {/* Step 1: Tarif waehlen (All In vs. Standard) */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {sorted.map((bundle) => {
          const isAllIn = bundle.name.toLowerCase().includes("all in");
          const isActive = activeBundleId === bundle.id;
          const features = getFeaturesForBundle(bundle.name);
          const cheapest = [...bundle.terms].sort((a, b) => a.price - b.price)[0];

          return (
            <div
              key={bundle.id}
              className={cn(
                "relative cursor-pointer border p-5 transition-all duration-300",
                isActive
                  ? "border-cs-accent bg-cs-accent/[0.04]"
                  : "border-white/[0.06] hover:border-white/[0.12]"
              )}
              onClick={() => handleSelectBundle(bundle)}
            >
              {isAllIn && (
                <div className="absolute -top-2.5 left-5 flex items-center gap-1 bg-cs-accent px-2.5 py-0.5">
                  <Star className="h-2.5 w-2.5 fill-white text-white" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white">
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-black uppercase text-cs-white">
                    {isAllIn ? "All In" : "Standard"}
                  </h3>
                  <p className="mt-1 text-xl font-black tracking-[-0.03em] text-cs-white">
                    ab {formatPrice(cheapest.price)} €{" "}
                    <span className="text-[11px] font-medium text-white/40">mtl.</span>
                  </p>
                </div>
                <div
                  className={cn(
                    "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                    isActive ? "border-cs-accent bg-cs-accent" : "border-white/20"
                  )}
                >
                  {isActive && <Check className="h-3 w-3 text-white" />}
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                {features.map((f) => (
                  <span key={f.text} className="flex items-center gap-1 text-[10px] text-white/35">
                    {f.icon}
                    {f.text}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Step 2: Laufzeit waehlen (nur wenn Bundle gewaehlt) */}
      {activeBundle && (
        <div className="mt-6">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
            Laufzeit waehlen
          </p>
          <div className="space-y-2">
            {[...activeBundle.terms]
              .sort((a, b) => b.termValue - a.termValue)
              .map((term, i) => {
                const isSelected = selectedTermId === term.id;
                const isLonger = i === 0;

                return (
                  <div
                    key={term.id}
                    className={cn(
                      "flex cursor-pointer items-center justify-between border px-4 py-3 transition-all duration-300",
                      isSelected
                        ? "border-cs-accent bg-cs-accent/[0.04]"
                        : "border-white/[0.06] hover:border-white/[0.1]"
                    )}
                    onClick={() => onSelectTerm(term)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all",
                          isSelected ? "border-cs-accent bg-cs-accent" : "border-white/20"
                        )}
                      >
                        {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                      </div>
                      <div>
                        <span className="text-[13px] font-medium text-white/70">
                          {term.termValue} Monate
                        </span>
                        {isLonger && (
                          <span className="ml-2 text-[9px] font-bold uppercase tracking-wider text-cs-accent">
                            Bester Preis
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[15px] font-black text-cs-white">
                        {formatPrice(term.price)} €
                      </span>
                      <span className="text-[10px] text-white/30"> /mtl.</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* Accordions */}
      {selectedTerm && activeBundle && (
        <div className="mt-6">
          <Accordion title="Vertragsdetails">
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between">
                <span className="text-white/50">Vertrag</span>
                <span className="text-white/70">{activeBundle.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Mindestvertragslaufzeit</span>
                <span className="text-white/70">{selectedTerm.termValue} Monate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Verlaengerung</span>
                <span className="text-white/70">
                  {selectedTerm.extensionFixedTerm}{" "}
                  {selectedTerm.extensionFixedTermUnit === "MONTH" ? "Monat" : "Monate"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Kuendigungsfrist</span>
                <span className="text-white/70">
                  {selectedTerm.cancellationPeriod}{" "}
                  {selectedTerm.cancellationPeriodUnit === "MONTH" ? "Monat" : "Monate"} zum Ende der Laufzeit
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Zahlungsweise</span>
                <span className="text-white/70">Monatlich per SEPA-Lastschrift</span>
              </div>
            </div>
          </Accordion>

          <Accordion title="Kostenuebersicht" icon={<Info className="h-3 w-3" />}>
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between">
                <span className="text-white/50">Mitgliedsbeitrag</span>
                <span className="text-white/70">{formatPrice(selectedTerm.price)} € mtl.</span>
              </div>
              {starterFee && (
                <div className="flex justify-between">
                  <span className="text-white/50">{starterFee.name}</span>
                  <span className="text-white/70">einmalig {formatPrice(starterFee.price)} €</span>
                </div>
              )}
              {selectedTerm.optionalModules.map((mod) => (
                <label key={mod.id} className="flex cursor-pointer items-center justify-between">
                  <span className="flex items-center gap-2 text-white/50">
                    <input
                      type="checkbox"
                      checked={selectedModuleIds.includes(mod.id)}
                      onChange={() => onToggleModule(mod.id)}
                      className="h-3.5 w-3.5 accent-cs-accent"
                    />
                    {mod.name}
                  </span>
                  <span className="text-white/70">{formatPrice(mod.price)} € / Jahr</span>
                </label>
              ))}
              <div className="border-t border-white/[0.06] pt-2">
                <div className="flex justify-between">
                  <span className="text-white/50">Gesamtpreis Mindestlaufzeit</span>
                  <span className="font-bold text-cs-white">
                    {formatPrice(selectedTerm.contractVolumeInformation.totalContractVolume)} €
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-white/25">Alle Preise inkl. 19% MwSt.</p>
            </div>
          </Accordion>

          <Accordion title="Nach Verlaengerung">
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between">
                <span className="text-white/50">Monatsbeitrag</span>
                <span className="text-white/70">{formatPrice(selectedTerm.price)} € mtl.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Verlaengerung</span>
                <span className="text-white/70">
                  Automatisch um {selectedTerm.extensionFixedTerm}{" "}
                  {selectedTerm.extensionFixedTermUnit === "MONTH" ? "Monat" : "Monate"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Kuendigungsfrist</span>
                <span className="text-white/70">
                  {selectedTerm.cancellationPeriod}{" "}
                  {selectedTerm.cancellationPeriodUnit === "MONTH" ? "Monat" : "Monate"}
                </span>
              </div>
            </div>
          </Accordion>

          {/* Monatsbeitrag gross */}
          <div className="mt-6 border-t border-white/[0.08] pt-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
              Dein Monatsbeitrag
            </p>
            <p className="mt-1 text-3xl font-black tracking-[-0.03em] text-cs-white">
              {formatPrice(selectedTerm.price)} €
            </p>
            <p className="mt-1 text-[11px] text-white/30">
              Monatlich per SEPA-Lastschrift. Inkl. 19% MwSt.
            </p>
          </div>
        </div>
      )}

      {/* Next */}
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
