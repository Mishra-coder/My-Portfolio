import { useState, useEffect } from 'react'
import './App.css'
import profileImg from './assets/profile.jpg'
import successMantraImg from './assets/success_mantra.png'
import bgRemoverImg from './assets/bg_remover.png'
import aromaLuxeImg from './assets/aroma_luxe_ui.png'

function App() {
  const [isVisible, setIsVisible] = useState({})
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)

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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  const skills = {
    frontend: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Figma'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Prisma ORM', 'Python'],
    core: ['Data Structures', 'Algorithms', 'Git/GitHub'],
    specialization: ['AI & ML'],
  }

  const projects = [
    {
      title: 'Aroma Luxe',
      image: aromaLuxeImg,
      description: 'Premium perfume boutique app with a luxury UI. Built an interactive Scent Discovery Quiz using Context API for real-time state management and implemented secure JWT authentication.',
      tech: ['React Native', 'Expo', 'Node.js', 'JWT', 'AsyncStorage'],
      demo: 'https://expo.dev/accounts/devendra.mi/projects/aroma-luxe/builds/e7d68547-1809-41d5-bb37-1f53921e082f',
      code: 'https://github.com/Mishra-coder/Perfume_APP'
    },
    {
      title: 'Success Mantra Institute',
      image: successMantraImg,
      description: 'Coaching platform featuring gamified quizzes with XP-based learning, role-based authentication, and real-time progress tracking dashboards.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      demo: 'https://success-mantra-dm.vercel.app/',
      code: 'https://github.com/Mishra-coder/Coaching_Website'
    },
    {
      title: 'Background Remover',
      image: bgRemoverImg,
      description: 'AI-powered web application that removes backgrounds from images with high accuracy using machine learning algorithms.',
      tech: ['React.js', 'Node.js', 'AI/ML', 'Vite'],
      demo: 'https://bg-remover-dm.vercel.app/',
      code: 'https://github.com/Mishra-coder/BG.Remover'
    }
  ]

  const certifications = [
    {
      title: 'AI For Everyone',
      issuer: 'DeepLearning.AI (Coursera)',
      date: 'October 2025',
      link: 'https://www.coursera.org/account/accomplishments/verify/4YXZL62PUW4W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course'
    }
  ]

  const achievements = [
    {
      title: 'Hacktoberfest 2025',
      description: 'Delivered 6 accepted open-source pull requests.',
      icon: '🏆'
    },
    {
      title: 'E-Sports Leadership',
      description: 'Organized and led college-level E-Sports tournaments (BGMI, Free Fire).',
      icon: '🎮'
    },
    {
      title: 'Workshops',
      description: 'Attended and organized workshops on Web Development, DSA, and AI/ML.',
      icon: '📚'
    }
  ]

  const getSkillIcon = (skill) => {
    const icons = {
      'SQL': <svg viewBox="0 0 24 24" fill="#4479A1"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4.5 16.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm9 0c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5z" /></svg>,
      'API Development': <svg viewBox="0 0 24 24" fill="#00BFFF"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.23l-8 4-8-4v-8.46l8-4 8 4v8.46zM12 6.5l-4.5 2.25v4.5l4.5 2.25 4.5-2.25v-4.5L12 6.5z" /></svg>,
      'Data Structures': <svg viewBox="0 0 24 24" fill="#32CD32"><path d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4zM2 2v20h20V2H2zm18 18H4V4h16v16z" /></svg>,
      'Algorithms': <svg viewBox="0 0 24 24" fill="#FFD700"><path d="M13 11h-2v-2h2v2zm0 4h-2v-2h2v2zm0 4h-2v-2h2v2zm-4-8h-2v-2h2v2zm0 4h-2v-2h2v2zm0 4h-2v-2h2v2zm8-8h-2v-2h2v2zm0 4h-2v-2h2v2zm0 4h-2v-2h2v2zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" /></svg>,
      'React.js': <svg viewBox="0 0 24 24" fill="#61DAFB"><path d="M22.23 11.28c0-4.04-1.57-7.73-4.59-10.76l-.14-.14a.2.2 0 0 0-.28 0c-.08 0-1.55 1.48-1.55 1.54 0 .04.03.07.06.1 2.76 2.76 4.2 6.13 4.2 9.26 0 3.13-1.44 6.5-4.2 9.26-.03.03-.06.06-.06.1 0 .06 1.47 1.54 1.55 1.54a.2.2 0 0 0 .28 0l.14-.14c3.02-3.03 4.59-6.72 4.59-10.76M11.28 22.23c-4.04 0-7.73-1.57-10.76-4.59l-.14-.14a.2.2 0 0 1 0-.28c.03-.08 1.5-1.58 1.55-1.58.04 0 .07.03.11.06 2.76 2.76 6.13 4.2 9.26 4.2 3.13 0 6.5-1.44 9.26-4.2.03-.03.06-.06.11-.06.05 0 1.52 1.5 1.55 1.58a.2.2 0 0 1 0 .28l-.14.14c-3.03 3.02-6.72 4.59-10.76 4.59m-9.51-11c0-3.13 1.44-6.5 4.2-9.26.03-.03.06-.06.06-.11 0-.05-1.54-1.52-1.54-1.55a.2.2 0 0 0-.28 0l-.14.14c-3.02 3.03-4.59 6.72-4.59 10.76 0 4.04 1.57 7.73 4.59 10.76l.14.14a.2.2 0 0 0 .28 0c.08 0 1.55-1.48 1.54-1.54 0-.04-.03-.07-.06-.11-2.76-2.76-4.2-6.13-4.2-9.26m9.51-9.51c3.13 0 6.5 1.44 9.26 4.2.03.03.06.06.11.06.05 0 1.52-1.53 1.58-1.55a.2.2 0 0 0 0-.28l-.14-.14C19.01 1.57 15.32 0 11.28 0 7.24 0 3.55 1.57.52 4.59l-.14.14a.2.2 0 0 0 0 .28c.03.08 1.53 1.55 1.58 1.55.04 0 .07-.03.11-.06 2.76-2.76 6.13-4.2 9.26-4.2m0 12.82a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6z" /></svg>,
      'JavaScript': <svg viewBox="0 0 24 24" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.017-.735-1.176-1.64-1.176-1.154 0-1.54.417-1.54 1.294 0 1.05.542 1.19 1.54 1.19h.385c.612 0 .91-.315.91-.676 0-.315-.245-.49-.577-.525l-.123-.035-.018-.018c-.28-.105-.437-.157-.735-.157-.42 0-.648.192-.648.472 0 .28.14.385.455.507l.14.053c.612.21 1.488.35 1.488 1.12 0 1.015-.823 1.348-1.925 1.348-1.33 0-1.96-.595-2.048-1.383h1.016c.035.403.28.613.893.613.682 0 1.015-.21 1.015-.647 0-.472-.35-.595-1.015-.892l-.245-.105c-.63-.263-1.295-.455-1.295-1.173 0-.927.752-1.365 1.838-1.365 1.12 0 1.838.455 1.943 1.26h-1.016zM15.42 11.232c-.175-1.017-.735-1.176-1.64-1.176-1.154 0-1.54.417-1.54 1.294 0 1.05.542 1.19 1.54 1.19h.385c.612 0 .91-.315.91-.676 0-.315-.245-.49-.577-.525l-.123-.035-.018-.018c-.28-.105-.437-.157-.735-.157-.42 0-.648.192-.648.472 0 .28.14.385.455.507l.14.053c.612.21 1.488.35 1.488 1.12 0 1.015-.823 1.348-1.925 1.348-1.33 0-1.96-.595-2.048-1.383h1.016c.035.403.28.613.893.613.682 0 1.015-.21 1.015-.647 0-.472-.35-.595-1.015-.892l-.245-.105c-.63-.263-1.295-.455-1.295-1.173 0-.927.752-1.365 1.838-1.365 1.12 0 1.838.455 1.943 1.26h-1.016z" /></svg>,
      'TypeScript': <svg viewBox="0 0 24 24" fill="#3178C6"><path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.017-.735-1.176-1.64-1.176-1.154 0-1.54.417-1.54 1.294 0 1.05.542 1.19 1.54 1.19h.385c.612 0 .91-.315.91-.676 0-.315-.245-.49-.577-.525l-.123-.035-.018-.018c-.28-.105-.437-.157-.735-.157-.42 0-.648.192-.648.472 0 .28.14.385.455.507l.14.053c.612.21 1.488.35 1.488 1.12 0 1.015-.823 1.348-1.925 1.348-1.33 0-1.96-.595-2.048-1.383h1.016c.035.403.28.613.893.613.682 0 1.015-.21 1.015-.647 0-.472-.35-.595-1.015-.892l-.245-.105c-.63-.263-1.295-.455-1.295-1.173 0-.927.752-1.365 1.838-1.365 1.12 0 1.838.455 1.943 1.26h-1.016zM12.29 11.232c-.175-1.017-.735-1.176-1.64-1.176-1.154 0-1.54.417-1.54 1.294 0 1.05.542 1.19 1.54 1.19h.385c.612 0 .91-.315.91-.676 0-.315-.245-.49-.577-.525l-.123-.035-.018-.018c-.28-.105-.437-.157-.735-.157-.42 0-.648.192-.648.472 0 .28.14.385.455.507l.14.053c.612.21 1.488.35 1.488 1.12 0 1.015-.823 1.348-1.925 1.348-1.33 0-1.96-.595-2.048-1.383h1.016c.035.403.28.613.893.613.682 0 1.015-.21 1.015-.647 0-.472-.35-.595-1.015-.892l-.245-.105c-.63-.263-1.295-.455-1.295-1.173 0-.927.752-1.365 1.838-1.365 1.12 0 1.838.455 1.943 1.26h-1.016z" /></svg>,
      'HTML5': <svg viewBox="0 0 24 24" fill="#E34F26"><path d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zM10.6 6.3H5.1l-.2 2.3h11l-.2 2.3H5.4L5 13.2h10l-.4 5-3.6 1.1-3.6-1.1-.2-1.9h-2l.2 3.6 5.6 1.7 5.6-1.7.7-8.1H5.7l.2-2.3h10.3l.1-2.3H10.6z" /></svg>,
      'CSS3': <svg viewBox="0 0 24 24" fill="#1572B6"><path d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zM17.6 6.3l-.2 2.3H6.8l.2 2.3h10.4l-.8 8-4.6 1.3-4.6-1.3-.3-2.6h2.3l.1 1.3 2.5.7 2.5-.7.4-4.5H6.3l-.6-7.5h11.9z" /></svg>,
      'Node.js': <svg viewBox="0 0 24 24" fill="#339933"><path d="M14.28 15.34l-.88 1.54c-.2.34-.63.45-.96.26l-2.07-1.19c-.33-.19-.44-.61-.25-.95l.88-1.54c.2-.34.63-.45.96-.26l2.07 1.19c.33.19.44.61.25.95M12.42 2.1c-1.31 0-2.4 1-2.4 2.45v8.13c0 1.33 1.09 2.44 2.4 2.44s2.4-1.11 2.4-2.44V4.55c0-1.45-1.09-2.45-2.4-2.45M22.8 12c0 5.96-4.84 10.8-10.8 10.8S1.2 17.96 1.2 12 6.04 1.2 12 1.2 22.8 6.04 22.8 12M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0" /></svg>,
      'Express.js': <svg viewBox="0 0 24 24" fill="#ffffff" style={{ opacity: 0.8 }}><path d="M0 0h24v24H0V0zm11.233 13.91l.164.21c.542.665.91 1 1.54 1 1.05 0 1.332-.562 1.332-1.015 0-.49-.315-.77-.875-.805l-.316-.035c-.875-.105-1.575-.315-1.575-1.4 0-1.05.84-1.365 1.785-1.365 1.085 0 1.715.42 1.89 1.155h-1.05c-.07-.42-.315-.63-.84-.63-.56 0-.84.28-.84.665 0 .315.21.56.77.63l.315.035c.875.105 1.645.385 1.645 1.435 0 1.12-.91 1.365-1.89 1.365-1.26 0-1.925-.56-2.03-1.33h1.036z" /></svg>,
      'MongoDB': <svg viewBox="0 0 24 24" fill="#47A248"><path d="M17.193 11.53c0 2.227-2.317 4.02-5.18 4.02-2.863 0-5.18-1.793-5.18-4.02s2.317-4.02 5.18-4.02c2.863 0 5.18 1.793 5.18 4.02zm-5.18 8.441c-3.14 0-5.69-1.972-5.69-4.411s2.55-4.411 5.69-4.411 5.69 1.972 5.69 4.411-2.55 4.411-5.69 4.411zm0-11c-2.37 0-4.3 1.442-4.3 3.217s1.93 3.217 4.3 3.217 4.3-1.442 4.3-3.217-1.93-3.217-4.3-3.217zm11 4.029c0 6.627-5.373 12-12 12S0 17.627 0 11s5.373-12 12-12 12 5.373 12 12z" /></svg>,
      'MySQL': <svg viewBox="0 0 24 24" fill="#4479A1"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.8 19.2c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm3.6-4.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm0-4.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" /></svg>,
      'Python': <svg viewBox="0 0 24 24" fill="#3776AB"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM9.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM16.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>,
      'Prisma ORM': <svg viewBox="0 0 24 24" fill="#0C344B"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm5.1 17.5L12 4.5l-5.1 13h10.2z" /></svg>,
      'Figma': <svg viewBox="0 0 24 24" fill="#F24E1E"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.8 19.2c-1 0-1.8-.8-1.8-1.8v-1.8h1.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8zm0-4.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h1.8v1.8c0 1-.8 1.8-1.8 1.8zm0-4.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h1.8v3.6h-1.8zm3.6 4.8c-1 0-1.8-.8-1.8-1.8V9h1.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8zm0-4.8c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8z" /></svg>,
      'Git/GitHub': <svg viewBox="0 0 24 24" fill="#F05032"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm5.1 12.6l-5.1-5.1c-.2-.2-.6-.2-.8 0l-1.2 1.2-1.2-1.2c-.2-.2-.6-.2-.8 0l-.8.8c-.2.2-.2.6 0 .8l1.2 1.2-1.2 1.2c-.2.2-.2.6 0 .8l.8.8c.2.2.6.2.8 0l1.2-1.2 1.2 1.2c.2.2.6.2.8 0l5.1-5.1c.2-.2.2-.6 0-.8z" /></svg>,
      'AI & ML': <svg viewBox="0 0 24 24" fill="var(--primary)"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z" /></svg>,
    }
    return icons[skill] || <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6" /></svg>
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
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
            <li onClick={() => scrollToSection('achievements')} className={activeSection === 'achievements' ? 'active' : ''}>Achievements</li>
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
            <p className="hero-subtitle">B.Tech AI & ML Student</p>
            <p className="hero-description">
              Second-year student at Newton School of Technology, Ajeenkya DY Patil University, Pune.
              Focused on building scalable web and mobile applications with strong backend fundamentals and hands-on experience.
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
            <div className="hero-img-wrapper" style={{
              transform: `perspective(1000px) rotateY(${(mousePos.x - window.innerWidth / 2) / 50}deg) rotateX(${(window.innerHeight / 2 - mousePos.y) / 50}deg)`
            }}>
              <div className="hero-img-container">
                <img src={profileImg} alt="Devendra Mishra" className="hero-profile-img" />
              </div>
              <div className="img-bg-shape"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about ${isVisible.about ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Professional Summary</h2>
          <p className="section-subtitle">Developing smooth, user-friendly digital experiences through clean code and reliable build processes.</p>
          <div className="about-content">
            <div className="about-card">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              </div>
              <h3>Education</h3>
              <p>Bachelor of Technology in AI & ML</p>
              <p className="subtext">Newton School of Technology, ADYPU, Pune</p>
            </div>
            <div className="about-card">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
              </div>
              <h3>Passion</h3>
              <p>Applied AI & ML</p>
              <p className="subtext">Integrating AI into real-world applications</p>
            </div>
            <div className="about-card">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5-5 18-2-10-11-3z" /><path d="m11.68 12.32 5.74-5.74" /></svg>
              </div>
              <h3>Goal</h3>
              <p>Scalable Solutions</p>
              <p className="subtext">Building robust web and mobile platforms</p>
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
                <span className="category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z" /><path d="M21 9H3" /><path d="M9 21V9" /></svg>
                </span>
                <h3>Frontend Development</h3>
              </div>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
                </span>
                <h3>Backend Development</h3>
              </div>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3" /><path d="m15 1v3" /><path d="M9 20v3" /><path d="m15 20v3" /><path d="M20 9h3" /><path d="M20 15h3" /><path d="M1 9h3" /><path d="M1 15h3" /></svg>
                </span>
                <h3>Core Skills</h3>
              </div>
              <div className="skill-tags">
                {skills.core.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <span className="category-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                </span>
                <h3>Specialization</h3>
              </div>
              <div className="skill-tags">
                {skills.specialization.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
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
              <div key={index} className="project-card clickable-card" onClick={() => handleProjectClick(project)}>
                <div className="project-overlay">
                  <div className="overlay-buttons">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="overlay-btn view" onClick={(e) => e.stopPropagation()}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      View
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="overlay-btn code" onClick={(e) => e.stopPropagation()}>
                      Code
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </a>
                  </div>
                </div>
                {project.image && (
                  <div className="project-bg-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                )}
                <div className="project-header">
                  <span className="project-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z" /></svg>
                  </span>
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

      {/* Achievements Section */}
      <section id="achievements" className={`projects ${isVisible.achievements ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Achievements & Activities</h2>
          <p className="section-subtitle">Beyond coding: open source, leadership, and continuous learning</p>

          <div className="projects-grid">
            {achievements.map((item, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <span className="project-icon">
                    {item.title === 'Hacktoberfest 2025' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l5-5c.94-.94.94-2.48 0-3.42L12 2Z"></path><path d="M7 7h.01"></path></svg>}
                    {item.title === 'E-Sports Leadership' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><rect x="2" y="6" width="20" height="12" rx="2"></rect></svg>}
                    {item.title === 'Workshops' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>}
                  </span>
                </div>
                <h3 className="project-title">{item.title}</h3>
                <p className="project-description">{item.description}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '5rem' }}>
            <h2 className="section-title">Certifications</h2>
            <div className="projects-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="project-card clickable-card">
                  <div className="project-overlay">
                    <div className="overlay-buttons">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="overlay-btn view">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        View
                      </a>
                    </div>
                  </div>
                  <div className="project-header">
                    <span className="project-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                    </span>
                  </div>
                  <h3 className="project-title">{cert.title}</h3>
                  <p className="project-description" style={{ marginBottom: '1rem' }}>{cert.issuer}</p>
                  <p className="subtext" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{cert.date}</p>
                </div>
              ))}
            </div>
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
              <a href="https://www.linkedin.com/in/devendra-mishra-b9613b339/" target="_blank" rel="noopener noreferrer" className="contact-item clickable-card">
                <div className="contact-header">
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#0077b5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <span className="contact-link-text">Connect with me</span>
                </div>
              </a>

              <a href="https://leetcode.com/u/Devendra870/" target="_blank" rel="noopener noreferrer" className="contact-item clickable-card">
                <div className="contact-header">
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11 2 4 22h-4.25L7 5"></path><path d="m13 2-4 22h4.25L17 5"></path></svg>
                  </span>
                </div>
                <div>
                  <h4>LeetCode</h4>
                  <span className="contact-link-text">Solve with me</span>
                </div>
              </a>

              <a href="https://github.com/Mishra-coder" target="_blank" rel="noopener noreferrer" className="contact-item clickable-card">
                <div className="contact-header">
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#fff">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <h4>GitHub</h4>
                  <span className="contact-link-text">View my work</span>
                </div>
              </a>

              <a href="https://www.instagram.com/devendra.mi_/" target="_blank" rel="noopener noreferrer" className="contact-item clickable-card">
                <div className="contact-header">
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </span>
                </div>
                <div>
                  <h4>Instagram</h4>
                  <span className="contact-link-text">Follow me</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Devendra Mishra. Built with React ⚛️</p>
      </footer>
      <div className="cursor-follower" style={{ left: mousePos.x, top: mousePos.y }}></div>
      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal}>&times;</button>
            <div className="modal-header">
              {selectedProject.image && (
                <div className="modal-image" style={{ backgroundImage: `url(${selectedProject.image})` }}></div>
              )}
              <div className="modal-title-area">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-body">
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-actions">
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="overlay-btn view">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  View Live
                </a>
                <a href={selectedProject.code} target="_blank" rel="noopener noreferrer" className="overlay-btn code">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
