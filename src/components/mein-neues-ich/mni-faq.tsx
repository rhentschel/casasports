"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const faqs = [
  {
    question: 'Was ist die "Mein neues Ich"-Challenge?',
    answer:
      "Ein 12-Wochen-Programm, mit dem du Fett verlierst, Muskeln aufbaust und deinen Stoffwechsel aktivierst. Es geht nicht nur ums Training, sondern um das ganze Paket aus Bewegung, Ernaehrung und Motivation. Du bist Teil einer motivierten Gruppe, die dich mitzieht, anfeuert und unterstuetzt.",
  },
  {
    question: "Wann startet das naechste Programm?",
    answer:
      "Neue Gruppen starten regelmaessig. Meld dich bei uns und wir sagen dir den naechsten Termin. Schreib uns per E-Mail, ruf an oder komm einfach im Studio vorbei.",
  },
  {
    question: "Wo wird trainiert?",
    answer:
      "Direkt bei uns im Casa Sports Studio in Oer-Erkenschwick. Hier erwartet dich eine familiaere Atmosphaere, ein motiviertes Team und Menschen mit denselben Zielen wie du. Persoenliche Betreuung und echtes Coaching, nicht anonyme Workouts.",
  },
  {
    question: "Welches Training erwartet mich?",
    answer:
      "Eine Kombination aus Intervall- und Krafttraining. Du brauchst keine Vorkenntnisse, denn wir erklaeren jede Uebung und passen sie an dein Level an. Das Training ist effektiv, abwechslungsreich und macht Spass.",
  },
  {
    question: "Wie funktioniert die Ernaehrung?",
    answer:
      "Du bekommst ein Rezept-E-Book mit leckeren, ausgewogenen Mahlzeiten. Kein Kalorienzaehlen, kein Abwiegen, kein Verzicht. Wenn es leicht umsetzbar ist, bleibst du automatisch dran.",
  },
  {
    question: "Wie oft wird trainiert?",
    answer:
      "Zwei bis drei Mal pro Woche, jeweils etwa eine Stunde. Die Einheiten sind abwechslungsreich und fuer jedes Fitnesslevel geeignet. Schon nach kurzer Zeit spuerst du, wie du dich fitter und staerker fuehlst.",
  },
  {
    question: "Muss ich Kalorien zaehlen?",
    answer:
      "Nein. Bei uns zaehlt dein Gefuehl, nicht die Zahl auf der Waage. Das ist kein Diaetprogramm, sondern ein einfaches System, das funktioniert.",
  },
  {
    question: "Was kostet das Programm?",
    answer:
      "299 Euro fuer 12 Wochen. Alles ist inklusive: Training, Ernaehrungscoaching, Motivation in der Gruppe und persoenliche Betreuung. Keine versteckten Kosten und kein Abo.",
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
              Alles was du ueber das &quot;Mein neues Ich&quot;-Programm wissen musst.
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
