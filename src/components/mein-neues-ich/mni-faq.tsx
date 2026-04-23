"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";
import { mniFaqs as faqs } from "@/data/mni-faq";

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
            <p className="mt-6 text-base leading-relaxed text-white/60">
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
                  <span className="pr-8 text-base font-medium text-cs-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-white/55 transition-transform duration-300",
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
                  <p className="text-base leading-relaxed text-white/50">
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
