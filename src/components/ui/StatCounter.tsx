"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  duration?: number;
}

export default function StatCounter({ value, duration = 1.8 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
      onUpdate(latestValue) {
        node.textContent = Math.floor(latestValue).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [inView, value, duration]);

  return <span ref={ref} className="tabular-nums">0</span>;
}
