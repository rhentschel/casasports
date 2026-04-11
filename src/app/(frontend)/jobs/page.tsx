import type { Metadata } from "next";
import Image from "next/image";
import { JobsWhy } from "@/components/jobs/jobs-why";
import { JobsWizard } from "@/components/jobs/jobs-wizard";
import { JobsProcess } from "@/components/jobs/jobs-process";
import { JobsFaq } from "@/components/jobs/jobs-faq";
import { getJobPositions } from "@/lib/payload-data";

export const dynamic = "force-dynamic";

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

export default async function JobsPage() {
  const rawPositions = await getJobPositions();

  const positions = rawPositions.map((p: any) => ({
    id: String(p.id),
    title: p.title,
    type: p.type,
    hours: p.hours,
    icon: p.icon || "Dumbbell",
    description: p.description,
    tasks: (p.tasks || []).map((t: any) => t.task),
    requirements: (p.requirements || []).map((r: any) => r.requirement),
  }));

  return (
    <>
      {/* Split-Screen: Bild links + Wizard rechts */}
      <div className="bg-cs-black pt-24 md:pt-32">
        <div className="mx-auto max-w-[1440px] px-4 pb-4 md:px-6 md:pb-6">
          <div className="grid min-h-[calc(100svh-8rem)] md:grid-cols-[30fr_70fr]">
            {/* Left: Image */}
            <div className="relative hidden overflow-hidden md:block">
              <Image
                src="/images/team-training-1.webp"
                alt="Team Casa Sports"
                fill
                className="img-cinema object-cover object-center"
                priority
                sizes="30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cs-black/70 via-transparent to-cs-black/30" />

              <div className="absolute bottom-12 left-10 right-10 lg:left-14 lg:right-14">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                  Karriere
                </p>
                <h1 className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white lg:text-5xl">
                  Werde Teil
                  <br />
                  <span className="text-cs-gold">unseres Teams.</span>
                </h1>
                <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/50">
                  Du brennst fuer Fitness und willst Menschen auf ihrem Weg
                  begleiten? Bewirb dich jetzt.
                </p>
              </div>
            </div>

            {/* Mobile hero */}
            <div className="relative aspect-[16/9] overflow-hidden md:hidden">
              <Image
                src="/images/team-training-2.webp"
                alt="Casa Sports Team"
                fill
                className="img-cinema object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-cs-black/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cs-accent">
                  Karriere
                </p>
                <h1 className="mt-2 text-2xl font-black uppercase leading-[1.05] tracking-[-0.04em] text-cs-white">
                  Werde Teil <span className="text-cs-gold">unseres Teams.</span>
                </h1>
              </div>
            </div>

            {/* Right: Wizard panel */}
            <div className="overflow-y-auto bg-[#141414]">
              <JobsWizard positions={positions} />
            </div>
          </div>
        </div>
      </div>

      <JobsWhy />
      <JobsProcess />
      <JobsFaq />
    </>
  );
}
