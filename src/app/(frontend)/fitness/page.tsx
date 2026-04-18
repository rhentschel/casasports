import type { Metadata } from "next";
import { FitnessHero } from "@/components/fitness/fitness-hero";
import { TrainingAreas } from "@/components/fitness/training-areas";
import { EquipmentShowcase } from "@/components/fitness/equipment-showcase";
import { PersonalTraining } from "@/components/fitness/personal-training";
import { FitnessPhilosophy } from "@/components/fitness/fitness-philosophy";
import { FitnessCTA } from "@/components/fitness/fitness-cta";
import { PageBreadcrumbs } from "@/components/schema/page-breadcrumbs";

export const metadata: Metadata = {
  title: "Fitness",
  description:
    "Krafttraining, Cardio, Functional Training und Personal Training im Casa Sports Oer-Erkenschwick. Professionelles Equipment, persoenliche Betreuung.",
};

export default function FitnessPage() {
  return (
    <>
      <PageBreadcrumbs path="/fitness" />
      <FitnessHero />
      <TrainingAreas />
      <EquipmentShowcase />
      <PersonalTraining />
      <FitnessPhilosophy />
      <FitnessCTA />
    </>
  );
}
