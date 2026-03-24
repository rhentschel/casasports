"use client";

import { cn } from "@/lib/utils";
import { WIZARD_STEPS, type WizardStep } from "@/data/magicline";

interface WizardProgressProps {
  currentStep: WizardStep;
}

export function WizardProgress({ currentStep }: WizardProgressProps) {
  const currentIndex = WIZARD_STEPS.findIndex((s) => s.key === currentStep);
  const visibleSteps = WIZARD_STEPS.filter((s) => s.key !== "success");

  return (
    <div className="mb-12 flex items-center gap-2">
      {visibleSteps.map((step, i) => {
        const isActive = step.key === currentStep;
        const isPast = i < currentIndex;

        return (
          <div key={step.key} className="flex items-center gap-2">
            <div
              className={cn(
                "flex h-7 items-center gap-2 px-3 text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-500",
                isActive && "bg-cs-accent text-white",
                isPast && "bg-white/[0.06] text-white/50",
                !isActive && !isPast && "text-white/20"
              )}
            >
              <span>{i + 1}</span>
              <span className="hidden sm:inline">{step.label}</span>
            </div>
            {i < visibleSteps.length - 1 && (
              <div
                className={cn(
                  "h-px w-4",
                  isPast ? "bg-cs-accent/30" : "bg-white/[0.06]"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
