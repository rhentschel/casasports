import type { Metadata } from "next";
import { KontaktHero } from "@/components/kontakt/kontakt-hero";
import { KontaktInfo } from "@/components/kontakt/kontakt-info";
import { KontaktForm } from "@/components/kontakt/kontakt-form";
import { KontaktMap } from "@/components/kontakt/kontakt-map";
import { JsonLd } from "@/components/schema/json-ld";
import { PageBreadcrumbs } from "@/components/schema/page-breadcrumbs";
import { contactPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Fragen zu Training, Kursen oder Mitgliedschaft? Schreib uns, ruf an oder komm in Oer-Erkenschwick vorbei. Wir freuen uns auf dich.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt - Casa Sports",
    description: "Wir freuen uns, von dir zu hören.",
    url: "/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <PageBreadcrumbs path="/kontakt" />
      <KontaktHero />
      <section className="bg-cs-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-8 md:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <KontaktInfo />
            <KontaktForm />
          </div>
        </div>
      </section>
      <KontaktMap />
    </>
  );
}
