import React from 'react';
import AiOrb from './AiOrb';
import GithubGraph from './GithubGraph';
import SectionHead from './SectionHead';
import leetcodeIcon from '../assets/leetcode_icon.webp';
import mobileDevIcon from '../assets/mobile_dev_icon_new.webp';
import aiIcon from '../assets/ai_icon_v2.webp';
import {
    BrainCircuit,
    Layers,
    Smartphone,
    GitPullRequest,
    GraduationCap,
    Award,
    Code2,
    Flame,
    ArrowUpRight,
    Terminal
} from 'lucide-react';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons';

const About = () => {
    const services = [
        {
            title: "Artificial Intelligence & ML",
            description: "Developing intelligent solutions, fine-tuned models, and applied data algorithms with Python and PyTorch/TensorFlow.",
            image: aiIcon,
            tag: "AI & ML"
        },
        {
            title: "Full-Stack Web Engineering",
            description: "Architecting high-concurrency systems, RESTful microservices, and reactive SPAs using React, Node.js, and modern databases.",
            lucideIcon: Layers,
            tag: "Web Systems"
        },
        {
            title: "Mobile App Development",
            description: "Crafting fluid, native-grade cross-platform mobile apps for iOS and Android with React Native and modern state management.",
            image: mobileDevIcon,
            tag: "iOS & Android"
        },
        {
            title: "Open Source & Architecture",
            description: "Delivering production-quality pull requests to global repositories and designing robust, clean modular codebases.",
            lucideIcon: GitPullRequest,
            tag: "Open Source"
        }
    ];

    const techStack = [
        { name: "React", category: "Frontend", icon: "react/react-original" },
        { name: "TypeScript", category: "Language", icon: "typescript/typescript-original" },
        { name: "JavaScript", category: "Language", icon: "javascript/javascript-original" },
        { name: "Node.js", category: "Backend", icon: "nodejs/nodejs-original" },
        { name: "Python", category: "AI / Core", icon: "python/python-original" },
        { name: "React Native", category: "Mobile", icon: "react/react-original" },
        { name: "Tailwind CSS", category: "Frontend", icon: "tailwindcss/tailwindcss-original" },
        { name: "MongoDB", category: "Database", icon: "mongodb/mongodb-original" },
        { name: "MySQL / SQL", category: "Database", icon: "mysql/mysql-original" },
        { name: "Git & GitHub", category: "DevOps", icon: "git/git-original" },
        { name: "Next.js", category: "Framework", icon: "nextjs/nextjs-original" },
        { name: "Vite", category: "Tooling", icon: "vitejs/vitejs-original" }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <SectionHead num="03" label="Welcome to my digital space" title="About Me" />

                {/* Introduction */}
                <div className="about-intro soft-card reveal">
                    <div className="about-intro-text">
                        <span className="hand-kicker">Hello, I'm Devendra Mishra</span>
                        <h3 className="about-tagline">
                            Building <span className="hand-underline">Intelligent Applications</span> & Scalable Architecture
                        </h3>

                        <p className="body-text">
                            I am a Computer Science & AI undergraduate at <strong>Newton School of Technology, Pune</strong>.
                            Passionate about bridging the gap between algorithmic intelligence and elegant user experiences,
                            I specialize in building full-stack platforms, high-performance mobile applications, and applied AI systems.
                        </p>

                        <div className="chip-row">
                            <span className="chip"><Terminal size={14} /> Full Stack Architecture</span>
                            <span className="chip"><BrainCircuit size={14} /> AI & Applied ML</span>
                            <span className="chip"><Smartphone size={14} /> React Native</span>
                        </div>
                    </div>

                    <div className="about-orb" data-anim>
                        <AiOrb size={220} />
                        <span className="mono-caption">AI &amp; Systems Core</span>
                    </div>
                </div>

                {/* Metrics & Proof */}
                <div className="metrics-grid">
                    <div className="stamp-card metric-card reveal tilt-3d">
                        <span className="clay-icon is-orange"><Flame size={22} /></span>
                        <span className="metric-number">Continuous</span>
                        <h4 className="metric-title">GitHub Activity</h4>
                        <p className="metric-desc">Regular commits & active repository contributions.</p>
                    </div>

                    <div className="stamp-card metric-card reveal tilt-3d">
                        <span className="clay-icon is-blue"><Award size={22} /></span>
                        <span className="metric-number">100%</span>
                        <h4 className="metric-title">PR Acceptance</h4>
                        <p className="metric-desc">Hacktoberfest contributor to global projects.</p>
                    </div>

                    <div className="stamp-card metric-card reveal tilt-3d">
                        <span className="clay-icon is-green"><Code2 size={22} /></span>
                        <span className="metric-number">DSA & Systems</span>
                        <h4 className="metric-title">Problem Solving</h4>
                        <p className="metric-desc">Active algorithmic training on LeetCode.</p>
                    </div>
                </div>

                {/* GitHub calendar */}
                <h3 className="mono-heading reveal">GitHub</h3>
                <GithubGraph />

                {/* Services / What I Do */}
                <div className="sub-head reveal">
                    <h3 className="sub-title">What I Do</h3>
                    <span className="mono-heading">Core Pillars of Expertise</span>
                </div>

                <div className="services-grid">
                    {services.map((service) => {
                        const LucideComp = service.lucideIcon;
                        return (
                            <div key={service.title} className="soft-card service-card reveal tilt-3d">
                                <div className="service-top">
                                    <span className="service-icon">
                                        {service.image ? (
                                            <img src={service.image} alt="" width="56" height="56" loading="lazy" />
                                        ) : (
                                            <LucideComp size={26} />
                                        )}
                                    </span>
                                    <span className="mono-tag">{service.tag}</span>
                                </div>
                                <h4 className="card-title">{service.title}</h4>
                                <p className="body-text is-small">{service.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Education & Milestones */}
                <div className="sub-head reveal">
                    <h3 className="sub-title">Education & Milestones</h3>
                    <span className="mono-heading">Academic & Leadership Track</span>
                </div>

                <div className="timeline-grid">
                    <div className="stamp-card timeline-card reveal tilt-3d">
                        <div className="timeline-head">
                            <span className="clay-icon is-blue"><GraduationCap size={22} /></span>
                            <div>
                                <span className="mono-caption">2024 — 2028 (Undergraduate)</span>
                                <h4 className="card-title">B.Tech in Computer Science (AI & ML)</h4>
                            </div>
                        </div>
                        <p className="timeline-place">Newton School of Technology (NST), Pune</p>
                        <p className="body-text is-small">
                            Rigorous training in Applied Machine Learning, Data Structures & Algorithms,
                            System Design, and Cloud-Native Full Stack Development.
                        </p>
                    </div>

                    <div className="stamp-card timeline-card reveal tilt-3d">
                        <div className="timeline-head">
                            <span className="clay-icon is-orange"><Award size={22} /></span>
                            <div>
                                <span className="mono-caption">August 2024</span>
                                <h4 className="card-title">Web Dev, DSA & AI/ML Workshop Leader</h4>
                            </div>
                        </div>
                        <p className="timeline-place">Technical Leadership Recognition</p>
                        <p className="body-text is-small">
                            Led hands-on technical sessions mentoring peers through algorithmic problem-solving,
                            modern web architecture, and applied AI workflows.
                        </p>
                    </div>
                </div>

                {/* Technical Toolkit */}
                <div className="sub-head reveal">
                    <h3 className="sub-title">Technical Toolkit</h3>
                    <span className="mono-heading">Technologies I work with daily <span className="count-pill">{techStack.length} tools</span></span>
                </div>

                <div className="tool-row reveal">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="tool-item">
                            <img src={`${DEVICON}/${tech.icon}.svg`} alt="" width="44" height="44" loading="lazy" className="tool-logo" />
                            <span className="tool-name">{tech.name}</span>
                            <span className="tool-cat">{tech.category}</span>
                        </div>
                    ))}
                </div>

                {/* Connect & Explore */}
                <div className="connect-card soft-card reveal">
                    <div>
                        <h4 className="card-title is-big">Explore My Code & Solutions</h4>
                        <p className="body-text">
                            Inspect open-source repositories on GitHub or view problem-solving tracks on LeetCode.
                        </p>
                    </div>
                    <div className="connect-actions">
                        <a
                            href="https://github.com/Mishra-coder"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-dark"
                        >
                            <span>View GitHub</span>
                            <ArrowUpRight size={16} />
                        </a>
                        <a
                            href="https://leetcode.com/u/Devendra870/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-cream"
                        >
                            <img src={leetcodeIcon} alt="" width="18" height="18" />
                            <span>LeetCode Profile</span>
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
