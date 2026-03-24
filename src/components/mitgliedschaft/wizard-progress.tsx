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
    <div className="mx-auto mb-16 max-w-2xl">
      <div className="flex items-center justify-between">
        {visibleSteps.map((step, i) => {
          const isActive = step.key === currentStep;
          const isPast = i < currentIndex;
          const isLast = i === visibleSteps.length - 1;

          return (
            <div key={step.key} className="flex flex-1 items-center">
              {/* Dot + Label */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center border text-[11px] font-bold transition-all duration-500",
                    isActive &&
                      "border-cs-accent bg-cs-accent text-white",
                    isPast &&
                      "border-cs-accent/50 bg-cs-accent/10 text-cs-accent",
                    !isActive &&
                      !isPast &&
                      "border-white/[0.08] text-white/30"
                  )}
                >
                  {isPast ? (
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span
                  className={cn(
                    "hidden text-[10px] font-medium uppercase tracking-[0.15em] md:block",
                    isActive && "text-cs-white",
                    isPast && "text-cs-accent/60",
                    !isActive && !isPast && "text-white/20"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Line between dots */}
              {!isLast && (
                <div className="mx-3 h-px flex-1">
                  <div
                    className={cn(
                      "h-full transition-all duration-500",
                      isPast ? "bg-cs-accent/30" : "bg-white/[0.06]"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
