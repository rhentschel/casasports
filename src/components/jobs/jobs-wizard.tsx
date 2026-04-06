"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  MapPin,
  Clock,
  Briefcase,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Dumbbell,
  Users,
  GraduationCap,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

// ─── Types ────────────────────────────────────────

type WizardStep = "position" | "personal" | "details" | "review" | "success";

interface Position {
  id: string;
  title: string;
  type: string;
  hours: string;
  icon: typeof Dumbbell;
  description: string;
  tasks: string[];
  requirements: string[];
}

interface PersonalData {
  name: string;
  email: string;
  phone: string;
}

interface DetailsData {
  experience: string;
  availability: string;
  startDate: string;
  message: string;
  privacy: boolean;
}

// ─── Data ─────────────────────────────────────────

const positions: Position[] = [
  {
    id: "fitnesstrainer",
    title: "Fitnesstrainer/in",
    type: "Festanstellung",
    hours: "Voll- oder Teilzeit",
    icon: Dumbbell,
    description:
      "Du betreust unsere Mitglieder auf der Trainingsflaeche, erstellst individuelle Trainingsplaene und fuehrst Einweisungen durch.",
    tasks: [
      "Individuelle Trainingsbetreuung und Plangestaltung",
      "Geraeteeinweisungen fuer neue Mitglieder",
      "Durchfuehrung von Fitnesstests und Koerperanalysen",
      "Motivation und Begleitung unserer Mitglieder",
    ],
    requirements: [
      "Fitnesstrainer-Lizenz (B-Lizenz oder hoeher)",
      "Leidenschaft fuer Fitness und Gesundheit",
      "Freundliches, offenes Auftreten",
      "Teamfaehigkeit und Zuverlaessigkeit",
    ],
  },
  {
    id: "kursleiter",
    title: "Kursleiter/in",
    type: "Fest / Freiberuflich",
    hours: "Teilzeit / Honorar",
    icon: Users,
    description:
      "Du leitest Gruppenkurse wie Cycling, Functional Training oder Zirkeltraining und bringst unsere Teilnehmer ins Schwitzen.",
    tasks: [
      "Planung und Durchfuehrung von Gruppenkursen",
      "Anpassung an unterschiedliche Leistungsniveaus",
      "Aufbau einer festen Kursteilnehmer-Community",
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
    icon: GraduationCap,
    description:
      "Starte deine Karriere bei uns als Sport- und Fitnesskaufmann/-frau. Lerne alle Bereiche eines modernen Fitnessstudios kennen.",
    tasks: [
      "Mitgliederbetreuung an Empfang und Trainingsflaeche",
      "Unterstuetzung bei Kursplanung und Organisation",
      "Kaufmaennische Aufgaben: Vertraege, Marketing",
      "Eigene Projekte planen und umsetzen",
    ],
    requirements: [
      "Mindestens Mittlere Reife",
      "Begeisterung fuer Sport und Fitness",
      "Kommunikationsstaerke und Serviceorientierung",
      "Eigeninitiative und Lernbereitschaft",
    ],
  },
  {
    id: "empfang",
    title: "Empfang & Service",
    type: "Festanstellung",
    hours: "Teilzeit / Minijob",
    icon: Headphones,
    description:
      "Du bist das Gesicht von Casa Sports. Am Empfang begruess du unsere Mitglieder, beraetest Interessenten und kuemmerst dich um alle Anliegen.",
    tasks: [
      "Empfang und Betreuung unserer Mitglieder",
      "Beratung und Fuehrung durch das Studio",
      "Telefonische und persoenliche Terminvereinbarung",
      "Unterstuetzung bei Verwaltungsaufgaben",
    ],
    requirements: [
      "Freundliches, serviceorientiertes Auftreten",
      "Gute Kommunikationsfaehigkeiten",
      "Grundkenntnisse am PC",
      "Flexibilitaet bei den Arbeitszeiten",
    ],
  },
];

const WIZARD_STEPS: { key: WizardStep; label: string }[] = [
  { key: "position", label: "Stelle" },
  { key: "personal", label: "Kontakt" },
  { key: "details", label: "Ueber dich" },
  { key: "review", label: "Absenden" },
];

const stepTransition = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { type: "spring" as const, bounce: 0, duration: 0.45 },
};

const inputClass =
  "w-full border border-white/[0.08] bg-cs-black px-4 py-3 text-sm text-cs-white placeholder:text-cs-gray-500 focus:border-cs-accent focus:outline-none transition-colors duration-300";

const labelClass =
  "mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-white/40";

const errorTextClass = "mt-1.5 text-[11px] text-cs-accent";

// ─── Progress Bar ──────────────────────────────────

function WizardProgress({ currentStep }: { currentStep: WizardStep }) {
  const currentIndex = WIZARD_STEPS.findIndex((s) => s.key === currentStep);
  const visibleSteps = WIZARD_STEPS.filter((s) => s.key !== "success");

  return (
    <div className="mb-12 flex items-center gap-2">
      {visibleSteps.map((step, i) => {
        const isActive = step.key === currentStep;
        const isPast = i < currentIndex;

        return (
          <div key={step.key} className="flex items-center gap-2">
            <div
              className={cn(
                "flex h-7 items-center gap-2 px-3 text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-500",
                isActive && "bg-cs-accent text-white",
                isPast && "bg-white/[0.06] text-white/50",
                !isActive && !isPast && "text-white/20"
              )}
            >
              <span>{i + 1}</span>
              <span className="hidden sm:inline">{step.label}</span>
            </div>
            {i < visibleSteps.length - 1 && (
              <div
                className={cn(
                  "h-px w-4",
                  isPast ? "bg-cs-accent/30" : "bg-white/[0.06]"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Step 1: Position Selection ─────────────────────

function StepPosition({
  selectedId,
  onSelect,
  onNext,
}: {
  selectedId: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}) {
  const selected = positions.find((p) => p.id === selectedId);

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
        Stelle waehlen
      </p>
      <h2 className="mt-3 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white">
        Was passt zu dir?
      </h2>

      <div className="mt-8 space-y-3">
        {positions.map((pos) => {
          const isSelected = selectedId === pos.id;
          const Icon = pos.icon;

          return (
            <div
              key={pos.id}
              className={cn(
                "relative cursor-pointer border p-5 transition-all duration-300",
                isSelected
                  ? "border-cs-accent bg-cs-accent/[0.04]"
                  : "border-white/[0.06] hover:border-white/[0.12]"
              )}
              onClick={() => onSelect(pos.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300",
                      isSelected
                        ? "border-cs-accent/30 bg-cs-accent/10"
                        : "border-white/[0.06] bg-white/[0.02]"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4 transition-colors",
                        isSelected ? "text-cs-accent" : "text-white/30"
                      )}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase tracking-[-0.01em] text-cs-white">
                      {pos.title}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap gap-3">
                      <span className="flex items-center gap-1 text-[10px] text-white/35">
                        <Briefcase className="h-3 w-3" />
                        {pos.type}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-white/35">
                        <Clock className="h-3 w-3" />
                        {pos.hours}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-white/35">
                        <MapPin className="h-3 w-3" />
                        Oer-Erkenschwick
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                    isSelected
                      ? "border-cs-accent bg-cs-accent"
                      : "border-white/20"
                  )}
                >
                  {isSelected && <Check className="h-3.5 w-3.5 text-white" />}
                </div>
              </div>
            </div>
          );
        })}

        {/* Initiativbewerbung */}
        <div
          className={cn(
            "relative cursor-pointer border p-5 transition-all duration-300",
            selectedId === "initiativ"
              ? "border-cs-accent bg-cs-accent/[0.04]"
              : "border-white/[0.06] border-dashed hover:border-white/[0.12]"
          )}
          onClick={() => onSelect("initiativ")}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black uppercase tracking-[-0.01em] text-cs-white">
                Initiativbewerbung
              </h3>
              <p className="mt-1 text-[11px] text-white/30">
                Keine passende Stelle? Bewirb dich trotzdem.
              </p>
            </div>
            <div
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                selectedId === "initiativ"
                  ? "border-cs-accent bg-cs-accent"
                  : "border-white/20"
              )}
            >
              {selectedId === "initiativ" && (
                <Check className="h-3.5 w-3.5 text-white" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Details der gewaehlten Stelle */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-6 border border-white/[0.04] bg-white/[0.01] p-6"
        >
          <p className="text-sm leading-relaxed text-white/60">
            {selected.description}
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
                Deine Aufgaben
              </h4>
              <ul className="mt-3 space-y-2">
                {selected.tasks.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-[13px] text-white/50">
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-cs-accent" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-accent">
                Was du mitbringst
              </h4>
              <ul className="mt-3 space-y-2">
                {selected.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-[13px] text-white/50">
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-cs-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      <div className="mt-8 flex justify-end">
        <button
          onClick={onNext}
          disabled={!selectedId}
          className={cn(
            "group flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent",
            !selectedId && "cursor-not-allowed opacity-40"
          )}
        >
          Weiter
          <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

// ─── Step 2: Personal Data ──────────────────────────

function StepPersonal({
  data,
  onChange,
  onNext,
  onBack,
}: {
  data: PersonalData;
  onChange: (field: keyof PersonalData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleNext() {
    const e: Record<string, string> = {};
    if (!data.name.trim() || data.name.trim().length < 2) e.name = "Bitte Vor- und Nachname eingeben";
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Gueltige E-Mail-Adresse eingeben";
    if (!data.phone.trim()) e.phone = "Telefonnummer eingeben";
    setErrors(e);
    if (Object.keys(e).length === 0) onNext();
  }

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
        Schritt 2
      </p>
      <h2 className="mt-3 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white">
        Deine Kontaktdaten
      </h2>

      <div className="mt-8 space-y-4">
        <div>
          <label className={labelClass}>Name *</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="Vor- und Nachname"
            className={cn(inputClass, errors.name && "border-cs-accent/50")}
          />
          {errors.name && <p className={errorTextClass}>{errors.name}</p>}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className={labelClass}>E-Mail *</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="deine@email.de"
              className={cn(inputClass, errors.email && "border-cs-accent/50")}
            />
            {errors.email && <p className={errorTextClass}>{errors.email}</p>}
          </div>
          <div>
            <label className={labelClass}>Telefon *</label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="0170 1234567"
              className={cn(inputClass, errors.phone && "border-cs-accent/50")}
            />
            {errors.phone && <p className={errorTextClass}>{errors.phone}</p>}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button onClick={onBack} className="group flex items-center gap-3 border border-white/[0.08] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-500 hover:border-white/20 hover:text-white">
          <ArrowLeft className="h-4 w-4 transition-transform duration-[400ms] group-hover:-translate-x-1" />
          Zurueck
        </button>
        <button onClick={handleNext} className="group flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent">
          Weiter
          <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

// ─── Step 3: Details ────────────────────────────────

function StepDetails({
  data,
  onChange,
  onNext,
  onBack,
}: {
  data: DetailsData;
  onChange: (field: keyof DetailsData, value: string | boolean) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleNext() {
    const e: Record<string, string> = {};
    if (!data.message.trim() || data.message.trim().length < 20) e.message = "Mindestens ein paar Saetze ueber dich";
    if (!data.privacy) e.privacy = "Bitte Datenschutzerklaerung zustimmen";
    setErrors(e);
    if (Object.keys(e).length === 0) onNext();
  }

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
        Schritt 3
      </p>
      <h2 className="mt-3 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white">
        Erzaehl uns von dir
      </h2>

      <div className="mt-8 space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className={labelClass}>Erfahrung</label>
            <select
              value={data.experience}
              onChange={(e) => onChange("experience", e.target.value)}
              className={cn(inputClass, !data.experience && "text-cs-gray-500")}
            >
              <option value="">Optional...</option>
              <option value="none">Quereinsteiger</option>
              <option value="beginner">Unter 1 Jahr</option>
              <option value="intermediate">1-3 Jahre</option>
              <option value="experienced">3-5 Jahre</option>
              <option value="expert">Ueber 5 Jahre</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Verfuegbarkeit</label>
            <select
              value={data.availability}
              onChange={(e) => onChange("availability", e.target.value)}
              className={cn(inputClass, !data.availability && "text-cs-gray-500")}
            >
              <option value="">Optional...</option>
              <option value="fulltime">Vollzeit</option>
              <option value="parttime">Teilzeit</option>
              <option value="minijob">Minijob (520 EUR)</option>
              <option value="freelance">Freiberuflich</option>
              <option value="training">Ausbildung</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Fruehester Start</label>
            <input
              type="date"
              value={data.startDate}
              onChange={(e) => onChange("startDate", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Ueber dich *</label>
          <textarea
            value={data.message}
            onChange={(e) => onChange("message", e.target.value)}
            rows={6}
            placeholder="Was motiviert dich? Welche Erfahrung bringst du mit? Welche Lizenzen oder Qualifikationen hast du?"
            className={cn(
              inputClass,
              "resize-none",
              errors.message && "border-cs-accent/50"
            )}
          />
          <div className="mt-1 flex justify-between">
            {errors.message ? (
              <p className={errorTextClass}>{errors.message}</p>
            ) : (
              <span />
            )}
            <span className="text-[11px] text-white/20">
              {data.message.length} Zeichen
            </span>
          </div>
        </div>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.privacy}
            onChange={(e) => onChange("privacy", e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 appearance-none border border-white/[0.15] bg-cs-black checked:border-cs-accent checked:bg-cs-accent transition-colors cursor-pointer"
          />
          <span className="text-xs leading-relaxed text-white/40">
            Ich stimme zu, dass meine Angaben zur Bearbeitung meiner
            Bewerbung gespeichert werden.{" "}
            <a href="/datenschutz" className="text-cs-accent underline underline-offset-2 hover:text-cs-accent-hover">
              Datenschutzerklaerung
            </a>
          </span>
        </label>
        {errors.privacy && <p className={errorTextClass}>{errors.privacy}</p>}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button onClick={onBack} className="group flex items-center gap-3 border border-white/[0.08] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-500 hover:border-white/20 hover:text-white">
          <ArrowLeft className="h-4 w-4 transition-transform duration-[400ms] group-hover:-translate-x-1" />
          Zurueck
        </button>
        <button onClick={handleNext} className="group flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent">
          Weiter
          <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

// ─── Step 4: Review & Submit ────────────────────────

function StepReview({
  positionId,
  personal,
  details,
  onSubmit,
  onBack,
  onGoToStep,
  status,
  errorMessage,
}: {
  positionId: string;
  personal: PersonalData;
  details: DetailsData;
  onSubmit: () => void;
  onBack: () => void;
  onGoToStep: (step: WizardStep) => void;
  status: "idle" | "loading" | "error";
  errorMessage: string;
}) {
  const pos = positions.find((p) => p.id === positionId);
  const posLabel = pos?.title || "Initiativbewerbung";

  const experienceLabels: Record<string, string> = {
    none: "Quereinsteiger", beginner: "Unter 1 Jahr",
    intermediate: "1-3 Jahre", experienced: "3-5 Jahre", expert: "Ueber 5 Jahre",
  };
  const availabilityLabels: Record<string, string> = {
    fulltime: "Vollzeit", parttime: "Teilzeit", minijob: "Minijob",
    freelance: "Freiberuflich", training: "Ausbildung",
  };

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
        Zusammenfassung
      </p>
      <h2 className="mt-3 text-2xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white">
        Alles richtig?
      </h2>

      <div className="mt-8 space-y-4">
        {/* Position */}
        <div className="flex items-center justify-between border border-white/[0.06] p-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Stelle</p>
            <p className="mt-1 text-sm font-bold text-cs-white">{posLabel}</p>
          </div>
          <button onClick={() => onGoToStep("position")} className="text-[11px] text-cs-accent hover:text-cs-accent-hover transition-colors">
            Aendern
          </button>
        </div>

        {/* Personal */}
        <div className="flex items-start justify-between border border-white/[0.06] p-5">
          <div className="space-y-2 text-[13px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Kontaktdaten</p>
            <div className="flex justify-between gap-12">
              <span className="text-white/50">Name</span>
              <span className="text-white/70">{personal.name}</span>
            </div>
            <div className="flex justify-between gap-12">
              <span className="text-white/50">E-Mail</span>
              <span className="text-white/70">{personal.email}</span>
            </div>
            <div className="flex justify-between gap-12">
              <span className="text-white/50">Telefon</span>
              <span className="text-white/70">{personal.phone}</span>
            </div>
          </div>
          <button onClick={() => onGoToStep("personal")} className="shrink-0 text-[11px] text-cs-accent hover:text-cs-accent-hover transition-colors">
            Aendern
          </button>
        </div>

        {/* Details */}
        <div className="flex items-start justify-between border border-white/[0.06] p-5">
          <div className="space-y-2 text-[13px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Details</p>
            {details.experience && (
              <div className="flex justify-between gap-12">
                <span className="text-white/50">Erfahrung</span>
                <span className="text-white/70">{experienceLabels[details.experience]}</span>
              </div>
            )}
            {details.availability && (
              <div className="flex justify-between gap-12">
                <span className="text-white/50">Verfuegbarkeit</span>
                <span className="text-white/70">{availabilityLabels[details.availability]}</span>
              </div>
            )}
            {details.startDate && (
              <div className="flex justify-between gap-12">
                <span className="text-white/50">Start</span>
                <span className="text-white/70">{new Date(details.startDate).toLocaleDateString("de-DE")}</span>
              </div>
            )}
            <div>
              <span className="text-white/50">Nachricht</span>
              <p className="mt-1 text-white/50 italic">&ldquo;{details.message.slice(0, 120)}{details.message.length > 120 ? "..." : ""}&rdquo;</p>
            </div>
          </div>
          <button onClick={() => onGoToStep("details")} className="shrink-0 text-[11px] text-cs-accent hover:text-cs-accent-hover transition-colors">
            Aendern
          </button>
        </div>
      </div>

      {status === "error" && (
        <div className="mt-6 flex items-start gap-3 border border-red-500/20 bg-red-500/10 p-4">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
          <p className="text-sm text-red-400">{errorMessage}</p>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button onClick={onBack} className="group flex items-center gap-3 border border-white/[0.08] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-500 hover:border-white/20 hover:text-white">
          <ArrowLeft className="h-4 w-4 transition-transform duration-[400ms] group-hover:-translate-x-1" />
          Zurueck
        </button>
        <button
          onClick={onSubmit}
          disabled={status === "loading"}
          className="group flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              Bewerbung absenden
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Step 5: Success ────────────────────────────────

function StepSuccess() {
  return (
    <div className="py-12 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center border border-green-500/20 bg-green-500/10">
        <CheckCircle className="h-10 w-10 text-green-500" />
      </div>
      <h2 className="mt-8 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
        Bewerbung <span className="text-cs-accent">erhalten!</span>
      </h2>
      <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
        Vielen Dank fuer dein Interesse an Casa Sports. Wir schauen uns
        deine Bewerbung an und melden uns innerhalb weniger Tage bei dir.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-white/[0.08] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-500 hover:border-white/20 hover:text-white"
        >
          Zur Startseite
        </Link>
        <Link
          href="/fitness"
          className="inline-flex items-center gap-2 border border-cs-accent bg-cs-accent px-6 py-3 text-[12px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
        >
          Studio entdecken
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

// ─── Main Wizard ────────────────────────────────────

export function JobsWizard() {
  const ref = useReveal();

  const [step, setStep] = useState<WizardStep>("position");
  const [positionId, setPositionId] = useState<string | null>(null);
  const [personal, setPersonal] = useState<PersonalData>({ name: "", email: "", phone: "" });
  const [details, setDetails] = useState<DetailsData>({
    experience: "", availability: "", startDate: "", message: "", privacy: false,
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updatePersonal = useCallback(
    (field: keyof PersonalData, value: string) => {
      setPersonal((prev) => ({ ...prev, [field]: value }));
    }, []
  );

  const updateDetails = useCallback(
    (field: keyof DetailsData, value: string | boolean) => {
      setDetails((prev) => ({ ...prev, [field]: value }));
    }, []
  );

  async function handleSubmit() {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: personal.name,
          email: personal.email,
          phone: personal.phone,
          position: positionId,
          experience: details.experience,
          availability: details.availability,
          startDate: details.startDate,
          message: details.message,
          privacy: details.privacy,
        }),
      });

      if (!res.ok) throw new Error();
      setStep("success");
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib uns an info@casasports.de.");
    }
  }

  return (
    <section
      id="bewerbung"
      ref={ref}
      className="reveal scroll-mt-20 bg-cs-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        {step !== "success" && <WizardProgress currentStep={step} />}

        <AnimatePresence mode="wait">
          {step === "position" && (
            <motion.div key="position" {...stepTransition}>
              <StepPosition
                selectedId={positionId}
                onSelect={setPositionId}
                onNext={() => setStep("personal")}
              />
            </motion.div>
          )}

          {step === "personal" && (
            <motion.div key="personal" {...stepTransition}>
              <StepPersonal
                data={personal}
                onChange={updatePersonal}
                onNext={() => setStep("details")}
                onBack={() => setStep("position")}
              />
            </motion.div>
          )}

          {step === "details" && (
            <motion.div key="details" {...stepTransition}>
              <StepDetails
                data={details}
                onChange={updateDetails}
                onNext={() => setStep("review")}
                onBack={() => setStep("personal")}
              />
            </motion.div>
          )}

          {step === "review" && positionId && (
            <motion.div key="review" {...stepTransition}>
              <StepReview
                positionId={positionId}
                personal={personal}
                details={details}
                onSubmit={handleSubmit}
                onBack={() => setStep("details")}
                onGoToStep={setStep}
                status={submitStatus}
                errorMessage={errorMessage}
              />
            </motion.div>
          )}

          {step === "success" && (
            <motion.div key="success" {...stepTransition}>
              <StepSuccess />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
