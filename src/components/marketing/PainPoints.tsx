"use client";

import { motion, Variants } from "framer-motion";
import { LightbulbOff, TrendingDown, Clock, ImageOff, BrainCircuit, ShieldAlert } from "lucide-react";

const painPoints = [
  { title: "Kehabisan Ide Konten", icon: LightbulbOff, description: "Mentok mikirin ide baru tiap hari sampai akhirnya jarang posting." },
  { title: "Engagement & Followers Stagnan", icon: TrendingDown, description: "Followers tidak bertambah, like dan komen sepi meski sudah rutin upload." },
  { title: "Tidak Ada Waktu Urus Sosmed", icon: Clock, description: "Sibuk urus operasional bisnis, sosmed jadi terbengkalai dan tidak terurus." },
  { title: "Desain Feed Berantakan", icon: ImageOff, description: "Visual brand tidak konsisten, terlihat kurang profesional di mata customer." },
  { title: "Pusing Mikirin Algoritma", icon: BrainCircuit, description: "Algoritma terus berubah, konten yang dibuat jarang masuk FYP atau explore." },
  { title: "Takut Tertipu Agency Abal-abal", icon: ShieldAlert, description: "Pernah bayar mahal tapi hasil tidak sesuai ekspektasi atau janji manis." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PainPoints() {
  return (
    <section id="problem" className="py-24 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight"
          >
            Still Struggling with Social Media?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#86868B] mt-4 max-w-2xl mx-auto"
          >
            Menjalankan bisnis sambil mengurus media sosial sendirian itu melelahkan. Kami paham masalah Anda.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="apple-glass-card p-6 flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-3">{item.title}</h3>
                <p className="text-[#86868B] leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
