"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { QrCode } from "lucide-react";

export default function ClosingHook() {
  return (
    <section className="py-32 relative z-10 w-full overflow-hidden bg-[#FAFAFC] flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12 relative flex flex-col items-center text-center">
        
        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
        >
          You're exactly where{" "}
          <span className="bg-gradient-to-r from-[#FF73C3] to-[#20D6FF] bg-clip-text text-transparent">
            you need to be.
          </span>
        </motion.h2>

        {/* Buttons and QR Card Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          {/* Action Button */}
          <Button 
            size="lg" 
            className="rounded-full bg-gradient-to-r from-[#20D6FF] to-[#FF73C3] text-white font-medium hover:opacity-90 shadow-xl shadow-[#FF73C3]/20 px-8 py-6 text-lg"
          >
            Get Free Consultation
          </Button>

          {/* Portfolio Link Button */}
          <a
            href="https://drive.google.com/drive/folders/1TSABRDfGU6KrRbPEW3XKacTyqjJd8EAc?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-white border border-gray-200 text-gray-800 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all px-8 py-5 text-lg shadow-sm"
          >
            View Our Portfolio
          </a>

        </motion.div>
      </div>
    </section>
  );
}
