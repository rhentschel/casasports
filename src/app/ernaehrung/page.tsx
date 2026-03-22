import type { Metadata } from "next";
import { ErnaehrungHero } from "@/components/ernaehrung/ernaehrung-hero";
import { ErnaehrungApproach } from "@/components/ernaehrung/ernaehrung-approach";
import { ErnaehrungPillars } from "@/components/ernaehrung/ernaehrung-pillars";
import { ErnaehrungProgram } from "@/components/ernaehrung/ernaehrung-program";
import { ErnaehrungCTA } from "@/components/ernaehrung/ernaehrung-cta";

export const metadata: Metadata = {
  title: "Ernährung",
  description:
    "Ernährungsberatung im Casa Sports Oer-Erkenschwick. Individuelle Ernaehrungskonzepte, die zu deinem Training und deinem Alltag passen. Keine Diaeten, sondern nachhaltige Ergebnisse.",
};

export default function ErnaehrungPage() {
  return (
    <>
      <ErnaehrungHero />
      <ErnaehrungApproach />
      <ErnaehrungPillars />
      <ErnaehrungProgram />
      <ErnaehrungCTA />
    </>
  );
}
