import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ConditionalAnimatedBackground from "@/components/layout/ConditionalAnimatedBackground";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Metafia Industries | Powering Industry. Shaping Metal. Aluminium Solutions",
  description: "Metafia Industries Pvt Ltd is a diversified industrial leader based in Odisha, India, specializing in precision aluminium powder coating, anodizing, interior metalwork, and agro products.",
  metadataBase: new URL("https://metafiaindustries.com"),
  keywords: [
    "Aluminium Powder Coating",
    "Aluminium Anodizing",
    "Odisha",
    "Berhampur",
    "Metalwork",
    "Agro products",
    "Metafia Industries",
    "Architectural coating",
    "Acid pre-treatment",
    "Interior design",
    "Ganjam",
  ],
  authors: [{ name: "Metafia Industries", url: "https://metafiaindustries.com" }],
  creator: "Metafia Industries",
  publisher: "Metafia Industries",
  openGraph: {
    title: "Metafia Industries | Aluminium Coating & Interior Design Solutions",
    description: "Architectural aluminium powder coating, anodizing, acid treatment, interior metalwork, and agro products from Berhampur, Odisha.",
    url: "https://metafiaindustries.com",
    siteName: "Metafia Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-aluminium-generated.png",
        width: 1200,
        height: 630,
        alt: "Metafia Industries | Aluminium Powder Coating & Anodizing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metafia Industries | Aluminium Coating & Interior Design Solutions",
    description: "Architectural aluminium powder coating, anodizing, acid treatment, interior metalwork, and agro products from Berhampur, Odisha.",
    images: ["/images/hero-aluminium-generated.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-slate-200">
        <ConditionalAnimatedBackground />
        <div className="relative z-10 flex flex-col min-h-screen flex-grow">
          <Navbar />
          <main className="flex-grow pt-[72px] md:pt-[84px]">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}

