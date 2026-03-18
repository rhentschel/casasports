import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const items = [
  {
    image: "/images/casasports-wellness-bereich-1.webp",
    label: "Wellness-Bereich",
    brand: "",
  },
  {
    image: "/images/casasports-klafs-sauna.webp",
    label: "Sauna",
    brand: "KLAFS",
  },
  {
    image: "/images/casasports-infrarotkabine-roeger-web.webp",
    label: "Infrarotkabine",
    brand: "Röger",
  },
];

export function WellnessPreview() {
  return (
    <section className="bg-cs-gray-900 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-[family-name:var(--font-display)] text-4xl italic tracking-tight text-cs-white md:text-5xl">
          Wellness & Sauna
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-cs-gray-400">
          KLAFS Sauna, Röger Infrarotkabine und ein Wellness-Bereich, der keine
          Wünsche offen lässt.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/60" />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-gold transition-all duration-700 ease-out group-hover:w-full" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                {item.brand && (
                  <span className="mb-2 inline-block text-[10px] uppercase tracking-[0.3em] text-cs-gold/60">
                    {item.brand}
                  </span>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-2xl italic text-white">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/wellness"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cs-gold/60 transition-colors duration-300 hover:text-white"
          >
            Wellness entdecken
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
