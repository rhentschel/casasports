"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-cs-gray-800/50 bg-cs-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-cs-white">
            CASA<span className="text-cs-accent">SPORTS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-cs-gray-300 transition-colors hover:bg-cs-gray-800 hover:text-cs-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm text-cs-gray-300 transition-colors hover:text-cs-white"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/probetraining"
            className="rounded-lg bg-cs-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cs-accent-hover"
          >
            Kostenloses Probetraining
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-cs-gray-300 transition-colors hover:bg-cs-gray-800 hover:text-cs-white lg:hidden"
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-cs-gray-800/50 bg-cs-black/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          isOpen ? "max-h-screen" : "max-h-0 border-t-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-cs-gray-300 transition-colors hover:bg-cs-gray-800 hover:text-cs-white"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-cs-gray-800 pt-4">
            <Link
              href="/probetraining"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg bg-cs-accent px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-cs-accent-hover"
            >
              Kostenloses Probetraining
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
