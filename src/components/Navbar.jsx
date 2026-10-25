import React, { useState, useEffect } from 'react';
import devendraPortrait from '../assets/devendra_avatar.webp';
import {
    X,
    ArrowUpRight,
    Mail
} from 'lucide-react';
import { PuffyIcon } from './Icons';
import { celebrate } from '../lib/celebrate';

const Navbar = ({ onOpenSection, active }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { num: '01', name: 'Projects', id: 'projects' },
        { num: '02', name: 'About', id: 'about' },
        { num: '03', name: 'Skills', id: 'skills' },
        { num: '04', name: 'Achievements', id: 'achievements' },
        { num: '05', name: 'Resume', id: 'resume' },
        { num: '06', name: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = drawerOpen ? 'hidden' : '';
    }, [drawerOpen]);

    const handleBrandClick = (e) => {
        e.preventDefault();
        setDrawerOpen(false);
        onOpenSection?.('hero');
    };

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setDrawerOpen(false);
        onOpenSection?.(id);
    };

    const handleDownloadCV = () => celebrate({ particleCount: 80, y: 0.5 });

    return (
        <>
            <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
                <div className="site-header-inner">
                    <a href="/" className="brand" onClick={handleBrandClick}>
                        <img src={devendraPortrait} alt="" width="40" height="40" className="brand-avatar" />
                        <span className="brand-name">Devendra Mishra</span>
                    </a>

                    <nav className="nav-pill" aria-label="Sections">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`/${link.id}`}
                                className={`nav-pill-link ${active === link.id ? 'is-active' : ''}`}
                                aria-current={active === link.id ? 'true' : undefined}
                                onClick={(e) => handleNavClick(e, link.id)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <a href="/contact" className="btn-dark header-cta" onClick={(e) => handleNavClick(e, 'contact')}>
                            Get in Touch
                        </a>
                        <button
                            type="button"
                            className="menu-btn"
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={drawerOpen}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Slide-over navigation drawer (mobile) */}
            <div className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(false)} />

            <aside className={`drawer ${drawerOpen ? 'open' : ''}`} inert={!drawerOpen}>
                <div className="drawer-header">
                    <div className="drawer-profile">
                        <img src={devendraPortrait} alt="Devendra Mishra" className="drawer-avatar" />
                        <div>
                            <span className="drawer-name">Devendra Mishra</span>
                            <span className="drawer-status">
                                <span className="live-dot"></span> Available for Hire
                            </span>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="drawer-close"
                        onClick={() => setDrawerOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav>
                    <ul className="drawer-links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`/${link.id}`}
                                    className={`drawer-link ${active === link.id ? 'is-active' : ''}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                >
                                    <span className="drawer-link-num">{link.num}</span>
                                    <span className="drawer-link-name">{link.name}</span>
                                    <ArrowUpRight size={18} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="drawer-footer">
                    <a
                        href="/DEVENDRA_RESUME.pdf"
                        download="Devendra_Mishra_Resume.pdf"
                        className="btn-dark drawer-download"
                        onClick={handleDownloadCV}
                    >
                        <PuffyIcon name="resume" size={30} className="is-inline" />
                        <span>Download Full Resume (PDF)</span>
                    </a>

                    <div className="drawer-socials">
                        <a href="https://github.com/Mishra-coder" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub" className="puffy-link">
                            <PuffyIcon name="github" size={52} />
                        </a>
                        <a href="https://linkedin.com/in/devendra-mishra-b9613b339/" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn" className="puffy-link">
                            <PuffyIcon name="linkedin" size={52} />
                        </a>
                        <a href="mailto:devendramishra870@gmail.com" title="Email Devendra" aria-label="Email Devendra">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
