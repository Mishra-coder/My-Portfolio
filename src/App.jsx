import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState({})
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const skills = {
    frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'API Development'],
    core: ['Data Structures', 'Algorithms', 'Problem Solving'],
    specialization: ['Cross-platform Apps', 'Full-Stack Development', 'Scalable Solutions']
  }

  const projects = [
    {
      title: 'Background Remover',
      description: 'AI-powered web application that removes backgrounds from images with high accuracy using machine learning algorithms.',
      tech: ['React.js', 'Node.js', 'AI/ML', 'Vite'],
      demo: 'https://bg-remover-dm.vercel.app/',
      code: 'https://github.com/Mishra-coder/BG.Remover'
    },
    {
      title: 'Image to PDF Converter',
      description: 'Cross-platform mobile application that converts multiple images to PDF with features like password protection and compression.',
      tech: ['React Native', 'Expo', 'pdf-lib'],
      demo: 'https://github.com/Mishra-coder/Project-sem-3rd',
      code: 'https://github.com/Mishra-coder/Project-sem-3rd'
    },
    {
      title: 'Success Mantra Institute',
      description: 'Full-stack coaching website with course management, student dashboard, and interactive learning features.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      demo: 'https://success-mantra-dm.vercel.app/',
      code: 'https://github.com/Mishra-coder/Coaching_Website'
    }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">DM</h2>
          <ul className="nav-menu">
            <li onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</li>
            <li onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</li>
            <li onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</li>
            <li onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</li>
            <li onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`hero ${isVisible.home ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Devendra Mishra</span>
            </h1>
            <p className="hero-subtitle">B.Tech CSE Student | Full-Stack Developer</p>
            <p className="hero-description">
              Second-year student at Newton School of Technology, Ajeenkya DY Patil University, Pune.
              Passionate about building scalable, user-focused applications with innovative solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('skills')}>
                View Skills
              </button>
            </div>
          </div>
          <div className="hero-animation">
            <div className="floating-card">
              <div className="code-snippet">
                <span className="code-line"><span className="keyword">const</span> developer = {'{'}</span>
                <span className="code-line">  name: <span className="string">'Devendra'</span>,</span>
                <span className="code-line">  skills: <span className="string">'Full-Stack'</span>,</span>
                <span className="code-line">  passion: <span className="string">'Innovation'</span></span>
                <span className="code-line">{'};'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about ${isVisible.about ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="icon">🎓</div>
              <h3>Education</h3>
              <p>B.Tech in Computer Science & Engineering</p>
              <p className="subtext">Newton School of Technology, ADYPU, Pune</p>
            </div>
            <div className="about-card">
              <div className="icon">💡</div>
              <h3>Passion</h3>
              <p>Building innovative solutions</p>
              <p className="subtext">Scalable & user-focused applications</p>
            </div>
            <div className="about-card">
              <div className="icon">🚀</div>
              <h3>Goal</h3>
              <p>Full-Stack Development</p>
              <p className="subtext">Creating impactful tech solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`skills ${isVisible.skills ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Building innovative solutions with modern tech stack</p>
          
          <div className="skills-grid">
            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🎨</span>
                <h3>Frontend Development</h3>
              </div>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🖥️</span>
                <h3>Backend Development</h3>
              </div>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">💻</span>
                <h3>Core Skills</h3>
              </div>
              <div className="skill-tags">
                {skills.core.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">🎯</span>
                <h3>Specialization</h3>
              </div>
              <div className="skill-tags">
                {skills.specialization.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`projects ${isVisible.projects ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work and personal projects</p>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <span className="project-icon">📂</span>
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" title="View Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-link" title="View Code">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`contact ${isVisible.contact ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#0077b5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/devendra-mishra-b9613b339/" target="_blank" rel="noopener noreferrer">Connect with me</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#fff">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/Mishra-coder" target="_blank" rel="noopener noreferrer">View my work</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Devendra Mishra. Built with React ⚛️</p>
      </footer>
    </div>
  )
}

export default App
