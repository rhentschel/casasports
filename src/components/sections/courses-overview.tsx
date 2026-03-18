import Link from "next/link";
import {
  Dumbbell,
  RotateCcw,
  Bike,
  Activity,
  Heart,
  Users,
  ArrowRight,
} from "lucide-react";
import { courses } from "@/data/site";

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  RotateCcw,
  Bike,
  Activity,
  Heart,
  Users,
};

export function CoursesOverview() {
  return (
    <section className="bg-cs-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cs-accent">
            Kursangebot
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cs-white md:text-4xl">
            Spüre die Kraft des Teams
          </h2>
          <p className="mt-4 text-lg text-cs-gray-400">
            Warum alleine kämpfen, wenn die Gemeinschaft dich stärker macht?
            Unsere Fitnesskurse sind mehr als nur ein Training.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = iconMap[course.icon];
            return (
              <div
                key={course.slug}
                className="group rounded-xl border border-cs-gray-800 bg-cs-gray-800/30 p-8 transition-all hover:border-cs-gray-700 hover:bg-cs-gray-800/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cs-accent/10 text-cs-accent">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-cs-white">
                  {course.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cs-gray-400">
                  {course.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/kurse"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cs-accent transition-colors hover:text-cs-accent-hover"
          >
            Alle Kurse entdecken
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
