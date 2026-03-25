"use client";

import { ArrowLeft, Loader2, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  PersonalData,
  PaymentData,
  RateBundleTerm,
  WizardStep,
} from "@/data/magicline";
import { useState } from "react";

interface StepReviewProps {
  term: RateBundleTerm;
  bundleName: string;
  personalData: PersonalData;
  paymentData: PaymentData;
  sepaText: string | null;
  onSubmit: () => Promise<void>;
  onBack: () => void;
  onGoToStep: (step: WizardStep) => void;
}

function formatPrice(price: number): string {
  return price.toFixed(2).replace(".", ",");
}

function maskIban(iban: string): string {
  if (iban.length <= 4) return iban;
  return "•••• •••• •••• •••• " + iban.slice(-4);
}

const genderMap: Record<string, string> = {
  MALE: "Herr",
  FEMALE: "Frau",
  OTHER: "Divers",
};

export function StepReview({
  term,
  bundleName,
  personalData,
  paymentData,
  sepaText,
  onSubmit,
  onBack,
  onGoToStep,
}: StepReviewProps) {
  const [sepaAccepted, setSepaAccepted] = useState(false);
  const [agbAccepted, setAgbAccepted] = useState(false);
  const [widerrufAccepted, setWiderrufAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const starterFee = term.flatFees.find((f) => f.isStarterPackage);
  const servicePauschalen = term.optionalModules;
  const spYearlyCost = servicePauschalen.reduce((sum, m) => sum + m.price, 0);
  const spYears = Math.ceil(term.termValue / 12);
  const totalWithSp =
    term.contractVolumeInformation.totalContractVolume + spYearlyCost * spYears;
  const canSubmit =
    sepaAccepted && agbAccepted && widerrufAccepted && !isSubmitting;

  async function handleSubmit() {
    if (!canSubmit) return;
    setIsSubmitting(true);
    setError("");
    try {
      await onSubmit();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ein Fehler ist aufgetreten. Bitte versuche es erneut."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Schritt 4
        </p>
        <h2 className="mt-4 text-2xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-3xl">
          Zusammenfassung
        </h2>
      </div>

      <div className="mt-6 space-y-4">
        {/* Personal data summary */}
        <div className="border border-white/[0.08] p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
              Persönliche Daten
            </h3>
            <button
              onClick={() => onGoToStep("personal")}
              className="flex items-center gap-1.5 text-[11px] text-cs-accent transition-colors hover:text-cs-accent-hover"
            >
              <Pencil className="h-3 w-3" />
              Ändern
            </button>
          </div>
          <div className="mt-3 space-y-1 text-[13px] text-white/60">
            <p>
              {genderMap[personalData.gender] || ""}{" "}
              {personalData.firstName} {personalData.lastName}
            </p>
            <p>
              Geb.{" "}
              {new Date(personalData.dateOfBirth).toLocaleDateString("de-DE")}
            </p>
            <p>{personalData.email}</p>
            <p>{personalData.phone}</p>
            <p>
              {personalData.street} {personalData.houseNumber},{" "}
              {personalData.zipCode} {personalData.city}
            </p>
          </div>
        </div>

        {/* Payment summary */}
        <div className="border border-white/[0.08] p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
              Zahlungsdaten (SEPA-Lastschrift)
            </h3>
            <button
              onClick={() => onGoToStep("payment")}
              className="flex items-center gap-1.5 text-[11px] text-cs-accent transition-colors hover:text-cs-accent-hover"
            >
              <Pencil className="h-3 w-3" />
              Ändern
            </button>
          </div>
          <div className="mt-3 space-y-1 text-[13px] text-white/60">
            <p>{paymentData.accountHolder}</p>
            <p className="font-mono tracking-wider">
              {maskIban(paymentData.iban)}
            </p>
            <p>
              {paymentData.bankName} ({paymentData.bic})
            </p>
          </div>
        </div>

        {/* ===== Kostenaufstellung gemäß § 312j BGB ===== */}
        <div className="border-2 border-white/[0.12] bg-white/[0.02] p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/50">
              Kostenübersicht
            </h3>
            <button
              onClick={() => onGoToStep("plan")}
              className="flex items-center gap-1.5 text-[11px] text-cs-accent transition-colors hover:text-cs-accent-hover"
            >
              <Pencil className="h-3 w-3" />
              Ändern
            </button>
          </div>

          <div className="mt-4 space-y-2.5">
            <div className="flex justify-between text-[13px]">
              <span className="text-white/60">Tarif</span>
              <span className="font-medium text-cs-white">{bundleName}</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-white/60">Mindestlaufzeit</span>
              <span className="font-medium text-cs-white">
                {term.termValue} Monate
              </span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-white/60">Monatlicher Beitrag</span>
              <span className="font-medium text-cs-white">
                {formatPrice(term.price)} €
              </span>
            </div>
            {starterFee && (
              <div className="flex justify-between text-[13px]">
                <span className="text-white/60">
                  {starterFee.name} (einmalig)
                </span>
                <span className="font-medium text-cs-white">
                  {formatPrice(starterFee.price)} €
                </span>
              </div>
            )}
            {servicePauschalen.map((mod) => (
              <div key={mod.id} className="flex justify-between text-[13px]">
                <span className="text-white/60">
                  {mod.name} (jährlich)
                </span>
                <span className="font-medium text-cs-white">
                  {formatPrice(mod.price)} € / Jahr
                </span>
              </div>
            ))}
            <div className="flex justify-between text-[13px]">
              <span className="text-white/60">Kündigungsfrist</span>
              <span className="font-medium text-cs-white">
                {term.cancellationPeriod}{" "}
                {term.cancellationPeriodUnit === "MONTH" ? "Monat" : "Monate"}{" "}
                zum Ende der Laufzeit
              </span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-white/60">Verlängerung</span>
              <span className="font-medium text-cs-white">
                {term.extensionFixedTerm}{" "}
                {term.extensionFixedTermUnit === "MONTH" ? "Monat" : "Monate"}
              </span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-white/60">Zahlungsart</span>
              <span className="font-medium text-cs-white">
                SEPA-Lastschrift
              </span>
            </div>

            {/* Divider + Gesamtpreis */}
            <div className="border-t border-white/[0.08] pt-3">
              <div className="flex justify-between text-[13px]">
                <span className="font-medium text-white/70">
                  Gesamtpreis Mindestvertragslaufzeit
                </span>
                <span className="text-base font-black text-cs-white">
                  {formatPrice(totalWithSp)} €
                </span>
              </div>
              <p className="mt-1.5 text-[11px] text-white/30">
                Alle Preise inkl. 19% MwSt. Keine weiteren Kosten.
              </p>
            </div>
          </div>
        </div>

        {/* SEPA mandate */}
        {sepaText && (
          <div className="border border-white/[0.06] bg-cs-gray-900/50 p-5">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
              SEPA-Lastschriftmandat
            </p>
            <p className="max-h-24 overflow-y-auto text-[12px] leading-relaxed text-white/50">
              {sepaText}
            </p>
          </div>
        )}

        {/* Pflicht-Checkboxen */}
        <div className="space-y-3">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={sepaAccepted}
              onChange={(e) => setSepaAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-cs-accent"
            />
            <span className="text-[12px] leading-relaxed text-white/50">
              Ich erteile das SEPA-Lastschriftmandat und ermächtige Casa
              Sports, die fälligen Beträge von meinem Konto per Lastschrift
              einzuziehen. *
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={agbAccepted}
              onChange={(e) => setAgbAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-cs-accent"
            />
            <span className="text-[12px] leading-relaxed text-white/50">
              Ich habe die Allgemeinen Geschäftsbedingungen gelesen und
              akzeptiere diese. *
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={widerrufAccepted}
              onChange={(e) => setWiderrufAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-cs-accent"
            />
            <span className="text-[12px] leading-relaxed text-white/50">
              Ich habe die Widerrufsbelehrung zur Kenntnis genommen. Mir ist
              bekannt, dass ich den Vertrag innerhalb von 14 Tagen ohne Angabe
              von Gründen widerrufen kann. *
            </span>
          </label>
        </div>

        {/* Error */}
        {error && (
          <div className="border border-cs-accent/30 bg-cs-accent/5 p-4">
            <p className="text-sm text-cs-accent">{error}</p>
          </div>
        )}
      </div>

      {/* Navigation — Button-Lösung gemäß § 312j BGB */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="group flex items-center gap-3 border border-white/[0.08] px-6 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-500 hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-[400ms] group-hover:-translate-x-1" />
          Zurück
        </button>
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={cn(
            "flex items-center gap-3 border border-cs-accent bg-cs-accent px-6 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-500 hover:bg-transparent",
            !canSubmit && "cursor-not-allowed opacity-40"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Wird abgeschlossen...
            </>
          ) : (
            "Zahlungspflichtig bestellen"
          )}
        </button>
      </div>
    </div>
  );
}
