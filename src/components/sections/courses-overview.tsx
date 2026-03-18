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
    <section className="bg-cs-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cs-accent">
              Kursangebot
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-cs-white md:text-5xl">
              Gemeinsam
              <br />
              stärker.
            </h2>
          </div>
          <Link
            href="/kurse"
            className="group flex items-center gap-3 border-b border-cs-accent pb-2 text-sm font-bold uppercase tracking-wider text-cs-accent transition-all duration-300 hover:gap-4 hover:border-white hover:text-white"
          >
            Alle Kurse
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid: 2 large + 4 small */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => {
            const isLarge = i < 2;
            return (
              <div
                key={course.name}
                className={`group relative overflow-hidden border border-cs-gray-800 transition-all duration-500 hover:border-cs-gray-600 ${
                  isLarge
                    ? "aspect-[4/5] md:col-span-1 lg:col-span-2"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={course.image}
                  alt={course.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/60" />

                {/* Tag */}
                <div className="absolute left-5 top-5">
                  <span className="border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
                    {course.tag}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3 h-px w-6 bg-cs-accent transition-all duration-500 group-hover:w-12" />
                  <div className="flex items-end justify-between">
                    <h3
                      className={`font-bold uppercase tracking-wide text-white ${
                        isLarge ? "text-2xl md:text-3xl" : "text-lg"
                      }`}
                    >
                      {course.name}
                    </h3>
                    <ArrowRight className="h-5 w-5 -translate-x-2 text-white/0 transition-all duration-500 group-hover:translate-x-0 group-hover:text-cs-accent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
