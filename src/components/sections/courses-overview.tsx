import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    name: "Power Training",
    image: "/images/casasports-krafttraining-1.webp",
    tag: "Kraft",
  },
  {
    name: "Cycling",
    image: "/images/casasports-spinning-kurs-1.webp",
    tag: "Ausdauer",
  },
  {
    name: "Functional",
    image: "/images/casasports-functional-training.webp",
    tag: "Beweglichkeit",
  },
  {
    name: "Gruppentraining",
    image: "/images/casasports-gruppentraining.webp",
    tag: "Community",
  },
  {
    name: "Cardio",
    image: "/images/casasports-kardio-power.webp",
    tag: "Ausdauer",
  },
  {
    name: "Kurse für alle",
    image: "/images/casasports-kurse-fuer-alle.webp",
    tag: "Einsteiger",
  },
];

export function CoursesOverview() {
  return (
    <section className="bg-cs-gray-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cs-accent">
              Kursangebot
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-cs-white md:text-5xl">
              Gemeinsam stärker
            </h2>
          </div>
          <Link
            href="/kurse"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cs-accent transition-colors hover:text-white"
          >
            Alle Kurse
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.name}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={course.image}
                alt={course.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
              <div className="absolute left-6 top-6">
                <span className="bg-cs-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {course.tag}
                </span>
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">
                  {course.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
