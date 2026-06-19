"use client";

import { motion } from "framer-motion";

const designServices = [
  {
    title: "Logo",
    subtext: "Logo Concept",
    rightText: "Start from 500K",
  },
  {
    title: "Visual Branding",
    subtext: "Logo Sys",
  },
  {
    title: "Menu Design",
    subtext: "",
  },
  {
    title: "Mascot Design",
    subtext: "",
  },
  {
    title: "Packaging Design",
    subtext: "",
  },
];

export default function DesignServices() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Creative Design Services
        </h2>
        <p className="text-lg text-[#86868B] max-w-2xl mx-auto">
          Elevate your brand's visual identity with our premium design solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {designServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="apple-glass-card p-8 flex flex-col justify-center min-h-[140px] group hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
          >
            <div className="flex justify-between items-end w-full relative z-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF73C3] via-[#7B4DFF] to-[#20D6FF] bg-clip-text text-transparent mb-2">
                  {service.title}
                </h3>
                {service.subtext && (
                  <p className="text-[#86868B] text-sm md:text-base font-sans font-medium">
                    {service.subtext}
                  </p>
                )}
              </div>
              {service.rightText && (
                <div className="text-right">
                  <span className="text-[#1D1D1F] font-semibold font-sans text-sm md:text-base">
                    {service.rightText}
                  </span>
                </div>
              )}
            </div>
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B4DFF]/0 to-[#20D6FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}

        {/* 6th Box - Custom Request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="apple-glass-card p-8 flex flex-col items-center justify-center min-h-[140px] border-dashed border-2 border-gray-200 hover:border-[#7B4DFF]/30 transition-colors cursor-pointer group"
        >
          <p className="text-[#86868B] group-hover:text-[#1D1D1F] font-semibold transition-colors">
            Custom Request?
          </p>
          <span className="text-sm text-[#86868B]/70 mt-1">Let's talk about your needs</span>
        </motion.div>
      </div>
    </section>
  );
}
