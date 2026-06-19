import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import Link from "next/link";
const dummyPortfolio = [
  {
    id: 1,
    title: "The Urban Cafe",
    description: "Rebranding feed Instagram untuk kafe lokal, mengubah tone kusam menjadi estetik, meningkatkan engagement harian sebesar 210%.",
    beforeImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80",
  },
  {
    id: 2,
    title: "Glow & Co. Beauty",
    description: "Merombak total identitas visual produk skincare agar lebih premium, berujung pada rekor penjualan bulanan.",
    beforeImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
  },
  {
    id: 3,
    title: "Streetwear X",
    description: "Mendesain ulang kampanye fashion streetwear dengan desain carousel agresif dan dominasi visual yang tajam.",
    beforeImage: "https://images.unsplash.com/photo-1523398002811-999aa8bb5811?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1550614000-4b95dd26ccae?w=800&q=80",
  },
  {
    id: 4,
    title: "FitLife Gym",
    description: "Mentransformasi visual gym dari gelap dan kusam menjadi penuh energi, bersih, dan profesional.",
    beforeImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80",
  }
];

export default function PortfolioPage() {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1D1D1F] tracking-tight mb-4 md:mb-6">
          Our Masterpieces
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#86868B] leading-relaxed px-2 md:px-0">
          Lihat bagaimana kami mengubah identitas digital klien kami menjadi mesin pertumbuhan yang tidak bisa diabaikan. Geser garis untuk membandingkan.
        </p>
      </div>

      {/* Before / After Slider Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16 mb-20 md:mb-32">
        {dummyPortfolio.map((item) => (
          <div key={item.id} className="flex flex-col gap-5 md:gap-6">
            <BeforeAfterSlider 
              beforeImage={item.beforeImage} 
              afterImage={item.afterImage} 
              alt={item.title} 
            />
            <div className="px-2 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#1D1D1F] mb-2 md:mb-3">{item.title}</h3>
              <p className="text-[#86868B] text-base md:text-lg leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="flex flex-col items-center justify-center text-center space-y-12 md:space-y-16 pt-12 md:pt-16 border-t border-gray-200/50">
        {/* Portfolio Link Button */}
        <a
          href="https://drive.google.com/drive/folders/1TSABRDfGU6KrRbPEW3XKacTyqjJd8EAc?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-white border border-gray-200 text-gray-800 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all px-6 py-4 md:px-8 md:py-5 text-base md:text-lg shadow-sm w-full sm:w-fit mx-auto"
        >
          View Our Portfolio
        </a>

        {/* Closing Text */}
        <div className="max-w-3xl px-2 md:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-[#1D1D1F] mb-4 md:mb-6">
            You&apos;re exactly where{" "}
            <span className="bg-gradient-to-r from-[#FF73C3] via-[#7B4DFF] to-[#20D6FF] bg-clip-text text-transparent">
              you need to be.
            </span>
          </h2>
          <p className="text-[#86868B] text-lg sm:text-xl md:text-2xl leading-relaxed">
            If you&apos;re ready to scale, we&apos;re ready to make it happen.{" "}
            <span className="text-[#1D1D1F] font-bold block mt-2 md:mt-3">Let&apos;s work with us!</span>
          </p>
        </div>
      </div>
    </div>
  );
}
