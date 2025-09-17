"use client";

import React, { useEffect, useRef, useState } from "react";

export type RevealProps = {
  children: React.ReactNode;
  delayMs?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

export default function Reveal({
  children,
  delayMs = 0,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -5% 0px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              const timeoutId = setTimeout(() => setIsVisible(true), delayMs);
              if (!once) {
                // clear on unmount
                return () => clearTimeout(timeoutId);
              }
            } else {
              setIsVisible(true);
            }
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delayMs, once, threshold, rootMargin]);

  const baseClass = "reveal";
  const variantClass = "reveal-up";
  const visibleClass = isVisible ? "is-visible" : "";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${variantClass} ${visibleClass}`.trim()}
    >
      {children}
    </div>
  );
}
