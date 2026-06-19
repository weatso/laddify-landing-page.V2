"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="relative z-10 w-full bg-[#FAFAFC] border-t border-gray-200/50">
      <div className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="inline-block">
            <Image 
              src="/Logo.webp" 
              alt="Laddify Logo" 
              width={100} 
              height={32}
              className="w-auto h-7 md:h-8 object-contain"
            />
          </Link>
          <span className="text-lg text-gray-500 font-medium tracking-wide">
            Scale It.
          </span>
        </div>

        {/* Right: Copyright */}
        <p className="text-sm text-gray-500 font-medium text-center md:text-right">
          © {new Date().getFullYear()} Laddify. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
