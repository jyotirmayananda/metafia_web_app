"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Compass, Award, Quote, UserRound } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";

export default function AboutClient() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-slate-50 py-16 md:py-24 text-slate-700 font-sans">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-slate-100/50 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-slate-200/30 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
        {/* 1. HERO & STORY SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              level="h1"
              title={
                <>
                  Pioneering Industrial <br />
                  <span className="text-amber-600 text-highlight">Growth & Sustainability.</span>
                </>
              }
            />
            <div className="space-y-4 text-slate-600 leading-relaxed text-base md:text-lg font-medium">
              <p>
                Metafia Industries Pvt Ltd is a diversified industrial conglomerate based in Berhampur, Odisha. 
                Built on a foundation of operational transparency and state-of-the-art infrastructure, we serve 
                as critical pillars for the regional economy.
              </p>
              <p>
                From highly durable aluminium architectural powder coating and anodizing to modern interior
                metalwork, our operations are engineered to perform for Odisha&apos;s builders and fabricators.
              </p>
            </div>
            
            {/* Years experience counter card */}
            <div className="inline-flex items-center gap-4 bg-white border border-slate-200 px-6 py-4 rounded-2xl mt-4 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-slate-900 flex items-baseline font-display">
                <StatCounter value={15} />
                <span className="text-slate-500 font-bold">+</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 leading-tight">
                Years of Collective<br />
                Leadership Experience
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-slate-200 group shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
              alt="Engineers evaluating industrial aluminium components"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1">
              <h3 className="text-sm font-semibold text-white font-display">Odisha Processing Hub</h3>
              <p className="text-xs text-slate-300">Integrated powder coating plant & quality lab</p>
            </div>
          </div>
        </section>

        {/* 2. MISSION & VALUES PULL QUOTE */}
        <section className="text-center py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6 relative"
          >
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-slate-200 pointer-events-none">
              <Quote className="w-24 h-24 stroke-[1]" />
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-800 leading-relaxed tracking-tight relative z-10 font-display">
              &ldquo;To meet customers&apos; needs is our responsibility.&rdquo;
            </h3>
            <div className="w-32 h-[3px] bg-orange-500 mx-auto shadow-[0_1px_6px_rgba(234,88,12,0.35)]" />
            <p className="text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto relative z-10 pt-2">
              Metafia specializes in powder coating and anodizing of aluminium — from Berhampur across Odisha with acid treatment and interior metalwork.
            </p>
          </motion.div>
        </section>

        {/* 3. DIRECTOR SPOTLIGHT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-slate-200/80 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-sm">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full filter blur-[80px]" />
          
          <div className="lg:col-span-5 relative h-[380px] md:h-[450px] rounded-2xl overflow-hidden border border-orange-200/60 shadow-md bg-gradient-to-br from-blue-50 via-white to-orange-50 flex flex-col items-center justify-center p-8">
            <div className="relative flex flex-col items-center gap-5">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-blue-100 to-orange-100 border-4 border-white shadow-[0_8px_30px_rgba(29,78,216,0.12)] flex items-center justify-center">
                <UserRound className="w-20 h-20 md:w-24 md:h-24 text-blue-700" strokeWidth={1.25} aria-hidden />
              </div>
              <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Metafia Industries"
                  width={48}
                  height={48}
                  className="object-contain w-10 h-10 opacity-90"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent pt-16 pb-6 px-6 text-center">
              <h4 className="text-lg font-bold text-white font-display">Mrs. Haraprya Sahu</h4>
              <p className="text-xs text-slate-300 font-bold mt-0.5">Managing Director, Metafia Industries</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-display">
              A Vision Guided by Structural Integrity
            </h2>
            <div className="text-slate-355">
              <Quote className="w-8 h-8 stroke-[2] fill-slate-50" />
            </div>
            <p className="text-slate-700 italic text-base md:text-lg leading-relaxed font-semibold">
              "We believe that true industrial leadership is measured by both performance and stewardship. 
              At Metafia Industries, our investments in precision aluminium machinery and finishing lines
              reflect our focus on quality and finish reliability. We operate not just as a supplier, but as a trusted
              long-term strategic partner for the nation's key infrastructure developers."
            </p>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                HARAPRYA SAHU &bull; MANAGING DIRECTOR
              </p>
            </div>
          </div>
        </section>

        {/* 4. FACILITIES SHOWCASE */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Regional Processing Facilities
            </h2>
            <p className="text-sm text-slate-500 font-semibold">
              Take a visual tour inside our powder spray booths, anodizing lines, and quality check rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                url: "/images/powder-coating.png",
                title: "Powder Coating Station",
                desc: "Electrostatic paint curing area"
              },
              {
                url: "/images/aluimg/2.jpg",
                title: "Anodizing Line",
                desc: "Controlled oxide finishing bay"
              },
              {
                url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
                title: "QC Micrometry",
                desc: "Surface thickness analysis"
              },
              {
                url: "/images/wd/1004.jpg",
                title: "Interior Design Workshop",
                desc: "Wood and metal interior fabrication"
              }
            ].map((facility, idx) => (
              <div key={idx} className="group relative h-[300px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 opacity-70" />
                <Image
                  src={facility.url}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1">
                  <h4 className="text-sm font-extrabold text-white font-display uppercase tracking-wider">{facility.title}</h4>
                  <p className="text-[10px] text-slate-300 font-semibold">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. LEADERSHIP BAND (Minimalist Governance) */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Professional Board of Administration
            </h2>
            <p className="text-sm text-slate-500 font-semibold">
              Guided by a high-caliber board with extensive backgrounds in metallic engineering, project coordination, and trade compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Leadership Board 1 */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200/60 bg-white space-y-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                <Shield className="w-4 h-4 text-slate-500" />
              </div>
              <h3 className="font-extrabold text-slate-950 text-base font-display">Strategic Compliance</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Supervising rigorous quality testing, coating inspections, and state pollution control regulatory compliance.
              </p>
            </div>

            {/* Leadership Board 2 */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200/60 bg-white space-y-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                <Target className="w-4 h-4 text-slate-500" />
              </div>
              <h3 className="font-extrabold text-slate-950 text-base font-display">Client Project Support</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Coordinating technical specs, production schedules, and site-ready finishes for architects and fabricators.
              </p>
            </div>

            {/* Leadership Board 3 */}
            <div className="glass-card p-6 rounded-2xl border border-slate-200/60 bg-white space-y-4 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                <Award className="w-4 h-4 text-slate-500" />
              </div>
              <h3 className="font-extrabold text-slate-950 text-base font-display">Technical Operations</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Directing aluminium anodizing, powder coating lines, quality assurance metrics, and alloy extrusion distributions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
