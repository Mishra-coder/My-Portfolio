import React, { useState, useMemo } from 'react';
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
import { projects } from '../data/projects';


const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');


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
                                    srcSet={`${project.image} ${project.imageWidth}w, ${project.image2x} ${project.imageWidth * 2}w`}
                                    sizes="(max-width: 760px) 100vw, (max-width: 900px) 90vw, 600px"
                                    width={project.imageWidth}
                                    height={project.imageHeight}
                                    alt={project.title}
                                    className="project-img"
                                    loading="lazy"
                                    decoding="async"
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
