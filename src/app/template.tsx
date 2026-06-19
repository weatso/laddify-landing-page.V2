"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Halaman Home (/) dan Explore (/explore) sudah memiliki logika transisi bola 3D khusus.
  // Kita bypass animasi generic ini untuk rute tersebut agar tidak bertabrakan dengan koreografi bola.
  if (pathname === "/" || pathname === "/explore") {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
