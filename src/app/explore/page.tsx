"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import OurValue from "@/components/marketing/OurValue";
import PainPoints from "@/components/marketing/PainPoints";
import BentoGridServices from "@/components/marketing/BentoGridServices";
import PricingSection from "@/components/marketing/PricingSection";
import FAQSection from "@/components/marketing/FAQSection";
import ClosingHook from "@/components/marketing/ClosingHook";
import ExploreTransitionSphere from "@/components/animations/ExploreTransitionSphere";

export default function ExplorePage() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let touchStartY = 0;
    
    const handleWheel = (e: WheelEvent) => {
      if (isExiting || isEntering) return;
      if (window.scrollY === 0 && e.deltaY < 0) {
        e.preventDefault();
        triggerExit();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isExiting || isEntering) return;
      if (window.scrollY === 0) {
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartY - touchY;
        if (deltaY < -10) {
          e.preventDefault();
          triggerExit();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isExiting, isEntering]);

  const triggerExit = () => {
    setIsExiting(true);
  };

  return (
    <>
      <ExploreTransitionSphere isExiting={isExiting} />

      <motion.main
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        className={`relative z-10 ${isEntering ? "h-screen overflow-hidden" : "min-h-screen"} bg-[#FAFAFC]`}
      >
        <OurValue />
        <PainPoints />
        <BentoGridServices />
        <PricingSection />
        <FAQSection />
        <ClosingHook />
      </motion.main>
    </>
  );
}
