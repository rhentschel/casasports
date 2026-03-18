import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WellnessPreview() {
  return (
    <section className="bg-cs-black">
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/casasports-wellness-bereich-panorama.webp"
          alt="Wellness-Bereich Casa Sports"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cs-black via-transparent to-cs-black" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="-mt-32 relative z-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cs-gold">
              Wellness & Sauna
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-cs-white md:text-5xl">
              Regeneration
              <br />
              auf höchstem
              <br />
              Niveau
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cs-gray-400">
              KLAFS Sauna, Infrarotkabine von Röger und ein Wellness-Bereich,
              der keine Wünsche offen lässt. Training und Recovery gehören
              zusammen.
            </p>
            <Link
              href="/wellness"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cs-gold transition-colors hover:text-white"
            >
              Wellness entdecken
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="-mt-32 relative z-10 grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/casasports-klafs-sauna.webp"
                alt="KLAFS Sauna"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-bold uppercase tracking-wider text-white">
                KLAFS Sauna
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/casasports-infrarotkabine-roeger-web.webp"
                alt="Röger Infrarotkabine"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-bold uppercase tracking-wider text-white">
                Infrarotkabine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
