import React, { useState } from 'react';
import profileImg from '../assets/avatar_comic.jpg';
import leetcodeIcon from '../assets/leetcode_icon.png';
import { AppIcons } from './Icons';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => setIsActive(!isActive);

    return (
        <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
            <div className="sidebar-info" style={{ flexDirection: 'column', textAlign: 'center', padding: '30px 20px' }}>
                <figure className="avatar-box" style={{ background: 'var(--bg-gradient-jet)', margin: '0 auto 20px', width: '120px', height: '120px', borderRadius: '30px', padding: '5px' }}>
                    <img src={profileImg} alt="Devendra Mishra" style={{ width: '100%', height: '100%', borderRadius: '25px', objectFit: 'cover' }} />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Devendra Mishra" style={{ fontSize: '1.6rem', marginBottom: '15px', color: 'var(--white-2)' }}>Devendra Mishra</h1>
                    <p className="title" style={{
                        margin: '0 auto',
                        background: 'var(--onyx)',
                        padding: '5px 18px',
                        borderRadius: '10px',
                        fontSize: 'var(--fs-8)',
                        color: 'var(--white-1)',
                        width: 'max-content'
                    }}>Full Stack & AI Developer</p>
                </div>

                <button className="info_more-btn" onClick={toggleSidebar} data-sidebar-btn>
                    <span>Show Contacts</span>
                    <AppIcons.ChevronRight />
                </button>
            </div>

            <div className="sidebar-info_more">
                <div className="separator"></div>

                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <AppIcons.Mail />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:devendra.mishra@adypu.edu.in" className="contact-link" style={{ wordBreak: 'break-all' }}>devendra.mishra@adypu.edu.in</a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <AppIcons.Phone />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <a href="tel:+918795537883" className="contact-link">+91 8795537883</a>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="calendar-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>
                            <time dateTime="2004-01-01" style={{ color: 'var(--white-2)', fontSize: 'var(--fs-7)' }}>January 01, 2004</time>
                        </div>
                    </li>

                    <li className="contact-item">
                        <div className="icon-box">
                            <ion-icon name="location-outline"></ion-icon>
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Location</p>
                            <address style={{ fontStyle: 'normal', color: 'var(--white-2)', fontSize: 'var(--fs-7)' }}>India</address>
                        </div>
                    </li>
                </ul>

                <div className="separator"></div>

                <ul className="social-list" style={{ justifyContent: 'center', marginTop: '10px', gap: '20px', display: 'flex', listStyle: 'none', padding: 0 }}>
                    <li className="social-item">
                        <a href="https://github.com/Mishra-coder" className="social-link" target="_blank" rel="noreferrer" style={{ color: 'var(--light-gray-70)', fontSize: '20px' }}>
                            <AppIcons.Github />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://linkedin.com/in/devendra-mishra-b9613b339/" className="social-link" target="_blank" rel="noreferrer" style={{ color: 'var(--light-gray-70)', fontSize: '20px' }}>
                            <AppIcons.Linkedin />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://leetcode.com/u/Devendra870/" className="social-link" target="_blank" rel="noreferrer" style={{ width: '22px', display: 'flex', alignItems: 'center' }}>
                            <img src={leetcodeIcon} alt="LeetCode" style={{ width: '100%', filter: 'grayscale(1) brightness(1.5)' }} />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
