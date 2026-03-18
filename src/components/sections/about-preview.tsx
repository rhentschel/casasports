import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="bg-cs-gray-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/naim-casasports.webp"
              alt="Naim Obeid - Inhaber Casa Sports"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cs-accent">
              Dein Studio
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-cs-white md:text-5xl">
              Kein anonymes
              <br />
              Fitnessstudio
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cs-gray-400">
              Casa Sports ist anders. Hier kennt man sich, hier wird trainiert
              und hier wird Ergebnis geliefert. Inhaber Naim Obeid und sein Team
              stehen für persönliche Betreuung statt Massenabfertigung.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8">
              {[
                { value: "Oer-Erkenschwick", label: "Standort" },
                { value: "Persönlich", label: "Betreuung" },
                { value: "KLAFS & Röger", label: "Wellness-Partner" },
                { value: "Alle Level", label: "Von Anfänger bis Profi" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-cs-accent pl-4"
                >
                  <p className="font-bold text-cs-white">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-cs-gray-400">
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
