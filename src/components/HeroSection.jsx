import React from 'react';
import devendraPortrait from '../assets/devendra_portrait.webp';
import { celebrate } from '../lib/celebrate';
import { projects } from '../data/projects';
import {
    ArrowUpRight,
    Download,
    BrainCircuit,
    Sparkles,
    Code2,
    Smartphone,
    Database,
    Zap,
    ExternalLink
} from 'lucide-react';

const HeroSection = ({ onOpenSection }) => {
    const resumePdf = "/DEVENDRA_RESUME.pdf";

    const handleDownloadCV = () => celebrate({ spread: 75 });

    const techStack = [
        "React.js", "Node.js", "Python", "TypeScript", "React Native",
        "PyTorch / AI", "MongoDB", "PostgreSQL", "Next.js", "Tailwind CSS", "REST APIs"
    ];

    return (
        <div className="ref-full-editorial-container">
            {/* 1. HERO STAGE (Matching Reference Image) */}
            <section id="hero" className="ref-hero-stage">
                {/* Luminous Radial Yellow-Green / Lime Aura */}
                <div className="ref-lime-aura" aria-hidden="true"></div>

                <div className="ref-hero-inner">
                    {/* Headline Typography (Layered: Name behind head, Role in front of face/hair) */}
                    <div className="ref-hero-typography">
                        <h1 className="ref-hero-name">Hi I'm Devendra</h1>
                        <h2 className="ref-hero-role">Full Stack & AI Engineer</h2>
                    </div>

                    {/* Centered Cutout Portrait (Enlarged Profile Image) */}
                    <div className="ref-portrait-wrapper">
                        <img
                            src={devendraPortrait}
                            alt="Devendra Mishra - Full Stack & AI Engineer"
                            className="ref-portrait-cutout"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </div>

                    {/* Left Floating Pill: Available Status */}
                    <div className="ref-floating-status">
                        <span className="ref-live-green-dot">
                            <span className="ref-dot-ping"></span>
                        </span>
                        <span className="ref-status-label">Available for new opportunities</span>
                    </div>

                    {/* Right Floating Bio */}
                    <div className="ref-floating-bio">
                        <p>
                            passionate about creating intuitive digital experiences and intelligent AI systems that connect users with value.
                        </p>
                    </div>

                    {/* Bottom Right: CTA Actions */}
                    <div className="ref-bottom-actions">
                        <button
                            type="button"
                            className="ref-pill-cta-btn"
                            onClick={() => onOpenSection?.('contact')}
                        >
                            <span>Get in Touch</span>
                            <span className="ref-cta-arrow">→</span>
                        </button>

                        <a
                            href={resumePdf}
                            download="Devendra_Mishra_Resume.pdf"
                            className="ref-secondary-cv-btn"
                            onClick={handleDownloadCV}
                            title="Download Devendra's CV"
                        >
                            <Download size={15} />
                            <span>Resume</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. TECH STACK MARQUEE / TICKER STRIP */}
            <div className="ref-ticker-strip">
                <div className="ref-ticker-track">
                    {[...techStack, ...techStack].map((tech, idx) => (
                        <div key={idx} className="ref-ticker-item">
                            <span className="ref-ticker-dot">✦</span>
                            <span className="ref-ticker-text">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. BENTO SHOWCASE GRID (Featured Visual Works) */}
            <section id="projects" className="ref-bento-showcase-section">
                <div className="ref-bento-container">
                    <div className="ref-bento-ambient-glow" aria-hidden="true"></div>

                    {/* Section Header Bar: "Projects" */}
                    <div className="ref-projects-header-bar">
                        <div className="ref-projects-title-box">
                            <span className="ref-section-mini-badge">FEATURED PORTFOLIO</span>
                            <h2 className="ref-projects-bar-title">Projects</h2>
                        </div>
                        <button
                            type="button"
                            className="ref-projects-view-all-pill"
                            onClick={() => onOpenSection?.('projects')}
                            title="Open interactive project catalog"
                        >
                            <span>Explore All Projects</span>
                            <ArrowUpRight size={16} />
                        </button>
                    </div>

                    <div className="ref-bento-grid">
                        {projects.map((project, index) => (
                            <a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`ref-bento-card card-${index + 1}`}
                            >
                                <div className="ref-bento-preview-wrap">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="ref-bento-img"
                                        loading="lazy"
                                    />
                                    <div className="ref-bento-overlay">
                                        <div className="ref-bento-badge">
                                            <span>{project.kind}</span>
                                            <ExternalLink size={14} />
                                        </div>
                                    </div>
                                </div>
                                <div className="ref-bento-meta">
                                    <h3 className="ref-bento-title">{project.title}</h3>
                                    <p className="ref-bento-subtitle">{project.subtitle}</p>
                                    <div className="ref-bento-tags">
                                        {project.tags.map((t, ti) => (
                                            <span key={ti} className="ref-bento-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FOCUS / PHILOSOPHY STATEMENT */}
            <section className="ref-focus-section">
                <div className="ref-focus-inner">
                    <span className="ref-section-mini-badge">FOCUS</span>
                    <h2 className="ref-focus-statement">
                        my focus is on blending <em>clear strategy</em>, <strong>scalable architecture</strong>, and <strong>intelligent AI</strong> to craft experiences that solve real problems.
                    </h2>

                    {/* Floating Capability Pills */}
                    <div className="ref-focus-floating-pills">
                        <span className="ref-focus-pill"><Zap size={14} /> Full-Stack Engineering</span>
                        <span className="ref-focus-pill"><BrainCircuit size={14} /> Applied AI & ML</span>
                        <span className="ref-focus-pill"><Smartphone size={14} /> React Native Mobile</span>
                        <span className="ref-focus-pill"><Database size={14} /> Distributed Databases</span>
                        <span className="ref-focus-pill"><Code2 size={14} /> Clean Architecture</span>
                        <span className="ref-focus-pill"><Sparkles size={14} /> Open-Source Leadership</span>
                    </div>
                </div>
            </section>

            {/* 5. PROCESS SECTION ("Here's how it works") */}
            <section className="ref-process-section">
                <div className="ref-process-inner">
                    <span className="ref-section-mini-badge">MY METHODOLOGY</span>
                    <h2 className="ref-process-heading">Here's how it works</h2>

                    <div className="ref-process-cards">
                        {/* Step 01 */}
                        <div className="ref-process-card card-step-1">
                            <span className="process-step-num">01</span>
                            <h3 className="process-step-title">Discover</h3>
                            <p className="process-step-desc">
                                Deep dive into requirements, architecture feasibility, data pipelines, and user-centric problem analysis.
                            </p>
                        </div>

                        {/* Curved Connector 1 */}
                        <div className="ref-process-loop loop-1">
                            <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 25 C 35 5, 65 35, 90 15" stroke="#84cc16" strokeWidth="2.5" strokeDasharray="5 5" />
                            </svg>
                        </div>

                        {/* Step 02 */}
                        <div className="ref-process-card card-step-2">
                            <span className="process-step-num">02</span>
                            <h3 className="process-step-title">Design & Build</h3>
                            <p className="process-step-desc">
                                Engineering responsive React/React Native frontends, high-concurrency Node.js backends, and fine-tuned AI algorithms.
                            </p>
                        </div>

                        {/* Curved Connector 2 */}
                        <div className="ref-process-loop loop-2">
                            <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 15 C 35 35, 65 5, 90 25" stroke="#84cc16" strokeWidth="2.5" strokeDasharray="5 5" />
                            </svg>
                        </div>

                        {/* Step 03 */}
                        <div className="ref-process-card card-step-3">
                            <span className="process-step-num">03</span>
                            <h3 className="process-step-title">Deliver</h3>
                            <p className="process-step-desc">
                                Production deployment with automated CI/CD, performance benchmarks, and rigorous quality testing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;

