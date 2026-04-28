"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NumberStepper } from "./number-stepper";
import { FaqHint } from "./faq-hint";
import { HistoryList } from "./history-list";
import { SaveActions } from "./save-actions";
import { useCalculationHistory, type HistoryEntry } from "@/lib/rechner-history";
import { generateRechnerPdf, downloadPdf } from "@/lib/rechner-pdf";

type ProteinInputs = {
  weight: number;
  goal: "maintenance" | "muscle" | "cut" | "endurance";
  activity: "low" | "mid" | "high";
};

type Goal = {
  id: "maintenance" | "muscle" | "cut" | "endurance";
  label: string;
  desc: string;
  factor: [number, number];
};

const goals: Goal[] = [
  { id: "maintenance", label: "Erhalt", desc: "Gewicht halten", factor: [1.2, 1.4] },
  { id: "muscle", label: "Muskelaufbau", desc: "Hypertrophie", factor: [1.6, 2.2] },
  { id: "cut", label: "Diät / Cut", desc: "Fett verlieren", factor: [1.8, 2.4] },
  { id: "endurance", label: "Ausdauer", desc: "Cardio / Cycling", factor: [1.4, 1.7] },
];

type Activity = {
  id: "low" | "mid" | "high";
  label: string;
  desc: string;
  modifier: number;
};

const activities: Activity[] = [
  { id: "low", label: "1–2x", desc: "pro Woche", modifier: -0.1 },
  { id: "mid", label: "3–4x", desc: "pro Woche", modifier: 0 },
  { id: "high", label: "5–7x", desc: "pro Woche", modifier: 0.15 },
];

const proteinSources = [
  { name: "Hähnchenbrust", per100g: 23, image: "🍗" },
  { name: "Magerquark", per100g: 12, image: "🥛" },
  { name: "Lachs", per100g: 22, image: "🐟" },
  { name: "Eier (1 Stück)", per100g: 6.5, image: "🥚" },
  { name: "Linsen (gekocht)", per100g: 9, image: "🫘" },
  { name: "Tofu", per100g: 12, image: "🟦" },
  { name: "Whey Protein", per100g: 75, image: "🥤" },
  { name: "Skyr", per100g: 11, image: "🥄" },
];

export function ProteinCalculator() {
  const [weight, setWeight] = useState(75);
  const [goal, setGoal] = useState<Goal["id"]>("muscle");
  const [activity, setActivity] = useState<Activity["id"]>("mid");

  const result = useMemo(() => {
    const goalDef = goals.find((g) => g.id === goal)!;
    const activityDef = activities.find((a) => a.id === activity)!;

    const lowFactor = goalDef.factor[0] + activityDef.modifier;
    const highFactor = goalDef.factor[1] + activityDef.modifier;
    const recommendedFactor = (lowFactor + highFactor) / 2;

    const lowGrams = Math.round(lowFactor * weight);
    const highGrams = Math.round(highFactor * weight);
    const recommendedGrams = Math.round(recommendedFactor * weight);

    const proteinKcal = recommendedGrams * 4;
    const perMeal = Math.round(recommendedGrams / 4);

    return { lowGrams, highGrams, recommendedGrams, recommendedFactor, proteinKcal, perMeal };
  }, [weight, goal, activity]);

  const { entries, save, remove, clear, hydrated } = useCalculationHistory<ProteinInputs>("proteinbedarf");
  const lastSavedRef = useRef<string>("");

  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => {
      const key = `${weight}-${goal}-${activity}`;
      if (key === lastSavedRef.current) return;
      lastSavedRef.current = key;
      const goalLabel = goals.find((g) => g.id === goal)!.label;
      save(
        { weight, goal, activity },
        {
          primary: result.recommendedGrams.toString(),
          primaryUnit: "g/Tag",
          label: goalLabel,
        }
      );
    }, 1500);
    return () => clearTimeout(handle);
  }, [weight, goal, activity, result.recommendedGrams, hydrated, save]);

  const downloadPdfHandler = () => {
    const goalLabel = goals.find((g) => g.id === goal)!.label;
    const activityLabel = activities.find((a) => a.id === activity)!;

    const doc = generateRechnerPdf({
      title: "Dein Proteinbedarf",
      subtitle: "Protein-Rechner · Täglicher Eiweißbedarf",
      resultLarge: result.recommendedGrams.toString(),
      resultUnit: "g pro Tag",
      resultLabel: goalLabel,
      sections: [
        {
          title: "Deine Eingaben",
          rows: [
            { label: "Körpergewicht", value: `${weight.toString().replace(".", ",")} kg` },
            { label: "Trainingsziel", value: goalLabel },
            { label: "Trainingsfrequenz", value: `${activityLabel.label} ${activityLabel.desc}` },
          ],
        },
        {
          title: "Detailauswertung",
          rows: [
            {
              label: "Spannweite",
              value: `${result.lowGrams} – ${result.highGrams} g pro Tag`,
            },
            {
              label: "Protein pro Mahlzeit (¼ Tagesbedarf)",
              value: `≈ ${result.perMeal} g`,
            },
            {
              label: "Faktor pro kg Körpergewicht",
              value: `${result.recommendedFactor.toFixed(1).replace(".", ",")} g/kg`,
            },
            {
              label: "Kalorien aus Protein",
              value: `${result.proteinKcal} kcal`,
            },
          ],
        },
      ],
      recommendation: getProteinRecommendation(goal),
    });
    downloadPdf(doc, `casasports-protein-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const renderInputSummary = (entry: HistoryEntry<ProteinInputs>) => {
    const goalLabel = goals.find((g) => g.id === entry.inputs.goal)?.label ?? entry.inputs.goal;
    return `${entry.inputs.weight.toString().replace(".", ",")} kg · ${goalLabel}`;
  };

  return (
    <section className="bg-cs-black pb-24 pt-3 md:pb-32 md:pt-4">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-1 border border-white/10 bg-gradient-to-br from-white/[0.035] to-white/[0.005] lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Eingabe-Bereich */}
          <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Eingabe
            </p>
            <h2 className="mt-3 text-2xl font-black uppercase tracking-[-0.02em] text-white md:text-3xl">
              Deine Daten
            </h2>

            <div className="mt-7 space-y-7">
              <NumberStepper
                id="protein-weight"
                label="Gewicht"
                unit="kg"
                min={40}
                max={150}
                step={0.5}
                value={weight}
                onChange={setWeight}
              />

              <div>
                <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-white/60">
                  Dein Ziel
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {goals.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.id)}
                      className={cn(
                        "border px-4 py-3.5 text-left transition-all duration-300",
                        goal === g.id
                          ? "border-cs-accent bg-cs-accent/10"
                          : "border-white/15 hover:border-white/40"
                      )}
                    >
                      <span
                        className={cn(
                          "block text-[12px] uppercase tracking-[0.15em] transition-colors",
                          goal === g.id ? "text-cs-accent" : "text-white"
                        )}
                      >
                        {g.label}
                      </span>
                      <span className="mt-1 block text-[11px] leading-snug text-white/55">
                        {g.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-white/60">
                  Trainingsfrequenz
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {activities.map((a) => (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => setActivity(a.id)}
                      className={cn(
                        "border px-3 py-3.5 transition-all duration-300",
                        activity === a.id
                          ? "border-cs-accent bg-cs-accent/10"
                          : "border-white/15 hover:border-white/40"
                      )}
                    >
                      <span
                        className={cn(
                          "block text-base font-black tracking-[-0.02em]",
                          activity === a.id ? "text-cs-accent" : "text-white"
                        )}
                      >
                        {a.label}
                      </span>
                      <span className="mt-0.5 block text-[10px] uppercase tracking-[0.15em] text-white/50">
                        {a.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ergebnis-Bereich */}
          <div className="p-8 md:p-10 lg:sticky lg:top-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Dein Bedarf
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-7xl font-black tracking-[-0.04em] text-white md:text-8xl">
                {result.recommendedGrams}
              </span>
              <span className="text-base uppercase tracking-[0.15em] text-white/50">
                g / Tag
              </span>
            </div>

            <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-white/60">
              Spannweite: {result.lowGrams} – {result.highGrams} g
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">
                  Faktor
                </p>
                <p className="mt-2 text-2xl font-black tracking-[-0.02em] text-white">
                  {result.recommendedFactor.toFixed(1).replace(".", ",")}
                  <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">
                    g/kg
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">
                  Pro Mahlzeit
                </p>
                <p className="mt-2 text-2xl font-black tracking-[-0.02em] text-white">
                  {result.perMeal}
                  <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">
                    g
                  </span>
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">
                  Kalorien
                </p>
                <p className="mt-2 text-2xl font-black tracking-[-0.02em] text-white">
                  {result.proteinKcal}
                  <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">
                    kcal
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                So erreichst du {result.recommendedGrams} g
              </p>
              <p className="mt-2 text-[13px] text-white/55">
                Mengen pro Mahlzeit (¼ Tagesbedarf)
              </p>

              <ul className="mt-5 grid grid-cols-2 gap-2">
                {proteinSources.map((p) => {
                  const portion = Math.ceil((result.recommendedGrams / 4 / p.per100g) * 100);
                  return (
                    <li
                      key={p.name}
                      className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-3 py-2.5"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span className="shrink-0 text-lg" aria-hidden>
                          {p.image}
                        </span>
                        <span className="truncate text-[12px] text-white/80">{p.name}</span>
                      </div>
                      <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.1em] text-cs-accent">
                        ~{portion}g
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <FaqHint
              readingTime="7 Min Lesezeit"
              teaser="Wissenschaftliche Empfehlungen, Bioverfügbarkeit, Timing und Mythen."
            />
          </div>
        </div>

        <SaveActions
          rechnerName="Proteinbedarf"
          resultSummary={`${result.recommendedGrams} g Protein / Tag (${goals.find((g) => g.id === goal)?.label})`}
          onDownloadPdf={downloadPdfHandler}
        />

        <HistoryList
          entries={entries}
          onRemove={remove}
          onClear={clear}
          renderInputSummary={renderInputSummary}
        />
      </div>
    </section>
  );
}

function getProteinRecommendation(goal: ProteinInputs["goal"]): string {
  switch (goal) {
    case "muscle":
      return "Verteile deinen Bedarf auf 4-5 Mahlzeiten mit je 30-40 g Protein. Innerhalb von 2 Stunden nach dem Training eine eiweissreiche Mahlzeit. Ideale Quellen: Magerquark, Haehnchen, Eier, Whey.";
    case "cut":
      return "Im Kaloriendefizit ist Protein dein Schutz vor Muskelabbau. Halte den Faktor auf 1,8-2,4 g pro kg, kombiniere mit moderatem Krafttraining 3-4x pro Woche. Magerquark als Abendmahlzeit hilft gegen Heisshunger.";
    case "endurance":
      return "Auch fuer Ausdauersportler ist Protein wichtig fuer Regeneration. 1,4-1,7 g pro kg, verteilt auf den Tag. Nach langen Einheiten Kohlenhydrate + Protein im Verhaeltnis 3:1.";
    default:
      return "Verteile dein Protein auf 3-4 Mahlzeiten und setze auf Vollwert-Lebensmittel: Magerquark, Eier, Huelsenfruechte, Fisch. So erreichst du deinen Bedarf ohne Supplements.";
  }
}
