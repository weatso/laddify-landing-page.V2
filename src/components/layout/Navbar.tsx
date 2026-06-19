"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image 
              src="/Logo.webp" 
              alt="Laddify Logo" 
              width={160} 
              height={48} 
              priority 
              className="w-[100px] md:w-[140px] h-auto object-contain transition-all" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1D1D1F]">
            <Link href="/services" className="hover:text-[#7B4DFF] transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-[#7B4DFF] transition-colors">
              Portfolio
            </Link>
            <Link href="/pricing" className="hover:text-[#7B4DFF] transition-colors">
              Pricing
            </Link>
            <Link href="/faq" className="hover:text-[#7B4DFF] transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="rounded-full bg-[#1D1D1F] hover:bg-[#7B4DFF] text-white transition-colors">
              Get Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#1D1D1F] z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8 text-2xl font-semibold text-[#1D1D1F]">
              <Link href="/services" onClick={closeMenu} className="hover:text-[#7B4DFF] transition-colors">
                Services
              </Link>
              <Link href="/portfolio" onClick={closeMenu} className="hover:text-[#7B4DFF] transition-colors">
                Portfolio
              </Link>
              <Link href="/pricing" onClick={closeMenu} className="hover:text-[#7B4DFF] transition-colors">
                Pricing
              </Link>
              <Link href="/faq" onClick={closeMenu} className="hover:text-[#7B4DFF] transition-colors">
                FAQ
              </Link>
              
              <div className="mt-8">
                <Button onClick={closeMenu} size="lg" className="rounded-full bg-[#1D1D1F] hover:bg-[#7B4DFF] text-white transition-colors px-8 py-6 text-lg">
                  Get Free Consultation
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
