"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah ada kontrak minimum?",
    answer: "Tidak, Anda bisa berhenti kapan saja tanpa biaya penalti.",
  },
  {
    question: "Berapa kali revisi yang didapatkan?",
    answer: "Maksimal 3x revisi minor untuk setiap konten sebelum jadwal tayang.",
  },
  {
    question: "Apakah posting dilakukan oleh tim LADDIFY?",
    answer: "Ya, kami yang mengurus semuanya dari mulai riset, desain, copywriting, hingga jadwal tayang di akun Anda.",
  },
  {
    question: "Apakah hanya fokus di Instagram?",
    answer: "Tidak, paket kami mencakup TikTok dan platform media sosial lainnya sesuai dengan kesepakatan awal strategi.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 relative z-10 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#86868B]"
          >
            Jawaban untuk pertanyaan umum seputar layanan kami.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200/60 py-2">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#1D1D1F] hover:no-underline hover:text-[#7B4DFF] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#86868B] text-base leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
