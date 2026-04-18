"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useReveal() {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      element.classList.add("visible");
      return;
    }

    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.classList.add("visible");
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" },
    );

    observerRef.current.observe(element);

    const fallback = setTimeout(() => element.classList.add("visible"), 3000);

    return () => {
      observerRef.current?.disconnect();
      clearTimeout(fallback);
    };
  }, [element]);

  const ref = useCallback((node: HTMLElement | null) => {
    setElement(node);
  }, []);

  return ref;
}
