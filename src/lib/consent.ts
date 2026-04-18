export type ConsentCategory = "necessary" | "analytics" | "marketing";

export type Consent = Record<ConsentCategory, boolean>;

export type ConsentRecord = {
  version: number;
  timestamp: number;
  consent: Consent;
};

export const CONSENT_VERSION = 1;
export const STORAGE_KEY = "cs-cookie-consent";
export const CONSENT_EVENT = "cs-consent-change";

export const DEFAULT_CONSENT: Consent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setConsent(consent: Consent): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    timestamp: Date.now(),
    consent: { ...consent, necessary: true },
  };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
      window.dispatchEvent(
        new CustomEvent<ConsentRecord>(CONSENT_EVENT, { detail: record }),
      );
    } catch {
      // storage blocked
    }
  }
  return record;
}

export function clearConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
  } catch {
    // ignore
  }
}

export function acceptAll(): ConsentRecord {
  return setConsent({ necessary: true, analytics: true, marketing: true });
}

export function rejectAll(): ConsentRecord {
  return setConsent({ necessary: true, analytics: false, marketing: false });
}
