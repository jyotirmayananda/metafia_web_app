"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck, Zap, Wheat, Sparkles } from "lucide-react";
import StatCounter from "@/components/ui/StatCounter";
import HeroAnimatedBackground from "@/components/layout/HeroAnimatedBackground";
import OurProductsSection from "@/components/sections/OurProductsSection";

export default function HomeClient() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const heroGridCards = [
    {
      title: "Aluminium Division",
      badge: "Powder Coating & Anodizing",
      accent: "copper" as const,
      icon: Layers,
      summary: "We specialize in powder coating and anodizing of aluminium — plus acid treatment and interior metalwork from our Berhampur plant.",
      specs: [
        { label: "Powder Coating", value: "RAL Range" },
        { label: "Anodizing", value: "10-25 μ" },
        { label: "Also Offers", value: "Acid Prep" }
      ],
      link: "/services#aluminium-division"
    },
    {
      title: "Agro Division",
      badge: "Sustainable Inputs",
      accent: "amber" as const,
      icon: Wheat,
      summary: "Expanding into agricultural inputs and infrastructure solutions to support Odisha's farming and rural supply chains.",
      specs: [
        { label: "Focus", value: "Agro Supply" },
        { label: "Capacity", value: "Bulk Scale" },
        { label: "Region", value: "Odisha-wide" }
      ],
      link: "/agro"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-transparent font-sans">

      {/* 1. INDUSTRIAL BLUEPRINT HERO SECTION (Unified Typographic Centered Layout) */}
      <section className="relative pt-12 sm:pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
        <HeroAnimatedBackground />
        <div className="relative z-[1] max-w-[1280px] w-full mx-auto px-6 md:px-12 text-center space-y-12">
          
          {/* Header Block */}
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="hero-headline text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.08] font-display">
              Strength in Metal.<br />
              Built on{" "}
              <span className="relative inline-block text-blue-800">
                Precision.
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 w-full h-[5px] rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-amber-500"
                />
              </span>
            </h1>

            <p className="hero-subtext text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-bold">
              Powering manufacture and construction across Odisha with high-durability aluminium powder coating and anodizing.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2 sm:px-0">
            <button
              onClick={() => {
                const el = document.getElementById("blueprint-grid");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 btn-primary font-bold uppercase tracking-wider text-xs rounded-full hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Control Panel Grid
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold uppercase tracking-wider text-xs rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>

          {/* 3-Card Technical Blueprint Grid */}
          <div id="blueprint-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 text-left max-w-3xl mx-auto">
            {heroGridCards.map((card, index) => {
              const Icon = card.icon;
              const isHovered = hoveredCard === index;
              const accentStyles = {
                amber: {
                  hoverBorder: "border-amber-400/60 bg-gradient-to-b from-white to-amber-50/40",
                  badge: "text-amber-600",
                  iconHover: "bg-amber-50 border-amber-300 text-amber-800",
                  arrowHover: "bg-amber-700 border-amber-700",
                  linkHover: "text-amber-800",
                },
                copper: {
                  hoverBorder: "border-orange-400/60 bg-gradient-to-b from-white to-orange-50/40",
                  badge: "text-orange-600",
                  iconHover: "bg-orange-50 border-orange-300 text-orange-800",
                  arrowHover: "bg-orange-700 border-orange-700",
                  linkHover: "text-orange-800",
                },
                blue: {
                  hoverBorder: "border-blue-400/60 bg-gradient-to-b from-white to-blue-50/40",
                  badge: "text-blue-600",
                  iconHover: "bg-blue-50 border-blue-300 text-blue-800",
                  arrowHover: "bg-blue-700 border-blue-700",
                  linkHover: "text-blue-800",
                },
              }[card.accent];

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -6 }}
                  className={`glass-card p-6 md:p-8 rounded-2xl border transition-all duration-500 relative cursor-pointer flex flex-col justify-between h-[420px] bg-white/95 shadow-sm ${
                    isHovered 
                      ? `${accentStyles.hoverBorder} shadow-md` 
                      : "border-slate-200"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Header bar in card */}
                    <div className="flex justify-between items-center">
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest ${accentStyles.badge}`}>
                        {card.badge}
                      </span>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
                        isHovered 
                          ? accentStyles.iconHover
                          : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}>
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Title & summary */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 font-display">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                        {card.summary}
                      </p>
                    </div>

                    {/* Technical metrics */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {card.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex justify-between items-center text-xs">
                          <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                            {spec.label}
                          </span>
                          <span className="font-extrabold text-slate-800 font-display">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow action */}
                  <div className="pt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className={isHovered ? accentStyles.linkHover : "text-slate-400 transition-colors"}>
                      Inquire Specs
                    </span>
                    <Link
                      href={card.link}
                      className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isHovered 
                          ? `${accentStyles.arrowHover} text-white`
                          : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* OUR PRODUCTS — from metafia.in/service.html */}
      <OurProductsSection />

      {/* 2. WHY METAFIA / STATS */}
      <section className="py-24 md:py-32 bg-white border-t border-b border-slate-200/60 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            
            {/* Context Text */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight font-display">
                Engineered for Precision Finishing
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-semibold">
                Operating out of Southern Odisha, Metafia Industries has earned an impeccable track record. 
                Our strict testing parameters ensure that every powder coat and every millimetre of aluminium extrusion meets exact specifications.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-blue-800 border-b-2 border-blue-400 pb-1 hover:text-blue-600 hover:border-blue-500 transition-colors"
                >
                  Our Corporate History
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Stat Counters */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Stat 1 */}
              <div className="glass-card p-8 rounded-2xl relative border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="absolute top-4 right-4 text-slate-200">
                  <Layers className="w-12 h-12 stroke-[1.5]" />
                </div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Anodized Finishes
                </div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mt-4 flex items-baseline font-display">
                  <StatCounter value={10} />
                  <span className="text-slate-500 ml-1">–25 μ</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-semibold">
                  Controlled oxide film thickness for durable architectural and industrial aluminium profiles.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="glass-card p-8 rounded-2xl relative border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="absolute top-4 right-4 text-slate-200">
                  <Sparkles className="w-12 h-12 stroke-[1.5]" />
                </div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Anodized Tones
                </div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mt-4 flex items-baseline font-display">
                  <StatCounter value={4} />
                  <span className="text-slate-500 ml-1">+</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-semibold">
                  Natural, bronze, black, and champagne finishes for architectural aluminium profiles.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="glass-card p-8 rounded-2xl relative border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="absolute top-4 right-4 text-slate-200">
                  <Zap className="w-12 h-12 stroke-[1.5]" />
                </div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Powder Coating Quality
                </div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mt-4 flex items-baseline font-display">
                  <StatCounter value={100} />
                  <span className="text-slate-500 ml-1">%</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-semibold">
                  Strict micron thickness testing guarantees outstanding architectural weather resistance.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="glass-card p-8 rounded-2xl relative border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="absolute top-4 right-4 text-slate-200">
                  <ShieldCheck className="w-12 h-12 stroke-[1.5]" />
                </div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Years of Experience
                </div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 mt-4 flex items-baseline font-display">
                  <StatCounter value={15} />
                  <span className="text-slate-500 ml-1">+</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-semibold">
                  Decades of collective leadership expertise across metalwork, finishing, and resource trading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALLERY OF PRECISION */}
      <section className="py-24 md:py-32 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Gallery of Precision
            </h2>
            <p className="text-sm text-slate-500 font-semibold">
              Explore high-resolution captures across our aluminium coating lines, interior metalwork, and quality labs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=600&auto=format&fit=crop",
                title: "Aluminium Extrusion",
                caption: "Architectural profiles waiting for anodizing treatment"
              },
              {
                url: "/images/aluimg/2.jpg",
                title: "Anodizing Line",
                caption: "Aluminium profiles in controlled oxide finishing"
              },
              {
                url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
                title: "Precision Metalwork",
                caption: "High-grade aluminium tooling and machining"
              },
              {
                url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
                title: "Coating Line Automation",
                caption: "Electrostatic powder spray chamber control"
              },
              {
                url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
                title: "Metallurgical Quality Lab",
                caption: "Micro-thickness testing on coating samples"
              },
              {
                url: "/images/wd/1004.jpg",
                title: "Wood Interior Work",
                caption: "Custom interior panels and decorative finishes"
              }
            ].map((img, idx) => (
              <div key={idx} className="group relative h-[260px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10 opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-sm font-extrabold text-white font-display uppercase tracking-wider">{img.title}</h4>
                  <p className="text-[10px] text-slate-300 font-semibold">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-slate-200/20 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight font-display">
            Ready to Optimize Your Industry Operations?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-semibold">
            Consult with our engineering and finishing experts today.
            Receive tailored pricing for powder coating, anodizing, or custom extrusion work.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 btn-primary font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Contact Our Head Office
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
