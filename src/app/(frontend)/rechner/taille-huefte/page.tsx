import type { Metadata } from "next";
import { RechnerHero } from "@/components/rechner/rechner-hero";
import { WhrCalculator } from "@/components/rechner/whr-calculator";
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
  title: "Taille-Hüfte-Verhältnis Rechner",
  description:
    "Berechne dein WHR (Waist-to-Hip-Ratio). WHO-Indikator für viszerales Bauchfett — schneller und präziser als der BMI.",
};

export default function WhrPage() {
  return (
    <>
      <PageBreadcrumbs path="/rechner/taille-huefte" />
      <RechnerHero
        overline="WHR Rechner"
        title="Dein Taille-Hüfte-"
        accent="Verhältnis."
        description="Mit zwei Maßbändern in zwei Minuten zu einer Aussage, die viele BMI-Werte schlägt: Wie viel viszerales Fett hast du wirklich?"
        image="/images/casasports-bodyhealth.webp"
      />

      <KnowledgeWidget
        overline="Hintergrund"
        title="Warum dieser Wert wichtiger ist als dein BMI"
        preview="Viszerales Fett, WHO-Klassifikation, Vergleich mit anderen Indikatoren und konkrete Maßnahmen."
        readingTime="4 Min Lesezeit"
      >
        <div className="space-y-12">
          <KSection number="01" title="Warum das Verhältnis zählt — nicht der einzelne Wert">
            <p>
              Das Taille-Hüfte-Verhältnis (englisch Waist-to-Hip-Ratio, WHR) sagt
              etwas Entscheidendes aus, das BMI und reines Gewicht ignorieren:{" "}
              <span className="text-white">wo</span> dein Körperfett sitzt. Eine
              Apfel-Form (viel Bauchfett, schmale Hüfte) ist gesundheitlich
              riskanter als eine Birnen-Form (mehr Hüfte und Oberschenkel) — selbst
              bei identischem BMI.
            </p>
            <p>
              Der Grund: Bauchfett ist nicht gleich Bauchfett. Während subkutanes
              Fett (direkt unter der Haut) relativ unbedenklich ist, ist
              viszerales Fett — das tief im Bauchraum die Organe umgibt — aktiv
              entzündungsfördernd und stoffwechselrelevant.
            </p>
          </KSection>

          <KSection number="02" title="Was viszerales Fett im Körper anrichtet">
            <p>
              Viszerales Fettgewebe ist hormonell aktiv. Es schüttet
              entzündungsfördernde Botenstoffe aus, die langfristig zu vielen
              Erkrankungen beitragen können:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Insulinresistenz und Typ-2-Diabetes</span>{" "}
                  — die Bauchspeicheldrüse muss mehr Insulin produzieren, irgendwann
                  versagt sie.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Bluthochdruck und Herz-Kreislauf-Erkrankungen</span>{" "}
                  — durch Cytokine und Hormonverschiebungen.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Erhöhtes Krebsrisiko</span> — vor
                  allem für Darm-, Brust- und Bauchspeicheldrüsenkrebs.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Fettleber</span> — bis zu 30% der
                  Erwachsenen in Deutschland haben unbemerkt eine nicht-
                  alkoholische Fettleber.
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="03" title="WHO-Klassifikation">
            <p>
              Die Weltgesundheitsorganisation hat 2008 in einem Expertenreport
              klare Schwellenwerte definiert. Sie unterscheiden sich zwischen
              Männern und Frauen, weil die Fettverteilung biologisch
              unterschiedlich ist.
            </p>
            <KTable
              headers={["Geschlecht", "Schwellenwerte"]}
              rows={[
                { label: "Männer · niedriges Risiko", value: "WHR < 0,90", tone: "good" },
                { label: "Männer · erhöhtes Risiko", value: "WHR 0,90 – 0,99", tone: "warn" },
                { label: "Männer · hohes Risiko", value: "WHR ≥ 1,00", tone: "accent" },
                { label: "Frauen · niedriges Risiko", value: "WHR < 0,80", tone: "good" },
                { label: "Frauen · erhöhtes Risiko", value: "WHR 0,80 – 0,84", tone: "warn" },
                { label: "Frauen · hohes Risiko", value: "WHR ≥ 0,85", tone: "accent" },
              ]}
            />
          </KSection>

          <KSection number="04" title="Bauchumfang allein — auch aussagekräftig">
            <p>
              Wenn du keine Lust auf zwei Messungen hast: Der reine Taillenumfang
              ist als Einzelwert ebenfalls eine valide Schnellanalyse. Die
              International Diabetes Federation empfiehlt diese Schwellen:
            </p>
            <KTable
              headers={["Geschlecht", "Bauchumfang"]}
              rows={[
                { label: "Männer · gesund", value: "< 94 cm", tone: "good" },
                { label: "Männer · erhöhtes Risiko", value: "94 – 101 cm", tone: "warn" },
                { label: "Männer · stark erhöht", value: "≥ 102 cm", tone: "accent" },
                { label: "Frauen · gesund", value: "< 80 cm", tone: "good" },
                { label: "Frauen · erhöhtes Risiko", value: "80 – 87 cm", tone: "warn" },
                { label: "Frauen · stark erhöht", value: "≥ 88 cm", tone: "accent" },
              ]}
            />
          </KSection>

          <KSection number="05" title="Was du tun kannst">
            <p>
              Die gute Nachricht: Viszerales Fett reagiert besonders schnell auf
              Lebensstil-Änderungen. Schon 8–12 Wochen konsequente Umstellung
              zeigen messbare Effekte.
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Krafttraining + moderates Cardio:</span>{" "}
                  Die Kombination ist effektiver als nur Cardio. 3x Kraft + 1–2x
                  Cardio pro Woche.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Kaloriendefizit von 300–500 kcal:</span>{" "}
                  Über die Ernährung steuern. Bauchfett verschwindet schneller als
                  Hüft- und Oberschenkelfett.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Schlaf und Stressreduktion:</span>{" "}
                  Cortisol fördert Bauchfett-Einlagerung. Wer dauerhaft gestresst
                  ist oder unter 6h schläft, hat höheres viszerales Fett.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Spotreduktion ist ein Mythos:</span>{" "}
                  100 Sit-ups täglich verbrennen kein Bauchfett gezielt. Der Körper
                  entscheidet selbst, woher er Fett mobilisiert.
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="06" title="Quellen">
            <KSources
              items={[
                { label: "WHO — Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation (2008)" },
                { label: "International Diabetes Federation — Worldwide Definition of the Metabolic Syndrome (2006)" },
                { label: "Després — Body fat distribution and risk of cardiovascular disease (Circulation 2012)" },
                { label: "Robert Koch-Institut — Studie zur Gesundheit Erwachsener in Deutschland (DEGS1)" },
                { label: "Janssen et al. — Waist circumference and not body mass index explains obesity-related health risk (Am J Clin Nutr 2004)" },
              ]}
            />
          </KSection>
        </div>
      </KnowledgeWidget>

      <WhrCalculator />

      <RelatedRechner excludeSlug="taille-huefte" />

      <FitnessCTA />
    </>
  );
}
