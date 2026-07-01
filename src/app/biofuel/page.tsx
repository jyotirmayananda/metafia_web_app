"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Leaf, ShieldCheck, Heart, Wind, HardHat, 
  Sprout, Landmark, Factory, CheckCircle2, AlertCircle
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const BENEFITS = [
  {
    icon: Leaf,
    title: "Up to 75% Carbon Cut",
    description: "Substantially reduces lifecycle greenhouse gas emissions. A simple, immediate switch to help meet corporate net-zero targets."
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Engine Lubricity",
    description: "Biodiesel has superior lubricity compared to petroleum diesel, reducing engine wear and extending the lifespan of injection components."
  },
  {
    icon: Heart,
    title: "Sulfur-Free & Non-Toxic",
    description: "Contains virtually no sulfur or aromatics. Biodiesel is biodegradable and far safer to handle, store, and transport."
  },
  {
    icon: Wind,
    title: "Supports Cleaner Air",
    description: "Significantly lowers tailpipe emissions of particulate matter (PM), carbon monoxide (CO), and unburned hydrocarbons."
  }
];

const SEGMENTS = [
  {
    icon: HardHat,
    title: "Construction & Mining",
    description: "Powers heavy earthmovers, dump trucks, and excavators directly without modifications.",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=400&auto=format&fit=crop"
  },
  {
    icon: Sprout,
    title: "Agriculture & Forestry",
    description: "Eco-friendly fuel for tractors, harvesters, and irrigation pumps working in sensitive ecosystems.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=400&auto=format&fit=crop"
  },
  {
    icon: Landmark,
    title: "Government & Municipalities",
    description: "Ideal for city transit buses, waste management fleets, and public utility vehicles.",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=400&auto=format&fit=crop"
  },
  {
    icon: Factory,
    title: "Generators & Industrial Plants",
    description: "Continuous or backup power generation for factories, malls, hospitals, and heavy plants.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop"
  }
];

const GUIDELINES = [
  "Use clean, dry containers made of stainless steel, fluorinated polyethylene, or teflon.",
  "Avoid copper, brass, bronze, zinc, and lead, as they can accelerate fuel oxidation.",
  "Ensure storage tanks are kept cool and free of water accumulation to prevent microbial growth.",
  "B100 exhibits normal diesel cold-flow behavior; ensure heating or blending in sub-zero winter temperatures.",
  "Can be blended with standard low-sulfur petroleum diesel in any ratio (e.g. B20 blends)."
];

export default function Biofuel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    quantity: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.quantity) {
      setSubmitStatus("error");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        quantity: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-slate-50 py-16 md:py-24 text-slate-700 font-sans">
      {/* Background radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100/50 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-slate-200/30 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
        {/* 1. HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none font-display">
              100% Pure B100 <br />
              <span className="text-amber-600 text-highlight">Biodiesel.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-800 font-bold font-display">
              Available Now for Bulk Commercial Distribution.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base max-w-xl font-medium">
              Metafia Industries is a certified bulk distributor of premium B100 biodiesel in Southern Odisha. 
              Formulated to meet strict industrial combustion requirements, our eco-friendly biofuel serves as a 
              direct replacement or blending component for conventional diesel engines, without modifying fuel systems.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("order-form");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 btn-primary font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-all duration-300"
              >
                Inquire Bulk Quote
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 border border-slate-300/10 rounded-2xl pointer-events-none z-20 m-2 animate-pulse" />
            <Image
              src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop"
              alt="Industrial refinery valves"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white border border-slate-200 p-6 rounded-xl flex items-center gap-4 shadow-md">
              <div className="text-center font-display">
                <p className="text-slate-800 font-black text-3xl">75%</p>
                <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">CO2 Cut</p>
              </div>
              <div className="w-[1px] h-10 bg-slate-200" />
              <div className="font-sans">
                <p className="text-slate-900 font-bold text-sm">EN 14214 Standard</p>
                <p className="text-xs text-slate-500 font-medium">Certified pure plant-based formulation</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BENEFITS GRID */}
        <section className="space-y-12">
          <SectionHeading
            title="Engineered Benefits of Metafia B100"
            description="Our biodiesel performs at high thermal efficiency while preserving your logistics and power generation infrastructure."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card p-8 rounded-2xl border border-slate-200 bg-white space-y-4 hover:border-slate-450 hover:-translate-y-1 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <Icon className="w-5 h-5 text-slate-500" />
                  </div>
                  <h3 className="font-extrabold text-slate-950 text-lg font-display">{benefit.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. WHO USES IT SEGMENTS */}
        <section className="space-y-12 bg-white border border-slate-200/80 rounded-3xl p-8 md:p-16 shadow-sm">
          <SectionHeading
            title="Powering Diverse Commercial Fleets"
            description="From industrial plant generation to civil infrastructure, Metafia biofuel delivers stable energy outputs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEGMENTS.map((segment, idx) => {
              const Icon = segment.icon;
              return (
                <div key={idx} className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm h-[320px]">
                  <div className="relative h-[140px] w-full">
                    <div className="absolute inset-0 bg-slate-950/10 z-10" />
                    <Image
                      src={segment.image}
                      alt={segment.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-slate-500 shrink-0" />
                      <h3 className="font-extrabold text-slate-950 text-sm font-display leading-tight">{segment.title}</h3>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">{segment.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. STORAGE & HANDLING */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
              alt="Industrial tanks"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-slate-100/10" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Storage & Fuel Handling Standards
            </h2>
            <p className="text-sm text-slate-500 font-semibold">
              Maintaining B100 quality requires compliance with industrial chemical storage guidelines:
            </p>
            
            <ul className="space-y-3.5">
              {GUIDELINES.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-600 font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. BULK ORDER FORM */}
        <section id="order-form" className="max-w-3xl mx-auto py-8">
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-slate-200 bg-white relative shadow-lg">
            <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-slate-350 to-transparent" />
            
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display">
                Request Bulk Biofuel Pricing
              </h2>
              <p className="text-xs text-slate-500 font-semibold">
                Submit your consumption specifications. Our fuel logistics manager will reply within 4 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-sm px-4 py-3 rounded-lg outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Corporate Email
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-sm px-4 py-3 rounded-lg outline-none transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="form-mobile" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Mobile Number *
                  </label>
                  <input
                    id="form-mobile"
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-sm px-4 py-3 rounded-lg outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="form-quantity" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Quantity Required (Liters/KL) *
                  </label>
                  <input
                    id="form-quantity"
                    type="text"
                    required
                    placeholder="e.g. 5,000 Liters or 10 KL"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-sm px-4 py-3 rounded-lg outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="form-message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Inquiry Details / Fuel Specs
                </label>
                <textarea
                  id="form-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-400 text-slate-800 text-sm px-4 py-3 rounded-lg outline-none transition-colors resize-none"
                  placeholder="Outline your application (generators, shipping trucks, heating plant)..."
                />
              </div>

              {/* Success / Error Alerts */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-3 p-4 bg-slate-100 border border-slate-350 text-slate-700 text-sm rounded-lg">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-slate-500" />
                  <span className="font-bold">Inquiry submitted successfully! A representative will call you shortly.</span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-650 text-sm rounded-lg">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span className="font-bold">Please fill in all required fields marked with * before submitting.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 btn-primary disabled:bg-blue-300 text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? "Processing Request..." : "Submit Quote Inquiry"}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
