"use client";

import Link from "next/link";
import {
  Star,
  ArrowRight,
  Dumbbell,
  Flame,
  Users,
  Sun,
  Waves,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const plans = [
  {
    name: "All-in",
    badge: "Beliebteste Wahl",
    price: "44,90",
    period: "/ Monat",
    description:
      "Training und Wellness in einem. Alles, was Casa Sports zu bieten hat, ohne Einschraenkungen.",
    features: [
      { icon: <Dumbbell className="h-3.5 w-3.5" />, text: "Kompletter Fitnessbereich" },
      { icon: <Users className="h-3.5 w-3.5" />, text: "Alle Gruppenkurse inklusive" },
      { icon: <Flame className="h-3.5 w-3.5" />, text: "KLAFS Sauna" },
      { icon: <Sun className="h-3.5 w-3.5" />, text: "Roeger Infrarotkabine" },
      { icon: <Waves className="h-3.5 w-3.5" />, text: "Wellness-Bereich mit Ruheliegen" },
      { icon: <Clock className="h-3.5 w-3.5" />, text: "7 Tage die Woche Zugang" },
    ],
    highlighted: true,
    accent: "gold",
    cta: "All-in starten",
    note: "Die meisten Mitglieder wählen All-in",
  },
  {
    name: "Sauna Solo",
    badge: null,
    price: "29,90",
    period: "/ Monat",
    description:
      "Sauna und Wellness ohne Fitnesstraining. Für alle, die reine Entspannung suchen.",
    features: [
      { icon: <Flame className="h-3.5 w-3.5" />, text: "KLAFS Sauna" },
      { icon: <Sun className="h-3.5 w-3.5" />, text: "Roeger Infrarotkabine" },
      { icon: <Waves className="h-3.5 w-3.5" />, text: "Wellness-Bereich mit Ruheliegen" },
      { icon: <Clock className="h-3.5 w-3.5" />, text: "7 Tage die Woche Zugang" },
    ],
    highlighted: false,
    accent: "white",
    cta: "Sauna Solo wählen",
    note: null,
  },
];

export function WellnessPricing() {
  const ref = useReveal();

  return (
    <section id="tarife" className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Tarife
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
            Trainieren und erholen.
            <br />
            <span className="text-cs-accent">Passt perfekt zusammen.</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/60">
            Für nur 15 € mehr pro Monat bekommst du zum Wellness-Bereich das
            komplette Fitness-Erlebnis dazu. Die meisten entscheiden sich für
            All-in.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col border p-8 transition-all duration-500 md:p-10",
                plan.highlighted
                  ? "border-cs-accent/40 bg-cs-accent/[0.03] shadow-[0_0_60px_rgba(204,38,51,0.08)]"
                  : "border-white/[0.08] hover:border-white/[0.15]"
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-8 flex items-center gap-1.5 bg-cs-accent px-4 py-1.5">
                  <Star className="h-3 w-3 fill-white text-white" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-lg font-black uppercase tracking-[-0.01em] text-cs-white">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={cn(
                    "text-5xl font-black tracking-[-0.04em]",
                    plan.highlighted ? "text-cs-accent" : "text-cs-white"
                  )}
                >
                  {plan.price}€
                </span>
                <span className="text-[14px] text-white/50">{plan.period}</span>
              </div>

              <p className="mt-4 text-[14px] leading-relaxed text-white/60">
                {plan.description}
              </p>

              {/* Divider */}
              <div
                className={cn(
                  "mt-6 h-px",
                  plan.highlighted ? "bg-cs-accent/20" : "bg-white/[0.06]"
                )}
              />

              {/* Features */}
              <ul className="mt-6 flex-1 space-y-3 pb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    <span
                      className={cn(
                        "shrink-0",
                        plan.highlighted
                          ? "text-cs-accent/60"
                          : "text-white/50"
                      )}
                    >
                      {feature.icon}
                    </span>
                    <span className="text-[14px] text-white/50">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA — mt-auto pushes button to same height in both cards */}
              <Link
                href="/probetraining"
                className={cn(
                  "group mt-auto flex items-center justify-center gap-3 px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-500",
                  plan.highlighted
                    ? "border border-cs-accent bg-cs-accent text-white hover:bg-transparent hover:text-white"
                    : "border border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                )}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
              </Link>

              {/* Social proof note — fixed height so cards stay aligned */}
              <div className="flex h-8 items-center justify-center">
                {plan.note && (
                  <p className="text-center text-[11px] text-cs-accent/40">
                    {plan.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
