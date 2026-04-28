import type { Metadata } from "next";
import { RechnerHero } from "@/components/rechner/rechner-hero";
import { ProteinCalculator } from "@/components/rechner/protein-calculator";
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
  title: "Proteinbedarf Rechner",
  description:
    "Berechne deinen täglichen Eiweißbedarf je nach Trainingsziel. Inklusive Beispiel-Lebensmittel und Empfehlung pro Mahlzeit.",
};

export default function ProteinPage() {
  return (
    <>
      <PageBreadcrumbs path="/rechner/proteinbedarf" />
      <RechnerHero
        overline="Protein Rechner"
        title="Dein täglicher"
        accent="Eiweißbedarf."
        description="Wie viel Protein du wirklich brauchst hängt von Gewicht, Ziel und Trainingsumfang ab. Hier bekommst du eine wissenschaftlich begründete Empfehlung in unter 10 Sekunden."
        image="/images/casasports-bodyhealth.webp"
      />

      <KnowledgeWidget
        overline="Hintergrund"
        title="Alles was du über Proteinbedarf wissen musst"
        preview="Wissenschaftliche Empfehlungen, Tagesverteilung, Bioverfügbarkeit, Mythen und Quellen — fundiert erklärt."
        readingTime="7 Min Lesezeit"
      >
        <div className="space-y-12">
          <KSection number="01" title="Warum Protein so wichtig ist">
            <p>
              Protein ist nach Wasser der zweitgrößte Bestandteil deines Körpers.
              Etwa 17 Prozent der Körpermasse eines Erwachsenen bestehen aus
              Eiweiß — verteilt auf Muskeln, Organe, Haut, Haare, Nägel und
              Bindegewebe. Deine roten Blutkörperchen, Hormone und Enzyme
              brauchen Protein als Baustoff.
            </p>
            <p>
              Eiweiß besteht aus 20 verschiedenen Aminosäuren, von denen 9 als
              essentiell gelten — sie kannst du nicht selbst herstellen, sondern
              musst sie über die Nahrung aufnehmen. Ohne ausreichende
              Versorgung kann der Körper sich nicht regenerieren, kein
              Muskelgewebe aufbauen und keine Hormone bilden.
            </p>
            <p>
              Im Gegensatz zu Kohlenhydraten und Fett kann der Körper Protein
              nicht in nennenswerter Menge speichern. Was du heute brauchst, muss
              heute auf den Tisch — über mehrere Mahlzeiten verteilt.
            </p>
          </KSection>

          <KSection number="02" title="Wie viel Protein brauchst du wirklich?">
            <p>
              Der Bedarf hängt von Geschlecht, Alter, Aktivität und Trainingsziel
              ab. Die Deutsche Gesellschaft für Ernährung (DGE) gibt
              Referenzwerte für die Allgemeinbevölkerung, Sportverbände und
              wissenschaftliche Fachgesellschaften liegen für Trainierende
              deutlich darüber.
            </p>
            <KTable
              headers={["Personengruppe", "Empfohlener Bedarf"]}
              rows={[
                { label: "Erwachsener (sitzend, untrainiert)", value: "0,8 g pro kg" },
                { label: "Senioren (ab 65)", value: "1,0 – 1,2 g pro kg" },
                { label: "Schwangere und Stillende", value: "1,0 – 1,3 g pro kg" },
                { label: "Ausdauersportler", value: "1,2 – 1,6 g pro kg", tone: "neutral" },
                { label: "Krafttraining (Erhalt)", value: "1,4 – 1,8 g pro kg", tone: "neutral" },
                { label: "Muskelaufbau / Hypertrophie", value: "1,6 – 2,2 g pro kg", tone: "good" },
                { label: "Diät / Kaloriendefizit", value: "1,8 – 2,4 g pro kg", tone: "accent" },
              ]}
            />
            <p className="text-[13px] text-white/55">
              Quellen: DGE-Referenzwerte, ISSN Position Stand on Protein and
              Exercise (Jäger et al. 2017), Helms et al. (2014).
            </p>
          </KSection>

          <KSection number="03" title="Verteilung über den Tag">
            <p>
              Studien zeigen klar: Wer seinen Tagesbedarf auf 3 bis 5 Mahlzeiten
              verteilt, baut effektiver Muskeln auf als jemand mit einer großen
              Eiweißmahlzeit. Pro Mahlzeit kann der Körper 25 bis 40 Gramm
              Protein optimal für die Muskelproteinsynthese nutzen — bei
              älteren Menschen sogar etwas mehr.
            </p>
            <p>
              Besonders wichtig ist die <span className="text-white">Mahlzeit nach
              dem Training</span>: Innerhalb von zwei Stunden danach reagieren
              Muskelzellen besonders sensibel auf Aminosäuren. 30 bis 40 Gramm
              hochwertiges Protein sind hier ideal — egal ob aus Lebensmitteln
              oder Whey.
            </p>
            <p>
              Auch die letzte Mahlzeit am Tag spielt eine Rolle. Casein
              (langsam verdauliches Milchprotein, z.B. in Magerquark) versorgt
              die Muskeln über mehrere Stunden mit Aminosäuren — gut für die
              Regeneration über Nacht.
            </p>
          </KSection>

          <KSection number="04" title="Pflanzlich vs. tierisch — was ist besser?">
            <p>
              Tierisches Protein hat eine höhere Bioverfügbarkeit (PDCAAS-Score
              meist 1,0) und enthält alle essentiellen Aminosäuren in optimalem
              Verhältnis. Pflanzliches Protein liegt im Schnitt etwas darunter
              und ist oft in einer Aminosäure limitiert (z.B. Lysin in
              Getreide, Methionin in Hülsenfrüchten).
            </p>
            <KTable
              headers={["Lebensmittel", "Protein pro 100 g"]}
              rows={[
                { label: "Whey Protein Pulver", value: "75 – 80 g", tone: "good" },
                { label: "Hähnchenbrust (gegart)", value: "23 g", tone: "good" },
                { label: "Lachs (gegart)", value: "22 g", tone: "good" },
                { label: "Magerquark", value: "12 g", tone: "good" },
                { label: "Skyr", value: "11 g", tone: "good" },
                { label: "Linsen (gekocht)", value: "9 g" },
                { label: "Tofu (fest)", value: "12 g" },
                { label: "Erbsenprotein-Pulver", value: "80 g", tone: "good" },
                { label: "Eier (1 Stück, ca. 60 g)", value: "6,5 g pro Ei" },
              ]}
            />
            <p>
              Praxistipp für Veganer: Kombiniere Hülsenfrüchte mit Getreide
              (Linsen + Reis, Bohnen + Mais), oder ergänze mit Erbsenprotein.
              Damit deckst du das volle Aminosäureprofil ab. Wer flexibel ist:
              Eier und Magerquark gehören zu den günstigsten und
              hochwertigsten Quellen überhaupt.
            </p>
          </KSection>

          <KSection number="05" title="Mythen und Missverständnisse">
            <ul className="space-y-4 pl-1">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">"Zu viel Protein schadet den Nieren"</span>
                  <span className="mt-1 block text-white/65">
                    Bei gesunden Nieren gibt es keine Evidenz dafür. Eine große
                    Übersichtsarbeit (Devries et al. 2018) fand keine
                    nachteiligen Effekte bei Aufnahmen bis 2,8 g pro kg über
                    längere Zeit. Wer bereits eine Nierenerkrankung hat, sollte
                    individuell mit dem Arzt abstimmen.
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">"Mehr als 30 g pro Mahlzeit bringen nichts"</span>
                  <span className="mt-1 block text-white/65">
                    Halbwahrheit. Die Muskelproteinsynthese plateau&apos;t bei etwa
                    30–40 g, aber Aminosäuren werden trotzdem für andere
                    Funktionen verwertet. Größere Mahlzeiten verzögern den
                    Hunger länger und stören den Aufbau nicht.
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">"Whey ist besser als Lebensmittel"</span>
                  <span className="mt-1 block text-white/65">
                    Nein. Whey ist praktisch und schnell verfügbar, aber
                    Vollwert-Lebensmittel liefern zusätzlich Vitamine,
                    Mineralien und sättigen besser. Whey ist eine Ergänzung,
                    kein Ersatz.
                  </span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">"Frauen brauchen weniger Protein"</span>
                  <span className="mt-1 block text-white/65">
                    Stimmt nur in absoluten Werten (kleinere Körpermasse).
                    Pro Kilogramm ist der Bedarf identisch. Für Muskelaufbau
                    und Erhalt während einer Diät gelten dieselben
                    Empfehlungen.
                  </span>
                </span>
              </li>
            </ul>
          </KSection>

          <KSection number="06" title="Quellen und Studien">
            <KSources
              items={[
                { label: "ISSN Position Stand: Protein and Exercise (Jäger et al. 2017)" },
                { label: "Schoenfeld & Aragon — How much protein can the body use in a single meal? (2018)" },
                { label: "Helms et al. — A Systematic Review of Dietary Protein During Caloric Restriction (2014)" },
                { label: "Phillips & Van Loon — Dietary protein for athletes (2011)" },
                { label: "Deutsche Gesellschaft für Ernährung — Referenzwerte für Protein", href: "https://www.dge.de/wissenschaft/referenzwerte/protein/" },
                { label: "Devries et al. — Changes in Kidney Function Do Not Differ between Healthy Adults Consuming Higher- vs Lower-Protein Diets (2018)" },
              ]}
            />
          </KSection>
        </div>
      </KnowledgeWidget>

      <ProteinCalculator />

      <RelatedRechner excludeSlug="proteinbedarf" />

      <FitnessCTA />
    </>
  );
}
