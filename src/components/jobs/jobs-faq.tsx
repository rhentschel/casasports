"use client";

import { useState } from "react";
import { useReveal } from "@/lib/use-reveal";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Brauche ich eine bestimmte Ausbildung?",
    answer:
      "Das hängt von der Stelle ab. Für Trainerstellen setzen wir eine entsprechende Lizenz voraus. Für den Empfang oder die Ausbildung zählen Motivation und Persönlichkeit. Sprich uns einfach an, dann klaeren wir gemeinsam, was passt.",
  },
  {
    question: "Kann ich auch als Quereinsteiger anfangen?",
    answer:
      "Grundsätzlich ja. Wenn du die Leidenschaft für Fitness mitbringst, finden wir gemeinsam den richtigen Einstieg. Schreib uns, was dich motiviert, und wir schauen, was möglich ist.",
  },
  {
    question: "Wie laeuft der Bewerbungsprozess ab?",
    answer:
      "Unkompliziert: Du schickst uns deine Bewerbung über das Formular oder per E-Mail. Wenn es passt, laden wir dich zu einem persönlichen Gespräch ins Studio ein. Danach folgt in der Regel ein Probearbeiten, damit beide Seiten sehen, ob die Chemie stimmt.",
  },
  {
    question: "Gibt es Aufstiegsmöglichkeiten?",
    answer:
      "Wir sind ein wachsendes Team und fördern Eigeninitiative. Wenn du dich einbringst und entwickeln willst, schaffen wir die Möglichkeiten dafuer. Details besprechen wir gerne im persönlichen Gespräch.",
  },
  {
    question: "Kann ich vorher mal reinschnuppern?",
    answer:
      "Natürlich. Komm einfach auf ein kostenloses Probetraining vorbei und sprich uns vor Ort an. So bekommst du den besten Eindruck von unserem Studio und dem Team.",
  },
  {
    question: "Ich finde keine passende Stelle. Kann ich mich trotzdem bewerben?",
    answer:
      "Unbedingt. Wir freuen uns über Initiativbewerbungen. Auch wenn gerade keine passende Stelle ausgeschrieben ist, melde dich trotzdem. Wir kommen auf dich zu, sobald sich etwas ergibt.",
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
        <span className="pr-8 text-base font-medium text-cs-white">
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
          <p className="pb-6 text-base leading-relaxed text-cs-gray-400">
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
              Häufige Fragen
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
              Noch <span className="text-cs-accent">Fragen?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              Hier findest du Antworten auf die häufigsten Fragen. Falls deine
              nicht dabei ist, ruf uns einfach an oder schreib uns.
            </p>
            <a
              href="tel:0236857060"
              className="mt-6 inline-block text-base text-cs-accent transition-colors hover:text-cs-accent-hover"
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
