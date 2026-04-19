"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sun,
  Moon,
  Dumbbell,
  Mail,
  ChevronDown,
  Flame,
} from "lucide-react";
import { navigation, primaryNavigation, siteConfig } from "@/data/site";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { NewsletterModal } from "@/components/ui/newsletter-modal";
import { MegaMenu, type MegaMenuItem } from "./mega-menu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

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
      title: "Mitglied werden",
      icon: Flame,
      href: "/mitglied-werden",
    },
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
          <Link href="/" className="relative h-14 w-48 md:h-16 md:w-56">
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
                const isOpenMega = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors duration-300",
                        isOpenMega
                          ? "text-cs-white"
                          : "text-white/60 hover:text-white"
                      )}
                      aria-expanded={isOpenMega}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 transition-transform duration-300",
                          isOpenMega && "rotate-180"
                        )}
                      />
                    </button>
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

          <div className="hidden items-center lg:flex">
            <ExpandableTabs
              tabs={quickTabs}
              activeIndex={
                pathname?.startsWith("/mitglied-werden")
                  ? 0
                  : pathname?.startsWith("/probetraining")
                  ? 1
                  : 0
              }
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 text-white lg:hidden"
            aria-label="Menü öffnen"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mega Menu (Desktop) */}
        {primaryNavigation
          .filter((item) => "children" in item && item.children)
          .map((item) => {
            const children = (item as { children: readonly MegaMenuItem[] })
              .children;
            return (
              <div
                key={item.label}
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <MegaMenu
                  items={children}
                  isOpen={openDropdown === item.label}
                  onClose={() => setOpenDropdown(null)}
                />
              </div>
            );
          })}
      </header>

      {mobileMenu}

      <NewsletterModal
        isOpen={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
      />
    </>
  );
}
