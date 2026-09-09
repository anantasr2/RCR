import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

export default function GaleriPage() {
  const { onOpenConsultation } = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Slider State for the centerpiece Before-After frame
  const [sliderPos, setSliderPos] = useState(50);
  const [sliderWidth, setSliderWidth] = useState(0);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setSliderWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);

    window.addEventListener('resize', updateWidth);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const handleSliderMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => { isDraggingRef.current = true; };
  const handleMouseUp = () => { isDraggingRef.current = false; };
  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    handleSliderMove(e.clientX);
  };
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const categories = [
    { id: 'all', label: 'ALL (48)' },
    { id: 'shoes', label: 'SHOES & VIBRAM (24)' },
    { id: 'bags', label: 'LUXURY BAGS (12)' },
    { id: 'luggage', label: 'SUITCASE & LUGGAGE (6)' },
    { id: 'leather', label: 'LEATHER APPAREL (6)' },
  ];

  const archiveItems = [
    {
      id: 1,
      category: 'shoes',
      tag: 'Sneaker Care',
      badge: 'Deep Clean & Unyellow',
      title: 'Nike Air Jordan 1 Chicago',
      desc: 'Restorasi warna merah, pemutihan midsole, dan pelindung hidrasi kulit asli.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWV6PTmxA_N56zhodlWLkAMyFQaIH7TXEf9k6Wd1xBjcKcoro9YaKsW4XIvKLqjNs8hqJIiaaWXKkKxwwEECX1BHglsV3gHX-udiN73e_JuqkXO4WQZvhOTWx4siqUjaR9A7VAWueXN9llqJrWaCznMNUafHMwZQ3WIwgz7Lzy5eLbdu7djisEiK1w_qaPU9DhMllu0PJ9FuUIgkgBmVgob0CP3Lhepti76TZdWu12aivp9_xtRvXr',
      price: 'Rp 145.000'
    },
    {
      id: 2,
      category: 'shoes',
      tag: 'Knit & Boost',
      badge: 'Ozone Sterilization',
      title: 'Adidas Yeezy 350 Triple White',
      desc: 'Ekstraksi noda tanah liat dari rajutan kain primeknit dan sterilisasi anti-jamur.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEo5NFK0gYFKBFUEKCE5N32EexIgo1B5GivBaiRyMCQaXLj-YFv1QUbiWvR02qU4glgT7sJksPYjCzfkeN6M5o9lN8LR9kr-43ODVF98WXbfDlMQBcnJHrJZcqzzUhUj8c-X8aucFMFsezKGg-FMytFjXB6_zxwbmIu4uR6_hUlfCtvRCTMVrirOqN2rKq3hxbw2n121_F2903MOz51XTUyhu-HKr9lPDwj_J8sK5reg8Onr_Y5cR_',
      price: 'Rp 90.000'
    },
    {
      id: 3,
      category: 'bags',
      tag: 'Luxury Leather',
      badge: 'Edge Paint & Buff',
      title: 'Chanel Classic Flap Caviar',
      desc: 'Pembersihan debu mikro sudut jahitan, pelembaban kulit, dan pelapisan rantai emas.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Gp7Zxi55Gr-i6HT936_kyvZLSkfrtslB31pCQ-CJdV-qnwmCM8F7awut9Vnvcg9Qy44u9UEoRrofPrKFb2Fnvm8pxQMgZDkbCzI5wCOlMlnSrpxvAPv9aLd7sZMqN8r0e5QCPufbbXKzExy4Su_uxTWYHKECBhkuIBVG8eB52WP0C5Lp_Wwk56n1_J6qWczKI0MoslqxoAKLOqQkemqC0BQOGpDl-vpzfWpa3f3Szrdfve66saJY',
      price: 'Rp 180.000'
    },
    {
      id: 4,
      category: 'shoes',
      tag: 'Heritage Boots',
      badge: 'Vibram 4014 Morflex',
      title: 'Red Wing 875 Moc Toe',
      desc: 'Re-welt jahitan Blake & sol baru Vibram Christy Morflex original Italia.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5iL-nYx2kyCq4bkP9MOqFDe-KkNJ-guOjAWmu-I4Ebk-OmCKgxIK6i6rBF3qcdXDc5jqsDSg2pVrBeltBCU78SSCqiUk2qP9enIHYz7oVUCI7UnLm-R-SYU5k-p-qpoR04EKLWnK2xzUgzX23rsO6dJw4teP0byAtezgB1L0tBWrrIh7d0tbfilJpK4u25LYNacZl49uXr_fMInUjuZeOE4pwRl7ngtyLOrt11BkOdeM88Oufnybo',
      price: 'Rp 450.000'
    },
    {
      id: 5,
      category: 'bags',
      tag: 'Bespoke Patina',
      badge: 'Corner Re-Piping',
      title: 'Hermès Birkin Togo Leather',
      desc: 'Pencampuran warna presisi 1:1, pelapisan sudut kulit, dan pemolesan hardware.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5IWYe6xKLsrDbDKXGbLW2RBqs3RGWp2sKVrm4dfCZ1uswTVgBH_ePUIYgFo4qO9iMjiKATY0CHyqPRVSUD5c3x-exI3rpQZYNhblbEIw_lx304GlOFPrYAaDkBvIc-LdKT10GKKuMRtaLlLUbCGONTYyDm4rGQuR-JUD_GBqBncH0W2bcsAHWsXjFasbrP1njtqP2eKK_m1y_3R4B4HmV_qzT5O6wcv6SXgfIlJWBJKVB7_qWwaXH',
      price: 'Rp 180.000'
    },
    {
      id: 6,
      category: 'luggage',
      tag: 'Luggage Repair',
      badge: 'Silent Spinner Wheels',
      title: 'Rimowa Classic Cabin Aluminium',
      desc: 'Penggantian 4 roda rubber double bearing 360° dan perataan dent body aluminium.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDttzgycJc-0fe51SafNgzVWYJrOsxM-owVV8TQTkL2gzM7hlaDYnbW4y1MSJ-1A-wZJOQ4Ye9USiCTJd6DN3PoVl1_zByFLjrKUsrInkvhvv-Gi7e9iLHKkHx0hPQTsV80852-JvVI27mKCkPHVa3HOV2auJnoM5__PP842JztgqXj8xp_wnE3jnocREeMiTJgmv8MA8Uo67tD5RIZwGoQeuBc5bshvztRv8T_rXEXaTjQVRNcHWDb',
      price: 'Rp 380.000'
    }
  ];

  const filteredArchive = useMemo(() => {
    if (selectedCategory === 'all') return archiveItems;
    return archiveItems.filter((it) => it.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full bg-[#FFFFFF] text-[#1A2420]">
      
      {/* ========================================================================= */}
      {/* 01 — EDITORIAL SHOWCASE HERO                                              */}
      {/* ========================================================================= */}
      <section className="relative pt-6 sm:pt-10 md:pt-14 pb-12 sm:pb-16 md:pb-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Meta Title */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-[#DCE6DD]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF5EF] border border-[#DCE6DD] text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#143826] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2101C]"></span>
                RCR Restorations · Showcase 2026
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#143826] uppercase leading-[1.05] font-headline">
                Real Work.<br />
                <span className="italic font-display font-light text-[#55695E]">Transformation.</span>
              </h1>
            </div>
            <div className="max-w-md md:text-right">
              <p className="text-xs sm:text-sm md:text-base text-[#465A50] leading-relaxed mb-4 font-body">
                Lihat bagaimana tangan terampil master artisan RCR mengembalikan martabat, ketahanan sol, dan keindahan patina barang kesayangan Anda.
              </p>
              <a 
                href="#before-after" 
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#143826] hover:text-[#C2101C] transition-colors group font-label"
              >
                <span>Explore Visual Archive</span>
                <span className="material-symbols-outlined text-sm transform group-hover:translate-y-1 transition-transform">
                  arrow_downward
                </span>
              </a>
            </div>
          </div>

          {/* Hero Visual Stage */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0B1A13] group">
            <img 
              src="https://lh3.googleusercontent.com/aida/AEtjO1WydXmcEKZALEGmN5wOvyhloOIK6IKyXvjctfLApJOSRFFLskusYPJ61Y9-8frlCDRDkbYr_-dFTwHeSK53V2Ad8GmdxKn1eyM3ge7GPFA9YWg6pSBJxGdUMmDlzQ7qLFh8M17TjfGHqr2Gc4vOGbMVjEHBxUn_Xg7Roq_ppiW9KNnpYb4yoWeAzUm3QpDX7GmjpXRPuXSjUYDYLD6fYhaJvOX3OTBVyr5iSq7K0y4BH0fCzptsccFJDA4" 
              alt="Master Artisan RCR Workshop" 
              className="w-full h-[360px] sm:h-[480px] md:h-[600px] lg:h-[640px] object-cover object-center transform duration-700 group-hover:scale-[1.02] filter brightness-95"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A13] via-[#0B1A13]/30 to-transparent pointer-events-none"></div>

            {/* Floating Glassmorphic Labels */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-white/90 text-[10px] sm:text-xs tracking-widest font-mono uppercase">
              <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                Bespoke Workshop No. 48 Semarang
              </span>
              <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 font-bold text-[#ECC15A]">
                01 / ARCHIVE 2026
              </span>
            </div>

            <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 text-white">
              <div>
                <span className="text-[#ECC15A] text-xs font-bold tracking-[0.25em] uppercase block mb-1.5 sm:mb-2 font-mono">
                  Masterpiece Highlight
                </span>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase max-w-xl leading-tight font-headline">
                  We Give Your Favorites<br />
                  <span className="text-white/80 font-light italic font-display">A Dignified Second Life.</span>
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90">
                  <span className="block text-[10px] text-white/60 font-mono uppercase">Featured Work</span>
                  <span className="font-bold">Air Jordan &amp; Vachetta Spa</span>
                </div>
                <a 
                  href="#before-after" 
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#C2101C] hover:bg-[#A80B15] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg font-label"
                >
                  Buka Interactive Slider →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — INTERACTIVE BEFORE → AFTER HERO SLIDER                               */}
      {/* ========================================================================= */}
      <section 
        id="before-after" 
        className="py-12 sm:py-18 md:py-24 bg-[#F6FBF5] border-y border-[#DCE6DD] relative select-none"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="inline-block text-xs font-mono font-bold tracking-[0.25em] text-[#143826] uppercase mb-3 px-3.5 py-1 rounded-full bg-white border border-[#DCE6DD]">
              Transformation Centerpiece
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143826] uppercase font-headline">
              See The Difference.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#55695E] mt-3 font-body">
              Geser tuas pembanding interaktif di bawah untuk melihat mikroskopis hasil deep cleaning &amp; unyellowing sol oleh artisan RCR.
            </p>
          </div>

          {/* Before After Interactive Frame */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-3 sm:p-5 md:p-6 rounded-3xl shadow-xl border border-[#DCE6DD]">
              
              <div 
                ref={containerRef}
                className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[440px] md:h-[540px] cursor-ew-resize bg-[#0B1A13]"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER IMAGE (Background Base) */}
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDllYfG9tAgGNVdMi0fjaGIS0ki0IGCf9ORYR94ChCRqFvuf3otPhfqiKD1aFLm7r8rsjYeGmmlM6Mr962TvMMSoyvvuKNV92UH-8_ksdMJAeWfTdLp1cC5w8IV6USsg6FFfvCYsoLgJTM_LW6Ulrk5duEUFN_v2SuhuMsn1sk0FHpn8fkat_q5Qxe74WhMDVRE4C2yAlsMU1_Cwr58aruJIYDgTw8xNRxvJJcuzWnvAAawWPRDdWYg" 
                  alt="After Clean Yeezy Restoration" 
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />
                <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-10 px-3 sm:px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  AFTER · HASIL AKHIR
                </div>

                {/* BEFORE IMAGE LAYER (Clipped overlay with exact pixel alignment) */}
                <div 
                  className="absolute top-0 left-0 h-full overflow-hidden z-10"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDllYfG9tAgGNVdMi0fjaGIS0ki0IGCf9ORYR94ChCRqFvuf3otPhfqiKD1aFLm7r8rsjYeGmmlM6Mr962TvMMSoyvvuKNV92UH-8_ksdMJAeWfTdLp1cC5w8IV6USsg6FFfvCYsoLgJTM_LW6Ulrk5duEUFN_v2SuhuMsn1sk0FHpn8fkat_q5Qxe74WhMDVRE4C2yAlsMU1_Cwr58aruJIYDgTw8xNRxvJJcuzWnvAAawWPRDdWYg" 
                    alt="Before Dirty Yeezy" 
                    style={{ 
                      width: sliderWidth ? `${sliderWidth}px` : '100%',
                      maxWidth: 'none'
                    }}
                    className="h-full object-cover object-left pointer-events-none filter sepia-[0.35] brightness-90"
                  />
                  <div className="absolute top-3 sm:top-5 left-3 sm:left-5 z-20 px-3 sm:px-4 py-1.5 rounded-full bg-[#C2101C]/90 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                    BEFORE · KONDISI AWAL
                  </div>
                </div>

                {/* SLIDER DIVIDER LINE & GOLD HANDLE */}
                <div 
                  className="absolute top-0 bottom-0 z-30 w-1 bg-[#ECC15A] flex items-center justify-center -translate-x-1/2 shadow-[0_0_12px_rgba(0,0,0,0.4)]"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#ECC15A] text-[#143826] shadow-2xl flex items-center justify-center font-extrabold text-sm border-2 border-white pointer-events-none">
                    <span className="material-symbols-outlined text-base sm:text-xl font-bold">
                      unfold_more
                    </span>
                  </div>
                </div>

              </div>

              {/* Caption & Action bar below slider */}
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 sm:pt-5 border-t border-[#DCE6DD]/70 px-1 sm:px-2">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C2101C] font-mono mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#C2101C]"></span>
                    Case #RC-892 · Footwear Restoration
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#143826] font-headline">
                    Adidas Yeezy Boost 350 V2 Cream White
                  </h3>
                  <p className="text-xs text-[#55695E] mt-0.5 font-body">
                    Penanganan: Deep extraction upper, unyellowing sol BOOST, &amp; steril Ozon Chamber anti-jamur.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <span className="text-[10px] text-[#71857A] font-mono block uppercase">Paket Pengerjaan</span>
                    <span className="text-sm font-bold text-[#143826] font-mono">Rp 90.000 (Premium Clean)</span>
                  </div>
                  <Link 
                    to="/layanan" 
                    className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-[#143826] hover:bg-[#0B1A13] text-white font-bold text-xs tracking-wider uppercase transition-all shadow font-label"
                  >
                    Lihat Tarif Paket →
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 & 04 — CASE STUDY IN-DEPTH WITH INTEGRATED NON-STICKY CATEGORY FILTER  */}
      {/* ========================================================================= */}
      {/* 
          AS REQUESTED:
          1. Category bar is NOT sticky (tidak ikut turun saat scroll)
          2. The left side is "Case Study In-Depth" & "From Worn to Ready."
          3. The subtitle is removed
          4. Category filter buttons sit alongside
      */}
      <section className="py-12 sm:py-16 md:py-24 bg-white border-b border-[#DCE6DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Integrated Header: Left "Case Study In-Depth" / Right Categories */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-[#DCE6DD]">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C2101C] uppercase block mb-1.5 sm:mb-2">
                Case Study In-Depth
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143826] uppercase font-headline">
                From Worn to Ready.
              </h2>
            </div>

            {/* Category Filter Buttons (Non-sticky, wraps nicely on tablet/mobile) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-xs font-bold tracking-wider uppercase">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-[#143826] text-white shadow-sm font-bold'
                      : 'bg-white hover:bg-[#EEF5EF] text-[#55695E] hover:text-[#143826] border border-[#DCE6DD]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Case 01: Image Left, Editorial Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-24 pb-14 sm:pb-20 border-b border-[#DCE6DD]">
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden bg-[#EEF5EF] border border-[#DCE6DD] group shadow-lg">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5iL-nYx2kyCq4bkP9MOqFDe-KkNJ-guOjAWmu-I4Ebk-OmCKgxIK6i6rBF3qcdXDc5jqsDSg2pVrBeltBCU78SSCqiUk2qP9enIHYz7oVUCI7UnLm-R-SYU5k-p-qpoR04EKLWnK2xzUgzX23rsO6dJw4teP0byAtezgB1L0tBWrrIh7d0tbfilJpK4u25LYNacZl49uXr_fMInUjuZeOE4pwRl7ngtyLOrt11BkOdeM88Oufnybo" 
                  alt="Footwear &amp; Leather Restoration" 
                  className="w-full h-[280px] sm:h-[380px] md:h-[480px] object-cover object-center transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold text-[#143826] uppercase border border-[#DCE6DD]">
                  Case #01 · Footwear &amp; Vibram
                </div>
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-[#0B1A13]/90 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-[#ECC15A] uppercase">
                  Durasi: 7 Hari Kerja
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#143826] uppercase">
                01 / SHOE RESTORATION &amp; VIBRAM RECRAFT
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#143826] leading-tight uppercase font-headline">
                Red Wing Heritage Boots: Re-Welt &amp; Italian Vibram Christy Soles
              </h3>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3.5 sm:py-4 border-y border-[#DCE6DD] text-xs">
                <div>
                  <span className="block text-[10px] font-mono text-[#71857A] uppercase font-bold">From:</span>
                  <span className="font-medium text-[#2F3E36]">Sol mengeras, retak, &amp; welt putus</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-[#71857A] uppercase font-bold">Treatment:</span>
                  <span className="font-medium text-[#2F3E36]">Bespoke Vibram Fit + Stitching</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-[#71857A] uppercase font-bold">Result:</span>
                  <span className="font-bold text-[#143826]">Garansi Lekat 60 Hari</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#465A50] leading-relaxed font-body">
                Pembongkaran sol mati dan pembersihan sisa lem lama. Dilengkapi pemasangan shank pelindung arkus kaki serta jahitan nilon tahan abrasi tinggi dengan benang lilin tahan air.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => onOpenConsultation({ title: 'Red Wing Re-Welt & Vibram Christy Soles', category: 'Sepatu / Footwear' })}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#143826] hover:bg-[#0B1A13] text-white font-bold text-xs uppercase tracking-wider transition-all shadow font-label"
                >
                  Konsultasi Jenis Sol →
                </button>
                <span className="text-xs text-[#71857A] font-mono">Tarif: Rp 450.000</span>
              </div>
            </div>
          </div>

          {/* Case 02: Editorial Content Left, Image Right (Reversed Rhythm) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#C2101C] uppercase">
                02 / LUXURY BAG RESTORATION
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#143826] leading-tight uppercase font-headline">
                Hermès Birkin Togo Leather: Re-Coloring, Corner Re-Piping &amp; Hardware Polish
              </h3>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 py-3.5 sm:py-4 border-y border-[#DCE6DD] text-xs">
                <div>
                  <span className="block text-[10px] font-mono text-[#71857A] uppercase font-bold">From:</span>
                  <span className="font-medium text-[#2F3E36]">Sudut robek, warna pudar &amp; kusam</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-[#71857A] uppercase font-bold">Treatment:</span>
                  <span className="font-medium text-[#2F3E36]">Patina Spa + Corner Re-Piping</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-[#71857A] uppercase font-bold">Result:</span>
                  <span className="font-bold text-[#143826]">Warna &amp; Tekstur Asli</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#465A50] leading-relaxed font-body">
                Pencampuran pigmen warna presisi mikroskopis sesuai tone asli kulit Togo. Re-piping sudut tas menggunakan material penyangga fleksibel tanpa mengubah struktur asli tas.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => onOpenConsultation({ title: 'Hermès Bag Patina Spa & Re-Piping', category: 'Tas Mewah / Handbag' })}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#143826] hover:bg-[#0B1A13] text-white font-bold text-xs uppercase tracking-wider transition-all shadow font-label"
                >
                  Lihat Luxury Bag Spa →
                </button>
                <span className="text-xs text-[#71857A] font-mono">Mulai Rp 180.000</span>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden bg-[#EEF5EF] border border-[#DCE6DD] group shadow-lg">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5IWYe6xKLsrDbDKXGbLW2RBqs3RGWp2sKVrm4dfCZ1uswTVgBH_ePUIYgFo4qO9iMjiKATY0CHyqPRVSUD5c3x-exI3rpQZYNhblbEIw_lx304GlOFPrYAaDkBvIc-LdKT10GKKuMRtaLlLUbCGONTYyDm4rGQuR-JUD_GBqBncH0W2bcsAHWsXjFasbrP1njtqP2eKK_m1y_3R4B4HmV_qzT5O6wcv6SXgfIlJWBJKVB7_qWwaXH" 
                  alt="Handbag Leather Detailing" 
                  className="w-full h-[280px] sm:h-[380px] md:h-[480px] object-cover object-right transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold text-[#143826] uppercase border border-[#DCE6DD]">
                  Case #02 · Luxury Handbag
                </div>
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-[#0B1A13]/90 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-[#ECC15A] uppercase">
                  Standar Saphir Médaille d'Or
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — REPAIR & RESTORATION (DRAMATIC DEEP FOREST DARK SHOWCASE)            */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#0B1A13] text-white relative overflow-hidden">
        {/* Ambient subtle glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#143826]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C2101C]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-10 sm:mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#ECC15A] uppercase block mb-3">
              Structural Engineering &amp; Patina Craft
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight uppercase leading-[1.05] font-headline">
              Damaged Doesn't<br></br> 
              Mean Done.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/70 mt-3 font-body">
              Repair. Restore. Keep wearing what you love. Kami percaya setiap sepatu, koper, dan tas favorit Anda berhak mendapatkan kesempatan hidup kedua.
            </p>
          </div>

          {/* 4 Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* Pillar 01: Sole Swap & Vibram */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ECC15A]/60 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#143826]/70 border border-white/10 flex items-center justify-center mb-6 text-[#ECC15A]">
                  <span className="material-symbols-outlined text-2xl">hardware</span>
                </div>
                <span className="text-[10px] font-mono text-[#ECC15A] font-bold tracking-widest uppercase block mb-1">
                  Pillar 01
                </span>
                <h3 className="text-xl font-bold uppercase mb-2 font-headline">Vibram Sole Swap</h3>
                <p className="text-xs text-white/60 leading-relaxed mb-6 font-body">
                  Bongkar sol getas, presisi thermo-press suhu terkontrol, dan kuncian jahitan tangan sol Blake/Goodyear.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white/80">Mulai Rp 350.000</span>
                <span className="text-[#ECC15A] font-bold">GARANSI 60 HARI</span>
              </div>
            </div>

            {/* Pillar 02: Repaint & Unyellowing */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ECC15A]/60 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#143826]/70 border border-white/10 flex items-center justify-center mb-6 text-[#ECC15A]">
                  <span className="material-symbols-outlined text-2xl">format_paint</span>
                </div>
                <span className="text-[10px] font-mono text-[#ECC15A] font-bold tracking-widest uppercase block mb-1">
                  Pillar 02
                </span>
                <h3 className="text-xl font-bold uppercase mb-2 font-headline">Repaint &amp; Patina</h3>
                <p className="text-xs text-white/60 leading-relaxed mb-6 font-body">
                  Pencampuran pigmen fleksibel anti-kaku yang meresap ke pori-pori kulit tanpa cracking atau mengelupas.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white/80">Mulai Rp 180.000</span>
                <span className="text-[#ECC15A] font-bold">ANTI-CRACK</span>
              </div>
            </div>

            {/* Pillar 03: Luxury Leather Spa & Hardware */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ECC15A]/60 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#143826]/70 border border-white/10 flex items-center justify-center mb-6 text-[#ECC15A]">
                  <span className="material-symbols-outlined text-2xl">diamond</span>
                </div>
                <span className="text-[10px] font-mono text-[#ECC15A] font-bold tracking-widest uppercase block mb-1">
                  Pillar 03
                </span>
                <h3 className="text-xl font-bold uppercase mb-2 font-headline">Luxury Leather Spa</h3>
                <p className="text-xs text-white/60 leading-relaxed mb-6 font-body">
                  Pembersihan jamur kulit, hidrasi nutrisi minyak alami mink oil, dan deburring polishing hardware emas/perak.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white/80">Mulai Rp 160.000</span>
                <span className="text-[#ECC15A] font-bold">HERMÈS &amp; LV SAFE</span>
              </div>
            </div>

            {/* Pillar 04: Koper & Luggage Emergency */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ECC15A]/60 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#143826]/70 border border-white/10 flex items-center justify-center mb-6 text-[#ECC15A]">
                  <span className="material-symbols-outlined text-2xl">luggage</span>
                </div>
                <span className="text-[10px] font-mono text-[#ECC15A] font-bold tracking-widest uppercase block mb-1">
                  Pillar 04
                </span>
                <h3 className="text-xl font-bold uppercase mb-2 font-headline">Luggage Repair</h3>
                <p className="text-xs text-white/60 leading-relaxed mb-6 font-body">
                  Ganti roda bearing karet senyap 360°, pelurusan trolley koper bengkok, kunci TSA 007, dan penambalan retak bodi.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white/80">Mulai Rp 120.000</span>
                <span className="text-[#ECC15A] font-bold">SILENT BEARING</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 — BEHIND THE CRAFT (ATELIER PROCESS & AUTHENTIC WORKSHOP)              */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-28 bg-white border-b border-[#DCE6DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#143826] uppercase block mb-2 px-3 py-1 rounded-full bg-[#EEF5EF] border border-[#DCE6DD] inline-block">
              Authentic Workshop Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143826] uppercase font-headline">
              Behind The Restoration.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#55695E] mt-3 font-body">
              Setiap transformasi dimulai dari ketelitian tingkat tinggi, standar higienis tanpa kompromi, dan penghargaan mendalam terhadap material asli.
            </p>
          </div>

          {/* Process 5-Step Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F6FBF5] border border-[#DCE6DD] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-extrabold text-[#C2101C] font-mono mb-3">01</div>
              <h3 className="text-base font-bold text-[#143826] uppercase mb-2 font-headline">Hand Cleaning</h3>
              <p className="text-xs text-[#55695E] leading-relaxed font-body">
                Penyikatan bertahap menggunakan sikat bulu kuda Jerman sesuai kelembutan material upper.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#F6FBF5] border border-[#DCE6DD] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-extrabold text-[#C2101C] font-mono mb-3">02</div>
              <h3 className="text-base font-bold text-[#143826] uppercase mb-2 font-headline">Detailing &amp; pH</h3>
              <p className="text-xs text-[#55695E] leading-relaxed font-body">
                Pembersihan mikroskopis sudut jahitan, eyestay, dan penetralan residu sabun korosif.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#F6FBF5] border border-[#DCE6DD] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-extrabold text-[#C2101C] font-mono mb-3">03</div>
              <h3 className="text-base font-bold text-[#143826] uppercase mb-2 font-headline">Hand Stitching</h3>
              <p className="text-xs text-[#55695E] leading-relaxed font-body">
                Jahitan tangan melingkar pada alur sol menggunakan benang lilin tahan air max thread 60D.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#F6FBF5] border border-[#DCE6DD] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-extrabold text-[#C2101C] font-mono mb-3">04</div>
              <h3 className="text-base font-bold text-[#143826] uppercase mb-2 font-headline">Repaint Match</h3>
              <p className="text-xs text-[#55695E] leading-relaxed font-body">
                Pencampuran pigmen warna presisi 1:1 langsung oleh artisan senior di studio Semarang.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#F6FBF5] border border-[#DCE6DD] hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-extrabold text-[#C2101C] font-mono mb-3">05</div>
              <h3 className="text-base font-bold text-[#143826] uppercase mb-2 font-headline">Finishing &amp; QC</h3>
              <p className="text-xs text-[#55695E] leading-relaxed font-body">
                Sterilisasi Ozon Chamber 15 menit, water-repellent coating, dan pengecekan ketat QC sebelum serah terima.
              </p>
            </div>

          </div>

          {/* Workshop Atmosphere Callout */}
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-[#EEF5EF] border border-[#DCE6DD] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-white border border-[#DCE6DD] flex items-center justify-center text-[#143826] shadow-sm shrink-0">
                <span className="material-symbols-outlined text-2xl sm:text-3xl text-[#143826]">
                  storefront
                </span>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#143826] font-headline">
                  Buka Loket Atelier &amp; Sol Bar Semarang Setiap Hari
                </h4>
                <p className="text-xs text-[#55695E] mt-0.5 font-body">
                  Kunjungi langsung workshop pusat di Jl. Hasanudin No. 48 atau gunakan layanan jemput-antar gratis se-Semarang.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a 
                href="https://wa.me/6281234567890?text=Halo%20Artisan%20RCR,%20saya%20mau%20tanya%20jadwal%20workshop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#C2101C] hover:bg-[#A80B15] text-white font-bold text-xs uppercase tracking-wider transition-all shadow font-label"
              >
                Tanya Jadwal Workshop →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07 — ALL WORK (FULL EDITORIAL MASONRY GALLERY)                            */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#F6FBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#143826] uppercase block mb-2">
                Curated Visual Archive
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#143826] uppercase font-headline">
                Explore All Our Work.
              </h2>
            </div>
            <div className="text-xs font-mono text-[#55695E]">
              Menampilkan {filteredArchive.length} Arsip Pilihan dari 12.500+ Pengerjaan Berhasil
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArchive.map((item) => (
              <div 
                key={item.id}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#DCE6DD] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-60 sm:h-72 md:h-80 overflow-hidden bg-[#EEF5EF] relative">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-center transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-white uppercase">
                    {item.price}
                  </span>
                </div>
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#71857A] mb-2 uppercase">
                      <span>{item.tag}</span>
                      <span className="text-[#C2101C] font-bold">{item.badge}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#143826] uppercase font-headline">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#55695E] mt-1.5 leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#DCE6DD]">
                    <button 
                      onClick={() => onOpenConsultation({ title: `Treatment Serupa: ${item.title}` })}
                      className="w-full py-2 px-3 rounded-lg bg-[#F8FAF9] hover:bg-[#143826] hover:text-white text-[#143826] font-label text-xs uppercase font-bold text-center block transition-all border border-[#DCE6DD]"
                    >
                      Pesan Treatment Serupa &gt;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action */}
          <div className="mt-10 sm:mt-14 text-center">
            <button 
              onClick={() => onOpenConsultation({ title: 'Konsultasi Arsip Portfolio Galeri' })}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-[#EEF5EF] text-[#143826] font-bold text-xs uppercase tracking-widest border border-[#DCE6DD] shadow-sm hover:shadow transition-all font-label"
            >
              <span>Buka 42+ Arsip Dokumentasi Foto Lainnya</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08 — FINAL CTA                                                            */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF5EF] border border-[#DCE6DD] text-xs font-mono font-bold text-[#143826] uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C2101C] animate-pulse"></span>
            Ready to Restore?
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#143826] uppercase leading-tight font-headline">
            Like What You See?<br />
            <span className="text-[#55695E] font-light italic font-display">Your favorite deserves another life.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#465A50] mt-4 sm:mt-6 max-w-xl mx-auto leading-relaxed font-body">
            Kirimkan foto barang Anda sekarang untuk diagnosa kondisi awal dan estimasi biaya gratis tanpa komitmen oleh artisan RCR Indonesia.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/layanan" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#143826] hover:bg-[#0B1A13] text-white font-bold text-xs tracking-widest uppercase transition-all shadow-lg hover:shadow-xl font-label"
            >
              Pilih Layanan &amp; Tarif Resmi →
            </Link>

            <a 
              href="https://wa.me/6281234567890?text=Halo%20Artisan%20RCR,%20saya%20mau%20WhatsApp%20Diagnosa%20Cepat" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#C2101C] hover:bg-[#A80B15] text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl font-label"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>WhatsApp Diagnosa Cepat</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 sm:mt-14 pt-8 border-t border-[#DCE6DD] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <span className="block text-lg sm:text-xl font-extrabold text-[#143826] font-headline">60 Hari</span>
              <span className="text-[10px] sm:text-[11px] text-[#71857A] uppercase font-mono">Garansi Lem &amp; Sol</span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold text-[#143826] font-headline">100% Asli</span>
              <span className="text-[10px] sm:text-[11px] text-[#71857A] uppercase font-mono">Original Vibram Rubber</span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold text-[#143826] font-headline">pH Neutral</span>
              <span className="text-[10px] sm:text-[11px] text-[#71857A] uppercase font-mono">Leather Safe Chemistry</span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold text-[#143826] font-headline">Semarang</span>
              <span className="text-[10px] sm:text-[11px] text-[#71857A] uppercase font-mono">6 Titik Outlet Semarang</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
