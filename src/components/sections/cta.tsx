import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/casasports-bodyhealth.webp"
        alt="Casa Sports"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative text-center">
        <h2 className="font-[family-name:var(--font-display)] text-5xl italic leading-[1.1] text-white md:text-7xl">
          Dein erstes Training
          <br />
          geht <span className="text-cs-accent">auf uns.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-white/40">
          Komm vorbei, lern das Team kennen und trainiere einen Tag kostenlos.
          Ohne Verpflichtung.
        </p>
        <Link
          href="/probetraining"
          className="group mt-10 inline-flex items-center gap-3 bg-cs-accent px-10 py-4 text-sm tracking-wider text-white transition-all duration-500 hover:bg-white hover:text-cs-black"
        >
          Gratis Probetraining
          <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
