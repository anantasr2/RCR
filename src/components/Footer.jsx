import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const logoUrl = "/logo.png";

  return (
    <footer className="w-full bg-[#07140E] text-[#D0E2D6] py-16 border-t border-[#142E20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-white p-1 border border-white/20 shadow flex items-center justify-center overflow-hidden shrink-0">
                <img 
                  src={logoUrl} 
                  alt="RCR Indonesia Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-headline text-2xl uppercase text-white font-bold tracking-wider leading-none">
                  RCR INDONESIA
                </span>
                <span className="font-label text-[10px] text-[#73D49B] uppercase tracking-widest font-bold mt-1">
                  REPAIR • CLEANING • RESTORE
                </span>
              </div>
            </div>
            <p className="text-[#A7C2B2] font-body text-xs leading-relaxed">
              Atelier perawatan, reparasi sol, dan restorasi patina profesional untuk sepatu, tas kulit, serta barang koleksi bernilai tinggi.
            </p>
            <div className="pt-1">
              <span className="inline-block font-label text-[10px] text-[#73D49B] uppercase tracking-wider bg-white/5 border border-[#1A3828] px-3 py-1 rounded">
                EST. 2018 • SEMARANG &amp; INDONESIA
              </span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h4 className="font-label text-xs uppercase tracking-wider text-white font-bold">
              Layanan Inti
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/layanan" className="text-[#A7C2B2] font-body text-xs hover:text-white transition-colors block">
                  Deep Cleansing &amp; Suede Spa
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-[#A7C2B2] font-body text-xs hover:text-white transition-colors block">
                  Goodyear Welt &amp; Vibram® Recrafting
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-[#A7C2B2] font-body text-xs hover:text-white transition-colors block">
                  Handmade Patina Recoloring
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-[#A7C2B2] font-body text-xs hover:text-white transition-colors block">
                  Luxury Handbag De-Oxidation &amp; Lining
                </Link>
              </li>
              <li>
                <Link to="/galeri" className="text-[#73D49B] font-body text-xs hover:underline transition-colors block font-semibold">
                  Lihat Portofolio Restorasi &gt;
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshop Center */}
          <div className="space-y-3">
            <h4 className="font-label text-xs uppercase tracking-wider text-white font-bold">
              Workshop Pusat
            </h4>
            <p className="text-[#A7C2B2] font-body text-xs leading-relaxed">
              Jl. Hasanudin No. 48, Panggung Kidul, Semarang Utara, Kota Semarang
            </p>
            <p className="text-[#73D49B] font-label text-xs font-semibold">
              SENIN - MINGGU: 08.00 - 21.00 WIB
            </p>
            <p className="text-[#A7C2B2] font-body text-xs">
              WhatsApp CS: <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-white underline">+62 812-3456-7890</a>
            </p>
          </div>

          {/* Atelier Warranty */}
          <div className="space-y-3">
            <h4 className="font-label text-xs uppercase tracking-wider text-white font-bold">
              Garansi Atelier
            </h4>
            <p className="text-[#A7C2B2] font-body text-xs leading-relaxed">
              60-Hari jaminan ketahanan lem press hidrolik, jahitan sol, serta proteksi keaslian material berstandar internasional.
            </p>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#A7C2B2] space-y-1">
              <span className="text-white font-bold block">✨ Museum-Grade Formulas</span>
              <span>French Saphir Médaille d'Or &amp; Italian Vibram® Compounds.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-label text-xs text-[#A7C2B2]/60">
            © {new Date().getFullYear()} RCR Indonesia. Repair, Cleaning &amp; Restore. All rights reserved.
          </span>
          <span className="font-label text-xs text-[#73D49B] uppercase font-semibold tracking-wide">
            Museum-Grade Restoration System
          </span>
        </div>
      </div>
    </footer>
  );
}
