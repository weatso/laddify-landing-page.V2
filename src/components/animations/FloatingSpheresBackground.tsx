"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useRouter } from "next/navigation";

const sphereBaseClass =
  "rounded-full bg-gradient-to-br from-white to-gray-200 shadow-[inset_-12px_-12px_24px_rgba(0,0,0,0.06),inset_4px_4px_12px_rgba(255,255,255,0.8),0_20px_40px_rgba(0,0,0,0.06)] pointer-events-none";

const sphereClass = `${sphereBaseClass} absolute`;

export default function FloatingSpheresBackground({ isReversing = false }: { isReversing?: boolean }) {
  const router = useRouter();
  const [isRouting, setIsRouting] = useState(isReversing);

  const virtualScroll = useMotionValue(isReversing ? 1000 : 0);

  const smoothScroll = useSpring(virtualScroll, {
    damping: 30,
    stiffness: 100,
    mass: 1
  });

  useEffect(() => {
    router.prefetch("/explore");
  }, [router]);

  useEffect(() => {
    if (isReversing) {
      const timer1 = setTimeout(() => {
        virtualScroll.set(0);
        window.history.replaceState(null, '', '/');

        const timer2 = setTimeout(() => {
          setIsRouting(false);
        }, 2000);
        return () => clearTimeout(timer2);
      }, 100);
      return () => clearTimeout(timer1);
    }
  }, [isReversing, virtualScroll]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isRouting) return;
      const current = virtualScroll.get();
      const next = Math.max(0, Math.min(1000, current + e.deltaY * 0.5));
      virtualScroll.set(next);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isRouting) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;

      const current = virtualScroll.get();
      const next = Math.max(0, Math.min(1000, current + deltaY * 1.5));
      virtualScroll.set(next);
      e.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isRouting, virtualScroll]);

  useMotionValueEvent(smoothScroll, "change", (latest) => {
    if (latest >= 950 && !isRouting) {
      setIsRouting(true);
      router.push("/explore");
    }
  });

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    setIsSmallScreen(window.innerWidth <= 1300);
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 1300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const orbitRadius = useTransform(smoothScroll, (v) => {
    // Only for mobile S to laptop 1300px: push the sphere far away (450px - another 30% closer)
    // For larger screens (>1300px): keep normal orbit (35vw)
    const startRadius = isSmallScreen ? 450 : (typeof window !== 'undefined' ? window.innerWidth * 0.35 : 500);
    const progress = Math.max(0, Math.min(1, v / 800));
    return startRadius * (1 - progress);
  });
  
  const scale = useTransform(smoothScroll, [0, 800, 1000], [1, 20, 150]);
  const opacity = useTransform(smoothScroll, [0, 1000], [1, 1]);
  const solidOpacity = useTransform(smoothScroll, [700, 1000], [0, 1]);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <div className={`${sphereClass} w-24 h-24 md:w-36 md:h-36 top-[10%] left-[20%]`} />
          <div className={`${sphereClass} w-32 h-32 md:w-48 md:h-48 top-[60%] right-[10%]`} />
          <div className={`${sphereClass} w-16 h-16 md:w-24 md:h-24 bottom-[10%] left-[40%]`} />
        </motion.div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden flex items-center justify-center">
        <motion.div className="flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center"
          >
            <motion.div
              style={{ x: orbitRadius, scale, opacity }}
              className={`${sphereBaseClass} w-32 h-32 overflow-hidden relative`}
            >
              <motion.div
                style={{ opacity: solidOpacity }}
                className="absolute inset-0 bg-[#FAFAFC]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
