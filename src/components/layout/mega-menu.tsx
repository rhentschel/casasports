"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Dumbbell,
  Users,
  Flame,
  Apple,
  Sparkles,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Dumbbell,
  Users,
  Flame,
  Apple,
  Sparkles,
};

export type MegaMenuItem = {
  label: string;
  href: string;
  tagline?: string;
  description?: string;
  icon?: string;
};

type Props = {
  items: readonly MegaMenuItem[];
  isOpen: boolean;
  onClose: () => void;
};

export function MegaMenu({ items, isOpen, onClose }: Props) {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-full z-40 transition-all duration-300",
        isOpen
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      )}
    >
      <div className="mx-auto mt-3 max-w-[1280px] px-6 md:px-10">
        <div className="overflow-hidden border border-white/[0.08] bg-cs-black/95 shadow-2xl shadow-black/60 backdrop-blur-2xl">
          <div className="grid grid-cols-[1.6fr_1fr]">
            {/* Left: Service Grid */}
            <div className="grid grid-cols-2 gap-0 border-r border-white/[0.06]">
              {items.map((item, idx) => {
                const Icon = item.icon ? ICONS[item.icon] : null;
                const isLastSpan =
                  idx === items.length - 1 && items.length % 2 === 1;
                const isLastRow = isLastSpan
                  ? true
                  : idx >= items.length - (items.length % 2 === 0 ? 2 : 1);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "group relative flex flex-col gap-3 border-white/[0.06] p-6 transition-colors hover:bg-white/[0.03]",
                      idx % 2 === 0 && !isLastSpan && "border-r",
                      !isLastRow && "border-b",
                      isLastSpan && "col-span-2"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-cs-accent/30 bg-cs-accent/[0.08] text-cs-accent transition-all duration-300 group-hover:border-cs-accent/60 group-hover:bg-cs-accent/15">
                        {Icon && <Icon className="h-4 w-4" />}
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/20 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cs-accent group-hover:opacity-100" />
                    </div>

                    {item.tagline && (
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cs-accent">
                        {item.tagline}
                      </p>
                    )}
                    <h3 className="text-xl font-black uppercase tracking-[-0.02em] text-cs-white transition-colors duration-300 group-hover:text-cs-accent">
                      {item.label}
                    </h3>
                    {item.description && (
                      <p className="text-base leading-relaxed text-white/55">
                        {item.description}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right: Feature Highlight */}
            <Link
              href="/probetraining"
              onClick={onClose}
              className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden p-8"
            >
              {/* Ken Burns Layer */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/images/casasports-functional-training.webp"
                  alt=""
                  fill
                  className="img-cinema animate-megamenu-kenburns object-cover object-center will-change-transform transition-[filter,transform] duration-[1.2s] ease-out group-hover:scale-[1.08] group-hover:brightness-110"
                  sizes="400px"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/15" />

              {/* Red diagonal sweep on hover */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-y-[-50%] -left-[120%] w-[60%] -rotate-12 bg-gradient-to-r from-transparent via-cs-accent/35 to-transparent opacity-0 transition-all duration-[900ms] ease-out group-hover:left-[120%] group-hover:opacity-100" />
              </div>

              {/* Animated accent line top */}
              <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] overflow-hidden">
                <div className="h-full w-0 bg-cs-accent transition-all duration-700 ease-out group-hover:w-full" />
              </div>

              {/* Pulse dot */}
              <div className="absolute right-5 top-5 flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cs-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cs-accent" />
              </div>

              {/* Content */}
              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cs-accent">
                  Kostenlos und unverbindlich
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-cs-white">
                  Dein erstes
                  <br />
                  Training
                  <br />
                  <span className="text-cs-accent">geht auf uns.</span>
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/70">
                  Komm vorbei, lerne das Studio kennen, trainiere gratis.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 border border-cs-accent bg-cs-accent px-5 py-2.5 text-[14px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 group-hover:bg-white group-hover:text-cs-accent">
                  Probetraining anfragen
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
