import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/data/site";

const openingHours = [
  { days: "Mo - Fr", hours: "09:00 - 21:30" },
  { days: "Sa - So", hours: "10:00 - 14:00" },
];

const items = [
  {
    icon: Phone,
    label: "Telefon",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`,
    href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`,
    )}`,
  },
];

export function KontaktInfo() {
  return (
    <div className="space-y-10">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
          So erreichst du uns
        </p>
        <h2 className="mt-3 text-2xl font-black uppercase leading-[1.1] tracking-tight text-cs-white md:text-3xl">
          Drei Wege. Ein Team.
        </h2>
      </div>

      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.label === "Adresse" ? "_blank" : undefined}
              rel={item.label === "Adresse" ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-4 border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-cs-accent/40 hover:bg-white/[0.04]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-cs-accent transition-colors group-hover:border-cs-accent group-hover:bg-cs-accent group-hover:text-white">
                <item.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                  {item.label}
                </p>
                <p className="mt-1.5 break-words text-[15px] text-cs-white">
                  {item.value}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="border border-white/[0.06] bg-white/[0.02] p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-cs-accent">
            <Clock className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
              Öffnungszeiten
            </p>
            <dl className="mt-3 space-y-2">
              {openingHours.map((slot) => (
                <div
                  key={slot.days}
                  className="flex items-center justify-between gap-4 text-[14px]"
                >
                  <dt className="text-white/70">{slot.days}</dt>
                  <dd className="font-semibold text-cs-white">{slot.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
          Folge uns
        </p>
        <div className="mt-4 flex gap-3">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center border border-white/10 text-cs-gray-400 transition-all hover:border-cs-accent hover:bg-cs-accent hover:text-white"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center border border-white/10 text-cs-gray-400 transition-all hover:border-cs-accent hover:bg-cs-accent hover:text-white"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
