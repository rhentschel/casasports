import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { rechnerList } from "@/data/rechner";

type Props = {
  excludeSlug?: string;
};

export function RelatedRechner({ excludeSlug }: Props) {
  const others = rechnerList.filter((r) => r.slug !== excludeSlug).slice(0, 3);

  return (
    <section className="border-t border-white/5 bg-cs-black py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Weitere Rechner
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.03em] text-white md:text-4xl">
          Noch mehr berechnen
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {others.map((r) => (
            <Link
              key={r.slug}
              href={r.available ? `/rechner/${r.slug}` : "/rechner"}
              className="group relative block border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-cs-accent/60 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between">
                <p className="text-[11px] uppercase tracking-[0.2em] text-cs-accent">
                  {r.tagline}
                </p>
                <ArrowUpRight
                  className="h-4 w-4 text-white/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cs-accent"
                  aria-hidden
                />
              </div>
              <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-white">
                {r.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/55">{r.description}</p>
              {!r.available && (
                <span className="mt-5 inline-block border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Bald verfügbar
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
