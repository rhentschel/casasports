import { siteConfig } from "@/data/site";

export function KontaktMap() {
  const address = `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section className="bg-cs-black pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="flex items-end justify-between border-b border-white/[0.06] pb-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
              Standort
            </p>
            <h2 className="mt-3 text-2xl font-black uppercase leading-[1.1] tracking-tight text-cs-white md:text-3xl">
              Direkt im Herzen von Oer-Erkenschwick.
            </h2>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[11px] font-bold uppercase tracking-[0.2em] text-cs-accent underline underline-offset-[6px] transition-colors hover:text-cs-white sm:inline-block"
          >
            Route planen
          </a>
        </div>

        <div className="mt-8 aspect-[16/9] w-full overflow-hidden border border-white/[0.06] bg-white/[0.02]">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Karte: ${address}`}
            className="h-full w-full grayscale-[30%]"
          />
        </div>
      </div>
    </section>
  );
}
