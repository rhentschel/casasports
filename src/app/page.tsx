import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { CoursesOverview } from "@/components/sections/courses-overview";
import { WellnessPreview } from "@/components/sections/wellness-preview";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CoursesOverview />
      <WellnessPreview />
      <CTA />
    </>
  );
}
