import type { Metadata } from "next";
import { RechnerOverviewHero } from "@/components/rechner/rechner-overview-hero";
import { RechnerGrid } from "@/components/rechner/rechner-grid";
import { FitnessCTA } from "@/components/fitness/fitness-cta";
import { PageBreadcrumbs } from "@/components/schema/page-breadcrumbs";

export const metadata: Metadata = {
  title: "Rechner",
  description:
    "Kostenlose Fitness-Rechner: BMI, Proteinbedarf und mehr. Wissenschaftlich fundiert, ohne Anmeldung. Entwickelt vom Casa Sports Team in Oer-Erkenschwick.",
};

export default function RechnerOverviewPage() {
  return (
    <>
      <PageBreadcrumbs path="/rechner" />
      <RechnerOverviewHero />
      <RechnerGrid />
      <FitnessCTA />
    </>
  );
}
