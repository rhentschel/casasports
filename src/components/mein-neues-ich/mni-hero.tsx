"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function MniHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[700px] items-end overflow-hidden bg-cs-black pb-24 md:pb-32">
      <div className="absolute inset-0 animate-[kenburns_30s_ease-in-out_infinite_alternate]">
        <Image
          src="/images/mein-neues-ich-hero.webp"
          alt="Mein Neues Ich Programm"
          fill
          className="img-cinema object-cover"
          priority
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-black/[0.45]" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-transparent to-cs-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16">
        <p
          className={cn(
            "mb-6 text-xs font-medium uppercase tracking-[0.2em] text-cs-accent transition-all duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          12-Wochen-Programm
        </p>

        <div className="overflow-hidden">
          <h1
            className={cn(
              "text-[clamp(2.8rem,7.5vw,6.5rem)] font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
              loaded ? "translate-y-0" : "translate-y-[120%]"
            )}
          >
            Mein neues
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className={cn(
              "text-[clamp(2.8rem,7.5vw,6.5rem)] font-black uppercase leading-[1.05] tracking-[-0.04em] transition-transform delay-200 duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
              loaded ? "translate-y-0" : "translate-y-[120%]"
            )}
          >
            <span className="text-cs-accent">Ich.</span>
          </h1>
        </div>

        <p
          className={cn(
            "mt-8 max-w-lg text-[15px] leading-relaxed text-white/60 transition-all delay-600 duration-1000",
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          Für alle, die &quot;schon alles versucht&quot; haben: Das
          12-Wochen-Programm, das bei &quot;Woche 13&quot; beginnt.
        </p>

        <div
          className={cn(
            "mt-10 flex items-center gap-6 transition-all delay-800 duration-1000",
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          <a
            href="#anmeldung"
            className="group relative overflow-hidden border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
          >
            Jetzt anmelden
          </a>
          <span className="hidden text-[15px] font-black text-cs-white sm:block">
            299 €{" "}
            <span className="text-[13px] font-medium text-white/40">
              / 12 Wochen
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
