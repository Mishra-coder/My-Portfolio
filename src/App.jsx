import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  const [activePage, setActivePage] = useState('About');

  const renderPage = () => {
    switch (activePage) {
      case 'About': return <About />;
      case 'Projects': return <Portfolio />;
      case 'Skills': return <Skills />;
      case 'Achievements': return <Achievements />;
      case 'Resume': return <Resume />;
      case 'Contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <main className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        {renderPage()}
      </div>
    </main>
  )
}

export default App;
