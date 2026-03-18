"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  type?: never;
  onClick?: () => void;
  href?: string;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
  onClick?: never;
  href?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring" as const, bounce: 0, duration: 0.6 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-cs-accent",
  onChange,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(outsideClickRef as React.RefObject<HTMLDivElement>, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number, tab: Tab) => {
    setSelected(index);
    onChange?.(index);
    if (tab.href) {
      window.location.href = tab.href;
    }
    if (tab.onClick) {
      tab.onClick();
    }
  };

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex items-center gap-1 rounded-full border border-white/[0.08] bg-cs-black/80 p-1 shadow-sm backdrop-blur-xl",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return (
            <div
              key={`separator-${index}`}
              className="mx-0.5 h-5 w-px bg-white/[0.08]"
              aria-hidden="true"
            />
          );
        }

        const Icon = tab.icon;
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={selected === index}
            onClick={() => handleSelect(index, tab)}
            transition={transition}
            className={cn(
              "relative flex items-center rounded-full px-2 py-1.5 text-[11px] font-medium transition-colors duration-300",
              selected === index
                ? cn("bg-white/[0.06]", activeColor)
                : "text-white/30 hover:bg-white/[0.04] hover:text-white/60"
            )}
          >
            <Icon size={16} />
            <AnimatePresence initial={false}>
              {selected === index && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
