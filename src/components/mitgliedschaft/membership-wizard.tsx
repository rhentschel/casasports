"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { WizardProgress } from "./wizard-progress";
import { StepPlanSelection } from "./step-plan-selection";
import { StepPersonalData } from "./step-personal-data";
import { StepPayment } from "./step-payment";
import { StepReview } from "./step-review";
import { StepSuccess } from "./step-success";
import {
  MAGICLINE_CONFIG,
  INITIAL_PERSONAL_DATA,
  INITIAL_PAYMENT_DATA,
  type WizardStep,
  type RateBundle,
  type RateBundleTerm,
  type PersonalData,
  type PaymentData,
} from "@/data/magicline";

const stepTransition = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { type: "spring" as const, bounce: 0, duration: 0.45 },
};

export function MembershipWizard() {
  // Data from API
  const [bundles, setBundles] = useState<RateBundle[]>([]);
  const [sepaText, setSepaText] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Wizard state
  const [step, setStep] = useState<WizardStep>("plan");
  const [selectedTerm, setSelectedTerm] = useState<RateBundleTerm | null>(null);
  const [selectedModuleIds, setSelectedModuleIds] = useState<number[]>([]);
  const [personalData, setPersonalData] = useState<PersonalData>(INITIAL_PERSONAL_DATA);
  const [paymentData, setPaymentData] = useState<PaymentData>(INITIAL_PAYMENT_DATA);

  // Load rate bundles + SEPA text on mount
  useEffect(() => {
    async function load() {
      try {
        const [bundlesRes, sepaRes] = await Promise.all([
          fetch("/api/magicline/rate-bundles"),
          fetch("/api/magicline/sepa-agreement"),
        ]);

        if (!bundlesRes.ok) throw new Error("Tarife konnten nicht geladen werden");

        const bundlesData = await bundlesRes.json();
        setBundles(bundlesData);

        if (sepaRes.ok) {
          const sepaData = await sepaRes.json();
          setSepaText(sepaData.text || null);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ein Fehler ist aufgetreten"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Immutable state updaters
  const updatePersonalData = useCallback(
    (field: keyof PersonalData, value: string) => {
      setPersonalData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const updatePaymentData = useCallback(
    (field: keyof PaymentData, value: string) => {
      setPaymentData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  function handleSelectTerm(term: RateBundleTerm) {
    setSelectedTerm(term);
    // Auto-select all optional modules (Servicepauschale ist Pflicht)
    setSelectedModuleIds(term.optionalModules.map((m) => m.id));
  }

  function handleToggleModule(moduleId: number) {
    setSelectedModuleIds((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  }

  function findBundleNameForTerm(termId: number): string {
    for (const bundle of bundles) {
      if (bundle.terms.some((t) => t.id === termId)) {
        return bundle.name;
      }
    }
    return "";
  }

  // Pre-fill account holder when entering payment step
  function goToPayment() {
    if (!paymentData.accountHolder) {
      setPaymentData((prev) => ({
        ...prev,
        accountHolder: `${personalData.firstName} ${personalData.lastName}`,
      }));
    }
    setStep("payment");
  }

  async function handleSubmit() {
    if (!selectedTerm) return;

    const payload = {
      studioId: MAGICLINE_CONFIG.studioId,
      rateBundleTermId: selectedTerm.id,
      paymentChoice: "DIRECT_DEBIT",
      customer: {
        gender: personalData.gender,
        firstName: personalData.firstName,
        lastName: personalData.lastName,
        dateOfBirth: personalData.dateOfBirth,
        email: personalData.email,
        phone: personalData.phone,
        address: {
          street: personalData.street,
          houseNumber: personalData.houseNumber,
          zipCode: personalData.zipCode,
          city: personalData.city,
          countryCode: "Germany",
        },
      },
      bankAccount: {
        accountHolder: paymentData.accountHolder,
        iban: paymentData.iban.replace(/\s/g, ""),
        bic: paymentData.bic,
      },
      selectedOptionalModuleIds: selectedModuleIds,
      communicationPreferences: [],
    };

    const res = await fetch("/api/magicline/contract-submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(
        data?.error || "Vertragsabschluss fehlgeschlagen. Bitte versuche es erneut."
      );
    }

    setStep("success");
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6 py-12">
        <Loader2 className="h-8 w-8 animate-spin text-white/30" />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6 py-12">
        <div className="text-center">
          <p className="text-sm text-cs-accent">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 border border-white/[0.08] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all hover:border-white/20 hover:text-white"
          >
            Erneut versuchen
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="px-3 py-6 md:px-8 md:py-10 lg:px-12">
      <div>
        {step !== "success" && <WizardProgress currentStep={step} />}

        <AnimatePresence mode="wait">
          {step === "plan" && (
            <motion.div key="plan" {...stepTransition}>
              <StepPlanSelection
                bundles={bundles}
                selectedTermId={selectedTerm?.id ?? null}
                selectedModuleIds={selectedModuleIds}
                onSelectTerm={handleSelectTerm}
                onToggleModule={handleToggleModule}
                onNext={() => setStep("personal")}
              />
            </motion.div>
          )}

          {step === "personal" && (
            <motion.div key="personal" {...stepTransition}>
              <StepPersonalData
                data={personalData}
                onChange={updatePersonalData}
                onNext={goToPayment}
                onBack={() => setStep("plan")}
              />
            </motion.div>
          )}

          {step === "payment" && (
            <motion.div key="payment" {...stepTransition}>
              <StepPayment
                data={paymentData}
                onChange={updatePaymentData}
                sepaText={sepaText}
                onNext={() => setStep("review")}
                onBack={() => setStep("personal")}
              />
            </motion.div>
          )}

          {step === "review" && selectedTerm && (
            <motion.div key="review" {...stepTransition}>
              <StepReview
                term={selectedTerm}
                bundleName={findBundleNameForTerm(selectedTerm.id)}
                personalData={personalData}
                paymentData={paymentData}
                sepaText={sepaText}
                onSubmit={handleSubmit}
                onBack={() => setStep("payment")}
                onGoToStep={setStep}
              />
            </motion.div>
          )}

          {step === "success" && (
            <motion.div key="success" {...stepTransition}>
              <StepSuccess />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
