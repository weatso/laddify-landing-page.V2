import HeroSection from "@/components/marketing/HeroSection";
import FloatingSpheresBackground from "@/components/animations/FloatingSpheresBackground";

export default async function Home({ searchParams }: { searchParams: Promise<{ from?: string }> }) {
  const params = await searchParams;
  const isReversing = params.from === "explore";

  return (
    <main className="h-screen w-full overflow-hidden relative">
      <FloatingSpheresBackground isReversing={isReversing} />
      <HeroSection />
    </main>
  );
}
