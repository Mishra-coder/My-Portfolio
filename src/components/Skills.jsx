import React from 'react';
import {
    Layout,
    Database,
    BrainCircuit,
    Smartphone,
    Sparkles,
    CheckCircle2
} from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            category: "Front-End Engineering",
            icon: Layout,
            accent: "linear-gradient(135deg, rgba(132, 204, 22, 0.12), rgba(88, 125, 52, 0.04))",
            color: "#84cc16",
            description: "Crafting fluid, accessible, and reactive user interfaces with modern component architectures and micro-interactions.",
            skills: [
                { name: "React / Next.js", level: 92 },
                { name: "TypeScript / JavaScript (ES6+)", level: 94 },
                { name: "Tailwind CSS & Modern CSS3", level: 90 },
                { name: "State Management & React Query", level: 86 }
            ],
            badges: ["Component Design", "Responsive Layouts", "Performance Optimization", "Web Vitals"]
        },
        {
            category: "Back-End & Database Architecture",
            icon: Database,
            accent: "linear-gradient(135deg, rgba(88, 125, 52, 0.12), rgba(101, 163, 13, 0.04))",
            color: "#587D34",
            description: "Designing reliable RESTful APIs, relational & document data models, and scalable asynchronous backend services.",
            skills: [
                { name: "Node.js & Express.js", level: 88 },
                { name: "MongoDB & Mongoose", level: 90 },
                { name: "MySQL / Relational DBs", level: 86 },
                { name: "REST API Architecture & Auth", level: 91 }
            ],
            badges: ["JWT Authentication", "Schema Design", "CRUD Optimization", "Microservices Basics"]
        },
        {
            category: "AI, Machine Learning & Core CS",
            icon: BrainCircuit,
            accent: "linear-gradient(135deg, rgba(101, 163, 13, 0.12), rgba(88, 125, 52, 0.04))",
            color: "#65a30d",
            description: "Rigorous coursework at NST Pune in Artificial Intelligence, Machine Learning algorithms, and Data Structures in Python.",
            skills: [
                { name: "Python Core & Scripting", level: 90 },
                { name: "Data Structures & Algorithms", level: 88 },
                { name: "Applied Machine Learning", level: 82 },
                { name: "Model Integration & Logic", level: 84 }
            ],
            badges: ["Algorithm Design", "Mathematical Modeling", "AI Workflows", "Problem Solving"]
        },
        {
            category: "Mobile & Developer Tooling",
            icon: Smartphone,
            accent: "linear-gradient(135deg, rgba(16, 185, 129, 0.14), rgba(132, 204, 22, 0.04))",
            color: "#10b981",
            description: "Building production mobile applications with React Native and using modern developer tooling for continuous collaboration.",
            skills: [
                { name: "React Native (iOS & Android)", level: 88 },
                { name: "Git, GitHub & Version Control", level: 94 },
                { name: "Vite, npm & Build Systems", level: 90 },
                { name: "Postman & API Testing", level: 87 }
            ],
            badges: ["Mobile Navigation", "Open Source PRs", "CLI Tools", "Cross-Platform Deployment"]
        }
    ];

    return (
        <article id="skills" className="skills active editorial-section-card" data-page="skills">
            <header className="page-header">
                <div className="badge-pill">
                    <Sparkles size={14} />
                    <span>Technical Proficiency</span>
                </div>
                <h2 className="h2 article-title">Skills & Capabilities</h2>
            </header>

            {/* Quick Core Strengths Banner */}
            <div className="skills-overview-strip tilt-3d">
                <div className="overview-item">
                    <CheckCircle2 size={18} color="#84cc16" />
                    <span>Full-Stack Development</span>
                </div>
                <div className="overview-item">
                    <CheckCircle2 size={18} color="#587D34" />
                    <span>Mobile Engineering (React Native)</span>
                </div>
                <div className="overview-item">
                    <CheckCircle2 size={18} color="#65a30d" />
                    <span>AI & ML Specialization</span>
                </div>
                <div className="overview-item">
                    <CheckCircle2 size={18} color="#10b981" />
                    <span>DSA Problem Solving</span>
                </div>
            </div>

            {/* Categorized 3D Skill Cards */}
            <div className="skill-groups-grid">
                {skillGroups.map((group, idx) => {
                    const IconComp = group.icon;
                    return (
                        <div
                            key={idx}
                            className="skill-group-card-3d tilt-3d"
                            style={{ background: group.accent }}
                        >
                            <div className="skill-group-header">
                                <div
                                    className="skill-group-icon"
                                    style={{ color: group.color, borderColor: `${group.color}30` }}
                                >
                                    <IconComp size={22} />
                                </div>
                                <div>
                                    <h3 className="skill-group-title">{group.category}</h3>
                                    <p className="skill-group-desc">{group.description}</p>
                                </div>
                            </div>

                            <div className="skills-progress-list">
                                {group.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="skill-progress-item">
                                        <div className="skill-meta-row">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-pct">{skill.level}%</span>
                                        </div>
                                        <div className="progress-bar-bg">
                                            <div
                                                className="progress-bar-fill"
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: `linear-gradient(90deg, ${group.color}, #65a30d)`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="skill-badges-footer">
                                {group.badges.map((badge, bIdx) => (
                                    <span key={bIdx} className="competency-badge">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </article>
    );
};

export default Skills;
