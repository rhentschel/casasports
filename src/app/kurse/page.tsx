import type { Metadata } from "next";
import { KurseHero } from "@/components/kurse/kurse-hero";
import { KurseGrid } from "@/components/kurse/kurse-grid";
import { KurseForAll } from "@/components/kurse/kurse-for-all";
import { Kursplan } from "@/components/kurse/kursplan";
import { KurseCTA } from "@/components/kurse/kurse-cta";

export const metadata: Metadata = {
  title: "Kurse",
  description:
    "Power Training, Cycling, Functional Training, Zirkeltraining und mehr. Gruppenkurse fuer jedes Level im Casa Sports Oer-Erkenschwick.",
};

export default function KursePage() {
  return (
    <>
      <KurseHero />
      <KurseGrid />
      <KurseForAll />
      <Kursplan />
      <KurseCTA />
    </>
  );
}
