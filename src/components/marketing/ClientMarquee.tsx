"use client";

import { motion } from "framer-motion";
import { Coffee, ShoppingBag, Camera, Music, Briefcase, Pizza, Cpu, Smartphone } from "lucide-react";

const brands = [
  { name: "Daily Brew", icon: Coffee },
  { name: "Urban Outfit", icon: ShoppingBag },
  { name: "Lens Arts", icon: Camera },
  { name: "Sound Wave", icon: Music },
  { name: "Next Agency", icon: Briefcase },
  { name: "Pizza Hub", icon: Pizza },
  { name: "Tech Core", icon: Cpu },
  { name: "App Studio", icon: Smartphone },
];

export default function ClientMarquee() {
  return (
    <section className="py-16 md:py-24 overflow-hidden border-b border-gray-200/50 bg-transparent relative z-10">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold tracking-wider text-[#86868B] uppercase">
          Trusted by 50+ Growing Brands
        </p>
      </div>

      <div className="relative flex w-full group overflow-hidden">
        {/* We use -50% to scroll exactly half of the double-sized container */}
        <motion.div
          className="flex flex-none items-center gap-16 pr-16 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          animate={{ x: "-50%" }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...brands, ...brands].map((brand, index) => {
            const Icon = brand.icon;
            return (
              <div key={index} className="flex items-center gap-3 font-semibold text-xl text-[#1D1D1F]">
                <Icon className="w-8 h-8 text-[#7B4DFF]" />
                {brand.name}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
