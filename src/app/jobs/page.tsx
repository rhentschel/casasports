import type { Metadata } from "next";
import { JobsHero } from "@/components/jobs/jobs-hero";
import { JobsWhy } from "@/components/jobs/jobs-why";
import { JobsPositions } from "@/components/jobs/jobs-positions";
import { JobsForm } from "@/components/jobs/jobs-form";

export const metadata: Metadata = {
  title: "Jobs",
  description:
    "Karriere bei Casa Sports Oer-Erkenschwick. Werde Fitnesstrainer, Kursleiter oder starte deine Ausbildung in unserem Team.",
};

export default function JobsPage() {
  return (
    <>
      <JobsHero />
      <JobsWhy />
      <JobsPositions />
      <JobsForm />
    </>
  );
}
