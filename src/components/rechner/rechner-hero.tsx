"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  overline: string;
  title: string;
  accent: string;
  description: string;
  image: string;
};

export function RechnerHero({ overline, title, accent, description, image }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-cs-black pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="absolute inset-0 animate-[kenburns_30s_ease-in-out_infinite_alternate]">
        <Image
          src={image}
          alt=""
          fill
          className="img-cinema object-cover"
          priority
          quality={90}
        />
      </div>

      <div className="absolute inset-0 bg-black/[0.55]" />
      <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-transparent to-cs-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-16">
        <nav
          aria-label="Brotkrumen"
          className={cn(
            "mb-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/50 transition-opacity duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <Link href="/rechner" className="transition-colors hover:text-white">
            Rechner
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span className="text-white">{overline}</span>
        </nav>

        <p
          className={cn(
            "mb-6 text-xs font-medium uppercase tracking-[0.2em] text-cs-accent transition-all duration-1000",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          {overline}
        </p>

        <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white">
          <span className="block overflow-hidden">
            <span
              className={cn(
                "block transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              {title}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className={cn(
                "block text-cs-accent transition-transform delay-200 duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                loaded ? "translate-y-0" : "translate-y-[120%]"
              )}
            >
              {accent}
            </span>
          </span>
        </h1>

        <p
          className={cn(
            "mt-8 max-w-xl text-base leading-relaxed text-white/60 transition-all delay-500 duration-1000",
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
