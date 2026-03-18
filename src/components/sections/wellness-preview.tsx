import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WellnessPreview() {
  return (
    <section className="flex min-h-screen items-center bg-cs-gray-900 py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-light uppercase tracking-[0.3em] text-cs-gold">
            Wellness & Sauna
          </p>
          <h2 className="mt-4 text-4xl font-extralight tracking-tight text-cs-white md:text-5xl">
            Regeneration auf <span className="font-bold">höchstem Niveau.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base font-light text-cs-gray-400">
            KLAFS Sauna, Röger Infrarotkabine und ein Wellness-Bereich, der
            keine Wünsche offen lässt.
          </p>
        </div>

        {/* Image grid: 3 equal columns */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
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
          ].map((item) => (
            <div
              key={item.label}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cs-gold transition-all duration-700 group-hover:w-full" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                {item.brand && (
                  <span className="mb-2 inline-block text-[10px] font-light uppercase tracking-[0.3em] text-cs-gold">
                    {item.brand}
                  </span>
                )}
                <h3 className="text-lg font-bold tracking-wide text-white">
                  {item.label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-12 text-center">
          <Link
            href="/wellness"
            className="group inline-flex items-center gap-3 text-sm font-light tracking-wider text-cs-gold transition-all duration-300 hover:text-white"
          >
            Wellness entdecken
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
