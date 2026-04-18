import type { Metadata } from "next";
import { WellnessHero } from "@/components/wellness/wellness-hero";
import { WellnessAreas } from "@/components/wellness/wellness-areas";
import { WellnessBenefits } from "@/components/wellness/wellness-benefits";
import { WellnessPricing } from "@/components/wellness/wellness-pricing";
import { WellnessCTA } from "@/components/wellness/wellness-cta";
import { PageBreadcrumbs } from "@/components/schema/page-breadcrumbs";

export const metadata: Metadata = {
  title: "Wellness & Sauna",
  description:
    "KLAFS Sauna, Roeger Infrarotkabine und Premium Wellness-Bereich im Casa Sports Oer-Erkenschwick. Sauna Solo ab 29,90 € oder All-in mit Fitness ab 44,90 €.",
};

export default function WellnessPage() {
  return (
    <>
      <PageBreadcrumbs path="/wellness" />
      <WellnessHero />
      <WellnessAreas />
      <WellnessBenefits />
      <WellnessPricing />
      <WellnessCTA />
    </>
  );
}
