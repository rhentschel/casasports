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
    <div className="bg-cs-black pt-24 md:pt-32">
      {/* Outer frame with padding */}
      <div className="mx-auto max-w-[1440px] px-4 pb-4 md:px-6 md:pb-6">
        <div className="grid h-[calc(100svh-8rem)] md:grid-cols-[30fr_70fr]">
          {/* Left: Image */}
          <div className="relative hidden overflow-hidden md:block">
            <Image
              src="/images/casasports-fitnessstudio-oer-erkenschwick.webp"
              alt="Casa Sports Fitnessstudio Oer-Erkenschwick"
              fill
              className="img-cinema object-cover object-[30%_center]"
              priority
              sizes="30vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cs-black/70 via-transparent to-cs-black/30" />

            {/* Text overlay */}
            <div className="absolute bottom-12 left-10 right-10 lg:left-14 lg:right-14">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                Mitglied werden
              </p>
              <h1 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-cs-white lg:text-5xl">
                Dein Weg
                <br />
                <span className="text-cs-gold">zu uns.</span>
              </h1>
              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/50">
                Waehle deinen Tarif und werde Teil der Casa Sports Familie.
              </p>
            </div>
          </div>

          {/* Mobile hero */}
          <div className="relative aspect-[16/9] overflow-hidden md:hidden">
            <Image
              src="/images/casasports-fitnessstudio-oer-erkenschwick.webp"
              alt="Casa Sports Fitnessstudio Oer-Erkenschwick"
              fill
              className="img-cinema object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-cs-black/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cs-accent">
                Mitglied werden
              </p>
              <h1 className="mt-2 text-2xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-cs-white">
                Dein Weg <span className="text-cs-gold">zu uns.</span>
              </h1>
            </div>
          </div>

          {/* Right: Wizard panel — scrolls internally */}
          <div className="overflow-y-auto bg-[#141414]">
            <MembershipWizard />
          </div>
        </div>
      </div>
    </div>
  );
}
