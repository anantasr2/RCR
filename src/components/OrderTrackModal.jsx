import React, { useState } from 'react';

export default function OrderTrackModal({ isOpen, onClose }) {
  const [trackNumber, setTrackNumber] = useState('');
  const [trackedData, setTrackedData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  if (!isOpen) return null;

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackNumber.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setTrackedData({
        orderId: trackNumber.toUpperCase(),
        customer: 'Bpk. Hendra S.',
        item: 'Nike Air Jordan 1 High (Chicago)',
        treatment: 'Full Sol Reglue + Deep Clean & Ozone Chamber',
        outlet: 'Cabang Hasanudin (Pusat Workshop)',
        intakeDate: '08 September 2026',
        estimatedFinish: '11 September 2026',
        status: 'Tahap 3: Sterilisasi Ozone Chamber',
        statusCode: 3, // 1: Intake, 2: Restorasi, 3: QC & Ozone, 4: Siap Diambil
        steps: [
          { title: 'Intake & Diagnostic QC', time: '08 Sep 10:15 WIB', done: true, desc: 'Pemeriksaan awal material & nota digital diterbitkan' },
          { title: 'Restorasi Atelier & Reglue', time: '09 Sep 14:00 WIB', done: true, desc: 'Pembersihan residu & thermo-press sol hidrolik' },
          { title: 'Ozone Chamber & Sterilization', time: '09 Sep 17:30 WIB', done: true, current: true, desc: 'Proses sterilisasi kabin ozon medis & anti-odor' },
          { title: 'Ready for Pickup / Delivery', time: 'Estimasi 11 Sep', done: false, desc: 'Pengecekan akhir artisan & notifikasi WhatsApp' }
        ]
      });
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#D8E5DC] relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#EBF4EE] border border-[#D8E5DC] flex items-center justify-center text-[#143826]">
            <span className="material-symbols-outlined text-2xl">receipt_long</span>
          </div>
          <div>
            <h3 className="font-headline text-2xl uppercase font-bold text-[#143826]">
              TRACK ATELIER ORDER
            </h3>
            <p className="font-body text-xs text-[#526B5C]">
              Pantau tahapan pengerjaan sepatu, tas, atau koper Anda secara transparan
            </p>
          </div>
        </div>

        {/* Form Search */}
        <form onSubmit={handleTrack} className="flex gap-2 mb-6">
          <input 
            type="text"
            value={trackNumber}
            onChange={(e) => setTrackNumber(e.target.value)}
            placeholder="Masukkan No. Nota (contoh: RCR-240901)"
            className="flex-1 px-4 py-2.5 rounded-lg border border-[#D8E5DC] font-label text-xs uppercase tracking-wider text-[#181D1A] focus:outline-none focus:border-[#143826] bg-[#F8FAF9]"
            required
          />
          <button 
            type="submit"
            disabled={isSearching}
            className="px-5 py-2.5 rounded-lg bg-[#143826] hover:bg-[#0B1A13] text-white font-label text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-1.5"
          >
            {isSearching ? (
              <span>Mencari...</span>
            ) : (
              <>
                <span className="material-symbols-outlined text-base">search</span>
                <span>Cek Resi</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Sample Note */}
        {!trackedData && (
          <div className="p-4 rounded-xl bg-[#F4F8F5] border border-[#D8E5DC] text-center space-y-2">
            <span className="font-label text-xs text-[#526B5C] font-semibold block">
              💡 Belum punya nomor resi nota?
            </span>
            <p className="font-body text-xs text-[#526B5C]">
              Ketik <button type="button" onClick={() => { setTrackNumber('RCR-240901'); }} className="font-bold text-[#143826] underline">RCR-240901</button> lalu klik "Cek Resi" untuk melihat simulasi alur tracking atelier.
            </p>
          </div>
        )}

        {/* Result Details */}
        {trackedData && (
          <div className="space-y-6 pt-2 border-t border-[#E2E8E4]">
            {/* Header Status Card */}
            <div className="p-4 rounded-xl bg-[#EBF4EE] border border-[#D8E5DC] flex items-center justify-between">
              <div>
                <span className="font-label text-[10px] uppercase tracking-wider text-[#526B5C] font-bold block">
                  Status Saat Ini
                </span>
                <h4 className="font-label text-sm uppercase font-bold text-[#143826]">
                  {trackedData.status}
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#143826] text-white font-label text-[10px] font-bold uppercase tracking-wider">
                IN PROGRESS
              </span>
            </div>

            {/* Item Meta Table */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-[#F8FAF9] p-3.5 rounded-xl border border-[#E2E8E4]">
              <div>
                <span className="text-[#728A7C] block font-medium">Barang Pengerjaan:</span>
                <span className="font-bold text-[#143826]">{trackedData.item}</span>
              </div>
              <div>
                <span className="text-[#728A7C] block font-medium">Layanan:</span>
                <span className="font-bold text-[#143826]">{trackedData.treatment}</span>
              </div>
              <div>
                <span className="text-[#728A7C] block font-medium">Outlet Workshop:</span>
                <span className="font-medium text-[#181D1A]">{trackedData.outlet}</span>
              </div>
              <div>
                <span className="text-[#728A7C] block font-medium">Estimasi Selesai:</span>
                <span className="font-bold text-[#C2101C]">{trackedData.estimatedFinish}</span>
              </div>
            </div>

            {/* Visual Timeline Steps */}
            <div>
              <h5 className="font-label text-xs uppercase font-bold text-[#143826] tracking-wider mb-4">
                Milestone Pengerjaan Atelier
              </h5>
              <div className="space-y-4 pl-2">
                {trackedData.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 relative">
                    {idx < trackedData.steps.length - 1 && (
                      <div className={`absolute left-3 top-6 bottom-0 w-0.5 ${step.done ? 'bg-[#143826]' : 'bg-[#D8E5DC]'}`}></div>
                    )}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 z-10 ${
                      step.current 
                        ? 'bg-[#C2101C] text-white ring-4 ring-[#FDE8E9]' 
                        : step.done 
                          ? 'bg-[#143826] text-white' 
                          : 'bg-[#D8E5DC] text-gray-500'
                    }`}>
                      <span className="material-symbols-outlined text-xs">
                        {step.done ? 'check' : 'hourglass_empty'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-label text-xs font-bold uppercase tracking-wider ${step.current ? 'text-[#C2101C]' : 'text-[#143826]'}`}>
                          {step.title}
                        </span>
                        <span className="font-body text-[11px] text-[#728A7C]">{step.time}</span>
                      </div>
                      <p className="font-body text-xs text-[#526B5C] mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a 
                href={`https://wa.me/6281234567890?text=Halo%20RCR,%20saya%20mau%20tanya%20progres%20nota%20${trackedData.orderId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-[#EBF4EE] hover:bg-[#D8E5DC] text-[#143826] font-label text-xs uppercase font-bold text-center block transition-colors border border-[#D8E5DC]"
              >
                Tanya Artisan Terkait Nota Ini &gt;
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
