import React, { useState, useEffect, useCallback } from 'react';
import useTilt from './useTilt';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Portfolio from './components/Portfolio';
import Approach from './components/Approach';
import About from './components/About';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Page order on the single scrolling page; each id is also a URL (/projects, /about, ...).
const SECTIONS = ['projects', 'about', 'skills', 'achievements', 'resume', 'contact'];

// "/about" -> "about", anything unknown -> null (top of page)
const sectionFromPath = (pathname) => {
  const seg = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  return SECTIONS.includes(seg) ? seg : null;
};

const scrollToSection = (id, smooth = true) => {
  const behavior = smooth && !window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'smooth' : 'auto';
  if (!id) return window.scrollTo({ top: 0, behavior });
  document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
};

/** Fade-up reveal for every `.reveal` element as it enters the viewport. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px 12% 0px', threshold: 0 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Pauses the looping animations inside `[data-anim]` blocks while they are off screen. */
function usePauseOffscreen() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-paused', !entry.isIntersecting));
    }, { rootMargin: '100px 0px' });
    document.querySelectorAll('[data-anim]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Which section is currently in the middle of the viewport (drives the nav pill). */
function useActiveSection() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id === 'hero' ? null : entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['hero', ...SECTIONS].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

function App() {
  useTilt();
  useReveal();
  usePauseOffscreen();
  const active = useActiveSection();

  // Landing on /about etc. jumps straight to that section.
  useEffect(() => {
    const initial = sectionFromPath(window.location.pathname);
    if (initial) requestAnimationFrame(() => scrollToSection(initial, false));
  }, []);

  // Browser back / forward
  useEffect(() => {
    const onPop = () => scrollToSection(sectionFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Navbar / hero / footer call this with a section id ("about", "contact", "hero", ...)
  const handleOpenSection = useCallback((sectionId) => {
    const next = sectionFromPath(`/${sectionId}`);
    const target = next ? `/${next}` : '/';
    if (window.location.pathname !== target) window.history.pushState(null, '', target);
    scrollToSection(next);
  }, []);

  return (
    <div className="app-root">
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar onOpenSection={handleOpenSection} active={active} />

      <main id="main">
        <HeroSection onOpenSection={handleOpenSection} />
        <Portfolio />
        <Approach />
        <About />
        <Skills />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer onOpenSection={handleOpenSection} />
    </div>
  );
}

export default App;
