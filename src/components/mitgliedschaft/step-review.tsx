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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const starterFee = term.flatFees.find((f) => f.isStarterPackage);
  const canSubmit = sepaAccepted && agbAccepted && !isSubmitting;

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
        <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-4xl">
          Zusammenfassung
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-white/60">
          Pruefe deine Angaben und schliesse deinen Vertrag ab.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {/* Plan summary */}
        <div className="border border-white/[0.08] p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
              Tarif
            </h3>
            <button
              onClick={() => onGoToStep("plan")}
              className="flex items-center gap-1.5 text-[11px] text-cs-accent transition-colors hover:text-cs-accent-hover"
            >
              <Pencil className="h-3 w-3" />
              Aendern
            </button>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-white/60">{bundleName}</span>
              <span className="text-sm font-medium text-cs-white">
                {term.termValue} Monate
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-white/60">Monatsbeitrag</span>
              <span className="text-sm font-medium text-cs-white">
                {formatPrice(term.price)} €
              </span>
            </div>
            {starterFee && (
              <div className="flex justify-between">
                <span className="text-sm text-white/60">
                  {starterFee.name} (einmalig)
                </span>
                <span className="text-sm font-medium text-cs-white">
                  {formatPrice(starterFee.price)} €
                </span>
              </div>
            )}
            <div className="mt-3 border-t border-white/[0.06] pt-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-white/60">
                  Gesamtpreis Mindestvertragslaufzeit
                </span>
                <span className="text-sm font-bold text-cs-gold">
                  {formatPrice(
                    term.contractVolumeInformation.totalContractVolume
                  )}{" "}
                  €
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal data summary */}
        <div className="border border-white/[0.08] p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
              Persoenliche Daten
            </h3>
            <button
              onClick={() => onGoToStep("personal")}
              className="flex items-center gap-1.5 text-[11px] text-cs-accent transition-colors hover:text-cs-accent-hover"
            >
              <Pencil className="h-3 w-3" />
              Aendern
            </button>
          </div>
          <div className="mt-4 space-y-1.5 text-sm text-white/60">
            <p>
              {genderMap[personalData.gender] || ""}{" "}
              {personalData.firstName} {personalData.lastName}
            </p>
            <p>Geb. {new Date(personalData.dateOfBirth).toLocaleDateString("de-DE")}</p>
            <p>{personalData.email}</p>
            <p>{personalData.phone}</p>
            <p>
              {personalData.street} {personalData.houseNumber},{" "}
              {personalData.zipCode} {personalData.city}
            </p>
          </div>
        </div>

        {/* Payment summary */}
        <div className="border border-white/[0.08] p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
              Zahlungsdaten
            </h3>
            <button
              onClick={() => onGoToStep("payment")}
              className="flex items-center gap-1.5 text-[11px] text-cs-accent transition-colors hover:text-cs-accent-hover"
            >
              <Pencil className="h-3 w-3" />
              Aendern
            </button>
          </div>
          <div className="mt-4 space-y-1.5 text-sm text-white/60">
            <p>{paymentData.accountHolder}</p>
            <p className="font-mono tracking-wider">
              {maskIban(paymentData.iban)}
            </p>
            <p>
              {paymentData.bankName} ({paymentData.bic})
            </p>
          </div>
        </div>

        {/* SEPA mandate */}
        {sepaText && (
          <div className="border border-white/[0.06] bg-cs-gray-900/50 p-6">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
              SEPA-Lastschriftmandat
            </p>
            <p className="max-h-32 overflow-y-auto text-[13px] leading-relaxed text-white/50">
              {sepaText}
            </p>
          </div>
        )}

        {/* Checkboxes */}
        <div className="space-y-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={sepaAccepted}
              onChange={(e) => setSepaAccepted(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-cs-accent"
            />
            <span className="text-[13px] leading-relaxed text-white/50">
              Ich erteile das SEPA-Lastschriftmandat und ermaechigte Casa Sports,
              Zahlungen von meinem Konto einzuziehen. *
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={agbAccepted}
              onChange={(e) => setAgbAccepted(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-cs-accent"
            />
            <span className="text-[13px] leading-relaxed text-white/50">
              Ich habe die AGB und die Widerrufsbelehrung gelesen und akzeptiere
              diese. *
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

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="group flex items-center gap-3 border border-white/[0.08] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-500 hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-[400ms] group-hover:-translate-x-1" />
          Zurueck
        </button>
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={cn(
            "group flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent",
            !canSubmit && "cursor-not-allowed opacity-40"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Wird abgeschlossen...
            </>
          ) : (
            "Zahlungspflichtig abschliessen"
          )}
        </button>
      </div>
    </div>
  );
}
