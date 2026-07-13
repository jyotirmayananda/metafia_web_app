import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Metafia Industries | Odisha Processing Facilities",
  description: "Discover Metafia Industries' operational transparency, regional processing facilities in Odisha, and precision aluminium anodizing/powder coating capabilities.",
  alternates: {
    canonical: "https://metafiaindustries.com/about",
  },
  keywords: [
    "About Metafia Industries",
    "Mrs. Haraprya Sahu",
    "Managing Director Metafia",
    "Odisha Powder Coating Plant",
    "Anodizing facilities Odisha",
  ],
  openGraph: {
    title: "About Us | Metafia Industries | Odisha Processing Facilities",
    description: "Discover Metafia Industries' operational transparency, regional processing facilities in Odisha, and precision aluminium anodizing/powder coating capabilities.",
    url: "https://metafiaindustries.com/about",
    type: "website",
    images: [
      {
        url: "/images/hero-industrial-bg.png",
        width: 1200,
        height: 630,
        alt: "Metafia Industries | Corporate Processing Facilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Metafia Industries | Odisha Processing Facilities",
    description: "Discover Metafia Industries' operational transparency, regional processing facilities in Odisha, and precision aluminium anodizing/powder coating capabilities.",
    images: ["/images/hero-industrial-bg.png"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
