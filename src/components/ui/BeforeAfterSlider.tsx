"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterProps) {
  const [sliderWidth, setSliderWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setSliderWidth(width);
      x.set(width / 2); // Start handle at 50%
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        setSliderWidth(newWidth);
        // Maintain relative position during resize
        const prevRatio = x.get() / (sliderWidth || 1);
        x.set(newWidth * prevRatio);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [x, sliderWidth]);

  // If the 'After' image is on top, we want it to show on the LEFT side of the slider.
  // Inset format: inset(0% right% 0% 0%).
  // If x is 50%, right should be 50%.
  // If x is 0%, right is 100% (fully hidden).
  // If x is 100%, right is 0% (fully visible).
  const clipPercentage = useTransform(x, [0, sliderWidth || 1], [100, 0]);
  const clipPath = useTransform(clipPercentage, (val) => `inset(0 ${val}% 0 0)`);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full aspect-[4/5] sm:aspect-square overflow-hidden apple-glass-card group select-none touch-none"
    >
      {/* Before Image (Base, fully visible underneath) */}
      <img
        src={beforeImage}
        alt={`${alt} Before`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale opacity-80"
        draggable={false}
      />
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest z-10 pointer-events-none">
        Before
      </div>

      {/* After Image (Clipped from the right side) */}
      <motion.div 
        style={{ clipPath }}
        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
      >
        <img
          src={afterImage}
          alt={`${alt} After`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
      </motion.div>
      <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FF73C3] to-[#7B4DFF] shadow-lg text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest z-20 pointer-events-none">
        After
      </div>

      {/* Draggable Handle */}
      {sliderWidth > 0 && (
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: sliderWidth }}
          dragElastic={0}
          dragMomentum={false}
          style={{ x }}
          className="absolute top-0 bottom-0 left-0 z-30 w-1 bg-white cursor-ew-resize hover:bg-[#20D6FF] transition-colors flex items-center justify-center"
        >
          <div className="w-10 h-10 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center border border-gray-100 absolute -left-[18px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D1D1F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 21 12 15 6"></polyline>
              <polyline points="9 18 3 12 9 6"></polyline>
            </svg>
          </div>
        </motion.div>
      )}
    </div>
  );
}
