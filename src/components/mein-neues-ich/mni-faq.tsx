"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const faqs = [
  {
    question: 'Was ist die "Mein neues Ich"-Challenge?',
    answer:
      "Ein 12-Wochen-Programm, mit dem du Fett verlierst, Muskeln aufbaust und deinen Stoffwechsel aktivierst. Es geht nicht nur ums Training, sondern um das ganze Paket aus Bewegung, Ernährung und Motivation. Du bist Teil einer motivierten Gruppe, die dich mitzieht, anfeuert und unterstützt.",
  },
  {
    question: "Wann startet das Programm?",
    answer:
      "Der nächste Start ist im Januar 2026. Ab dann begleiten wir dich 12 Wochen lang mit klarer Struktur, Motivation und gezieltem Training. Du trainierst zwei bis drei Mal pro Woche, vormittags oder nachmittags, so wie es in dein Leben passt.",
  },
  {
    question: "Wo wird trainiert?",
    answer:
      "Direkt bei uns im Casa Sports Studio in Oer-Erkenschwick. Hier erwartet dich eine familiäre Atmosphäre, ein motiviertes Team und Menschen mit denselben Zielen wie du. Persönliche Betreuung und echtes Coaching, nicht anonyme Workouts.",
  },
  {
    question: "Welches Training erwartet mich?",
    answer:
      "Eine Kombination aus Intervall- und Krafttraining. Du brauchst keine Vorkenntnisse, denn wir erklären jede Übung und passen sie an dein Level an. Das Training ist effektiv, abwechslungsreich und macht Spaß.",
  },
  {
    question: "Wie funktioniert die Ernährung?",
    answer:
      "Du bekommst ein Rezept-E-Book mit leckeren, ausgewogenen Mahlzeiten. Kein Kalorienzählen, kein Abwiegen, kein Verzicht. Wenn es leicht umsetzbar ist, bleibst du automatisch dran.",
  },
  {
    question: "Wie oft wird trainiert?",
    answer:
      "Zwei bis drei Mal pro Woche, jeweils etwa eine Stunde. Die Einheiten sind abwechslungsreich und für jedes Fitnesslevel geeignet. Schon nach kurzer Zeit spürst du, wie du dich fitter und stärker fühlst.",
  },
  {
    question: "Muss ich Kalorien zählen?",
    answer:
      "Nein. Bei uns zählt dein Gefühl, nicht die Zahl auf der Waage. Das ist kein Diätprogramm, sondern ein einfaches System, das funktioniert.",
  },
  {
    question: "Was kostet das Programm?",
    answer:
      "299 Euro für 12 Wochen. Alles ist inklusive: Training, Ernährungscoaching, Motivation in der Gruppe und persönliche Betreuung. Keine versteckten Kosten und kein Abo.",
  },
];

export function MniFaq() {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Die wichtigsten Infos
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
              FAQ
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              Alles was du über das &quot;Mein neues Ich&quot;-Programm wissen musst.
            </p>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="border-b border-white/[0.06]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="pr-8 text-[15px] font-medium text-cs-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-white/30 transition-transform duration-300",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === i
                      ? "max-h-[500px] pb-5"
                      : "max-h-0"
                  )}
                >
                  <p className="text-[14px] leading-relaxed text-white/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
