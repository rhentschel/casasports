import type { Metadata } from "next";
import { RechnerHero } from "@/components/rechner/rechner-hero";
import { OneRmCalculator } from "@/components/rechner/onerm-calculator";
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
  title: "1-Rep-Max Rechner",
  description:
    "Schätze dein Maximalgewicht für eine Wiederholung. Inklusive Trainingszonen, Vergleich mehrerer Formeln und Hintergrund zum periodisierten Krafttraining.",
};

export default function OneRmPage() {
  return (
    <>
      <PageBreadcrumbs path="/rechner/1rm" />
      <RechnerHero
        overline="1-Rep-Max Rechner"
        title="Deine"
        accent="Maximalkraft."
        description="Wie schwer kannst du theoretisch heben? Aus deinem letzten harten Satz schätzen wir dein 1-Rep-Max — und zeigen dir, mit welchem Gewicht du für jedes Trainingsziel arbeiten solltest."
        image="/images/casasports-krafttraining-1.webp"
      />

      <KnowledgeWidget
        overline="Hintergrund"
        title="Wie du dein 1-Rep-Max richtig nutzt"
        preview="Die wichtigsten Formeln, Trainingszonen, periodisiertes Training und Sicherheitstipps."
        readingTime="5 Min Lesezeit"
      >
        <div className="space-y-12">
          <KSection number="01" title="Was das 1-Rep-Max bedeutet">
            <p>
              Das One-Repetition-Maximum (1-RM) ist das maximale Gewicht, das du in
              einer Übung mit korrekter Technik genau einmal heben kannst. Es ist
              die wichtigste Bezugsgröße im Krafttraining: Trainingsgewichte werden
              fast immer als Prozentsatz davon angegeben (z.B. „5 Sätze à 5 Wdh
              bei 80%").
            </p>
            <p>
              Das 1-RM tatsächlich zu testen ist allerdings riskant und für
              Hobby-Sportler nicht empfehlenswert — Verletzungsgefahr durch
              Maximallast ist hoch. Die clevere Lösung: aus einem submaximalen
              Satz hochrechnen. Genau das macht dieser Rechner.
            </p>
          </KSection>

          <KSection number="02" title="Die wichtigsten Formeln im Vergleich">
            <p>
              Es gibt über zwei Dutzend Formeln zur 1-RM-Schätzung. Wir verwenden
              den Durchschnitt aus drei der genauesten — Epley, Brzycki und
              Lombardi — weil keine einzelne Formel über alle Wiederholungs-
              bereiche perfekt ist.
            </p>
            <KTable
              headers={["Formel", "Stärke"]}
              rows={[
                { label: "Epley (1985)", value: "Stark bei 4–10 Wdh" },
                { label: "Brzycki (1993)", value: "Stark bei 1–5 Wdh" },
                { label: "Lombardi (1989)", value: "Stark bei 8–15 Wdh" },
                { label: "Mayhew", value: "Speziell für Bankdrücken" },
                { label: "O&apos;Conner", value: "Konservativ, gute Schätzung" },
              ]}
            />
            <p>
              Die Genauigkeit liegt bei 3–10 Wiederholungen typischerweise im
              Bereich von ±5%. Bei deutlich über 10 Wiederholungen wird die
              Schätzung ungenauer, weil Ausdauer-Komponenten ins Spiel kommen.
            </p>
          </KSection>

          <KSection number="03" title="Prozent-Tabelle für dein Training">
            <p>
              Die Faustregel: Für jedes Trainingsziel gibt es einen optimalen
              Prozentsatz vom 1-RM. Die folgende Tabelle ist die Standardreferenz
              im Krafttraining (Zatsiorsky &amp; Kraemer 2006).
            </p>
            <KTable
              headers={["Prozent vom 1-RM", "Trainingsziel"]}
              rows={[
                { label: "95–100% (1–2 Wdh)", value: "Maximalkraft", tone: "accent" },
                { label: "85–95% (3–6 Wdh)", value: "Maximalkraft / Hypertrophie", tone: "good" },
                { label: "70–85% (6–12 Wdh)", value: "Hypertrophie / Muskelaufbau", tone: "good" },
                { label: "60–70% (12–15 Wdh)", value: "Hypertrophie / Kraftausdauer" },
                { label: "50–60% (15+ Wdh)", value: "Kraftausdauer / Ausdauer" },
                { label: "Unter 50%", value: "Aufwärmen / Technik" },
              ]}
            />
          </KSection>

          <KSection number="04" title="Periodisiertes Training">
            <p>
              Wer ständig im selben Bereich trainiert, stagniert irgendwann. Profis
              und ambitionierte Hobbysportler periodisieren — sie wechseln alle
              4–8 Wochen die Phase.
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Hypertrophie-Block</span> (6 Wochen):
                  4 Sätze à 8–12 Wdh bei 70–80%
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Kraft-Block</span> (4 Wochen): 5 Sätze
                  à 4–6 Wdh bei 80–85%
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Peaking-Block</span> (2–3 Wochen): 3
                  Sätze à 1–3 Wdh bei 90–95%
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Deload</span> (1 Woche): 50% Volumen,
                  60% Intensität — Regeneration
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="05" title="Sicherheitstipps">
            <p>
              Auch wenn du nur schätzt: Maximalbereich-Training ist keine Spielerei.
              Drei Regeln, die wir bei uns im Studio jedem Neumitglied vermitteln:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  Bei Übungen über 80% des 1-RM <span className="text-white">immer
                  einen Spotter</span> oder Sicherheitsablagen nutzen.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  Mindestens <span className="text-white">15 Minuten allgemeines und
                  spezifisches Aufwärmen</span> vor schweren Sätzen.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Technik vor Gewicht</span>: Wenn die
                  Bewegung leidet, ist das Gewicht zu schwer. Punkt.
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="06" title="Quellen">
            <KSources
              items={[
                { label: "Epley — Poundage Chart (1985)" },
                { label: "Brzycki — Strength Testing: Predicting a One-Rep Max from Repetitions to Fatigue (1993)" },
                { label: "Zatsiorsky & Kraemer — Science and Practice of Strength Training (2006)" },
                { label: "LeSuer et al. — The Accuracy of Prediction Equations for Estimating 1-RM (1997)" },
                { label: "Schoenfeld — Science and Development of Muscle Hypertrophy (2020)" },
              ]}
            />
          </KSection>
        </div>
      </KnowledgeWidget>

      <OneRmCalculator />

      <RelatedRechner excludeSlug="1rm" />

      <FitnessCTA />
    </>
  );
}
