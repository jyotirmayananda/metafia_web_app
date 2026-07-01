"use client";

import Image from "next/image";

export const ALUMINIUM_IMAGES = [
  "/images/aluimg/1.jpg",
  "/images/aluimg/2.jpg",
  "/images/aluimg/3.jpg",
  "/images/aluimg/4.jpg",
  "/images/aluimg/5.jpg",
  "/images/aluimg/6.jpg",
  "/images/aluimg/12.jpg",
  "/images/aluimg/13.jpg",
  "/images/aluimg/14.jpg",
  "/images/aluimg/15.jpg",
  "/images/aluimg/16.jpg",
  "/images/aluimg/18.jpg",
  "/images/aluimg/19.jpg",
];

export const WOOD_INTERIOR_IMAGES = [
  "/images/wd/1001.jpg",
  "/images/wd/1004.jpg",
  "/images/wd/1006.jpg",
  "/images/wd/1007.jpg",
  "/images/wd/1008.jpg",
  "/images/wd/1009.jpg",
  "/images/wd/1010.jpg",
  "/images/wd/1011.jpg",
  "/images/wd/1012.jpg",
  "/images/wd/1016.jpg",
  "/images/wd/1020.jpg",
  "/images/wd/2001.jpg",
  "/images/wd/2004.jpg",
  "/images/wd/2005.jpg",
  "/images/wd/2008.jpg",
  "/images/wd/2009.jpg",
  "/images/wd/2010.jpg",
  "/images/wd/2016.jpg",
  "/images/wd/2020.jpg",
  "/images/wd/3001.jpg",
  "/images/wd/3004.jpg",
  "/images/wd/3006.jpg",
  "/images/wd/4008.jpg",
  "/images/wd/4009.jpg",
  "/images/wd/4010.jpg",
  "/images/wd/4016.jpg",
  "/images/wd/4020.jpg",
  "/images/wd/5015.jpg",
  "/images/wd/6013.jpg",
  "/images/wd/6016.jpg",
  "/images/wd/6020.jpg",
];

type InteriorDesignGalleryProps = {
  aluminiumLimit?: number;
  woodLimit?: number;
  id?: string;
};

export default function InteriorDesignGallery({
  aluminiumLimit,
  woodLimit,
  id = "interior-design-gallery",
}: InteriorDesignGalleryProps) {
  const aluminium = aluminiumLimit
    ? ALUMINIUM_IMAGES.slice(0, aluminiumLimit)
    : ALUMINIUM_IMAGES;
  const wood = woodLimit ? WOOD_INTERIOR_IMAGES.slice(0, woodLimit) : WOOD_INTERIOR_IMAGES;

  return (
    <section id={id} className="space-y-12 scroll-mt-28">
      {/* Aluminium */}
      <div className="space-y-5">
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Aluminium Finishing
          </h3>
          <p className="text-sm text-slate-500 font-semibold mt-1">
            Powder coating and anodizing work from Metafia
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {aluminium.map((src, idx) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm"
            >
              <Image
                src={src}
                alt={`Metafia aluminium finishing project ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Wood interior design */}
      <div className="space-y-5">
        <div className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
            Wood Interior Design
          </h3>
          <p className="text-sm text-slate-500 font-semibold mt-1">
            Modern interior design — wood and finish work
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {wood.map((src, idx) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-orange-200/60 bg-orange-50/30 shadow-sm"
            >
              <Image
                src={src}
                alt={`Metafia wood interior design ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
