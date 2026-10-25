import React from 'react';
import { celebrate } from '../lib/celebrate';
import {
    Download,
    ExternalLink,
    FileText,
    GraduationCap,
    Code,
    Briefcase
} from 'lucide-react';
import SectionHead from './SectionHead';

const Resume = () => {
    const resumePdf = "/DEVENDRA_RESUME.pdf";

    const handleDownload = () => {
        celebrate({ palette: 'indigo', particleCount: 70, spread: 60, y: 0.7 });
    };

    return (
        <section id="resume" className="section">
            <div className="container">
                <div className="resume-head">
                    <SectionHead num="06" label="Curriculum Vitae" title="Resume" />

                    <div className="resume-actions reveal">
                        <a
                            href={resumePdf}
                            download="Devendra_Mishra_Resume.pdf"
                            className="btn-dark"
                            onClick={handleDownload}
                        >
                            <Download size={17} />
                            <span>Download CV</span>
                        </a>
                        <a
                            href={resumePdf}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-cream is-icon"
                            title="Open PDF in new tab"
                            aria-label="Open PDF in new tab"
                        >
                            <ExternalLink size={17} />
                        </a>
                    </div>
                </div>

                {/* Quick Resume Summary */}
                <div className="highlights-grid">
                    <div className="stamp-card highlight-card reveal">
                        <span className="clay-icon is-blue"><GraduationCap size={20} /></span>
                        <div>
                            <strong>Education</strong>
                            <p className="highlight-sub">B.Tech Computer Science (AI & ML)</p>
                            <p>Newton School of Technology, Pune • 2024–2028</p>
                        </div>
                    </div>

                    <div className="stamp-card highlight-card reveal">
                        <span className="clay-icon is-orange"><Code size={20} /></span>
                        <div>
                            <strong>Core Stack</strong>
                            <p className="highlight-sub">Full Stack & Mobile Engineer</p>
                            <p>React, Node.js, React Native, Python, MongoDB, SQL</p>
                        </div>
                    </div>

                    <div className="stamp-card highlight-card reveal">
                        <span className="clay-icon is-green"><Briefcase size={20} /></span>
                        <div>
                            <strong>Career Focus</strong>
                            <p className="highlight-sub">Scalable Web & AI Systems</p>
                            <p>Open-source contributions, high performance apps</p>
                        </div>
                    </div>
                </div>

                {/* Resume Viewer */}
                <div className="soft-card resume-viewer reveal">
                    <div className="viewer-bar">
                        <div className="viewer-dots" aria-hidden="true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="viewer-title">
                            <FileText size={14} />
                            <span>DEVENDRA_RESUME.pdf</span>
                        </div>
                        <a
                            href={resumePdf}
                            download="Devendra_Mishra_Resume.pdf"
                            className="viewer-save"
                            onClick={handleDownload}
                        >
                            <Download size={14} />
                            <span>Save</span>
                        </a>
                    </div>

                    <div className="viewer-frame">
                        <iframe
                            src={`${resumePdf}#view=FitH&toolbar=0`}
                            width="100%"
                            height="1000px"
                            title="Devendra Mishra Resume PDF"
                            loading="lazy"
                        >
                            <div className="pdf-fallback">
                                <p>Unable to display PDF preview in this browser.</p>
                                <a
                                    href={resumePdf}
                                    download="Devendra_Mishra_Resume.pdf"
                                    className="btn-dark"
                                    onClick={handleDownload}
                                >
                                    <Download size={16} />
                                    <span>Download Devendra_Resume.pdf</span>
                                </a>
                            </div>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
