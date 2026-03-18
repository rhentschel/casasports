"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon, Dumbbell, Mail } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { NewsletterModal } from "@/components/ui/newsletter-modal";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickTabs = [
    {
      title: "Probetraining",
      icon: Dumbbell,
      href: "/probetraining",
    },
    {
      title: "Newsletter",
      icon: Mail,
      onClick: () => setNewsletterOpen(true),
    },
    { type: "separator" as const },
    {
      title: isDark ? "Light Mode" : "Dark Mode",
      icon: isDark ? Sun : Moon,
      onClick: () => setIsDark(!isDark),
    },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled ? "bg-cs-black/90 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10">
          <Link href="/" className="relative h-10 w-36">
            <Image
              src="/images/casa-sports-logo.webp"
              alt={siteConfig.name}
              fill
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white/40 transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <ExpandableTabs tabs={quickTabs} defaultActive={0} />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 text-white lg:hidden"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Fullscreen mobile menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-cs-black transition-opacity duration-500 lg:hidden",
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
        >
          <div className="flex h-full flex-col justify-center px-12">
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black uppercase tracking-tight text-white/20 transition-colors duration-300 hover:text-white md:text-4xl"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-12 border-t border-white/[0.06] pt-8">
              <Link
                href="/probetraining"
                onClick={() => setIsOpen(false)}
                className="inline-block border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white"
              >
                Gratis Probetraining
              </Link>
              <p className="mt-6 text-[13px] tracking-[0.1em] text-white/20">
                {siteConfig.phone}
              </p>
            </div>
          </div>
        </div>
      </header>

      <NewsletterModal
        isOpen={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />
    </>
  );
}
