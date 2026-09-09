import React, { useState, useEffect } from 'react';

export default function ReviewCarousel() {
  const reviews = [
    {
      name: "Satria P.",
      role: "Verified Customer • Semarang",
      text: "“Repaint dan unyellowing sol Boost kembali seperti baru beli dari box. Jahitan sol tas kulit juga sangat rapi sekali. Pelayanan workshop Hasanudin top!”",
      rating: 5,
      item: "Adidas Yeezy & Bally Bag"
    },
    {
      name: "Nabila K.",
      role: "Verified Customer • Tembalang",
      text: "“Drop pagi via #MORNINGDROP jam 07.45, sore sudah selesai QC dan bisa diambil. Sangat membantu untuk event mendadak! Scent neutralizer-nya wangi mewah.”",
      rating: 5,
      item: "Nike Dunk Low & Coach Pillow"
    },
    {
      name: "Bambang Wicaksono",
      role: "Verified Customer • Pleburan",
      text: "“Sol Red Wing saya yang sudah gundul diganti Vibram Christy Morflex. Hasil press rapi, jahitan welt kuat dan empuk kembali dipakai jalan seharian.”",
      rating: 5,
      item: "Red Wing 875 Moc Toe"
    },
    {
      name: "Devi Anggraini",
      role: "Verified Customer • Semarang Barat",
      text: "“Tas Chanel lambskin yang kena noda minyak berhasil dibersihkan tanpa merusak kelembutan kulitnya. Benar-benar standar museum.”",
      rating: 5,
      item: "Chanel Classic Flap Lambskin"
    },
    {
      name: "Rizal Pratama",
      role: "Verified Customer • Wonodri",
      text: "“Roda koper Rimowa yang pecah pas pulang dari luar negeri diganti dengan silent bearing baru. Putarannya halus banget di lantai bandara.”",
      rating: 5,
      item: "Rimowa Classic Cabin"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerPage);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="w-full">
      {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
      <div className={`grid gap-5 sm:gap-6 ${
        itemsPerPage === 1 
          ? 'grid-cols-1 max-w-lg mx-auto' 
          : itemsPerPage === 2 
            ? 'grid-cols-1 sm:grid-cols-2' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      }`}>
        {visibleReviews.map((rev, idx) => (
          <div 
            key={idx}
            className="bg-[#11241B] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:shadow-xl border border-[#234833] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
              <div className="flex items-center justify-between gap-2">
                <div className="flex text-[#E6A117] text-sm gap-0.5 shrink-0">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <span className="font-label text-[9px] sm:text-[10px] uppercase text-[#73D49B] bg-[#183627] border border-[#2B543D] px-2 py-0.5 rounded truncate">
                  {rev.item}
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-white italic leading-relaxed">
                {rev.text}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#234833]">
              <div>
                <span className="font-body text-xs sm:text-sm font-bold text-white block">
                  {rev.name}
                </span>
                <span className="font-label text-[11px] sm:text-xs text-[#A7C2B2]">
                  {rev.role}
                </span>
              </div>
              <span className="material-symbols-outlined text-[#73D49B] text-lg sm:text-xl shrink-0">
                verified
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
        <button 
          onClick={prevReview}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#183627] hover:bg-[#204734] text-white border border-[#2B543D] flex items-center justify-center transition-colors"
          aria-label="Previous Review"
        >
          <span className="material-symbols-outlined text-base">chevron_left</span>
        </button>
        <span className="font-label text-[11px] sm:text-xs text-[#A7C2B2] tracking-wider uppercase font-semibold">
          {currentIndex + 1} - {Math.min(currentIndex + itemsPerPage, reviews.length)} of {reviews.length}
        </span>
        <button 
          onClick={nextReview}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#183627] hover:bg-[#204734] text-white border border-[#2B543D] flex items-center justify-center transition-colors"
          aria-label="Next Review"
        >
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
