import React, { useState } from 'react';

export default function ConsultationModal({ isOpen, onClose, initialItem = null }) {
  const [formData, setFormData] = useState({
    itemType: initialItem?.category || 'Sepatu / Footwear',
    treatment: initialItem?.title || 'Ultimate Cleaning Regular',
    branch: 'Cabang Hasanudin (Workshop Pusat)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo Artisan RCR Indonesia,\n\nSaya ingin konsultasi treatment:\n• Kategori: ${formData.itemType}\n• Layanan: ${formData.treatment}\n• Lokasi Drop: ${formData.branch}\n• Catatan Kondisi: ${formData.notes || 'Normal treatment'}\n\nMohon info estimasi pengerjaan dan slot atelier. Terima kasih!`;
    
    const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#D8E5DC] relative">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#EBF4EE] border border-[#D8E5DC] flex items-center justify-center text-[#143826]">
            <span className="material-symbols-outlined text-2xl">support_agent</span>
          </div>
          <div>
            <h3 className="font-headline text-2xl uppercase font-bold text-[#143826]">
              BOOK TREATMENT
            </h3>
            <p className="font-body text-xs text-[#526B5C]">
              Konsultasi langsung dengan Master Artisan RCR Indonesia
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-label text-xs uppercase font-bold text-[#143826] mb-1.5">
              Kategori Barang
            </label>
            <select 
              value={formData.itemType}
              onChange={(e) => setFormData({...formData, itemType: e.target.value})}
              className="w-full px-4 py-2.5 rounded-lg border border-[#D8E5DC] font-body text-sm text-[#181D1A] focus:outline-none focus:border-[#143826] bg-[#F8FAF9]"
            >
              <option value="Sepatu / Footwear">Sepatu / Footwear (Sneakers, Boots, Loafers)</option>
              <option value="Tas Mewah / Handbag">Tas Mewah / Handbag (Chanel, LV, Hermès, Coach)</option>
              <option value="Koper / Luggage">Koper / Luggage (Rimowa, Samsonite, Lojel)</option>
              <option value="Jaket & Aksesoris Kulit">Jaket Kulit, Dompet, Ikat Pinggang</option>
            </select>
          </div>

          <div>
            <label className="block font-label text-xs uppercase font-bold text-[#143826] mb-1.5">
              Pilihan Layanan
            </label>
            <input 
              type="text"
              value={formData.treatment}
              onChange={(e) => setFormData({...formData, treatment: e.target.value})}
              placeholder="Contoh: Ultimate Clean, Sole Swap Vibram, Bag Spa"
              className="w-full px-4 py-2.5 rounded-lg border border-[#D8E5DC] font-body text-sm text-[#181D1A] focus:outline-none focus:border-[#143826] bg-[#F8FAF9]"
              required
            />
          </div>

          <div>
            <label className="block font-label text-xs uppercase font-bold text-[#143826] mb-1.5">
              Rencana Titik Drop / Outlet
            </label>
            <select 
              value={formData.branch}
              onChange={(e) => setFormData({...formData, branch: e.target.value})}
              className="w-full px-4 py-2.5 rounded-lg border border-[#D8E5DC] font-body text-sm text-[#181D1A] focus:outline-none focus:border-[#143826] bg-[#F8FAF9]"
            >
              <option value="Cabang Hasanudin (Pusat Workshop)">Cabang Hasanudin (Pusat Workshop & Sol Bar)</option>
              <option value="Cabang Wonodri (Semarang Selatan)">Cabang Wonodri (Semarang Selatan)</option>
              <option value="Cabang Tembalang (Semarang)">Cabang Tembalang (Banjarsari)</option>
              <option value="Drop Point Barber Corner Suyudi">Drop Point Barber Corner Suyudi</option>
              <option value="Drop Point Barber Corner Jatidiri">Drop Point Barber Corner Jatidiri</option>
              <option value="Drop Point Barber Corner Puri Anjasmoro">Drop Point Barber Corner Puri Anjasmoro</option>
              <option value="Layanan Antar-Jemput (Pickup Delivery)">Layanan Antar-Jemput (Pickup Area Semarang)</option>
            </select>
          </div>

          <div>
            <label className="block font-label text-xs uppercase font-bold text-[#143826] mb-1.5">
              Catatan Kondisi Barang (Opsional)
            </label>
            <textarea 
              rows="2"
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              placeholder="Contoh: Sol mengelupas, noda tinta di kulit lambskin, koper roda macet"
              className="w-full px-4 py-2.5 rounded-lg border border-[#D8E5DC] font-body text-sm text-[#181D1A] focus:outline-none focus:border-[#143826] bg-[#F8FAF9]"
            ></textarea>
          </div>

          <div className="pt-2">
            <button 
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-[#C2101C] hover:bg-[#A80B15] text-white font-label text-xs uppercase font-bold tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Lanjutkan ke WhatsApp Artisan</span>
            </button>
            <p className="font-body text-[11px] text-[#526B5C] text-center mt-2.5">
              Konsultasi & estimasi foto 100% gratis tanpa komitmen.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
