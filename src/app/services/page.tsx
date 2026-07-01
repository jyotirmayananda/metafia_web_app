"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import AluminiumShowcase from "@/components/sections/AluminiumShowcase";
import InteriorDesignGallery from "@/components/sections/InteriorDesignGallery";

const SERVICES_DATA = [
  {
    id: "powder-coating",
    badge: "Aluminium Finishing",
    title: "Powder Coating",
    description:
      "Metafia's core aluminium service — electrostatic powder coating for profiles, gates, railings, and architectural panels. We match RAL shades, verify micron thickness, and deliver finishes that stand up to Berhampur's heat and coastal humidity.",
    details: [
      "Full RAL colour range for architectural and industrial applications",
      "Pre-treatment and acid cleaning before every coating batch",
      "Standard 60–80 micron thickness with quality checks on each run",
      "Ideal for façades, windows, industrial frames, and custom fabrications",
    ],
    image: "/images/aluimg/1.jpg",
    linkText: "Get Powder Coating Quote",
    link: "/contact",
    localImage: true,
  },
  {
    id: "anodizing",
    badge: "Metal Passivation",
    title: "Aluminium Anodizing",
    description:
      "We anodize aluminium to build a hard, protective oxide layer that preserves the metal's natural character while resisting corrosion. From natural and bronze tones to black and champagne — consistent results for Odisha projects.",
    details: [
      "Natural, bronze, black, and champagne anodized finishes",
      "10–25 micron film thickness for structural and decorative profiles",
      "Enhanced wear resistance and weather protection",
      "Selling aluminium supply paired with professional anodizing service",
    ],
    image: "/images/aluimg/2.jpg",
    linkText: "Consult Anodizing Team",
    link: "/contact",
    localImage: true,
  },
  {
    id: "acid-treatment",
    badge: "Surface Prep",
    title: "Acid Treatment & Pre-Treatment",
    description:
      "Proper surface preparation is what separates a lasting finish from a failed one. Our acid treatment lines remove oxidation, oils, and contaminants so powder coat and anodize layers bond permanently to the aluminium substrate.",
    details: [
      "Acid etch and degrease cycles before coating or anodizing",
      "Removes mill scale, welding residue, and handling contaminants",
      "Improves adhesion and extends coating lifespan",
      "Integrated into our Berhampur finishing workflow",
    ],
    image: "/images/aluimg/3.jpg",
    linkText: "Ask About Surface Prep",
    link: "/contact",
    localImage: true,
  },
  {
    id: "interior-design",
    badge: "Architectural Metal",
    title: "Interior Design & Metalwork",
    description:
      "Modern world interior design with wood and aluminium — partitions, ceiling features, decorative panels, and custom metal components tailored to your design brief.",
    details: [
      "Wood interior design and finish work",
      "Custom aluminium elements for commercial and residential interiors",
      "Powder coated and anodized finishes to match design palettes",
      "Berhampur-based production with Odisha-wide project support",
    ],
    image: "/images/wd/1001.jpg",
    linkText: "Discuss Your Project",
    link: "/contact",
    localImage: true,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We have been working very closely with Metafia for over 5 years now for supplies of façades for most of our projects, many of them being iconic structures. The resolution of technical complexities in die design, the ability to take on difficult profiles, and maintaining timelines for delivery without compromising on quality are their strengths.",
    author: "Mr. Abani Sahu",
    role: "Facade & Architecture Partner",
    company: "Metafia Client — Odisha",
  },
  {
    quote:
      "Metafia's powder coating on our aluminium gate and railing work was exactly the finish we needed. Colour match was spot-on and the coating has held up through two monsoon seasons in Berhampur.",
    author: "Mr. Rajendra K. Patra",
    role: "VP of Operations",
    company: "Utkal Cement Works Ltd",
  },
  {
    quote:
      "The anodizing on our custom-extruded aluminium sections was flawless. Metafia's team understood our micron specs and delivered a surface that still looks premium against coastal weather.",
    author: "Ar. Sneha Mohanty",
    role: "Principal Architect",
    company: "Mohanty & Associates Infrastructure",
  },
];

export default function Services() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-slate-50 py-16 md:py-24 text-slate-700 font-sans">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-orange-100/40 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-slate-200/40 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-20 md:space-y-28">
        <SectionHeading
          title={
            <>
              We Focused On Modern World And <br />
              <span className="text-orange-700">Interior Design</span>
            </>
          }
          description="Powder coating, anodizing, acid treatment, and interior metalwork — from Metafia, Berhampur."
          centered
        />

        {/* Unique aluminium spotlight — content from metafia.in */}
        <AluminiumShowcase />

        {/* Detailed service breakdowns */}
        <section className="space-y-32 pt-8">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;
            const isMetal =
              service.badge.includes("Aluminium") ||
              service.badge.includes("Metal") ||
              service.badge.includes("Surface") ||
              service.badge.includes("Architectural");

            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-28"
              >
                <div
                  className={`lg:col-span-6 relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-lg group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent z-10" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ${
                      service.localImage ? "object-center" : "opacity-95"
                    }`}
                  />
                </div>

                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 text-xs md:text-sm text-slate-500 font-semibold">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <BadgeCheck
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            isMetal ? "text-orange-500" : "text-blue-500"
                          }`}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      href={service.link}
                      className={`group inline-flex items-center text-xs font-bold uppercase tracking-widest border-b pb-1 transition-all duration-200 ${
                        isMetal
                          ? "text-orange-700 hover:text-orange-900 border-orange-200 hover:border-orange-400"
                          : "text-blue-700 hover:text-blue-900 border-blue-200 hover:border-blue-400"
                      }`}
                    >
                      {service.linkText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Aluminium & wood interior photo gallery */}
        <section className="py-16 border-t border-slate-200">
          <InteriorDesignGallery id="interior-design-gallery" />
        </section>

        {/* Testimonials */}
        <section className="py-16 border-t border-slate-200 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Trusted Across Odisha
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <TestimonialCard
                key={idx}
                quote={t.quote}
                author={t.author}
                role={t.role}
                company={t.company}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
