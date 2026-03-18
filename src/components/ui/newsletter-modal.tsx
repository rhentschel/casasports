"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Supabase/n8n Integration
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="fixed left-1/2 top-1/2 z-[101] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 border border-white/[0.08] bg-cs-gray-900 p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-white/30 transition-colors hover:text-white"
              aria-label="Schließen"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-lg font-black uppercase tracking-tight text-cs-accent">
                  Danke!
                </p>
                <p className="mt-2 text-sm text-cs-gray-400">
                  Du bist jetzt auf der Liste.
                </p>
              </div>
            ) : (
              <>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
                  Newsletter
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white">
                  Bleib am Ball.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cs-gray-400">
                  Kursänderungen, Aktionen und Fitness-Tipps direkt in dein
                  Postfach. Kein Spam.
                </p>

                <form onSubmit={handleSubmit} className="mt-8">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Deine E-Mail"
                    className="w-full border border-white/[0.08] bg-cs-black px-4 py-3 text-sm text-cs-white placeholder:text-cs-gray-500 focus:border-cs-accent focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full border border-cs-accent bg-cs-accent py-3 text-[13px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-transparent"
                  >
                    Anmelden
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
