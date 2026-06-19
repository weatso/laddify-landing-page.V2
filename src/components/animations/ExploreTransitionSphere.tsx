"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ExploreTransitionSphereProps {
  isExiting: boolean;
}

export default function ExploreTransitionSphere({ isExiting }: ExploreTransitionSphereProps) {
  const controls = useAnimation();
  const overlayControls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (isExiting) {
      overlayControls.start({
        opacity: 1,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
      });
      controls
        .start({
          scale: 150,
          x: "0vw",
          y: "0vh",
          opacity: 1,
          transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        })
        .then(() => {
          router.push("/?from=explore");
        });
    } else {
      overlayControls.start({
        opacity: 0,
        transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
      });
      controls.start({
        scale: 0,
        x: "-50vw",
        y: "-50vh",
        opacity: 0,
        transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
      });
    }
  }, [isExiting, controls, overlayControls, router]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ scale: 150, x: "0vw", y: "0vh", opacity: 1 }}
        animate={controls}
        className="w-32 h-32 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-[inset_-12px_-12px_24px_rgba(0,0,0,0.06),inset_4px_4px_12px_rgba(255,255,255,0.8),0_20px_40px_rgba(0,0,0,0.06)] pointer-events-none overflow-hidden relative"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={overlayControls}
          className="absolute inset-0 bg-[#FAFAFC]"
        />
      </motion.div>
    </div>
  );
}
