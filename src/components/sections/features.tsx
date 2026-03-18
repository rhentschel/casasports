import Image from "next/image";

const features = [
  {
    image: "/images/casasports-geraete.webp",
    title: "Modernste Geräte",
    text: "Erstklassiges Equipment für effektives Kraft- und Ausdauertraining.",
    num: "01",
  },
  {
    image: "/images/casasports-personal-training.webp",
    title: "Personal Training",
    text: "Dein Trainer kennt deinen Namen, nicht nur deine Mitgliedsnummer.",
    num: "02",
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    title: "Premium Wellness",
    text: "KLAFS Sauna und Röger Infrarotkabine. Regeneration auf höchstem Niveau.",
    num: "03",
  },
];

export function Features() {
  return (
    <section className="bg-cs-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cs-accent">
              Was uns ausmacht
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-cs-white md:text-5xl">
              Drei Gründe
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-cs-gray-800 to-transparent ml-12 md:block" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.num}
              className="group relative overflow-hidden border border-cs-gray-800 transition-all duration-500 hover:border-cs-gray-600"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/30 to-transparent" />

                {/* Number overlay */}
                <span className="absolute right-6 top-6 text-7xl font-black text-white/5 transition-colors duration-500 group-hover:text-cs-accent/10">
                  {feature.num}
                </span>
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-4 h-px w-8 bg-cs-accent transition-all duration-500 group-hover:w-16" />
                <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50 transition-colors duration-500 group-hover:text-white/70">
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
