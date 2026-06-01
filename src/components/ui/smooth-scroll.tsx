"use client";

import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />
      {children}
    </ReactLenis>
  )
}
