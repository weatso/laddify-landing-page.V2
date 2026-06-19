"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const sphereBaseClass =
  "rounded-full bg-gradient-to-br from-white to-gray-200 shadow-[inset_-12px_-12px_24px_rgba(0,0,0,0.06),inset_4px_4px_12px_rgba(255,255,255,0.8),0_20px_40px_rgba(0,0,0,0.06)] pointer-events-none";
const sphereClass = `${sphereBaseClass} absolute`;

export default function GlobalSpheresWrapper() {
  const pathname = usePathname();

  // Hide on Home and Explore because they have their own custom sphere choreography.
  if (pathname === "/" || pathname === "/explore") {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <div className={`${sphereClass} w-24 h-24 md:w-40 md:h-40 top-[15%] left-[10%] opacity-40 blur-[1px]`} />
        <div className={`${sphereClass} w-32 h-32 md:w-56 md:h-56 bottom-[20%] right-[5%] opacity-40 blur-[1px]`} />
      </motion.div>
    </div>
  );
}
