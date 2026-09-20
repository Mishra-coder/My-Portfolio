import React from 'react';
import ThreeHeroOrb from './ThreeHeroOrb';
import leetcodeIcon from '../assets/leetcode_icon.png';
import mobileDevIcon from '../assets/mobile_dev_icon_new.png';
import aiIcon from '../assets/ai_icon_v2.png';
import {
    BrainCircuit,
    Layers,
    Smartphone,
    GitPullRequest,
    GraduationCap,
    Award,
    Code2,
    Database,
    Sparkles,
    Flame,
    ArrowUpRight,
    Terminal,
    Cpu
} from 'lucide-react';

const About = () => {
    const services = [
        {
            title: "Artificial Intelligence & ML",
            description: "Developing intelligent solutions, fine-tuned models, and applied data algorithms with Python and PyTorch/TensorFlow.",
            image: aiIcon,
            tag: "AI & ML",
            accent: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.05))"
        },
        {
            title: "Full-Stack Web Engineering",
            description: "Architecting high-concurrency systems, RESTful microservices, and reactive SPAs using React, Node.js, and modern databases.",
            lucideIcon: Layers,
            tag: "Web Systems",
            accent: "linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(99, 102, 241, 0.05))"
        },
        {
            title: "Mobile App Development",
            description: "Crafting fluid, native-grade cross-platform mobile apps for iOS and Android with React Native and modern state management.",
            image: mobileDevIcon,
            tag: "iOS & Android",
            accent: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.05))"
        },
        {
            title: "Open Source & Architecture",
            description: "Delivering production-quality pull requests to global repositories and designing robust, clean modular codebases.",
            lucideIcon: GitPullRequest,
            tag: "Open Source",
            accent: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(56, 189, 248, 0.05))"
        }
    ];

    const techStack = [
        { name: "React", category: "Frontend", color: "#61dafb" },
        { name: "TypeScript", category: "Language", color: "#3178c6" },
        { name: "JavaScript", category: "Language", color: "#f7df1e" },
        { name: "Node.js", category: "Backend", color: "#68a063" },
        { name: "Python", category: "AI / Core", color: "#4584b6" },
        { name: "React Native", category: "Mobile", color: "#61dafb" },
        { name: "Tailwind CSS", category: "Frontend", color: "#38bdf8" },
        { name: "MongoDB", category: "Database", color: "#47a248" },
        { name: "MySQL / SQL", category: "Database", color: "#00758f" },
        { name: "Git & GitHub", category: "DevOps", color: "#f05032" },
        { name: "Next.js", category: "Framework", color: "#ffffff" },
        { name: "Vite", category: "Tooling", color: "#bd34fe" }
    ];

    return (
        <article id="about" className="about active editorial-section-card" data-page="about">
            <header className="page-header">
                <div className="badge-pill">
                    <Sparkles size={14} />
                    <span>Welcome to my digital space</span>
                </div>
                <h2 className="h2 article-title">About Me</h2>
            </header>

            {/* Hero Bento Introduction with 3D Cyber Orb */}
            <section className="about-hero-card tilt-3d">
                <div className="hero-text-content">
                    <div className="hero-greeting">
                        <span className="greeting-line">Hello, I'm Devendra Mishra</span>
                        <h3 className="hero-tagline">
                            Building <span className="gradient-text">Intelligent Applications</span> & Scalable Architecture
                        </h3>
                    </div>

                    <p className="hero-description">
                        I am a Computer Science & AI undergraduate at <strong>Newton School of Technology, Pune</strong>.
                        Passionate about bridging the gap between algorithmic intelligence and elegant user experiences,
                        I specialize in building full-stack platforms, high-performance mobile applications, and applied AI systems.
                    </p>

                    <div className="hero-highlights">
                        <span className="highlight-badge">
                            <Terminal size={14} /> Full Stack Architecture
                        </span>
                        <span className="highlight-badge">
                            <BrainCircuit size={14} /> AI & Applied ML
                        </span>
                        <span className="highlight-badge">
                            <Smartphone size={14} /> React Native
                        </span>
                    </div>
                </div>

                <div className="hero-3d-visual">
                    <ThreeHeroOrb size={240} />
                    <span className="orb-caption">Interactive 3D Core • Drag to Rotate</span>
                </div>
            </section>

            {/* Metrics & Proof Bento */}
            <section className="metrics-grid">
                <div className="metric-card tilt-3d">
                    <div className="metric-icon-box cyan">
                        <Flame size={24} />
                    </div>
                    <div className="metric-info">
                        <span className="metric-number">Continuous</span>
                        <h4 className="metric-title">GitHub Activity</h4>
                        <p className="metric-desc">Regular commits & active repository contributions.</p>
                    </div>
                </div>

                <div className="metric-card tilt-3d">
                    <div className="metric-icon-box violet">
                        <Award size={24} />
                    </div>
                    <div className="metric-info">
                        <span className="metric-number">100%</span>
                        <h4 className="metric-title">PR Acceptance</h4>
                        <p className="metric-desc">Hacktoberfest contributor to global projects.</p>
                    </div>
                </div>

                <div className="metric-card tilt-3d">
                    <div className="metric-icon-box emerald">
                        <Code2 size={24} />
                    </div>
                    <div className="metric-info">
                        <span className="metric-number">DSA & Systems</span>
                        <h4 className="metric-title">Problem Solving</h4>
                        <p className="metric-desc">Active algorithmic training on LeetCode.</p>
                    </div>
                </div>
            </section>

            {/* Services / What I Do */}
            <section className="section-block">
                <div className="section-header-row">
                    <h3 className="h3 section-title">What I Do</h3>
                    <span className="section-subtitle">Core Pillars of Expertise</span>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => {
                        const LucideComp = service.lucideIcon;
                        return (
                            <div
                                key={index}
                                className="service-card-3d tilt-3d"
                                style={{ background: service.accent }}
                            >
                                <div className="card-top-row">
                                    <div className="service-icon-wrapper">
                                        {service.image ? (
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="service-custom-img"
                                            />
                                        ) : (
                                            <LucideComp size={28} className="service-lucide-icon" />
                                        )}
                                    </div>
                                    <span className="service-tag">{service.tag}</span>
                                </div>
                                <h4 className="h4 service-card-title">{service.title}</h4>
                                <p className="service-card-desc">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Education & Certifications Timeline */}
            <section className="section-block">
                <div className="section-header-row">
                    <h3 className="h3 section-title">Education & Milestones</h3>
                    <span className="section-subtitle">Academic & Leadership Track</span>
                </div>

                <div className="timeline-grid">
                    <div className="timeline-card tilt-3d">
                        <div className="timeline-card-header">
                            <div className="timeline-badge-icon">
                                <GraduationCap size={22} />
                            </div>
                            <div>
                                <span className="timeline-period">2024 — 2028 (Undergraduate)</span>
                                <h4 className="h4 timeline-card-heading">B.Tech in Computer Science (AI & ML)</h4>
                            </div>
                        </div>
                        <p className="timeline-card-place">Newton School of Technology (NST), Pune</p>
                        <p className="timeline-card-detail">
                            Rigorous training in Applied Machine Learning, Data Structures & Algorithms,
                            System Design, and Cloud-Native Full Stack Development.
                        </p>
                    </div>

                    <div className="timeline-card tilt-3d">
                        <div className="timeline-card-header">
                            <div className="timeline-badge-icon violet">
                                <Award size={22} />
                            </div>
                            <div>
                                <span className="timeline-period">August 2024</span>
                                <h4 className="h4 timeline-card-heading">Web Dev, DSA & AI/ML Workshop Leader</h4>
                            </div>
                        </div>
                        <p className="timeline-card-place">Technical Leadership Recognition</p>
                        <p className="timeline-card-detail">
                            Led hands-on technical sessions mentoring peers through algorithmic problem-solving,
                            modern web architecture, and applied AI workflows.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Toolkit */}
            <section className="section-block">
                <div className="section-header-row">
                    <h3 className="h3 section-title">Technical Toolkit</h3>
                    <span className="section-subtitle">Technologies I work with daily</span>
                </div>

                <div className="toolkit-grid">
                    {techStack.map((tech, index) => (
                        <div key={index} className="toolkit-chip tilt-3d">
                            <span className="tech-dot" style={{ background: tech.color }}></span>
                            <span className="tech-name">{tech.name}</span>
                            <span className="tech-category">{tech.category}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Connect & Explore */}
            <section className="section-block">
                <div className="connect-bento tilt-3d">
                    <div className="connect-bento-content">
                        <h4 className="h4 connect-heading">Explore My Code & Solutions</h4>
                        <p className="connect-text">
                            Inspect open-source repositories on GitHub or view problem-solving tracks on LeetCode.
                        </p>
                    </div>
                    <div className="connect-bento-actions">
                        <a
                            href="https://github.com/Mishra-coder"
                            target="_blank"
                            rel="noreferrer"
                            className="connect-btn"
                        >
                            <span>View GitHub</span>
                            <ArrowUpRight size={16} />
                        </a>
                        <a
                            href="https://leetcode.com/u/Devendra870/"
                            target="_blank"
                            rel="noreferrer"
                            className="connect-btn leetcode-btn"
                        >
                            <img src={leetcodeIcon} alt="LeetCode" className="btn-inline-icon" />
                            <span>LeetCode Profile</span>
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </article>
    );
};

export default About;
