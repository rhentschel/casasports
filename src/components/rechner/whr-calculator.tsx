"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NumberStepper } from "./number-stepper";
import { FaqHint } from "./faq-hint";
import { HistoryList } from "./history-list";
import { SaveActions } from "./save-actions";
import { useCalculationHistory, type HistoryEntry } from "@/lib/rechner-history";
import { generateRechnerPdf, downloadPdf } from "@/lib/rechner-pdf";

type WhrInputs = {
  gender: "m" | "w";
  waist: number;
  hip: number;
};

type Risk = {
  label: string;
  desc: string;
  color: string;
  text: string;
};

function getRisk(whr: number, gender: "m" | "w"): Risk {
  if (gender === "m") {
    if (whr < 0.9) return { label: "Niedriges Risiko", desc: "Optimal", color: "bg-emerald-400", text: "text-emerald-400" };
    if (whr < 1.0) return { label: "Erhöhtes Risiko", desc: "Aufmerksamkeit", color: "bg-amber-400", text: "text-amber-400" };
    return { label: "Hohes Risiko", desc: "Handlungsbedarf", color: "bg-red-500", text: "text-red-400" };
  }
  if (whr < 0.8) return { label: "Niedriges Risiko", desc: "Optimal", color: "bg-emerald-400", text: "text-emerald-400" };
  if (whr < 0.85) return { label: "Erhöhtes Risiko", desc: "Aufmerksamkeit", color: "bg-amber-400", text: "text-amber-400" };
  return { label: "Hohes Risiko", desc: "Handlungsbedarf", color: "bg-red-500", text: "text-red-400" };
}

export function WhrCalculator() {
  const [gender, setGender] = useState<"m" | "w">("m");
  const [waist, setWaist] = useState(85);
  const [hip, setHip] = useState(95);

  const result = useMemo(() => {
    const whr = waist / hip;
    const risk = getRisk(whr, gender);
    return { whr, risk };
  }, [waist, hip, gender]);

  const { entries, save, remove, clear, hydrated } = useCalculationHistory<WhrInputs>("taille-huefte");
  const lastSavedRef = useRef<string>("");

  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => {
      const key = `${gender}-${waist}-${hip}`;
      if (key === lastSavedRef.current) return;
      lastSavedRef.current = key;
      save(
        { gender, waist, hip },
        {
          primary: result.whr.toFixed(2).replace(".", ","),
          label: result.risk.label,
        }
      );
    }, 1500);
  }, [gender, waist, hip, result.whr, result.risk.label, hydrated, save]);

  const downloadPdfHandler = () => {
    const doc = generateRechnerPdf({
      title: "Dein Taille-Hüfte-Verhältnis",
      subtitle: "WHR-Rechner · Waist-to-Hip-Ratio",
      resultLarge: result.whr.toFixed(2).replace(".", ","),
      resultUnit: "Verhältnis",
      resultLabel: result.risk.label,
      sections: [
        {
          title: "Deine Eingaben",
          rows: [
            { label: "Geschlecht", value: gender === "m" ? "Männlich" : "Weiblich" },
            { label: "Taillenumfang", value: `${waist.toString().replace(".", ",")} cm` },
            { label: "Hüftumfang", value: `${hip.toString().replace(".", ",")} cm` },
          ],
        },
        {
          title: "Klassifikation nach WHO",
          rows:
            gender === "m"
              ? [
                  { label: "Niedriges Risiko", value: "< 0,90" },
                  { label: "Erhöhtes Risiko", value: "0,90 – 0,99" },
                  { label: "Hohes Risiko", value: "≥ 1,00" },
                ]
              : [
                  { label: "Niedriges Risiko", value: "< 0,80" },
                  { label: "Erhöhtes Risiko", value: "0,80 – 0,84" },
                  { label: "Hohes Risiko", value: "≥ 0,85" },
                ],
        },
      ],
      recommendation:
        "Ein hoher WHR-Wert deutet auf viszerales Bauchfett hin — das gefaehrlichste Fettgewebe. Krafttraining + moderates Cardio + Kaloriendefizit reduzieren es nachhaltig. Spotreduktion durch Bauchuebungen funktioniert nicht.",
    });
    downloadPdf(doc, `casasports-whr-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const renderInputSummary = (entry: HistoryEntry<WhrInputs>) =>
    `${entry.inputs.waist} / ${entry.inputs.hip} cm (${entry.inputs.gender === "m" ? "♂" : "♀"})`;

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

              <NumberStepper id="whr-waist" label="Taillenumfang" unit="cm" min={50} max={150} step={0.5} value={waist} onChange={setWaist} />
              <NumberStepper id="whr-hip" label="Hüftumfang" unit="cm" min={70} max={150} step={0.5} value={hip} onChange={setHip} />

              <div className="border-l-2 border-cs-accent/40 pl-4 text-[12px] leading-relaxed text-white/55">
                <p className="font-medium text-white/75">So misst du richtig:</p>
                <ul className="mt-2 space-y-1.5">
                  <li>
                    <span className="text-white/70">Taille:</span> Schmalste Stelle, oft auf Bauchnabelhöhe — nicht einziehen!
                  </li>
                  <li>
                    <span className="text-white/70">Hüfte:</span> Breiteste Stelle am Po
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:sticky lg:top-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Dein Verhältnis
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-7xl font-black tracking-[-0.04em] text-white md:text-8xl">
                {result.whr.toFixed(2).replace(".", ",")}
              </span>
            </div>

            <p className={cn("mt-3 text-[13px] uppercase tracking-[0.2em]", result.risk.text)}>
              {result.risk.label}
            </p>
            <p className="mt-1 text-[12px] text-white/45">{result.risk.desc}</p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Klassifikation für {gender === "m" ? "Männer" : "Frauen"}
              </p>

              <ul className="mt-5 space-y-1.5 text-[13px]">
                {(gender === "m"
                  ? [
                      { range: "< 0,90", label: "Niedriges Risiko", color: "bg-emerald-400" },
                      { range: "0,90 – 0,99", label: "Erhöhtes Risiko", color: "bg-amber-400" },
                      { range: "≥ 1,00", label: "Hohes Risiko", color: "bg-red-500" },
                    ]
                  : [
                      { range: "< 0,80", label: "Niedriges Risiko", color: "bg-emerald-400" },
                      { range: "0,80 – 0,84", label: "Erhöhtes Risiko", color: "bg-amber-400" },
                      { range: "≥ 0,85", label: "Hohes Risiko", color: "bg-red-500" },
                    ]
                ).map((c) => (
                  <li
                    key={c.label}
                    className={cn(
                      "flex items-center justify-between border bg-white/[0.02] px-3 py-2.5",
                      result.risk.label === c.label
                        ? "border-cs-accent/50"
                        : "border-white/[0.06]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn("h-2 w-2 shrink-0", c.color)} />
                      <span className={cn(result.risk.label === c.label ? "text-white" : "text-white/65")}>
                        {c.label}
                      </span>
                    </div>
                    <span className="text-[12px] text-white/55">{c.range}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Zusätzlich: Bauchumfang allein
              </p>
              <p className="mt-2 text-[13px] text-white/55">
                Auch unabhängig vom WHR ist der reine Taillenumfang aussagekräftig
              </p>
              <ul className="mt-4 space-y-1.5 text-[13px]">
                <li className="flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                  <span className="text-white/65">Männer · gesund</span>
                  <span className="text-emerald-400">{"< 94 cm"}</span>
                </li>
                <li className="flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                  <span className="text-white/65">Männer · Risiko</span>
                  <span className="text-red-400">≥ 102 cm</span>
                </li>
                <li className="flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                  <span className="text-white/65">Frauen · gesund</span>
                  <span className="text-emerald-400">{"< 80 cm"}</span>
                </li>
                <li className="flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                  <span className="text-white/65">Frauen · Risiko</span>
                  <span className="text-red-400">≥ 88 cm</span>
                </li>
              </ul>
            </div>

            <FaqHint
              readingTime="4 Min Lesezeit"
              teaser="Was viszerales Fett ist, warum WHR aussagekräftiger als der BMI ist."
            />
          </div>
        </div>

        <SaveActions
          rechnerName="Taille-Hüfte-Verhältnis"
          resultSummary={`WHR ${result.whr.toFixed(2).replace(".", ",")} (${result.risk.label})`}
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
