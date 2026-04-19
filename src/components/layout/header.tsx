"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon, Dumbbell, Mail, ChevronDown } from "lucide-react";
import { navigation, primaryNavigation, siteConfig } from "@/data/site";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { NewsletterModal } from "@/components/ui/newsletter-modal";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleDropdownEnter(label: string) {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setOpenDropdown(label);
  }

  function handleDropdownLeave() {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  const mobileMenu = isOpen && mounted
    ? createPortal(
        <div
          className={cn(
            "fixed inset-0 z-[9999] bg-cs-black transition-opacity duration-500 lg:hidden",
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-7 z-[10000] text-white"
            aria-label="Menü schließen"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex h-full flex-col justify-center px-12">
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black uppercase tracking-tight text-white/50 transition-colors duration-300 hover:text-white md:text-4xl"
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
              <p className="mt-6 text-[13px] tracking-[0.1em] text-white/50">
                {siteConfig.phone}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

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

          <nav className="hidden items-center gap-0.5 lg:flex">
            {primaryNavigation.map((item) => {
              const hasChildren = "children" in item && item.children;
              if (hasChildren) {
                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      className="flex items-center gap-1 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 transition-colors duration-300 hover:text-white"
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200",
                        isOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-1 opacity-0"
                      )}
                    >
                      <div className="min-w-[220px] border border-white/[0.08] bg-cs-black/95 py-2 shadow-2xl backdrop-blur-xl">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.12em] text-white/70 transition-colors hover:bg-white/[0.04] hover:text-cs-accent"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/mitglied-werden"
              className="border border-cs-accent/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-cs-accent transition-all duration-300 hover:bg-cs-accent hover:text-cs-white"
            >
              Mitglied werden
            </Link>
            <ExpandableTabs tabs={quickTabs} defaultActive={0} />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 text-white lg:hidden"
            aria-label="Menü öffnen"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {mobileMenu}

      <NewsletterModal
        isOpen={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />
    </>
  );
}
