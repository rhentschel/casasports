"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function StepSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
      className="mx-auto max-w-2xl text-center"
    >
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.6, delay: 0.2 }}
        >
          <CheckCircle className="h-20 w-20 text-green-500" strokeWidth={1.5} />
        </motion.div>
      </div>

      <h2 className="mt-8 text-3xl font-black uppercase leading-[1.05] tracking-[-0.03em] text-cs-white md:text-4xl">
        Willkommen bei
        <br />
        <span className="text-cs-gold">Casa Sports!</span>
      </h2>

      <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/60">
        Dein Vertrag wurde erfolgreich abgeschlossen. Du erhältst in Kürze
        eine Bestätigung per E-Mail.
      </p>

      <p className="mt-4 text-base text-white/60">
        Wir freuen uns auf dich im Studio!
      </p>

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="group flex items-center gap-3 border border-white/[0.08] px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white/60 transition-all duration-500 hover:border-white/20 hover:text-white"
        >
          Zur Startseite
        </Link>
        <Link
          href="/kurse"
          className="group flex items-center gap-3 border border-cs-accent bg-cs-accent px-8 py-4 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
        >
          Kursplan ansehen
          <ArrowRight className="h-4 w-4 transition-transform duration-[400ms] group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
