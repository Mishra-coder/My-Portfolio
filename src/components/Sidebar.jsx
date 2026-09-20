import React, { useState } from 'react';
import profileImg from '../assets/avatar_comic.jpg';
import leetcodeIcon from '../assets/leetcode_icon.png';
import {
    Mail,
    Phone,
    MapPin,
    Calendar,
    ChevronDown,
    ExternalLink,
    Copy,
    Check,
    Sparkles
} from 'lucide-react';
import { Github, Linkedin } from './Icons';


const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const [copiedField, setCopiedField] = useState(null);

    const toggleSidebar = () => setIsActive(!isActive);

    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    return (
        <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
            {/* Top Profile Summary */}
            <div className="sidebar-info">
                <div className="avatar-wrapper tilt-3d">
                    <figure className="avatar-box">
                        <img
                            src={profileImg}
                            alt="Devendra Mishra"
                            className="avatar-img"
                        />
                    </figure>
                    <div className="status-badge" title="Open to Opportunities">
                        <span className="status-dot"></span>
                        <span className="status-text">Available</span>
                    </div>
                </div>

                <div className="info-content">
                    <h1 className="name" title="Devendra Mishra">Devendra Mishra</h1>
                    <div className="title-tag">
                        <Sparkles size={13} className="sparkle-icon" />
                        <span>Full Stack & AI Engineer</span>
                    </div>
                    <p className="college-tag">B.Tech CS (AI & ML) • NST Pune</p>
                </div>

                <button
                    type="button"
                    className="info_more-btn"
                    onClick={toggleSidebar}
                    aria-label="Toggle contact details"
                >
                    <span>{isActive ? 'Hide Info' : 'Show Info'}</span>
                    <ChevronDown size={18} className={`chevron-icon ${isActive ? 'rotated' : ''}`} />
                </button>
            </div>

            {/* Quick Highlights Strip */}
            <div className="quick-stats-strip">
                <div className="stat-pill">
                    <span className="stat-number">6+</span>
                    <span className="stat-label">Projects</span>
                </div>
                <div className="stat-pill">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">PR Merge</span>
                </div>
                <div className="stat-pill">
                    <span className="stat-number">NST</span>
                    <span className="stat-label">Pune</span>
                </div>
            </div>

            {/* Collapsible/Expandable Details */}
            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <Mail size={18} />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a
                                href="mailto:devendra.mishra@adypu.edu.in"
                                className="contact-link"
                                title="Send Email"
                            >
                                devendra.mishra@adypu.edu.in
                            </a>
                        </div>
                        <button
                            type="button"
                            className="copy-btn"
                            onClick={() => copyToClipboard('devendra.mishra@adypu.edu.in', 'email')}
                            title="Copy email"
                        >
                            {copiedField === 'email' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                        </button>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <Phone size={18} />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+918795537883" className="contact-link">+91 8795537883</a>
                        </div>
                        <button
                            type="button"
                            className="copy-btn"
                            onClick={() => copyToClipboard('+918795537883', 'phone')}
                            title="Copy phone"
                        >
                            {copiedField === 'phone' ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                        </button>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <Calendar size={18} />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="2006-01-01" className="contact-value">January 01, 2006</time>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <MapPin size={18} />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address className="contact-value">Pune, Maharashtra, India</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

                {/* Social Links */}
                <div className="social-section">
                    <p className="social-heading">Connect With Me</p>
                    <ul className="social-list">
                        <li className="social-item">
                            <a
                                href="https://github.com/Mishra-coder"
                                className="social-link"
                                target="_blank"
                                rel="noreferrer"
                                title="GitHub Profile"
                            >
                                <Github size={19} />
                            </a>
                        </li>
                        <li className="social-item">
                            <a
                                href="https://linkedin.com/in/devendra-mishra-b9613b339/"
                                className="social-link"
                                target="_blank"
                                rel="noreferrer"
                                title="LinkedIn Profile"
                            >
                                <Linkedin size={19} />
                            </a>
                        </li>
                        <li className="social-item">
                            <a
                                href="https://leetcode.com/u/Devendra870/"
                                className="social-link leetcode-link"
                                target="_blank"
                                rel="noreferrer"
                                title="LeetCode Profile"
                            >
                                <img
                                    src={leetcodeIcon}
                                    alt="LeetCode"
                                    className="leetcode-img"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
