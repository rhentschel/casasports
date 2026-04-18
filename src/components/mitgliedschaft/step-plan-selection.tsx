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

const bundleFeatures: Record<
  string,
  { icon: React.ReactNode; text: string }[]
> = {
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
  sauna: [
    { icon: <Flame className="h-3 w-3" />, text: "KLAFS Sauna" },
    { icon: <Sun className="h-3 w-3" />, text: "Infrarotkabine" },
    { icon: <Waves className="h-3 w-3" />, text: "Wellness" },
    { icon: <Clock className="h-3 w-3" />, text: "7 Tage Zugang" },
  ],
};

function getFeaturesForBundle(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("all in")) return bundleFeatures["all in"];
  if (lower.includes("sauna")) return bundleFeatures["sauna"];
  return bundleFeatures["basis"];
}

function Accordion({
  title,
  icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
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

  // Sort: All In first
  const sorted = [...bundles].sort((a, b) => {
    const aIsAllIn = a.name.toLowerCase().includes("all in") ? 0 : 1;
    const bIsAllIn = b.name.toLowerCase().includes("all in") ? 0 : 1;
    return aIsAllIn - bIsAllIn;
  });

  // Find currently selected term + bundle
  let selectedTerm: RateBundleTerm | null = null;
  let selectedBundle: RateBundle | null = null;
  for (const b of sorted) {
    const found = b.terms.find((t) => t.id === selectedTermId);
    if (found) {
      selectedTerm = found;
      selectedBundle = b;
      break;
    }
  }

  const starterFee = selectedTerm?.flatFees.find((f) => f.isStarterPackage);

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
        Tarif wählen
      </p>
      <h2 className="mt-3 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white">
        Finde deinen Plan.
      </h2>

      {/* Tarif-Karten — gruppiert nach Bundle */}
      <div className="mt-8 space-y-3">
        {sorted.map((bundle, bundleIdx) => {
          const isAllIn = bundle.name.toLowerCase().includes("all in");
          const sortedTerms = [...bundle.terms].sort(
            (a, b) => b.termValue - a.termValue
          );

          return (
            <div key={bundle.id}>
              {/* Bundle-Header als visueller Trenner */}
              {bundleIdx > 0 && <div className="my-5 h-px bg-white/[0.06]" />}
              <p className={cn("mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/55", isAllIn && "mb-5")}>
                {bundle.name.toLowerCase().includes("all in")
                  ? "All In"
                  : bundle.name.toLowerCase().includes("sauna")
                    ? "Sauna Tarif"
                    : "Standard"}
              </p>

              <div className="space-y-3">
              {sortedTerms.map((term, i) => {
            const isSelected = selectedTermId === term.id;
            const isLonger = i === 0;

            return (
              <div
                key={term.id}
                className={cn(
                  "relative cursor-pointer border p-5 transition-all duration-300",
                  isSelected
                    ? "border-cs-accent bg-cs-accent/[0.04]"
                    : "border-white/[0.06] hover:border-white/[0.12]"
                )}
                onClick={() => onSelectTerm(term)}
              >
                {/* Badge */}
                {isAllIn && isLonger && (
                  <div className="absolute -top-2.5 left-5 flex items-center gap-1 bg-cs-accent px-2.5 py-0.5">
                    <Star className="h-2.5 w-2.5 fill-white text-white" />
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white">
                      Beliebteste Wahl
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-black uppercase tracking-[-0.01em] text-cs-white">
                      {term.termValue} Monate{" "}
                      {isAllIn ? "All In" : "Standard"}
                    </h3>
                    <p className="mt-0.5 text-2xl font-black tracking-[-0.03em] text-cs-white">
                      {formatPrice(term.price)} €{" "}
                      <span className="text-sm font-medium text-white/60">
                        mtl.
                      </span>
                    </p>
                    <p className="mt-1 text-[11px] text-white/55">
                      {term.termValue} Monate Mindestvertragslaufzeit
                    </p>
                  </div>

                  {/* Radio */}
                  <div
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                      isSelected
                        ? "border-cs-accent bg-cs-accent"
                        : "border-white/20"
                    )}
                  >
                    {isSelected && (
                      <Check className="h-3.5 w-3.5 text-white" />
                    )}
                  </div>
                </div>

                {/* Features inline */}
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                  {getFeaturesForBundle(bundle.name).map((f) => (
                    <span
                      key={f.text}
                      className="flex items-center gap-1 text-[10px] text-white/60"
                    >
                      {f.icon}
                      {f.text}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Accordions — nur wenn ein Tarif gewählt ist */}
      {selectedTerm && selectedBundle && (
        <div className="mt-6">
          {/* Vertragsdetails */}
          <Accordion title="Vertragsdetails">
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between">
                <span className="text-white/50">Vertrag</span>
                <span className="text-white/70">{selectedBundle.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Mindestvertragslaufzeit</span>
                <span className="text-white/70">
                  {selectedTerm.termValue} Monate
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Verlängerung</span>
                <span className="text-white/70">
                  {selectedTerm.extensionFixedTerm}{" "}
                  {selectedTerm.extensionFixedTermUnit === "MONTH"
                    ? "Monat"
                    : "Monate"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Kündigungsfrist</span>
                <span className="text-white/70">
                  {selectedTerm.cancellationPeriod}{" "}
                  {selectedTerm.cancellationPeriodUnit === "MONTH"
                    ? "Monat"
                    : "Monate"}{" "}
                  zum Ende der Laufzeit
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Zahlungsweise</span>
                <span className="text-white/70">
                  Monatlich per SEPA-Lastschrift
                </span>
              </div>
            </div>
          </Accordion>

          {/* Kostenübersicht */}
          <Accordion
            title="Kostenübersicht"
            icon={<Info className="h-3 w-3" />}
          >
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between">
                <span className="text-white/50">Mitgliedsbeitrag</span>
                <span className="text-white/70">
                  {formatPrice(selectedTerm.price)} € mtl.
                </span>
              </div>
              {starterFee && (
                <div className="flex justify-between">
                  <span className="text-white/50">{starterFee.name}</span>
                  <span className="text-white/70">
                    einmalig {formatPrice(starterFee.price)} €
                  </span>
                </div>
              )}
              {selectedTerm.optionalModules.length > 0 &&
                selectedTerm.optionalModules.map((mod) => (
                  <div key={mod.id} className="flex justify-between">
                    <span className="text-white/50">{mod.name}</span>
                    <span className="text-white/70">
                      {formatPrice(mod.price)} € / Jahr
                    </span>
                  </div>
                ))}
              <div className="border-t border-white/[0.06] pt-2">
                <div className="flex justify-between">
                  <span className="text-white/50">
                    Gesamtpreis Mindestvertragslaufzeit
                  </span>
                  <span className="font-bold text-cs-white">
                    {formatPrice(
                      selectedTerm.contractVolumeInformation
                        .totalContractVolume
                    )}{" "}
                    €
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-white/55">
                Alle Preise inkl. 19% MwSt.
              </p>
            </div>
          </Accordion>

          {/* Überblick nach Verlängerung */}
          <Accordion title="Überblick nach Verlängerung">
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between">
                <span className="text-white/50">Monatsbeitrag</span>
                <span className="text-white/70">
                  {formatPrice(selectedTerm.price)} € mtl.
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Verlängerung</span>
                <span className="text-white/70">
                  Automatisch um {selectedTerm.extensionFixedTerm}{" "}
                  {selectedTerm.extensionFixedTermUnit === "MONTH"
                    ? "Monat"
                    : "Monate"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Kündigungsfrist</span>
                <span className="text-white/70">
                  {selectedTerm.cancellationPeriod}{" "}
                  {selectedTerm.cancellationPeriodUnit === "MONTH"
                    ? "Monat"
                    : "Monate"}
                </span>
              </div>
            </div>
          </Accordion>

          {/* Dein Monatsbeitrag — gross */}
          <div className="mt-6 border-t border-white/[0.08] pt-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
              Dein Monatsbeitrag
            </p>
            <p className="mt-1 text-3xl font-black tracking-[-0.03em] text-cs-white">
              {formatPrice(selectedTerm.price)} €
            </p>
            <p className="mt-1 text-[11px] text-white/55">
              Monatlich per SEPA-Lastschrift. Inkl. 19% MwSt.
            </p>
          </div>
        </div>
      )}

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
