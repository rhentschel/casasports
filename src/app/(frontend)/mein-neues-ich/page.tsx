import type { Metadata } from "next";
import { MniHero } from "@/components/mein-neues-ich/mni-hero";
import { MniQuote } from "@/components/mein-neues-ich/mni-quote";
import { MniInterview } from "@/components/mein-neues-ich/mni-interview";
import { MniTestimonialVideo } from "@/components/mein-neues-ich/mni-testimonial-video";
import { MniResults } from "@/components/mein-neues-ich/mni-results";
import { MniTrainers } from "@/components/mein-neues-ich/mni-trainers";
import { MniAblauf } from "@/components/mein-neues-ich/mni-ablauf";
import { MniIncluded } from "@/components/mein-neues-ich/mni-included";
import { MniProgramVideo } from "@/components/mein-neues-ich/mni-program-video";
import { MniFaq } from "@/components/mein-neues-ich/mni-faq";
import { MniCta } from "@/components/mein-neues-ich/mni-cta";

export const metadata: Metadata = {
  title: "Mein Neues Ich - 12-Wochen-Programm",
  description:
    "Das 12-Wochen-Programm von Casa Sports. Fett verlieren, Muskeln aufbauen, Stoffwechsel aktivieren. 299€ all-inclusive.",
};

export default function MeinNeuesIchPage() {
  return (
    <>
      <MniHero />
      <MniQuote />
      <MniInterview />
      <MniTestimonialVideo />
      <MniResults />
      <MniTrainers />
      <MniAblauf />
      <MniIncluded />
      <MniProgramVideo />
      <MniFaq />
      <MniCta />
    </>
  );
}
