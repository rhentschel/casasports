"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NumberStepper } from "./number-stepper";
import { FaqHint } from "./faq-hint";
import { HistoryList } from "./history-list";
import { SaveActions } from "./save-actions";
import { useCalculationHistory, type HistoryEntry } from "@/lib/rechner-history";
import { generateRechnerPdf, downloadPdf } from "@/lib/rechner-pdf";

const zones = [
  { id: 1, label: "Erholung", lo: 0.5, hi: 0.6, color: "bg-sky-400/80", text: "text-sky-300", purpose: "Aktive Regeneration, lockeres Aufwärmen" },
  { id: 2, label: "Fettverbrennung", lo: 0.6, hi: 0.7, color: "bg-emerald-400/80", text: "text-emerald-400", purpose: "Lange Einheiten, Grundlagenausdauer" },
  { id: 3, label: "Aerob", lo: 0.7, hi: 0.8, color: "bg-amber-400/80", text: "text-amber-400", purpose: "Tempo-Training, Cardio-Verbesserung" },
  { id: 4, label: "Schwelle", lo: 0.8, hi: 0.9, color: "bg-orange-400/80", text: "text-orange-400", purpose: "Laktatschwelle, Wettkampftempo" },
  { id: 5, label: "Maximal", lo: 0.9, hi: 1.0, color: "bg-red-500/80", text: "text-red-400", purpose: "HIIT-Intervalle, kurze Spitzen" },
] as const;

type PulsInputs = {
  age: number;
  resting: number;
  formula: "haskell" | "tanaka";
};

export function PulsCalculator() {
  const [age, setAge] = useState(30);
  const [resting, setResting] = useState(60);
  const [formula, setFormula] = useState<"haskell" | "tanaka">("tanaka");

  const result = useMemo(() => {
    const hrMax =
      formula === "haskell" ? 220 - age : Math.round(208 - 0.7 * age);
    const hrr = hrMax - resting;

    const zoneRanges = zones.map((z) => ({
      ...z,
      from: Math.round(resting + hrr * z.lo),
      to: Math.round(resting + hrr * z.hi),
    }));

    return { hrMax, hrr, zoneRanges };
  }, [age, resting, formula]);

  const { entries, save, remove, clear, hydrated } = useCalculationHistory<PulsInputs>("trainingspuls");
  const lastSavedRef = useRef<string>("");

  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => {
      const key = `${age}-${resting}-${formula}`;
      if (key === lastSavedRef.current) return;
      lastSavedRef.current = key;
      save(
        { age, resting, formula },
        {
          primary: result.hrMax.toString(),
          primaryUnit: "bpm max",
          label: formula === "haskell" ? "Haskell" : "Tanaka",
        }
      );
    }, 1500);
  }, [age, resting, formula, result.hrMax, hydrated, save]);

  const downloadPdfHandler = () => {
    const doc = generateRechnerPdf({
      title: "Deine Pulsbereiche",
      subtitle: "Trainingspuls-Rechner · Karvonen-Methode",
      resultLarge: result.hrMax.toString(),
      resultUnit: "bpm Maximalpuls",
      resultLabel: formula === "haskell" ? "Haskell-Formel" : "Tanaka-Formel",
      sections: [
        {
          title: "Deine Eingaben",
          rows: [
            { label: "Alter", value: `${age} Jahre` },
            { label: "Ruhepuls", value: `${resting} bpm` },
            { label: "Formel", value: formula === "haskell" ? "Haskell (220 − Alter)" : "Tanaka (208 − 0,7 × Alter)" },
            { label: "Berechneter Maximalpuls", value: `${result.hrMax} bpm` },
            { label: "Herzfrequenzreserve (HRR)", value: `${result.hrr} bpm` },
          ],
        },
        {
          title: "Trainingszonen",
          rows: result.zoneRanges.map((z) => ({
            label: `Zone ${z.id} — ${z.label}`,
            value: `${z.from} – ${z.to} bpm`,
          })),
        },
      ],
      recommendation:
        "80% der Trainingszeit in Zone 1-2 (Grundlagenausdauer), 20% in Zone 3-5 (Intensitaet). Dieses Polarized Training ist wissenschaftlich am effektivsten fuer alle Leistungsstufen.",
    });
    downloadPdf(doc, `casasports-puls-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const renderInputSummary = (entry: HistoryEntry<PulsInputs>) =>
    `${entry.inputs.age} J. · Ruhepuls ${entry.inputs.resting}`;

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

            <div className="mt-7 space-y-7">
              <NumberStepper id="puls-age" label="Alter" unit="Jahre" min={14} max={90} value={age} onChange={setAge} />
              <NumberStepper id="puls-resting" label="Ruhepuls" unit="bpm" min={40} max={100} value={resting} onChange={setResting} />

              <div>
                <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-white/60">
                  Berechnungs-Formel
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {([
                    { id: "tanaka" as const, label: "Tanaka", desc: "Genauer (empfohlen)" },
                    { id: "haskell" as const, label: "Haskell", desc: "Klassisch (220−Alter)" },
                  ]).map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFormula(f.id)}
                      className={cn(
                        "border px-3 py-3 text-left transition-all",
                        formula === f.id
                          ? "border-cs-accent bg-cs-accent/10"
                          : "border-white/15 hover:border-white/40"
                      )}
                    >
                      <span className={cn("block text-[13px] uppercase tracking-[0.1em]", formula === f.id ? "text-cs-accent" : "text-white")}>
                        {f.label}
                      </span>
                      <span className="mt-1 block text-[11px] text-white/55">{f.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <p className="border-l-2 border-cs-accent/40 pl-4 text-[12px] leading-relaxed text-white/55">
                Ruhepuls morgens vor dem Aufstehen messen. Sportler haben oft 50–60
                bpm, Untrainierte 70–80 bpm.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:sticky lg:top-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Maximalpuls
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-7xl font-black tracking-[-0.04em] text-white md:text-8xl">
                {result.hrMax}
              </span>
              <span className="text-base uppercase tracking-[0.15em] text-white/50">
                bpm
              </span>
            </div>

            <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-white/60">
              HRR (Reserve): {result.hrr} bpm
            </p>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Deine Trainingszonen
              </p>
              <p className="mt-2 text-[13px] text-white/55">
                Nach Karvonen-Methode (HRR × Intensität + Ruhepuls)
              </p>

              <ul className="mt-5 space-y-2">
                {result.zoneRanges.map((z) => (
                  <li
                    key={z.id}
                    className="border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="flex items-baseline gap-3">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                          Zone {z.id}
                        </span>
                        <span className={cn("text-[13px] font-bold uppercase tracking-[0.1em]", z.text)}>
                          {z.label}
                        </span>
                      </div>
                      <span className="text-[15px] font-bold tracking-[-0.02em] text-white">
                        {z.from} – {z.to}
                        <span className="ml-1 text-[10px] uppercase tracking-[0.15em] text-white/40">bpm</span>
                      </span>
                    </div>
                    <div className="mt-2.5 flex items-center gap-3">
                      <span className={cn("h-1 flex-1 max-w-[120px]", z.color)} />
                      <span className="text-[11px] text-white/55">{z.purpose}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <FaqHint
              readingTime="5 Min Lesezeit"
              teaser="Karvonen vs. Prozent-Methode, polarisiertes Training, Pulsmessung-Tipps."
            />
          </div>
        </div>

        <SaveActions
          rechnerName="Trainingspuls"
          resultSummary={`Maximalpuls ${result.hrMax} bpm, HRR ${result.hrr} bpm`}
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
