import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenBookModal, onOpenTrackModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuDu1DzQUQic8wey-vX7aVsg3YlNtMRMyKqMewIxuhSZkYaSfqloJIMG4s8myryagg1syHEEDDtNyoKJQ5Fx4nPoxd_0e4gCNFrOHSuo-QZzNQ9_pJY5OdLK-g33OM4fXH9KmSxnlF7EjXw_0A2h7iXZs3e3y9CjtoxsrhPgc6Umct2KyIhjIfw60ZUnMncBRNlsp-FEDC_QylTC84E6Id2lDo645ib0ThYE_hLvKKVh3__nIhm4bYe12thzSwvV1YQ5zA";

  return (
    <header className="fixed top-0 w-full z-40 transition-all duration-300">
      <div className="bg-white/95 backdrop-blur-md border-b border-[#E2E8E4] shadow-sm">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Crest / Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-lg bg-white p-1 border border-[#D8E5DC] shadow-sm flex items-center justify-center overflow-hidden shrink-0 group-hover:shadow-md transition-shadow">
              <img 
                src={logoUrl} 
                alt="RCR Indonesia Official Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-headline text-2xl tracking-wider uppercase font-bold text-[#143826] leading-none transition-colors">
                RCR INDONESIA
              </span>
              <span className="font-label text-[10px] text-[#526B5C] tracking-widest font-bold uppercase mt-1">
                ATELIER REPAIR • CLEANING • RESTORE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 font-label text-xs uppercase tracking-wider font-semibold">
            <Link 
              to="/" 
              className={`transition-colors pb-0.5 ${
                isActive('/') 
                  ? 'text-[#143826] border-b-2 border-[#C2101C] font-bold' 
                  : 'text-[#526B5C] hover:text-[#143826]'
              }`}
            >
              HOME
            </Link>

            <Link 
              to="/layanan" 
              className={`transition-colors pb-0.5 flex items-center gap-1 ${
                isActive('/layanan') 
                  ? 'text-[#143826] border-b-2 border-[#C2101C] font-bold' 
                  : 'text-[#526B5C] hover:text-[#143826]'
              }`}
            >
              <span>SERVICES / LAYANAN</span>
              <span className="material-symbols-outlined text-xs">expand_more</span>
            </Link>

            <Link 
              to="/galeri" 
              className={`transition-colors pb-0.5 ${
                isActive('/galeri') 
                  ? 'text-[#143826] border-b-2 border-[#C2101C] font-bold' 
                  : 'text-[#526B5C] hover:text-[#143826]'
              }`}
            >
              GALERI TRANSFORMASI
            </Link>

            <a 
              href="/#outlets" 
              className="text-[#526B5C] hover:text-[#143826] transition-colors"
            >
              LOCATIONS
            </a>

            <button 
              type="button"
              onClick={onOpenTrackModal} 
              className="text-[#526B5C] hover:text-[#143826] transition-colors uppercase cursor-pointer"
            >
              TRACK ORDER
            </button>
          </nav>

          {/* Right Action CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onOpenBookModal}
              className="px-5 py-2.5 rounded-lg bg-[#C2101C] hover:bg-[#A80B15] text-white font-label text-xs uppercase font-bold tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>BOOK TREATMENT</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#143826] hover:bg-[#F4F8F5] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E2E8E4] bg-white px-6 py-4 space-y-3 font-label text-xs uppercase tracking-wider font-semibold animate-fade-in shadow-lg">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${isActive('/') ? 'text-[#C2101C] font-bold' : 'text-[#143826]'}`}
            >
              HOME
            </Link>
            <Link 
              to="/layanan" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${isActive('/layanan') ? 'text-[#C2101C] font-bold' : 'text-[#143826]'}`}
            >
              SERVICES / LAYANAN &amp; KATALOG
            </Link>
            <Link 
              to="/galeri" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${isActive('/galeri') ? 'text-[#C2101C] font-bold' : 'text-[#143826]'}`}
            >
              GALERI TRANSFORMASI
            </Link>
            <a 
              href="/#outlets" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#143826]"
            >
              LOCATIONS (OUTLET SEMARANG)
            </a>
            <button 
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrackModal();
              }}
              className="block py-2 text-left w-full text-[#143826]"
            >
              TRACK ORDER / CEK RESI
            </button>
            <div className="pt-2 border-t border-[#E2E8E4]">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookModal();
                }}
                className="w-full py-2.5 rounded-lg bg-[#143826] text-white font-bold text-center block"
              >
                KONSULTASI ARTISAN
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
