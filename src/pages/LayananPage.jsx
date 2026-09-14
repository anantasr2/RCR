import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function LayananPage() {
  const { onOpenConsultation } = useOutletContext();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Menu' },
    { id: 'shoes', label: '👞 01. Sepatu & Sol' },
    { id: 'bags', label: '👜 02. Tas Mewah' },
    { id: 'luggage', label: '🧳 03. Koper & Travel' },
    { id: 'leather', label: '🧥 04. Jaket & Aksesoris' },
    { id: 'packages', label: '✨ 05. Paket Bundling' },
  ];

  const vibramHeroImg = "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="w-full bg-[#F8FAF9]">
      {/* TITLE BAR & WORKSHOP STATEMENT */}
      <section className="border-b border-[#D1DDD4] bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-label uppercase text-[#2E5C43] tracking-widest font-bold">
              <span>Revive Atelier Tariffs 2026</span>
              <span>•</span>
              <span>Authentic Italian Vibram &amp; French Saphir Protocols</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143826] tracking-tight uppercase leading-tight">
              Katalog Layanan &amp; Restorasi Revive
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#4F6056] font-body leading-relaxed">
              Formulasi pH-seimbang, rekondisi sol jahitan tangan Goodyear/Blake, pembersihan mikroskopis suede &amp; kulit mewah tanpa senyawa kimia korosif.
            </p>
          </div>

          <div className="px-4 py-3 rounded-xl border border-[#D1DDD4] shadow-sm flex items-center gap-3 shrink-0 self-start md:self-auto bg-white">
            <div className="h-10 w-10 rounded-full bg-[#EBF4EE] text-[#143826] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <div>
              <div className="font-label text-xs font-bold text-[#143826]">
                GARANSI PENGERJAAN 60 HARI
              </div>
              <div className="text-[11px] text-[#4F6056] font-body">
                Lem Press Hidrolik &amp; Jahit Sol Terjamin
              </div>
            </div>
          </div>
        </div>

        {/* CENTERED CATEGORY FILTER TABS (Search Bar removed as requested) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#D1DDD4]/70">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-4 sm:py-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full font-label text-xs sm:text-sm tracking-wide transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#143826] text-white font-bold shadow-md scale-[1.02]'
                    : 'bg-white text-[#4F6056] border border-[#D1DDD4] hover:bg-[#EBF4EE] font-semibold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CATALOG CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* ========================================================== */}
        {/* CATEGORY 01: FOOTWEAR ATELIER & RECRAFTING */}
        {/* ========================================================== */}
        {(activeTab === 'all' || activeTab === 'shoes') && (
          <section className="space-y-6 sm:space-y-8" id="cat-shoes">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-[#143826] pb-3 gap-2">
              <div>
                <span className="font-label text-[11px] sm:text-xs uppercase tracking-widest text-[#2E5C43] font-bold">
                  CATALOGUE DIVISION 01
                </span>
                <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#143826] uppercase">
                  Sepatu &amp; Sol: Restorasi, Cleaning &amp; Vibram Recraft
                </h2>
              </div>
              <span className="font-label text-xs text-[#4F6056]">
                Formula Standar Museum • Saphir Médaille d'Or
              </span>
            </div>

            {/* VIBRAM SIGNATURE HERO CARD */}
            <div className="bg-white border border-[#D1DDD4] rounded-2xl p-5 sm:p-7 lg:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden border border-[#D1DDD4]">
                    <img
                      src={vibramHeroImg}
                      alt="Vibram Recrafting Workshop"
                      className="w-full h-full object-cover object-center"
                    />
                    <span className="absolute top-3 left-3 bg-[#143826] text-white font-label text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                      Artisan Speciality
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-label text-[#4F6056]">
                    <span>Origin: Vibram® Albizzate, Italia</span>
                    <span className="font-bold text-[#143826]">Garansi Rekat 60 Hari</span>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="tag-leather px-2.5 py-0.5 rounded text-[11px] font-label font-semibold text-[#2E5C43]">
                      Original Rubber Compound
                    </span>
                    <span className="text-xs font-label text-[#4F6056]">
                      Turnaround: 7 — 10 Hari Kerja
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#143826] uppercase">
                    Custom Vibram Sole Recrafting (Italian Outsole)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4F6056] font-body leading-relaxed">
                    Bongkar sol mati/getas hingga ke shank dan cork midsole. Dipasangkan kembali dengan unit sol Vibram original Italia pilihan Anda (Christy Morflex, Ripple, Lug Sole, atau Commando). Lengkap dengan jahitan nylon wax tahan abrasi tinggi.
                  </p>

                  {/* 3-Step Atelier Process */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 bg-[#F4F8F5] rounded-xl border border-[#D1DDD4]/70">
                      <div className="font-label text-[11px] font-bold text-[#C2101C]">01. DE-GLUE</div>
                      <div className="text-[11px] text-[#4F6056] mt-0.5 font-body">Pembersihan residu lem lama</div>
                    </div>
                    <div className="p-3 bg-[#F4F8F5] rounded-xl border border-[#D1DDD4]/70">
                      <div className="font-label text-[11px] font-bold text-[#C2101C]">02. BESPOKE FIT</div>
                      <div className="text-[11px] text-[#4F6056] mt-0.5 font-body">Penyesuaian lekuk welt &amp; sol</div>
                    </div>
                    <div className="p-3 bg-[#F4F8F5] rounded-xl border border-[#D1DDD4]/70">
                      <div className="font-label text-[11px] font-bold text-[#C2101C]">03. PRESS &amp; STITCH</div>
                      <div className="text-[11px] text-[#4F6056] mt-0.5 font-body">Thermo-press &amp; kuncian jahitan</div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 border-t border-[#D1DDD4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-label text-[#4F6056] uppercase block font-semibold">
                        Rentang Biaya Recrafting
                      </span>
                      <span className="font-headline text-2xl font-bold text-[#143826]">
                        Rp 350.000 — Rp 650.000
                      </span>
                    </div>
                    <button
                      onClick={() => onOpenConsultation({ title: 'Vibram Sole Recrafting', category: 'Sepatu / Footwear' })}
                      className="px-6 py-2.5 rounded-full bg-[#143826] hover:bg-[#1E4B34] text-white font-label text-xs font-bold tracking-wide transition-all shadow inline-flex items-center justify-center gap-2"
                    >
                      <span>Pilih Sol &amp; Konsultasi</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CURATED LIST - CLEANING & TREATMENT */}
            <div className="bg-white border border-[#D1DDD4] rounded-2xl p-5 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="font-headline text-xl sm:text-2xl font-bold text-[#143826] uppercase">
                  Paket Perawatan &amp; Pembersihan Sepatu
                </h4>
                <span className="text-xs font-label text-[#2E5C43] font-semibold">
                  Deep Clean • Suede • Leather Safe
                </span>
              </div>

              <div className="divide-y divide-[#D1DDD4]/80">
                {/* Surface Cleaning Express */}
                <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-headline font-bold text-[#143826] text-base group-hover:text-[#C2101C] transition-colors">
                        Surface Cleaning Express
                      </span>
                      <span className="font-label text-[11px] px-2 py-0.5 rounded bg-[#EBF4EE] text-[#143826]">
                        1-2 Hari
                      </span>
                    </div>
                    <p className="text-xs text-[#4F6056] font-body">
                      Touch-up cepat kotoran luar pada upper dan pinggiran midsole karet harian.
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0">
                    <span className="font-label font-bold text-[#143826] text-base">Rp 45.000</span>
                    <button
                      onClick={() => onOpenConsultation({ title: 'Surface Cleaning Express', category: 'Sepatu / Footwear' })}
                      className="px-4 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs font-semibold transition"
                    >
                      Pilih Layanan
                    </button>
                  </div>
                </div>

                {/* Ultimate Cleaning Regular */}
                <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group bg-[#F4F8F5]/80 -mx-2 sm:-mx-4 px-3 sm:px-4 rounded-xl">
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-headline font-bold text-[#143826] text-base group-hover:text-[#C2101C] transition-colors">
                        Ultimate Cleaning Regular
                      </span>
                      <span className="font-label text-[10px] px-2 py-0.5 rounded bg-[#2E5C43] text-white uppercase font-bold tracking-wide">
                        Paling Populer
                      </span>
                      <span className="font-label text-[11px] text-[#4F6056]">2-3 Hari</span>
                    </div>
                    <p className="text-xs text-[#4F6056] font-body">
                      Deep clean menyeluruh: upper canvas/kulit, pelepasan tali, midsole, outsole, dan pelembab alami.
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0">
                    <span className="font-label font-bold text-[#C2101C] text-base">Rp 55.000</span>
                    <button
                      onClick={() => onOpenConsultation({ title: 'Ultimate Cleaning Regular', category: 'Sepatu / Footwear' })}
                      className="px-4 py-1.5 rounded-full bg-[#C2101C] hover:bg-[#A80B15] text-white font-label text-xs font-semibold transition shadow-sm"
                    >
                      Pilih Layanan
                    </button>
                  </div>
                </div>

                {/* Ultimate Cleaning Hard */}
                <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-headline font-bold text-[#143826] text-base group-hover:text-[#C2101C] transition-colors">
                        Ultimate Cleaning Hard Condition
                      </span>
                      <span className="font-label text-[11px] px-2 py-0.5 rounded bg-[#EBF4EE] text-[#143826]">
                        3-4 Hari
                      </span>
                    </div>
                    <p className="text-xs text-[#4F6056] font-body">
                      Penanganan khusus kerak tanah mengering, noda oli jalanan, dan pembersihan pasca banjir.
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0">
                    <span className="font-label font-bold text-[#143826] text-base">Rp 75.000</span>
                    <button
                      onClick={() => onOpenConsultation({ title: 'Ultimate Cleaning Hard Condition', category: 'Sepatu / Footwear' })}
                      className="px-4 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs font-semibold transition"
                    >
                      Pilih Layanan
                    </button>
                  </div>
                </div>

                {/* Premium Clean & Insole Extraction */}
                <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-headline font-bold text-[#143826] text-base group-hover:text-[#C2101C] transition-colors">
                        Premium Clean &amp; Insole Extraction
                      </span>
                      <span className="font-label text-[11px] px-2 py-0.5 rounded bg-[#EBF4EE] text-[#143826]">
                        3-5 Hari
                      </span>
                    </div>
                    <p className="text-xs text-[#4F6056] font-body">
                      Ekstraksi noda keringat bagian insole, penyikatan brush bulu kuda untuk suede, dan sterilisasi jamur.
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0">
                    <span className="font-label font-bold text-[#143826] text-base">Rp 90.000</span>
                    <button
                      onClick={() => onOpenConsultation({ title: 'Premium Clean & Insole Extraction', category: 'Sepatu / Footwear' })}
                      className="px-4 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs font-semibold transition"
                    >
                      Pilih Layanan
                    </button>
                  </div>
                </div>

                {/* Sneaker Detox Ozone Chamber */}
                <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-headline font-bold text-[#143826] text-base group-hover:text-[#C2101C] transition-colors">
                        Sneaker Detox Ozone Chamber
                      </span>
                      <span className="font-label text-[11px] px-2 py-0.5 rounded bg-[#E3EFE7] text-[#2E5C43] font-bold">
                        Anti-Bakterial 99.9%
                      </span>
                    </div>
                    <p className="text-xs text-[#4F6056] font-body">
                      Dekontaminasi bau kronis dan pemusnahan spora jamur menggunakan kabin ozon medis tertutup.
                    </p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0">
                    <span className="font-label font-bold text-[#143826] text-base">Rp 150.000</span>
                    <button
                      onClick={() => onOpenConsultation({ title: 'Sneaker Detox Ozone Chamber', category: 'Sepatu / Footwear' })}
                      className="px-4 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs font-semibold transition"
                    >
                      Pilih Layanan
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RESTORATION & REPAINT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {/* Unyellowing */}
              <div className="bg-white border border-[#D1DDD4] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#2E5C43] transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#2E5C43] text-2xl">wb_sunny</span>
                    <span className="font-label text-[11px] text-[#2E5C43] bg-[#E3EFE7] px-2 py-0.5 rounded font-semibold">
                      UV Chamber
                    </span>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-[#143826] uppercase">
                    Whitening / Unyellowing
                  </h4>
                  <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                    Oksidasi sol karet diangkat menggunakan hidrogen khusus dan radiasi UV controlled tanpa merusak kelenturan karet outsole.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#D1DDD4] flex items-center justify-between">
                  <span className="font-label font-bold text-[#143826] text-base">Rp 100.000</span>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Whitening / Unyellowing UV', category: 'Sepatu / Footwear' })}
                    className="font-label text-xs font-bold text-[#C2101C] hover:underline"
                  >
                    Pilih →
                  </button>
                </div>
              </div>

              {/* Repaint Canvas & Leather */}
              <div className="bg-white border border-[#D1DDD4] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#2E5C43] transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#C2101C] text-2xl">format_paint</span>
                    <span className="font-label text-[11px] text-[#C2101C] bg-[#FDE8E9] px-2 py-0.5 rounded font-semibold">
                      Anti-Cracking
                    </span>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-[#143826] uppercase">
                    Repaint Canvas / Suede / Leather
                  </h4>
                  <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                    Pencampuran pigmen warna presisi sesuai tone asli fabrik. Fleksibel, anti-kaku, dan menyatu alami ke pori-pori bahan.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#D1DDD4] flex items-center justify-between">
                  <span className="font-label font-bold text-[#143826] text-base">Mulai Rp 180.000</span>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Repaint Canvas / Suede / Leather', category: 'Sepatu / Footwear' })}
                    className="font-label text-xs font-bold text-[#C2101C] hover:underline"
                  >
                    Pilih →
                  </button>
                </div>
              </div>

              {/* Jahit Sol Manual */}
              <div className="bg-white border border-[#D1DDD4] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#2E5C43] transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#143826] text-2xl">join_inner</span>
                    <span className="font-label text-[11px] text-[#143826] bg-[#E5EFE8] px-2 py-0.5 rounded font-semibold">
                      Wax Thread 60D
                    </span>
                  </div>
                  <h4 className="font-headline text-lg font-bold text-[#143826] uppercase">
                    Stitching / Jahit Sol Tangan
                  </h4>
                  <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                    Kuncian jahitan tangan melingkar pada alur outsole menggunakan benang berbalut lilin alami anti-lapuk dan anti-air.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#D1DDD4] flex items-center justify-between">
                  <span className="font-label font-bold text-[#143826] text-base">Rp 85.000</span>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Stitching / Jahit Sol Tangan', category: 'Sepatu / Footwear' })}
                    className="font-label text-xs font-bold text-[#C2101C] hover:underline"
                  >
                    Pilih →
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================== */}
        {/* CATEGORY 02: LUXURY LEATHER & HANDBAGS */}
        {/* ========================================================== */}
        {(activeTab === 'all' || activeTab === 'bags') && (
          <section className="space-y-6 sm:space-y-8" id="cat-bags">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-[#143826] pb-3 gap-2">
              <div>
                <span className="font-label text-[11px] sm:text-xs uppercase tracking-widest text-[#2E5C43] font-bold">
                  CATALOGUE DIVISION 02
                </span>
                <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#143826] uppercase">
                  Luxury Handbags &amp; Leather Spa
                </h2>
              </div>
              <span className="font-label text-xs text-[#4F6056]">
                Chanel • Hermès • Louis Vuitton • Dior • Gucci • Coach
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Feature Spotlight Card */}
              <div className="lg:col-span-5 bg-white border border-[#D1DDD4] rounded-2xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#C2101C] text-3xl">diamond</span>
                    <span className="font-label text-[10px] uppercase font-bold tracking-widest bg-[#F4F8F5] border border-[#D1DDD4] px-2.5 py-1 rounded text-[#143826]">
                      Boutique Treatment
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#143826] uppercase">
                    Luxury Leather Bag Spa &amp; Patina Nourishing
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4F6056] font-body leading-relaxed">
                    Perawatan hidrasi menyeluruh untuk kulit halus: Lambskin, Box Calf, Epsom, Clemence, hingga Vachetta leather. Mengangkat daki pada handle, menghilangkan debu jahitan mikroskopis, serta menghidupkan kembali kilau alami tanpa mengubah tekstur kulit.
                  </p>
                  <ul className="space-y-2 text-xs text-[#4F6056] font-body pt-2 border-t border-[#D1DDD4]/60">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2E5C43] text-base">check_circle</span>
                      <span>Restorasi kelembutan dan pencegahan kulit pecah-pecah</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2E5C43] text-base">check_circle</span>
                      <span>Polishing logam pengait hardware emas/perak</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2E5C43] text-base">check_circle</span>
                      <span>Termasuk deburring &amp; kantung simpan atelier</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-[#D1DDD4] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-label text-[#4F6056] uppercase block font-semibold">
                      Mulai Dari
                    </span>
                    <span className="font-headline text-2xl font-bold text-[#C2101C]">
                      Rp 160.000
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Luxury Leather Bag Spa & Patina', category: 'Tas Mewah / Handbag' })}
                    className="px-5 py-2 rounded-full bg-[#C2101C] hover:bg-[#A80B15] text-white font-label text-xs font-bold transition shadow-sm"
                  >
                    Pilih Spa →
                  </button>
                </div>
              </div>

              {/* Right Side Cards */}
              <div className="lg:col-span-7 space-y-4">
                {/* Bag Cleaning Fabric */}
                <div className="bg-white border border-[#D1DDD4] rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#F4F8F5] border border-[#D1DDD4] flex items-center justify-center text-[#143826] shrink-0">
                      <span className="material-symbols-outlined text-xl">shopping_basket</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-headline font-bold text-[#143826] text-base uppercase">
                        Bag Cleaning (Canvas, Nylon, Jacquard)
                      </h4>
                      <p className="text-xs text-[#4F6056] font-body">
                        Pembersihan noda makeup, tetesan kopi, dan debu harian pada tas kain Longchamp / Tote.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pl-14 sm:pl-0">
                    <span className="font-label font-bold text-[#143826] text-sm">Rp 95.000</span>
                    <button
                      onClick={() => onOpenConsultation({ title: 'Bag Cleaning (Canvas/Nylon)', category: 'Tas Mewah / Handbag' })}
                      className="px-3.5 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs transition font-semibold"
                    >
                      Pilih
                    </button>
                  </div>
                </div>

                {/* Bag Detox */}
                <div className="bg-white border border-[#D1DDD4] rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#F4F8F5] border border-[#D1DDD4] flex items-center justify-center text-[#C2101C] shrink-0">
                      <span className="material-symbols-outlined text-xl">air</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-headline font-bold text-[#143826] text-base uppercase">
                        Bag De-Odor &amp; Sterilization Chamber
                      </h4>
                      <p className="text-xs text-[#4F6056] font-body">
                        Pemberantasan bau lemari lembab, asap rokok, dan spora jamur di dalam saku kain tas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pl-14 sm:pl-0">
                    <span className="font-label font-bold text-[#143826] text-sm">Rp 180.000</span>
                    <button
                      onClick={() => onOpenConsultation({ title: 'Bag De-Odor & Sterilization', category: 'Tas Mewah / Handbag' })}
                      className="px-3.5 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs transition font-semibold"
                    >
                      Pilih
                    </button>
                  </div>
                </div>

                {/* Zipper Replacement */}
                <div className="bg-white border border-[#D1DDD4] rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#F4F8F5] border border-[#D1DDD4] flex items-center justify-center text-[#2E5C43] shrink-0">
                      <span className="material-symbols-outlined text-xl">tune</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-headline font-bold text-[#143826] text-base uppercase">
                        Zipper &amp; Brass Puller Replacement
                      </h4>
                      <p className="text-xs text-[#4F6056] font-body">
                        Penggantian rel ritsleting macet atau kepala resleting logam kuningan YKK Excella original.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pl-14 sm:pl-0">
                    <div className="text-right">
                      <span className="text-[10px] font-label text-[#4F6056] block">Mulai</span>
                      <span className="font-label font-bold text-[#143826] text-sm">Rp 110.000</span>
                    </div>
                    <button
                      onClick={() => onOpenConsultation({ title: 'Zipper & Brass Puller Replacement', category: 'Tas Mewah / Handbag' })}
                      className="px-3.5 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs transition font-semibold"
                    >
                      Pilih
                    </button>
                  </div>
                </div>

                {/* Lining & Re-piping */}
                <div className="bg-white border border-[#D1DDD4] rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#F4F8F5] border border-[#D1DDD4] flex items-center justify-center text-[#143826] shrink-0">
                      <span className="material-symbols-outlined text-xl">layers</span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-headline font-bold text-[#143826] text-base uppercase">
                        Furing Interior &amp; Re-Piping Sudut
                      </h4>
                      <p className="text-xs text-[#4F6056] font-body">
                        Ganti furing rontok/terkelupas dan bungkus ulang tulang sudut tas yang robek berlubang.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pl-14 sm:pl-0">
                    <div className="text-right">
                      <span className="text-[10px] font-label text-[#4F6056] block">Mulai</span>
                      <span className="font-label font-bold text-[#143826] text-sm">Rp 180.000</span>
                    </div>
                    <button
                      onClick={() => onOpenConsultation({ title: 'Furing Interior & Re-Piping Sudut', category: 'Tas Mewah / Handbag' })}
                      className="px-3.5 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs transition font-semibold"
                    >
                      Pilih
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================== */}
        {/* CATEGORY 03: SUITCASE & TRAVEL GEAR */}
        {/* ========================================================== */}
        {(activeTab === 'all' || activeTab === 'luggage') && (
          <section className="space-y-6 sm:space-y-8" id="cat-luggage">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-[#143826] pb-3 gap-2">
              <div>
                <span className="font-label text-[11px] sm:text-xs uppercase tracking-widest text-[#2E5C43] font-bold">
                  CATALOGUE DIVISION 03
                </span>
                <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#143826] uppercase">
                  Koper &amp; Luggage Emergency Repair
                </h2>
              </div>
              <span className="font-label text-xs text-[#4F6056]">
                Rimowa • Samsonite • Lojel • American Tourister • Tumi
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {/* Wheel Card */}
              <div className="bg-white border border-[#D1DDD4] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#143826] transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#143826] text-2xl">motion_photos_on</span>
                    <span className="font-label text-[10px] px-2 py-0.5 rounded bg-[#EBF4EE] text-[#143826] font-bold">
                      SILENT SPINNER
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[#143826] uppercase">
                    Roda Koper Rubber Bearing
                  </h4>
                  <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                    Penggantian roda karet mati dengan double wheel bearing baja. Putaran 360° hening tanpa decit di lantai bandara.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#D1DDD4] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-label text-[#4F6056] block font-semibold">Per Roda</span>
                    <span className="font-label font-bold text-[#143826] text-sm">Rp 120.000</span>
                  </div>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Ganti Roda Koper Silent Bearing', category: 'Koper / Luggage' })}
                    className="font-label text-xs font-bold text-[#C2101C] hover:underline"
                  >
                    Pilih →
                  </button>
                </div>
              </div>

              {/* Trolley Handle Card */}
              <div className="bg-white border border-[#D1DDD4] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#143826] transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#143826] text-2xl">pan_tool_alt</span>
                    <span className="font-label text-[10px] px-2 py-0.5 rounded bg-[#F4F8F5] text-[#4F6056] font-bold">
                      TELESCOPIC
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[#143826] uppercase">
                    Trolley &amp; Gagang Tarikan
                  </h4>
                  <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                    Pelurusan pipa aluminium yang bengkok akibat handling bagasi pesawat atau ganti housing handle baru.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#D1DDD4] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-label text-[#4F6056] block font-semibold">Mulai</span>
                    <span className="font-label font-bold text-[#143826] text-sm">Rp 150.000</span>
                  </div>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Perbaikan Trolley Handle Koper', category: 'Koper / Luggage' })}
                    className="font-label text-xs font-bold text-[#C2101C] hover:underline"
                  >
                    Pilih →
                  </button>
                </div>
              </div>

              {/* TSA Lock Card */}
              <div className="bg-white border border-[#D1DDD4] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#143826] transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#143826] text-2xl">lock_reset</span>
                    <span className="font-label text-[10px] px-2 py-0.5 rounded bg-[#F4F8F5] text-[#4F6056] font-bold">
                      STANDAR TSA
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[#143826] uppercase">
                    Kunci TSA 007 Replacement
                  </h4>
                  <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                    Penggantian kunci kombinasi nomor standar petugas keamanan bandara internasional atau buka kunci macet.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#D1DDD4] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-label text-[#4F6056] block font-semibold">Unit Kunci</span>
                    <span className="font-label font-bold text-[#143826] text-sm">Rp 175.000</span>
                  </div>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Ganti Kunci TSA Koper', category: 'Koper / Luggage' })}
                    className="font-label text-xs font-bold text-[#C2101C] hover:underline"
                  >
                    Pilih →
                  </button>
                </div>
              </div>

              {/* Body Crack / Dent */}
              <div className="bg-white border border-[#D1DDD4] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#143826] transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-[#143826] text-2xl">build</span>
                    <span className="font-label text-[10px] px-2 py-0.5 rounded bg-[#F4F8F5] text-[#4F6056] font-bold">
                      REINFORCE
                    </span>
                  </div>
                  <h4 className="font-headline text-base font-bold text-[#143826] uppercase">
                    Body Crack &amp; Dent Restorasi
                  </h4>
                  <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                    Penambalan retak bodi polycarbonate dari dalam menggunakan serat resin komposit serta ketok dent aluminium.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#D1DDD4] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-label text-[#4F6056] block font-semibold">Mulai</span>
                    <span className="font-label font-bold text-[#143826] text-sm">Rp 200.000</span>
                  </div>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Restorasi Retak Bodi Koper', category: 'Koper / Luggage' })}
                    className="font-label text-xs font-bold text-[#C2101C] hover:underline"
                  >
                    Pilih →
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================== */}
        {/* CATEGORY 04: LEATHER APPAREL & ACCESSORIES */}
        {/* ========================================================== */}
        {(activeTab === 'all' || activeTab === 'leather') && (
          <section className="space-y-6 sm:space-y-8" id="cat-leather">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b-2 border-[#143826] pb-3 gap-2">
              <div>
                <span className="font-label text-[11px] sm:text-xs uppercase tracking-widest text-[#2E5C43] font-bold">
                  CATALOGUE DIVISION 04
                </span>
                <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#143826] uppercase">
                  Jaket Kulit, Sabuk &amp; Dompet
                </h2>
              </div>
              <span className="font-label text-xs text-[#4F6056]">
                Conditioning Alami • Edge Coating • Hardware Buffing
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {/* Jacket Spa */}
              <div className="bg-white border border-[#D1DDD4] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-[#C2101C] text-2xl">dry_cleaning</span>
                  <h4 className="font-headline text-lg font-bold text-[#143826] uppercase">
                    Leather Jacket Conditioning &amp; Spa
                  </h4>
                  <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                    Pembersihan mendalam kotoran jalanan pada jaket kulit motor/bomber, disusul nutrisi mink oil murni agar kulit tidak kering dan kembali lentur elastis.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#D1DDD4] flex items-center justify-between">
                  <span className="font-label font-bold text-[#143826] text-base">Rp 220.000</span>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Leather Jacket Conditioning & Spa', category: 'Jaket & Aksesoris Kulit' })}
                    className="px-3.5 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs transition font-semibold"
                  >
                    Pilih Layanan
                  </button>
                </div>
              </div>

              {/* Belt Edge Paint */}
              <div className="bg-white border border-[#D1DDD4] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-[#2E5C43] text-2xl">linear_scale</span>
                  <h4 className="font-headline text-lg font-bold text-[#143826] uppercase">
                    Leather Belt Edge Paint &amp; Polish
                  </h4>
                  <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                    Pelapisan ulang karet pinggiran (edge kote) sabuk kulit yang retak mengelupas, serta pemolesan kepala buckle logam bebas baret halus.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#D1DDD4] flex items-center justify-between">
                  <span className="font-label font-bold text-[#143826] text-base">Rp 85.000</span>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Leather Belt Edge Paint & Polish', category: 'Jaket & Aksesoris Kulit' })}
                    className="px-3.5 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs transition font-semibold"
                  >
                    Pilih Layanan
                  </button>
                </div>
              </div>

              {/* Wallet Spa */}
              <div className="bg-white border border-[#D1DDD4] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="material-symbols-outlined text-[#143826] text-2xl">wallet</span>
                  <h4 className="font-headline text-lg font-bold text-[#143826] uppercase">
                    Luxury Wallet Spa &amp; Sealing
                  </h4>
                  <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                    Pembersihan dompet lipat/panjang, hidrasi slot kartu yang kaku, dan penguncian jahitan tepi dompet agar tidak mekar robek.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#D1DDD4] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-label text-[#4F6056] block font-semibold">Mulai</span>
                    <span className="font-label font-bold text-[#143826] text-base">Rp 110.000</span>
                  </div>
                  <button
                    onClick={() => onOpenConsultation({ title: 'Luxury Wallet Spa & Sealing', category: 'Jaket & Aksesoris Kulit' })}
                    className="px-3.5 py-1.5 rounded-full border border-[#143826] text-[#143826] hover:bg-[#143826] hover:text-white font-label text-xs transition font-semibold"
                  >
                    Pilih Layanan
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================== */}
        {/* CATEGORY 05: VALUE BUNDLING PACKAGES */}
        {/* ========================================================== */}
        {(activeTab === 'all' || activeTab === 'packages') && (
          <section className="space-y-6 sm:space-y-8" id="cat-packages">
            <div className="bg-[#07130C] border border-white/10 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-white/5 pointer-events-none"></div>
              
              <div className="relative z-10 space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/15 pb-6">
                  <div>
                    <span className="font-label text-xs text-[#ECC15A] uppercase tracking-widest font-semibold">
                      VALUE ATELIER PACKS
                    </span>
                    <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-1 uppercase">
                      Bundling Treatment: Solusi Lengkap &amp; Hemat
                    </h2>
                    <p className="text-xs sm:text-sm text-white/80 max-w-xl mt-2 font-body">
                      Kombinasi servis paling sering dipilih pelanggan dengan potongan harga langsung dan prioritas pengerjaan di lab.
                    </p>
                  </div>
                  <span className="font-label text-xs bg-[#D97706]/20 text-[#ECC15A] px-3.5 py-1.5 rounded-full border border-[#ECC15A]/40 font-semibold shadow-sm shrink-0 self-start sm:self-auto inline-flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#ECC15A]">savings</span>
                    <span>Langsung Hemat s/d Rp 60.000</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Paket 01 */}
                  <div className="bg-white text-[#181D1A] rounded-2xl p-6 flex flex-col justify-between relative shadow-lg">
                    <span className="absolute -top-3 right-4 bg-[#C2101C] text-white font-label text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      HEMAT RP 35.000
                    </span>
                    <div className="space-y-3">
                      <span className="font-label text-xs font-bold text-[#2E5C43]">PAKET 01</span>
                      <h4 className="font-headline text-xl font-bold text-[#143826] uppercase">
                        Regular Mid Press + Clean
                      </h4>
                      <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                        Lem press hidrolik bagian midsole yang menganga sebagian + Ultimate Deep Clean menyeluruh luar dalam.
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-[#D1DDD4]">
                      <div className="flex items-baseline gap-2">
                        <span className="font-label text-2xl font-bold text-[#C2101C]">Rp 200.000</span>
                        <span className="font-label text-xs text-[#4F6056] line-through">Rp 235.000</span>
                      </div>
                      <button
                        onClick={() => onOpenConsultation({ title: 'Paket 01: Regular Mid Press + Clean', category: 'Paket Bundling Hemat' })}
                        className="mt-4 block w-full py-2.5 text-center rounded-full bg-[#F8FAF9] hover:bg-[#C2101C] hover:text-white font-label text-xs font-bold text-[#143826] transition border border-[#D1DDD4]"
                      >
                        Pilih Paket Ini
                      </button>
                    </div>
                  </div>

                  {/* Paket 02 Popular */}
                  <div className="bg-white text-[#181D1A] rounded-2xl p-6 flex flex-col justify-between relative shadow-lg border-2 border-[#C2101C]">
                    <span className="absolute -top-3 right-4 bg-[#C2101C] text-white font-label text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wide">
                      PALING DICARI
                    </span>
                    <div className="space-y-3">
                      <span className="font-label text-xs font-bold text-[#C2101C]">PAKET 02</span>
                      <h4 className="font-headline text-xl font-bold text-[#143826] uppercase">
                        Full Press + Ultimate Clean
                      </h4>
                      <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                        Bongkar total sol mati, pembersihan kerak residu lem lama, lem thermo-press temperatur tinggi + Deep Clean steril.
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-[#D1DDD4]">
                      <div className="flex items-baseline gap-2">
                        <span className="font-label text-2xl font-bold text-[#C2101C]">Rp 250.000</span>
                        <span className="font-label text-xs text-[#4F6056] line-through">Rp 300.000</span>
                      </div>
                      <button
                        onClick={() => onOpenConsultation({ title: 'Paket 02: Full Press + Ultimate Clean', category: 'Paket Bundling Hemat' })}
                        className="mt-4 block w-full py-2.5 text-center rounded-full bg-[#C2101C] hover:bg-[#A80B15] text-white font-label text-xs font-bold transition shadow"
                      >
                        Pilih Paket Ini
                      </button>
                    </div>
                  </div>

                  {/* Paket 03 */}
                  <div className="bg-white text-[#181D1A] rounded-2xl p-6 flex flex-col justify-between relative shadow-lg">
                    <span className="absolute -top-3 right-4 bg-[#C2101C] text-white font-label text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      HEMAT RP 60.000
                    </span>
                    <div className="space-y-3">
                      <span className="font-label text-xs font-bold text-[#2E5C43]">PAKET 03</span>
                      <h4 className="font-headline text-xl font-bold text-[#143826] uppercase">
                        Couple Care (2 Pasang)
                      </h4>
                      <p className="text-xs text-[#4F6056] font-body leading-relaxed">
                        Perawatan langsung untuk 2 pasang sepatu favorit Anda: 2x Ultimate Clean + 2x Ozone Chamber Detox anti-bakteri.
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-[#D1DDD4]">
                      <div className="flex items-baseline gap-2">
                        <span className="font-label text-2xl font-bold text-[#C2101C]">Rp 270.000</span>
                        <span className="font-label text-xs text-[#4F6056] line-through">Rp 330.000</span>
                      </div>
                      <button
                        onClick={() => onOpenConsultation({ title: 'Paket 03: Couple Care (2 Pasang)', category: 'Paket Bundling Hemat' })}
                        className="mt-4 block w-full py-2.5 text-center rounded-full bg-[#F8FAF9] hover:bg-[#C2101C] hover:text-white font-label text-xs font-bold text-[#143826] transition border border-[#D1DDD4]"
                      >
                        Pilih Paket Ini
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================== */}
        {/* ATELIER DIAGNOSIS & CONSULTATION CALLOUT */}
        {/* ========================================================== */}
        <section className="bg-white border border-[#D1DDD4] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-label text-[#143826] bg-[#EBF4EE] border border-[#D1DDD4]">
                <span className="material-symbols-outlined text-sm text-[#C2101C]">photo_camera</span>
                <span className="font-bold">Diagnosa Foto Gratis Tanpa Komitmen</span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#143826] uppercase">
                Ragu Layanan Mana yang Sesuai untuk Kondisi Barang Anda?
              </h3>
              <p className="text-xs sm:text-sm text-[#4F6056] font-body leading-relaxed">
                Kirimkan 2–3 foto detail barang kesayangan Anda melalui WhatsApp. Artisan kami akan menganalisis kelayakan bahan kulit, jenis karet sol, dan merekomendasikan penanganan yang tepat sebelum pengerjaan dimulai.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Artisan%20RCR,%20bisa%20bantu%20cek%20kondisi%20barang%20saya?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#C2101C] hover:bg-[#A80B15] text-white font-label text-xs font-bold transition shadow inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Kirim Foto via WhatsApp</span>
                </a>
                <a
                  href="/#outlets"
                  className="px-5 py-2.5 rounded-full bg-[#F4F8F5] hover:bg-[#EBF4EE] text-[#143826] border border-[#D1DDD4] font-label text-xs font-semibold transition inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-base">location_on</span>
                  <span>Lokasi Drop-Off Semarang</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F4F8F5] rounded-2xl p-5 sm:p-6 border border-[#D1DDD4] space-y-3 text-xs font-body">
              <div className="flex items-center justify-between border-b border-[#D1DDD4] pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#143826] text-xl">storefront</span>
                  <span className="font-headline text-sm font-bold text-[#143826] uppercase">
                    Workshop Utama Semarang
                  </span>
                </div>
                <span className="font-label text-[10px] bg-[#143826] text-white px-2 py-0.5 rounded font-semibold">
                  BUKA SETIAP HARI
                </span>
              </div>
              <p className="text-[#4F6056]">
                <strong className="text-[#143826] font-semibold">Alamat Workshop:</strong> Jl. Hasanudin No. 48, Panggung Kidul, Semarang Utara
              </p>
              <p className="text-[#4F6056]">
                <strong className="text-[#143826] font-semibold">Jam Operasional:</strong> 08.00 — 21.00 WIB
              </p>
              <div className="p-3 rounded-xl bg-white border border-[#D1DDD4] text-[#181D1A] space-y-1">
                <span className="font-label font-bold text-[#C2101C] block text-[11px] uppercase">
                  ⚡ Layanan Antar-Jemput (Pickup) Gratis:
                </span>
                <p className="text-[#4F6056] text-[11px]">
                  Tersedia untuk seluruh area Semarang dengan minimal 2 pasang item pengerjaan.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
