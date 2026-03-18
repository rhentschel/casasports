export function Marquee() {
  const items = [
    "Krafttraining",
    "Cycling",
    "Functional Training",
    "Sauna",
    "Personal Training",
    "Gruppentraining",
    "Infrarotkabine",
    "Cardio",
    "Wellness",
  ];

  return (
    <section className="overflow-hidden border-y border-cs-gray-800 bg-cs-black py-5">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            <span className="font-[family-name:var(--font-display)] text-lg italic tracking-wide text-cs-gray-500">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-cs-accent" />
          </span>
        ))}
      </div>
    </section>
  );
}
