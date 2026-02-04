import React from 'react';
import hacktoberfestBadge from '../assets/hacktoberfest_badge.png';
import certificationImg from '../assets/certification_bg.png';

const Achievements = () => {
    const achievements = [
        {
            title: "Open Source Contributor",
            subtitle: "Hacktoberfest 2025",
            description: "Successfully delivered 6 open-source pull requests with 100% acceptance rate, contributing to global repositories.",
            image: hacktoberfestBadge,
            icon: "logo-github",
            color: "#ff5a00",
            verifyLink: "https://www.holopin.io/@mishracoder#"
        },
        {
            title: "Web Dev, DSA & AI/ML Technical Workshop Leader",
            subtitle: "Certification",
            description: "Attended and organized technical workshops focusing on modern web development, data structures, and AI/ML applications.",
            image: certificationImg,
            icon: "school-outline",
            color: "#vegas-gold",
            verifyLink: "https://www.coursera.org/account/accomplishments/verify/4YXZL62PUW4W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course"
        },
        {
            title: "E-Sports Coordinator",
            subtitle: "BGMI & Free Fire",
            description: "Organized and led college-level E-Sports tournaments, managing teams and streaming logistics for competitive gaming.",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
            icon: "game-controller-outline",
            color: "#1db954"
        }
    ];

    return (
        <article className="achievements active" data-page="achievements">
            <header>
                <h2 className="h2 article-title">Achievements</h2>
            </header>

            <section className="achievements-list">
                <ul style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '30px',
                    padding: 0,
                    listStyle: 'none'
                }}>
                    {achievements.map((item, index) => (
                        <li key={index} className="achievement-card" style={{
                            background: 'var(--bg-gradient-onyx)',
                            borderRadius: '20px',
                            border: '1px solid var(--jet)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                            boxShadow: 'var(--shadow-3)',
                            transition: 'var(--transition-1)'
                        }}>
                            <div className="achievement-img-box" style={{
                                flex: '0 0 40%',
                                minHeight: '200px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <img src={item.image} alt={item.title} style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'var(--transition-2)'
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '20px',
                                    background: 'rgba(0,0,0,0.6)',
                                    backdropFilter: 'blur(5px)',
                                    padding: '10px',
                                    borderRadius: '12px',
                                    color: 'var(--orange-yellow-crayola)',
                                    fontSize: '24px',
                                    display: 'flex'
                                }}>
                                    <ion-icon name={item.icon}></ion-icon>
                                </div>
                            </div>

                            <div className="achievement-content" style={{
                                padding: '30px',
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '15px'
                            }}>
                                <div>
                                    <span style={{
                                        color: 'var(--orange-yellow-crayola)',
                                        fontSize: 'var(--fs-8)',
                                        fontWeight: 'var(--fw-600)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>{item.subtitle}</span>
                                    <h3 className="h3" style={{ margin: '10px 0' }}>{item.title}</h3>
                                    <p style={{
                                        color: 'var(--light-gray-70)',
                                        fontSize: 'var(--fs-6)',
                                        lineHeight: '1.6'
                                    }}>{item.description}</p>
                                </div>

                                {item.verifyLink && (
                                    <a href={item.verifyLink} target="_blank" rel="noreferrer" className="stat-card" style={{
                                        padding: '10px 20px',
                                        width: 'fit-content',
                                        marginTop: '10px',
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        fontSize: 'var(--fs-8)',
                                        fontWeight: 'var(--fw-600)',
                                        background: 'var(--bg-gradient-jet)',
                                        color: 'var(--white-2)'
                                    }}>
                                        <ion-icon name="checkmark-circle-outline" style={{ color: 'var(--orange-yellow-crayola)', fontSize: '18px' }}></ion-icon>
                                        Verify Achievement
                                    </a>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Achievements;
