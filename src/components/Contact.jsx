import React, { useState } from 'react';
import { celebrate } from '../lib/celebrate';
import {
    Mail,
    Send,
    MapPin,
    CheckCircle2,
    Copy,
    Check,
    MessageSquare,
    ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import SectionHead from './SectionHead';


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
        navigator.clipboard?.writeText('devendramishra495@gmail.com');
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
            tone: "is-paper"
        },
        {
            title: "LinkedIn",
            value: "devendra-mishra",
            icon: Linkedin,
            actionText: "Connect",
            link: "https://www.linkedin.com/in/devendra-mishra-b9613b339/",
            tone: "is-linkedin"
        },
        {
            title: "GitHub",
            value: "@Mishra-coder",
            icon: Github,
            actionText: "Explore Repos",
            link: "https://github.com/Mishra-coder",
            tone: "is-dark"
        },
        {
            title: "Location",
            value: "Pune, Maharashtra, India",
            icon: MapPin,
            actionText: "NST Campus",
            link: null,
            tone: "is-orange"
        }
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <SectionHead num="07" label="Get In Touch" title="Let's Build Together" center />

                <div className="contact-callout reveal">
                    <h3 className="hand-kicker is-big">Have a project, opportunity, or idea?</h3>
                    <p className="body-text">
                        Whether you are looking for a dedicated full-stack developer, an AI/ML enthusiast,
                        or an open-source contributor, my inbox is always open.
                    </p>
                    <button
                        type="button"
                        className={`email-pill ${copied ? 'is-copied' : ''}`}
                        onClick={copyEmail}
                        title="Copy Email to Clipboard"
                        aria-live="polite"
                    >
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                        <span>{copied ? 'Email Copied!' : 'devendramishra495@gmail.com'}</span>
                        {!copied && <span className="sr-only">Copy Email</span>}
                    </button>
                </div>

                {/* Contact channels as puffy icons */}
                <div className="channel-row reveal">
                    {contactChannels.map((item) => {
                        const IconComp = item.icon;
                        const inner = (
                            <>
                                <span className={`clay-icon is-xl ${item.tone}`}><IconComp size={30} /></span>
                                <span className="channel-title">{item.title}</span>
                                <span className="channel-value">{item.value}</span>
                                <span className="channel-action">
                                    {item.actionText}
                                    {item.link && <ExternalLink size={12} />}
                                </span>
                            </>
                        );
                        return item.link ? (
                            <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="channel" title={item.actionText}>
                                {inner}
                            </a>
                        ) : (
                            <div key={item.title} className="channel">{inner}</div>
                        );
                    })}
                </div>

                {/* Contact Form */}
                <div className="stamp-card form-card reveal">
                    <div className="form-head">
                        <span className="clay-icon is-blue"><MessageSquare size={20} /></span>
                        <div>
                            <h3 className="card-title is-big">Send a Direct Message</h3>
                            <p className="body-text is-small">I typically respond within 24 hours.</p>
                        </div>
                    </div>

                    {isSent ? (
                        <div className="form-success">
                            <CheckCircle2 size={44} className="text-blue" />
                            <h4 className="work-title is-medium">Message Sent Successfully!</h4>
                            <p className="body-text">
                                Thank you for reaching out, Devendra has received your note and will get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <span className="field-label" id="subject-label">Purpose of Contact:</span>
                                <div className="chip-row" role="group" aria-labelledby="subject-label">
                                    {subjects.map((subj) => (
                                        <button
                                            key={subj}
                                            type="button"
                                            className={`chip is-toggle ${formData.subject === subj ? 'is-active' : ''}`}
                                            aria-pressed={formData.subject === subj}
                                            onClick={() => setFormData({ ...formData, subject: subj })}
                                        >
                                            {subj}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="form-row">
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
                                        className="field"
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
                                        className="field"
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
                                    className="field"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="btn-dark is-wide"
                            >
                                {isSending ? (
                                    <>
                                        <span className="spinner"></span>
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
                </div>
            </div>
        </section>
    );
};

export default Contact;
