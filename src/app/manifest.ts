import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Metafia Industries",
    short_name: "Metafia",
    description: "Metafia Industries Pvt Ltd is Odisha's premier provider of precision aluminium powder coating, chemical anodizing, and metal-wood interior design.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#1e3a8a",
    icons: [
      {
        src: "/icon.png",
        sizes: "100x80",
        type: "image/png",
      },
    ],
  };
}
