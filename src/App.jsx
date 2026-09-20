import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import useTilt from './useTilt';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
const ThreeCanvas = lazy(() => import('./components/ThreeCanvas'));
const ProfileModal = lazy(() => import('./components/ProfileModal'));

// Background 3D only on capable desktop devices, and only after the page is idle.
const canRun3D = () =>
  window.matchMedia('(min-width: 900px) and (hover: hover)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  (navigator.hardwareConcurrency ?? 4) >= 4 &&
  !navigator.connection?.saveData;

function App() {
  useTilt();
  const [modalTab, setModalTab] = useState(null); // null when closed, 'about' | 'projects' | 'skills' | etc.
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    if (!canRun3D()) return;
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200));
    const id = idle(() => setShow3D(true));
    return () => (window.cancelIdleCallback || clearTimeout)(id);
  }, []);

  const handleOpenSection = (sectionId) => {
    // Normalizes sectionId
    const tabMap = {
      hero: null,
      about: 'about',
      projects: 'projects',
      skills: 'skills',
      achievements: 'achievements',
      resume: 'resume',
      contact: 'contact'
    };
    if (tabMap[sectionId] !== undefined) {
      setModalTab(tabMap[sectionId]);
    } else {
      setModalTab('about');
    }
  };

  const handleCloseModal = () => {
    setModalTab(null);
  };

  return (
    <div className="editorial-app-root">
      {show3D && <Suspense fallback={null}><ThreeCanvas /></Suspense>}
      
      {/* 1. Premium Sticky Navbar (Opens ProfileModal on menu item click) */}
      <Navbar onOpenSection={handleOpenSection} />

      {/* 2. Full-Bleed Reference Hero Section with Studio Cutout & Lime Aura */}
      <HeroSection onOpenSection={handleOpenSection} />

      {/* 3. Radiant CTA Banner & Giant Signature Footer */}
      <Footer onOpenSection={handleOpenSection} />

      {/* 4. Deep Profile Explorer Modal (Accessed exclusively via Menu Bar & Action Triggers) */}
      {modalTab && (
        <Suspense fallback={null}>
          <ProfileModal
            isOpen
            activeTab={modalTab}
            setActiveTab={setModalTab}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
