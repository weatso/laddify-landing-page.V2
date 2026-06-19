"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Video, LayoutTemplate, PenTool, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Instagram & TikTok Management",
    desc: "Fokus penuh pada pembuatan video pendek (Reels/TikTok) yang engaging, menghibur, dan dioptimasi untuk viralitas.",
    gradient: "from-[#FF73C3] to-[#7B4DFF]",
  },
  {
    icon: LayoutTemplate,
    title: "Content Design & Carousel",
    desc: "Visual estetis dan carousel edukatif yang membuat audiens betah berlama-lama di feed Anda.",
    gradient: "from-[#7B4DFF] to-[#20D6FF]",
  },
  {
    icon: PenTool,
    title: "Copywriting & Strategy",
    desc: "Riset mendalam, hashtag terarah, dan caption persuasif yang mengubah viewers menjadi pembeli.",
    gradient: "from-[#20D6FF] to-[#FF73C3]",
  },
];

export default function BentoGridServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 bg-gray-50/50 relative z-10 px-6 border-y border-gray-200/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight"
          >
            Premium Social Media Growth System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#86868B] mt-4 max-w-2xl mx-auto"
          >
            Solusi end-to-end untuk mendominasi algoritma dan membangun audiens loyal.
          </motion.p>
        </div>

        {/* LOGIKA FLEXBOX ACCORDION */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:h-[400px]">
          {services.map((service, index) => {
            const isActive = hoveredIndex === index;
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{ flex: isActive ? 3 : 1 }}
                layout
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="apple-glass-card min-h-[140px] lg:h-[400px] p-6 lg:p-8 overflow-hidden relative flex flex-col justify-start lg:justify-end cursor-pointer group hover:shadow-xl"
              >
                {/* Efek kilau blur berwarna di latar belakang */}
                <div 
                  className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl transition-opacity duration-700 ${isActive ? "opacity-20" : "opacity-0"}`} 
                />

                {/* POSISI IKON (Relative to avoid overlaps) */}
                <div className="relative lg:absolute lg:top-8 lg:left-8 shrink-0 mb-4 lg:mb-0">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center transition-transform duration-500 ${isActive ? "scale-100" : "scale-90"}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                </div>

                {/* WADAH TEKS */}
                <motion.div layout className="flex flex-col w-full relative z-10">
                  <motion.h3 layout className="text-xl lg:text-2xl font-bold text-[#1D1D1F] leading-tight mb-2 break-words">
                    {service.title}
                  </motion.h3>
                  
                  {/* DESKRIPSI (Animasi tinggi ke 0) */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isActive ? "auto" : 0, 
                      opacity: isActive ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#86868B] text-base lg:text-lg leading-relaxed pt-2">
                      {service.desc}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Kotak Analytics di baris bawah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="apple-glass-card p-6 md:p-8 mt-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
        >
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-[#1D1D1F] to-gray-700 text-white flex items-center justify-center">
            <BarChart3 className="w-8 h-8" />
          </div>
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold text-[#1D1D1F] mb-2">Performance Analytics</h3>
            <p className="text-[#86868B] text-lg max-w-3xl">
              Laporan bulanan komprehensif. Kami melacak setiap metrik pertumbuhan untuk memastikan ROI strategi Anda selalu maksimal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
