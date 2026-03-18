import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-cs-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-cs-gray-800 bg-cs-black p-12 md:p-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,57,70,0.1)_0%,_transparent_70%)]" />

          <div className="relative text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cs-accent">
              Starte jetzt
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-cs-white md:text-5xl">
              Wahre Stärke zeigt sich nicht darin,
              <br className="hidden md:block" /> was du kannst, sondern darin,
              <br className="hidden md:block" /> was du überwindest.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cs-gray-400">
              Mach den ersten Schritt. Dein kostenloses Probetraining wartet auf
              dich.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/probetraining"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cs-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-cs-accent-hover hover:gap-3"
              >
                Kostenloses Probetraining
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:0236857060"
                className="inline-flex items-center justify-center rounded-lg border border-cs-gray-700 px-8 py-4 text-base font-semibold text-cs-white transition-colors hover:border-cs-gray-500 hover:bg-cs-gray-800"
              >
                02368 57060 anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
