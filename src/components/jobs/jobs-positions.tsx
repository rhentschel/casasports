"use client";

import { useState } from "react";
import { useReveal } from "@/lib/use-reveal";
import { ChevronDown, MapPin, Clock, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Position {
  id: string;
  title: string;
  type: string;
  hours: string;
  location: string;
  description: string;
  tasks: string[];
  requirements: string[];
}

export const positions: Position[] = [
  {
    id: "fitnesstrainer",
    title: "Fitnesstrainer/in",
    type: "Festanstellung",
    hours: "Voll- oder Teilzeit",
    location: "Oer-Erkenschwick",
    description:
      "Du betreust unsere Mitglieder auf der Trainingsflaeche, erstellst individuelle Trainingsplaene und fuehrst Einweisungen durch.",
    tasks: [
      "Individuelle Trainingsbetreuung und Plangestaltung",
      "Geraeteeinweisungen fuer neue Mitglieder",
      "Durchfuehrung von Fitnesstests und Koerperanalysen",
      "Motivation und Begleitung unserer Mitglieder",
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Fitnesstrainer (B-Lizenz oder hoeher)",
      "Leidenschaft fuer Fitness und Gesundheit",
      "Freundliches, offenes Auftreten",
      "Teamfaehigkeit und Zuverlaessigkeit",
    ],
  },
  {
    id: "kursleiter",
    title: "Kursleiter/in",
    type: "Festanstellung / Freiberuflich",
    hours: "Teilzeit / auf Honorarbasis",
    location: "Oer-Erkenschwick",
    description:
      "Du leitest Gruppenkurse wie Cycling, Functional Training oder Zirkeltraining und bringst unsere Teilnehmer ins Schwitzen.",
    tasks: [
      "Planung und Durchfuehrung von Gruppenkursen",
      "Anpassung der Kurse an unterschiedliche Leistungsniveaus",
      "Aufbau und Betreuung einer festen Kursteilnehmer-Community",
      "Mitgestaltung des Kursplans",
    ],
    requirements: [
      "Gueltige Kursleiterlizenz (z.B. Cycling, Group Fitness)",
      "Erfahrung in der Anleitung von Gruppen",
      "Motivierende, energiegeladene Persoenlichkeit",
      "Zuverlaessigkeit und Puenktlichkeit",
    ],
  },
  {
    id: "azubi",
    title: "Auszubildende/r",
    type: "Ausbildung",
    hours: "Vollzeit (3 Jahre)",
    location: "Oer-Erkenschwick",
    description:
      "Starte deine Karriere bei uns als Sport- und Fitnesskaufmann/-frau. Lerne alle Bereiche eines modernen Fitnessstudios kennen.",
    tasks: [
      "Mitgliederbetreuung an Empfang und Trainingsflaeche",
      "Unterstuetzung bei der Kursplanung und -organisation",
      "Kaufmaennische Aufgaben: Vertraege, Buchhaltung, Marketing",
      "Eigene Projekte planen und umsetzen",
    ],
    requirements: [
      "Mindestens Mittlere Reife oder vergleichbarer Abschluss",
      "Begeisterung fuer Sport und Fitness",
      "Kommunikationsstaerke und Serviceorientierung",
      "Eigeninitiative und Lernbereitschaft",
    ],
  },
  {
    id: "empfang",
    title: "Empfang & Kundenbetreuung",
    type: "Festanstellung",
    hours: "Teilzeit (Minijob moeglich)",
    location: "Oer-Erkenschwick",
    description:
      "Du bist das Gesicht von Casa Sports. Am Empfang begruess du unsere Mitglieder, beraetest Interessenten und kuemmerst dich um alle Anliegen.",
    tasks: [
      "Freundlicher Empfang und Betreuung unserer Mitglieder",
      "Beratung von Interessenten und Fuehrung durch das Studio",
      "Telefonische und persoenliche Terminvereinbarung",
      "Unterstuetzung bei Verwaltungsaufgaben",
    ],
    requirements: [
      "Freundliches, serviceorientiertes Auftreten",
      "Gute Kommunikationsfaehigkeiten",
      "Grundkenntnisse am PC (MS Office)",
      "Flexibilitaet bei den Arbeitszeiten",
    ],
  },
];

function PositionCard({ position }: { position: Position }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/[0.06] bg-cs-gray-900/30 transition-all duration-500 hover:border-white/[0.1]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left md:p-8"
      >
        <div>
          <h3 className="text-lg font-bold uppercase tracking-[-0.02em] text-cs-white md:text-xl">
            {position.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-4">
            <span className="flex items-center gap-1.5 text-xs text-cs-gray-400">
              <Briefcase className="h-3.5 w-3.5 text-cs-accent" />
              {position.type}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-cs-gray-400">
              <Clock className="h-3.5 w-3.5 text-cs-accent" />
              {position.hours}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-cs-gray-400">
              <MapPin className="h-3.5 w-3.5 text-cs-accent" />
              {position.location}
            </span>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-cs-gray-500 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-500",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/[0.04] px-6 pb-8 pt-6 md:px-8">
            <p className="text-sm leading-relaxed text-white/60">
              {position.description}
            </p>

            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
                  Deine Aufgaben
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {position.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-3 text-sm text-cs-gray-400"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-cs-accent" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
                  Was du mitbringst
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {position.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-3 text-sm text-cs-gray-400"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-cs-accent" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="#bewerbung"
              className="mt-8 inline-block border border-cs-accent bg-cs-accent px-6 py-3 text-[12px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
            >
              Jetzt bewerben
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function JobsPositions() {
  const ref = useReveal();

  return (
    <section id="stellen" ref={ref} className="reveal scroll-mt-20 bg-cs-black py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Offene Stellen
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
          Finde deinen <span className="text-cs-accent">Platz.</span>
        </h2>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
          Aktuell suchen wir Verstaerkung in diesen Bereichen. Keine passende
          Stelle dabei? Schick uns trotzdem deine Bewerbung.
        </p>

        <div className="mt-12 space-y-2">
          {positions.map((position) => (
            <PositionCard key={position.id} position={position} />
          ))}
        </div>
      </div>
    </section>
  );
}
