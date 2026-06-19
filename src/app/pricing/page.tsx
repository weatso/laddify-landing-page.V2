import PricingSection from "@/components/marketing/PricingSection";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      {/* Import the existing PricingSection */}
      <PricingSection />
      
      {/* WhatsApp CTA Section at the bottom */}
      <div className="max-w-4xl mx-auto mt-10 px-6 text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1D1D1F] mb-6">
          Butuh Kustomisasi Paket atau Konsultasi Lebih Lanjut?
        </h3>
        <Link
          href="https://wa.me/6281805877845"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7B4DFF] to-[#20D6FF] hover:opacity-90 text-white font-bold font-sans px-10 py-5 text-lg transition-all shadow-lg hover:shadow-xl"
        >
          Hubungi Kami via WhatsApp
        </Link>
      </div>
    </main>
  );
}
