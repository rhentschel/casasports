import type { KursEntry } from "@/data/kursplan";
import { getLocationString } from "@/data/kursplan";

export function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function getScheduleDay(): number {
  const jsDay = new Date().getDay();
  return jsDay === 0 ? -1 : jsDay - 1;
}

export function getNowMinutes(): number {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

export function getCurrentCourse(entries: ReadonlyArray<KursEntry>): KursEntry | null {
  const day = getScheduleDay();
  const now = getNowMinutes();
  return (
    entries.find((e) => {
      if (e.day !== day) return false;
      const start = toMinutes(e.time);
      return now >= start && now < start + e.duration;
    }) ?? null
  );
}

export function getNextCourse(entries: ReadonlyArray<KursEntry>): KursEntry | null {
  const day = getScheduleDay();
  const now = getNowMinutes();

  const todayNext = entries
    .filter((e) => e.day === day && toMinutes(e.time) > now)
    .sort((a, b) => toMinutes(a.time) - toMinutes(b.time));
  if (todayNext.length > 0) return todayNext[0];

  for (let offset = 1; offset <= 6; offset++) {
    const checkDay = (day + offset) % 6;
    const dayCourses = entries
      .filter((e) => e.day === checkDay)
      .sort((a, b) => toMinutes(a.time) - toMinutes(b.time));
    if (dayCourses.length > 0) return dayCourses[0];
  }

  return null;
}

export function formatTimeUntil(entry: KursEntry): string {
  const day = getScheduleDay();
  const now = getNowMinutes();
  const entryMin = toMinutes(entry.time);

  let diff: number;
  if (entry.day === day && entryMin > now) {
    diff = entryMin - now;
  } else {
    let daysUntil = entry.day - day;
    if (daysUntil <= 0) daysUntil += 6;
    diff = daysUntil * 24 * 60 + entryMin - now;
  }

  const h = Math.floor(diff / 60);
  const m = diff % 60;
  if (h === 0) return `${m} Min`;
  if (h < 24) return `${h}h ${m}min`;
  return `${Math.floor(h / 24)}d ${h % 24}h`;
}

function nextOccurrence(entry: KursEntry): Date {
  const now = new Date();
  const jsDay = now.getDay();
  const scheduleDay = jsDay === 0 ? -1 : jsDay - 1;
  let daysUntil = entry.day - scheduleDay;
  if (daysUntil <= 0) daysUntil += 7;
  const date = new Date(now);
  date.setDate(date.getDate() + daysUntil);
  const [h, m] = entry.time.split(":").map(Number);
  date.setHours(h, m, 0, 0);
  return date;
}

function fmtCal(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function googleCalendarUrl(entry: KursEntry): string {
  const start = nextOccurrence(entry);
  const end = new Date(start.getTime() + entry.duration * 60_000);
  const loc = getLocationString();
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${entry.name} - Casa Sports`,
    dates: `${fmtCal(start)}/${fmtCal(end)}`,
    details: `Trainer: ${entry.trainer}\nRaum: ${entry.room}`,
    location: loc,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

export function downloadIcs(entry: KursEntry): void {
  const start = nextOccurrence(entry);
  const end = new Date(start.getTime() + entry.duration * 60_000);
  const rrDay = ["MO", "TU", "WE", "TH", "FR", "SA"][entry.day];
  const loc = getLocationString();
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Casa Sports//Kursplan//DE",
    "BEGIN:VEVENT",
    `DTSTART:${fmtCal(start)}`,
    `DTEND:${fmtCal(end)}`,
    `RRULE:FREQ=WEEKLY;BYDAY=${rrDay}`,
    `SUMMARY:${entry.name} - Casa Sports`,
    `DESCRIPTION:Trainer: ${entry.trainer}\\nRaum: ${entry.room}`,
    `LOCATION:${loc.replace(",", "\\,")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `casa-sports-${entry.name.toLowerCase().replace(/\s/g, "-")}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}
