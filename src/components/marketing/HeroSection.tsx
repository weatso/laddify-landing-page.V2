"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] relative overflow-hidden flex items-center justify-center text-center pt-28 md:pt-20">
      {/* Orbit Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] pointer-events-none opacity-20">
        <svg
          className="w-full h-full animate-[spin_40s_linear_infinite]"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="30" fill="none" stroke="#1D1D1F" strokeWidth="0.1" strokeDasharray="1 1" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#1D1D1F" strokeWidth="0.05" />
          <circle cx="50" cy="50" r="48" fill="none" stroke="#1D1D1F" strokeWidth="0.1" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Floating Spheres */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.05),0_15px_35px_rgba(0,0,0,0.05)]"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] right-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.05),0_15px_35px_rgba(0,0,0,0.05)]"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[25%] w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.05),0_15px_35px_rgba(0,0,0,0.05)]"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[25%] right-[20%] w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.05),0_15px_35px_rgba(0,0,0,0.05)]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#1D1D1F] mb-6 leading-tight"
        >
          Scale Your Brand,
          <div className="mt-4 md:mt-8 flex items-center justify-center">
            <motion.div 
              layoutId="laddify-core-logo" 
              layout="position"
              style={{ zIndex: 99999 }}
              transition={{ layout: { type: "spring", mass: 2, stiffness: 30, damping: 20, restDelta: 0.001 } }}
              className="flex items-center justify-center"
            >
              <Image 
                src="/Logo.webp" 
                alt="Laddify" 
                width={641} 
                height={100} 
                priority
                className="w-auto h-[45px] sm:h-[65px] md:h-[100px] lg:h-[140px] object-contain drop-shadow-md" 
              />
            </motion.div>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#86868B] max-w-2xl mx-auto mt-4 md:mt-8 mb-10 leading-relaxed"
        >
          We believe every business has the potential to grow bigger and stronger. With Laddify Social Media Management, we help you unlock that potential by improving your brand image, expanding your reach, and optimizing your marketing efforts.{" "}
          <span className="text-[#1D1D1F] font-medium">So your business not only grows, but stands out.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="https://wa.me/6281805877845" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full px-8 py-6 text-base bg-[#1D1D1F] hover:bg-[#7B4DFF] text-white transition-colors">
              Get Free Consultation
            </Button>
          </a>
          <a href="/explore#pricing">
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-gray-300 hover:bg-gray-50 text-[#1D1D1F] transition-colors">
              See Pricing
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
