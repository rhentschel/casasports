import Link from "next/link";
import Image from "next/image";

export function WellnessCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/casasports-klafs-sauna.webp"
        alt="KLAFS Sauna bei Casa Sports"
        fill
        className="img-cinema object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black/40 to-transparent" />

      <div className="relative z-10 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Bereit für mehr?
        </p>
        <h2 className="mt-6 text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
          Dein Körper verdient
          <br />
          mehr als nur <span className="text-cs-accent">Training.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-sm text-[15px] leading-relaxed text-white/60">
          Teste alles: Fitness, Kurse, Sauna und Wellness. Dein erstes Training
          geht auf uns.
        </p>
        <Link
          href="/probetraining"
          className="group mt-10 inline-flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent hover:text-cs-accent"
        >
          Gratis Probetraining
        </Link>
      </div>
    </section>
  );
}
