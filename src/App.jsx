import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AtelierLayout from './layouts/AtelierLayout';
import HomePage from './pages/HomePage';
import LayananPage from './pages/LayananPage';
import GaleriPage from './pages/GaleriPage';

// Scroll to top on route change or handle hash scroll
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AtelierLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/galeri" element={<GaleriPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
