import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <Image
        src="/images/casasports-bodyhealth.webp"
        alt="Casa Sports Training"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-light uppercase tracking-[0.3em] text-cs-accent">
          Starte jetzt
        </p>
        <h2 className="mt-6 text-5xl font-extralight leading-[1.05] tracking-tight text-white md:text-7xl">
          Dein erstes Training
          <br />
          geht <span className="font-bold text-cs-accent">auf uns.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-md text-base font-light text-white/40">
          Komm vorbei, lern das Team kennen und trainiere einen Tag kostenlos.
          Ohne Verpflichtung.
        </p>
        <Link
          href="/probetraining"
          className="group mt-12 inline-flex items-center gap-3 bg-cs-accent px-12 py-5 text-sm font-medium tracking-wider text-white transition-all duration-500 hover:bg-white hover:text-cs-black"
        >
          Gratis Probetraining
          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
