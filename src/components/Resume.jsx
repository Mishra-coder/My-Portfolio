import React from 'react';
import confetti from 'canvas-confetti';
import {
    Download,
    ExternalLink,
    FileText,
    Sparkles,
    GraduationCap,
    Code,
    Briefcase
} from 'lucide-react';

const Resume = () => {
    const resumePdf = "/DEVENDRA_RESUME.pdf";

    const handleDownload = () => {
        // Trigger celebratory confetti burst
        try {
            confetti({
                particleCount: 70,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#6366f1', '#38bdf8', '#a855f7', '#10b981']
            });
        } catch (e) {
            // graceful fallback if canvas not available
        }
    };

    return (
        <article id="resume" className="resume active editorial-section-card" data-page="resume">
            <header className="page-header resume-header-row">
                <div>
                    <div className="badge-pill">
                        <Sparkles size={14} />
                        <span>Curriculum Vitae</span>
                    </div>
                    <h2 className="h2 article-title">Resume</h2>
                </div>

                <div className="resume-actions-top">
                    <a
                        href={resumePdf}
                        download="Devendra_Mishra_Resume.pdf"
                        className="download-btn-3d"
                        onClick={handleDownload}
                    >
                        <Download size={17} />
                        <span>Download CV</span>
                    </a>
                    <a
                        href={resumePdf}
                        target="_blank"
                        rel="noreferrer"
                        className="open-tab-btn"
                        title="Open PDF in new tab"
                    >
                        <ExternalLink size={17} />
                    </a>
                </div>
            </header>

            {/* Quick Resume Summary Card */}
            <div className="resume-summary-card tilt-3d">
                <div className="summary-block">
                    <div className="summary-icon cyan">
                        <GraduationCap size={20} />
                    </div>
                    <div>
                        <h4 className="summary-title">Education</h4>
                        <p className="summary-sub">B.Tech Computer Science (AI & ML)</p>
                        <span className="summary-detail">Newton School of Technology, Pune • 2024–2028</span>
                    </div>
                </div>

                <div className="summary-block">
                    <div className="summary-icon violet">
                        <Code size={20} />
                    </div>
                    <div>
                        <h4 className="summary-title">Core Stack</h4>
                        <p className="summary-sub">Full Stack & Mobile Engineer</p>
                        <span className="summary-detail">React, Node.js, React Native, Python, MongoDB, SQL</span>
                    </div>
                </div>

                <div className="summary-block">
                    <div className="summary-icon emerald">
                        <Briefcase size={20} />
                    </div>
                    <div>
                        <h4 className="summary-title">Career Focus</h4>
                        <p className="summary-sub">Scalable Web & AI Systems</p>
                        <span className="summary-detail">Open-source contributions, high performance apps</span>
                    </div>
                </div>
            </div>

            {/* Resume Viewer Container */}
            <section className="resume-viewer-wrapper tilt-3d">
                <div className="viewer-browser-bar">
                    <div className="browser-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <div className="browser-title">
                        <FileText size={14} />
                        <span>DEVENDRA_RESUME.pdf</span>
                    </div>
                    <a
                        href={resumePdf}
                        download="Devendra_Mishra_Resume.pdf"
                        className="quick-download-link"
                        onClick={handleDownload}
                    >
                        <Download size={14} />
                        <span>Save</span>
                    </a>
                </div>

                <div className="resume-iframe-container">
                    <iframe
                        src={`${resumePdf}#view=FitH&toolbar=0`}
                        width="100%"
                        height="1000px"
                        title="Devendra Mishra Resume PDF"
                        className="resume-iframe"
                    >
                        <div className="pdf-fallback-box">
                            <p>Unable to display PDF preview in this browser.</p>
                            <a
                                href={resumePdf}
                                download="Devendra_Mishra_Resume.pdf"
                                className="download-btn-3d"
                                onClick={handleDownload}
                            >
                                <Download size={16} />
                                <span>Download Devendra_Resume.pdf</span>
                            </a>
                        </div>
                    </iframe>
                </div>
            </section>
        </article>
    );
};

export default Resume;
