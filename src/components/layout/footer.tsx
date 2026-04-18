import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-cs-black">
      <div className="mx-auto max-w-7xl px-8 py-20 md:px-16">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="relative inline-block h-10 w-40">
              <Image
                src="/images/casa-sports-logo.webp"
                alt={siteConfig.name}
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-cs-gray-500">
              Fitnessstudio, Kurse, Wellness und Sauna in Oer-Erkenschwick.
              Persönlich betreut seit Tag eins.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                {
                  icon: Instagram,
                  href: siteConfig.social.instagram,
                  label: "Instagram",
                },
                {
                  icon: Facebook,
                  href: siteConfig.social.facebook,
                  label: "Facebook",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-cs-gray-800 text-cs-gray-500 transition-all duration-300 hover:border-cs-accent hover:bg-cs-accent hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gray-500">
              Studio
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                { label: "Fitness", href: "/fitness" },
                { label: "Kurse", href: "/kurse" },
                { label: "Wellness", href: "/wellness" },
                { label: "Mein Neues Ich", href: "/mein-neues-ich" },
                { label: "Blog", href: "/blog" },
                { label: "Jobs", href: "/jobs" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cs-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gray-500">
              Kontakt
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-cs-gray-400 transition-colors duration-300 hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-cs-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-cs-gray-400 transition-colors duration-300 hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-cs-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-cs-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cs-accent" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.zip} {siteConfig.address.city}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gray-500">
              Rechtliches
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cs-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cs-gray-800/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <p className="text-xs text-cs-gray-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-xs text-cs-gray-500">
            Karlstra&szlig;e 4, 45739 Oer-Erkenschwick
          </p>
        </div>
      </div>
    </footer>
  );
}
