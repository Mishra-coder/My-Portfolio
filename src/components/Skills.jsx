import React from 'react';

const Skills = () => {
    const skillGroups = [
        {
            category: "Front-End Development",
            icon: "desktop-outline",
            description: "Designing responsive and interactive user interfaces with modern frameworks like React and TypeScript.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
            skills: [
                { name: "React / Next.js", level: 90, icon: "logo-react" },
                { name: "JavaScript / TypeScript", level: 95, icon: "logo-javascript" },
                { name: "Modern CSS / Tailwind", level: 90, icon: "color-palette-outline" }
            ]
        },
        {
            category: "Back-End & Databases",
            icon: "server-outline",
            description: "Building robust servers and managing scalable data architectures with Node.js and SQL/NoSQL.",
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
            skills: [
                { name: "Node.js / Express", level: 88, icon: "logo-nodejs" },
                { name: "Prisma / SQL / MongoDB", level: 92, icon: "server-outline" },
                { name: "API Architecture", level: 90, icon: "git-network-outline" }
            ]
        },
        {
            category: "Specialized Tech",
            icon: "hardware-chip-outline",
            description: "Specialized in Artificial Intelligence, Machine Learning, and high-performance Mobile Apps with React Native.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            skills: [
                { name: "AI & Machine Learning", level: 80, icon: "medal-outline" },
                { name: "React Native (iOS/Android)", level: 85, icon: "smartphone-outline" },
                { name: "Python Scripting", level: 88, icon: "logo-python" }
            ]
        }
    ];

    return (
        <article className="skills active" data-page="skills">
            <header>
                <h2 className="h2 article-title">My Technical Expertise</h2>
            </header>

            <section className="skills-content">
                <ul style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '30px',
                    padding: 0,
                    listStyle: 'none'
                }}>
                    {skillGroups.map((group, index) => (
                        <li key={index} className="achievement-card" style={{
                            background: 'var(--bg-gradient-onyx)',
                            borderRadius: '20px',
                            border: '1px solid var(--jet)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: window.innerWidth < 992 ? 'column' : 'row',
                            boxShadow: 'var(--shadow-3)',
                            transition: 'var(--transition-1)'
                        }}>
                            <div className="achievement-img-box" style={{
                                flex: '0 0 35%',
                                minHeight: '250px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <img src={group.image} alt={group.category} style={{
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
                                    padding: '12px',
                                    borderRadius: '12px',
                                    color: 'var(--orange-yellow-crayola)',
                                    fontSize: '28px',
                                    display: 'flex'
                                }}>
                                    <ion-icon name={group.icon}></ion-icon>
                                </div>
                            </div>

                            <div className="achievement-content" style={{
                                padding: '35px',
                                flex: '1',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '15px'
                            }}>
                                <div>
                                    <h3 className="h3" style={{ marginBottom: '10px' }}>{group.category}</h3>
                                    <p style={{
                                        color: 'var(--light-gray-70)',
                                        fontSize: 'var(--fs-7)',
                                        lineHeight: '1.6',
                                        marginBottom: '20px'
                                    }}>{group.description}</p>
                                </div>

                                <div className="skills-items" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {group.skills.map((skill, i) => (
                                        <div key={i} style={{
                                            background: 'var(--bg-gradient-jet)',
                                            padding: '8px 15px',
                                            borderRadius: '10px',
                                            border: '1px solid var(--jet)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            fontSize: 'var(--fs-8)',
                                            color: 'var(--white-2)'
                                        }}>
                                            <div style={{ color: 'var(--orange-yellow-crayola)', fontSize: '18px', display: 'flex' }}>
                                                <ion-icon name={skill.icon}></ion-icon>
                                            </div>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="soft-skills" style={{ marginTop: '50px' }}>
                <h3 className="h3" style={{ marginBottom: '25px' }}>Core Strengths</h3>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px'
                }}>
                    {["Problem Solving", "Collaboration", "Clean Architecture", "Critical Thinking", "Scalability", "Efficiency"].map((skill, i) => (
                        <div key={i} style={{
                            background: 'var(--bg-gradient-jet)',
                            color: 'var(--white-2)',
                            padding: '10px 22px',
                            borderRadius: '12px',
                            border: '1px solid var(--jet)',
                            fontSize: 'var(--fs-7)',
                            fontWeight: 'var(--fw-500)',
                            boxShadow: 'var(--shadow-1)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'var(--transition-1)',
                            cursor: 'default'
                        }} className="soft-skill-tag">
                            <ion-icon name="checkmark-done-outline" style={{ color: 'var(--orange-yellow-crayola)' }}></ion-icon>
                            {skill}
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
};

export default Skills;
