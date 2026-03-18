import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-40">
      <Image
        src="/images/casasports-bodyhealth.webp"
        alt="Casa Sports Training"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cs-accent/20 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cs-accent/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cs-accent">
            Starte jetzt
          </p>

          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
            Dein erstes
            <br />
            Training geht
            <br />
            <span className="text-cs-accent">auf uns.</span>
          </h2>

          <div className="mx-auto mt-8 h-px w-16 bg-cs-accent" />

          <p className="mt-8 text-lg text-white/50">
            Komm vorbei, lern das Team kennen und trainiere einen Tag kostenlos.
            <br className="hidden md:block" />
            Ohne Verpflichtung. Ohne Kleingedrucktes.
          </p>

          <Link
            href="/probetraining"
            className="group mt-12 inline-flex items-center gap-3 bg-cs-accent px-12 py-6 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-cs-black"
          >
            Gratis Probetraining buchen
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
