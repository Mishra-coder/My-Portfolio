import bgRemoverImg from '../assets/bg_remover.png';
import successMantraImg from '../assets/success_mantra_new.png';
import aromaLuxeImg from '../assets/aroma_luxe_web.png';
import zappifyMockupImg from '../assets/zappify_mockup.jpg';
import akoinWebImg from '../assets/akoin_web.png';
import karoPitchImg from '../assets/karo_pitch_web.png';

const Portfolio = () => {
    const projects = [
        {
            title: "Success Mantra Institute",
            category: "Full Stack Development",
            image: successMantraImg,
            link: "https://success-mantra-dm.vercel.app/",
            github: "https://github.com/Mishra-coder/Coaching_Website"
        },
        {
            title: "Zappify - Premium Footwear",
            category: "Mobile Development (React Native)",
            image: zappifyMockupImg,
            link: "https://zappify-sepia.vercel.app/",
            github: "https://github.com/Mishra-coder/Zappify",
            preview: "https://shorturl.at/17h2f"
        },
        {
            title: "Aroma Luxe",
            category: "Mobile Development (React Native)",
            image: aromaLuxeImg,
            link: "https://perfume-app-h3ct.vercel.app/",
            github: "https://github.com/Mishra-coder/Perfume_APP"
        },
        {
            title: "Institute of Digital Risk (IDR)",
            category: "Frontend Development",
            image: akoinWebImg,
            link: "https://akoin-seven.vercel.app/",
            github: "https://github.com/Mishra-coder/AKOIN_"
        },
        {
            title: "Background Remover",
            category: "Frontend",
            image: bgRemoverImg,
            link: "https://bg-remover-dm.vercel.app/",
            github: "https://github.com/Mishra-coder/BG.Remover"
        },
        {
            title: "Karo Pitch - Startup Platform",
            category: "Frontend Development",
            image: karoPitchImg,
            link: "https://karo-pitch-liard.vercel.app/",
            github: "https://github.com/Mishra-coder/Karo_Pitch"
        }
    ];

    return (
        <article className="portfolio active" data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Projects</h2>
            </header>

            <section className="projects">
                <ul className="project-list">
                    {projects.map((project, index) => (
                        <li key={index} className="project-item active" data-filter-item data-category={project.category.toLowerCase()}
                            onMouseEnter={(e) => {
                                const iconBox = e.currentTarget.querySelector('.project-item-icon-box');
                                if (iconBox) iconBox.style.opacity = '1';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.transform = 'scale(1.1)';
                                const overlay = e.currentTarget.querySelector('.project-img-overlay');
                                if (overlay) overlay.style.background = 'rgba(0,0,0,0.5)';
                            }}
                            onMouseLeave={(e) => {
                                const iconBox = e.currentTarget.querySelector('.project-item-icon-box');
                                if (iconBox) iconBox.style.opacity = '0';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.transform = 'scale(1)';
                                const overlay = e.currentTarget.querySelector('.project-img-overlay');
                                if (overlay) overlay.style.background = 'transparent';
                            }}>
                            <div className="project-link-wrapper" style={{ position: 'relative', cursor: 'pointer' }}>
                                <figure className="project-img" style={{
                                    height: 'auto',
                                    aspectRatio: '16/10',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    borderRadius: '16px'
                                }}>
                                    <div className="project-img-overlay" style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'transparent',
                                        transition: 'var(--transition-1)',
                                        zIndex: 1
                                    }}></div>
                                    <div className="project-item-icon-box" style={{
                                        display: 'flex',
                                        gap: '20px',
                                        opacity: 0,
                                        transition: 'all 0.3s ease',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 2,
                                        width: 'max-content'
                                    }}>
                                        <a href={project.link} target="_blank" rel="noreferrer" title="Live Demo" style={{
                                            background: 'var(--jet)',
                                            color: 'var(--orange-yellow-crayola)',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            fontSize: '20px',
                                            display: 'flex',
                                            boxShadow: 'var(--shadow-3)'
                                        }} onClick={(e) => e.stopPropagation()}>
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </a>
                                        {project.preview && (
                                            <a href={project.preview} target="_blank" rel="noreferrer" title="App Preview" style={{
                                                background: 'var(--jet)',
                                                color: 'var(--orange-yellow-crayola)',
                                                padding: '12px',
                                                borderRadius: '10px',
                                                fontSize: '20px',
                                                display: 'flex',
                                                boxShadow: 'var(--shadow-3)'
                                            }} onClick={(e) => e.stopPropagation()}>
                                                <ion-icon name="phone-portrait-outline"></ion-icon>
                                            </a>
                                        )}
                                        <a href={project.github} target="_blank" rel="noreferrer" title="View Code" style={{
                                            background: 'var(--jet)',
                                            color: 'var(--orange-yellow-crayola)',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            fontSize: '20px',
                                            display: 'flex',
                                            boxShadow: 'var(--shadow-3)'
                                        }} onClick={(e) => e.stopPropagation()}>
                                            <ion-icon name="logo-github"></ion-icon>
                                        </a>
                                    </div>
                                    <img src={project.image} alt={project.title} loading="lazy" style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }} />
                                </figure>
                                <h3 className="project-title" style={{ marginTop: '15px', fontSize: 'var(--fs-5)', color: 'var(--white-2)' }}>{project.title}</h3>
                                <p className="project-category" style={{ color: 'var(--light-gray-70)', fontSize: 'var(--fs-8)' }}>{project.category}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Portfolio;
