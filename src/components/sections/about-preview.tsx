import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="bg-cs-gray-900 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image with offset frame */}
          <div className="relative">
            <div className="group relative overflow-hidden">
              <Image
                src="/images/naim-casasports.webp"
                alt="Naim Obeid"
                width={600}
                height={800}
                className="w-full object-cover transition-transform duration-[1s] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 -z-10 hidden h-full w-full border border-cs-accent/15 lg:block" />
          </div>

          {/* Text */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-cs-accent">
              Dein Studio
            </span>
            <h2 className="mt-6 text-5xl font-black uppercase tracking-tight leading-[1.1] text-cs-white md:text-6xl">
              Persönlich.
              <br />
              Nicht anonym.
            </h2>

            <p className="mt-10 text-base leading-relaxed text-cs-gray-400">
              Casa Sports ist anders. Hier kennt man sich, hier wird trainiert
              und hier wird Ergebnis geliefert. Inhaber Naim Obeid und sein Team
              stehen für persönliche Betreuung statt Massenabfertigung.
            </p>

            <blockquote className="mt-10 border-l border-cs-accent/30 pl-6">
              <p className="text-lg leading-relaxed text-white/50">
                &ldquo;Wahre Stärke zeigt sich nicht darin, was du kannst,
                sondern darin, was du überwindest.&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cs-gray-500">
                Naim Obeid
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
