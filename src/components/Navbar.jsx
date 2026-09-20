import React, { useState, useEffect } from 'react';
import devendraPortrait from '../assets/devendra_portrait.png';
import {
    Menu,
    X,
    ArrowUpRight,
    Download,
    Mail,
    Phone,
    MapPin,
    Layers,
    BrainCircuit,
    Award
} from 'lucide-react';
import { LaurelWreath, Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

const Navbar = ({ onOpenSection }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navLinks = [
        { num: '01', name: 'About', id: 'about' },
        { num: '02', name: 'Projects', id: 'projects' },
        { num: '03', name: 'Skills', id: 'skills' },
        { num: '04', name: 'Achievements', id: 'achievements' },
        { num: '05', name: 'Resume', id: 'resume' },
        { num: '06', name: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [drawerOpen]);

    const handleBrandClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setDrawerOpen(false);
        if (onOpenSection) {
            onOpenSection(id);
        }
    };

    const handleDownloadCV = () => {
        try {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.5 },
                colors: ['#84cc16', '#a3e635', '#10b981', '#38bdf8']
            });
        } catch (e) { }
    };

    return (
        <>
            {/* Top Navigation Bar matching reference design */}
            <header className={`ref-header-bar ${scrolled ? 'is-scrolled' : ''}`}>
                <div className="ref-header-inner">
                    {/* Brand Name in elegant Serif Italic */}
                    <a
                        href="#hero"
                        className="ref-brand-title"
                        onClick={handleBrandClick}
                    >
                        Devendra Mishra
                    </a>

                    {/* Center: Laurel Wreath Award Badge with REAL credentials */}
                    <div className="ref-award-badge" title="Hacktoberfest 2024 Global Contributor & NST Pune Scholar">
                        <div className="ref-laurel-icon-wrapper">
                            <LaurelWreath size={22} className="ref-laurel-svg" />
                            <span className="ref-laurel-center-text">GLOBAL<br />CONTRIBUTOR</span>
                        </div>
                        <span className="ref-award-title">Hacktoberfest '24 • NST Pune</span>
                    </div>

                    {/* Right: Sleek Circular Hamburger Button */}
                    <div className="ref-header-actions">
                        {/* Quick desktop shortcuts if scrolled */}
                        <div className={`ref-quick-nav ${scrolled ? 'visible' : ''}`}>
                            <button type="button" className="ref-quick-btn" onClick={() => onOpenSection?.('projects')}>Projects</button>
                            <button type="button" className="ref-quick-btn" onClick={() => onOpenSection?.('skills')}>Skills</button>
                            <button type="button" className="ref-quick-btn" onClick={() => onOpenSection?.('about')}>About</button>
                            <button type="button" className="ref-quick-btn" onClick={() => onOpenSection?.('contact')}>Contact</button>
                        </div>

                        <button
                            type="button"
                            className="ref-menu-circle-btn"
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={drawerOpen}
                        >
                            <span className="menu-bar bar-1"></span>
                            <span className="menu-bar bar-2"></span>
                            <span className="menu-bar bar-3"></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Slide-over Editorial Navigation Drawer */}
            <div className={`ref-drawer-backdrop ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />
            
            <aside className={`ref-drawer-panel ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
                <div className="ref-drawer-header">
                    <div className="ref-drawer-profile">
                        <img src={devendraPortrait} alt="Devendra Mishra" className="ref-drawer-avatar" />
                        <div>
                            <span className="ref-drawer-name">Devendra Mishra</span>
                            <span className="ref-drawer-status">
                                <span className="ref-dot-pulse"></span> Available for Hire
                            </span>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="ref-drawer-close-btn"
                        onClick={() => setDrawerOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="ref-drawer-nav">
                    <ul className="ref-drawer-links">
                        {navLinks.map((link) => (
                            <li key={link.id} className="ref-drawer-item">
                                <button
                                    type="button"
                                    className={`ref-drawer-link-btn ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                >
                                    <span className="ref-link-num">{link.num}</span>
                                    <span className="ref-link-name">{link.name}</span>
                                    <ArrowUpRight size={18} className="ref-link-arrow" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="ref-drawer-footer">
                    <div className="ref-drawer-cv-cta">
                        <a
                            href="/DEVENDRA_RESUME.pdf"
                            download="Devendra_Mishra_Resume.pdf"
                            className="ref-drawer-download-btn"
                            onClick={handleDownloadCV}
                        >
                            <Download size={16} />
                            <span>Download Full Resume (PDF)</span>
                        </a>
                    </div>

                    <div className="ref-drawer-socials">
                        <a href="https://github.com/Mishra-coder" target="_blank" rel="noreferrer" title="GitHub">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/in/devendra-mishra-b9613b339/" target="_blank" rel="noreferrer" title="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:devendramishra870@gmail.com" title="Email Devendra">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
