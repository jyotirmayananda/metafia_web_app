"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* Soft Mesh Blob 1 - Silver/Platinum (Sharper, higher opacity) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -70, 50, 0],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-5%] right-[12%] w-[550px] h-[550px] bg-gradient-to-br from-blue-300/40 to-amber-200/20 rounded-full filter blur-[75px]"
      />

      {/* Soft Mesh Blob 2 - Light Slate */}
      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 80, -45, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[-8%] w-[480px] h-[480px] bg-gradient-to-tr from-blue-200/35 to-amber-100/15 rounded-full filter blur-[65px]"
      />

      {/* Soft Mesh Blob 3 - Platinum Warm Sheen */}
      <motion.div
        animate={{
          scale: [0.85, 1.15, 0.85],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[22%] w-[400px] h-[400px] bg-gradient-to-r from-amber-200/25 to-blue-100/15 rounded-full filter blur-[75px]"
      />

      {/* Concentric metallic die/anodizing lines (Highly visible geometry) */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] opacity-35">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-full h-full rounded-full border border-blue-400/20 border-dashed relative flex items-center justify-center"
        >
          <div className="w-[500px] h-[500px] rounded-full border border-blue-400/12 relative flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-blue-400/18 border-dashed" />
          </div>
        </motion.div>
      </div>

      {/* Floating Technical Crosshairs & Shapes */}
      <div className="absolute inset-0 z-0 opacity-60">
        {/* Floating plus sign 1 */}
        <motion.div
          animate={{
            x: [100, 180, 60, 100],
            y: [200, 120, 260, 200],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-slate-500 font-display text-xl font-light select-none"
        >
          +
        </motion.div>

        {/* Floating plus sign 2 */}
        <motion.div
          animate={{
            x: [850, 750, 920, 850],
            y: [120, 240, 60, 120],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-slate-500 font-display text-xl font-light select-none"
        >
          +
        </motion.div>

        {/* Floating blueprint frame outline */}
        <motion.div
          animate={{
            x: [180, 250, 120, 180],
            y: [380, 460, 340, 380],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-12 h-12 border border-slate-400/40 rounded-lg"
        />
      </div>

      {/* Anisotropic Sheen Sweep - sweeping reflective highlight (Silver-slate contrast) */}
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 5
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent skew-x-12 z-10"
      />

      {/* Blueprint technical grid with a very soft scanning vertical line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:50px_50px]">
        <motion.div
          animate={{
            y: ["0%", "1000%"],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-slate-500/25 to-transparent"
        />
      </div>

    </div>
  );
}
