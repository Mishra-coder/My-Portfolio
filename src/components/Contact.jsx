import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setTimeout(() => {
            alert("Message sent! (Simulation)");
            setIsSending(false);
            setFormData({ fullname: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: 'mail-outline',
            title: 'Email',
            value: 'devendramishra495@gmail.com',
            link: 'mailto:devendramishra495@gmail.com'
        },
        {
            icon: 'logo-github',
            title: 'GitHub',
            value: '@Mishra-coder',
            link: 'https://github.com/Mishra-coder'
        },
        {
            icon: 'logo-linkedin',
            title: 'LinkedIn',
            value: 'Devendra Mishra',
            link: 'https://www.linkedin.com/in/devendra-mishra-b9613b339/'
        },
        {
            icon: 'location-outline',
            title: 'Location',
            value: 'Pune, Maharashtra',
            link: null
        }
    ];

    return (
        <article className="contact active" data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="contact-intro" style={{
                background: 'linear-gradient(135deg, var(--bg-gradient-onyx) 0%, var(--eerie-black-1) 100%)',
                padding: '30px',
                borderRadius: '20px',
                border: '1px solid var(--jet)',
                marginBottom: '35px',
                boxShadow: 'var(--shadow-2)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(255, 207, 0, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }}></div>
                <p style={{
                    color: 'var(--white-2)',
                    lineHeight: '1.8',
                    fontSize: 'var(--fs-5)',
                    margin: 0,
                    position: 'relative',
                    zIndex: 1,
                    fontWeight: 'var(--fw-400)'
                }}>
                    I'm always open to discussing <strong style={{ color: 'var(--orange-yellow-crayola)' }}>new projects</strong>, creative ideas, or opportunities to be part of your vision.
                    Feel free to reach out through the form below or connect with me on social platforms.
                </p>
            </section>

            <div className="contact-wrapper" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
                gap: '35px',
                alignItems: 'start'
            }}>
                <section className="contact-info-section">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                        <div style={{
                            width: '4px',
                            height: '28px',
                            background: 'var(--text-gradient-yellow)',
                            borderRadius: '4px'
                        }}></div>
                        <h3 className="h3" style={{ margin: 0, color: 'var(--white-2)', fontSize: 'var(--fs-2)' }}>Get In Touch</h3>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '15px'
                    }}>
                        {contactInfo.map((info, index) => (
                            <div key={index} className="contact-info-card" style={{
                                background: 'var(--bg-gradient-onyx)',
                                padding: '22px',
                                borderRadius: '16px',
                                border: '1px solid var(--jet)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '18px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: info.link ? 'pointer' : 'default',
                                boxShadow: 'var(--shadow-2)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                                onClick={() => info.link && window.open(info.link, '_blank')}
                                onMouseEnter={(e) => {
                                    if (info.link) {
                                        const glow = e.currentTarget.querySelector('.card-glow');
                                        if (glow) glow.style.opacity = '1';
                                        e.currentTarget.style.borderColor = 'var(--orange-yellow-crayola)';
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (info.link) {
                                        const glow = e.currentTarget.querySelector('.card-glow');
                                        if (glow) glow.style.opacity = '0';
                                        e.currentTarget.style.borderColor = 'var(--jet)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }
                                }}>
                                <div className="card-glow" style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'radial-gradient(circle at center, rgba(255, 207, 0, 0.1) 0%, transparent 70%)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    pointerEvents: 'none'
                                }}></div>
                                <div style={{
                                    background: 'linear-gradient(135deg, var(--bg-gradient-jet) 0%, var(--onyx) 100%)',
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '12px',
                                    color: 'var(--orange-yellow-crayola)',
                                    fontSize: '24px',
                                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                    flexShrink: 0
                                }}>
                                    <ion-icon name={info.icon}></ion-icon>
                                </div>
                                <div style={{ minWidth: 0 }}>
                                    <h4 className="h4" style={{
                                        fontSize: 'var(--fs-7)',
                                        color: 'var(--light-gray-70)',
                                        marginBottom: '5px',
                                        fontWeight: 'var(--fw-400)'
                                    }}>{info.title}</h4>
                                    <p style={{
                                        color: 'var(--white-2)',
                                        fontSize: 'var(--fs-6)',
                                        fontWeight: 'var(--fw-500)',
                                        margin: 0,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>{info.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="contact-form">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
                        <div style={{
                            width: '4px',
                            height: '28px',
                            background: 'var(--text-gradient-yellow)',
                            borderRadius: '4px'
                        }}></div>
                        <h3 className="h3 form-title" style={{ margin: 0, color: 'var(--white-2)', fontSize: 'var(--fs-2)' }}>Send Me a Message</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="form" data-form>
                        <div className="input-wrapper" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '20px',
                            marginBottom: '20px'
                        }}>
                            <div className="form-group" style={{ position: 'relative' }}>
                                <ion-icon name="person-outline" style={{
                                    position: 'absolute',
                                    left: '25px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontSize: '28px',
                                    color: 'var(--light-gray-70)',
                                    pointerEvents: 'none',
                                    zIndex: 1
                                }}></ion-icon>
                                <input
                                    type="text"
                                    name="fullname"
                                    className="form-input"
                                    placeholder="Full name"
                                    required
                                    data-form-input
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    style={{
                                        paddingLeft: '55px',
                                        padding: '18px 20px 18px 55px',
                                        fontSize: 'var(--fs-5)',
                                        borderRadius: '14px'
                                    }}
                                />
                            </div>

                            <div className="form-group" style={{ position: 'relative' }}>
                                <ion-icon name="mail-outline" style={{
                                    position: 'absolute',
                                    left: '25px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontSize: '28px',
                                    color: 'var(--light-gray-70)',
                                    pointerEvents: 'none',
                                    zIndex: 1
                                }}></ion-icon>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="Email address"
                                    required
                                    data-form-input
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        paddingLeft: '55px',
                                        padding: '18px 20px 18px 55px',
                                        fontSize: 'var(--fs-5)',
                                        borderRadius: '14px'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ position: 'relative', marginBottom: '30px' }}>
                            <ion-icon name="chatbubbles-outline" style={{
                                position: 'absolute',
                                left: '25px',
                                top: '22px',
                                fontSize: '28px',
                                color: 'var(--light-gray-70)',
                                pointerEvents: 'none',
                                zIndex: 1
                            }}></ion-icon>
                            <textarea
                                name="message"
                                className="form-input"
                                placeholder="Your Message"
                                required
                                data-form-input
                                value={formData.message}
                                onChange={handleChange}
                                style={{
                                    paddingLeft: '55px',
                                    padding: '18px 20px 18px 55px',
                                    minHeight: '180px',
                                    resize: 'vertical',
                                    fontSize: 'var(--fs-5)',
                                    borderRadius: '14px',
                                    lineHeight: '1.6'
                                }}
                            ></textarea>
                        </div>

                        <button className="form-btn" type="submit" disabled={isSending} data-form-btn style={{
                            width: '100%',
                            background: isSending ? 'var(--bg-gradient-jet)' : 'linear-gradient(135deg, hsl(45, 100%, 72%) 0%, hsl(45, 100%, 58%) 100%)',
                            color: isSending ? 'var(--light-gray)' : 'var(--smoky-black)',
                            padding: '20px',
                            borderRadius: '16px',
                            fontSize: 'var(--fs-3)',
                            fontWeight: 'var(--fw-600)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '12px',
                            boxShadow: isSending ? 'var(--shadow-2)' : '0 8px 24px rgba(255, 207, 0, 0.35)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: 'none',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: isSending ? 'not-allowed' : 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                if (!isSending) {
                                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 207, 0, 0.45)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isSending) {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 207, 0, 0.35)';
                                }
                            }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                                transform: 'translateX(-100%)',
                                transition: 'transform 0.6s ease'
                            }} className="button-shine"></div>
                            <ion-icon name={isSending ? 'hourglass-outline' : 'paper-plane'} style={{ fontSize: '20px', position: 'relative', zIndex: 1 }}></ion-icon>
                            <span style={{ position: 'relative', zIndex: 1, letterSpacing: '0.5px' }}>{isSending ? 'Sending...' : 'Send Message'}</span>
                        </button>
                    </form>
                </section>
            </div>
        </article>
    );
};

export default Contact;
