import type { Metadata } from "next";
import { RechnerHero } from "@/components/rechner/rechner-hero";
import { BmiCalculator } from "@/components/rechner/bmi-calculator";
import {
  KnowledgeWidget,
  KSection,
  KTable,
  KSources,
} from "@/components/rechner/knowledge-widget";
import { RelatedRechner } from "@/components/rechner/related-rechner";
import { FitnessCTA } from "@/components/fitness/fitness-cta";
import { PageBreadcrumbs } from "@/components/schema/page-breadcrumbs";

export const metadata: Metadata = {
  title: "BMI Rechner",
  description:
    "Berechne kostenlos deinen Body-Mass-Index. Sieh sofort, in welchem Bereich dein BMI liegt und was das für dein Training bedeutet.",
};

export default function BmiPage() {
  return (
    <>
      <PageBreadcrumbs path="/rechner/bmi" />
      <RechnerHero
        overline="BMI Rechner"
        title="Body-Mass-Index"
        accent="berechnen."
        description="Der schnellste Weg, dein Körpergewicht in Relation zur Größe einzuordnen. Direkte Eingabe, sofort sichtbares Ergebnis und realistische Einordnung."
        image="/images/casasports-fitnessstudio-oer-erkenschwick.webp"
      />

      <KnowledgeWidget
        overline="Hintergrund"
        title="Was du über den BMI wissen solltest"
        preview="Wissenschaftliche Grundlagen, offizielle Tabelle, Grenzen und bessere Indikatoren — kompakt erklärt."
        readingTime="6 Min Lesezeit"
      >
        <div className="space-y-12">
          <KSection number="01" title="Was der BMI ist und woher er kommt">
            <p>
              Der Body-Mass-Index wurde 1832 vom belgischen Mathematiker und
              Statistiker Adolphe Quetelet entwickelt. Ursprünglich nicht als
              medizinisches Diagnoseinstrument gedacht, sondern um statistische
              Verteilungen in Bevölkerungsgruppen zu beschreiben. Erst in den 1980er
              Jahren übernahm die Weltgesundheitsorganisation (WHO) den BMI als
              offiziellen Klassifikator für Über- und Untergewicht und legte die
              heute gültigen Grenzwerte fest.
            </p>
            <p>
              Die Berechnung folgt einer einfachen Formel:{" "}
              <span className="text-white">BMI = Gewicht (kg) / Körpergröße² (m)</span>.
              Ein Mann mit 80 kg und 1,80 m Körpergröße kommt also auf 80 / (1,80 ×
              1,80) = 24,7 — ein Wert im oberen Normalbereich. Die Einheit ist kg/m².
            </p>
            <p>
              Der BMI bleibt populär, weil er ohne Geräte berechenbar ist und in
              Studien gut mit dem Risiko für Herz-Kreislauf-Erkrankungen, Diabetes
              und bestimmte Krebsarten korreliert. Bei Werten zwischen 22 und 25
              wurde in einer Meta-Analyse des Lancet (2016) das niedrigste
              Sterblichkeitsrisiko gefunden.
            </p>
          </KSection>

          <KSection number="02" title="Die offizielle BMI-Tabelle der WHO">
            <p>
              Die WHO unterteilt Erwachsene ab 19 Jahren in folgende Klassen. Diese
              Werte gelten geschlechterunabhängig und sind unabhängig vom Alter
              definiert — wobei Studien zeigen, dass für Senioren ein leicht
              erhöhter BMI von 24 bis 29 sogar protektiv wirken kann.
            </p>
            <KTable
              headers={["Klassifikation", "BMI-Bereich"]}
              rows={[
                { label: "Starkes Untergewicht", value: "< 16,0 kg/m²", tone: "warn" },
                { label: "Mäßiges Untergewicht", value: "16,0 – 16,9 kg/m²", tone: "warn" },
                { label: "Leichtes Untergewicht", value: "17,0 – 18,4 kg/m²", tone: "warn" },
                { label: "Normalgewicht", value: "18,5 – 24,9 kg/m²", tone: "good" },
                { label: "Übergewicht (Präadipositas)", value: "25,0 – 29,9 kg/m²", tone: "neutral" },
                { label: "Adipositas Grad I", value: "30,0 – 34,9 kg/m²", tone: "warn" },
                { label: "Adipositas Grad II", value: "35,0 – 39,9 kg/m²", tone: "accent" },
                { label: "Adipositas Grad III", value: "≥ 40,0 kg/m²", tone: "accent" },
              ]}
            />
            <p className="text-[13px] text-white/55">
              Quelle: WHO Technical Report Series 894, Obesity: Preventing and
              Managing the Global Epidemic.
            </p>
          </KSection>

          <KSection number="03" title="Wo der BMI zu kurz greift">
            <p>
              Der BMI berücksichtigt weder Körperzusammensetzung noch Statur,
              Muskelmasse oder Fettverteilung. Genau hier liegen seine drei
              wichtigsten Schwachstellen:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Sportler und Krafttrainierte:</span>{" "}
                  Muskelgewebe ist dichter als Fett. Ein Bodybuilder mit 95 kg bei
                  1,80 m kommt auf BMI 29,3 — formal Übergewicht, real top-fit.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Sehr große oder kleine Menschen:</span>{" "}
                  Die Quadrierung der Größe verzerrt das Ergebnis bei Extremen. Bei
                  2,00 m Körpergröße wird der BMI tendenziell zu niedrig, bei 1,55 m
                  tendenziell zu hoch ausgewiesen.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Fettverteilung:</span> Bauchfett
                  (viszerales Fett) ist deutlich gefährlicher als Hüft- oder
                  Oberschenkelfett. Zwei Personen mit identischem BMI können
                  komplett unterschiedliche Risiken haben.
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="04" title="Bessere Indikatoren als der BMI allein">
            <p>
              Wenn du wirklich wissen willst, wie es um deinen Körper steht,
              kombiniere mehrere Messwerte. Die folgenden drei Werte ergänzen den
              BMI sinnvoll und sind in fünf Minuten zu Hause messbar.
            </p>
            <KTable
              headers={["Messwert", "Idealbereich"]}
              rows={[
                { label: "Bauchumfang Männer", value: "< 94 cm (Risiko ab 102 cm)", tone: "good" },
                { label: "Bauchumfang Frauen", value: "< 80 cm (Risiko ab 88 cm)", tone: "good" },
                { label: "Taille-Hüft-Verhältnis Männer", value: "< 0,90", tone: "good" },
                { label: "Taille-Hüft-Verhältnis Frauen", value: "< 0,85", tone: "good" },
                { label: "Körperfettanteil Männer", value: "10 – 20 %", tone: "good" },
                { label: "Körperfettanteil Frauen", value: "18 – 28 %", tone: "good" },
              ]}
            />
            <p>
              Bei uns im Casa Sports messen wir Körperfett, Muskelmasse und
              Wasseranteil mit einer professionellen Bioimpedanz-Waage — kostenlos
              für Mitglieder. Diese Werte zeigen viel präziser, wo du gerade stehst
              und wie sich dein Training auswirkt.
            </p>
          </KSection>

          <KSection number="05" title="Was tun bei welchem Wert?">
            <p>
              Konkrete Empfehlungen aus der trainingstherapeutischen Praxis. Wichtig:
              Bei medizinischen Vorerkrankungen oder einem BMI über 35 immer erst
              ärztliche Abklärung, dann strukturierter Plan.
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-3 w-3 shrink-0 bg-sky-300" />
                <span>
                  <span className="text-white">Untergewicht (BMI &lt; 18,5):</span>{" "}
                  Krafttraining mit Fokus auf Muskelaufbau, Kalorienüberschuss von
                  300–500 kcal/Tag, 1,8–2,2 g Protein pro kg Körpergewicht.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-3 w-3 shrink-0 bg-emerald-400" />
                <span>
                  <span className="text-white">Normalgewicht (18,5–24,9):</span>{" "}
                  Erhalt der Form. Mischtraining aus Kraft und Cardio, 2–3
                  Trainings pro Woche, ausreichend Eiweiß (1,2–1,6 g/kg).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-3 w-3 shrink-0 bg-amber-400" />
                <span>
                  <span className="text-white">Übergewicht (25–29,9):</span>{" "}
                  Moderates Kaloriendefizit (300–500 kcal/Tag), 3–4 Trainings,
                  Fokus auf Kraft + Ausdauer kombiniert. Realistisches Ziel: 0,5
                  bis 1 kg Fettverlust pro Woche.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-3 w-3 shrink-0 bg-orange-400" />
                <span>
                  <span className="text-white">Adipositas (≥ 30):</span>{" "}
                  Erst Hausarzt, dann begleitete Trainingstherapie. Einstieg
                  über gelenkschonende Aktivitäten (Cycling, Wassertherapie),
                  Ernährungsumstellung und schrittweise Steigerung.
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="06" title="Quellen und weiterführende Literatur">
            <KSources
              items={[
                { label: "WHO — BMI Classification", href: "https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations" },
                { label: "Robert Koch-Institut — Übergewicht und Adipositas in Deutschland (Studie GEDA)" },
                { label: "Lancet (2016) — Body-mass index and all-cause mortality (Meta-Analyse, 230 Studien)" },
                { label: "Deutsche Gesellschaft für Ernährung — Referenzwerte" },
                { label: "NIH — Assessing your weight and health risk" },
              ]}
            />
          </KSection>
        </div>
      </KnowledgeWidget>

      <BmiCalculator />

      <RelatedRechner excludeSlug="bmi" />

      <FitnessCTA />
    </>
  );
}
