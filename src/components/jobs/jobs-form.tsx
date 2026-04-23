"use client";

import { useState, useRef } from "react";
import { useReveal } from "@/lib/use-reveal";
import { Send, CheckCircle, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { positions } from "./jobs-positions";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  availability: string;
  startDate: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  position?: string;
  experience?: string;
  message?: string;
  privacy?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Bitte gib deinen vollständigen Namen ein.";
  }

  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Bitte gib deine Telefonnummer ein.";
  }

  if (!data.position) {
    errors.position = "Bitte wähle eine Stelle aus.";
  }

  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = "Bitte schreib uns mindestens ein paar Sätze über dich.";
  }

  if (!data.privacy) {
    errors.privacy = "Bitte stimme der Datenschutzerklärung zu.";
  }

  return errors;
}

export function JobsForm() {
  const ref = useReveal();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    availability: "",
    startDate: "",
    message: "",
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormErrors];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstError = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstError);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Bewerbung konnte nicht gesendet werden.");
      }

      setStatus("success");
      setFormData({
        name: "", email: "", phone: "", position: "",
        experience: "", availability: "", startDate: "",
        message: "", privacy: false,
      });
      setErrors({});
    } catch {
      setStatus("error");
      setErrorMessage("Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib uns direkt an info@casasports.de.");
    }
  }

  if (status === "success") {
    return (
      <section id="bewerbung" ref={ref} className="reveal scroll-mt-20 bg-cs-gray-900/50 py-28 md:py-36">
        <div className="mx-auto max-w-2xl px-8 text-center md:px-16">
          <div className="mx-auto flex h-20 w-20 items-center justify-center border border-green-500/20 bg-green-500/10">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h2 className="mt-8 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
            Bewerbung <span className="text-cs-accent">erhalten!</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60">
            Vielen Dank für dein Interesse an Casa Sports. Wir schauen uns
            deine Bewerbung an und melden uns innerhalb weniger Tage bei dir.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-white/[0.08] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.15em] text-cs-gray-400 transition-all duration-500 hover:border-white/20 hover:text-white"
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
      </section>
    );
  }

  return (
    <section id="bewerbung" ref={ref} className="reveal scroll-mt-20 bg-cs-gray-900/50 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Bewerbung
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-5xl">
              Zeig uns, <span className="text-cs-accent">wer du bist.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">
              Kein formelles Anschreiben noetig. Erzähl uns einfach kurz von
              dir und warum du zu uns passt. Wir melden uns innerhalb weniger Tage.
            </p>

            <div className="mt-10 space-y-6 border-t border-white/[0.06] pt-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gray-500">
                  Direkt kontaktieren
                </p>
                <a
                  href="mailto:info@casasports.de?subject=Bewerbung"
                  className="mt-3 block text-base text-cs-accent transition-colors hover:text-cs-accent-hover"
                >
                  info@casasports.de
                </a>
                <a
                  href="tel:0236857060"
                  className="mt-1 block text-base text-cs-gray-400 transition-colors hover:text-white"
                >
                  02368 57060
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gray-500">
                  Vorbeikommen
                </p>
                <p className="mt-3 text-base leading-relaxed text-cs-gray-400">
                  Karlstrasse 40<br />
                  45739 Oer-Erkenschwick
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gray-500">
                  Hinweis
                </p>
                <p className="mt-3 text-base leading-relaxed text-cs-gray-500">
                  Mit * markierte Felder sind Pflichtfelder. Alle anderen
                  Angaben sind freiwillig, helfen uns aber bei der Einschaetzung.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-cs-gray-400">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vor- und Nachname"
                  className={cn(
                    "w-full border bg-cs-black/50 px-4 py-3.5 text-sm text-cs-white placeholder:text-cs-gray-600 transition-colors duration-300 focus:border-cs-accent focus:outline-none",
                    errors.name ? "border-red-500/50" : "border-white/[0.08]"
                  )}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-base text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-cs-gray-400">
                    E-Mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? "true" : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="deine@email.de"
                    className={cn(
                      "w-full border bg-cs-black/50 px-4 py-3.5 text-sm text-cs-white placeholder:text-cs-gray-600 transition-colors duration-300 focus:border-cs-accent focus:outline-none",
                      errors.email ? "border-red-500/50" : "border-white/[0.08]"
                    )}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-base text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-cs-gray-400">
                    Telefon *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    aria-required="true"
                    aria-invalid={errors.phone ? "true" : undefined}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0123 456789"
                    className={cn(
                      "w-full border bg-cs-black/50 px-4 py-3.5 text-sm text-cs-white placeholder:text-cs-gray-600 transition-colors duration-300 focus:border-cs-accent focus:outline-none",
                      errors.phone ? "border-red-500/50" : "border-white/[0.08]"
                    )}
                  />
                  {errors.phone && (
                    <p id="phone-error" role="alert" className="mt-1.5 text-base text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Position + Experience */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="position" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-cs-gray-400">
                    Gewuenschte Stelle *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    aria-required="true"
                    aria-invalid={errors.position ? "true" : undefined}
                    aria-describedby={errors.position ? "position-error" : undefined}
                    value={formData.position}
                    onChange={handleChange}
                    className={cn(
                      "w-full border bg-cs-black/50 px-4 py-3.5 text-sm text-cs-white transition-colors duration-300 focus:border-cs-accent focus:outline-none",
                      errors.position ? "border-red-500/50" : "border-white/[0.08]",
                      !formData.position && "text-cs-gray-600"
                    )}
                  >
                    <option value="" disabled>
                      Stelle auswählen...
                    </option>
                    {positions.map((pos) => (
                      <option key={pos.id} value={pos.id}>
                        {pos.title}
                      </option>
                    ))}
                    <option value="initiativ">Initiativbewerbung</option>
                  </select>
                  {errors.position && (
                    <p id="position-error" role="alert" className="mt-1.5 text-base text-red-400">
                      {errors.position}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="experience" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-cs-gray-400">
                    Erfahrung
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={cn(
                      "w-full border border-white/[0.08] bg-cs-black/50 px-4 py-3.5 text-sm text-cs-white transition-colors duration-300 focus:border-cs-accent focus:outline-none",
                      !formData.experience && "text-cs-gray-600"
                    )}
                  >
                    <option value="">Erfahrung auswählen...</option>
                    <option value="none">Keine / Quereinsteiger</option>
                    <option value="beginner">Unter 1 Jahr</option>
                    <option value="intermediate">1-3 Jahre</option>
                    <option value="experienced">3-5 Jahre</option>
                    <option value="expert">Über 5 Jahre</option>
                  </select>
                </div>
              </div>

              {/* Availability + Start Date */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="availability" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-cs-gray-400">
                    Verfügbarkeit
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className={cn(
                      "w-full border border-white/[0.08] bg-cs-black/50 px-4 py-3.5 text-sm text-cs-white transition-colors duration-300 focus:border-cs-accent focus:outline-none",
                      !formData.availability && "text-cs-gray-600"
                    )}
                  >
                    <option value="">Umfang auswählen...</option>
                    <option value="fulltime">Vollzeit</option>
                    <option value="parttime">Teilzeit</option>
                    <option value="minijob">Minijob (520 EUR)</option>
                    <option value="freelance">Freiberuflich / Honorar</option>
                    <option value="training">Ausbildung</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="startDate" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-cs-gray-400">
                    Frühester Start
                  </label>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full border border-white/[0.08] bg-cs-black/50 px-4 py-3.5 text-base text-cs-white transition-colors duration-300 focus:border-cs-accent focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.15em] text-cs-gray-400">
                  Über dich *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby="message-hint message-error"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Erzähl uns kurz von dir: Was motiviert dich? Welche Erfahrung bringst du mit? Welche Lizenzen oder Qualifikationen hast du?"
                  className={cn(
                    "w-full resize-none border bg-cs-black/50 px-4 py-3.5 text-sm text-cs-white placeholder:text-cs-gray-600 transition-colors duration-300 focus:border-cs-accent focus:outline-none",
                    errors.message ? "border-red-500/50" : "border-white/[0.08]"
                  )}
                />
                <p id="message-hint" className="mt-1.5 text-right text-base text-cs-gray-600">
                  {formData.message.length} / 20 Zeichen min.
                </p>
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-1 text-base text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Privacy */}
              <div>
                <label htmlFor="privacy" className="flex items-start gap-3 cursor-pointer">
                  <input
                    id="privacy"
                    type="checkbox"
                    name="privacy"
                    required
                    aria-required="true"
                    aria-invalid={errors.privacy ? "true" : undefined}
                    aria-describedby={errors.privacy ? "privacy-error" : undefined}
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 shrink-0 appearance-none border border-white/[0.15] bg-cs-black/50 checked:border-cs-accent checked:bg-cs-accent transition-colors cursor-pointer"
                  />
                  <span className="text-base leading-relaxed text-cs-gray-400">
                    Ich stimme zu, dass meine Angaben zur Bearbeitung meiner
                    Bewerbung gespeichert und verarbeitet werden.{" "}
                    <a href="/datenschutz" className="text-cs-accent underline underline-offset-2 hover:text-cs-accent-hover">
                      Datenschutzerklärung
                    </a>
                  </span>
                </label>
                {errors.privacy && (
                  <p id="privacy-error" role="alert" className="mt-1.5 text-base text-red-400">
                    {errors.privacy}
                  </p>
                )}
              </div>

              {/* Error Message */}
              {status === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="flex items-start gap-3 border border-red-500/20 bg-red-500/10 p-4"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                  <p className="text-base text-red-400">{errorMessage}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex w-full items-center justify-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
