import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Education from './education'
import Projects from './proyects'
import Contact from './contact'
import Home from './home'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

function App() {

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(
     localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };
  
  return (
      <Router>
        <header className='web-header'>
          <div>
            <span>Brais Varela Sieiro</span>          
            {theme === "dark" ? 
            <SunIcon onClick={toggleTheme} className='icon'/> :<MoonIcon onClick={toggleTheme} className='icon'/>}  
          </div>  
          <div className="menu-web">
            <Link to="/portfolio">Home</Link>
            <Link to="/portfolio/education">Education</Link>
            <Link to="/portfolio/projects">Projects</Link>
            <Link to="/portfolio/contact">Contact</Link>      
          </div>
          <div className='menu-web-mobile'>
            <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
            <nav className={`menu ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
              <a href="/portfolio">Home</a>
              <a href="/portfolio/education">Education</a>
              <a href="/portfolio/projects">Projects</a>
              <a href="/portfolio/contact" className="disabled-link">Contact</a>
            </nav>
          </div>
        </header>
        <main className='main'>
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/education" element={<Education />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/contact" element={<Contact/>} />
          </Routes>
        </main>
        <footer className='web-footer'>
          <div className='name-info'>
            <div className='year-info'>
              <p>© 2025</p><small>Brais Varela Sieiro</small>
            </div>           
            <p className='built-with'>Built with React & Vite</p>
          </div>
        </footer>
      </Router>
  )
}
export default App
