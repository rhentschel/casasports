import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WellnessPreview() {
  return (
    <section className="bg-cs-gray-900 py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cs-gold">
              Wellness & Sauna
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-cs-white md:text-5xl">
              Regeneration
              <br />
              auf höchstem Niveau.
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-cs-gray-800 to-transparent ml-12 md:block" />
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Large panorama */}
          <div className="group relative overflow-hidden border border-cs-gray-800 transition-all duration-500 hover:border-cs-gray-600 md:col-span-2 md:row-span-2">
            <div className="relative aspect-[4/3] h-full min-h-[400px]">
              <Image
                src="/images/casasports-wellness-bereich-1.webp"
                alt="Wellness-Bereich"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="mb-4 h-px w-8 bg-cs-gold transition-all duration-500 group-hover:w-16" />
              <h3 className="text-3xl font-bold uppercase tracking-wide text-white">
                Wellness-Bereich
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50">
                Training und Recovery gehören zusammen. Unser Wellness-Bereich
                bietet dir alles für die perfekte Regeneration nach dem Workout.
              </p>
              <Link
                href="/wellness"
                className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cs-gold transition-all duration-300 hover:gap-3 hover:text-white"
              >
                Wellness entdecken
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Sauna */}
          <div className="group relative overflow-hidden border border-cs-gray-800 transition-all duration-500 hover:border-cs-gray-600">
            <div className="relative aspect-square">
              <Image
                src="/images/casasports-klafs-sauna.webp"
                alt="KLAFS Sauna"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="mb-2 inline-block border border-cs-gold/30 bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cs-gold backdrop-blur-sm">
                KLAFS
              </span>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                Sauna
              </h3>
            </div>
          </div>

          {/* Infrarot */}
          <div className="group relative overflow-hidden border border-cs-gray-800 transition-all duration-500 hover:border-cs-gray-600">
            <div className="relative aspect-square">
              <Image
                src="/images/casasports-infrarotkabine-roeger-web.webp"
                alt="Röger Infrarotkabine"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="mb-2 inline-block border border-cs-gold/30 bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cs-gold backdrop-blur-sm">
                Röger
              </span>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                Infrarotkabine
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
