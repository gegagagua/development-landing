"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { setLenis } from "@/lib/smooth-scroll";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.075,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.1,
      anchors: {
        offset: -64,
        duration: 1.6,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      },
    });

    setLenis(lenis);

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
