import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Aluminium Powder Coating & Anodizing Services | Metafia Industries",
  description: "Explore Metafia Industries' professional services: 60-80 micron RAL powder coating, 10-25 micron aluminium anodizing, surface acid pre-treatment, and custom wood-metal interior designs.",
  alternates: {
    canonical: "https://metafiaindustries.com/services",
  },
  keywords: [
    "Aluminium Powder Coating Berhampur",
    "Aluminium Anodizing Odisha",
    "Acid Pre-treatment aluminium",
    "RAL colour powder coating",
    "Interior design wood metal Odisha",
  ],
  openGraph: {
    title: "Aluminium Powder Coating & Anodizing Services | Metafia Industries",
    description: "Explore Metafia Industries' professional services: 60-80 micron RAL powder coating, 10-25 micron aluminium anodizing, surface acid pre-treatment, and custom wood-metal interior designs.",
    url: "https://metafiaindustries.com/services",
    type: "website",
    images: [
      {
        url: "/images/aluimg/2.jpg",
        width: 1200,
        height: 630,
        alt: "Metafia Industries | Aluminium Anodizing Finishing Bay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminium Powder Coating & Anodizing Services | Metafia Industries",
    description: "Explore Metafia Industries' professional services: 60-80 micron RAL powder coating, 10-25 micron aluminium anodizing, surface acid pre-treatment, and custom wood-metal interior designs.",
    images: ["/images/aluimg/2.jpg"],
  },
};

export default function ServicesPage() {
  const jsonLdList = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Aluminium Powder Coating",
      "description": "Electrostatic powder coating matching RAL colors for profiles, gates, windows, and panels. Thickness range 60-80 microns.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Metafia Industries Pvt Ltd",
        "url": "https://metafiaindustries.com"
      },
      "areaServed": "Odisha, India"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Aluminium Anodizing",
      "description": "Controlled chemical anodizing forming durable oxide layers in natural, bronze, champagne, and black. Thickness range 10-25 microns.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Metafia Industries Pvt Ltd",
        "url": "https://metafiaindustries.com"
      },
      "areaServed": "Odisha, India"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Acid Treatment & Pre-Treatment",
      "description": "Surface pre-treatment including acid etch and degrease cycles to remove scale and residue for permanent coating adhesion.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Metafia Industries Pvt Ltd",
        "url": "https://metafiaindustries.com"
      },
      "areaServed": "Odisha, India"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Interior Design & Metalwork",
      "description": "Wood and metal architectural interior partitions, ceiling features, and custom architectural panels.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Metafia Industries Pvt Ltd",
        "url": "https://metafiaindustries.com"
      },
      "areaServed": "Odisha, India"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdList) }}
      />
      <ServicesClient />
    </>
  );
}
