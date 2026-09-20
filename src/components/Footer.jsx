import React from 'react';
import leetcodeIcon from '../assets/leetcode_icon.webp';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Footer = ({ onOpenSection }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="ref-footer-section">
            {/* 1. RADIANT PRE-FOOTER BANNER ("Let's Make It Happen") */}
            <div className="ref-prefooter-banner">
                <div className="ref-banner-lime-glow" aria-hidden="true"></div>
                <div className="ref-banner-content">
                    <h2 className="ref-banner-title">Let's Make It Happen</h2>
                    <p className="ref-banner-sub">
                        Please feel free to reach out for software projects, full-stack development, applied AI solutions, or full-time / internship collaborations.
                    </p>
                    <button
                        type="button"
                        className="ref-banner-cta-btn"
                        onClick={() => onOpenSection?.('contact')}
                    >
                        <span>Get in Touch</span>
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            <div className="ref-footer-inner">
                {/* 3. GIANT EDITORIAL SIGNATURE (Exact match to reference bottom) */}
                <div className="ref-giant-signature-wrap">
                    <span className="ref-giant-signature-text">Devendra Mishra</span>
                </div>

                {/* 4. COPYRIGHT & BACK TO TOP */}
                <div className="ref-footer-bottom-bar">
                    <p className="ref-footer-copy">
                        © {new Date().getFullYear()} Devendra Mishra • Newton School of Technology, Pune.
                    </p>

                    <div className="ref-footer-bottom-actions">
                        <div className="ref-footer-socials">
                            <a
                                href="https://github.com/Mishra-coder"
                                target="_blank"
                                rel="noreferrer"
                                className="ref-footer-icon-btn"
                                title="GitHub"
                            >
                                <Github size={17} />
                            </a>
                            <a
                                href="https://linkedin.com/in/devendra-mishra-b9613b339/"
                                target="_blank"
                                rel="noreferrer"
                                className="ref-footer-icon-btn"
                                title="LinkedIn"
                            >
                                <Linkedin size={17} />
                            </a>
                            <a
                                href="https://leetcode.com/u/Devendra870/"
                                target="_blank"
                                rel="noreferrer"
                                className="ref-footer-icon-btn"
                                title="LeetCode @Devendra870"
                            >
                                <img src={leetcodeIcon} alt="LeetCode" className="ref-footer-leetcode-img" />
                            </a>
                        </div>

                        <button
                            type="button"
                            className="ref-footer-top-btn"
                            onClick={scrollToTop}
                            title="Back to Top"
                        >
                            <span>Back to top</span>
                            <ArrowUp size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

