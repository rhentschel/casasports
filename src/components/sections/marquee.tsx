export function Marquee() {
  const items = [
    "Krafttraining",
    "Cycling",
    "Functional",
    "Sauna",
    "Personal Training",
    "Gruppentraining",
    "Infrarot",
    "Cardio",
    "Wellness",
  ];

  return (
    <section className="overflow-hidden border-y border-cs-gray-800/50 bg-cs-black py-4">
      <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 flex items-center gap-6">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-cs-gray-600">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-cs-accent/40" />
          </span>
        ))}
      </div>
    </section>
  );
}
