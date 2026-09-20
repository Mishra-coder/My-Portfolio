import React from 'react';
import devendraPortrait from '../assets/devendra_portrait.png';
import successMantraImg from '../assets/success_mantra_new.png';
import karoPitchImg from '../assets/karo_pitch_web.png';
import akoinImg from '../assets/akoin_web.png';
import aromaLuxeImg from '../assets/aroma_luxe_web.png';
import zappifyImg from '../assets/zappify_mockup.jpg';
import bgRemoverImg from '../assets/bg_remover.png';
import confetti from 'canvas-confetti';
import {
    ArrowRight,
    ArrowUpRight,
    Download,
    Layers,
    BrainCircuit,
    CheckCircle2,
    GraduationCap,
    Send,
    MapPin,
    Sparkles,
    Code2,
    Cpu,
    Smartphone,
    Database,
    Zap,
    ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

const HeroSection = ({ onOpenSection }) => {
    const resumePdf = "/DEVENDRA_RESUME.pdf";

    const handleDownloadCV = () => {
        try {
            confetti({
                particleCount: 90,
                spread: 75,
                origin: { y: 0.6 },
                colors: ['#84cc16', '#a3e635', '#bef264', '#10b981']
            });
        } catch (e) { }
    };

    const techStack = [
        "React.js", "Node.js", "Python", "TypeScript", "React Native",
        "PyTorch / AI", "MongoDB", "PostgreSQL", "Next.js", "Tailwind CSS", "REST APIs"
    ];

    const bentoProjects = [
        {
            title: "Success Mantra",
            subtitle: "Coaching & Student Learning Management System",
            category: "Full-Stack Web App",
            image: successMantraImg,
            link: "https://success-mantra-dm.vercel.app/",
            github: "https://github.com/Mishra-coder/Coaching_Website",
            tags: ["React", "Node.js", "Express", "MongoDB", "Auth"]
        },
        {
            title: "Karo Pitch",
            subtitle: "Investor-Founder Pitch Platform",
            category: "Full-Stack Web App",
            image: karoPitchImg,
            link: "https://karo-pitch.vercel.app/",
            github: "https://github.com/Mishra-coder/Karo-Pitch",
            tags: ["React", "Node.js", "MongoDB", "Tailwind"]
        },
        {
            title: "AKOIN",
            subtitle: "Web3 Crypto & Currency Analytics",
            category: "Finance & Web3 Dashboard",
            image: akoinImg,
            link: "https://akoin.vercel.app/",
            github: "https://github.com/Mishra-coder/Akoin",
            tags: ["React", "Crypto APIs", "Chart.js", "Vite"]
        },
        {
            title: "Zappify",
            subtitle: "Modern Footwear Store",
            category: "Mobile E-Commerce",
            image: zappifyImg,
            link: "https://zappify-sepia.vercel.app/",
            github: "https://github.com/Mishra-coder/Zappify",
            tags: ["React Native", "TypeScript", "State Mgmt"]
        },
        {
            title: "Aroma Luxe",
            subtitle: "Luxury Fragrance Discovery",
            category: "Mobile Application",
            image: aromaLuxeImg,
            link: "https://perfume-app-h3ct.vercel.app/",
            github: "https://github.com/Mishra-coder/Perfume_APP",
            tags: ["React Native", "Expo", "Mobile UX"]
        },
        {
            title: "AI Background Remover",
            subtitle: "Instant Image Processing Tool",
            category: "Image Processing API",
            image: bgRemoverImg,
            link: "https://bg-remover-dm.vercel.app/",
            github: "https://github.com/Mishra-coder/BG.Remover",
            tags: ["React", "Image Processing API", "Vite"]
        }
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

                    {/* Bottom Left: Social Proof Avatars */}
                    <div className="ref-bottom-proof">
                        <div className="ref-avatar-stack">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces"
                                alt="Dev"
                                className="proof-avatar-img"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces"
                                alt="Dev"
                                className="proof-avatar-img"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces"
                                alt="Dev"
                                className="proof-avatar-img"
                            />
                        </div>
                        <p className="ref-proof-caption">
                            Trusted by over <strong>1200+ developers</strong> across open-source and commercial projects.
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
                        {bentoProjects.map((project, index) => (
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
                                            <span>{project.category}</span>
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


