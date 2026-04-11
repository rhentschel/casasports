import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Features } from "@/components/sections/features";
import { BenefitsGrid } from "@/components/sections/benefits-grid";
import { AboutPreview } from "@/components/sections/about-preview";
import { CoursesOverview } from "@/components/sections/courses-overview";
import { WellnessPreview } from "@/components/sections/wellness-preview";
import { ProgramCards } from "@/components/sections/program-cards";
import { CTA } from "@/components/sections/cta";
import { getTeamMembers } from "@/lib/payload-data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const members = await getTeamMembers();

  const team = members.map((m: any) => ({
    name: m.name,
    role: m.role,
    image: typeof m.image === "object" && m.image?.url
      ? m.image.url
      : m.image || "/images/placeholder.webp",
    video: m.video || null,
    quote: m.quote || "",
  }));

  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <BenefitsGrid />
      <AboutPreview team={team} />
      <CoursesOverview />
      <WellnessPreview />
      <ProgramCards />
      <CTA />
    </>
  );
}
