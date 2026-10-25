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
import SectionHead from './SectionHead';


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
        <section id="projects" className="section">
            <div className="container">
                <SectionHead num="01" label="Featured portfolio" title="Featured Projects" intro="Engineered with passion" />

                {/* Filter Controls & Search */}
                <div className="work-controls reveal">
                    <div className="toggle-pill" role="group" aria-label="Filter projects">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                className={`toggle-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                                aria-pressed={selectedCategory === cat}
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

                    <label className="search-pill">
                        <Search size={16} />
                        <input
                            type="text"
                            placeholder="Search projects or tech..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Search projects or tech"
                        />
                    </label>
                </div>

                {/* Project rows */}
                {/* Keyed by tab so every switch replays the arrive animation */}
                <div className="work-list" key={selectedCategory}>
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <article key={project.title} className="work-row" style={{ '--i': index }}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="work-media soft-card tilt-3d"
                                    title="View Live Site"
                                >
                                    <img
                                        src={project.image}
                                        srcSet={`${project.image} ${project.imageWidth}w, ${project.image2x} ${project.imageWidth * 2}w`}
                                        sizes="(max-width: 900px) 92vw, 560px"
                                        width={project.imageWidth}
                                        height={project.imageHeight}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    {project.featured && (
                                        <span className="featured-badge">Featured</span>
                                    )}
                                </a>

                                <div className="work-info">
                                    <div className="work-meta">
                                        <span className="mono-tag">{project.category}</span>
                                        <span className="mono-tag is-muted">{project.kind}</span>
                                        {project.preview && (
                                            <a
                                                href={project.preview}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mono-tag is-blue"
                                                title="Open Mobile Demo Preview"
                                            >
                                                <Eye size={12} />
                                                <span>App Preview</span>
                                            </a>
                                        )}
                                    </div>

                                    <h3 className="work-title">{project.title}</h3>
                                    <p className="work-subtitle">{project.subtitle}</p>
                                    <p className="work-desc">{project.description}</p>

                                    <div className="chip-row">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="chip is-small">
                                                <span className="chip-plus">+</span>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="work-links">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-dark is-small"
                                        >
                                            <span>Visit Application</span>
                                            <ExternalLink size={14} />
                                        </a>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-cream is-small"
                                            >
                                                <Github size={15} />
                                                <span>Repository</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="empty-state soft-card">
                            <p>No projects match your filter or search query.</p>
                            <button
                                type="button"
                                className="btn-dark is-small"
                                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
