import type { Metadata } from "next";
import Image from "next/image";
import { MembershipWizard } from "@/components/mitgliedschaft/membership-wizard";

export const metadata: Metadata = {
  title: "Mitglied werden",
  description:
    "Werde Mitglied bei Casa Sports in Oer-Erkenschwick. Waehle deinen Tarif und starte dein Training.",
};

export default function MitgliedWerdenPage() {
  return (
    <div className="bg-cs-black pt-20 md:pt-28">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        {/* Left: Sticky Image */}
        <div className="relative hidden md:block">
          <div className="sticky top-0 h-screen">
            <Image
              src="/images/casasports-fitnessstudio-oer-erkenschwick.webp"
              alt="Casa Sports Fitnessstudio Oer-Erkenschwick"
              fill
              className="img-cinema object-cover"
              priority
              sizes="50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cs-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-cs-black/60 via-transparent to-cs-black/40" />

            {/* Text overlay on image */}
            <div className="absolute bottom-16 left-10 right-10 lg:left-16 lg:right-16">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Mitglied werden
              </p>
              <h1 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-cs-white lg:text-5xl xl:text-6xl">
                Dein Weg
                <br />
                <span className="text-cs-gold">zu uns.</span>
              </h1>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
                Waehle deinen Tarif und werde Teil der Casa Sports Familie.
                In wenigen Minuten erledigt.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Hero (visible only on small screens) */}
        <div className="relative aspect-[16/9] md:hidden">
          <Image
            src="/images/casasports-fitnessstudio-oer-erkenschwick.webp"
            alt="Casa Sports Fitnessstudio Oer-Erkenschwick"
            fill
            className="img-cinema object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cs-black via-cs-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Mitglied werden
            </p>
            <h1 className="mt-3 text-3xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-cs-white">
              Dein Weg <span className="text-cs-gold">zu uns.</span>
            </h1>
          </div>
        </div>

        {/* Right: Wizard */}
        <div className="min-h-screen">
          <MembershipWizard />
        </div>
      </div>
    </div>
  );
}
