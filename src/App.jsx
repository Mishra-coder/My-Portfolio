import React, { useState } from 'react';
import './App.css';
import useTilt from './useTilt';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ProfileModal from './components/ProfileModal';

function App() {
  useTilt();
  const [modalTab, setModalTab] = useState(null); // null when closed, 'about' | 'projects' | 'skills' | etc.

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
      <ThreeCanvas />
      
      {/* 1. Premium Sticky Navbar (Opens ProfileModal on menu item click) */}
      <Navbar onOpenSection={handleOpenSection} />

      {/* 2. Full-Bleed Reference Hero Section with Studio Cutout & Lime Aura */}
      <HeroSection onOpenSection={handleOpenSection} />

      {/* 3. Radiant CTA Banner & Giant Signature Footer */}
      <Footer onOpenSection={handleOpenSection} />

      {/* 4. Deep Profile Explorer Modal (Accessed exclusively via Menu Bar & Action Triggers) */}
      <ProfileModal
        isOpen={Boolean(modalTab)}
        activeTab={modalTab || 'about'}
        setActiveTab={setModalTab}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
