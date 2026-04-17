"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const faqs = [
  {
    question: 'Was ist die "Mein neues Ich"-Challenge?',
    answer:
      "Die Mein-neues-Ich-Challenge ist dein Neustart: ein 12-Wochen-Programm, mit dem du Fett verlierst, Muskeln aufbaust und deinen Stoffwechsel aktivierst. Es geht nicht nur ums Training, sondern um das ganze Paket aus Bewegung, Ernaehrung und Motivation. Du lernst, dich wohler zu fuehlen, staerker zu werden und wieder mit Energie durch den Alltag zu gehen. Ohne Diaeten oder Kalorienzaehlen. Das Besondere ist die Gemeinschaft. Du bist Teil einer motivierten Gruppe, die dich mitzieht, anfeuert und unterstuetzt.",
  },
  {
    question: "Wann startet die Challenge und wie lange dauert sie?",
    answer:
      "Wir begleiten dich 12 Wochen lang mit klarer Struktur, Motivation und gezieltem Training. Du trainierst zwei bis drei Mal pro Woche, vormittags oder nachmittags, so wie es in dein Leben passt. Egal, ob du arbeitest, Familie hast oder viel unterwegs bist. Das Programm laesst sich leicht integrieren. 12 Wochen, die du in dich selbst investierst. Und du wirst ueberrascht sein, wie viel sich in dieser Zeit veraendern kann. Die naechsten Starttermine erfaehrst du im Studio oder per Telefon.",
  },
  {
    question: "Wo findet das Training statt?",
    answer:
      "Trainiert wird direkt bei uns im Casa Sports Studio in Oer-Erkenschwick. Hier erwartet dich eine familiaere Atmosphaere, ein motiviertes Team und Menschen mit denselben Zielen wie du. Wir legen Wert auf persoenliche Betreuung und echtes Coaching, nicht auf anonyme Workouts. Unser Studio ist dein Ort zum Durchatmen, Abschalten und Weiterkommen. Wenn du hier bist, zaehlt nur eins: du und dein Fortschritt.",
  },
  {
    question: "Welche Trainingsform erwartet mich?",
    answer:
      "Dich erwartet eine Kombination aus Intervall- und Krafttraining. So bringen wir deinen Kreislauf in Schwung, foerdern die Fettverbrennung und staerken deine Muskulatur. Du brauchst keine Vorkenntnisse, denn wir erklaeren jede Uebung und passen sie an dein Level an. Das Training ist effektiv, abwechslungsreich und macht Spass. Gemeinsam mit der Gruppe spuerst du Energie, Motivation und echtes Teamgefuehl.",
  },
  {
    question: "Wie funktioniert das Ernaehrungskonzept?",
    answer:
      "Unsere Ernaehrung ist einfach und alltagstauglich. Du bekommst ein Rezept-E-Book mit leckeren, ausgewogenen Mahlzeiten, die dich satt machen und beim Abnehmen unterstuetzen. Kein Kalorienzaehlen, kein Abwiegen, kein Verzicht. Wir zeigen dir, wie gesunde Ernaehrung funktioniert, ohne komplizierte Regeln oder staendigen Stress. Wenn es leicht umsetzbar ist, bleibst du automatisch dran. Genau das ist das Ziel.",
  },
  {
    question: "Gibt es mentales Training oder Motivation?",
    answer:
      "Ja, auf jeden Fall. Motivation und mentale Staerke gehoeren fest zur Challenge. Wir helfen dir, dranzubleiben, auch wenn es mal schwer wird. In der Gruppe unterstuetzen wir uns, feiern kleine Erfolge und geben nicht auf. Da entsteht eine starke Energie. Man lacht zusammen, schwitzt zusammen und waechst zusammen. Wir pushen dich und halten dich auf Kurs. So bleibst du motiviert und merkst, dass gemeinsam alles leichter geht.",
  },
  {
    question: "Wie oft trainiere ich pro Woche und wie lange dauert eine Einheit?",
    answer:
      "Du trainierst zwei bis drei Mal pro Woche, jeweils etwa eine Stunde. In dieser Zeit bekommst du das Beste aus Kraft, Ausdauer und Motivation. Die Einheiten sind abwechslungsreich und fuer jedes Fitnesslevel geeignet. Schon nach kurzer Zeit spuerst du, wie du dich fitter, staerker und energiegeladener fuehlst. Zwei bis drei Stunden pro Woche reichen aus, um echte Fortschritte zu machen.",
  },
  {
    question: "Muss ich Kalorien zaehlen oder Lebensmittel abwiegen?",
    answer:
      "Nein. Bei uns zaehlt dein Gefuehl, nicht die Zahl auf der Waage. Du lernst, wie du dich gesund ernaehrst, ohne Kalorien zu zaehlen oder Essen abzuwiegen. Das ist kein Diaetprogramm, sondern ein einfaches System, das funktioniert. So bleibst du entspannt und erreichst deine Ziele ohne staendigen Druck.",
  },
  {
    question: "Passt das Programm auch in meinen Alltag?",
    answer:
      "Ja, das Programm passt in jeden Alltag. Ob Beruf, Familie oder Schichtdienst, du kannst flexibel trainieren und das Ernaehrungssystem laesst sich leicht umsetzen. Kein Stress, kein staendiges Planen, kein kompliziertes Tracking. Viele Teilnehmende sagen, dass sie hier zum ersten Mal wirklich drangeblieben sind. Und genau das ist der Unterschied. Es ist machbar und gibt dir Energie, statt sie zu rauben.",
  },
  {
    question: "Was kostet die Teilnahme?",
    answer:
      "Die Teilnahme kostet 299 Euro fuer 12 Wochen. Alles ist inklusive: Training, Ernaehrungscoaching, Motivation in der Gruppe und persoenliche Betreuung. Keine versteckten Kosten und kein Abo. Wenn du bereit bist, etwas zu veraendern, ist das eine Investition in dich selbst. Diese Entscheidung lohnt sich.",
  },
  {
    question: "Ab welchem Alter kann ich bei der Challenge mitmachen?",
    answer:
      "Mitmachen koennen alle zwischen 16 und 65 Jahren. Egal, ob du Anfaenger bist oder schon trainierst, wir holen dich da ab, wo du stehst. Unsere Uebungen passen wir individuell an, damit jeder sicher und effektiv mitmachen kann. Wichtig ist nicht dein Alter, sondern dein Wille, etwas zu veraendern. Wenn du motiviert bist, kuemmern wir uns um den Rest.",
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
