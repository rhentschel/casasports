"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NumberStepper } from "./number-stepper";
import { FaqHint } from "./faq-hint";
import { HistoryList } from "./history-list";
import { SaveActions } from "./save-actions";
import { useCalculationHistory, type HistoryEntry } from "@/lib/rechner-history";
import { generateRechnerPdf, downloadPdf } from "@/lib/rechner-pdf";

type BmiInputs = {
  height: number;
  weight: number;
  age: number;
  gender: "m" | "w";
};

type Category = {
  label: string;
  range: string;
  min: number;
  max: number;
  color: string;
  bg: string;
};

const categories: Category[] = [
  { label: "Untergewicht", range: "< 18,5", min: 0, max: 18.5, color: "text-sky-300", bg: "bg-sky-300" },
  { label: "Normalgewicht", range: "18,5 – 24,9", min: 18.5, max: 25, color: "text-emerald-400", bg: "bg-emerald-400" },
  { label: "Übergewicht", range: "25 – 29,9", min: 25, max: 30, color: "text-amber-400", bg: "bg-amber-400" },
  { label: "Adipositas I", range: "30 – 34,9", min: 30, max: 35, color: "text-orange-400", bg: "bg-orange-400" },
  { label: "Adipositas II", range: "35 – 39,9", min: 35, max: 40, color: "text-red-400", bg: "bg-red-400" },
  { label: "Adipositas III", range: "≥ 40", min: 40, max: 100, color: "text-red-500", bg: "bg-red-500" },
];

function getCategory(bmi: number): Category {
  return categories.find((c) => bmi >= c.min && bmi < c.max) ?? categories[categories.length - 1];
}

export function BmiCalculator() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState<"m" | "w">("m");

  const result = useMemo(() => {
    const meters = height / 100;
    const bmi = weight / (meters * meters);
    const cat = getCategory(bmi);

    const lower = 18.5 * meters * meters;
    const upper = 24.9 * meters * meters;
    const idealWeight = 22 * meters * meters;
    const diff = weight - idealWeight;

    return { bmi, cat, lower, upper, idealWeight, diff };
  }, [height, weight]);

  const markerPercent = Math.min(100, Math.max(0, ((result.bmi - 15) / (45 - 15)) * 100));

  const { entries, save, remove, clear, hydrated } = useCalculationHistory<BmiInputs>("bmi");
  const lastSavedRef = useRef<string>("");

  // Auto-save mit Debounce (1.5s nach letzter Aenderung)
  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => {
      const key = `${height}-${weight}-${age}-${gender}`;
      if (key === lastSavedRef.current) return;
      lastSavedRef.current = key;
      save(
        { height, weight, age, gender },
        {
          primary: result.bmi.toFixed(1).replace(".", ","),
          primaryUnit: "kg/m²",
          label: result.cat.label,
        }
      );
    }, 1500);
    return () => clearTimeout(handle);
  }, [height, weight, age, gender, result.bmi, result.cat.label, hydrated, save]);

  const downloadPdfHandler = () => {
    const doc = generateRechnerPdf({
      title: "Dein BMI-Ergebnis",
      subtitle: "BMI-Rechner · Body-Mass-Index",
      resultLarge: result.bmi.toFixed(1).replace(".", ","),
      resultUnit: "kg/m²",
      resultLabel: result.cat.label,
      sections: [
        {
          title: "Deine Eingaben",
          rows: [
            { label: "Geschlecht", value: gender === "m" ? "Männlich" : "Weiblich" },
            { label: "Größe", value: `${height} cm` },
            { label: "Gewicht", value: `${weight.toString().replace(".", ",")} kg` },
            { label: "Alter", value: `${age} Jahre` },
          ],
        },
        {
          title: "Detailauswertung",
          rows: [
            {
              label: "Normalbereich für deine Größe",
              value: `${result.lower.toFixed(1).replace(".", ",")} – ${result.upper.toFixed(1).replace(".", ",")} kg`,
            },
            {
              label: "Idealgewicht (BMI 22)",
              value: `${result.idealWeight.toFixed(1).replace(".", ",")} kg`,
            },
            {
              label: "Abweichung vom Idealgewicht",
              value: `${result.diff > 0 ? "+" : ""}${result.diff.toFixed(1).replace(".", ",")} kg`,
            },
          ],
        },
      ],
      recommendation: getRecommendation(result.cat.label),
    });
    downloadPdf(doc, `casasports-bmi-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const renderInputSummary = (entry: HistoryEntry<BmiInputs>) =>
    `${entry.inputs.height} cm · ${entry.inputs.weight.toString().replace(".", ",")} kg · ${entry.inputs.age} J.`;

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
                        "border px-4 py-3.5 text-[13px] uppercase tracking-[0.15em] transition-all duration-300",
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

              <NumberStepper
                id="bmi-height"
                label="Größe"
                unit="cm"
                min={140}
                max={220}
                value={height}
                onChange={setHeight}
              />

              <NumberStepper
                id="bmi-weight"
                label="Gewicht"
                unit="kg"
                min={40}
                max={180}
                step={0.5}
                value={weight}
                onChange={setWeight}
              />

              <NumberStepper
                id="bmi-age"
                label="Alter"
                unit="Jahre"
                min={14}
                max={90}
                value={age}
                onChange={setAge}
              />
            </div>
          </div>

          {/* Ergebnis-Bereich */}
          <div className="p-8 md:p-10 lg:sticky lg:top-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Dein Ergebnis
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-7xl font-black tracking-[-0.04em] text-white md:text-8xl">
                {result.bmi.toFixed(1).replace(".", ",")}
              </span>
              <span className="text-base uppercase tracking-[0.15em] text-white/50">
                kg/m²
              </span>
            </div>

            <p className={cn("mt-3 text-[13px] uppercase tracking-[0.2em]", result.cat.color)}>
              {result.cat.label}
            </p>

            <div className="mt-10">
              <div className="relative h-3 w-full overflow-hidden bg-white/[0.05]">
                <div className="absolute inset-0 flex">
                  {categories.map((c) => {
                    const start = Math.max(15, c.min);
                    const end = Math.min(45, c.max);
                    const w = ((end - start) / (45 - 15)) * 100;
                    return (
                      <div
                        key={c.label}
                        className={cn("h-full opacity-80", c.bg)}
                        style={{ width: `${w}%` }}
                      />
                    );
                  })}
                </div>
                <div
                  className="absolute top-1/2 h-7 w-[3px] -translate-y-1/2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-500"
                  style={{ left: `${markerPercent}%` }}
                />
              </div>
              <div className="mt-2.5 grid grid-cols-6 text-[10px] uppercase tracking-[0.15em] text-white/40">
                <span>15</span>
                <span className="text-center">18,5</span>
                <span className="text-center">25</span>
                <span className="text-center">30</span>
                <span className="text-center">35</span>
                <span className="text-right">40+</span>
              </div>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.15em] text-white/50">
                  Normalbereich
                </dt>
                <dd className="mt-2 text-base text-white">
                  {result.lower.toFixed(1).replace(".", ",")} – {result.upper.toFixed(1).replace(".", ",")} kg
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.15em] text-white/50">
                  Idealgewicht (BMI 22)
                </dt>
                <dd className="mt-2 text-base text-white">
                  {result.idealWeight.toFixed(1).replace(".", ",")} kg
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-[11px] uppercase tracking-[0.15em] text-white/50">
                  Abweichung
                </dt>
                <dd
                  className={cn(
                    "mt-2 text-base",
                    Math.abs(result.diff) < 2 ? "text-emerald-400" : "text-white"
                  )}
                >
                  {result.diff > 0 ? "+" : ""}
                  {result.diff.toFixed(1).replace(".", ",")} kg vom Idealgewicht
                </dd>
              </div>
            </dl>

            <FaqHint
              readingTime="6 Min Lesezeit"
              teaser="Wissenschaftlicher Hintergrund, BMI-Tabelle, Grenzen und Empfehlungen."
            />
          </div>
        </div>

        <SaveActions
          rechnerName="BMI"
          resultSummary={`BMI ${result.bmi.toFixed(1).replace(".", ",")} kg/m² (${result.cat.label}) — ${height} cm, ${weight} kg`}
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

function getRecommendation(category: string): string {
  switch (category) {
    case "Untergewicht":
      return "Fokus auf Muskelaufbau mit Krafttraining und Kalorienueberschuss von 300-500 kcal/Tag. 1,8-2,2 g Protein pro kg Koerpergewicht. Komm vorbei fuer ein Coaching-Gespraech.";
    case "Normalgewicht":
      return "Erhalt deiner Form: Mischtraining aus Kraft und Ausdauer, 2-3 Trainings pro Woche. Bei uns kostenlose Koerperfett-Messung fuer ein praeziseres Bild.";
    case "Übergewicht":
      return "Realistisches Ziel: 0,5-1 kg Fettverlust pro Woche. Moderates Defizit (300-500 kcal), 3-4 Trainings, Kraft + Cardio kombiniert. Das 12-Wochen-Programm 'Mein Neues Ich' bringt dich strukturiert ans Ziel.";
    default:
      return "Wir empfehlen erst aerztliche Abklaerung, dann strukturierte Trainingstherapie. Einstieg ueber gelenkschonende Aktivitaeten wie Cycling. Sprich uns an, wir entwickeln zusammen einen Plan.";
  }
}
