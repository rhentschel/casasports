"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NumberStepper } from "./number-stepper";
import { FaqHint } from "./faq-hint";
import { HistoryList } from "./history-list";
import { SaveActions } from "./save-actions";
import { useCalculationHistory, type HistoryEntry } from "@/lib/rechner-history";
import { generateRechnerPdf, downloadPdf } from "@/lib/rechner-pdf";

const exercises = [
  { id: "squat", label: "Kniebeuge" },
  { id: "bench", label: "Bankdrücken" },
  { id: "deadlift", label: "Kreuzheben" },
  { id: "press", label: "Schultern" },
  { id: "row", label: "Rudern" },
  { id: "other", label: "Andere" },
] as const;

type OneRmInputs = {
  exercise: typeof exercises[number]["id"];
  weight: number;
  reps: number;
};

const percentageRows = [
  { pct: 100, reps: "1 Wdh", purpose: "Maximalkraft testen" },
  { pct: 95, reps: "2 Wdh", purpose: "Maximalkraft" },
  { pct: 90, reps: "3–4 Wdh", purpose: "Maximalkraft" },
  { pct: 85, reps: "5–6 Wdh", purpose: "Maximalkraft / Hypertrophie" },
  { pct: 80, reps: "7–8 Wdh", purpose: "Hypertrophie" },
  { pct: 75, reps: "9–10 Wdh", purpose: "Hypertrophie" },
  { pct: 70, reps: "10–12 Wdh", purpose: "Hypertrophie" },
  { pct: 65, reps: "12–15 Wdh", purpose: "Kraftausdauer" },
  { pct: 60, reps: "15+ Wdh", purpose: "Kraftausdauer" },
  { pct: 50, reps: "20+ Wdh", purpose: "Aufwärmen / Technik" },
];

export function OneRmCalculator() {
  const [exercise, setExercise] = useState<typeof exercises[number]["id"]>("bench");
  const [weight, setWeight] = useState(80);
  const [reps, setReps] = useState(5);

  const result = useMemo(() => {
    // Epley
    const epley = weight * (1 + reps / 30);
    // Brzycki (besser bei niedrigen Wdh)
    const brzycki = weight * (36 / (37 - reps));
    // Lombardi
    const lombardi = weight * Math.pow(reps, 0.1);

    const oneRm = Math.round((epley + brzycki + lombardi) / 3);

    return {
      oneRm,
      epley: Math.round(epley),
      brzycki: Math.round(brzycki),
      lombardi: Math.round(lombardi),
    };
  }, [weight, reps]);

  const { entries, save, remove, clear, hydrated } = useCalculationHistory<OneRmInputs>("1rm");
  const lastSavedRef = useRef<string>("");

  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => {
      const key = `${exercise}-${weight}-${reps}`;
      if (key === lastSavedRef.current) return;
      lastSavedRef.current = key;
      const exLabel = exercises.find((e) => e.id === exercise)!.label;
      save(
        { exercise, weight, reps },
        {
          primary: result.oneRm.toString(),
          primaryUnit: "kg",
          label: exLabel,
        }
      );
    }, 1500);
  }, [exercise, weight, reps, result.oneRm, hydrated, save]);

  const downloadPdfHandler = () => {
    const exLabel = exercises.find((e) => e.id === exercise)!.label;
    const top5Rows = [100, 90, 80, 70, 60].map((pct) => ({
      label: `${pct}% (${percentageRows.find((r) => r.pct === pct)?.reps})`,
      value: `${Math.round((result.oneRm * pct) / 100)} kg`,
    }));

    const doc = generateRechnerPdf({
      title: "Dein geschätztes 1-Rep-Max",
      subtitle: `1-RM-Rechner · ${exLabel}`,
      resultLarge: result.oneRm.toString(),
      resultUnit: "kg (1-RM)",
      resultLabel: exLabel,
      sections: [
        {
          title: "Deine Eingaben",
          rows: [
            { label: "Übung", value: exLabel },
            { label: "Trainingsgewicht", value: `${weight.toString().replace(".", ",")} kg` },
            { label: "Wiederholungen", value: `${reps} Wdh` },
          ],
        },
        {
          title: "Trainingszonen",
          rows: top5Rows,
        },
        {
          title: "Vergleich der Formeln",
          rows: [
            { label: "Epley-Formel", value: `${result.epley} kg` },
            { label: "Brzycki-Formel", value: `${result.brzycki} kg` },
            { label: "Lombardi-Formel", value: `${result.lombardi} kg` },
            { label: "Durchschnitt (verwendet)", value: `${result.oneRm} kg` },
          ],
        },
      ],
      recommendation:
        "Trainiere fuer Hypertrophie 8-12 Wdh bei 70-80%, fuer Maximalkraft 1-5 Wdh bei 85-95%. Wechsle alle 6-8 Wochen die Phase. Das 1-RM ist eine Schaetzung und nicht zum echten Test geeignet ohne Anleitung.",
    });
    downloadPdf(doc, `casasports-1rm-${exercise}-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const renderInputSummary = (entry: HistoryEntry<OneRmInputs>) => {
    const exLabel = exercises.find((e) => e.id === entry.inputs.exercise)?.label ?? "";
    return `${exLabel} · ${entry.inputs.weight} kg × ${entry.inputs.reps} Wdh`;
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
              Dein Satz
            </h2>

            <div className="mt-7 space-y-7">
              <div>
                <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-white/60">
                  Übung
                </p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {exercises.map((e) => (
                    <button
                      key={e.id}
                      type="button"
                      onClick={() => setExercise(e.id)}
                      className={cn(
                        "truncate border px-2 py-3 text-[11px] uppercase tracking-[0.08em] transition-all sm:text-[12px] sm:tracking-[0.1em]",
                        exercise === e.id
                          ? "border-cs-accent bg-cs-accent text-white"
                          : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"
                      )}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              <NumberStepper id="rm-weight" label="Gewicht im Satz" unit="kg" min={5} max={400} step={2.5} value={weight} onChange={setWeight} />
              <NumberStepper id="rm-reps" label="Geschaffte Wiederholungen" unit="Wdh" min={1} max={20} value={reps} onChange={setReps} />

              <p className="border-l-2 border-cs-accent/40 pl-4 text-[12px] leading-relaxed text-white/55">
                Tipp: Für die genaueste Schätzung 3–10 Wiederholungen mit sauberer
                Technik bis zur Muskelerschöpfung — kein Cheaten, keine Hilfe.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:sticky lg:top-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Geschätztes 1-RM
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-7xl font-black tracking-[-0.04em] text-white md:text-8xl">
                {result.oneRm}
              </span>
              <span className="text-base uppercase tracking-[0.15em] text-white/50">
                kg
              </span>
            </div>

            <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-white/60">
              {exercises.find((e) => e.id === exercise)!.label}
            </p>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Trainingszonen
              </p>
              <p className="mt-2 text-[13px] text-white/55">
                Empfohlene Gewichte für deine Trainingsziele
              </p>

              <div className="mt-5 overflow-hidden border border-white/10">
                <table className="w-full text-[13px]">
                  <thead className="border-b border-white/10 bg-white/[0.03]">
                    <tr>
                      <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-[0.15em] text-white/50">%</th>
                      <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-[0.15em] text-white/50">Gewicht</th>
                      <th className="px-3 py-2.5 text-left text-[10px] uppercase tracking-[0.15em] text-white/50">Wdh</th>
                      <th className="hidden px-3 py-2.5 text-left text-[10px] uppercase tracking-[0.15em] text-white/50 md:table-cell">Trainingsziel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {percentageRows.map((row) => {
                      const w = Math.round((result.oneRm * row.pct) / 100);
                      return (
                        <tr key={row.pct} className="border-b border-white/5 last:border-b-0 transition-colors hover:bg-white/[0.02]">
                          <td className="px-3 py-2.5 text-cs-accent font-medium">{row.pct}%</td>
                          <td className="px-3 py-2.5 font-bold text-white">{w} kg</td>
                          <td className="px-3 py-2.5 text-white/65">{row.reps}</td>
                          <td className="hidden px-3 py-2.5 text-white/55 md:table-cell">{row.purpose}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <FaqHint
              readingTime="5 Min Lesezeit"
              teaser="Epley vs. Brzycki, Trainingszonen, Genauigkeit der Schätzung."
            />
          </div>
        </div>

        <SaveActions
          rechnerName="1-Rep-Max"
          resultSummary={`${result.oneRm} kg 1-RM (${exercises.find((e) => e.id === exercise)!.label})`}
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
