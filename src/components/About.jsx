import React from 'react';
import profileReal from '../assets/profile_real.png';
import leetcodeIcon from '../assets/leetcode_icon.png';
import mobileDevIcon from '../assets/mobile_dev_icon_new.png';
import aiIcon from '../assets/ai_icon_v2.png';

const About = () => {
    const services = [
        {
            title: "Artificial Intelligence",
            description: "B.Tech in AI & ML focus. specializing in building intelligent systems and applied algorithms.",
            image: aiIcon
        },
        {
            title: "Full Stack Development",
            description: "Highly active full stack developer with sharp focus on scalable system architectures.",
            icon: "code-working-outline"
        },
        {
            title: "Mobile App Development",
            description: "Crafting fluid cross-platform experiences using React Native and TypeScript.",
            image: mobileDevIcon
        },
        {
            title: "Open Source Contributor",
            description: "Dedicated to the community with consistent contributions and open-source engagement over the last year.",
            icon: "git-branch-outline"
        }
    ];

    const techStack = [
        { name: "React", icon: "logo-react" },
        { name: "Node.js", icon: "logo-nodejs" },
        { name: "Python", icon: "logo-python" },
        { name: "JavaScript", icon: "logo-javascript" },
        { name: "MySQL", icon: "server-outline" },
        { name: "MongoDB", icon: "leaf-outline" },
        { name: "GitHub", icon: "logo-github" },
        { name: "TypeScript", icon: "code-slash-outline" }
    ];

    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">About Me</h2>
            </header>

            <section className="about-intro" style={{
                background: 'var(--bg-gradient-onyx)',
                padding: '35px',
                borderRadius: '25px',
                border: '1px solid var(--jet)',
                marginBottom: '40px',
                boxShadow: 'var(--shadow-2)'
            }}>
                <div className="about-text" style={{ margin: 0 }}>
                    <p style={{ marginBottom: '15px', color: 'var(--white-2)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                        I am a passionate **Full Stack & AI/ML Developer** pursuing my B.Tech in Computer Science at the <strong>Newton School of Technology, Pune</strong>.
                        With a deep focus on building intelligent, user-centric applications, I specialize in the <strong>full stack, React Native, and applied AI algorithms</strong>.
                    </p>
                    <p style={{ color: 'var(--light-gray)', lineHeight: '1.7', fontSize: 'var(--fs-7)' }}>
                        I thrive at the intersection of complex data logic and seamless user experiences. From leading technical workshops to contributing
                        to global open-source projects, I am committed to solving real-world challenges through scalable code and innovative system design.
                    </p>
                </div>
            </section>

            <section className="about-stats" style={{ marginBottom: '30px' }}>
                <div className="stat-card">
                    <div style={{
                        background: 'var(--bg-gradient-jet)',
                        width: '60px', height: '60px',
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        borderRadius: '12px', fontSize: '32px', color: 'var(--orange-yellow-crayola)'
                    }}>
                        <ion-icon name="trending-up-outline"></ion-icon>
                    </div>
                    <div>
                        <h4 className="h4" style={{ margin: '0 0 5px 0' }}>Consistent GitHub Activity</h4>
                        <p style={{ margin: 0, fontSize: 'var(--fs-7)', color: 'var(--light-gray-70)' }}>
                            Proof of dedication and a relentless drive for building.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-expertise" style={{ marginBottom: '45px' }}>
                <p style={{ color: 'var(--light-gray)', lineHeight: '1.6', fontSize: 'var(--fs-6)' }}>
                    My expertise lies in the <strong>full stack</strong> and <strong>React Native</strong>. Whether it's training a model or building a full-stack coaching platform,
                    I value clean code, high performance, and the transformative power of technology.
                </p>
            </section>

            <section className="timeline">
                <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <div className="icon-box" style={{
                        background: 'var(--bg-gradient-jet)',
                        color: 'var(--orange-yellow-crayola)',
                        width: '44px', height: '44px',
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        borderRadius: '10px', fontSize: '22px'
                    }}>
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list" style={{ marginLeft: '15px' }}>
                    <li className="timeline-item" style={{ position: 'relative', paddingBottom: '30px', paddingLeft: '35px', borderLeft: '1px solid var(--jet)' }}>
                        <div style={{
                            position: 'absolute', left: '-6px', top: '0',
                            width: '12px', height: '12px',
                            background: 'var(--orange-yellow-crayola)',
                            borderRadius: '50%', boxShadow: '0 0 0 4px var(--jet)'
                        }}></div>
                        <h4 className="h4 timeline-item-title">B.Tech in Computer Science (AI & ML)</h4>
                        <span style={{ color: 'var(--vegas-gold)', fontSize: 'var(--fs-8)', fontWeight: 'var(--fw-500)' }}>2024 — 2028</span>
                        <p className="timeline-text" style={{ color: 'var(--light-gray-70)', fontSize: 'var(--fs-7)', marginTop: '10px', lineHeight: '1.6' }}>
                            Newton School of Technology (NST), Pune. Focusing on Applied Intelligence, System Design, and Modern Development Frameworks.
                        </p>
                    </li>
                </ol>
            </section>

            <section className="timeline" style={{ marginTop: '40px' }}>
                <div className="title-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <div className="icon-box" style={{
                        background: 'var(--bg-gradient-jet)',
                        color: 'var(--orange-yellow-crayola)',
                        width: '44px', height: '44px',
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        borderRadius: '10px', fontSize: '22px'
                    }}>
                        <ion-icon name="ribbon-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Certifications</h3>
                </div>

                <ol className="timeline-list" style={{ marginLeft: '15px' }}>
                    <li className="timeline-item" style={{ position: 'relative', paddingBottom: '30px', paddingLeft: '35px', borderLeft: '1px solid var(--jet)' }}>
                        <div style={{
                            position: 'absolute', left: '-6px', top: '0',
                            width: '12px', height: '12px',
                            background: 'var(--orange-yellow-crayola)',
                            borderRadius: '50%', boxShadow: '0 0 0 4px var(--jet)'
                        }}></div>
                        <h4 className="h4 timeline-item-title">Web Dev, DSA & AI/ML Technical Workshop Leader</h4>
                        <span style={{ color: 'var(--vegas-gold)', fontSize: 'var(--fs-8)', fontWeight: 'var(--fw-500)' }}>August 2024</span>
                        <p className="timeline-text" style={{ color: 'var(--light-gray-70)', fontSize: 'var(--fs-7)', marginTop: '10px', lineHeight: '1.6' }}>
                            Advanced certification recognizing leadership and technical proficiency in web technologies and algorithmic problem solving.
                        </p>
                    </li>
                </ol>
            </section>

            <section className="service" style={{ marginTop: '45px' }}>
                <h3 className="h3 service-title">What I'm Doing</h3>
                <ul className="service-list" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                    gap: '20px'
                }}>
                    {services.map((service, index) => (
                        <li key={index} className="service-item" style={{
                            background: 'var(--bg-gradient-onyx)',
                            padding: '30px',
                            borderRadius: '14px',
                            border: '1px solid var(--jet)',
                            boxShadow: 'var(--shadow-2)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '20px'
                        }}>
                            <div className="service-icon-box" style={{
                                marginTop: '5px',
                                color: 'var(--orange-yellow-crayola)',
                                fontSize: '40px',
                                flexShrink: 0,
                                width: '40px'
                            }}>
                                {service.image ? (
                                    <img src={service.image} alt={service.title} style={{ width: '100%', display: 'block' }} />
                                ) : (
                                    <ion-icon name={service.icon}></ion-icon>
                                )}
                            </div>
                            <div className="service-content-box">
                                <h4 className="h4 service-item-title" style={{ marginBottom: '7px' }}>{service.title}</h4>
                                <p className="service-item-text" style={{ fontSize: 'var(--fs-7)', lineHeight: '1.6', color: 'var(--light-gray)' }}>{service.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="clients" style={{ marginTop: '45px' }}>
                <h3 className="h3 clients-title">Technical Toolkit</h3>
                <ul style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                    gap: '15px',
                    padding: 0,
                    listStyle: 'none'
                }}>
                    {techStack.map((tech, index) => (
                        <li key={index} className="tech-card">
                            <ion-icon name={tech.icon}></ion-icon>
                            <span style={{ fontSize: 'var(--fs-8)', fontWeight: 'var(--fw-600)', color: 'var(--white-2)' }}>{tech.name}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="testimonials" style={{ marginTop: '45px' }}>
                <h3 className="h3 testimonials-title">Find Me Online</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <a href="https://github.com/Mishra-coder" target="_blank" rel="noreferrer" className="stat-card" style={{ padding: '15px' }}>
                        <ion-icon name="logo-github" style={{ fontSize: '30px', color: 'var(--orange-yellow-crayola)' }}></ion-icon>
                        <div>
                            <h4 className="h4" style={{ margin: 0, fontSize: 'var(--fs-6)' }}>GitHub</h4>
                            <p style={{ margin: 0, fontSize: 'var(--fs-8)', color: 'var(--light-gray-70)' }}>Consistent Repos & Contributions</p>
                        </div>
                    </a>
                    <a href="https://leetcode.com/u/Devendra870/" target="_blank" rel="noreferrer" className="stat-card" style={{ padding: '15px' }}>
                        <div style={{ width: '30px', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                            <img src={leetcodeIcon} alt="LeetCode" style={{ width: '100%' }} />
                        </div>
                        <div>
                            <h4 className="h4" style={{ margin: 0, fontSize: 'var(--fs-6)' }}>LeetCode</h4>
                            <p style={{ margin: 0, fontSize: 'var(--fs-8)', color: 'var(--light-gray-70)' }}>Problem Solving Enthusiast</p>
                        </div>
                    </a>
                </div>
            </section>
        </article>
    );
};

export default About;
