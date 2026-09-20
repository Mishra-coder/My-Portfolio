import React, { useState, useMemo } from 'react';
import bgRemoverImg from '../assets/bg_remover.png';
import successMantraImg from '../assets/success_mantra_new.png';
import aromaLuxeImg from '../assets/aroma_luxe_web.png';
import zappifyMockupImg from '../assets/zappify_mockup.jpg';
import akoinWebImg from '../assets/akoin_web.png';
import karoPitchImg from '../assets/karo_pitch_web.png';
import {
    ExternalLink,
    Search,
    Sparkles,
    Eye,
    Layers,
    Smartphone,
    Globe
} from 'lucide-react';
import { Github } from './Icons';


const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const projects = [
        {
            title: "Success Magis",
            category: "Full Stack",
            subtitle: "Coaching & Student Learning Management System",
            description: "Scalable educational platform with authentication, class scheduling, interactive resources, and administrative control panels.",
            image: successMantraImg,
            link: "https://success-mantra-dm.vercel.app/",
            github: "https://github.com/Mishra-coder/Coaching_Website",
            tags: ["React", "Node.js", "Express", "MongoDB", "Auth"],
            featured: true
        },
        {
            title: "Zappify - Footwear Store",
            category: "Mobile",
            subtitle: "Premium Mobile E-Commerce Experience",
            description: "Fluid cross-platform mobile shopping experience with cart management, animated transitions, and responsive layout.",
            image: zappifyMockupImg,
            link: "https://zappify-sepia.vercel.app/",
            github: "https://github.com/Mishra-coder/Zappify",
            preview: "https://shorturl.at/17h2f",
            tags: ["React Native", "Expo", "TypeScript", "UI/UX"],
            featured: true
        },
        {
            title: "Aroma Luxe",
            category: "Mobile",
            subtitle: "Luxury Fragrance Mobile Application",
            description: "High-end product discovery app featuring sleek dark aesthetic, filtered fragrance catalog, and fluid product sheets.",
            image: aromaLuxeImg,
            link: "https://perfume-app-h3ct.vercel.app/",
            github: "https://github.com/Mishra-coder/Perfume_APP",
            tags: ["React Native", "Tailwind", "Mobile UX"],
            featured: false
        },
        {
            title: "Institute of Digital Risk (IDR)",
            category: "Frontend",
            subtitle: "Corporate Cybersecurity & Digital Risk Platform",
            description: "Clean institutional interface designed for risk mitigation services, professional programs, and modern corporate aesthetics.",
            image: akoinWebImg,
            link: "https://akoin-seven.vercel.app/",
            github: "https://github.com/Mishra-coder/AKOIN_",
            tags: ["React", "Modern CSS", "Responsive"],
            featured: false
        },
        {
            title: "AI Background Remover",
            category: "Frontend",
            subtitle: "Instant Image Processing Tool",
            description: "Fast in-browser utility for isolating foreground subjects with zero latency and high fidelity exports.",
            image: bgRemoverImg,
            link: "https://bg-remover-dm.vercel.app/",
            github: "https://github.com/Mishra-coder/BG.Remover",
            tags: ["React", "Image Processing API", "Vite"],
            featured: false
        },
        {
            title: "Karo Pitch - Startup Hub",
            category: "Frontend",
            subtitle: "Founder & Investor Pitch Platform",
            description: "Pitch deck showcase and founder discovery application geared towards empowering early-stage startups.",
            image: karoPitchImg,
            link: "https://karo-pitch-liard.vercel.app/",
            github: "https://github.com/Mishra-coder/Karo_Pitch",
            tags: ["React", "Tailwind CSS", "Startup Showcase"],
            featured: false
        }
    ];

    const categories = ['All', 'Full Stack', 'Mobile', 'Frontend'];

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesCategory =
                selectedCategory === 'All' || project.category === selectedCategory;
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <article id="projects" className="portfolio active editorial-section-card" data-page="portfolio">
            <header className="page-header">
                <div className="badge-pill">
                    <Sparkles size={14} />
                    <span>Engineered with passion</span>
                </div>
                <h2 className="h2 article-title">Featured Projects</h2>
            </header>

            {/* Filter Controls & Search */}
            <div className="portfolio-controls">
                <div className="filter-pill-group">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat === 'All' && <Globe size={14} />}
                            {cat === 'Full Stack' && <Layers size={14} />}
                            {cat === 'Mobile' && <Smartphone size={14} />}
                            {cat === 'Frontend' && <Sparkles size={14} />}
                            <span>{cat}</span>
                        </button>
                    ))}
                </div>

                <div className="project-search-box">
                    <Search size={16} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search projects or tech..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="project-search-input"
                    />
                </div>
            </div>

            {/* Project Grid */}
            <section className="projects-grid">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div key={index} className="project-card-3d tilt-3d">
                            <div className="project-img-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img"
                                    loading="lazy"
                                />
                                <div className="project-overlay">
                                    <div className="overlay-actions">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="overlay-btn primary"
                                                title="View Live Site"
                                            >
                                                <ExternalLink size={18} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="overlay-btn"
                                                title="View Source Code"
                                            >
                                                <Github size={18} />
                                                <span>Code</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                {project.featured && (
                                    <span className="featured-badge">Featured</span>
                                )}
                            </div>

                            <div className="project-info-body">
                                <div className="project-cat-row">
                                    <span className="project-category-pill">{project.category}</span>
                                    {project.preview && (
                                        <a
                                            href={project.preview}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mobile-preview-badge"
                                            title="Open Mobile Demo Preview"
                                        >
                                            <Eye size={12} />
                                            <span>App Preview</span>
                                        </a>
                                    )}
                                </div>

                                <h3 className="project-main-title">{project.title}</h3>
                                <p className="project-subtitle-text">{project.subtitle}</p>
                                <p className="project-desc-text">{project.description}</p>

                                <div className="project-tag-row">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="project-tech-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-card-footer">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="card-action-link live"
                                    >
                                        <span>Visit Application</span>
                                        <ExternalLink size={14} />
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="card-action-link github"
                                        >
                                            <Github size={15} />
                                            <span>Repository</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-projects-found">
                        <p>No projects match your filter or search query.</p>
                        <button
                            type="button"
                            className="reset-filter-btn"
                            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </section>
        </article>
    );
};

export default Portfolio;
