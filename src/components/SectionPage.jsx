import React, { useEffect } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Achievements from './Achievements';
import Resume from './Resume';
import Contact from './Contact';
import devendraPortrait from '../assets/devendra_portrait.webp';
import { ArrowLeft, User, FolderGit2, Cpu, Award, FileText, Mail } from 'lucide-react';

const tabs = [
    { id: 'about', label: 'About Me', icon: User, title: 'About' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, title: 'Projects' },
    { id: 'skills', label: 'Skills', icon: Cpu, title: 'Skills' },
    { id: 'achievements', label: 'Achievements', icon: Award, title: 'Achievements' },
    { id: 'resume', label: 'Resume', icon: FileText, title: 'Resume' },
    { id: 'contact', label: 'Contact', icon: Mail, title: 'Contact' },
];

const sections = { about: About, projects: Portfolio, skills: Skills, achievements: Achievements, resume: Resume, contact: Contact };

/** Full-page section view (routes /about, /projects, ...). */
const SectionPage = ({ activeTab, onNavigate }) => {
    const Section = sections[activeTab] || About;

    useEffect(() => {
        const tab = tabs.find((t) => t.id === activeTab);
        document.title = `${tab?.title || 'Profile'} | Devendra Mishra`;
        return () => { document.title = 'Devendra Mishra | Portfolio'; };
    }, [activeTab]);

    const go = (e, path) => {
        e.preventDefault();
        onNavigate(path);
    };

    return (
        <main className="ref-page">
            <div className="ref-modal-container ref-page-container">
                <header className="ref-modal-header">
                    <a href="/" className="ref-modal-brand" onClick={(e) => go(e, '/')}>
                        <img src={devendraPortrait} alt="Devendra Mishra" className="ref-modal-avatar" />
                        <div className="ref-modal-brand-text">
                            <span className="ref-modal-brand-name">Devendra Mishra</span>
                            <span className="ref-modal-brand-tag">
                                <span className="ref-modal-live-dot"></span>
                                Profile Explorer
                            </span>
                        </div>
                    </a>

                    <nav className="ref-modal-tabs" aria-label="Profile sections">
                        {tabs.map((tab) => {
                            const IconComp = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <a
                                    key={tab.id}
                                    href={`/${tab.id}`}
                                    className={`ref-modal-tab-btn ${isActive ? 'active' : ''}`}
                                    aria-current={isActive ? 'page' : undefined}
                                    onClick={(e) => go(e, `/${tab.id}`)}
                                >
                                    <IconComp size={15} />
                                    <span>{tab.label}</span>
                                </a>
                            );
                        })}
                    </nav>

                    <a href="/" className="ref-modal-close-btn" onClick={(e) => go(e, '/')}>
                        <ArrowLeft size={16} />
                        <span>Home</span>
                    </a>
                </header>

                <div className="ref-modal-body">
                    <div className="ref-modal-content-wrapper">
                        <Section />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SectionPage;
