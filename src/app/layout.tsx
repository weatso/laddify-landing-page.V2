import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/marketing/FloatingWhatsApp";
import Preloader from "@/components/ui/Preloader";
import GlobalSpheresWrapper from "@/components/animations/GlobalSpheresWrapper";

const codecBold = localFont({
  src: [
    { path: "../../public/fonts/Codec-Cold-Bold-trial.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-codec-bold",
  display: "swap",
});

const codecPro = localFont({
  src: [
    { path: "../../public/fonts/codec-pro.regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-codec-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LADDIFY | Scale It, Laddify It.",
  description: "Scale Your Brand, Laddify It. Digital agency untuk UMKM, F&B, dan Retail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${codecBold.variable} ${codecPro.variable}`}>
      <body className="antialiased font-sans min-h-screen selection:bg-[#7B4DFF] selection:text-white">
        <Preloader />
        <div className="noise-overlay"></div>
        <GlobalSpheresWrapper />
        <LenisProvider>
          <Navbar />
          <main className="relative z-10 flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </LenisProvider>
      </body>
    </html>
  );
}
