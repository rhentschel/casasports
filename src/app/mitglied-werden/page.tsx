import type { Metadata } from "next";
import { MembershipWizard } from "@/components/mitgliedschaft/membership-wizard";

export const metadata: Metadata = {
  title: "Mitglied werden",
  description:
    "Werde Mitglied bei Casa Sports in Oer-Erkenschwick. Waehle deinen Tarif und starte dein Training.",
};

export default function MitgliedWerdenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[40svh] min-h-[320px] items-end bg-cs-black pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-cs-black/0 via-cs-black/50 to-cs-black" />
        <div className="relative mx-auto max-w-7xl px-8 md:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
            Mitglied werden
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-cs-white md:text-5xl lg:text-6xl">
            Dein Weg
            <br />
            <span className="text-cs-gold">zu uns.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
            Waehle deinen Tarif, fuelle das Formular aus und werde Teil der
            Casa Sports Familie. In wenigen Minuten erledigt.
          </p>
        </div>
      </section>

      <MembershipWizard />
    </>
  );
}
