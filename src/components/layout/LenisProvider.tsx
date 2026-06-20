"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

export default function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.07, smoothWheel: true, syncTouch: false }}>
      {children as any}
    </ReactLenis>
  );
}
