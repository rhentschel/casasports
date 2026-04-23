import { Sparkles } from "lucide-react"

interface KeyTakeawayProps {
  text: string
}

export function KeyTakeaway({ text }: KeyTakeawayProps) {
  return (
    <aside
      aria-label="Kernaussage"
      className="not-prose mb-10 border-l-2 border-cs-accent bg-cs-accent/[0.04] px-6 py-5"
    >
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-cs-accent" aria-hidden />
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cs-accent">
          Kurz gesagt
        </p>
      </div>
      <p className="mt-3 text-base leading-relaxed text-cs-white md:text-lg">
        {text}
      </p>
    </aside>
  )
}
