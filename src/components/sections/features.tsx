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
    text: "Individuelle Betreuung. Dein Trainer kennt deinen Namen, nicht nur deine Mitgliedsnummer.",
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    title: "Premium Wellness",
    text: "KLAFS Sauna und Infrarotkabine. Regeneration auf höchstem Niveau.",
  },
];

export function Features() {
  return (
    <section className="bg-cs-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group relative overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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
