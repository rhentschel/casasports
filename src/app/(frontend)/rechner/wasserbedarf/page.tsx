import type { Metadata } from "next";
import { RechnerHero } from "@/components/rechner/rechner-hero";
import { WasserCalculator } from "@/components/rechner/wasser-calculator";
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
  title: "Wasserbedarf Rechner",
  description:
    "Berechne deinen täglichen Wasserbedarf. Inklusive Trainings-Aufschlag, Klima-Anpassung und Tipps zur optimalen Verteilung.",
};

export default function WasserPage() {
  return (
    <>
      <PageBreadcrumbs path="/rechner/wasserbedarf" />
      <RechnerHero
        overline="Wasser Rechner"
        title="Dein täglicher"
        accent="Wasserbedarf."
        description="Genug Wasser ist die Grundlage für Leistung, Konzentration und Regeneration. Hier erfährst du, wie viel dein Körper wirklich braucht — angepasst an Gewicht, Training und Klima."
        image="/images/casasports-wellness-bereich-1.webp"
      />

      <KnowledgeWidget
        overline="Hintergrund"
        title="Alles über Hydration und Trinkbedarf"
        preview="Wassermangel-Symptome, Elektrolyte, Mythen, optimale Verteilung über den Tag."
        readingTime="4 Min Lesezeit"
      >
        <div className="space-y-12">
          <KSection number="01" title="Warum Wasser so kritisch ist">
            <p>
              Etwa 60% deines Körpergewichts bestehen aus Wasser. In den Muskeln
              sind es sogar 75%, im Blut über 80%. Schon ein Wasserverlust von 2%
              des Körpergewichts (bei einem 75-kg-Mann also 1,5 Liter) führt zu
              messbaren Leistungseinbußen: Konzentration sinkt, Kraft nimmt ab,
              Ausdauer bricht ein.
            </p>
            <p>
              Bei 4% Verlust beginnen Kopfschmerzen, Schwindel und Übelkeit. Ab 7%
              wird es kritisch. Das tückische: Durst meldet sich erst bei etwa 1%
              Defizit — du bist also schon dehydriert, wenn du es merkst.
            </p>
          </KSection>

          <KSection number="02" title="Wie viel ist genug?">
            <p>
              Die Faustformel: <span className="text-white">35 ml pro kg
              Körpergewicht</span> als Grundbedarf — bei einem 75-kg-Menschen also
              2,6 Liter. Diese Empfehlung deckt sich mit der DGE und der EFSA
              (Europäische Behörde für Lebensmittelsicherheit, 2010).
            </p>
            <KTable
              headers={["Faktor", "Zusätzlicher Bedarf"]}
              rows={[
                { label: "Pro Stunde Training (mittlere Intensität)", value: "+ 500–750 ml" },
                { label: "Pro Stunde Training (hohe Intensität)", value: "+ 1000 ml", tone: "accent" },
                { label: "Bei warmem Wetter (25–32 °C)", value: "+ 500 ml" },
                { label: "Bei sehr heißem Wetter (über 32 °C)", value: "+ 1000 ml", tone: "warn" },
                { label: "Bei Erkältung / Fieber", value: "+ 500–1000 ml" },
                { label: "In großer Höhe (über 2500 m)", value: "+ 500 ml" },
              ]}
            />
          </KSection>

          <KSection number="03" title="Was zählt — und was nicht">
            <p>
              Eine hartnäckige Halbwahrheit: „Kaffee dehydriert." Tatsächlich zählen
              Kaffee und Tee zur Flüssigkeitsbilanz dazu. Die diuretische Wirkung
              ist messbar, aber gering. Erst über 5–6 Tassen täglich wird der
              Effekt relevant.
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-emerald-400" />
                <span>
                  <span className="text-white">Zählt:</span> Wasser, ungesüßter Tee,
                  Kaffee, verdünnte Schorlen. Auch Suppen, Obst und Gemüse decken
                  ca. 20% des Bedarfs.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber-400" />
                <span>
                  <span className="text-white">Mit Einschränkung:</span> Softdrinks
                  und Säfte zählen, aber wegen des Zuckers nicht als Hauptquelle.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-red-400" />
                <span>
                  <span className="text-white">Zählt nicht:</span> Alkohol — er wirkt
                  stark diuretisch und dehydriert tatsächlich.
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="04" title="Elektrolyte beim Training">
            <p>
              Beim Schwitzen verlierst du nicht nur Wasser, sondern auch Natrium,
              Kalium und Magnesium. Bei Trainingseinheiten unter einer Stunde reicht
              normales Wasser. Erst ab längeren oder sehr intensiven Einheiten —
              und vor allem bei Hitze — sind Elektrolytgetränke sinnvoll.
            </p>
            <KTable
              headers={["Mineralstoff", "Verlust pro Liter Schweiß"]}
              rows={[
                { label: "Natrium", value: "1 – 2 g" },
                { label: "Kalium", value: "0,2 g" },
                { label: "Magnesium", value: "0,01 – 0,04 g" },
                { label: "Calcium", value: "0,02 – 0,05 g" },
              ]}
            />
            <p>
              Praxis-Tipp: Eine Prise Salz und etwas Zucker im Wasser nach
              langem Training ist günstiger und genauso effektiv wie kommerzielle
              Sportgetränke.
            </p>
          </KSection>

          <KSection number="05" title="Optimale Verteilung über den Tag">
            <p>
              Wer drei Liter auf einmal trinkt, dehydriert genauso wie jemand der
              zu wenig trinkt — der Körper kann nur etwa 800 ml pro Stunde
              verarbeiten. Verteile deinen Bedarf besser auf den ganzen Tag:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Direkt nach dem Aufwachen:</span> 500
                  ml — der Körper hat über Nacht 6–8 Stunden ohne Flüssigkeit
                  gearbeitet.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Vor jeder Mahlzeit:</span> 250 ml —
                  unterstützt die Verdauung und sättigt zusätzlich.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">30 Minuten vor Training:</span> 500 ml
                  — als Reserve für die Belastung.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Während Training:</span> Alle 15
                  Minuten ein paar Schlucke (ca. 150 ml).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Letzte 2 Stunden vor Schlaf:</span>{" "}
                  Trinkmenge reduzieren — sonst wirst du wegen der Blase wach.
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="06" title="Quellen">
            <KSources
              items={[
                { label: "EFSA — Scientific Opinion on Dietary Reference Values for water (2010)" },
                { label: "Sawka, Burke et al. — ACSM Position Stand on Exercise and Fluid Replacement (2007)" },
                { label: "Maughan & Griffin — Caffeine ingestion and fluid balance (2003)" },
                { label: "Deutsche Gesellschaft für Ernährung — Referenzwerte für Wasser", href: "https://www.dge.de/" },
                { label: "WHO — Total Fluid Intake (2005)" },
              ]}
            />
          </KSection>
        </div>
      </KnowledgeWidget>

      <WasserCalculator />

      <RelatedRechner excludeSlug="wasserbedarf" />

      <FitnessCTA />
    </>
  );
}
