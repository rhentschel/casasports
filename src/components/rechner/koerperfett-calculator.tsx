"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NumberStepper } from "./number-stepper";
import { FaqHint } from "./faq-hint";
import { HistoryList } from "./history-list";
import { SaveActions } from "./save-actions";
import { useCalculationHistory, type HistoryEntry } from "@/lib/rechner-history";
import { generateRechnerPdf, downloadPdf } from "@/lib/rechner-pdf";

type KFAInputs = {
  gender: "m" | "w";
  height: number;
  neck: number;
  waist: number;
  hip: number;
};

type Category = {
  label: string;
  range: string;
  min: number;
  max: number;
  color: string;
  text: string;
};

const categoriesMen: Category[] = [
  { label: "Essentiell", range: "2 – 5 %", min: 0, max: 6, color: "bg-sky-300", text: "text-sky-300" },
  { label: "Athletisch", range: "6 – 13 %", min: 6, max: 14, color: "bg-emerald-400", text: "text-emerald-400" },
  { label: "Fit", range: "14 – 17 %", min: 14, max: 18, color: "bg-emerald-300", text: "text-emerald-300" },
  { label: "Akzeptabel", range: "18 – 24 %", min: 18, max: 25, color: "bg-amber-400", text: "text-amber-400" },
  { label: "Erhöht", range: "25 – 31 %", min: 25, max: 32, color: "bg-orange-400", text: "text-orange-400" },
  { label: "Adipös", range: "≥ 32 %", min: 32, max: 100, color: "bg-red-500", text: "text-red-400" },
];

const categoriesWomen: Category[] = [
  { label: "Essentiell", range: "10 – 13 %", min: 0, max: 14, color: "bg-sky-300", text: "text-sky-300" },
  { label: "Athletisch", range: "14 – 20 %", min: 14, max: 21, color: "bg-emerald-400", text: "text-emerald-400" },
  { label: "Fit", range: "21 – 24 %", min: 21, max: 25, color: "bg-emerald-300", text: "text-emerald-300" },
  { label: "Akzeptabel", range: "25 – 31 %", min: 25, max: 32, color: "bg-amber-400", text: "text-amber-400" },
  { label: "Erhöht", range: "32 – 38 %", min: 32, max: 39, color: "bg-orange-400", text: "text-orange-400" },
  { label: "Adipös", range: "≥ 39 %", min: 39, max: 100, color: "bg-red-500", text: "text-red-400" },
];

function getCategory(bf: number, gender: "m" | "w"): Category {
  const list = gender === "m" ? categoriesMen : categoriesWomen;
  return list.find((c) => bf >= c.min && bf < c.max) ?? list[list.length - 1];
}

export function KoerperfettCalculator() {
  const [gender, setGender] = useState<"m" | "w">("m");
  const [height, setHeight] = useState(175);
  const [neck, setNeck] = useState(38);
  const [waist, setWaist] = useState(85);
  const [hip, setHip] = useState(95);

  const result = useMemo(() => {
    let bf: number;
    if (gender === "m") {
      bf =
        495 /
          (1.0324 -
            0.19077 * Math.log10(waist - neck) +
            0.15456 * Math.log10(height)) -
        450;
    } else {
      bf =
        495 /
          (1.29579 -
            0.35004 * Math.log10(waist + hip - neck) +
            0.22100 * Math.log10(height)) -
        450;
    }
    bf = Math.max(2, Math.min(60, bf));

    const cat = getCategory(bf, gender);

    return { bf, cat };
  }, [gender, height, neck, waist, hip]);

  const categories = gender === "m" ? categoriesMen : categoriesWomen;
  const markerPercent = Math.min(100, Math.max(0, ((result.bf - 5) / 40) * 100));

  const { entries, save, remove, clear, hydrated } = useCalculationHistory<KFAInputs>("koerperfett");
  const lastSavedRef = useRef<string>("");

  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => {
      const key = `${gender}-${height}-${neck}-${waist}-${hip}`;
      if (key === lastSavedRef.current) return;
      lastSavedRef.current = key;
      save(
        { gender, height, neck, waist, hip },
        {
          primary: result.bf.toFixed(1).replace(".", ","),
          primaryUnit: "%",
          label: result.cat.label,
        }
      );
    }, 1500);
  }, [gender, height, neck, waist, hip, result.bf, result.cat.label, hydrated, save]);

  const downloadPdfHandler = () => {
    const doc = generateRechnerPdf({
      title: "Dein Körperfettanteil",
      subtitle: "Körperfett-Rechner · Navy-Methode",
      resultLarge: result.bf.toFixed(1).replace(".", ","),
      resultUnit: "% Körperfett",
      resultLabel: result.cat.label,
      sections: [
        {
          title: "Deine Eingaben",
          rows: [
            { label: "Geschlecht", value: gender === "m" ? "Männlich" : "Weiblich" },
            { label: "Körpergröße", value: `${height} cm` },
            { label: "Halsumfang", value: `${neck.toString().replace(".", ",")} cm` },
            { label: "Bauchumfang (Taille)", value: `${waist.toString().replace(".", ",")} cm` },
            ...(gender === "w" ? [{ label: "Hüftumfang", value: `${hip.toString().replace(".", ",")} cm` }] : []),
          ],
        },
        {
          title: "Klassifikation",
          rows: categories.map((c) => ({
            label: c.label,
            value: c.range,
          })),
        },
      ],
      recommendation:
        "Koerperfett laesst sich nur durch Defizit + Krafttraining nachhaltig reduzieren. Plane 0,5-1% Verlust pro Monat. Bei uns im Studio messen wir mit Bioimpedanz-Waage genauer als die Navy-Formel — kostenlos fuer Mitglieder.",
    });
    downloadPdf(doc, `casasports-koerperfett-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const renderInputSummary = (entry: HistoryEntry<KFAInputs>) =>
    `${entry.inputs.gender === "m" ? "♂" : "♀"} · ${entry.inputs.waist} cm Taille`;

  return (
    <section className="bg-cs-black pb-24 pt-3 md:pb-32 md:pt-4">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-1 border border-white/10 bg-gradient-to-br from-white/[0.035] to-white/[0.005] lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Eingabe
            </p>
            <h2 className="mt-3 text-2xl font-black uppercase tracking-[-0.02em] text-white md:text-3xl">
              Deine Maße
            </h2>

            <div className="mt-7 space-y-7">
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

              <NumberStepper id="kfa-height" label="Körpergröße" unit="cm" min={140} max={220} value={height} onChange={setHeight} />
              <NumberStepper id="kfa-neck" label="Halsumfang" unit="cm" min={25} max={60} step={0.5} value={neck} onChange={setNeck} />
              <NumberStepper id="kfa-waist" label="Bauchumfang (Taille)" unit="cm" min={50} max={150} step={0.5} value={waist} onChange={setWaist} />
              {gender === "w" && (
                <NumberStepper id="kfa-hip" label="Hüftumfang" unit="cm" min={70} max={150} step={0.5} value={hip} onChange={setHip} />
              )}

              <div className="border-l-2 border-cs-accent/40 pl-4 text-[12px] leading-relaxed text-white/55">
                <p className="font-medium text-white/75">So misst du richtig:</p>
                <ul className="mt-2 space-y-1.5">
                  <li>
                    <span className="text-white/70">Hals:</span> direkt unter dem Kehlkopf
                  </li>
                  <li>
                    <span className="text-white/70">Taille:</span> schmalste Stelle am Bauch (oft auf Bauchnabelhöhe)
                  </li>
                  {gender === "w" && (
                    <li>
                      <span className="text-white/70">Hüfte:</span> breiteste Stelle am Po
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:sticky lg:top-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Dein Körperfettanteil
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-7xl font-black tracking-[-0.04em] text-white md:text-8xl">
                {result.bf.toFixed(1).replace(".", ",")}
              </span>
              <span className="text-base uppercase tracking-[0.15em] text-white/50">
                %
              </span>
            </div>

            <p className={cn("mt-3 text-[13px] uppercase tracking-[0.2em]", result.cat.text)}>
              {result.cat.label}
            </p>

            <div className="mt-10">
              <div className="relative h-3 w-full overflow-hidden bg-white/[0.05]">
                <div className="absolute inset-0 flex">
                  {categories.map((c) => {
                    const start = Math.max(5, c.min);
                    const end = Math.min(45, c.max);
                    const w = ((end - start) / 40) * 100;
                    return (
                      <div
                        key={c.label}
                        className={cn("h-full opacity-80", c.color)}
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
              <div className="mt-2.5 flex justify-between text-[10px] uppercase tracking-[0.15em] text-white/40">
                <span>5%</span>
                <span>15%</span>
                <span>25%</span>
                <span>35%</span>
                <span>45%</span>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Klassifikation für {gender === "m" ? "Männer" : "Frauen"}
              </p>
              <ul className="mt-5 space-y-1.5 text-[13px]">
                {categories.map((c) => (
                  <li
                    key={c.label}
                    className={cn(
                      "flex items-center justify-between border bg-white/[0.02] px-3 py-2.5",
                      result.cat.label === c.label
                        ? "border-cs-accent/50"
                        : "border-white/[0.06]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn("h-2 w-2 shrink-0", c.color)} />
                      <span className={cn(result.cat.label === c.label ? "text-white" : "text-white/65")}>
                        {c.label}
                      </span>
                    </div>
                    <span className="text-[12px] text-white/55">{c.range}</span>
                  </li>
                ))}
              </ul>
            </div>

            <FaqHint
              readingTime="5 Min Lesezeit"
              teaser="Navy-Formel, Genauigkeit, Vergleich mit anderen Methoden, Idealwerte."
            />
          </div>
        </div>

        <SaveActions
          rechnerName="Körperfett"
          resultSummary={`${result.bf.toFixed(1).replace(".", ",")} % KFA (${result.cat.label})`}
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
