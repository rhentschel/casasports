import Image from "next/image";

const features = [
  {
    image: "/images/casasports-geraete.webp",
    title: "Modernste Geräte",
    text: "Erstklassiges Equipment für Kraft und Ausdauer.",
  },
  {
    image: "/images/casasports-personal-training.webp",
    title: "Personal Training",
    text: "Individuelle Betreuung, die dich wirklich weiterbringt.",
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    title: "Premium Wellness",
    text: "KLAFS Sauna und Röger Infrarot. Regeneration pur.",
  },
];

export function Features() {
  return (
    <section className="flex min-h-screen items-center bg-cs-black py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <p className="text-center text-sm font-light uppercase tracking-[0.3em] text-cs-accent">
          Was uns ausmacht
        </p>
        <h2 className="mt-4 text-center text-4xl font-extralight tracking-tight text-cs-white md:text-5xl">
          Drei <span className="font-bold">Gründe.</span>
        </h2>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/70" />

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-700 group-hover:w-full" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-lg font-bold tracking-wide text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm font-light text-white/50 transition-colors duration-500 group-hover:text-white/70">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
