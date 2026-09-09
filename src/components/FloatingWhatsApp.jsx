import React from 'react';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/6281234567890?text=Halo%20Artisan%20RCR,%20saya%20ingin%20konsultasi%20treatment%20restorasi";

  return (
    <aside className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#143826] hover:bg-[#0B1A13] text-white font-body text-sm px-4 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105 border border-white/20 group"
      >
        <span className="material-symbols-outlined text-[20px] text-[#73D49B]">chat</span>
        <span className="font-label text-xs uppercase font-bold tracking-wide">Hubungi Artisan</span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2101C] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C2101C]"></span>
        </span>
      </a>
    </aside>
  );
}
