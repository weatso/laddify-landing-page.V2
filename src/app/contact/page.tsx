"use client";

import { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nama: "",
    bisnis: "",
    linkSosmed: "",
    masalah: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const text = `Halo tim LADDIFY, saya ingin klaim Free Audit!\n\n*Nama:* ${formData.nama}\n*Bisnis:* ${formData.bisnis}\n*Link Sosmed:* ${formData.linkSosmed}\n*Masalah Saat Ini:* ${formData.masalah}\n\nMohon bantuannya!`;
    const encodedText = encodeURIComponent(text);
    
    // Replace with actual number provided
    const url = `https://wa.me/6281805877845?text=${encodedText}`;
    
    // Open in new tab
    window.open(url, "_blank");
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Copywriting & Info */}
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1D1D1F] tracking-tight mb-6">
            Let's Scale Your Brand Together.
          </h1>
          <p className="text-lg md:text-xl text-[#86868B] mb-12 leading-relaxed">
            Isi form di samping untuk mendapatkan Gratis Audit Sosial Media dari tim LADDIFY, atau langsung hubungi kami via WhatsApp untuk diskusi cepat.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#1D1D1F]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1">Email</h3>
                <p className="text-[#86868B]">hello@laddify.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#1D1D1F]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1">WhatsApp</h3>
                <p className="text-[#86868B]">+62 818 0587 7845</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#1D1D1F]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1D1D1F] mb-1">Jam Operasional</h3>
                <p className="text-[#86868B]">Senin - Jumat, 09:00 - 17:00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Lead Form */}
        <div className="apple-glass-card p-8 md:p-10 relative">
          {/* Subtle decorative glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7B4DFF]/20 rounded-full blur-[60px] pointer-events-none" />
          
          <h2 className="text-2xl font-bold text-[#1D1D1F] mb-8 relative z-10">Klaim Audit Gratis Anda</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-[#1D1D1F] mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                id="nama"
                value={formData.nama}
                onChange={handleChange}
                required
                placeholder="Cth: Budi Santoso"
                className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 text-[#1D1D1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B4DFF] transition-all"
              />
            </div>

            <div>
              <label htmlFor="bisnis" className="block text-sm font-medium text-[#1D1D1F] mb-2">Nama Bisnis / Brand</label>
              <input 
                type="text" 
                id="bisnis"
                value={formData.bisnis}
                onChange={handleChange}
                required
                placeholder="Cth: Kopi Kenangan"
                className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 text-[#1D1D1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B4DFF] transition-all"
              />
            </div>

            <div>
              <label htmlFor="linkSosmed" className="block text-sm font-medium text-[#1D1D1F] mb-2">Link Instagram / TikTok saat ini</label>
              <input 
                type="url" 
                id="linkSosmed"
                value={formData.linkSosmed}
                onChange={handleChange}
                required
                placeholder="https://instagram.com/..."
                className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 text-[#1D1D1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B4DFF] transition-all"
              />
            </div>

            <div>
              <label htmlFor="masalah" className="block text-sm font-medium text-[#1D1D1F] mb-2">Apa masalah utama sosmed Anda saat ini?</label>
              <textarea 
                id="masalah"
                value={formData.masalah}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Ceritakan sedikit tentang tantangan yang Anda hadapi..."
                className="w-full bg-white/50 border border-gray-200 rounded-xl px-4 py-3 text-[#1D1D1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7B4DFF] transition-all resize-none"
              ></textarea>
            </div>

            <Button type="submit" className="w-full rounded-xl py-6 text-base font-semibold bg-[#1D1D1F] hover:bg-[#7B4DFF] text-white transition-colors border-0">
              Minta Audit Gratis Sekarang
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
}
