import type { Metadata } from "next";
import { JobsHero } from "@/components/jobs/jobs-hero";
import { JobsStats } from "@/components/jobs/jobs-stats";
import { JobsWhy } from "@/components/jobs/jobs-why";
import { JobsTeamVoices } from "@/components/jobs/jobs-team-voices";
import { JobsPositions } from "@/components/jobs/jobs-positions";
import { JobsProcess } from "@/components/jobs/jobs-process";
import { JobsForm } from "@/components/jobs/jobs-form";
import { JobsFaq } from "@/components/jobs/jobs-faq";

export const metadata: Metadata = {
  title: "Jobs & Karriere",
  description:
    "Karriere bei Casa Sports Oer-Erkenschwick. Werde Fitnesstrainer, Kursleiter oder starte deine Ausbildung in unserem Team. Jetzt bewerben!",
  openGraph: {
    title: "Jobs & Karriere | Casa Sports",
    description:
      "Werde Teil unseres Teams. Offene Stellen, Benefits und unkomplizierte Bewerbung bei Casa Sports Oer-Erkenschwick.",
  },
};

export default function JobsPage() {
  return (
    <>
      <JobsHero />
      <JobsStats />
      <JobsWhy />
      <JobsTeamVoices />
      <JobsPositions />
      <JobsProcess />
      <JobsForm />
      <JobsFaq />
    </>
  );
}
