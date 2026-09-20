import React, { useState } from 'react';
import { celebrate } from '../lib/celebrate';
import {
    Mail,
    Send,
    MapPin,
    Sparkles,
    CheckCircle2,
    Copy,
    Check,
    MessageSquare,
    ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';


const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        subject: 'Hiring & Full-Time Role',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [copied, setCopied] = useState(false);

    const subjects = [
        'Hiring & Full-Time Role',
        'Freelance Project',
        'Open Source Collaboration',
        'Quick Chat / Connect'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        setTimeout(() => {
            setIsSending(false);
            setIsSent(true);

            celebrate({ palette: 'indigo' });

            // Reset after delay
            setTimeout(() => {
                setFormData({
                    fullname: '',
                    email: '',
                    subject: 'Hiring & Full-Time Role',
                    message: ''
                });
                setIsSent(false);
            }, 6000);
        }, 1200);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText('devendramishra495@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const contactChannels = [
        {
            title: "Email",
            value: "devendramishra495@gmail.com",
            icon: Mail,
            actionText: "Send Mail",
            link: "mailto:devendramishra495@gmail.com",
            accent: "#38bdf8"
        },
        {
            title: "LinkedIn",
            value: "devendra-mishra",
            icon: Linkedin,
            actionText: "Connect",
            link: "https://www.linkedin.com/in/devendra-mishra-b9613b339/",
            accent: "#6366f1"
        },
        {
            title: "GitHub",
            value: "@Mishra-coder",
            icon: Github,
            actionText: "Explore Repos",
            link: "https://github.com/Mishra-coder",
            accent: "#a855f7"
        },
        {
            title: "Location",
            value: "Pune, Maharashtra, India",
            icon: MapPin,
            actionText: "NST Campus",
            link: null,
            accent: "#10b981"
        }
    ];

    return (
        <article id="contact" className="contact active editorial-section-card" data-page="contact">
            <header className="page-header">
                <div className="badge-pill">
                    <Sparkles size={14} />
                    <span>Get In Touch</span>
                </div>
                <h2 className="h2 article-title">Let's Build Together</h2>
            </header>

            {/* Intro Callout Card */}
            <div className="contact-callout-card tilt-3d">
                <div className="callout-text">
                    <h3 className="callout-heading">Have a project, opportunity, or idea?</h3>
                    <p className="callout-desc">
                        Whether you are looking for a dedicated full-stack developer, an AI/ML enthusiast,
                        or an open-source contributor, my inbox is always open.
                    </p>
                </div>
                <button
                    type="button"
                    className="copy-email-callout-btn"
                    onClick={copyEmail}
                    title="Copy Email to Clipboard"
                >
                    {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                    <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
            </div>

            {/* 3D Contact Channel Cards */}
            <div className="contact-channels-grid">
                {contactChannels.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                        <div key={idx} className="contact-channel-card tilt-3d">
                            <div
                                className="channel-icon-box"
                                style={{ color: item.accent, borderColor: `${item.accent}30` }}
                            >
                                <IconComp size={22} />
                            </div>
                            <div className="channel-info">
                                <span className="channel-title">{item.title}</span>
                                <p className="channel-value">{item.value}</p>
                            </div>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="channel-action-link"
                                    title={item.actionText}
                                >
                                    <span>{item.actionText}</span>
                                    <ExternalLink size={13} />
                                </a>
                            ) : (
                                <span className="channel-static-badge">{item.actionText}</span>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Interactive Contact Form */}
            <section className="contact-form-section tilt-3d">
                <div className="form-header-bar">
                    <div className="form-header-icon">
                        <MessageSquare size={20} />
                    </div>
                    <div>
                        <h3 className="form-title">Send a Direct Message</h3>
                        <p className="form-subtitle">I typically respond within 24 hours.</p>
                    </div>
                </div>

                {isSent ? (
                    <div className="form-success-banner">
                        <CheckCircle2 size={44} color="#10b981" />
                        <h4 className="success-heading">Message Sent Successfully!</h4>
                        <p className="success-text">
                            Thank you for reaching out, Devendra has received your note and will get back to you soon.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-interactive-form">
                        {/* Subject Chips Selector */}
                        <div className="subject-selector-group">
                            <label className="field-label">Purpose of Contact:</label>
                            <div className="subject-chips">
                                {subjects.map((subj) => (
                                    <button
                                        key={subj}
                                        type="button"
                                        className={`subject-chip ${formData.subject === subj ? 'active' : ''}`}
                                        onClick={() => setFormData({ ...formData, subject: subj })}
                                    >
                                        {subj}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="input-row-dual">
                            <div className="form-group">
                                <label className="field-label" htmlFor="fullname">Your Name</label>
                                <input
                                    id="fullname"
                                    type="text"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                    placeholder="Devendra Mishra"
                                    className="custom-form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label className="field-label" htmlFor="email">Your Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                    className="custom-form-input"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="field-label" htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Hi Devendra, let's collaborate on..."
                                className="custom-form-textarea"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="send-message-btn-3d"
                        >
                            {isSending ? (
                                <>
                                    <span className="sending-spinner"></span>
                                    <span>Sending Message...</span>
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </form>
                )}
            </section>
        </article>
    );
};

export default Contact;
