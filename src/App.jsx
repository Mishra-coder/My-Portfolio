import React, { useState, useEffect } from 'react';
import './App.css';
import useTilt from './useTilt';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
// The modal lives in its own chunk. We load it ourselves (no React.lazy/Suspense) so the
// first open is not delayed by Suspense's fallback-reveal throttle.
let modalModule = null;
const loadProfileModal = () => modalModule || (modalModule = import('./components/ProfileModal'));

function App() {
  useTilt();
  const [modalTab, setModalTab] = useState(null); // null when closed, 'about' | 'projects' | 'skills' | etc.
  const [ProfileModal, setProfileModal] = useState(null);

  // Fetch the modal chunk right after first paint so the first menu click opens instantly.
  useEffect(() => {
    let alive = true;
    const id = setTimeout(() => loadProfileModal().then((m) => alive && setProfileModal(() => m.default)), 200);
    return () => { alive = false; clearTimeout(id); };
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
      
      {/* 1. Premium Sticky Navbar (Opens ProfileModal on menu item click) */}
      <Navbar onOpenSection={handleOpenSection} />

      {/* 2. Full-Bleed Reference Hero Section with Studio Cutout & Lime Aura */}
      <HeroSection onOpenSection={handleOpenSection} />

      {/* 3. Radiant CTA Banner & Giant Signature Footer */}
      <Footer onOpenSection={handleOpenSection} />

      {/* 4. Deep Profile Explorer Modal (Accessed exclusively via Menu Bar & Action Triggers) */}
      {modalTab && ProfileModal && (
        <ProfileModal
          isOpen
          activeTab={modalTab}
          setActiveTab={setModalTab}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
