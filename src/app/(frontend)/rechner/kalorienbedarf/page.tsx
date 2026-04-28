import type { Metadata } from "next";
import { RechnerHero } from "@/components/rechner/rechner-hero";
import { KalorienCalculator } from "@/components/rechner/kalorien-calculator";
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
  title: "Kalorienbedarf Rechner",
  description:
    "Berechne deinen täglichen Kalorienbedarf nach Mifflin-St Jeor. Inklusive Aktivitätsfaktor, Zielanpassung und Makronährstoff-Empfehlung.",
};

export default function KalorienPage() {
  return (
    <>
      <PageBreadcrumbs path="/rechner/kalorienbedarf" />
      <RechnerHero
        overline="Kalorien Rechner"
        title="Dein täglicher"
        accent="Kalorienbedarf."
        description="Wie viele Kalorien dein Körper wirklich braucht hängt von Geschlecht, Statur und Aktivität ab. Hier bekommst du eine wissenschaftlich gestützte Schätzung in unter 30 Sekunden."
        image="/images/casasports-bodyhealth.webp"
      />

      <KnowledgeWidget
        overline="Hintergrund"
        title="Alles über Kalorien und Energiebilanz"
        preview="Mifflin-St Jeor Formel, Aktivitätsfaktoren, Makronährstoffe und Zielanpassung."
        readingTime="6 Min Lesezeit"
      >
        <div className="space-y-12">
          <KSection number="01" title="Was eine Kalorie wirklich ist">
            <p>
              Eine Kilokalorie (kcal) ist die Energiemenge, die nötig ist, um 1 Kg
              Wasser um 1 °C zu erwärmen. Im Sprachgebrauch und auf
              Lebensmittelverpackungen steht „Kalorien" fast immer für Kilokalorien.
              Dein Körper verbrennt diese Energie für drei Dinge: Grundumsatz
              (Atmung, Organe, Zellerneuerung), Bewegung und Verdauung.
            </p>
            <p>
              Die wichtigste Größe ist die <span className="text-white">Energiebilanz</span>:
              Nimmst du genauso viel zu dir wie du verbrauchst, hältst du dein
              Gewicht. Mehr essen → zunehmen, weniger essen → abnehmen. Klingt
              banal, aber 99% aller Diäten scheitern an dieser Mathematik.
            </p>
          </KSection>

          <KSection number="02" title="Die Mifflin-St Jeor Formel">
            <p>
              Wir nutzen die Mifflin-St Jeor Formel von 1990 — sie gilt heute als
              die genaueste Schätzformel für den Grundumsatz (BMR). In einem
              direkten Vergleich mit Harris-Benedict und Owen lag Mifflin-St Jeor in
              82% der Fälle innerhalb der 10%-Toleranzgrenze.
            </p>
            <KTable
              headers={["Geschlecht", "BMR-Formel"]}
              rows={[
                {
                  label: "Männer",
                  value: "10 × Gewicht + 6,25 × Größe − 5 × Alter + 5",
                },
                {
                  label: "Frauen",
                  value: "10 × Gewicht + 6,25 × Größe − 5 × Alter − 161",
                },
              ]}
            />
            <p>
              Den Gesamtumsatz (TDEE) bekommst du, indem du den BMR mit dem
              Aktivitätsfaktor multiplizierst. Bei einem Bürojob mit 3x Training pro
              Woche ist der Faktor 1,55.
            </p>
          </KSection>

          <KSection number="03" title="Aktivitätsfaktoren erklärt">
            <p>
              Die Faktoren stammen aus Studien der Internationalen Atomenergie-
              Behörde mit doppelt-markiertem Wasser — der Goldstandard zur
              Energieumsatz-Messung. Sie schließen Job, Sport und Alltagsbewegung
              ein.
            </p>
            <KTable
              headers={["Level", "Faktor"]}
              rows={[
                { label: "Sitzend (Bürojob, kein Sport)", value: "× 1,2" },
                { label: "Leicht aktiv (1–2x Training)", value: "× 1,375" },
                { label: "Aktiv (3–5x Training)", value: "× 1,55", tone: "good" },
                { label: "Sehr aktiv (6–7x Training)", value: "× 1,725" },
                { label: "Extrem aktiv (Profi, körperlicher Job)", value: "× 1,9" },
              ]}
            />
          </KSection>

          <KSection number="04" title="Defizit oder Überschuss — was ist realistisch?">
            <p>
              Für den Fettverlust ist ein Defizit von 300–500 kcal pro Tag ideal.
              Das entspricht 0,5 bis 1 kg Fettabbau pro Woche — schneller geht oft
              auf Kosten von Muskelmasse und ist hormonell ungesund. Für den
              Muskelaufbau reicht ein Überschuss von 200–300 kcal.
            </p>
            <KTable
              headers={["Ziel", "Anpassung"]}
              rows={[
                { label: "Aggressiver Cut (max. 8 Wochen)", value: "−750 kcal", tone: "warn" },
                { label: "Standard-Diät", value: "−500 kcal", tone: "accent" },
                { label: "Soft-Cut", value: "−250 kcal" },
                { label: "Erhalt", value: "± 0", tone: "good" },
                { label: "Lean Bulk", value: "+250 kcal" },
                { label: "Muskelaufbau standard", value: "+300 kcal", tone: "accent" },
              ]}
            />
          </KSection>

          <KSection number="05" title="Makronährstoff-Verteilung">
            <p>
              Die Kalorien aufzuteilen ist genauso wichtig wie die Gesamtmenge.
              Unsere Empfehlung für aktive Menschen, basierend auf Sportwissen-
              schaftler-Konsens (Helms, Aragon, Schoenfeld 2014):
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Protein:</span> 1,8 g pro kg
                  Körpergewicht (im Cut bis 2,4 g/kg). 4 kcal pro Gramm.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Fett:</span> Etwa 30% der Kalorien.
                  Wichtig für Hormonbildung. 9 kcal pro Gramm.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Kohlenhydrate:</span> Der Rest. Liefern
                  Energie für Training und Gehirn. 4 kcal pro Gramm.
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="06" title="Quellen und Studien">
            <KSources
              items={[
                { label: "Mifflin et al. — A new predictive equation for resting energy expenditure (1990)" },
                { label: "Helms, Aragon & Fitschen — Evidence-based recommendations for natural bodybuilding (2014)" },
                { label: "FAO/WHO/UNU — Human energy requirements (2004)" },
                { label: "Frankenfield et al. — Comparison of predictive equations (2005)" },
                { label: "Deutsche Gesellschaft für Ernährung — Referenzwerte für die Energiezufuhr", href: "https://www.dge.de/" },
              ]}
            />
          </KSection>
        </div>
      </KnowledgeWidget>

      <KalorienCalculator />

      <RelatedRechner excludeSlug="kalorienbedarf" />

      <FitnessCTA />
    </>
  );
}
