"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingData = {
  basic: [
    {
      name: "Elite",
      price: "2.400.000",
      features: [
        "10 Feeds Posts",
        "5 Video Reels",
        "Story Hari Raya Greeting",
        "Copywriting + Caption & Hashtag",
        "Posting",
      ],
    },
    {
      name: "Core",
      price: "3.600.000",
      features: [
        "12 Feeds Posts",
        "6 Video Reels",
        "Story Hari Raya Greeting",
        "Copywriting + Caption & Hashtag",
        "Posting",
      ],
    },
    {
      name: "Prime",
      price: "4.800.000",
      features: [
        "16 Feeds Posts",
        "10 Video Reels",
        "Story Hari Raya Greeting",
        "Copywriting + Caption & Hashtag",
        "Posting",
      ],
    },
  ],
  premium: [
    {
      name: "Elite",
      price: "3.600.000",
      features: [
        "3 Feeds Posts",
        "6 Video Reels",
        "Story Hari Raya Greeting",
        "Copywriting + Caption & Hashtag",
        "Posting",
        "Content Performance Reports",
      ],
    },
    {
      name: "Core",
      price: "7.200.000",
      features: [
        "6 Feeds Posts",
        "12 Video Reels",
        "Story Hari Raya Greeting",
        "Copywriting + Caption & Hashtag",
        "Posting",
        "Content Performance Reports",
      ],
    },
    {
      name: "Prime",
      price: "10.800.000",
      features: [
        "12 Feeds Posts",
        "18 Video Reels",
        "Story Hari Raya Greeting",
        "Copywriting + Caption & Hashtag",
        "Posting",
        "Content Performance Reports",
      ],
    },
  ],
};

const termsAndConditions = [
  "Maximum 3x minor revisions for each project.",
  "Content concepts will be developed through discussion with the client or the client's team via online meet.",
  "No minimum contract duration is required.",
  "Full payment must be made in advance prior to the commencement of work.",
  "Note: Any additional editing or revisions beyond the agreed scope will be subject to extra charges, based on a new quotation.",
];

export default function PricingSection() {
  const [isPremium, setIsPremium] = useState(false);

  const activeData = isPremium ? pricingData.premium : pricingData.basic;

  return (
    <section id="pricing" className="py-24 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#86868B] text-lg"
          >
            Pilih paket yang paling sesuai dengan ukuran bisnis Anda.
          </motion.p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center mt-10">
            <div className="relative flex items-center p-1 bg-gray-100/80 backdrop-blur-md rounded-full border border-gray-200 shadow-inner">
              <button
                onClick={() => setIsPremium(false)}
                className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors z-10 ${
                  !isPremium ? "text-[#1D1D1F]" : "text-[#86868B] hover:text-[#1D1D1F]"
                }`}
              >
                {!isPremium && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-gray-200/50"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-20">Basic Packages</span>
              </button>
              <button
                onClick={() => setIsPremium(true)}
                className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors z-10 ${
                  isPremium ? "text-[#1D1D1F]" : "text-[#86868B] hover:text-[#1D1D1F]"
                }`}
              >
                {isPremium && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] border border-gray-200/50"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-20">Premium Packages</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isPremium ? "premium" : "basic"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
          >
            {activeData.map((pkg, index) => {
              const isDecoy = index === 2; // Prime (last) is the highlighted decoy

              return (
                <div
                  key={pkg.name}
                  className={`apple-glass-card flex flex-col p-6 md:p-8 relative ${
                    isDecoy ? "lg:-mt-4 lg:mb-4 border-2 border-[#7B4DFF]/20" : ""
                  }`}
                >
                  {isDecoy && (
                    <>
                      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-b from-[#FF73C3] via-[#7B4DFF] to-[#20D6FF] -z-10" />
                      <div className="absolute inset-[2px] rounded-[14px] bg-white/95 backdrop-blur-xl -z-10" />
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF73C3] to-[#7B4DFF] text-white text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
                        Most Popular
                      </div>
                    </>
                  )}

                  <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">{pkg.name}</h3>
                  <div className="mb-6 flex flex-wrap items-baseline gap-1">
                    <span className="text-sm font-medium text-[#86868B]">IDR</span>
                    <span className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#1D1D1F] tracking-tight">{pkg.price}</span>
                    <span className="text-sm text-[#86868B]">/ Month</span>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#7B4DFF] shrink-0 mt-0.5" />
                        <span className="text-[#1D1D1F]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={isDecoy ? "default" : "outline"}
                    className={`w-full rounded-full py-6 text-base font-semibold ${
                      isDecoy
                        ? "bg-[#1D1D1F] hover:bg-[#7B4DFF] text-white border-0"
                        : "border-gray-200 text-[#1D1D1F] hover:bg-gray-50"
                    } transition-colors`}
                  >
                    Get Started
                  </Button>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Terms & Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 apple-glass-card p-8 md:p-10"
        >
          <h3 className="text-lg font-semibold text-[#1D1D1F] mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF73C3] to-[#7B4DFF] inline-block" />
            Terms &amp; Conditions
          </h3>
          <ul className="space-y-3">
            {termsAndConditions.map((term, i) => (
              <li key={i} className="flex items-start gap-3 text-[#86868B] leading-relaxed">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#86868B]/50" />
                {term}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
