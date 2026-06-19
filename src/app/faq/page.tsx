import FAQSection from "@/components/marketing/FAQSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  return (
    <div className="relative z-10 w-full pb-24 pt-16">
      <FAQSection />

      <div className="text-center mt-8 px-6">
        <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4">Masih punya pertanyaan?</h3>
        <p className="text-[#86868B] mb-8">Tim kami siap membantu Anda kapan saja untuk menemukan solusi terbaik.</p>
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-8 py-6 text-base font-semibold transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          Masih punya pertanyaan? Hubungi via WhatsApp
        </Link>
      </div>
    </div>
  );
}
