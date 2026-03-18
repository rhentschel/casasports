import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <Image
        src="/images/casasports-fitnessstudio-oer-erkenschwick.webp"
        alt="Casa Sports Studio"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cs-accent">
          Starte jetzt
        </p>
        <h2 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
          Dein erstes Training
          <br />
          geht auf uns.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
          Komm vorbei, lern das Team kennen und trainiere einen Tag kostenlos.
          Ohne Verpflichtung, ohne Kleingedrucktes.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/probetraining"
            className="group inline-flex items-center gap-2 bg-cs-accent px-10 py-5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-cs-black"
          >
            Gratis Probetraining buchen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
