"use client";

import { useState } from "react";
import { useReveal } from "@/lib/use-reveal";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Brauche ich eine bestimmte Ausbildung?",
    answer:
      "Fuer Trainerstellen benoetigen wir mindestens eine B-Lizenz. Fuer den Empfang und die Ausbildung reicht Motivation und Lernbereitschaft. Bei Kursleiter-Stellen solltest du eine gueltige Lizenz im jeweiligen Bereich haben. Generell gilt: Persoenlichkeit schlaegt Papier.",
  },
  {
    question: "Kann ich auch als Quereinsteiger anfangen?",
    answer:
      "Ja, absolut. Wir haben mehrfach Quereinsteiger erfolgreich ins Team integriert. Wenn du die Leidenschaft mitbringst, helfen wir dir bei den fachlichen Qualifikationen. Wir unterstuetzen dich finanziell bei Lizenzen und Fortbildungen.",
  },
  {
    question: "Wie sehen die Arbeitszeiten aus?",
    answer:
      "Unser Studio ist Mo-Fr von 8-22 Uhr und Sa-So von 10-18 Uhr geoeffnet. Die Schichten planen wir gemeinsam im Team, in der Regel 2-3 Wochen im Voraus. Wir achten auf faire Verteilung von Frueh- und Spaetschichten und beruecksichtigen persoenliche Wuensche.",
  },
  {
    question: "Gibt es Aufstiegsmoeglichkeiten?",
    answer:
      "Definitiv. Unser Studioleiter Hidayet hat als Trainer angefangen, unser Azubi Eren uebernimmt bereits eigene Projekte. Wir foerdern Eigeninitiative und schaffen Entwicklungsmoeglichkeiten, wenn du dich einbringst.",
  },
  {
    question: "Was verdient man bei Casa Sports?",
    answer:
      "Wir zahlen branchenueblich und fair. Dazu kommen Benefits wie kostenloses Training, Wellness-Nutzung, bezahlte Fortbildungen und ein echtes Teamklima. Genaue Konditionen besprechen wir gerne im persoenlichen Gespraech.",
  },
  {
    question: "Kann ich vorher mal reinschnuppern?",
    answer:
      "Natuerlich! Komm einfach auf ein kostenloses Probetraining vorbei und sprich uns vor Ort an. So bekommst du den besten Eindruck von unserem Studio, dem Team und der Atmosphaere.",
  },
  {
    question: "Ich finde keine passende Stelle. Kann ich mich trotzdem bewerben?",
    answer:
      "Unbedingt. Wir freuen uns immer ueber Initiativbewerbungen. Auch wenn gerade keine passende Stelle ausgeschrieben ist, aendert sich das oft schnell. Wir speichern deine Bewerbung und melden uns, sobald etwas frei wird.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.04]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="pr-8 text-[15px] font-medium text-cs-white">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-cs-gray-500 transition-transform duration-300",
            isOpen && "rotate-180 text-cs-accent"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm leading-relaxed text-cs-gray-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function JobsFaq() {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal bg-cs-black py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Haeufige Fragen
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
              Noch <span className="text-cs-accent">Fragen?</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-white/60">
              Hier findest du Antworten auf die haeufigsten Fragen von
              Bewerberinnen und Bewerbern. Falls deine Frage nicht dabei ist,
              ruf uns einfach an.
            </p>
            <a
              href="tel:0236857060"
              className="mt-6 inline-block text-sm text-cs-accent transition-colors hover:text-cs-accent-hover"
            >
              02368 57060
            </a>
          </div>

          {/* Right - FAQ list */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-white/[0.04]">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
