import bgRemoverImg from '../assets/bg_remover.png';
import successMantraImg from '../assets/success_mantra_new.png';
import aromaLuxeImg from '../assets/aroma_luxe_web.png';

const Portfolio = () => {
    const projects = [
        {
            title: "Background Remover",
            category: "Web Development",
            image: bgRemoverImg,
            link: "https://bg-remover-dm.vercel.app/",
            github: "https://github.com/Mishra-coder/BG.Remover"
        },
        {
            title: "Success Mantra Institute",
            category: "Full Stack",
            image: successMantraImg,
            link: "https://success-mantra-dm.vercel.app/",
            github: "https://github.com/Mishra-coder/Coaching_Website"
        },
        {
            title: "Aroma Luxe",
            category: "Mobile Development (React Native)",
            image: aromaLuxeImg,
            link: "https://perfume-app-h3ct.vercel.app/",
            github: "https://github.com/Mishra-coder/Perfume_APP"
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
                        <li key={index} className="project-item active" data-filter-item data-category={project.category.toLowerCase()}>
                            <div className="project-link-wrapper" style={{ position: 'relative' }}>
                                <figure className="project-img">
                                    <div className="project-item-icon-box" style={{
                                        display: 'flex',
                                        gap: '15px',
                                        opacity: 0,
                                        transition: 'var(--transition-1)',
                                        background: 'rgba(0,0,0,0.5)',
                                        width: '100%',
                                        height: '100%',
                                        top: 0,
                                        left: 0,
                                        transform: 'none',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '12px',
                                        position: 'absolute',
                                        zIndex: 2
                                    }}>
                                        <a href={project.link} target="_blank" rel="noreferrer" className="icon-link" title="Live Demo" style={{
                                            background: 'var(--jet)',
                                            color: 'var(--orange-yellow-crayola)',
                                            padding: '12px',
                                            borderRadius: '12px',
                                            fontSize: '24px',
                                            display: 'flex'
                                        }}>
                                            <ion-icon name="eye-outline"></ion-icon>
                                        </a>
                                        <a href={project.github} target="_blank" rel="noreferrer" className="icon-link" title="View Code" style={{
                                            background: 'var(--jet)',
                                            color: 'var(--orange-yellow-crayola)',
                                            padding: '12px',
                                            borderRadius: '12px',
                                            fontSize: '24px',
                                            display: 'flex'
                                        }}>
                                            <ion-icon name="logo-github"></ion-icon>
                                        </a>
                                    </div>
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Portfolio;
