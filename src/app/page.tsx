import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Features } from "@/components/sections/features";
import { BenefitsGrid } from "@/components/sections/benefits-grid";
import { AboutPreview } from "@/components/sections/about-preview";
import { CoursesOverview } from "@/components/sections/courses-overview";
import { WellnessPreview } from "@/components/sections/wellness-preview";
import { ProgramCards } from "@/components/sections/program-cards";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <BenefitsGrid />
      <AboutPreview />
      <CoursesOverview />
      <WellnessPreview />
      <ProgramCards />
      <CTA />
    </>
  );
}
