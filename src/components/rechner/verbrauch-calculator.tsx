"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { NumberStepper } from "./number-stepper";
import { FaqHint } from "./faq-hint";
import { HistoryList } from "./history-list";
import { SaveActions } from "./save-actions";
import { useCalculationHistory, type HistoryEntry } from "@/lib/rechner-history";
import { generateRechnerPdf, downloadPdf } from "@/lib/rechner-pdf";

const activities = [
  { id: "krafttraining", label: "Krafttraining", met: 6.0, group: "studio" },
  { id: "zirkel", label: "Zirkeltraining", met: 8.0, group: "studio" },
  { id: "power", label: "Power Training", met: 8.5, group: "studio" },
  { id: "functional", label: "Functional", met: 8.0, group: "studio" },
  { id: "personal", label: "Personal Training", met: 7.5, group: "studio" },
  { id: "cycling", label: "Cycling / Spinning", met: 8.5, group: "cardio" },
  { id: "laufband", label: "Laufband moderat", met: 7.0, group: "cardio" },
  { id: "laufband-intensiv", label: "Laufband intensiv", met: 11.0, group: "cardio" },
  { id: "hometrainer", label: "Ergometer", met: 6.5, group: "cardio" },
  { id: "stepper", label: "Crosstrainer", met: 7.0, group: "cardio" },
  { id: "rudern", label: "Rudergerät", met: 7.0, group: "cardio" },
  { id: "schwimmen", label: "Schwimmen", met: 8.0, group: "cardio" },
  { id: "yoga", label: "Yoga / Stretching", met: 3.0, group: "wellness" },
  { id: "sauna", label: "Sauna", met: 1.5, group: "wellness" },
  { id: "wellness", label: "Wellness gesamt", met: 2.0, group: "wellness" },
  { id: "spazieren", label: "Spazieren", met: 3.5, group: "alltag" },
  { id: "wandern", label: "Wandern", met: 6.0, group: "alltag" },
  { id: "radeln", label: "Rad fahren", met: 6.8, group: "alltag" },
] as const;

const groupLabels: Record<string, string> = {
  studio: "Studio-Training",
  cardio: "Cardio",
  wellness: "Wellness",
  alltag: "Alltag & Outdoor",
};

type VerbrauchInputs = {
  weight: number;
  duration: number;
  activity: typeof activities[number]["id"];
};

export function VerbrauchCalculator() {
  const [weight, setWeight] = useState(75);
  const [duration, setDuration] = useState(60);
  const [activity, setActivity] = useState<typeof activities[number]["id"]>("krafttraining");

  const result = useMemo(() => {
    const def = activities.find((a) => a.id === activity)!;
    // Formel: kcal/min = MET × kg × 3.5 / 200
    const kcalPerMin = (def.met * weight * 3.5) / 200;
    const total = Math.round(kcalPerMin * duration);
    const perHour = Math.round(kcalPerMin * 60);

    return {
      activityLabel: def.label,
      met: def.met,
      kcalPerMin: Math.round(kcalPerMin * 10) / 10,
      total,
      perHour,
    };
  }, [weight, duration, activity]);

  const { entries, save, remove, clear, hydrated } = useCalculationHistory<VerbrauchInputs>("kalorienverbrauch");
  const lastSavedRef = useRef<string>("");

  useEffect(() => {
    if (!hydrated) return;
    const handle = setTimeout(() => {
      const key = `${weight}-${duration}-${activity}`;
      if (key === lastSavedRef.current) return;
      lastSavedRef.current = key;
      save(
        { weight, duration, activity },
        {
          primary: result.total.toString(),
          primaryUnit: "kcal",
          label: result.activityLabel,
        }
      );
    }, 1500);
  }, [weight, duration, activity, result.total, result.activityLabel, hydrated, save]);

  const downloadPdfHandler = () => {
    const top5 = activities
      .filter((a) => a.group === "studio" || a.group === "cardio")
      .slice(0, 8)
      .map((a) => {
        const kcal = Math.round(((a.met * weight * 3.5) / 200) * 60);
        return { label: `${a.label} (60 min)`, value: `${kcal} kcal` };
      });

    const doc = generateRechnerPdf({
      title: "Dein Kalorienverbrauch",
      subtitle: "Verbrauchs-Rechner · MET-Methode",
      resultLarge: result.total.toString(),
      resultUnit: "kcal verbrannt",
      resultLabel: result.activityLabel,
      sections: [
        {
          title: "Deine Eingaben",
          rows: [
            { label: "Körpergewicht", value: `${weight.toString().replace(".", ",")} kg` },
            { label: "Dauer", value: `${duration} Minuten` },
            { label: "Aktivität", value: result.activityLabel },
            { label: "MET-Wert", value: result.met.toString().replace(".", ",") },
          ],
        },
        {
          title: "Vergleich anderer Aktivitäten (60 min)",
          rows: top5,
        },
      ],
      recommendation:
        "Reine Kalorienverbrennung ist nicht der schnellste Weg zur Wunschfigur. Krafttraining baut Muskeln auf, die deinen Grundumsatz dauerhaft erhoehen. Kombiniere 3x Kraft + 1-2x Cardio pro Woche und achte aufs Kaloriendefizit ueber die Ernaehrung.",
    });
    downloadPdf(doc, `casasports-verbrauch-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const renderInputSummary = (entry: HistoryEntry<VerbrauchInputs>) => {
    const aLabel = activities.find((a) => a.id === entry.inputs.activity)?.label ?? "";
    return `${entry.inputs.duration} min ${aLabel} · ${entry.inputs.weight} kg`;
  };

  // Aktivitäten gruppiert
  const groupedActivities = activities.reduce((acc, a) => {
    if (!acc[a.group]) acc[a.group] = [];
    acc[a.group].push(a);
    return acc;
  }, {} as Record<string, typeof activities[number][]>);

  return (
    <section className="bg-cs-black pb-24 pt-3 md:pb-32 md:pt-4">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid grid-cols-1 border border-white/10 bg-gradient-to-br from-white/[0.035] to-white/[0.005] lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Eingabe
            </p>
            <h2 className="mt-3 text-2xl font-black uppercase tracking-[-0.02em] text-white md:text-3xl">
              Deine Aktivität
            </h2>

            <div className="mt-7 space-y-7">
              <NumberStepper id="verbr-weight" label="Gewicht" unit="kg" min={40} max={150} step={0.5} value={weight} onChange={setWeight} />
              <NumberStepper id="verbr-duration" label="Dauer" unit="min" min={5} max={240} step={5} value={duration} onChange={setDuration} />

              <div>
                <p className="mb-3 text-[12px] uppercase tracking-[0.15em] text-white/60">
                  Aktivität wählen
                </p>
                <div className="space-y-5">
                  {Object.entries(groupedActivities).map(([group, list]) => (
                    <div key={group}>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                        {groupLabels[group]}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {list.map((a) => (
                          <button
                            key={a.id}
                            type="button"
                            onClick={() => setActivity(a.id)}
                            className={cn(
                              "border px-3 py-2.5 text-left transition-all",
                              activity === a.id
                                ? "border-cs-accent bg-cs-accent/10"
                                : "border-white/15 hover:border-white/40"
                            )}
                          >
                            <span
                              className={cn(
                                "block truncate text-[12px] uppercase tracking-[0.08em]",
                                activity === a.id ? "text-cs-accent" : "text-white"
                              )}
                            >
                              {a.label}
                            </span>
                            <span className="mt-0.5 block text-[10px] text-white/45">
                              MET {a.met.toString().replace(".", ",")}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 lg:sticky lg:top-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Verbrannte Kalorien
            </p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-7xl font-black tracking-[-0.04em] text-white md:text-8xl">
                {result.total.toLocaleString("de-DE")}
              </span>
              <span className="text-base uppercase tracking-[0.15em] text-white/50">
                kcal
              </span>
            </div>

            <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-white/60">
              {result.activityLabel}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">Pro Minute</p>
                <p className="mt-2 text-xl font-black tracking-[-0.02em] text-white">
                  {result.kcalPerMin.toString().replace(".", ",")}
                  <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">kcal</span>
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">Pro Stunde</p>
                <p className="mt-2 text-xl font-black tracking-[-0.02em] text-white">
                  {result.perHour}
                  <span className="ml-1 text-xs uppercase tracking-[0.15em] text-white/40">kcal</span>
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">MET</p>
                <p className="mt-2 text-xl font-black tracking-[-0.02em] text-white">
                  {result.met.toString().replace(".", ",")}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                In Lebensmitteln
              </p>
              <p className="mt-2 text-[13px] text-white/55">
                Das verbrennst du an {result.activityLabel.toLowerCase()}
              </p>
              <ul className="mt-5 space-y-1.5 text-[13px]">
                {[
                  { label: "Schokoriegel (250 kcal)", count: (result.total / 250).toFixed(1) },
                  { label: "Pizza-Stück (300 kcal)", count: (result.total / 300).toFixed(1) },
                  { label: "Cola 0,5 L (210 kcal)", count: (result.total / 210).toFixed(1) },
                  { label: "Bier 0,5 L (215 kcal)", count: (result.total / 215).toFixed(1) },
                  { label: "Apfel (80 kcal)", count: (result.total / 80).toFixed(1) },
                ].map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                  >
                    <span className="text-white/65">{f.label}</span>
                    <span className="text-cs-accent font-medium">
                      ≈ {f.count.replace(".", ",")} ×
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <FaqHint
              readingTime="4 Min Lesezeit"
              teaser="MET-System erklärt, warum Krafttraining mehr bringt als pure Kalorien."
            />
          </div>
        </div>

        <SaveActions
          rechnerName="Kalorienverbrauch"
          resultSummary={`${result.total} kcal in ${duration} min ${result.activityLabel}`}
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
