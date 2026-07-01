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
  title: "Metafia Industries | Powering Industry. Shaping Metal. Biofuels & Aluminium Solutions",
  description: "Metafia Industries Pvt Ltd is a diversified industrial leader based in Odisha, India, specializing in petrochemicals, B100 biofuel distribution, and precision aluminium anodizing and extrusion solutions.",
  metadataBase: new URL("https://metafiaindustries.com"),
  openGraph: {
    title: "Metafia Industries | Petrochemicals, Biofuels & Aluminium Solutions",
    description: "Eco-friendly B100 biofuel, premium petrochemical distribution, and architectural aluminium coating and extrusions.",
    url: "https://metafiaindustries.com",
    siteName: "Metafia Industries",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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

