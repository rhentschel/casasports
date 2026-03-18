import Image from "next/image";

const features = [
  {
    image: "/images/casasports-geraete.webp",
    title: "Modernste Geräte",
    text: "Erstklassiges Equipment für effektives Kraft- und Ausdauertraining.",
  },
  {
    image: "/images/casasports-personal-training.webp",
    title: "Personal Training",
    text: "Dein Trainer kennt deinen Namen, nicht nur deine Mitgliedsnummer.",
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    title: "Premium Wellness",
    text: "KLAFS Sauna und Röger Infrarot. Regeneration auf höchstem Niveau.",
  },
];

export function Features() {
  return (
    <section className="bg-cs-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-4xl italic tracking-tight text-cs-white md:text-5xl">
          Was uns ausmacht
        </h2>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/60" />

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-accent transition-all duration-700 ease-out group-hover:w-full" />

              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-8 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="font-[family-name:var(--font-display)] text-2xl italic text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/0 transition-all duration-500 group-hover:text-white/60">
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
