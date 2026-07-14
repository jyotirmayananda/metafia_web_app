"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Aluminium Division", href: "/services" },
  { name: "Agro Division", href: "/agro" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/60 py-4 shadow-sm"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo — full horizontal lockup */}
          <Link
            href="/"
            className="relative z-50 flex items-center shrink-0 overflow-visible group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Metafia Industries Logo"
              width={776}
              height={226}
              className="h-12 md:h-14 w-auto max-h-14 object-contain object-left select-none"
              draggable={false}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-tight transition-colors duration-300 py-1 ${
                    scrolled
                      ? "text-slate-600 hover:text-slate-900"
                      : "text-slate-800 hover:text-slate-950"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 shadow-[0_1px_6px_rgba(37,99,235,0.35)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA (Aluminium Style) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full transition-all duration-300 shadow-[0_3px_8px_rgba(29,78,216,0.12)] hover:scale-105 active:scale-95"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-slate-800 hover:text-slate-950 transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto overscroll-y-contain md:px-12"
          >
            {/* Background glow effects */}
            <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-slate-100 rounded-full filter blur-[80px] pointer-events-none" />

            <div className="relative z-10 min-h-full flex flex-col px-6 pt-24 pb-10">
              <nav className="flex flex-col gap-6 font-display">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-3xl font-extrabold tracking-tight transition-colors duration-300 block py-2 ${
                          isActive
                            ? "text-blue-800 text-highlight"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.4 }}
                  className="mt-4 border-t border-slate-100 pt-8"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full inline-block text-center py-4 px-6 text-sm font-bold uppercase tracking-wider text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full transition-all duration-300"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </nav>

              {/* Contact details — in scroll flow, not absolute */}
              <div className="mt-10 pt-6 border-t border-slate-100 text-xs text-slate-500 flex flex-col gap-2">
                <p className="font-bold text-slate-700">Metafia Industries Pvt Ltd</p>
                <p>metafia.mkt@gmail.com | +91 7077669396</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
