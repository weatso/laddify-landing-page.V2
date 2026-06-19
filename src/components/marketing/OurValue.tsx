"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, FileSearch, MessageSquareHeart, BarChart3 } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Consistent Identity",
    description:
      "Ensure consistency in your brand's visual identity and messaging across all platforms.",
    gradient: "from-[#FF73C3]/10 to-transparent",
    iconColor: "text-[#FF73C3]",
  },
  {
    icon: FileSearch,
    title: "Research-Driven Content",
    description:
      "Provide well-crafted content based on in-depth research tailored to your market.",
    gradient: "from-[#7B4DFF]/10 to-transparent",
    iconColor: "text-[#7B4DFF]",
  },
  {
    icon: MessageSquareHeart,
    title: "Brand-Aligned Tone",
    description:
      "Adapt the tone of communication to align perfectly with your brand's personality and audience.",
    gradient: "from-[#20D6FF]/10 to-transparent",
    iconColor: "text-[#20D6FF]",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description:
      "Focus on delivering measurable results to help your brand grow and stay ahead of the competition.",
    gradient: "from-[#7B4DFF]/10 via-[#20D6FF]/5 to-transparent",
    iconColor: "text-[#7B4DFF]",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurValue() {
  return (
    <section className="py-24 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-4"
          >
            Our Value
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#86868B] text-lg max-w-xl mx-auto"
          >
            The principles that guide every campaign we create and every brand we grow.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="apple-glass-card p-8 flex flex-col gap-5 relative overflow-hidden"
              >
                {/* Background gradient blob */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} pointer-events-none`}
                />
                <div className={`relative z-10 w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm border border-gray-100`}>
                  <Icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2">{value.title}</h3>
                  <p className="text-[#86868B] leading-relaxed text-sm">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
