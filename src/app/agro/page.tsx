import type { Metadata } from "next";
import AgroClient from "./AgroClient";

export const metadata: Metadata = {
  title: "Agro Division | Sustainable Agricultural Infrastructure | Metafia Industries",
  description: "Learn about Metafia Industries' upcoming Agro Division, establishing sustainable farm-to-trade raw material resources and crop nutrition solutions in Odisha.",
  alternates: {
    canonical: "https://metafiaindustries.com/agro",
  },
  keywords: [
    "Metafia Agro Division",
    "Sustainable farming inputs Odisha",
    "Organic soil enhancers Ganjam",
    "Crop protection supplies Metafia",
    "Agricultural trade pipelines",
  ],
  openGraph: {
    title: "Agro Division | Sustainable Agricultural Infrastructure | Metafia Industries",
    description: "Learn about Metafia Industries' upcoming Agro Division, establishing sustainable farm-to-trade raw material resources and crop nutrition solutions in Odisha.",
    url: "https://metafiaindustries.com/agro",
    type: "website",
    images: [
      {
        url: "/images/hero-industrial-bg.png",
        width: 1200,
        height: 630,
        alt: "Metafia Industries Agro Division Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agro Division | Sustainable Agricultural Infrastructure | Metafia Industries",
    description: "Learn about Metafia Industries' upcoming Agro Division, establishing sustainable farm-to-trade raw material resources and crop nutrition solutions in Odisha.",
    images: ["/images/hero-industrial-bg.png"],
  },
};

export default function AgroPage() {
  return <AgroClient />;
}
