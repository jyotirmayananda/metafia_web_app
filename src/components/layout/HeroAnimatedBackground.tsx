"use client";

import { motion, useReducedMotion } from "framer-motion";

const HERO_IMAGE = "/images/hero-industrial-bg.png";

export default function HeroAnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 left-0 right-0 h-[min(72vh,720px)] min-h-[480px] md:absolute md:inset-0 md:h-auto md:min-h-0 overflow-hidden">
        {/* Primary Ken Burns layer */}
        <motion.div
          className="absolute inset-0 origin-center will-change-transform"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1.03, 1],
                  x: [0, -14, 8, 0],
                  y: [0, -10, 6, 0],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt=""
            decoding="async"
            fetchPriority="high"
            className="absolute left-[-10%] top-[-10%] h-[120%] w-[120%] max-w-none object-cover object-center"
          />
        </motion.div>

        {/* Parallax depth — desktop only */}
        <motion.div
          className="absolute inset-0 hidden origin-center will-change-transform md:block"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1.04, 1.12, 1.06, 1.04],
                  x: [0, 10, -6, 0],
                  y: [0, 8, -4, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt=""
            decoding="async"
            className="absolute left-[-8%] top-[-8%] h-[116%] w-[116%] max-w-none object-cover object-center opacity-40 blur-[2px]"
          />
        </motion.div>

        {/* Top-center scrim so headline & subtitle stay readable */}
        <div className="absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-white/55 via-white/30 to-transparent" />

        {/* Subtle readability overlay — image stays visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/5 to-[#f8fafc]/75 md:from-slate-900/15 md:via-transparent md:to-[#f8fafc]/85" />

        {/* Warm amber + steel blue tint (no green) */}
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.04, 0.12, 0.06, 0.04] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-tr from-amber-300/20 via-transparent to-blue-400/10"
        />

        {/* Soft amber sheen instead of heavy white sweep */}
        <motion.div
          animate={
            prefersReducedMotion ? undefined : { x: ["-130%", "230%"] }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 3,
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent skew-x-12"
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(15,23,42,0.05)_100%)]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/60 to-transparent" />
    </div>
  );
}
