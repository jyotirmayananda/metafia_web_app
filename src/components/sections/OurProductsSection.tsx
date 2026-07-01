"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import InteriorDesignGallery from "@/components/sections/InteriorDesignGallery";
import {
  ArrowRight,
  Paintbrush,
  Sparkles,
  FlaskConical,
  Home,
  Truck,
  Fuel,
  Layers,
  Wheat,
} from "lucide-react";

const PRODUCTS = [
  {
    icon: Paintbrush,
    title: "Powder Coating",
    description:
      "Electrostatic powder coating on aluminium profiles, gates, and architectural panels — built for modern façades and interior metalwork.",
    href: "/services#powder-coating",
    accent: "orange",
  },
  {
    icon: Sparkles,
    title: "Anodized",
    description:
      "Professional aluminium anodizing for durable, premium metallic finishes that protect against corrosion and wear.",
    href: "/services#anodizing",
    accent: "orange",
  },
  {
    icon: FlaskConical,
    title: "Acid Treatment",
    description:
      "Surface pre-treatment and acid cleaning so every powder coat and anodize layer bonds perfectly to the metal.",
    href: "/services#acid-treatment",
    accent: "orange",
  },
  {
    icon: Home,
    title: "Interior Design",
    description:
      "Modern-world interior solutions — custom coated and anodized aluminium for partitions, ceilings, and decorative metal features.",
    href: "/services#interior-design",
    accent: "orange",
  },
  {
    icon: Fuel,
    title: "Wholesale Selling",
    description:
      "Bulk supply of LDO, MTO, MHO, and B100 biodiesel — proud distributors serving factories and logistics across Odisha.",
    href: "/services#wholesale-selling",
    accent: "amber",
  },
  {
    icon: Truck,
    title: "24/7 Shipment",
    description:
      "Dedicated round-the-clock tanker and transport fleet so fuel and industrial deliveries never stop.",
    href: "/services#shipment-logistics",
    accent: "blue",
  },
];

const DIVISIONS = [
  {
    icon: Fuel,
    title: "Petrochemical Product",
    line: "We are proud distributors of LDO, MTO & MHO",
    href: "/biofuel",
  },
  {
    icon: Layers,
    title: "Aluminum",
    line: "We supply aluminium and anodize aluminium to spec",
    href: "/services#aluminium-division",
  },
  {
    icon: Wheat,
    title: "Agro Product",
    line: "We supply agro products at large quantity",
    href: "/agro",
  },
];

const accentRing: Record<string, string> = {
  orange: "bg-orange-50 border-orange-200 text-orange-700 group-hover:bg-orange-100 group-hover:border-orange-300",
  amber: "bg-amber-50 border-amber-200 text-amber-700 group-hover:bg-amber-100 group-hover:border-amber-300",
  blue: "bg-blue-50 border-blue-200 text-blue-700 group-hover:bg-blue-100 group-hover:border-blue-300",
};

export default function OurProductsSection() {
  return (
    <section className="py-24 md:py-32 bg-white border-t border-b border-slate-200/60 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Heading — from metafia.in/service.html */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight font-display tracking-tight">
            We Focused On Modern World And{" "}
            <span className="text-orange-700">Interior Design</span>
          </h2>
          <p className="text-slate-600 font-semibold text-sm md:text-base leading-relaxed">
            Powder coating, anodizing, acid treatment, and interior aluminium work — plus petrochemical
            supply and 24/7 shipment from Berhampur, Odisha.
          </p>
        </motion.div>

        {/* Three main divisions — from metafia.in homepage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DIVISIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group flex flex-col gap-4 p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-orange-200 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-orange-700 group-hover:border-orange-200 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-extrabold text-slate-900 font-display">{item.title}</h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">{item.line}</p>
                  </div>
                  <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-orange-700 mt-auto">
                    Click Here
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Service products — from metafia.in/service.html */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.06 }}
              >
                <Link
                  href={product.href}
                  className="group flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-md transition-all duration-300 h-full"
                >
                  <div
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${accentRing[product.accent]}`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <h3 className="text-sm font-extrabold text-slate-900 font-display">{product.title}</h3>
                    <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-blue-700 pt-1">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Aluminium & wood interior galleries — local images */}
        <InteriorDesignGallery aluminiumLimit={8} woodLimit={8} />
      </div>
    </section>
  );
}
