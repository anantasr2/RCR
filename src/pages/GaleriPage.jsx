import React, { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function GaleriPage() {
  const { onOpenConsultation } = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryCategories = [
    { id: 'all', label: 'Semua Transformasi' },
    { id: 'sneakers', label: '👟 Sneakers & Sol' },
    { id: 'bags', label: '👜 Tas Mewah' },
    { id: 'boots', label: '🥾 Boots & Vibram' },
    { id: 'luggage', label: '🧳 Koper & Travel' },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'sneakers',
      title: 'Adidas Yeezy Boost 350 — Unyellowing & Deep Clean',
      problem: 'Caked mud mengering, noda oli jalanan & sol boost menguning parah akibat oksidasi sinar matahari.',
      treatment: 'Ultimate Deep Clean + UV Midsole Unyellowing Chamber + Ozone Chamber Detox.',
      turnaround: '3 Hari Kerja',
      price: 'Rp 145.000',
      tag: 'UNYELLOWING & OZONE',
      beforeImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVDN3EVBqb45HUnRg38tPP_9VB5pdQts4IRaNo5lxQNyJ6I53Mkp-FlQsTGPuOlE1rot3dZpdb0c_SBMzDfCCtr-5ic70lZNWUumo93dtW9olOi_zUSA12kW32nVMz3i2o7xmbXGPKRMmU3pa174oc035cwbf2oYgudHOqt4O_Akz7dM7RIVthn1RccGxoFtybA4_mzjA-QYlyMG8phtVW3iCkMgOHnSoKJ4baqi2du987JrTdL6o8',
      afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZjE1j0w0kmgC-LIXPNaNAsKzm7_ceCMsbPc48XptxKPhmmb-DABtZPyN-3nGf5R0y0z177BFBvZ8P4aTPv9PPbFYGiX-U-sKgQ-QfkyJOEINHmLEjvbCLcINZVYUeiLN0iT57huc7uAm19ovXCnQkAaaRC5oQGtfH68pobV65kE9pE-KM7P6u1C6wkTM19Y5SfYFWJDKKkyPf3SKksv5ke-p4rCXQWI26uuToFLDgqHkue8xfM_Od',
    },
    {
      id: 2,
      category: 'bags',
      title: 'Vintage Leather Handbag — Patina Dye & Spa',
      problem: 'Baret sudut kulit, daki menumpuk pada handle pegangan, dan warna kusam pudar teroksidasi.',
      treatment: 'Luxury Bag Spa + Saphir French Patina Recoloring + Edge Kote Coating.',
      turnaround: '5 Hari Kerja',
      price: 'Rp 195.000',
      tag: 'LEATHER PATINA RECOLOR',
      beforeImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS7hubO3fdEGEGUzvb9Z0djf7O6B1NkOh8i72JkHb4WLUICu9kLgATmuIcZ8dMBp-Lch4fpAejt6ZdDWIBZ0SQlpVCbKS-n61oUw-6F7Ts0c48m2NeS1wSET72eTSIFENjh5AVSbu_hRtijVFp82llgDJtZRCxMkWffTh0czhemAS0kxTq9oLlrH-slUvekHe2hGJMO1SPk6nU_sJc3ZINtedC0hjZ0SorjLfrMbAsbdvnlZ-B0vsW',
      afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM7lyzZVT6y6tH3tb9zhZRNOMtrlS2A1EzxvE0mKODOmLpy-3O_7-EMErEdUHPqwkB5NBYqolAnOOnp8P5WqU8NOc-EYNkAq-m3f_qxLjGLn_reGIfkS-8BaOr7R-_JStdaOetXdp4TpN2v-wNyaDIto12wfEKkLrORy8jMCy1Hfp96SLkakxxlkzsnormW61os2GZMA8WbLisLBZduNNBZaAmLevdyOawoq5OB4lEY73zBpPFZpHk',
    },
    {
      id: 3,
      category: 'boots',
      title: 'Red Wing Heritage Boots — Vibram® Sole Recraft',
      problem: 'Outsole aus rata botak, welt jahitan terlepas dan midsole cork hancur tergerus usia.',
      treatment: 'Bongkar Sol + Midsole Cork Baru + Vibram Christy 4014 Morflex Original Italia.',
      turnaround: '7 Hari Kerja',
      price: 'Rp 450.000',
      tag: 'VIBRAM® RECRAFTING',
      beforeImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQczYes299CaO6-5rUkAAIjotALbKx9MgCWwhXLUQD0jyS7WZaYI4bpdai2iNut40MUZL8bblPjp9QnidoWoCPd2pO1GSoM9aSpF2pOHF39R7nYIIr6q6HMpD0_tf10MopkDCfe3VgvWP6cyT518GKHr5uHxLnCH7XgVd9NlIDx0BzG0rc_3lntMkhTiGlmSpmknGQnziW8A1BlObIlMStRo18JtaN345c4sWeDnSv1fO1VQCsN3S8CGEe-ByB8GGr1A',
      afterImg: 'https://lh3.googleusercontent.com/aida/AEtjO1WydXmcEKZALEGmN5wOvyhloOIK6IKyXvjctfLApJOSRFFLskusYPJ61Y9-8frlCDRDkbYr_-dFTwHeSK53V2Ad8GmdxKn1eyM3ge7GPFA9YWg6pSBJxGdUMmDlzQ7qLFh8M17TjfGHqr2Gc4vOGbMVjEHBxUn_Xg7Roq_ppiW9KNnpYb4yoWeAzUm3QpDX7GmjpXRPuXSjUYDYLD6fYhaJvOX3OTBVyr5iSq7K0y4BH0fCzptsccFJDA4',
    },
    {
      id: 4,
      category: 'luggage',
      title: 'Rimowa Classic Cabin — Silent Spinner Wheels & Dent Removal',
      problem: 'Roda karet macet terkelupas akibat benturan handling bandara dan dent lekukan sudut bodi.',
      treatment: 'Penggantian 4 unit Roda Silent Double-Bearing + Ketok Presisi Panel Aluminium.',
      turnaround: '4 Hari Kerja',
      price: 'Rp 380.000',
      tag: 'LUGGAGE EMERGENCY',
      beforeImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDttzgycJc-0fe51SafNgzVWYJrOsxM-owVV8TQTkL2gzM7hlaDYnbW4y1MSJ-1A-wZJOQ4Ye9USiCTJd6DN3PoVl1_zByFLjrKUsrInkvhvv-Gi7e9iLHKkHx0hPQTsV80852-JvVI27mKCkPHVa3HOV2auJnoM5__PP842JztgqXj8xp_wnE3jnocREeMiTJgmv8MA8Uo67tD5RIZwGoQeuBc5bshvztRv8T_rXEXaTjQVRNcHWDb',
      afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuSl08BMxU8MAgTujaSLXQiGTddRtY3ZMtZXkLiQaOz_zsnK-Qz_xJnRtdY8nft2YcbIl6Fj1NWvw82povBYmHA6wz1IeKXQuqJt0Js9d63wpuS7uWW_Z0dOXlj4kL5VlLzqf751cp99JcrOWm706JaNHJkuVb0VtMcRRPMo4BbIt4wcjYVS28jWAwDZ0lEOk7BgzutHsKMzcGKbP7E5mGyimqnWrf2iBHZrohGy0XnyTXZcfG2hY3',
    },
    {
      id: 5,
      category: 'sneakers',
      title: 'Nike Air Jordan 1 — Sole Separation & Reglue Hidrolik',
      problem: 'Sol lepas menganga total (sole separation) akibat lem pabrik kering dan lembab.',
      treatment: 'De-glue pembersihan kerak + Thermo-press hidrolik + Jahit sol melingkar wax thread.',
      turnaround: '4 Hari Kerja',
      price: 'Rp 185.000',
      tag: 'REGLUE & STITCHING',
      beforeImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACErgcaP2GHEY3dG91flo_-sKUJ2Mx7xHg8dqDiMRRUQqFkDOJ7_1znbOFrFUjhVb7Q8cWo2hPNRWhsIufit5Q-0KYd-moxqxj2eCwwwL_k4Vudgh8Y0oDQjFJPvtddQeYrOgMxn01g41LdBSWoBzQ1-sRGoxMlSbGgpMUL1UnDEF_Yhh2jE_4ZwupO6Vu1ue3MiEVjfTTrneNIXdDvKU7DKypiJN7mM_rhdzmouTOzg0HFd905sG1',
      afterImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZjE1j0w0kmgC-LIXPNaNAsKzm7_ceCMsbPc48XptxKPhmmb-DABtZPyN-3nGf5R0y0z177BFBvZ8P4aTPv9PPbFYGiX-U-sKgQ-QfkyJOEINHmLEjvbCLcINZVYUeiLN0iT57huc7uAm19ovXCnQkAaaRC5oQGtfH68pobV65kE9pE-KM7P6u1C6wkTM19Y5SfYFWJDKKkyPf3SKksv5ke-p4rCXQWI26uuToFLDgqHkue8xfM_Od',
    }
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return portfolioItems;
    return portfolioItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full bg-[#F8FAF9]">
      {/* HEADER SECTION */}
      <section className="border-b border-[#D1DDD4] bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2.5 text-xs font-label uppercase text-[#2E5C43] tracking-widest font-bold">
              <span>Arsip Transformasi Atelier</span>
              <span>•</span>
              <span>Before → After Case Studies</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143826] tracking-tight uppercase">
              Galeri Hasil Restorasi
            </h1>
            <p className="text-sm sm:text-base text-[#4F6056] font-body leading-relaxed">
              Bukti nyata dedikasi dan keterampilan master artisan RCR Indonesia dalam mengembalikan kehidupan kedua bagi sepatu, tas mewah, koper, dan barang koleksi Anda.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation({ title: 'Konsultasi Treatment dari Galeri' })}
              className="px-6 py-3 rounded-full bg-[#C2101C] hover:bg-[#A80B15] text-white font-label text-xs uppercase font-bold tracking-wider transition-all shadow flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>KONSULTASI ITEM ANDA</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="max-w-7xl mx-auto px-6 border-t border-[#D1DDD4]/70">
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-label text-xs tracking-wide transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#143826] text-white font-bold shadow-sm'
                    : 'bg-white text-[#4F6056] border border-[#D1DDD4] hover:bg-[#EBF4EE] font-semibold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#0B1A13] text-white py-8 border-b border-[#1A3828]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-headline text-3xl sm:text-4xl font-bold text-[#73D49B]">12.500+</div>
            <div className="font-label text-xs uppercase tracking-wider text-[#A7C2B2] mt-1">Item Direstorasi</div>
          </div>
          <div>
            <div className="font-headline text-3xl sm:text-4xl font-bold text-white">4.9 / 5.0</div>
            <div className="font-label text-xs uppercase tracking-wider text-[#A7C2B2] mt-1">Rating Kepuasan</div>
          </div>
          <div>
            <div className="font-headline text-3xl sm:text-4xl font-bold text-[#ECC15A]">60 HARI</div>
            <div className="font-label text-xs uppercase tracking-wider text-[#A7C2B2] mt-1">Garansi Pengerjaan</div>
          </div>
          <div>
            <div className="font-headline text-3xl sm:text-4xl font-bold text-white">100%</div>
            <div className="font-label text-xs uppercase tracking-wider text-[#A7C2B2] mt-1">Original Saphir &amp; Vibram</div>
          </div>
        </div>
      </section>

      {/* GALLERY SHOWCASE ITEMS */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        <div className="space-y-10">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-[#D1DDD4] rounded-3xl p-6 lg:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Interactive Slider on Left 7 cols */}
              <div className="lg:col-span-7">
                <BeforeAfterSlider 
                  beforeImage={item.beforeImg}
                  afterImage={item.afterImg}
                  height="h-[340px] sm:h-[440px]"
                  title={item.title}
                  price={item.price}
                  tag={item.tag}
                />
              </div>

              {/* Case Study Details on Right 5 cols */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#EBF4EE] text-[#143826] font-label text-[10px] font-bold uppercase border border-[#D8E5DC]">
                    {item.tag}
                  </span>
                  <span className="text-xs font-label text-[#4F6056]">
                    Estimasi: {item.turnaround}
                  </span>
                </div>

                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#143826] uppercase leading-tight">
                  {item.title}
                </h3>

                {/* Problem & Treatment Cards */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#FDE8E9]/60 border border-[#C2101C]/20">
                    <span className="font-label text-[11px] uppercase font-bold text-[#C2101C] block mb-1">
                      Kondisi Awal (Problem)
                    </span>
                    <p className="font-body text-xs text-[#181D1A] leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#EBF4EE]/80 border border-[#2E5C43]/20">
                    <span className="font-label text-[11px] uppercase font-bold text-[#2E5C43] block mb-1">
                      Penanganan Atelier (Treatment)
                    </span>
                    <p className="font-body text-xs text-[#181D1A] leading-relaxed">
                      {item.treatment}
                    </p>
                  </div>
                </div>

                {/* Pricing & Booking CTA */}
                <div className="pt-3 border-t border-[#D1DDD4] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-label text-[#4F6056] uppercase block font-semibold">
                      Tarif Pengerjaan
                    </span>
                    <span className="font-headline text-2xl font-bold text-[#143826]">
                      {item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenConsultation({ title: `Treatment Serupa: ${item.title}` })}
                    className="px-5 py-2.5 rounded-full bg-[#143826] hover:bg-[#0B1A13] text-white font-label text-xs font-bold transition shadow inline-flex items-center gap-1.5"
                  >
                    <span>Pesan Treatment Serupa</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
