"use client";

import { openCookieSettings } from "@/components/ui/cookie-banner";

export function CookieSettingsTrigger({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={
        className ??
        "text-sm text-cs-gray-400 transition-colors duration-300 hover:text-white"
      }
    >
      Cookie-Einstellungen
    </button>
  );
}
