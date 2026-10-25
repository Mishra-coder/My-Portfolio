import React, { useState } from 'react';
import devendraPortrait from '../assets/devendra_portrait-1x.webp';
import devendraPortrait2x from '../assets/devendra_portrait-2x.webp';
import { celebrate } from '../lib/celebrate';
import { projects } from '../data/projects';
import { Download } from 'lucide-react';
import { LaurelWreath } from './Icons';
import PuffyName from './PuffyName';
import robot1x from '../assets/robot-1x.webp';
import robot2x from '../assets/robot-2x.webp';
import { Crown, Arcs, Sparkle, Smile, Cone, Bomb, Starburst } from './Doodles';

const HeroSection = ({ onOpenSection }) => {
    const resumePdf = "/DEVENDRA_RESUME.pdf";
    const [boom, setBoom] = useState(false);

    const handleDownloadCV = () => celebrate({ spread: 75 });

    const handleBomb = (e) => {
        if (boom) return;
        setBoom(true);
        const box = e.currentTarget.getBoundingClientRect();
        celebrate({ palette: 'indigo', particleCount: 60, spread: 80, y: (box.top + box.height / 2) / window.innerHeight });
        setTimeout(() => setBoom(false), 1600);
    };

    const techStack = [
        "React.js", "Node.js", "Python", "TypeScript", "React Native",
        "PyTorch / AI", "MongoDB", "PostgreSQL", "Next.js", "Tailwind CSS", "REST APIs"
    ];

    // Fan of stamp cards at the bottom of the hero: two projects, the portrait, two projects.
    const fan = [projects[0], projects[3], null, projects[1], projects[4]];

    return (
        <>
            <section id="hero" className="hero" data-anim>
                {/* Floating props */}
                <Sparkle className="prop prop-sparkle" />
                <span className="prop prop-code" aria-hidden="true">&lt;/&gt;</span>
                <Cone className="prop prop-cone" />
                <button
                    type="button"
                    className={`prop prop-bomb ${boom ? 'is-boom' : ''}`}
                    onClick={handleBomb}
                    aria-label="Pop the bomb"
                >
                    <Bomb className="bomb-body" />
                    <Starburst className="bomb-burst" />
                </button>

                <div className="hero-inner">
                    <div className="hero-pills">
                        <div className="status-pill">
                            <span className="live-dot"></span>
                            <span>Available for new opportunities</span>
                        </div>
                        <div className="award-pill" title="Hacktoberfest 2024 Global Contributor & NST Pune Scholar">
                            <LaurelWreath size={18} />
                            <span>Hacktoberfest '24 • NST Pune</span>
                        </div>
                    </div>

                    <div className="hero-name">
                        <Arcs className="doodle doodle-arcs-l" />
                        <Crown className="doodle doodle-crown" />
                        <Arcs className="doodle doodle-arcs-r" />
                        <PuffyName priority />
                        <Smile className="doodle doodle-smile-l" />
                        <Smile className="doodle doodle-smile-r" />
                    </div>

                    <h1 className="hero-line">
                        Hi I'm Devendra, <span className="hand-underline">Full Stack Engineer</span>
                    </h1>

                    <p className="hero-bio">
                        passionate about creating intuitive digital experiences and intelligent AI systems that connect users with value.
                    </p>

                    <div className="hero-actions">
                        <button
                            type="button"
                            className="btn-dark"
                            onClick={() => onOpenSection?.('contact')}
                        >
                            <span>Get in Touch</span>
                            <span aria-hidden="true">→</span>
                        </button>

                        <a
                            href={resumePdf}
                            download="Devendra_Mishra_Resume.pdf"
                            className="btn-cream"
                            onClick={handleDownloadCV}
                            title="Download Devendra's CV"
                        >
                            <Download size={15} />
                            <span>Resume</span>
                        </a>
                    </div>
                </div>

                <div className="hero-fan">
                    <img
                        src={robot1x}
                        srcSet={`${robot1x} 150w, ${robot2x} 300w`}
                        sizes="110px"
                        width="300"
                        height="539"
                        alt=""
                        className="fan-robot"
                        decoding="async"
                    />
                    {fan.map((project, i) =>
                        project ? (
                            <a
                                key={project.title}
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`stamp-card fan-card fan-${i}`}
                            >
                                <span className="stamp-media">
                                    <img
                                        src={project.image}
                                        srcSet={`${project.image} ${project.imageWidth}w, ${project.image2x} ${project.imageWidth * 2}w`}
                                        sizes="240px"
                                        width={project.imageWidth}
                                        height={project.imageHeight}
                                        alt={project.title}
                                        decoding="async"
                                    />
                                </span>
                                <span className="stamp-label">{project.title}</span>
                            </a>
                        ) : (
                            <div key="portrait" className={`stamp-card fan-card fan-${i} fan-portrait`}>
                                <span className="stamp-media">
                                    <img
                                        src={devendraPortrait}
                                        srcSet={`${devendraPortrait} 576w, ${devendraPortrait2x} 682w`}
                                        sizes="260px"
                                        width="682"
                                        height="1024"
                                        alt="Devendra Mishra - Full Stack Engineer"
                                        fetchPriority="high"
                                        decoding="async"
                                    />
                                </span>
                                <span className="stamp-label">Devendra</span>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* Tech stack marquee */}
            <div className="chip-marquee" aria-label="Tech stack" data-anim>
                <div className="chip-track">
                    {[...techStack, ...techStack].map((tech, idx) => (
                        <span key={idx} className="chip" aria-hidden={idx >= techStack.length ? 'true' : undefined}>
                            <span className="chip-plus">+</span>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HeroSection;
