import type { Metadata } from "next";
import { RechnerHero } from "@/components/rechner/rechner-hero";
import { KoerperfettCalculator } from "@/components/rechner/koerperfett-calculator";
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
  title: "Körperfett Rechner",
  description:
    "Berechne deinen Körperfettanteil per Navy-Methode. Präziser als der BMI, ohne Gerät. Inklusive Klassifikation und Vergleich der Messmethoden.",
};

export default function KoerperfettPage() {
  return (
    <>
      <PageBreadcrumbs path="/rechner/koerperfett" />
      <RechnerHero
        overline="Körperfett Rechner"
        title="Dein"
        accent="Körperfettanteil."
        description="Mit Bauchumfang, Hals und Größe schätzt die Navy-Formel deinen Körperfettanteil — präziser als der BMI und ohne Spezialgerät machbar."
        image="/images/casasports-bodyhealth.webp"
      />

      <KnowledgeWidget
        overline="Hintergrund"
        title="Was dein Körperfettanteil über dich aussagt"
        preview="Navy-Formel im Detail, Vergleich der Messmethoden, gesunde Werte und wie du dauerhaft Fett reduzierst."
        readingTime="5 Min Lesezeit"
      >
        <div className="space-y-12">
          <KSection number="01" title="Warum Körperfett aussagekräftiger ist als der BMI">
            <p>
              Der BMI ignoriert komplett, ob dein Gewicht aus Muskeln oder Fett
              besteht. Ein 90-kg-Bodybuilder mit 12% Körperfett und ein 90-kg-
              Couchpotato mit 30% haben denselben BMI — aber komplett
              unterschiedliche Gesundheitsrisiken.
            </p>
            <p>
              Der <span className="text-white">Körperfettanteil</span> (KFA, body fat
              percentage) misst direkt das Gewichtsverhältnis aus Fettgewebe und
              fettfreier Masse (Muskeln, Knochen, Organe, Wasser). Er ist die
              ehrlichste Einzelzahl zur Körperzusammensetzung.
            </p>
          </KSection>

          <KSection number="02" title="Die Navy-Formel — wie sie funktioniert">
            <p>
              Die US Navy entwickelte ihre Formel 1985 (Hodgdon &amp; Beckett) zur
              schnellen Schätzung bei Rekruten — ohne teure Geräte. Die Formel
              nutzt Körpergröße, Halsumfang und Taillenumfang (bei Frauen
              zusätzlich Hüfte). Sie hat einen mittleren Fehler von ±3% gegenüber
              hydrostatischer Wägung — präziser als die meisten Bioimpedanz-
              Heimwaagen.
            </p>
            <KTable
              headers={["Geschlecht", "Formel"]}
              rows={[
                {
                  label: "Männer",
                  value: "495 / (1,0324 − 0,19077 × log10(Taille − Hals) + 0,15456 × log10(Größe)) − 450",
                },
                {
                  label: "Frauen",
                  value: "495 / (1,29579 − 0,35004 × log10(Taille + Hüfte − Hals) + 0,22100 × log10(Größe)) − 450",
                },
              ]}
            />
            <p>
              Wichtig: Die Formel funktioniert nur bei „normalen" Bauchumfängen.
              Bei sehr trainierten Athleten oder stark adipösen Personen weicht
              sie stärker ab.
            </p>
          </KSection>

          <KSection number="03" title="Klassifikation: Was ist gesund?">
            <p>
              Frauen haben naturgemäß einen höheren Körperfettanteil — bedingt
              durch Östrogen und Reproduktionsbiologie. Die folgende
              Klassifikation stammt vom American Council on Exercise (ACE) und ist
              die Standardreferenz im Fitness-Bereich.
            </p>
            <KTable
              headers={["Kategorie", "Männer / Frauen"]}
              rows={[
                { label: "Essentielles Fett", value: "2–5% / 10–13%" },
                { label: "Athletisch", value: "6–13% / 14–20%", tone: "good" },
                { label: "Fit", value: "14–17% / 21–24%", tone: "good" },
                { label: "Akzeptabel", value: "18–24% / 25–31%" },
                { label: "Erhöht", value: "25–31% / 32–38%", tone: "warn" },
                { label: "Adipös", value: "≥ 32% / ≥ 39%", tone: "accent" },
              ]}
            />
            <p>
              Sehr niedrige Werte (Männer unter 5%, Frauen unter 12%) sind
              langfristig ungesund — Hormone, Immunsystem und Knochenstoffwechsel
              leiden. Nur Profi-Bodybuilder gehen vor Wettkämpfen kurzfristig
              dorthin.
            </p>
          </KSection>

          <KSection number="04" title="Vergleich der Messmethoden">
            <p>
              Es gibt bessere Methoden als die Navy-Formel, aber sie kosten Zeit
              oder Geld:
            </p>
            <KTable
              headers={["Methode", "Genauigkeit"]}
              rows={[
                { label: "DEXA (Knochendichtemessung)", value: "± 1% — Goldstandard", tone: "good" },
                { label: "Hydrostatische Wägung", value: "± 1,5% — sehr genau" },
                { label: "BodPod (Luftverdrängung)", value: "± 2,5%" },
                { label: "Bioimpedanz (Studio-Waage)", value: "± 3–5%" },
                { label: "Navy-Formel", value: "± 3% (im Normalbereich)" },
                { label: "Caliper-Zange (3-Falten)", value: "± 3,5% bei Übung" },
                { label: "Bioimpedanz (Heimwaage)", value: "± 5–8%" },
              ]}
            />
            <p>
              Bei uns im Casa Sports nutzen wir eine Tanita-Profi-Bioimpedanzwaage
              mit Acht-Punkt-Messung. Die Werte sind deutlich präziser als die
              Heimwaage und für Mitglieder kostenlos.
            </p>
          </KSection>

          <KSection number="05" title="Wie du Körperfett nachhaltig reduzierst">
            <p>
              Drei Hebel — alle gleichzeitig wirken:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Kaloriendefizit von 300–500 kcal:</span>{" "}
                  Das ist der einzige direkte Hebel für Fettverlust. Schneller geht
                  auf Kosten der Muskelmasse.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Krafttraining 3x pro Woche:</span>{" "}
                  Hält Muskeln im Defizit und erhöht den Grundumsatz. Pro kg Muskel
                  verbrennst du 50 kcal mehr pro Tag in Ruhe.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">1,8–2,4 g Protein pro kg:</span>{" "}
                  Schützt vor Muskelabbau und sättigt. Wichtigster Makronährstoff
                  in der Diät.
                </span>
              </li>
            </ul>
            <p>
              Realistisch sind 0,5–1% Körperfettanteil pro Monat. Wer mehr
              versucht, riskiert Heißhunger, schlechten Schlaf, Hormonschwankungen
              und Jojo-Effekt.
            </p>
          </KSection>

          <KSection number="06" title="Quellen">
            <KSources
              items={[
                { label: "Hodgdon & Beckett — Prediction of Percent Body Fat for U.S. Navy Men and Women (1984)" },
                { label: "American Council on Exercise — Body Fat Percentage Categories" },
                { label: "Heyward & Wagner — Applied Body Composition Assessment (2004)" },
                { label: "Lukaski — Methods for the assessment of human body composition (1987)" },
                { label: "ACSM — Guidelines for Exercise Testing and Prescription" },
              ]}
            />
          </KSection>
        </div>
      </KnowledgeWidget>

      <KoerperfettCalculator />

      <RelatedRechner excludeSlug="koerperfett" />

      <FitnessCTA />
    </>
  );
}
