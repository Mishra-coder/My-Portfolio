import React, { useEffect } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Achievements from './Achievements';
import Resume from './Resume';
import Contact from './Contact';
import devendraPortrait from '../assets/devendra_portrait.png';
import {
    X,
    User,
    FolderGit2,
    Cpu,
    Award,
    FileText,
    Mail
} from 'lucide-react';

const tabs = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
];

const ProfileModal = ({ isOpen, activeTab, setActiveTab, onClose }) => {
    // ESC key closes modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="ref-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
            <div
                className="ref-modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Ambient Yellow-Green Aura Glows inside Modal */}
                <div className="ref-modal-aura aura-top" aria-hidden="true"></div>
                <div className="ref-modal-aura aura-bottom" aria-hidden="true"></div>

                {/* Sticky Top Header Bar with Segmented Tabs */}
                <header className="ref-modal-header">
                    <div className="ref-modal-brand">
                        <img
                            src={devendraPortrait}
                            alt="Devendra Mishra"
                            className="ref-modal-avatar"
                        />
                        <div className="ref-modal-brand-text">
                            <span className="ref-modal-brand-name">Devendra Mishra</span>
                            <span className="ref-modal-brand-tag">
                                <span className="ref-modal-live-dot"></span>
                                Profile Explorer
                            </span>
                        </div>
                    </div>

                    {/* Navigation Tab Pills */}
                    <nav className="ref-modal-tabs">
                        {tabs.map((tab) => {
                            const IconComp = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    className={`ref-modal-tab-btn ${isActive ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <IconComp size={15} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Close Button */}
                    <button
                        type="button"
                        className="ref-modal-close-btn"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <span>Close</span>
                        <X size={18} />
                    </button>
                </header>

                {/* Main Content Area: Renders the active section */}
                <div className="ref-modal-body">
                    <div className="ref-modal-content-wrapper">
                        {activeTab === 'about' && <About />}
                        {activeTab === 'projects' && <Portfolio />}
                        {activeTab === 'skills' && <Skills />}
                        {activeTab === 'achievements' && <Achievements />}
                        {activeTab === 'resume' && <Resume />}
                        {activeTab === 'contact' && <Contact />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
