import type { Metadata } from "next";
import { RechnerHero } from "@/components/rechner/rechner-hero";
import { PulsCalculator } from "@/components/rechner/puls-calculator";
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
  title: "Trainingspuls Rechner",
  description:
    "Berechne deinen Maximalpuls und die optimalen Pulsbereiche für Cardio, Fettverbrennung und Ausdauer. Nach Karvonen-Methode mit Tanaka-Formel.",
};

export default function PulsPage() {
  return (
    <>
      <PageBreadcrumbs path="/rechner/trainingspuls" />
      <RechnerHero
        overline="Puls Rechner"
        title="Dein optimaler"
        accent="Trainingspuls."
        description="Effektives Cardio-Training braucht den richtigen Puls. Hier bekommst du deine 5 Trainingszonen nach der wissenschaftlichen Karvonen-Methode — präziser als die einfache Prozent-Regel."
        image="/images/casasports-spinning-kurs-1.webp"
      />

      <KnowledgeWidget
        overline="Hintergrund"
        title="Pulsgesteuertes Training erklärt"
        preview="Karvonen-Methode, die 5 Trainingszonen, polarisiertes Training und praktische Pulsmessung."
        readingTime="5 Min Lesezeit"
      >
        <div className="space-y-12">
          <KSection number="01" title="Warum Pulsgesteuert trainieren?">
            <p>
              Der Puls ist der ehrlichste Belastungsindikator deines Körpers. Er
              zeigt sofort, ob du im richtigen Bereich bist — egal ob du gut
              ausgeschlafen bist, gestresst, krank oder müde. Wer nach Tempo oder
              gefühlter Anstrengung trainiert, übersieht oft, dass derselbe
              „lockere Lauf" an manchen Tagen tatsächlich zur Belastungsgrenze wird.
            </p>
            <p>
              Studien aus dem Spitzensport (Seiler 2010, Stöggl &amp; Sperlich 2014)
              zeigen klar: Wer 80% seiner Trainingszeit in niedrigen Pulszonen
              verbringt und nur 20% in hohen, verbessert seine Leistung schneller
              als jemand, der ständig im mittleren Bereich trainiert. Das nennt
              man <span className="text-white">polarisiertes Training</span>.
            </p>
          </KSection>

          <KSection number="02" title="Maximalpuls: Welche Formel ist die beste?">
            <p>
              Die klassische Formel <span className="text-white">220 − Lebensalter</span>{" "}
              (Haskell &amp; Fox 1971) ist seit über 50 Jahren in jedem Lehrbuch
              und auf jeder Pulsuhr — und gleichzeitig erstaunlich ungenau. In
              einer Meta-Analyse von Tanaka et al. (2001) wich sie bei 60-Jährigen
              im Schnitt um 15 Schläge ab.
            </p>
            <KTable
              headers={["Formel", "Schätzung für 30 Jahre"]}
              rows={[
                { label: "Haskell (220 − Alter)", value: "190 bpm" },
                { label: "Tanaka (208 − 0,7 × Alter)", value: "187 bpm", tone: "good" },
                { label: "Inbar (205,8 − 0,685 × Alter)", value: "185 bpm" },
                { label: "Gellish (207 − 0,7 × Alter)", value: "186 bpm" },
              ]}
            />
            <p>
              Wir empfehlen Tanaka als Standard. Wer es ganz genau wissen will:
              Stufentest beim Sportmediziner oder im Studio mit erfahrenem Trainer.
            </p>
          </KSection>

          <KSection number="03" title="Karvonen-Methode statt einfacher Prozent-Rechnung">
            <p>
              Viele Pulsrechner nehmen einfach 70% vom Maximalpuls als „Fett-
              verbrennungszone" — das ist falsch und benachteiligt vor allem
              trainierte Sportler mit niedrigem Ruhepuls. Die Karvonen-Formel
              berücksichtigt deinen individuellen Ruhepuls und nutzt die
              Herzfrequenzreserve (HRR).
            </p>
            <p>
              Die Formel: <span className="text-white">Zielpuls = (HRmax − HRruhe) ×
              Intensität + HRruhe</span>. Bei einem Maximalpuls von 187, Ruhepuls
              60, und Zone 2 (60% Intensität) sind das (187 − 60) × 0,6 + 60 = 136
              bpm. Mit der einfachen Prozent-Methode wäre das nur 112 bpm — völlig
              unterfordert für ein effektives Cardio.
            </p>
          </KSection>

          <KSection number="04" title="Die 5 Trainingszonen im Detail">
            <KTable
              headers={["Zone", "Intensität / Effekt"]}
              rows={[
                { label: "Zone 1: Erholung (50–60%)", value: "Aktive Regeneration" },
                { label: "Zone 2: Fettverbrennung (60–70%)", value: "Grundlagenausdauer", tone: "good" },
                { label: "Zone 3: Aerob (70–80%)", value: "Cardio, Tempo-Training" },
                { label: "Zone 4: Schwelle (80–90%)", value: "Laktatschwelle, Wettkampf", tone: "warn" },
                { label: "Zone 5: Maximal (90–100%)", value: "HIIT, kurze Intervalle", tone: "accent" },
              ]}
            />
            <p>
              Wichtig zu wissen: Die „Fettverbrennungszone" ist nicht der schnellste
              Weg zum Fettverlust. Im prozentualen Vergleich verbrennst du mehr Fett
              bei niedrigerer Intensität — aber absolut betrachtet verbrauchst du in
              höheren Zonen mehr Gesamtkalorien (und das Defizit zählt).
            </p>
          </KSection>

          <KSection number="05" title="Praktische Pulsmessung">
            <p>
              Drei verlässliche Methoden für den Alltag:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Brustgurt:</span> Goldstandard für
                  Genauigkeit. Misst direkt am Herz, kaum Aussetzer.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Optische Sensoren am Handgelenk:</span>{" "}
                  Bequem, aber bei intensivem Training oft 5–10 bpm zu hoch oder zu
                  niedrig. Bei Cycling und Krafttraining besonders ungenau.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-cs-accent" />
                <span>
                  <span className="text-white">Manuell am Hals oder Handgelenk:</span>{" "}
                  15 Sekunden zählen, mal 4. Funktioniert für den Ruhepuls, aber
                  nicht zuverlässig während des Trainings.
                </span>
              </li>
            </ul>
            <p>
              Den Ruhepuls misst du am besten direkt nach dem Aufwachen, noch im
              Bett liegend. Drei Tage lang messen und mitteln — Tagesschwankungen
              durch Stress, Koffein und Schlaf können 10 bpm betragen.
            </p>
          </KSection>

          <KSection number="06" title="Quellen">
            <KSources
              items={[
                { label: "Tanaka, Monahan & Seals — Age-Predicted Maximal Heart Rate Revisited (2001)" },
                { label: "Karvonen, Kentala & Mustala — The effects of training on heart rate (1957)" },
                { label: "Seiler — What is best practice for training intensity and duration distribution? (2010)" },
                { label: "Stöggl & Sperlich — Polarized training has greater impact on key endurance variables (2014)" },
                { label: "American College of Sports Medicine — Guidelines for Exercise Testing and Prescription (10. Auflage)" },
              ]}
            />
          </KSection>
        </div>
      </KnowledgeWidget>

      <PulsCalculator />

      <RelatedRechner excludeSlug="trainingspuls" />

      <FitnessCTA />
    </>
  );
}
