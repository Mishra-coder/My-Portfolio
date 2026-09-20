import React from 'react';
import hacktoberfestBadge from '../assets/hacktoberfest_badge.webp';
import certificationImg from '../assets/certification_bg.webp';
import {
    Award,
    Sparkles,
    ExternalLink,
    GitPullRequest,
    Gamepad2,
    CheckCircle,
    Trophy,
    Calendar
} from 'lucide-react';

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
            verifyLink: "https://www.holopin.io/@mishracoder#",
            accentColor: "#f97316"
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
            verifyLink: "https://www.coursera.org/account/accomplishments/verify/4YXZL62PUW4W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
            accentColor: "#6366f1"
        },
        {
            title: "E-Sports Coordinator & Organizer",
            badge: "BGMI & Free Fire Collegiate Series",
            date: "College Series",
            description: "Spearheaded college-level esports competitions, coordinating multiplayer tournament brackets, live streaming operations, and team logistics for competitive gaming rosters.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
            icon: Gamepad2,
            highlight: "Event Leadership",
            tag: "Event Management",
            accentColor: "#10b981"
        }
    ];

    return (
        <article id="achievements" className="achievements active editorial-section-card" data-page="achievements">
            <header className="page-header">
                <div className="badge-pill">
                    <Sparkles size={14} />
                    <span>Recognitions & Milestones</span>
                </div>
                <h2 className="h2 article-title">Honors & Achievements</h2>
            </header>

            {/* Top Highlights Banner */}
            <div className="achievement-highlights-bar tilt-3d">
                <div className="highlight-item">
                    <Trophy size={20} color="#fbbf24" />
                    <div>
                        <strong>Hacktoberfest Winner</strong>
                        <p>Verified Open-Source Contributions</p>
                    </div>
                </div>
                <div className="highlight-item">
                    <Award size={20} color="#38bdf8" />
                    <div>
                        <strong>Workshop Speaker</strong>
                        <p>Mentored DSA & Web Dev Sessions</p>
                    </div>
                </div>
                <div className="highlight-item">
                    <Gamepad2 size={20} color="#10b981" />
                    <div>
                        <strong>Esports Operations</strong>
                        <p>Campus Tournament Director</p>
                    </div>
                </div>
            </div>

            {/* 3D Achievement Cards List */}
            <div className="achievements-card-list">
                {achievements.map((item, index) => {
                    const IconComp = item.icon;
                    return (
                        <div key={index} className="achievement-item-3d tilt-3d">
                            <div className="achievement-img-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="achievement-media"
                                    loading="lazy"
                                />
                                <div className="achievement-tag-badge">
                                    <IconComp size={13} />
                                    <span>{item.tag}</span>
                                </div>
                            </div>

                            <div className="achievement-details">
                                <div className="achievement-top-meta">
                                    <span
                                        className="achievement-category-pill"
                                        style={{ color: item.accentColor, borderColor: `${item.accentColor}40` }}
                                    >
                                        {item.badge}
                                    </span>
                                    <div className="achievement-date">
                                        <Calendar size={13} />
                                        <span>{item.date}</span>
                                    </div>
                                </div>

                                <h3 className="achievement-title-text">{item.title}</h3>
                                <p className="achievement-desc-text">{item.description}</p>

                                <div className="achievement-footer-row">
                                    <span className="achievement-metric-tag">
                                        <CheckCircle size={14} color="#10b981" />
                                        <span>{item.highlight}</span>
                                    </span>

                                    {item.verifyLink && (
                                        <a
                                            href={item.verifyLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="verify-link-btn"
                                            title="Verify Credential"
                                        >
                                            <span>Verify Credential</span>
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </article>
    );
};

export default Achievements;
