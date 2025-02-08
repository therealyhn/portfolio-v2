import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const handleNavClick = (section) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App