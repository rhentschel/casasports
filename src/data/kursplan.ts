import { siteConfig } from "@/data/site";

export interface KursEntry {
  id: string;
  time: string;
  duration: number;
  name: KursTypeName;
  trainer: string;
  room: string;
  intensity: 1 | 2 | 3;
  day: number;
}

export const kursTypeConfig = {
  "Power Training": { bg: "bg-cs-accent/10", text: "text-cs-accent", dot: "bg-cs-accent", image: "/images/casasports-krafttraining-1.webp" },
  "Cycling": { bg: "bg-blue-500/10", text: "text-blue-400", dot: "bg-blue-400", image: "/images/casasports-spinning-kurs-1.webp" },
  "Functional": { bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "bg-emerald-400", image: "/images/casasports-functional-training.webp" },
  "Cardio": { bg: "bg-orange-500/10", text: "text-orange-400", dot: "bg-orange-400", image: "/images/casasports-kardio-power.webp" },
  "Zirkeltraining": { bg: "bg-purple-500/10", text: "text-purple-400", dot: "bg-purple-400", image: "/images/casasports-kurse-fuer-alle.webp" },
  "Gruppentraining": { bg: "bg-cs-gold/10", text: "text-cs-gold", dot: "bg-cs-gold", image: "/images/casasports-gruppentraining.webp" },
} as const;

export type KursTypeName = keyof typeof kursTypeConfig;

export const dayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa"] as const;
export const dayNamesFull = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
] as const;

export function getLocationString(): string {
  return `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`;
}
