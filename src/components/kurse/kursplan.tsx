"use client";

import { cn } from "@/lib/utils";
import { useReveal } from "@/lib/use-reveal";

const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa"] as const;

const schedule = [
  { time: "09:00", Mo: "Zirkeltraining", Di: null, Mi: "Zirkeltraining", Do: null, Fr: "Zirkeltraining", Sa: "Gruppentraining" },
  { time: "10:00", Mo: "Cycling", Di: "Functional", Mi: "Cycling", Do: "Functional", Fr: null, Sa: "Cycling" },
  { time: "17:00", Mo: "Power Training", Di: "Cardio", Mi: "Functional", Do: "Power Training", Fr: "Cardio", Sa: null },
  { time: "18:00", Mo: "Functional", Di: "Cycling", Mi: "Power Training", Do: "Cycling", Fr: "Gruppentraining", Sa: null },
  { time: "19:00", Mo: "Cardio", Di: "Gruppentraining", Mi: "Cycling", Do: "Zirkeltraining", Fr: null, Sa: null },
];

export function Kursplan() {
  const ref = useReveal();

  return (
    <section className="bg-cs-black py-32 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-8 md:px-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cs-accent">
              Kursplan
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em] text-cs-white md:text-5xl">
              Deine Woche.
            </h2>
          </div>
          <p className="text-[13px] leading-relaxed text-cs-gray-500">
            Aenderungen vorbehalten. Aktuelle Zeiten im Studio.
          </p>
        </div>

        {/* Desktop table */}
        <div className="mt-12 hidden overflow-hidden border border-white/[0.06] md:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gray-500">
                  Uhrzeit
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="px-4 py-4 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-cs-gray-500"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr
                  key={row.time}
                  className="border-b border-white/[0.04] transition-colors duration-300 hover:bg-white/[0.02]"
                >
                  <td className="px-6 py-5 text-[14px] font-bold tabular-nums text-cs-white">
                    {row.time}
                  </td>
                  {days.map((day) => {
                    const kurs = row[day];
                    return (
                      <td key={day} className="px-4 py-5 text-center">
                        {kurs ? (
                          <span
                            className={cn(
                              "inline-block rounded-sm px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]",
                              kurs === "Power Training" &&
                                "bg-cs-accent/10 text-cs-accent",
                              kurs === "Cycling" &&
                                "bg-blue-500/10 text-blue-400",
                              kurs === "Functional" &&
                                "bg-emerald-500/10 text-emerald-400",
                              kurs === "Cardio" &&
                                "bg-orange-500/10 text-orange-400",
                              kurs === "Zirkeltraining" &&
                                "bg-purple-500/10 text-purple-400",
                              kurs === "Gruppentraining" &&
                                "bg-cs-gold/10 text-cs-gold"
                            )}
                          >
                            {kurs}
                          </span>
                        ) : (
                          <span className="text-[11px] text-cs-gray-700">
                            —
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="mt-12 space-y-3 md:hidden">
          {schedule.map((row) => (
            <div
              key={row.time}
              className="border border-white/[0.06] p-5"
            >
              <p className="text-[14px] font-bold tabular-nums text-cs-white">
                {row.time} Uhr
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {days.map((day) => {
                  const kurs = row[day];
                  if (!kurs) return null;
                  return (
                    <span
                      key={day}
                      className="bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/50"
                    >
                      <span className="mr-1.5 font-bold text-cs-accent">
                        {day}
                      </span>
                      {kurs}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
