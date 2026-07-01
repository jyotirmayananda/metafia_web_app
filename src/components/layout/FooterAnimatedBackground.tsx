"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FooterAnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();

  const blobTransition = (duration: number) => ({
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none min-h-full" aria-hidden>
      {/* Lighter wash on mobile so blobs read through */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-slate-50/40 to-slate-100/70 md:from-slate-50/90 md:via-slate-50/95 md:to-slate-100/90" />

      {/* Top-left — visible on tall mobile footer */}
      <motion.div
        className="absolute top-[8%] -left-[12%] w-[min(320px,85vw)] h-[min(320px,85vw)] md:top-[5%] md:-left-[10%] md:w-[min(520px,70vw)] md:h-[min(520px,70vw)] rounded-full bg-gradient-to-tr from-blue-400/40 to-blue-200/20 md:from-blue-400/25 md:to-blue-200/10 blur-2xl md:blur-[90px] will-change-transform"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 30, -15, 0], y: [0, -20, 15, 0], scale: [1, 1.1, 0.96, 1] }
        }
        transition={blobTransition(20)}
      />

      {/* Top-right / mid */}
      <motion.div
        className="absolute top-[38%] -right-[8%] w-[min(300px,80vw)] h-[min(300px,80vw)] md:top-auto md:bottom-[5%] md:-right-[5%] md:w-[min(480px,65vw)] md:h-[min(480px,65vw)] rounded-full bg-gradient-to-bl from-orange-400/35 to-amber-200/15 md:from-orange-400/20 md:to-amber-200/10 blur-2xl md:blur-[85px] will-change-transform"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -25, 20, 0], y: [0, 20, -12, 0], scale: [1, 0.92, 1.08, 1] }
        }
        transition={blobTransition(18)}
      />

      {/* Center glow */}
      <div className="absolute top-[55%] left-0 right-0 flex justify-center md:top-auto md:bottom-[12%]">
        <motion.div
          className="w-[min(280px,75vw)] h-[min(280px,75vw)] md:w-[min(400px,55vw)] md:h-[min(400px,55vw)] rounded-full bg-gradient-to-r from-amber-300/30 to-blue-300/20 md:from-amber-300/15 md:to-blue-300/10 blur-2xl md:blur-[80px] will-change-transform"
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.35, 0.6, 0.4, 0.35], scale: [0.92, 1.06, 0.98, 0.92] }
          }
          transition={blobTransition(14)}
        />
      </div>

      {/* Grid — always visible, no blur dependency */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(29,78,216,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,78,216,0.06)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:40px_40px] opacity-70 md:opacity-60" />

      {!prefersReducedMotion && (
        <motion.div
          animate={{ x: ["-120%", "220%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 4,
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 md:via-white/20 to-transparent skew-x-12"
        />
      )}

      <div className="absolute top-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-b from-white/50 md:from-white/60 to-transparent" />
    </div>
  );
}
