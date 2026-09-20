import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import useTilt from './useTilt';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import SectionPage from './components/SectionPage';

const SECTIONS = ['about', 'projects', 'skills', 'achievements', 'resume', 'contact'];

// "/about" -> "about", anything unknown -> null (home)
const sectionFromPath = (pathname) => {
  const seg = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  return SECTIONS.includes(seg) ? seg : null;
};

function App() {
  useTilt();
  const [section, setSection] = useState(() => sectionFromPath(window.location.pathname));

  // Push a new URL and switch page.
  const navigate = useCallback((path) => {
    const next = sectionFromPath(path);
    const target = next ? `/${next}` : '/';
    if (window.location.pathname !== target) window.history.pushState(null, '', target);
    setSection(next);
    window.scrollTo({ top: 0, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' });
  }, []);

  // Browser back / forward
  useEffect(() => {
    const onPop = () => setSection(sectionFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Navbar / hero / footer call this with a section id ("about", "contact", "hero", ...)
  const handleOpenSection = (sectionId) => navigate(sectionId === 'hero' ? '/' : `/${sectionId}`);

  return (
    <div className={`editorial-app-root ${section ? 'is-section-page' : ''}`}>
      <Navbar onOpenSection={handleOpenSection} solid={Boolean(section)} />

      {section ? (
        <SectionPage activeTab={section} onNavigate={navigate} />
      ) : (
        <HeroSection onOpenSection={handleOpenSection} />
      )}

      <Footer onOpenSection={handleOpenSection} />
    </div>
  );
}

export default App;
