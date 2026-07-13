import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Inquiry & Sales Quotes | Metafia Industries",
  description: "Get in touch with Metafia Industries Pvt Ltd. Reach our head office in Berhampur, Odisha for custom powder coating, chemical anodizing, or structural metalwork quotes.",
  alternates: {
    canonical: "https://metafiaindustries.com/contact",
  },
  keywords: [
    "Contact Metafia Industries",
    "Get quote powder coating",
    "Aluminium finishing price Odisha",
    "Metafia phone number Ganjam",
    "Metafia email address market",
  ],
  openGraph: {
    title: "Contact Us | Inquiry & Sales Quotes | Metafia Industries",
    description: "Get in touch with Metafia Industries Pvt Ltd. Reach our head office in Berhampur, Odisha for custom powder coating, chemical anodizing, or structural metalwork quotes.",
    url: "https://metafiaindustries.com/contact",
    type: "website",
    images: [
      {
        url: "/images/hero-metallic-bg.png",
        width: 1200,
        height: 630,
        alt: "Contact Metafia Industries Ganjam Odisha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Inquiry & Sales Quotes | Metafia Industries",
    description: "Get in touch with Metafia Industries Pvt Ltd. Reach our head office in Berhampur, Odisha for custom powder coating, chemical anodizing, or structural metalwork quotes.",
    images: ["/images/hero-metallic-bg.png"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
