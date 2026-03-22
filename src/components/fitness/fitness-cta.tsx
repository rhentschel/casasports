import Link from "next/link";
import Image from "next/image";

export function FitnessCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/casasports-bodyhealth.webp"
        alt="Starte dein Training bei Casa Sports"
        fill
        className="img-cinema object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black/40 to-transparent" />

      <div className="relative z-10 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Bereit?
        </p>
        <h2 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
          Komm vorbei.
          <br />
          Trainiere <span className="text-cs-accent">kostenlos.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-sm text-[15px] leading-relaxed text-white/60">
          Dein erstes Training geht auf uns. Lern das Team kennen, teste die
          Geraete und entscheide dann.
        </p>
        <Link
          href="/probetraining"
          className="group mt-10 inline-flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
        >
          Gratis Probetraining
        </Link>
      </div>
    </section>
  );
}
