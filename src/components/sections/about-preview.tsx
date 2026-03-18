import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="flex min-h-screen items-center bg-cs-gray-900 py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/naim-casasports.webp"
                alt="Naim Obeid"
                fill
                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            {/* Decorative frame offset */}
            <div className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full border border-cs-accent/20 lg:block" />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-light uppercase tracking-[0.3em] text-cs-accent">
              Naim Obeid
            </p>
            <h2 className="mt-6 text-5xl font-extralight leading-[1.1] tracking-tight text-cs-white md:text-6xl">
              Persönlich.
              <br />
              <span className="font-bold">Nicht anonym.</span>
            </h2>

            <p className="mt-10 text-lg font-light leading-relaxed text-cs-gray-400">
              Casa Sports ist anders. Hier kennt man sich, hier wird trainiert
              und hier wird Ergebnis geliefert. Inhaber Naim Obeid und sein Team
              stehen für persönliche Betreuung statt Massenabfertigung.
            </p>

            <blockquote className="mt-10 border-l border-cs-accent/40 pl-6">
              <p className="text-lg font-light italic leading-relaxed text-white/60">
                &ldquo;Wahre Stärke zeigt sich nicht darin, was du kannst,
                sondern darin, was du überwindest.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
