"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Paintbrush,
  Sparkles,
  FlaskConical,
  Home,
  MapPin,
} from "lucide-react";

const ALUMINIUM_SERVICES = [
  {
    icon: Paintbrush,
    title: "Powder Coating",
    description:
      "Electrostatic powder coating on aluminium profiles, panels, and fabricated structures — durable RAL colours built for Odisha's coastal climate.",
  },
  {
    icon: Sparkles,
    title: "Anodizing",
    description:
      "Professional anodizing that strengthens the natural oxide layer, locks in metallic tone, and protects against corrosion and wear.",
  },
  {
    icon: FlaskConical,
    title: "Acid Treatment",
    description:
      "Controlled acid pre-treatment and surface preparation to strip contaminants and ensure flawless adhesion before coating or anodizing.",
  },
  {
    icon: Home,
    title: "Interior Design",
    description:
      "Finished aluminium elements for architectural and interior applications — from façades and partitions to custom decorative metalwork.",
  },
];

export default function AluminiumShowcase() {
  return (
    <section
      id="aluminium-division"
      className="relative overflow-hidden rounded-3xl border border-orange-200/80 bg-gradient-to-br from-orange-50/90 via-white to-amber-50/50 shadow-sm"
    >
      {/* Decorative mesh */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image panel — replace /images/powder-coating.png with your photo anytime */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[560px] overflow-hidden"
        >
          <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-2xl overflow-hidden border-2 border-orange-200/60 shadow-xl">
            <Image
              src="/images/aluimg/1.jpg"
              alt="Metafia powder coating line — aluminium surface finishing in Berhampur, Odisha"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-orange-100 bg-orange-900/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-orange-300/30">
                <Layers className="w-3 h-3" />
                Live Powder Coating Line
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content panel */}
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-800 bg-orange-100 border border-orange-200 px-3.5 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              Berhampur, Odisha
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-slate-900 leading-tight font-display tracking-tight">
              Aluminium Powder Coating &{" "}
              <span className="text-orange-700">Anodizing</span>
            </h2>

            <p className="text-lg font-bold text-orange-800/90 italic font-display leading-snug">
              &ldquo;To meet customers&apos; needs is our responsibility.&rdquo;
            </p>

            <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
              Metafia specializes in powder coating and anodizing of aluminium. We supply
              aluminium profiles and deliver factory-grade surface finishes — from electrostatic
              powder coating and anodizing to acid treatment and interior metalwork — serving
              architects, fabricators, and industrial clients across Odisha.
            </p>
          </motion.div>

          {/* Service chips from metafia.in */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ALUMINIUM_SERVICES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                  className="group p-4 rounded-xl bg-white/80 border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-700 shrink-0 group-hover:bg-orange-200 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-extrabold text-slate-900 font-display">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-700 hover:bg-orange-800 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md shadow-orange-900/15 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Request Aluminium Finishing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
