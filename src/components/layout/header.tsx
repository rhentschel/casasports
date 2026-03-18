"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-cs-black/95 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="relative h-10 w-40">
          <Image
            src="/images/casa-sports-logo.webp"
            alt={siteConfig.name}
            fill
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="/probetraining"
            className="bg-cs-accent px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-white hover:text-cs-black"
          >
            Probetraining
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-cs-black transition-all duration-500 lg:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex h-full flex-col justify-center px-12">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-[family-name:var(--font-display)] text-4xl italic text-white/30 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12 border-t border-cs-gray-800 pt-8">
            <Link
              href="/probetraining"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-cs-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white"
            >
              Gratis Probetraining
            </Link>
            <p className="mt-6 text-sm text-cs-gray-400">
              {siteConfig.phone} &middot; {siteConfig.email}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
