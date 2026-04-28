"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NumberStepper } from "./number-stepper";
import { FaqHint } from "./faq-hint";
import { HistoryList } from "./history-list";
import { SaveActions } from "./save-actions";
import { useCalculationHistory, type HistoryEntry } from "@/lib/rechner-history";
import { generateRechnerPdf, downloadPdf } from "@/lib/rechner-pdf";

const climates = [
  { id: "normal", label: "Normal", desc: "15–25 °C", modifier: 0 },
  { id: "warm", label: "Warm", desc: "25–32 °C", modifier: 500 },
  { id: "hot", label: "Sehr heiß", desc: "über 32 °C", modifier: 1000 },
] as const;

type WasserInputs = {
  weight: number;
  trainingMinutes: number;
  climate: typeof climates[number]["id"];
};

export function WasserCalculator() {
  const [weight, setWeight] = useState(75);
  const [trainingMinutes, setTrainingMinutes] = useState(60);
  const [climate, setClimate] = useState<typeof climates[number]["id"]>("normal");

  const result = useMemo(() => {
    const baseMl = weight * 35;
    const trainingMl = (trainingMinutes / 60) * 750;
    const climateMl = climates.find((c) => c.id === climate)!.modifier;
    const totalMl = baseMl + trainingMl + climateMl;
    const totalLiters = totalMl / 1000;

    const glasses = Math.round(totalMl / 250);

    return {
      baseMl: Math.round(baseMl),
      trainingMl: Math.round(trainingMl),
      climateMl,
      totalMl: Math.round(totalMl),
      totalLiters,
      glasses,
    };
  }, [weight, trainingMinutes, climate]);

  const { entries, save, remove, clear, hydrated } = useCalculationHistory<WasserInputs>("wasserbedarf");
  const lastSavedRef = useRef<string>("");

  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => {
      const key = `${weight}-${trainingMinutes}-${climate}`;
      if (key === lastSavedRef.current) return;
      lastSavedRef.current = key;
      save(
        { weight, trainingMinutes, climate },
        {
          primary: result.totalLiters.toFixed(1).replace(".", ","),
          primaryUnit: "Liter",
          label: climates.find((c) => c.id === climate)!.label,
        }
      );
    }, 1500);
  }, [weight, trainingMinutes, climate, result.totalLiters, hydrated, save]);

  const downloadPdfHandler = () => {
    const climateDef = climates.find((c) => c.id === climate)!;

    const doc = generateRechnerPdf({
      title: "Dein täglicher Wasserbedarf",
      subtitle: "Wasser-Rechner · Hydration",
      resultLarge: result.totalLiters.toFixed(1).replace(".", ","),
      resultUnit: "Liter pro Tag",
      resultLabel: climateDef.label,
      sections: [
        {
          title: "Deine Eingaben",
          rows: [
            { label: "Körpergewicht", value: `${weight.toString().replace(".", ",")} kg` },
            { label: "Tägliches Training", value: `${trainingMinutes} Minuten` },
            { label: "Klima / Wetter", value: `${climateDef.label} (${climateDef.desc})` },
          ],
        },
        {
          title: "Aufschlüsselung",
          rows: [
            { label: "Grundbedarf (35 ml × kg)", value: `${result.baseMl.toLocaleString("de-DE")} ml` },
            { label: "Training (750 ml/Stunde)", value: `${result.trainingMl.toLocaleString("de-DE")} ml` },
            { label: "Klima-Aufschlag", value: `${result.climateMl.toLocaleString("de-DE")} ml` },
            { label: "Gesamt", value: `${result.totalMl.toLocaleString("de-DE")} ml` },
            { label: "Entspricht etwa", value: `${result.glasses} Gläser à 250 ml` },
          ],
        },
      ],
      recommendation:
        "Verteile dein Wasser ueber den ganzen Tag, nicht alles auf einmal. Trink ein Glas direkt nach dem Aufwachen, eines vor jeder Mahlzeit, und 500 ml vor dem Training. Bei intensivem Schwitzen Elektrolyte ergaenzen.",
    });
    downloadPdf(doc, `casasports-wasser-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const renderInputSummary = (entry: HistoryEntry<WasserInputs>) => {
    const climateLabel = climates.find((c) => c.id === entry.inputs.climate)?.label ?? "";
    return `${entry.inputs.weight} kg · ${entry.inputs.trainingMinutes} min · ${climateLabel}`;
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

            <div className="mt-7 space-y-7">
              <NumberStepper id="wasser-weight" label="Gewicht" unit="kg" min={40} max={150} step={0.5} value={weight} onChange={setWeight} />
              <NumberStepper id="wasser-training" label="Training pro Tag" unit="min" min={0} max={240} step={15} value={trainingMinutes} onChange={setTrainingMinutes} />

              <div>
                <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-white/60">
                  Klima / Wetter
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {climates.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setClimate(c.id)}
                      className={cn(
                        "border px-3 py-3.5 transition-all",
                        climate === c.id
                          ? "border-cs-accent bg-cs-accent/10"
                          : "border-white/15 hover:border-white/40"
                      )}
                    >
                      <span className={cn("block text-[13px] uppercase tracking-[0.1em]", climate === c.id ? "text-cs-accent" : "text-white")}>
                        {c.label}
                      </span>
                      <span className="mt-1 block text-[11px] text-white/50">{c.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <p className="border-l-2 border-cs-accent/40 pl-4 text-[12px] leading-relaxed text-white/55">
                Kaffee und Tee zählen mit (entgegen dem Mythos), Alkohol nicht.
                Wasserreiche Lebensmittel wie Obst und Gemüse decken etwa 20% des
                Bedarfs.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:sticky lg:top-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Dein Bedarf
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-7xl font-black tracking-[-0.04em] text-white md:text-8xl">
                {result.totalLiters.toFixed(1).replace(".", ",")}
              </span>
              <span className="text-base uppercase tracking-[0.15em] text-white/50">
                Liter
              </span>
            </div>

            <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-white/60">
              ≈ {result.glasses} Gläser à 250 ml
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">Grundbedarf</p>
                <p className="mt-2 text-xl font-black tracking-[-0.02em] text-white">
                  {(result.baseMl / 1000).toFixed(1).replace(".", ",")}
                  <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">L</span>
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">Training</p>
                <p className="mt-2 text-xl font-black tracking-[-0.02em] text-white">
                  +{(result.trainingMl / 1000).toFixed(1).replace(".", ",")}
                  <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">L</span>
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">Klima</p>
                <p className="mt-2 text-xl font-black tracking-[-0.02em] text-white">
                  +{(result.climateMl / 1000).toFixed(1).replace(".", ",")}
                  <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">L</span>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Verteilung über den Tag
              </p>
              <p className="mt-2 text-[13px] text-white/55">
                So bringst du deine {result.totalLiters.toFixed(1).replace(".", ",")} L unter
              </p>
              <ul className="mt-5 space-y-2 text-[13px]">
                {[
                  { time: "Nach dem Aufwachen", amount: 0.5 },
                  { time: "Vormittag", amount: 0.5 },
                  { time: "Mittags", amount: 0.5 },
                  { time: "Nachmittag", amount: 0.5 },
                  { time: "Vor dem Training", amount: 0.5 },
                  { time: "Während / nach Training", amount: result.totalLiters - 2.5 > 0 ? result.totalLiters - 2.5 : 0 },
                ]
                  .filter((e) => e.amount > 0)
                  .map((e) => (
                    <li
                      key={e.time}
                      className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-3.5 py-2.5"
                    >
                      <span className="text-white/70">{e.time}</span>
                      <span className="text-cs-accent font-medium">
                        {e.amount.toFixed(1).replace(".", ",")} L
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            <FaqHint
              readingTime="4 Min Lesezeit"
              teaser="Wassermangel-Symptome, Elektrolyte, Mythen über Trinken."
            />
          </div>
        </div>

        <SaveActions
          rechnerName="Wasserbedarf"
          resultSummary={`${result.totalLiters.toFixed(1).replace(".", ",")} L Wasser pro Tag (${climates.find((c) => c.id === climate)!.label})`}
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
