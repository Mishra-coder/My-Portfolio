import React from 'react';
import hacktoberfestBadge from '../assets/hacktoberfest_badge.webp';
import certificationImg from '../assets/certification_bg.webp';
import {
    Award,
    ExternalLink,
    GitPullRequest,
    Gamepad2,
    CheckCircle,
    Trophy,
    Calendar
} from 'lucide-react';
import SectionHead from './SectionHead';

const Achievements = () => {
    const achievements = [
        {
            title: "Global Open Source Contributor",
            badge: "Hacktoberfest 2025",
            date: "October 2025",
            description: "Delivered 6 production-grade pull requests with a 100% acceptance rate across international open-source codebases, contributing to developer tooling and web utilities.",
            image: hacktoberfestBadge,
            icon: GitPullRequest,
            highlight: "100% PR Merge Rate",
            tag: "Open Source",
            verifyLink: "https://www.holopin.io/@mishracoder#"
        },
        {
            title: "Technical Workshop Leader",
            badge: "Web Dev, DSA & AI/ML",
            date: "August 2024",
            description: "Organized and instructed comprehensive hands-on technical workshops focusing on full-stack web architecture, algorithmic thinking, and modern machine learning concepts.",
            image: certificationImg,
            icon: Award,
            highlight: "Peer Mentor & Speaker",
            tag: "Certification",
            verifyLink: "https://www.coursera.org/account/accomplishments/verify/4YXZL62PUW4W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
        },
        {
            title: "E-Sports Coordinator & Organizer",
            badge: "BGMI & Free Fire Collegiate Series",
            date: "College Series",
            description: "Spearheaded college-level esports competitions, coordinating multiplayer tournament brackets, live streaming operations, and team logistics for competitive gaming rosters.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
            icon: Gamepad2,
            highlight: "Event Leadership",
            tag: "Event Management"
        }
    ];

    return (
        <section id="achievements" className="section">
            <div className="container">
                <SectionHead num="05" label="Recognitions & Milestones" title="Honors & Achievements" />

                {/* Top Highlights */}
                <div className="highlights-grid">
                    <div className="stamp-card highlight-card reveal">
                        <span className="clay-icon is-yellow"><Trophy size={20} /></span>
                        <div>
                            <strong>Hacktoberfest Winner</strong>
                            <p>Verified Open-Source Contributions</p>
                        </div>
                    </div>
                    <div className="stamp-card highlight-card reveal">
                        <span className="clay-icon is-blue"><Award size={20} /></span>
                        <div>
                            <strong>Workshop Speaker</strong>
                            <p>Mentored DSA & Web Dev Sessions</p>
                        </div>
                    </div>
                    <div className="stamp-card highlight-card reveal">
                        <span className="clay-icon is-green"><Gamepad2 size={20} /></span>
                        <div>
                            <strong>Esports Operations</strong>
                            <p>Campus Tournament Director</p>
                        </div>
                    </div>
                </div>

                <div className="achievement-list">
                    {achievements.map((item) => {
                        const IconComp = item.icon;
                        return (
                            <article key={item.title} className="soft-card achievement-card reveal tilt-3d">
                                <div className="achievement-media">
                                    <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                                    <span className="mono-tag is-floating">
                                        <IconComp size={13} />
                                        <span>{item.tag}</span>
                                    </span>
                                </div>

                                <div className="achievement-body">
                                    <div className="achievement-meta">
                                        <span className="mono-tag is-blue">{item.badge}</span>
                                        <span className="mono-caption achievement-date">
                                            <Calendar size={13} />
                                            <span>{item.date}</span>
                                        </span>
                                    </div>

                                    <h3 className="work-title is-medium">{item.title}</h3>
                                    <p className="body-text">{item.description}</p>

                                    <div className="achievement-foot">
                                        <span className="chip is-small">
                                            <CheckCircle size={14} className="text-blue" />
                                            <span>{item.highlight}</span>
                                        </span>

                                        {item.verifyLink && (
                                            <a
                                                href={item.verifyLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-cream is-small"
                                                title="Verify Credential"
                                            >
                                                <span>Verify Credential</span>
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
