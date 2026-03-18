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
    <div className="overflow-hidden border-y border-white/[0.04] bg-cs-black py-5">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            <span className="text-[13px] font-medium uppercase tracking-[0.15em] text-cs-gray-600">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-cs-accent/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
