import type { Metadata } from "next";
import Image from "next/image";
import { ProbetrainingForm } from "@/components/probetraining-form";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Gratis Probetraining anfragen",
  description:
    "Komm kostenlos zum Probetraining. Keine versteckten Kosten, kein Vertrag, keine Verpflichtung. Wir melden uns innerhalb von 24 Stunden.",
};

const benefits = [
  "100% kostenlos und unverbindlich",
  "Persoenliche Einweisung durch unser Team",
  "Volle Geraete- und Kursauswahl",
  "Keine versteckten Kosten",
];

export default function ProbetrainingPage() {
  return (
    <main className="min-h-screen bg-cs-black pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-8 py-16 md:px-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Kostenlos und unverbindlich
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white md:text-6xl">
              Dein erstes Training
              <br />
              <span className="text-cs-accent">geht auf uns.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
              Komm vorbei, lerne das Studio kennen und trainiere kostenlos. Keine
              versteckten Kosten, kein Vertrag, keine Verpflichtung.
            </p>

            <ul className="mt-10 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-cs-accent/40 bg-cs-accent/10">
                    <Check className="h-3 w-3 text-cs-accent" />
                  </span>
                  <span className="text-[14px] text-cs-white">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 hidden border-l-2 border-cs-accent pl-5 lg:block">
              <p className="text-[13px] italic leading-relaxed text-white/60">
                &ldquo;Jeder startet irgendwo. Wichtig ist, dass du startest.
                Den Rest machen wir gemeinsam.&rdquo;
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-cs-accent">
                Naim · Gruender
              </p>
            </div>

            <div className="relative mt-10 aspect-[16/10] overflow-hidden lg:hidden">
              <Image
                src="/images/casasports-personal-training.webp"
                alt="Casa Sports Studio"
                fill
                className="img-cinema object-cover"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex items-start">
            <div className="w-full border border-white/[0.08] bg-white/[0.015] p-8 md:p-10">
              <ProbetrainingForm source="Probetraining Page" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
