"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <m.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: reducedMotion
          ? { duration: 0 }
          : { duration, delay, ease }
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0.1
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <m.div
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: 0,
            staggerChildren: reducedMotion ? 0 : delay
          }
        }
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <m.div
      variants={{
        hidden: reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: reducedMotion
            ? { duration: 0 }
            : { duration: 0.55, ease }
        }
      }}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </m.div>
  );
}
