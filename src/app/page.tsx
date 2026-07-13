import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Metafia Industries | Aluminium Powder Coating & Anodizing | Odisha",
  description: "Metafia Industries Pvt Ltd is Odisha's premier provider of precision aluminium powder coating, chemical anodizing, surface acid pre-treatment, and metal-wood interior design.",
  alternates: {
    canonical: "https://metafiaindustries.com",
  },
  keywords: [
    "Metafia Industries",
    "Aluminium Powder Coating Berhampur",
    "Aluminium Anodizing Odisha",
    "Metal-wood interior design",
    "Acid pre-treatment Ganjam",
  ],
  openGraph: {
    title: "Metafia Industries | Aluminium Powder Coating & Anodizing | Odisha",
    description: "Metafia Industries Pvt Ltd is Odisha's premier provider of precision aluminium powder coating, chemical anodizing, surface acid pre-treatment, and metal-wood interior design.",
    url: "https://metafiaindustries.com",
    type: "website",
    images: [
      {
        url: "/images/hero-aluminium-generated.png",
        width: 1200,
        height: 630,
        alt: "Metafia Industries | Aluminium Finishing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metafia Industries | Aluminium Powder Coating & Anodizing | Odisha",
    description: "Precision aluminium powder coating, chemical anodizing, surface acid pre-treatment, and metal-wood interior design.",
    images: ["/images/hero-aluminium-generated.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Metafia Industries Pvt Ltd",
    "image": "https://metafiaindustries.com/images/logo.png",
    "@id": "https://metafiaindustries.com/#organization",
    "url": "https://metafiaindustries.com",
    "telephone": "+917077669396",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Berhampur, Ganjam",
      "addressLocality": "Berhampur",
      "addressRegion": "Odisha",
      "postalCode": "760001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.310574,
      "longitude": 84.770933
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:30"
    },
    "sameAs": [
      "https://metafiaindustries.com"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
