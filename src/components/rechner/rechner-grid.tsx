import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { rechnerList } from "@/data/rechner";

export function RechnerGrid() {
  return (
    <section className="bg-cs-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Alle Rechner
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-white md:text-5xl">
            Wähle dein Tool
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Jeder Rechner basiert auf wissenschaftlichen Formeln und ist auf den
            Alltag im Studio abgestimmt.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rechnerList.map((r, i) => {
            const num = String(i + 1).padStart(2, "0");
            const cardClasses = `group relative flex flex-col justify-between border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 ${
              r.available
                ? "hover:-translate-y-1 hover:border-cs-accent/70 hover:bg-white/[0.04]"
                : "cursor-not-allowed opacity-55"
            }`;

            const Wrapper = ({ children }: { children: React.ReactNode }) =>
              r.available ? (
                <Link href={`/rechner/${r.slug}`} className={cardClasses}>
                  {children}
                </Link>
              ) : (
                <div className={cardClasses} aria-disabled="true">
                  {children}
                </div>
              );

            return (
              <Wrapper key={r.slug}>
                <div>
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      {num} / {String(rechnerList.length).padStart(2, "0")}
                    </span>
                    {r.available ? (
                      <ArrowUpRight
                        className="h-4 w-4 text-white/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cs-accent"
                        aria-hidden
                      />
                    ) : (
                      <span className="border border-white/15 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-white/45">
                        Bald
                      </span>
                    )}
                  </div>

                  <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-cs-accent">
                    {r.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-black uppercase leading-tight tracking-[-0.02em] text-white">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-[13px] uppercase tracking-[0.15em] text-white/50">
                    {r.tagline}
                  </p>

                  <p className="mt-5 text-[14px] leading-relaxed text-white/60">
                    {r.description}
                  </p>
                </div>

                {r.available && (
                  <div className="mt-8 flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-white/55 transition-colors duration-500 group-hover:text-cs-accent">
                    <span>Berechnen</span>
                    <span className="block h-px w-6 bg-current" />
                  </div>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
