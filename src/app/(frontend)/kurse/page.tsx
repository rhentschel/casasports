import type { Metadata } from "next";
import { KurseHero } from "@/components/kurse/kurse-hero";
import { KurseGrid } from "@/components/kurse/kurse-grid";
import { KurseForAll } from "@/components/kurse/kurse-for-all";
import { Kursplan } from "@/components/kurse/kursplan";
import { KurseCTA } from "@/components/kurse/kurse-cta";
import { PageBreadcrumbs } from "@/components/schema/page-breadcrumbs";
import { getCourses } from "@/lib/payload-data";
import type { KursEntry, KursTypeName } from "@/data/kursplan";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kurse",
  description:
    "Power Training, Cycling, Functional Training, Zirkeltraining und mehr. Gruppenkurse für jedes Level im Casa Sports Oer-Erkenschwick.",
};

export default async function KursePage() {
  const courses = await getCourses();

  const schedule: KursEntry[] = courses.map((c: any) => ({
    id: `${c.day}-${c.time?.replace(":", "")}`,
    time: c.time,
    duration: Number(c.duration),
    name: c.name as KursTypeName,
    trainer: c.trainer,
    room: c.room,
    intensity: Number(c.intensity) as 1 | 2 | 3,
    day: Number(c.day),
  }));

  return (
    <>
      <PageBreadcrumbs path="/kurse" />
      <KurseHero />
      <KurseGrid />
      <KurseForAll />
      <Kursplan schedule={schedule} />
      <KurseCTA />
    </>
  );
}
