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
    <>
      {/* Hero — 50/50 Split */}
      <section className="relative bg-cs-black pt-32 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-8 md:grid-cols-2 md:gap-0 md:px-16">
          {/* Left: Text */}
          <div className="py-8 md:py-20 md:pr-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Mitglied werden
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-cs-white md:text-5xl lg:text-6xl">
              Dein Weg
              <br />
              <span className="text-cs-gold">zu uns.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
              Waehle deinen Tarif, fuelle das Formular aus und werde Teil der
              Casa Sports Familie. In wenigen Minuten erledigt.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-[500px]">
            <Image
              src="/images/casasports-fitnessstudio-oer-erkenschwick.webp"
              alt="Casa Sports Fitnessstudio Oer-Erkenschwick"
              fill
              className="img-cinema object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cs-black via-cs-black/20 to-transparent" />
          </div>
        </div>
      </section>

      <MembershipWizard />
    </>
  );
}
