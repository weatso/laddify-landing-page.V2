import BentoGridServices from "@/components/marketing/BentoGridServices";
import PainPoints from "@/components/marketing/PainPoints";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import DesignServices from "@/components/marketing/DesignServices";

export default function ServicesPage() {
  return (
    <div className="relative z-10 w-full pb-24">
      <div className="pt-32 pb-12 text-center max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1D1D1F] tracking-tight">Layanan Kami</h1>
        <p className="text-[#86868B] mt-6 text-lg leading-relaxed">
          Dari pembuatan konten organik hingga manajemen iklan, kami menyediakan ekosistem lengkap untuk menumbuhkan bisnis Anda di era digital.
        </p>
      </div>

      <BentoGridServices />
      <DesignServices />
      <PainPoints />

      <div className="text-center mt-16 px-6">
        <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Siap untuk mendominasi pasar Anda?</h3>
        <p className="text-[#86868B] mb-8">Mari diskusikan strategi yang paling tepat untuk brand Anda.</p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-[#1D1D1F] hover:bg-[#7B4DFF] text-white px-8 py-6 text-base font-semibold transition-colors"
        >
          Mulai Konsultasi Gratis
        </Link>
      </div>
    </div>
  );
}
