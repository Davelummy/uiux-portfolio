"use client";

import { ReactLenis } from 'lenis/react'
import { ReactNode, useEffect, useState } from 'react';

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: reducedMotion ? 1 : 0.08,
        duration: reducedMotion ? 0 : 1.5,
        smoothWheel: !reducedMotion
      }}
    >
      {children}
    </ReactLenis>
  )
}
