import React from 'react';
import leetcodeIcon from '../assets/leetcode_icon.webp';
import { ArrowUp, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import PuffyName from './PuffyName';
import { Sparkle } from './Doodles';

const Footer = ({ onOpenSection }) => {
    const scrollToTop = () => {
        const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
    };

    return (
        <footer className="site-footer">
            {/* Pre-footer banner */}
            <div className="container">
                <div className="banner soft-card reveal">
                    <Sparkle className="banner-sparkle" />
                    <h2 className="section-title">Let's Make It Happen</h2>
                    <p className="section-intro">
                        Please feel free to reach out for software projects, full-stack development, applied AI solutions, or full-time / internship collaborations.
                    </p>
                    <button
                        type="button"
                        className="btn-dark"
                        onClick={() => onOpenSection?.('contact')}
                    >
                        <span>Get in Touch</span>
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            {/* Giant signature */}
            <div className="signature" role="img" aria-label="Devendra Mishra">
                <PuffyName sizes="(max-width: 960px) 90vw, 1000px" />
                <span className="signature-sticker" aria-hidden="true">Mishra</span>
            </div>

            <div className="container footer-bottom">
                <p className="footer-copy">
                    © {new Date().getFullYear()} Devendra Mishra • Newton School of Technology, Pune.
                </p>

                <div className="footer-socials">
                    <a
                        href="https://github.com/Mishra-coder"
                        target="_blank"
                        rel="noreferrer"
                        className="clay-icon is-dark is-sm"
                        title="GitHub"
                        aria-label="GitHub"
                    >
                        <Github size={17} />
                    </a>
                    <a
                        href="https://linkedin.com/in/devendra-mishra-b9613b339/"
                        target="_blank"
                        rel="noreferrer"
                        className="clay-icon is-linkedin is-sm"
                        title="LinkedIn"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={17} />
                    </a>
                    <a
                        href="https://leetcode.com/u/Devendra870/"
                        target="_blank"
                        rel="noreferrer"
                        className="clay-icon is-paper is-sm"
                        title="LeetCode @Devendra870"
                    >
                        <img src={leetcodeIcon} alt="LeetCode" width="18" height="18" />
                    </a>
                </div>

                <button
                    type="button"
                    className="thanks-btn"
                    onClick={scrollToTop}
                    title="Back to Top"
                >
                    <span>Back to top</span>
                    <ArrowUp size={16} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
