"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  defaultActive?: number;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isExpanded: boolean) => ({
    gap: isExpanded ? ".5rem" : 0,
    paddingLeft: isExpanded ? "1rem" : ".5rem",
    paddingRight: isExpanded ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = {
  delay: 0.05,
  type: "spring" as const,
  bounce: 0,
  duration: 0.4,
};

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-cs-accent",
  defaultActive = 0,
}: ExpandableTabsProps) {
  const [active, setActive] = React.useState<number>(defaultActive);
  const [hovered, setHovered] = React.useState<number | null>(null);

  const handleClick = (index: number, tab: Tab) => {
    setActive(index);
    if (tab.href) {
      window.location.href = tab.href;
    }
    if (tab.onClick) {
      tab.onClick();
    }
  };

  // Determine which tab should show text: hovered one, or active one
  const expandedIndex = hovered ?? active;

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full border border-white/[0.15] bg-white/[0.06] p-1.5 shadow-lg shadow-black/20 backdrop-blur-xl",
        className
      )}
      onMouseLeave={() => setHovered(null)}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return (
            <div
              key={`separator-${index}`}
              className="mx-1 h-5 w-px bg-white/[0.15]"
              aria-hidden="true"
            />
          );
        }

        const Icon = tab.icon;
        const isExpanded = expandedIndex === index;

        return (
          <motion.button
            key={tab.title}
            type="button"
            aria-label={tab.title}
            aria-current={active === index ? "page" : undefined}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={isExpanded}
            onClick={() => handleClick(index, tab)}
            onMouseEnter={() => setHovered(index)}
            transition={transition}
            className={cn(
              "relative flex items-center rounded-full px-2.5 py-2 text-[11px] font-medium transition-colors duration-300",
              active === index
                ? cn("bg-white/[0.1]", activeColor)
                : "text-white/60 hover:text-white/70"
            )}
          >
            <Icon size={18} />
            <AnimatePresence initial={false}>
              {isExpanded && (
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
