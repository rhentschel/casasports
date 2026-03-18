import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="bg-cs-gray-900 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Image side */}
          <div className="relative lg:col-span-5">
            <div className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/naim-casasports.webp"
                alt="Naim Obeid - Inhaber Casa Sports"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-gray-900/80 to-transparent" />
            </div>
            {/* Decorative accent block */}
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-cs-accent/20 lg:block" />
          </div>

          {/* Text side */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cs-accent">
              Dein Studio
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-cs-white md:text-5xl">
              Kein anonymes
              <br />
              Fitnessstudio.
            </h2>

            <div className="mt-8 h-px w-16 bg-cs-accent" />

            <p className="mt-8 text-lg leading-relaxed text-cs-gray-400">
              Casa Sports ist anders. Hier kennt man sich, hier wird trainiert
              und hier wird Ergebnis geliefert. Inhaber Naim Obeid und sein Team
              stehen für persönliche Betreuung statt Massenabfertigung.
            </p>

            <blockquote className="mt-8 border-l-2 border-cs-accent pl-6">
              <p className="text-lg italic text-white/80">
                &ldquo;Wahre Stärke zeigt sich nicht darin, was du kannst,
                sondern darin, was du überwindest.&rdquo;
              </p>
              <cite className="mt-3 block text-sm font-bold not-italic uppercase tracking-wider text-cs-gray-400">
                Naim Obeid, Inhaber
              </cite>
            </blockquote>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                { value: "Oer-Erkenschwick", label: "Standort" },
                { value: "Persönlich", label: "Betreuung" },
                { value: "KLAFS & Röger", label: "Premium Wellness" },
                { value: "Alle Level", label: "Anfänger bis Profi" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group border-l border-cs-gray-700 pl-5 transition-all duration-300 hover:border-cs-accent"
                >
                  <p className="font-bold text-cs-white transition-colors duration-300 group-hover:text-cs-accent">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cs-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
