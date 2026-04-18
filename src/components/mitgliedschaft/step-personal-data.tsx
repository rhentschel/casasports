"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PersonalData, Gender } from "@/data/magicline";
import { useState } from "react";

interface StepPersonalDataProps {
  data: PersonalData;
  onChange: (field: keyof PersonalData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const inputClass =
  "w-full border border-white/[0.08] bg-cs-black px-4 py-3 text-sm text-cs-white placeholder:text-cs-gray-500 focus:border-cs-accent focus:outline-none transition-colors duration-300";

const labelClass =
  "mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-white/40";

const errorClass = "mt-1.5 text-[11px] text-cs-accent";

const genderOptions: { value: Gender; label: string }[] = [
  { value: "MALE", label: "Herr" },
  { value: "FEMALE", label: "Frau" },
  { value: "OTHER", label: "Divers" },
];

function validatePersonalData(data: PersonalData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.gender) errors.gender = "Bitte wähle eine Anrede";
  if (!data.firstName.trim()) errors.firstName = "Vorname ist erforderlich";
  if (!data.lastName.trim()) errors.lastName = "Nachname ist erforderlich";

  if (!data.dateOfBirth) {
    errors.dateOfBirth = "Geburtsdatum ist erforderlich";
  } else {
    const dob = new Date(data.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    if (age < 14 || age > 120) errors.dateOfBirth = "Ungültiges Alter";
  }

  if (!data.email.trim()) {
    errors.email = "E-Mail ist erforderlich";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ungültige E-Mail-Adresse";
  }

  if (!data.phone.trim()) {
    errors.phone = "Telefonnummer ist erforderlich";
  }

  if (!data.street.trim()) errors.street = "Strasse ist erforderlich";
  if (!data.houseNumber.trim()) errors.houseNumber = "Hausnummer ist erforderlich";

  if (!data.zipCode.trim()) {
    errors.zipCode = "PLZ ist erforderlich";
  } else if (!/^\d{5}$/.test(data.zipCode)) {
    errors.zipCode = "PLZ muss 5-stellig sein";
  }

  if (!data.city.trim()) errors.city = "Ort ist erforderlich";

  return errors;
}

export function StepPersonalData({
  data,
  onChange,
  onNext,
  onBack,
}: StepPersonalDataProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState(false);

  function handleNext() {
    setTouched(true);
    const validationErrors = validatePersonalData(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onNext();
    }
  }

  function handleBlur(field: string) {
    if (touched) {
      const validationErrors = validatePersonalData(data);
      setErrors((prev) => ({
        ...prev,
        [field]: validationErrors[field] || "",
      }));
    }
  }

  const errorId = (field: string) => (errors[field] ? `step2-${field}-error` : undefined);

  return (
    <div>
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
          Schritt 2
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
          Deine Daten
        </h2>
      </div>

      <div className="mt-6 space-y-4">
        {/* Gender */}
        <fieldset>
          <legend className={labelClass}>Anrede *</legend>
          <div
            className="flex gap-3"
            role="radiogroup"
            aria-required="true"
            aria-invalid={errors.gender ? "true" : undefined}
            aria-describedby={errorId("gender")}
          >
            {genderOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={data.gender === opt.value}
                onClick={() => onChange("gender", opt.value)}
                className={cn(
                  "flex-1 border px-4 py-3 text-sm transition-all duration-300",
                  data.gender === opt.value
                    ? "border-cs-accent bg-cs-accent/10 text-cs-white"
                    : "border-white/[0.08] text-white/50 hover:border-white/[0.15]"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {errors.gender && (
            <p id="step2-gender-error" role="alert" className={errorClass}>
              {errors.gender}
            </p>
          )}
        </fieldset>

        {/* Name row */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="step2-firstName" className={labelClass}>
              Vorname *
            </label>
            <input
              id="step2-firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              aria-required="true"
              aria-invalid={errors.firstName ? "true" : undefined}
              aria-describedby={errorId("firstName")}
              value={data.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
              onBlur={() => handleBlur("firstName")}
              placeholder="Max"
              className={cn(inputClass, errors.firstName && "border-cs-accent/50")}
            />
            {errors.firstName && (
              <p id="step2-firstName-error" role="alert" className={errorClass}>
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="step2-lastName" className={labelClass}>
              Nachname *
            </label>
            <input
              id="step2-lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              aria-required="true"
              aria-invalid={errors.lastName ? "true" : undefined}
              aria-describedby={errorId("lastName")}
              value={data.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
              onBlur={() => handleBlur("lastName")}
              placeholder="Mustermann"
              className={cn(inputClass, errors.lastName && "border-cs-accent/50")}
            />
            {errors.lastName && (
              <p id="step2-lastName-error" role="alert" className={errorClass}>
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Date of birth */}
        <div>
          <label htmlFor="step2-dob" className={labelClass}>
            Geburtsdatum *
          </label>
          <input
            id="step2-dob"
            name="dateOfBirth"
            type="date"
            autoComplete="bday"
            required
            aria-required="true"
            aria-invalid={errors.dateOfBirth ? "true" : undefined}
            aria-describedby={errorId("dateOfBirth")}
            value={data.dateOfBirth}
            onChange={(e) => onChange("dateOfBirth", e.target.value)}
            onBlur={() => handleBlur("dateOfBirth")}
            className={cn(inputClass, errors.dateOfBirth && "border-cs-accent/50")}
          />
          {errors.dateOfBirth && (
            <p id="step2-dateOfBirth-error" role="alert" className={errorClass}>
              {errors.dateOfBirth}
            </p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="step2-email" className={labelClass}>
              E-Mail *
            </label>
            <input
              id="step2-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              aria-required="true"
              aria-invalid={errors.email ? "true" : undefined}
              aria-describedby={errorId("email")}
              value={data.email}
              onChange={(e) => onChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              placeholder="max@beispiel.de"
              className={cn(inputClass, errors.email && "border-cs-accent/50")}
            />
            {errors.email && (
              <p id="step2-email-error" role="alert" className={errorClass}>
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="step2-phone" className={labelClass}>
              Telefon *
            </label>
            <input
              id="step2-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              required
              aria-required="true"
              aria-invalid={errors.phone ? "true" : undefined}
              aria-describedby={errorId("phone")}
              value={data.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              placeholder="0170 1234567"
              className={cn(inputClass, errors.phone && "border-cs-accent/50")}
            />
            {errors.phone && (
              <p id="step2-phone-error" role="alert" className={errorClass}>
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Street + House number */}
        <div className="grid grid-cols-[1fr_120px] gap-4">
          <div>
            <label htmlFor="step2-street" className={labelClass}>
              Strasse *
            </label>
            <input
              id="step2-street"
              name="street"
              type="text"
              autoComplete="address-line1"
              required
              aria-required="true"
              aria-invalid={errors.street ? "true" : undefined}
              aria-describedby={errorId("street")}
              value={data.street}
              onChange={(e) => onChange("street", e.target.value)}
              onBlur={() => handleBlur("street")}
              placeholder="Musterstr."
              className={cn(inputClass, errors.street && "border-cs-accent/50")}
            />
            {errors.street && (
              <p id="step2-street-error" role="alert" className={errorClass}>
                {errors.street}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="step2-houseNumber" className={labelClass}>
              Nr. *
            </label>
            <input
              id="step2-houseNumber"
              name="houseNumber"
              type="text"
              autoComplete="address-line2"
              required
              aria-required="true"
              aria-invalid={errors.houseNumber ? "true" : undefined}
              aria-describedby={errorId("houseNumber")}
              value={data.houseNumber}
              onChange={(e) => onChange("houseNumber", e.target.value)}
              onBlur={() => handleBlur("houseNumber")}
              placeholder="12a"
              className={cn(inputClass, errors.houseNumber && "border-cs-accent/50")}
            />
            {errors.houseNumber && (
              <p id="step2-houseNumber-error" role="alert" className={errorClass}>
                {errors.houseNumber}
              </p>
            )}
          </div>
        </div>

        {/* PLZ + City */}
        <div className="grid grid-cols-[120px_1fr] gap-4">
          <div>
            <label htmlFor="step2-zipCode" className={labelClass}>
              PLZ *
            </label>
            <input
              id="step2-zipCode"
              name="zipCode"
              type="text"
              autoComplete="postal-code"
              inputMode="numeric"
              required
              aria-required="true"
              aria-invalid={errors.zipCode ? "true" : undefined}
              aria-describedby={errorId("zipCode")}
              value={data.zipCode}
              onChange={(e) => onChange("zipCode", e.target.value)}
              onBlur={() => handleBlur("zipCode")}
              placeholder="45739"
              maxLength={5}
              className={cn(inputClass, errors.zipCode && "border-cs-accent/50")}
            />
            {errors.zipCode && (
              <p id="step2-zipCode-error" role="alert" className={errorClass}>
                {errors.zipCode}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="step2-city" className={labelClass}>
              Ort *
            </label>
            <input
              id="step2-city"
              name="city"
              type="text"
              autoComplete="address-level2"
              required
              aria-required="true"
              aria-invalid={errors.city ? "true" : undefined}
              aria-describedby={errorId("city")}
              value={data.city}
              onChange={(e) => onChange("city", e.target.value)}
              onBlur={() => handleBlur("city")}
              placeholder="Oer-Erkenschwick"
              className={cn(inputClass, errors.city && "border-cs-accent/50")}
            />
            {errors.city && (
              <p id="step2-city-error" role="alert" className={errorClass}>
                {errors.city}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 border border-white/[0.08] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-500 hover:border-white/20 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-[400ms] group-hover:-translate-x-1" />
          Zurück
        </button>
        <button
          onClick={handleNext}
          className="group flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
        >
          Weiter
          <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
