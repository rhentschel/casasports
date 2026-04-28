import type { Metadata } from "next";
import { RechnerHero } from "@/components/rechner/rechner-hero";
import { VerbrauchCalculator } from "@/components/rechner/verbrauch-calculator";
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
  title: "Kalorienverbrauch Rechner",
  description:
    "Wie viele Kalorien verbrennst du beim Krafttraining, Cycling oder in der Sauna? Berechnung nach MET-System mit über 18 Aktivitäten aus dem Studio.",
};

export default function VerbrauchPage() {
  return (
    <>
      <PageBreadcrumbs path="/rechner/kalorienverbrauch" />
      <RechnerHero
        overline="Verbrauchs-Rechner"
        title="Dein"
        accent="Kalorienverbrauch."
        description="Wie viele Kalorien verbrennst du wirklich beim Cycling-Kurs, im Krafttraining oder in der Sauna? Hier bekommst du eine wissenschaftlich gestützte Schätzung — angepasst auf dein Gewicht und deine Trainingszeit."
        image="/images/casasports-functional-training.webp"
      />

      <KnowledgeWidget
        overline="Hintergrund"
        title="So funktioniert die Kalorien-Berechnung"
        preview="MET-System erklärt, warum Krafttraining nachhaltiger wirkt als Cardio, und Mythen rund um den Nachbrenneffekt."
        readingTime="4 Min Lesezeit"
      >
        <div className="space-y-12">
          <KSection number="01" title="Was MET-Werte sind">
            <p>
              MET steht für „Metabolic Equivalent of Task" — Stoffwechseläquivalent.
              Ein MET entspricht dem Energieumsatz beim ruhigen Sitzen: etwa 3,5
              ml Sauerstoff pro Kilogramm Körpergewicht pro Minute, oder
              umgerechnet etwa 1 kcal pro kg pro Stunde.
            </p>
            <p>
              Eine Aktivität mit 8 MET verbraucht also 8-mal so viel Energie wie
              ruhiges Sitzen. Das Compendium of Physical Activities (Ainsworth et
              al. 2011) listet inzwischen über 800 Aktivitäten mit ihren MET-
              Werten auf — basierend auf Sauerstoffmessungen in
              Belastungslaboren.
            </p>
          </KSection>

          <KSection number="02" title="Die Formel">
            <p>
              Die Berechnung ist denkbar einfach:
            </p>
            <KTable
              headers={["Variable", "Bedeutung"]}
              rows={[
                { label: "kcal pro Minute", value: "MET × Gewicht (kg) × 3,5 / 200" },
              ]}
            />
            <p>
              Beispiel: Krafttraining mit 6 MET, du wiegst 75 kg. Pro Minute also
              6 × 75 × 3,5 / 200 = 7,9 kcal. In 60 Minuten kommen so etwa 470 kcal
              zusammen. Das ist eine Schätzung mit ±10–15% Toleranz, weil
              Trainingsintensität individuell variiert.
            </p>
          </KSection>

          <KSection number="03" title="Vergleichswerte aus dem Studio">
            <p>
              Wir haben für dich die wichtigsten Casa-Sports-Aktivitäten in einer
              Tabelle. Werte beziehen sich auf 60 Minuten bei 75 kg Körpergewicht
              und mittlerer Intensität.
            </p>
            <KTable
              headers={["Aktivität", "Kalorien (60 min, 75 kg)"]}
              rows={[
                { label: "Power Training", value: "~ 670 kcal", tone: "good" },
                { label: "Cycling / Spinning", value: "~ 670 kcal", tone: "good" },
                { label: "Functional / Zirkel", value: "~ 630 kcal" },
                { label: "Personal Training", value: "~ 590 kcal" },
                { label: "Laufband moderat", value: "~ 550 kcal" },
                { label: "Crosstrainer", value: "~ 550 kcal" },
                { label: "Krafttraining", value: "~ 470 kcal" },
                { label: "Yoga / Stretching", value: "~ 235 kcal" },
                { label: "Wellness / Sauna", value: "~ 120 kcal" },
              ]}
            />
          </KSection>

          <KSection number="04" title="Warum Krafttraining trotzdem führt">
            <p>
              Ein Cycling-Kurs verbrennt in 60 Minuten mehr Kalorien als
              Krafttraining — aber wer langfristig schlanker werden will, sollte
              trotzdem auf Eisen setzen. Drei Gründe:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Nachbrenneffekt (EPOC):</span>{" "}
                  Krafttraining hält den Stoffwechsel bis zu 38 Stunden danach
                  erhöht. Beim Cardio nur 1–3 Stunden.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Mehr Muskeln = höherer Grundumsatz:</span>{" "}
                  Pro Kilogramm Muskelmasse verbrennst du etwa 50 kcal mehr pro
                  Tag — auch im Schlaf.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Muskelschutz im Defizit:</span>{" "}
                  Wer ohne Krafttraining Diät macht, verliert bis zu 25% seiner
                  Muskeln. Mit Krafttraining unter 5%.
                </span>
              </li>
            </ul>
            <p>
              Die ideale Kombination für Fettverlust: 3x Krafttraining + 1–2x
              Cardio pro Woche, kombiniert mit moderatem Kaloriendefizit. Reine
              Cardio-Programme bringen kurzfristig schöne Zahlen auf der Waage,
              langfristig oft Frust.
            </p>
          </KSection>

          <KSection number="05" title="Mythen rund um den Kalorienverbrauch">
            <ul className="space-y-4 pl-1">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">„Sauna verbrennt Kalorien"</span>
                  <span className="mt-1 block text-white/65">
                    Halbwahrheit. Du schwitzt und verlierst Wasser, das ist nicht
                    Fettabbau. Etwa 80–120 kcal pro Stunde sind realistisch — durch
                    erhöhte Herzfrequenz. Die Waage zeigt nach der Sauna weniger,
                    aber das Wasser kommt zurück sobald du trinkst.
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">„Fettverbrennungszone ist optimal zum Abnehmen"</span>
                  <span className="mt-1 block text-white/65">
                    Im niedrigen Pulsbereich verbrennst du prozentual mehr Fett,
                    aber absolut weniger Kalorien. Was zählt, ist das Defizit am
                    Tagesende — nicht aus welcher Quelle die Energie kommt.
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">„Smartwatches messen genau"</span>
                  <span className="mt-1 block text-white/65">
                    Studien zeigen: Beim Cycling weichen Apple Watch &amp; Co.
                    durchschnittlich um 27% von Laborwerten ab, beim Krafttraining
                    sogar um 50%. Schätzwerte sind als Trend nutzbar, nicht als
                    Fakt.
                  </span>
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="06" title="Quellen">
            <KSources
              items={[
                { label: "Ainsworth et al. — 2011 Compendium of Physical Activities", href: "https://prevention.sph.sc.edu/tools/compendium.htm" },
                { label: "LaForgia, Withers & Gore — Effects of exercise intensity and duration on EPOC (2006)" },
                { label: "Schoenfeld — Does Cardio After an Overnight Fast Maximize Fat Loss? (2011)" },
                { label: "Shcherbina et al. — Accuracy in Wrist-Worn, Sensor-Based Measurements of Heart Rate and Energy Expenditure (Stanford 2017)" },
                { label: "Helms et al. — Evidence-Based Recommendations for Natural Bodybuilding Contest Preparation (2014)" },
              ]}
            />
          </KSection>
        </div>
      </KnowledgeWidget>

      <VerbrauchCalculator />

      <RelatedRechner excludeSlug="kalorienverbrauch" />

      <FitnessCTA />
    </>
  );
}
