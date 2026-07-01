"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl space-y-4 mb-16 ${centered ? "mx-auto text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 border border-blue-200 px-3.5 py-1.5 rounded-full bg-blue-50/80 shadow-sm font-sans">
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-display">
        {title}
      </h2>
      
      {description && (
        <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto font-sans">
          {description}
        </p>
      )}
    </motion.div>
  );
}
