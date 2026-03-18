import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-cs-gray-800 bg-cs-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              CASA<span className="text-cs-accent">SPORTS</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cs-gray-400">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-cs-gray-800 text-cs-gray-400 transition-colors hover:bg-cs-accent hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-cs-gray-800 text-cs-gray-400 transition-colors hover:bg-cs-accent hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cs-white">
              Studio
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Fitness", href: "/fitness" },
                { label: "Kurse", href: "/kurse" },
                { label: "Wellness", href: "/wellness" },
                { label: "Mein Neues Ich", href: "/mein-neues-ich" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cs-gray-400 transition-colors hover:text-cs-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cs-white">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-cs-gray-400 transition-colors hover:text-cs-white"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-cs-gray-400 transition-colors hover:text-cs-white"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-cs-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cs-white">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cs-gray-400 transition-colors hover:text-cs-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cs-gray-800 pt-8 text-center text-sm text-cs-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  );
}
