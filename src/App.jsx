import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import useTilt from './useTilt';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const SECTIONS = ['about', 'projects', 'skills', 'achievements', 'resume', 'contact'];

// Section pages live in their own chunk (they are never above the fold on "/").
// Loaded manually instead of React.lazy so there is no Suspense reveal delay, and if the
// chunk is missing (stale page after a redeploy) we reload once instead of failing silently.
let sectionModule = null;
const loadSectionPage = () =>
  sectionModule || (sectionModule = import('./components/SectionPage').catch((err) => {
    sectionModule = null;
    if (!sessionStorage.getItem('chunk-reload')) {
      sessionStorage.setItem('chunk-reload', '1');
      window.location.reload();
    }
    throw err;
  }));

// "/about" -> "about", anything unknown -> null (home)
const sectionFromPath = (pathname) => {
  const seg = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  return SECTIONS.includes(seg) ? seg : null;
};

function App() {
  useTilt();
  const [section, setSection] = useState(() => sectionFromPath(window.location.pathname));
  const [SectionPage, setSectionPage] = useState(null);

  // Fetch the section chunk right after first paint (immediately if we landed on a section URL).
  useEffect(() => {
    let alive = true;
    const load = () => loadSectionPage().then((m) => alive && setSectionPage(() => m.default)).catch(() => {});
    const id = setTimeout(load, section ? 0 : 200);
    return () => { alive = false; clearTimeout(id); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
        SectionPage && <SectionPage activeTab={section} onNavigate={navigate} />
      ) : (
        <main id="main">
          <HeroSection onOpenSection={handleOpenSection} />
        </main>
      )}

      <Footer onOpenSection={handleOpenSection} />
    </div>
  );
}

export default App;
