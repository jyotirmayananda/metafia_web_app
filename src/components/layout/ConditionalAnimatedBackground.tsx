"use client";

import { usePathname } from "next/navigation";
import AnimatedBackground from "./AnimatedBackground";

export default function ConditionalAnimatedBackground() {
  const pathname = usePathname();

  // Home page uses its own hero-specific animation — skip the global one
  if (pathname === "/") return null;

  return <AnimatedBackground />;
}
