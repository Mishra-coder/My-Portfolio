import React from 'react';
import {
    Layout,
    Database,
    BrainCircuit,
    Smartphone,
    CheckCircle2
} from 'lucide-react';
import SectionHead from './SectionHead';

const Skills = () => {
    const skillGroups = [
        {
            category: "Front-End Engineering",
            icon: Layout,
            tone: "is-blue",
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
            tone: "is-green",
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
            tone: "is-orange",
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
            tone: "is-dark",
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
        <section id="skills" className="section">
            <div className="container">
                <SectionHead num="04" label="Technical Proficiency" title="Skills & Capabilities" />

                {/* Quick Core Strengths */}
                <div className="chip-row reveal">
                    <span className="chip"><CheckCircle2 size={16} className="text-blue" /> Full-Stack Development</span>
                    <span className="chip"><CheckCircle2 size={16} className="text-blue" /> Mobile Engineering (React Native)</span>
                    <span className="chip"><CheckCircle2 size={16} className="text-blue" /> AI & ML Specialization</span>
                    <span className="chip"><CheckCircle2 size={16} className="text-blue" /> DSA Problem Solving</span>
                </div>

                <div className="skills-grid">
                    {skillGroups.map((group) => {
                        const IconComp = group.icon;
                        return (
                            <div key={group.category} className="soft-card skill-card reveal tilt-3d">
                                <div className="skill-head">
                                    <span className={`clay-icon ${group.tone}`}><IconComp size={22} /></span>
                                    <div>
                                        <h3 className="card-title">{group.category}</h3>
                                        <p className="body-text is-small">{group.description}</p>
                                    </div>
                                </div>

                                <div className="skill-bars">
                                    {group.skills.map((skill) => (
                                        <div key={skill.name} className="skill-bar">
                                            <div className="skill-bar-meta">
                                                <span>{skill.name}</span>
                                                <span className="mono-caption">{skill.level}%</span>
                                            </div>
                                            <div className="skill-track">
                                                <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="chip-row">
                                    {group.badges.map((badge) => (
                                        <span key={badge} className="chip is-small">
                                            <span className="chip-plus">+</span>
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
