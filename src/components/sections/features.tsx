import { Zap, Shield, Clock, Trophy } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Persönliches Training",
    description:
      "Kein anonymes Studio. Bei uns bekommst du individuelle Betreuung und einen Trainingsplan, der zu dir passt.",
  },
  {
    icon: Shield,
    title: "Ganzheitlicher Ansatz",
    description:
      "Fitness, Wellness und Ernährung unter einem Dach. Wir begleiten dich auf dem Weg zu deinem neuen Ich.",
  },
  {
    icon: Clock,
    title: "Flexible Trainingszeiten",
    description:
      "Mit vielfältigen Kursen und flexiblen Öffnungszeiten findest du immer die passende Zeit für dein Training.",
  },
  {
    icon: Trophy,
    title: "Nachweisbare Ergebnisse",
    description:
      "Unser 12-Wochen-Programm zeigt dir, was in dir steckt. Mit Motivation und Plan zu messbarem Erfolg.",
  },
];

export function Features() {
  return (
    <section className="bg-cs-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cs-accent">
            Warum Casa Sports
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-cs-white md:text-4xl">
            Mehr als nur ein Fitnessstudio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cs-gray-400">
            Wir glauben an echte Betreuung statt leere Versprechen. Casa Sports
            ist dein Partner für Körper und Geist.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-cs-gray-800 text-cs-accent">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-cs-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cs-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
