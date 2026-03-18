import Link from "next/link";
import { Flame, Sun, Battery, ArrowRight } from "lucide-react";
import { wellnessFeatures } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Sun,
  Battery,
};

export function WellnessPreview() {
  return (
    <section className="bg-cs-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cs-gold">
              Wellness & Sauna
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-cs-white md:text-4xl">
              Trainiere smarter, regeneriere schneller
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-cs-gray-400">
              Dein Workout endet nicht mit dem letzten Satz. Bei Casa Sports
              bekommst du das volle Paket: effektives Training plus Wellness in
              einem.
            </p>

            <div className="mt-10 space-y-6">
              {wellnessFeatures.map((feature) => {
                const Icon = iconMap[feature.icon];
                return (
                  <div key={feature.name} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cs-gold/10 text-cs-gold">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-cs-white">
                        {feature.name}
                      </h3>
                      <p className="mt-1 text-sm text-cs-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/wellness"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cs-gold transition-colors hover:text-cs-gold-hover"
            >
              Wellness entdecken
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-cs-gray-800 bg-cs-gray-900">
            <div className="absolute inset-0 bg-gradient-to-br from-cs-gold/5 to-cs-accent/5" />
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Flame className="mx-auto h-16 w-16 text-cs-gold/30" />
                <p className="mt-4 text-sm text-cs-gray-500">
                  Wellness-Bereich
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
