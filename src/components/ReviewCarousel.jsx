import React, { useState } from 'react';

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

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Desktop 3-Card Grid or Mobile Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.slice(currentIndex, currentIndex + 3).map((rev, idx) => (
          <div 
            key={idx}
            className="bg-[#11241B] rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl border border-[#234833] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex text-[#E6A117] text-sm gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <span className="font-label text-[10px] uppercase text-[#73D49B] bg-[#183627] border border-[#2B543D] px-2 py-0.5 rounded">
                  {rev.item}
                </span>
              </div>
              <p className="font-body text-sm text-white italic leading-relaxed">
                {rev.text}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#234833]">
              <div>
                <span className="font-body text-sm font-bold text-white block">
                  {rev.name}
                </span>
                <span className="font-label text-xs text-[#A7C2B2]">
                  {rev.role}
                </span>
              </div>
              <span className="material-symbols-outlined text-[#73D49B] text-xl">
                verified
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button 
          onClick={prevReview}
          className="w-10 h-10 rounded-full bg-[#183627] hover:bg-[#204734] text-white border border-[#2B543D] flex items-center justify-center transition-colors"
          aria-label="Previous Review"
        >
          <span className="material-symbols-outlined text-base">chevron_left</span>
        </button>
        <span className="font-label text-xs text-[#A7C2B2] tracking-wider uppercase font-semibold">
          Review {currentIndex + 1} - {currentIndex + 3} of {reviews.length}
        </span>
        <button 
          onClick={nextReview}
          className="w-10 h-10 rounded-full bg-[#183627] hover:bg-[#204734] text-white border border-[#2B543D] flex items-center justify-center transition-colors"
          aria-label="Next Review"
        >
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
