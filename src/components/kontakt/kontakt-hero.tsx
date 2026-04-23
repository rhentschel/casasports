import Image from "next/image";

export function KontaktHero() {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-cs-black pt-24">
      <Image
        src="/images/casasports-hero-1.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="img-cinema object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/70 to-cs-black/30" />

      <div className="relative mx-auto w-full max-w-7xl px-8 py-20 md:px-16 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cs-accent">
          Kontakt
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-cs-white md:text-6xl">
          Wir freuen uns, <br />
          von dir zu hören.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
          Ob Frage, Feedback oder Probetraining: Wir sind für dich da.
          Schreib uns, ruf an oder komm einfach vorbei.
        </p>
      </div>
    </section>
  );
}
