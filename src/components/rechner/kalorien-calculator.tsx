"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NumberStepper } from "./number-stepper";
import { FaqHint } from "./faq-hint";
import { HistoryList } from "./history-list";
import { SaveActions } from "./save-actions";
import { useCalculationHistory, type HistoryEntry } from "@/lib/rechner-history";
import { generateRechnerPdf, downloadPdf } from "@/lib/rechner-pdf";

type Activity = {
  id: "sedentary" | "light" | "moderate" | "active" | "very_active";
  label: string;
  desc: string;
  factor: number;
};

const activities: Activity[] = [
  { id: "sedentary", label: "Sitzend", desc: "Bürojob, kein Sport", factor: 1.2 },
  { id: "light", label: "Leicht aktiv", desc: "1–2x Training pro Woche", factor: 1.375 },
  { id: "moderate", label: "Aktiv", desc: "3–5x Training pro Woche", factor: 1.55 },
  { id: "active", label: "Sehr aktiv", desc: "6–7x Training pro Woche", factor: 1.725 },
  { id: "very_active", label: "Extrem aktiv", desc: "Profi / 2x täglich", factor: 1.9 },
];

type Goal = {
  id: "cut" | "maintain" | "bulk";
  label: string;
  desc: string;
  modifier: number;
};

const goals: Goal[] = [
  { id: "cut", label: "Abnehmen", desc: "−500 kcal Defizit", modifier: -500 },
  { id: "maintain", label: "Halten", desc: "Bedarf decken", modifier: 0 },
  { id: "bulk", label: "Aufbauen", desc: "+300 kcal Überschuss", modifier: 300 },
];

type KalorienInputs = {
  gender: "m" | "w";
  weight: number;
  height: number;
  age: number;
  activity: Activity["id"];
  goal: Goal["id"];
};

export function KalorienCalculator() {
  const [gender, setGender] = useState<"m" | "w">("m");
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(175);
  const [age, setAge] = useState(30);
  const [activity, setActivity] = useState<Activity["id"]>("moderate");
  const [goal, setGoal] = useState<Goal["id"]>("maintain");

  const result = useMemo(() => {
    // Mifflin-St Jeor
    const bmr =
      10 * weight + 6.25 * height - 5 * age + (gender === "m" ? 5 : -161);
    const activityFactor = activities.find((a) => a.id === activity)!.factor;
    const tdee = bmr * activityFactor;
    const goalModifier = goals.find((g) => g.id === goal)!.modifier;
    const target = tdee + goalModifier;

    const protein = Math.round(weight * 1.8);
    const fat = Math.round((target * 0.3) / 9);
    const carbs = Math.round((target - protein * 4 - fat * 9) / 4);

    return {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      target: Math.round(target),
      protein,
      fat,
      carbs,
    };
  }, [gender, weight, height, age, activity, goal]);

  const { entries, save, remove, clear, hydrated } = useCalculationHistory<KalorienInputs>("kalorienbedarf");
  const lastSavedRef = useRef<string>("");

  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => {
      const key = `${gender}-${weight}-${height}-${age}-${activity}-${goal}`;
      if (key === lastSavedRef.current) return;
      lastSavedRef.current = key;
      const goalLabel = goals.find((g) => g.id === goal)!.label;
      save(
        { gender, weight, height, age, activity, goal },
        {
          primary: result.target.toLocaleString("de-DE"),
          primaryUnit: "kcal/Tag",
          label: goalLabel,
        }
      );
    }, 1500);
    return () => clearTimeout(handle);
  }, [gender, weight, height, age, activity, goal, result.target, hydrated, save]);

  const downloadPdfHandler = () => {
    const goalLabel = goals.find((g) => g.id === goal)!.label;
    const activityDef = activities.find((a) => a.id === activity)!;

    const doc = generateRechnerPdf({
      title: "Dein Kalorienbedarf",
      subtitle: "Kalorien-Rechner · TDEE & Grundumsatz",
      resultLarge: result.target.toLocaleString("de-DE"),
      resultUnit: "kcal pro Tag",
      resultLabel: goalLabel,
      sections: [
        {
          title: "Deine Eingaben",
          rows: [
            { label: "Geschlecht", value: gender === "m" ? "Männlich" : "Weiblich" },
            { label: "Körpergewicht", value: `${weight.toString().replace(".", ",")} kg` },
            { label: "Körpergröße", value: `${height} cm` },
            { label: "Alter", value: `${age} Jahre` },
            { label: "Aktivitätslevel", value: `${activityDef.label} (${activityDef.desc})` },
            { label: "Ziel", value: goalLabel },
          ],
        },
        {
          title: "Detailauswertung",
          rows: [
            { label: "Grundumsatz (BMR)", value: `${result.bmr.toLocaleString("de-DE")} kcal` },
            { label: "Gesamtumsatz (TDEE)", value: `${result.tdee.toLocaleString("de-DE")} kcal` },
            { label: "Proteine empfohlen", value: `${result.protein} g (${result.protein * 4} kcal)` },
            { label: "Fette empfohlen", value: `${result.fat} g (${result.fat * 9} kcal)` },
            { label: "Kohlenhydrate empfohlen", value: `${result.carbs} g (${result.carbs * 4} kcal)` },
          ],
        },
      ],
      recommendation: getRecommendation(goal),
    });
    downloadPdf(doc, `casasports-kalorien-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const renderInputSummary = (entry: HistoryEntry<KalorienInputs>) => {
    const goalLabel = goals.find((g) => g.id === entry.inputs.goal)?.label ?? "";
    return `${entry.inputs.weight} kg · ${entry.inputs.height} cm · ${goalLabel}`;
  };

  return (
    <section className="bg-cs-black pb-24 pt-3 md:pb-32 md:pt-4">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-1 border border-white/10 bg-gradient-to-br from-white/[0.035] to-white/[0.005] lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Eingabe
            </p>
            <h2 className="mt-3 text-2xl font-black uppercase tracking-[-0.02em] text-white md:text-3xl">
              Deine Daten
            </h2>

            <div className="mt-7 space-y-6">
              <div>
                <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-white/60">
                  Geschlecht
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(["m", "w"] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGender(g)}
                      className={cn(
                        "border px-4 py-3.5 text-[13px] uppercase tracking-[0.15em] transition-all",
                        gender === g
                          ? "border-cs-accent bg-cs-accent text-white"
                          : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
                      )}
                    >
                      {g === "m" ? "Männlich" : "Weiblich"}
                    </button>
                  ))}
                </div>
              </div>

              <NumberStepper id="kal-weight" label="Gewicht" unit="kg" min={40} max={180} step={0.5} value={weight} onChange={setWeight} />
              <NumberStepper id="kal-height" label="Größe" unit="cm" min={140} max={220} value={height} onChange={setHeight} />
              <NumberStepper id="kal-age" label="Alter" unit="Jahre" min={14} max={90} value={age} onChange={setAge} />

              <div>
                <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-white/60">
                  Aktivitätslevel
                </p>
                <div className="space-y-2">
                  {activities.map((a) => (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => setActivity(a.id)}
                      className={cn(
                        "flex w-full items-baseline justify-between border px-4 py-3 text-left transition-all",
                        activity === a.id
                          ? "border-cs-accent bg-cs-accent/10"
                          : "border-white/15 hover:border-white/40"
                      )}
                    >
                      <span>
                        <span className={cn("block text-[13px] uppercase tracking-[0.1em]", activity === a.id ? "text-cs-accent" : "text-white")}>
                          {a.label}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-white/55">{a.desc}</span>
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.15em] text-white/40">
                        ×{a.factor.toString().replace(".", ",")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-white/60">
                  Dein Ziel
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {goals.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setGoal(g.id)}
                      className={cn(
                        "border px-3 py-3.5 transition-all",
                        goal === g.id
                          ? "border-cs-accent bg-cs-accent/10"
                          : "border-white/15 hover:border-white/40"
                      )}
                    >
                      <span className={cn("block text-[12px] uppercase tracking-[0.1em]", goal === g.id ? "text-cs-accent" : "text-white")}>
                        {g.label}
                      </span>
                      <span className="mt-1 block text-[10px] text-white/50">{g.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:sticky lg:top-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Dein Bedarf
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-6xl font-black tracking-[-0.04em] text-white md:text-7xl">
                {result.target.toLocaleString("de-DE")}
              </span>
              <span className="text-base uppercase tracking-[0.15em] text-white/50">
                kcal / Tag
              </span>
            </div>

            <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-white/60">
              {goals.find((g) => g.id === goal)!.label}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">Grundumsatz</p>
                <p className="mt-2 text-2xl font-black tracking-[-0.02em] text-white">
                  {result.bmr.toLocaleString("de-DE")}
                  <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">kcal</span>
                </p>
                <p className="mt-1 text-[11px] text-white/45">Wenn du den ganzen Tag im Bett liegst</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">Gesamtumsatz (TDEE)</p>
                <p className="mt-2 text-2xl font-black tracking-[-0.02em] text-white">
                  {result.tdee.toLocaleString("de-DE")}
                  <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">kcal</span>
                </p>
                <p className="mt-1 text-[11px] text-white/45">Inkl. deiner Aktivität</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Makronährstoff-Verteilung
              </p>
              <p className="mt-2 text-[13px] text-white/55">
                Empfehlung für dein Ziel
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { label: "Protein", value: result.protein, color: "bg-cs-accent", kcal: result.protein * 4 },
                  { label: "Fett", value: result.fat, color: "bg-cs-gold", kcal: result.fat * 9 },
                  { label: "Kohlenhydrate", value: result.carbs, color: "bg-emerald-400", kcal: result.carbs * 4 },
                ].map((m) => (
                  <div key={m.label} className="border border-white/10 bg-white/[0.02] p-4">
                    <div className={cn("h-1 w-full", m.color)} />
                    <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-white/55">
                      {m.label}
                    </p>
                    <p className="mt-2 text-xl font-black tracking-[-0.02em] text-white">
                      {m.value}
                      <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">g</span>
                    </p>
                    <p className="mt-1 text-[11px] text-white/40">{m.kcal} kcal</p>
                  </div>
                ))}
              </div>
            </div>

            <FaqHint
              readingTime="6 Min Lesezeit"
              teaser="Mifflin-St Jeor Formel, Aktivitätsfaktoren, Defizit & Überschuss erklärt."
            />
          </div>
        </div>

        <SaveActions
          rechnerName="Kalorienbedarf"
          resultSummary={`${result.target.toLocaleString("de-DE")} kcal/Tag (${goals.find((g) => g.id === goal)!.label})`}
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

function getRecommendation(goal: Goal["id"]): string {
  switch (goal) {
    case "cut":
      return "Halte 500 kcal Defizit etwa 8-12 Wochen, dann eine Diaet-Pause einplanen. Erhalte deine Muskelmasse mit Krafttraining 3-4x pro Woche und 1,8-2,4 g Protein pro kg Koerpergewicht.";
    case "bulk":
      return "Lean Bulk mit 300 kcal Ueberschuss, kombiniert mit progressivem Krafttraining. Realistisches Ziel: 1-2 kg Muskelmasse pro Monat ohne starken Fettzuwachs.";
    default:
      return "Erhalt deiner Form: ausgewogene Ernaehrung, 2-3 Trainings pro Woche. Bei uns kostenlose Koerperfett-Messung um deine Entwicklung zu tracken.";
  }
}
