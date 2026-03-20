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

export const schedule: KursEntry[] = [
  { id: "mo-09", time: "09:00", duration: 50, name: "Zirkeltraining", trainer: "Renate", room: "Kursraum 1", intensity: 2, day: 0 },
  { id: "mo-10", time: "10:00", duration: 45, name: "Cycling", trainer: "Jennifer", room: "Cycling-Raum", intensity: 2, day: 0 },
  { id: "mo-17", time: "17:00", duration: 45, name: "Power Training", trainer: "Hidayet", room: "Kursraum 1", intensity: 3, day: 0 },
  { id: "mo-18", time: "18:00", duration: 50, name: "Functional", trainer: "Naim", room: "Functional Area", intensity: 2, day: 0 },
  { id: "mo-19", time: "19:00", duration: 45, name: "Cardio", trainer: "Jennifer", room: "Kursraum 1", intensity: 2, day: 0 },
  { id: "di-10", time: "10:00", duration: 50, name: "Functional", trainer: "Hidayet", room: "Functional Area", intensity: 2, day: 1 },
  { id: "di-17", time: "17:00", duration: 45, name: "Cardio", trainer: "Jennifer", room: "Kursraum 1", intensity: 2, day: 1 },
  { id: "di-18", time: "18:00", duration: 45, name: "Cycling", trainer: "Eren", room: "Cycling-Raum", intensity: 2, day: 1 },
  { id: "di-19", time: "19:00", duration: 60, name: "Gruppentraining", trainer: "Naim", room: "Kursraum 1", intensity: 2, day: 1 },
  { id: "mi-09", time: "09:00", duration: 50, name: "Zirkeltraining", trainer: "Renate", room: "Kursraum 1", intensity: 2, day: 2 },
  { id: "mi-10", time: "10:00", duration: 45, name: "Cycling", trainer: "Jennifer", room: "Cycling-Raum", intensity: 3, day: 2 },
  { id: "mi-17", time: "17:00", duration: 50, name: "Functional", trainer: "Hidayet", room: "Functional Area", intensity: 2, day: 2 },
  { id: "mi-18", time: "18:00", duration: 45, name: "Power Training", trainer: "Naim", room: "Kursraum 1", intensity: 3, day: 2 },
  { id: "mi-19", time: "19:00", duration: 45, name: "Cycling", trainer: "Eren", room: "Cycling-Raum", intensity: 2, day: 2 },
  { id: "do-10", time: "10:00", duration: 50, name: "Functional", trainer: "Hidayet", room: "Functional Area", intensity: 2, day: 3 },
  { id: "do-17", time: "17:00", duration: 45, name: "Power Training", trainer: "Naim", room: "Kursraum 1", intensity: 3, day: 3 },
  { id: "do-18", time: "18:00", duration: 45, name: "Cycling", trainer: "Jennifer", room: "Cycling-Raum", intensity: 2, day: 3 },
  { id: "do-19", time: "19:00", duration: 50, name: "Zirkeltraining", trainer: "Renate", room: "Kursraum 1", intensity: 2, day: 3 },
  { id: "fr-09", time: "09:00", duration: 50, name: "Zirkeltraining", trainer: "Renate", room: "Kursraum 1", intensity: 2, day: 4 },
  { id: "fr-17", time: "17:00", duration: 45, name: "Cardio", trainer: "Jennifer", room: "Kursraum 1", intensity: 2, day: 4 },
  { id: "fr-18", time: "18:00", duration: 60, name: "Gruppentraining", trainer: "Naim", room: "Kursraum 1", intensity: 2, day: 4 },
  { id: "sa-09", time: "09:00", duration: 60, name: "Gruppentraining", trainer: "Hidayet", room: "Kursraum 1", intensity: 2, day: 5 },
  { id: "sa-10", time: "10:00", duration: 45, name: "Cycling", trainer: "Jennifer", room: "Cycling-Raum", intensity: 2, day: 5 },
];

export function getLocationString(): string {
  return `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`;
}
