import HeroSection from "@/components/marketing/HeroSection";
import OurValue from "@/components/marketing/OurValue";
import PainPoints from "@/components/marketing/PainPoints";
import BentoGridServices from "@/components/marketing/BentoGridServices";
import PricingSection from "@/components/marketing/PricingSection";
import FAQSection from "@/components/marketing/FAQSection";
import ClosingHook from "@/components/marketing/ClosingHook";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen bg-[#FAFAFC]">
      <HeroSection />
      <OurValue />
      <PainPoints />
      <BentoGridServices />
      <PricingSection />
      <FAQSection />
      <ClosingHook />
    </main>
  );
}
