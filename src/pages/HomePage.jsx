import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ReviewCarousel from '../components/ReviewCarousel';

export default function HomePage() {
  const { onOpenConsultation } = useOutletContext();

  const heroArtisanImg = "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80";
  
  const reviewers = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  ];

  const beforeSneaker = "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80";
  const afterSneaker = "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80";

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 01: HERO SECTION */}
      <section className="relative w-full bg-gradient-to-b from-[#FFFFFF] via-[#F4F8F5] to-[#FFFFFF] overflow-hidden border-b border-[#E2E8E4] pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[580px]">
          {/* Left Content Column */}
          <div className="lg:col-span-6 z-20 py-8 flex flex-col justify-center space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4EE] border border-[#D8E5DC] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#143826]"></span>
              <span className="font-label text-xs uppercase tracking-[0.2em] text-[#143826] font-bold">
                RESTORE WITH PRIDE. FEEL CONFIDENT.
              </span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-[58px] uppercase tracking-tight text-[#143826] leading-[1.05] font-bold">
              MORE THAN A REPAIR.<br />
              <span className="italic font-medium text-[#C2101C]">IT'S A SECOND LIFE.</span>
            </h1>

            <p className="font-body text-base sm:text-lg text-[#3D5245] max-w-xl leading-relaxed font-normal">
              Precision cleaning, leather recrafting, and timeless patina — crafted by master artisans who care with museum-grade formulations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button 
                onClick={() => onOpenConsultation({ title: 'Atelier Treatment Consultation' })}
                className="px-6 py-3.5 rounded-lg text-white font-label text-xs uppercase font-bold tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-2 bg-[#C2101C] hover:bg-[#A80B15]"
              >
                <span>BOOK TREATMENT</span>
                <span className="material-symbols-outlined text-base">calendar_month</span>
              </button>
              
              <Link 
                to="/layanan"
                className="px-6 py-3.5 rounded-lg border-2 border-[#143826] bg-white hover:bg-[#EBF4EE] text-[#143826] font-label text-xs uppercase tracking-wider font-bold shadow-sm transition-all flex items-center gap-2"
              >
                <span>VIEW SERVICES &amp; TARIFS</span>
              </Link>
            </div>

            {/* Reviewers Avatar Strip */}
            <div className="pt-5 flex flex-wrap items-center gap-4 border-t border-[#E2E8E4]">
              <div className="flex -space-x-2.5 overflow-hidden">
                {reviewers.map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt={`Reviewer ${i + 1}`} 
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2.5">
                <div className="flex text-[#E6A117] text-sm gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <span className="font-label text-sm text-[#143826] font-bold tracking-wide">
                  4.9 <span className="text-[#526B5C] font-normal">(500+ Atelier Reviews)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative h-[320px] sm:h-[440px] lg:h-[560px] flex items-end justify-center">
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg border border-[#D8E5DC]">
              <img 
                src={heroArtisanImg} 
                alt="Artisan craftsman restoring footwear at luxury workshop workbench" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A13]/85 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#E2E8E4] shadow-md flex items-center justify-between">
                <span className="font-label text-xs uppercase font-bold text-[#143826] tracking-wider">
                  Atelier Master Studio
                </span>
                <span className="font-label text-xs text-[#C2101C] font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C2101C] animate-pulse"></span>
                  Live Workshop
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlight Strip */}
        <div className="w-full bg-[#F4F8F5] border-t border-[#E2E8E4] py-6 px-4 sm:px-8 mt-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-[#E2E8E4] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#EBF4EE] border border-[#D8E5DC] flex items-center justify-center text-[#143826] shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-2xl text-[#143826]">content_cut</span>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="font-label text-xs uppercase font-bold text-[#143826] tracking-wider">EXPERT ARTISANS</h4>
                <p className="font-body text-xs text-[#526B5C]">Skilled &amp; experienced master craftsmen</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-[#E2E8E4] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#EBF4EE] border border-[#D8E5DC] flex items-center justify-center text-[#143826] shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-2xl text-[#143826]">vaccines</span>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="font-label text-xs uppercase font-bold text-[#143826] tracking-wider">PREMIUM PRODUCTS</h4>
                <p className="font-body text-xs text-[#526B5C]">Museum-grade formulas for fine materials</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-[#E2E8E4] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#EBF4EE] border border-[#D8E5DC] flex items-center justify-center text-[#143826] shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-2xl text-[#143826]">sanitizer</span>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="font-label text-xs uppercase font-bold text-[#143826] tracking-wider">CLEAN &amp; HYGIENIC</h4>
                <p className="font-body text-xs text-[#526B5C]">Ozone chamber &amp; sanitized workshop</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-[#E2E8E4] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#FDE8E9] border border-[#C2101C]/25 flex items-center justify-center text-[#C2101C] shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-2xl text-[#C2101C]">verified_user</span>
              </div>
              <div className="flex flex-col text-left">
                <h4 className="font-label text-xs uppercase font-bold text-[#143826] tracking-wider">SATISFACTION GUARANTEED</h4>
                <p className="font-body text-xs text-[#526B5C]">60-Day stitch &amp; sole recraft warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: WHAT WE DO (DARK FOREST ATELIER) */}
      <section className="w-full bg-[#0B1A13] py-16 px-4 sm:px-8 border-b border-[#1A3828]" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-label text-xs uppercase text-[#73D49B] tracking-widest font-bold block mb-1">
                ATELIER DIVISIONS
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl uppercase text-white font-bold tracking-tight">
                WHAT WE DO
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Link 
                to="/layanan" 
                className="inline-flex items-center gap-2 text-white hover:text-[#73D49B] font-label text-xs uppercase tracking-wider font-bold group transition-colors"
              >
                <span>VIEW ALL SERVICES &amp; TARIFS</span>
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1 text-[#73D49B]">
                  arrow_forward
                </span>
              </Link>
              <button 
                onClick={() => onOpenConsultation({ title: 'Konsultasi Layanan Atelier' })}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#143826] hover:bg-[#1E4D35] text-white font-label text-xs uppercase font-bold tracking-wider transition-colors border border-white/10 shadow-sm"
              >
                <span className="material-symbols-outlined text-sm text-[#73D49B]">chat</span>
                <span>HUBUNGI ARTISAN</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Shoes */}
            <Link 
              to="/layanan" 
              className="group relative rounded-xl overflow-hidden bg-[#11241B] border border-[#234833] flex flex-col justify-end min-h-[380px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80')` }}
              ></div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1A13]/95 via-[#0B1A13]/45 to-transparent"></div>
              <div className="relative z-20 space-y-1">
                <span className="font-label text-xs text-[#E1EAE4] uppercase tracking-wider font-semibold">01 / FOOTWEAR</span>
                <h3 className="font-headline text-2xl text-white uppercase font-bold tracking-tight">SHOES &amp; SOLES</h3>
                <p className="font-body text-xs text-[#E1EAE4]/80">Cleaning • Vibram Recraft • Restore</p>
              </div>
            </Link>

            {/* Bags */}
            <Link 
              to="/layanan" 
              className="group relative rounded-xl overflow-hidden bg-[#11241B] border border-[#234833] flex flex-col justify-end min-h-[380px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80')` }}
              ></div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1A13]/95 via-[#0B1A13]/45 to-transparent"></div>
              <div className="relative z-20 space-y-1">
                <span className="font-label text-xs text-[#E1EAE4] uppercase tracking-wider font-semibold">02 / LEATHER BAGS</span>
                <h3 className="font-headline text-2xl text-white uppercase font-bold tracking-tight">LUXURY BAGS</h3>
                <p className="font-body text-xs text-[#E1EAE4]/80">Spa • Lining • Zipper Excella</p>
              </div>
            </Link>

            {/* Luggage */}
            <Link 
              to="/layanan" 
              className="group relative rounded-xl overflow-hidden bg-[#11241B] border border-[#234833] flex flex-col justify-end min-h-[380px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=800&q=80')` }}
              ></div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1A13]/95 via-[#0B1A13]/45 to-transparent"></div>
              <div className="relative z-20 space-y-1">
                <span className="font-label text-xs text-[#E1EAE4] uppercase tracking-wider font-semibold">03 / LUGGAGE</span>
                <h3 className="font-headline text-2xl text-white uppercase font-bold tracking-tight">SUITCASE &amp; TRAVEL</h3>
                <p className="font-body text-xs text-[#E1EAE4]/80">Silent Wheels • TSA Lock • Crack Repair</p>
              </div>
            </Link>

            {/* Leather Apparel */}
            <Link 
              to="/layanan" 
              className="group relative rounded-xl overflow-hidden bg-[#11241B] border border-[#234833] flex flex-col justify-end min-h-[380px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
            >
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80')` }}
              ></div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1A13]/95 via-[#0B1A13]/45 to-transparent"></div>
              <div className="relative z-20 space-y-1">
                <span className="font-label text-xs text-[#E1EAE4] uppercase tracking-wider font-semibold">04 / APPAREL</span>
                <h3 className="font-headline text-2xl text-white uppercase font-bold tracking-tight">LEATHER GOODS</h3>
                <p className="font-body text-xs text-[#E1EAE4]/80">Jackets • Belts • Patina Recoloring</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 03: BEFORE -> AFTER COMPARISON FRAME */}
      <section className="w-full bg-[#FFFFFF] py-16 px-4 sm:px-8 border-b border-[#E2E8E4]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center mb-10">
            <span className="font-label text-xs uppercase text-[#143826] tracking-widest font-bold block mb-1">
              ATELIER TRANSFORMATION
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-[#143826] font-bold tracking-tight">
              BEFORE → AFTER
            </h2>
            <p className="text-[#526B5C] font-body text-sm mt-1">
              Geser tuas pemisah untuk menginspeksi ketelitian restorasi mikro
            </p>
          </div>

          <BeforeAfterSlider 
            beforeImage={beforeSneaker}
            afterImage={afterSneaker}
            title="Adidas Yeezy Boost — Deep Clean & Unyellowing"
            price="Rp 90.000"
            tag="AUTHENTIC RESTORATION"
          />

          <div className="mt-6 flex items-center justify-center">
            <Link 
              to="/galeri"
              className="px-6 py-3 rounded-full bg-[#F4F8F5] hover:bg-[#EBF4EE] text-[#143826] font-label text-xs uppercase font-bold tracking-wider flex items-center gap-2 transition-colors border border-[#D8E5DC] shadow-sm"
            >
              <span>JELAJAHI ARSIP GALERI LENGKAP</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 04: ATELIER CATALOGUE / FROM DIRTY TO READY */}
      <section className="w-full bg-[#0B1A13] py-16 px-4 sm:px-8 border-b border-[#1A3828]" id="catalogue">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-label text-xs uppercase text-[#73D49B] tracking-widest font-bold block mb-1">
                ATELIER CATALOGUE
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl uppercase text-white font-bold tracking-tight">
                FROM DIRTY TO READY.
              </h2>
            </div>
            <p className="text-[#A7C2B2] font-body text-sm">
              Pilih treatment presisi sesuai kondisi barang berhargamu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Layanan 01 */}
            <div className="bg-[#11241B] rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl border border-[#234833] transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#183627] border border-[#2B543D] flex items-center justify-center mb-4 text-[#A7C2B2]">
                  <span className="material-symbols-outlined text-white">steps</span>
                </div>
                <span className="font-label text-xs text-[#73D49B] uppercase tracking-wider font-bold block mb-1">
                  LAYANAN 01
                </span>
                <h3 className="font-headline text-2xl text-white uppercase mb-2 font-bold">
                  ULTIMATE CLEANING
                </h3>
                <p className="text-[#A7C2B2] font-body text-xs leading-relaxed mb-4">
                  Untuk sepatu dengan kotoran ringan hingga berat pemakaian harian.
                </p>
                <div className="p-3 rounded-lg bg-[#0D1C15] border border-[#234833] font-label text-[11px] text-[#D0E2D6] leading-relaxed mb-6">
                  Upper, midsole, outsole &amp; shoelaces deep-conditioning.
                </div>
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-label text-xs text-[#A7C2B2] uppercase">Starting from</span>
                  <span className="font-label text-base font-bold text-white">Rp 55.000</span>
                </div>
                <button 
                  onClick={() => onOpenConsultation({ title: 'Layanan 01: Ultimate Cleaning Regular', category: 'Sepatu / Footwear' })}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#183627] hover:bg-[#204734] text-white font-label text-xs uppercase font-bold text-center block transition-colors border border-[#2B543D] shadow-sm"
                >
                  LIHAT DETAIL &gt;
                </button>
              </div>
            </div>

            {/* Layanan 02 */}
            <div className="bg-[#11241B] rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl border border-[#234833] transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#183627] border border-[#2B543D] flex items-center justify-center mb-4 text-[#A7C2B2]">
                  <span className="material-symbols-outlined text-white">auto_awesome</span>
                </div>
                <span className="font-label text-xs text-[#73D49B] uppercase tracking-wider font-bold block mb-1">
                  LAYANAN 02
                </span>
                <h3 className="font-headline text-2xl text-white uppercase mb-2 font-bold">
                  PREMIUM CLEAN
                </h3>
                <p className="text-[#A7C2B2] font-body text-xs leading-relaxed mb-4">
                  Detail cleaning untuk hasil maksimal menyeluruh ke bagian terdalam.
                </p>
                <div className="p-3 rounded-lg bg-[#0D1C15] border border-[#234833] font-label text-[11px] text-[#D0E2D6] leading-relaxed mb-6">
                  Deep extraction, insole sanitation &amp; odor neutralizer.
                </div>
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-label text-xs text-[#A7C2B2] uppercase">Tarif Layanan</span>
                  <span className="font-label text-base font-bold text-white">Rp 90.000</span>
                </div>
                <button 
                  onClick={() => onOpenConsultation({ title: 'Layanan 02: Premium Clean & Insole Extraction', category: 'Sepatu / Footwear' })}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#183627] hover:bg-[#204734] text-white font-label text-xs uppercase font-bold text-center block transition-colors border border-[#2B543D] shadow-sm"
                >
                  LIHAT DETAIL &gt;
                </button>
              </div>
            </div>

            {/* Layanan 03 Popular */}
            <div className="bg-[#152B20] rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl border-2 border-[#C2101C] transition-all duration-300 relative hover:-translate-y-1">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#C2101C]/20 border border-[#C2101C]/50 flex items-center justify-center mb-4 text-white">
                  <span className="material-symbols-outlined text-white">sanitizer</span>
                </div>
                <span className="font-label text-xs text-[#FDE8E9] uppercase tracking-wider font-bold block mb-1">
                  LAYANAN 03 • <span className="text-[#73D49B]">POPULAR</span>
                </span>
                <h3 className="font-headline text-2xl text-white uppercase mb-2 font-bold">
                  SNEAKER DETOX
                </h3>
                <p className="text-[#D0E2D6] font-body text-xs leading-relaxed mb-4">
                  Extra treatment untuk kondisi berat yang butuh sterilisasi khusus.
                </p>
                <div className="p-3 rounded-lg bg-[#0D1C15] border border-[#C2101C]/40 font-label text-[11px] text-white leading-relaxed mb-6 font-medium">
                  Termasuk: Ozone chamber sterilizer &amp; pembersihan jamur pekat.
                </div>
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-label text-xs text-[#A7C2B2] uppercase">Tarif Tetap</span>
                  <span className="font-label text-base font-bold text-white">Rp 150.000</span>
                </div>
                <button 
                  onClick={() => onOpenConsultation({ title: 'Layanan 03: Sneaker Detox Ozone Chamber', category: 'Sepatu / Footwear' })}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#C2101C] hover:bg-[#A80B15] text-white font-label text-xs uppercase font-bold text-center block transition-all shadow-md"
                >
                  LIHAT DETAIL &gt;
                </button>
              </div>
            </div>

            {/* Layanan 04 */}
            <div className="bg-[#11241B] rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl border border-[#234833] transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#183627] border border-[#2B543D] flex items-center justify-center mb-4 text-[#A7C2B2]">
                  <span className="material-symbols-outlined text-white">build</span>
                </div>
                <span className="font-label text-xs text-[#73D49B] uppercase tracking-wider font-bold block mb-1">
                  LAYANAN 04
                </span>
                <h3 className="font-headline text-2xl text-white uppercase mb-2 font-bold">
                  REPAIR &amp; RESTORE
                </h3>
                <p className="text-[#A7C2B2] font-body text-xs leading-relaxed mb-4">
                  Perbaikan struktural untuk kerusakan material &amp; sole separation.
                </p>
                <div className="p-3 rounded-lg bg-[#0D1C15] border border-[#234833] font-label text-[11px] text-[#D0E2D6] leading-relaxed mb-6">
                  Reglue, sole swap Vibram, jahitan re-stitch &amp; repaint.
                </div>
              </div>
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-label text-xs text-[#A7C2B2] uppercase">Biaya Layanan</span>
                  <span className="font-label text-base font-bold text-white">Konsultasi</span>
                </div>
                <button 
                  onClick={() => onOpenConsultation({ title: 'Layanan 04: Repair & Restoration Structural', category: 'Sepatu / Footwear' })}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#0D1C15] hover:bg-[#07140E] text-white font-label text-xs uppercase font-bold text-center block transition-colors shadow-sm border border-[#2B543D]"
                >
                  AJUKAN ESTIMASI &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: SPECIAL ATELIER PROGRAM: #MORNINGDROP */}
      <section className="w-full bg-[#F4F8F5] py-16 px-4 sm:px-8 border-b border-[#E2E8E4]">
        <div className="max-w-7xl mx-auto rounded-3xl bg-white p-6 sm:p-10 shadow-md border border-[#E2E8E4]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDE8E9] border border-[#C2101C]/30 text-[#C2101C] font-label text-xs uppercase font-bold">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span>SPECIAL ATELIER PROGRAM</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#143826] uppercase font-bold tracking-tight">
                #MORNINGDROP — EARLY DROP. START EARLY.
              </h2>
              <p className="text-[#3D5245] font-body text-sm sm:text-base leading-relaxed">
                Punya barang yang ingin segera ditangani? Drop sebelum 08.00 WIB melalui loket atelier #MORNINGDROP untuk slot pengerjaan batch pertama setiap harinya.
              </p>
              <div className="p-4 rounded-xl bg-[#F4F8F5] border border-[#D8E5DC] flex items-start gap-3 shadow-sm">
                <span className="material-symbols-outlined text-[#C2101C] text-2xl mt-0.5">bolt</span>
                <p className="font-body text-xs text-[#143826] leading-relaxed font-medium">
                  Prioritas pengerjaan hari yang sama &amp; penanganan ekspres atelier. Detail benefit mengikuti kapasitas harian dan regulasi resmi RCR Indonesia.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => onOpenConsultation({ title: 'Program Spesial #MORNINGDROP' })}
                  className="px-6 py-3 rounded-lg text-white font-label text-xs uppercase font-bold flex items-center gap-2 shadow-sm transition-colors bg-[#C2101C] hover:bg-[#A80B15]"
                >
                  <span>DAFTAR #MORNINGDROP</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <a 
                  href="#outlets" 
                  className="px-6 py-3 rounded-lg bg-white border border-[#D8E5DC] hover:bg-[#F4F8F5] text-[#143826] font-label text-xs uppercase font-bold transition-colors shadow-sm"
                >
                  LIHAT TITIK DROP &gt;
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-[#F4F8F5] border border-[#D8E5DC] p-8 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#D8E5DC] mx-auto flex items-center justify-center text-[#143826] shadow-sm">
                  <span className="material-symbols-outlined text-3xl text-[#C2101C]">timer</span>
                </div>
                <div>
                  <span className="font-headline text-2xl font-bold text-[#C2101C] tracking-tight block">
                    DROP &lt; 08.00 WIB
                  </span>
                  <span className="font-body text-xs text-[#526B5C] mt-1 block">
                    Siap dipakai untuk agenda pentingmu
                  </span>
                </div>
                <div className="pt-4 border-t border-[#D8E5DC]">
                  <span className="font-label text-xs uppercase text-[#143826] font-bold tracking-wider">
                    TERSEDIA DI 4 OUTLET SEMARANG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06: AUTHENTIC REVIEWS */}
      <section className="w-full bg-[#0B1A13] py-16 px-4 sm:px-8 border-b border-[#1A3828]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-1">
            <span className="font-label text-xs uppercase text-[#73D49B] tracking-widest font-bold block">
              AUTHENTIC REVIEWS
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl uppercase text-white font-bold tracking-tight">
              THEY BROUGHT IT IN. THEY GOT IT BACK.
            </h2>
            <p className="text-[#A7C2B2] font-body text-sm">
              Kepercayaan ribuan pemilik sneakers, tas, dan barang koleksi di seluruh Indonesia.
            </p>
          </div>

          <ReviewCarousel />
        </div>
      </section>

      {/* SECTION 07: OUTLET NETWORK / FIND YOUR NEAREST RCR */}
      <section className="w-full bg-[#FFFFFF] py-16 px-4 sm:px-8 border-b border-[#E2E8E4]" id="outlets">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-label text-xs uppercase text-[#526B5C] tracking-widest font-bold block mb-1">
                OUTLET NETWORK
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl uppercase text-[#143826] font-bold tracking-tight">
                FIND YOUR NEAREST RCR.
              </h2>
              <p className="text-[#3D5245] font-body text-sm mt-1">
                Ready to send your item? Choose the location that works best for you in Semarang.
              </p>
            </div>
            <a 
              href="https://wa.me/6281234567890?text=Info%20Lokasi%20RCR%20Semarang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#143826] hover:text-[#C2101C] font-label text-xs uppercase tracking-wider font-bold transition-colors"
            >
              <span>KONSULTASI PICKUP SERVICE</span>
              <span className="material-symbols-outlined text-base">local_shipping</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Outlets List (Left 6 cols) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              
              {/* Group 1: Cabang Utama */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#143826] text-lg">storefront</span>
                    <h3 className="font-label text-xs uppercase font-bold text-[#143826] tracking-wider">
                      CABANG UTAMA / WORKSHOP ATELIER
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#EBF4EE] text-[#143826] font-label text-[10px] font-bold uppercase border border-[#D8E5DC]">
                    3 Toko Resmi
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* Hasanudin */}
                  <div className="p-4 rounded-xl bg-white hover:bg-[#F4F8F5] border border-[#D8E5DC] transition-colors shadow-sm">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#143826] text-base">location_on</span>
                        <h4 className="font-headline text-lg text-[#143826] font-bold">
                          CABANG HASANUDIN - SEMARANG
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded bg-[#EBF4EE] text-[#143826] font-label text-[10px] uppercase font-bold border border-[#D8E5DC] shrink-0">
                        PUSAT WORKSHOP &amp; SOL BAR
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#526B5C] pl-6 mb-2.5">
                      Jl. Hasanudin No. 48, Panggung Kidul, Semarang Utara
                    </p>
                    <div className="flex items-center justify-between pl-6 pt-2 border-t border-[#E2E8E4] font-label text-xs">
                      <span className="text-[#728A7C] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs">schedule</span> 09.00 – 21.00 WIB
                      </span>
                      <a 
                        href="https://maps.google.com/?q=RCR+Hasanudin+Semarang" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#143826] hover:text-[#C2101C] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                      >
                        <span>GET DIRECTIONS</span>
                        <span className="material-symbols-outlined text-xs">north_east</span>
                      </a>
                    </div>
                  </div>

                  {/* Wonodri */}
                  <div className="p-4 rounded-xl bg-white hover:bg-[#F4F8F5] border border-[#E2E8E4] transition-colors shadow-sm">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#143826] text-base">location_on</span>
                        <h4 className="font-headline text-lg text-[#143826] font-bold">
                          CABANG WONODRI - SEMARANG
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded bg-[#EBF4EE] text-[#143826] font-label text-[10px] uppercase font-bold border border-[#D8E5DC] shrink-0">
                        CABANG ATELIER
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#526B5C] pl-6 mb-2.5">
                      Jl. Wonodri Kebondalem No. 12, Semarang Selatan
                    </p>
                    <div className="flex items-center justify-between pl-6 pt-2 border-t border-[#E2E8E4] font-label text-xs">
                      <span className="text-[#728A7C] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs">schedule</span> 10.00 – 21.00 WIB
                      </span>
                      <a 
                        href="https://maps.google.com/?q=Wonodri+Semarang" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#143826] hover:text-[#C2101C] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                      >
                        <span>GET DIRECTIONS</span>
                        <span className="material-symbols-outlined text-xs">north_east</span>
                      </a>
                    </div>
                  </div>

                  {/* Tembalang */}
                  <div className="p-4 rounded-xl bg-white hover:bg-[#F4F8F5] border border-[#E2E8E4] transition-colors shadow-sm">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#143826] text-base">location_on</span>
                        <h4 className="font-headline text-lg text-[#143826] font-bold">
                          CABANG TEMBALANG - SEMARANG
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded bg-[#EBF4EE] text-[#143826] font-label text-[10px] uppercase font-bold border border-[#D8E5DC] shrink-0">
                        CABANG ATELIER
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#526B5C] pl-6 mb-2.5">
                      Jl. Banjarsari Raya No. 26, Tembalang, Semarang
                    </p>
                    <div className="flex items-center justify-between pl-6 pt-2 border-t border-[#E2E8E4] font-label text-xs">
                      <span className="text-[#728A7C] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs">schedule</span> 10.00 – 21.00 WIB
                      </span>
                      <a 
                        href="https://maps.google.com/?q=Tembalang+Semarang" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#143826] hover:text-[#C2101C] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                      >
                        <span>GET DIRECTIONS</span>
                        <span className="material-symbols-outlined text-xs">north_east</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group 2: Drop Point Partner Barber Corner */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E2E8E4] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#E6A117] text-lg">content_cut</span>
                    <h3 className="font-label text-xs uppercase font-bold text-[#143826] tracking-wider">
                      DROP POINT PARTNER — BARBER CORNER
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#F4F8F5] text-[#526B5C] font-label text-[10px] font-bold uppercase border border-[#D8E5DC]">
                    3 Titik Drop
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* Drop Point Suyudi */}
                  <div className="p-4 rounded-xl bg-white hover:bg-[#F4F8F5] border border-[#E2E8E4] transition-colors shadow-sm">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#E6A117] text-base">location_on</span>
                        <h4 className="font-headline text-lg text-[#143826] font-bold">
                          DROP POINT BARBER CORNER SUYUDI
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded bg-[#F4F8F5] text-[#3D5245] font-label text-[10px] uppercase font-bold border border-[#D8E5DC] shrink-0">
                        DROP POINT PARTNER
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#526B5C] pl-6 mb-2.5">
                      Jl. Suyudono / Suyudi No. 18, Semarang Tengah
                    </p>
                    <div className="flex items-center justify-between pl-6 pt-2 border-t border-[#E2E8E4] font-label text-xs">
                      <span className="text-[#728A7C] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs">schedule</span> 10.00 – 21.00 WIB
                      </span>
                      <a 
                        href="https://maps.google.com/?q=Barber+Corner+Suyudi+Semarang" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#143826] hover:text-[#C2101C] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                      >
                        <span>GET DIRECTIONS</span>
                        <span className="material-symbols-outlined text-xs">north_east</span>
                      </a>
                    </div>
                  </div>

                  {/* Drop Point Jatidiri */}
                  <div className="p-4 rounded-xl bg-white hover:bg-[#F4F8F5] border border-[#E2E8E4] transition-colors shadow-sm">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#E6A117] text-base">location_on</span>
                        <h4 className="font-headline text-lg text-[#143826] font-bold">
                          DROP POINT BARBER CORNER JATIDIRI
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded bg-[#F4F8F5] text-[#3D5245] font-label text-[10px] uppercase font-bold border border-[#D8E5DC] shrink-0">
                        DROP POINT PARTNER
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#526B5C] pl-6 mb-2.5">
                      Area Stadion Jatidiri, Karangrejo, Semarang
                    </p>
                    <div className="flex items-center justify-between pl-6 pt-2 border-t border-[#E2E8E4] font-label text-xs">
                      <span className="text-[#728A7C] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs">schedule</span> 10.00 – 21.00 WIB
                      </span>
                      <a 
                        href="https://maps.google.com/?q=Barber+Corner+Jatidiri+Semarang" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#143826] hover:text-[#C2101C] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                      >
                        <span>GET DIRECTIONS</span>
                        <span className="material-symbols-outlined text-xs">north_east</span>
                      </a>
                    </div>
                  </div>

                  {/* Drop Point Puri Anjasmoro */}
                  <div className="p-4 rounded-xl bg-white hover:bg-[#F4F8F5] border border-[#E2E8E4] transition-colors shadow-sm">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#E6A117] text-base">location_on</span>
                        <h4 className="font-headline text-lg text-[#143826] font-bold">
                          DROP POINT BARBER CORNER PURI ANJASMORO
                        </h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded bg-[#F4F8F5] text-[#3D5245] font-label text-[10px] uppercase font-bold border border-[#D8E5DC] shrink-0">
                        DROP POINT PARTNER
                      </span>
                    </div>
                    <p className="font-body text-xs text-[#526B5C] pl-6 mb-2.5">
                      Ruko Puri Anjasmoro Blok EE, Semarang Barat
                    </p>
                    <div className="flex items-center justify-between pl-6 pt-2 border-t border-[#E2E8E4] font-label text-xs">
                      <span className="text-[#728A7C] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-xs">schedule</span> 10.00 – 21.00 WIB
                      </span>
                      <a 
                        href="https://maps.google.com/?q=Barber+Corner+Puri+Anjasmoro+Semarang" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#143826] hover:text-[#C2101C] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                      >
                        <span>GET DIRECTIONS</span>
                        <span className="material-symbols-outlined text-xs">north_east</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Styled Interactive Map View Card (Right 6 cols) */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden relative shadow-md min-h-[380px] bg-white border border-[#E2E8E4] flex flex-col justify-between p-4">
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1400&q=80')` }}
              ></div>
              <div className="absolute inset-0 bg-[#0B1A13]/25 pointer-events-none"></div>

              {/* Active Marker Pin Overlay */}
              <div className="relative z-10 self-center my-auto p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E2E8E4] max-w-xs text-center space-y-1">
                <div className="w-9 h-9 rounded-full bg-[#EBF4EE] text-[#143826] flex items-center justify-center mx-auto mb-1 border border-[#D8E5DC]">
                  <span className="material-symbols-outlined text-lg">store</span>
                </div>
                <span className="font-headline text-base text-[#143826] font-bold uppercase block">
                  RCR HQ HASANUDIN SEMARANG
                </span>
                <span className="font-body text-xs text-[#526B5C] block">
                  Jl. Hasanudin 48 • Workshop Utama &amp; Sol Bar
                </span>
              </div>

              {/* Floating Map Bar */}
              <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-2 p-3.5 rounded-xl bg-white/95 backdrop-blur border border-[#E2E8E4] font-label text-xs shadow-md">
                <div className="flex items-center gap-2 text-[#143826] font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C2101C] animate-pulse"></span>
                  <span>6 Lokasi di Semarang (3 Workshop Atelier + 3 Drop Point Partner)</span>
                </div>
                <span className="text-[#526B5C] uppercase font-semibold">
                  Area Kota Semarang &amp; Sekitarnya
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
