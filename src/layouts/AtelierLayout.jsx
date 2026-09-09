import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ConsultationModal from '../components/ConsultationModal';
import OrderTrackModal from '../components/OrderTrackModal';

export default function AtelierLayout() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [selectedInitialItem, setSelectedInitialItem] = useState(null);

  const handleOpenConsultation = (item = null) => {
    setSelectedInitialItem(item);
    setIsConsultModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-[#181D1A]">
      {/* Top Fixed Navbar */}
      <Navbar 
        onOpenBookModal={() => handleOpenConsultation(null)}
        onOpenTrackModal={() => setIsTrackModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full pt-20">
        <Outlet context={{ onOpenConsultation: handleOpenConsultation }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Modals */}
      <ConsultationModal 
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        initialItem={selectedInitialItem}
      />

      <OrderTrackModal 
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />
    </div>
  );
}
