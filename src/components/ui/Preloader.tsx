"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [phase, setPhase] = useState("INITIALIZING ENVIRONMENT");

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 800);
          return 100;
        }

        if (prev === 20) setPhase("LOADING 3D ASSETS");
        if (prev === 45) setPhase("OPTIMIZING GLASSMORPHISM");
        if (prev === 70) setPhase("RENDERING TYPOGRAPHY");
        if (prev === 90) setPhase("READY TO SCALE");

        return prev + 1;
      });
    }, 25);

    document.body.style.overflow = "hidden";
    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  let displayWord = "SCALE IT";
  if (counter >= 50) displayWord = "LADDIFY IT";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#FAFAFC] overflow-hidden text-gray-900 p-8 md:p-12"
        >

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-[#FF73C3]/40 via-[#7B4DFF]/30 to-[#20D6FF]/40 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
          />


          <div className="relative z-10 flex justify-between items-start w-full font-sans text-xs tracking-[0.2em] text-gray-400 uppercase">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Laddify © 2026
            </motion.span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              Premium Creative Agency
            </motion.span>
          </div>


          <div className="relative z-10 flex flex-col items-center justify-center w-full flex-grow gap-2 md:gap-4">

            {/* Logo dipindahkan ke dalam teks */}
            <motion.div
              key={displayWord} // Force re-render animation when text changes
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-4 md:mt-8 flex items-center justify-center"
            >
              {displayWord === "LADDIFY IT" ? (
                <div className="flex items-center justify-center gap-4 md:gap-8">
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

                  <motion.div
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    className="font-bold text-center uppercase tracking-[0.05em] text-[50px] sm:text-[70px] md:text-[100px] lg:text-[140px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-900 drop-shadow-sm pb-2"
                  >
                    IT
                  </motion.div>
                </div>
              ) : (
                <h1 className="font-bold text-center uppercase tracking-[0.05em] text-[50px] sm:text-[70px] md:text-[100px] lg:text-[140px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-900 drop-shadow-sm pb-2">
                  {displayWord}
                </h1>
              )}
            </motion.div>
          </div>


          <div className="relative z-10 w-full flex flex-col gap-4">
            <div className="flex justify-between items-end font-sans text-[10px] md:text-xs tracking-widest uppercase">
              <motion.span
                key={phase}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-500 font-semibold"
              >
                {phase}
              </motion.span>
              <span className="text-gray-900 font-bold">{counter}%</span>
            </div>

            <div className="w-full h-[2px] bg-gray-200/50 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF73C3] via-[#7B4DFF] to-[#20D6FF]"
                initial={{ width: "0%" }}
                animate={{ width: `${counter}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
