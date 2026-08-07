import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Education from './education'
import Projects from './proyects'
import Contact from './contact'
import Home from './home'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'
import { translations } from "./translations";

function App() {

  const [open, setOpen] = useState(false);
  type Language = "es" | "en" | "gal";
  const [language, setLanguage] = useState<Language>("es");
  
  const t = translations[language];

  const changeLanguage = () => {
  if (language === "en") {
    setLanguage("es");
  } else if (language === "es") {
    setLanguage("gal");
  } else {
    setLanguage("en");
  }
};

  sessionStorage.setItem(language, 'language');

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
            <div className="language-container">
              <a 
                className="language-button"
                onClick={changeLanguage}>
                  {language.toUpperCase()}
              </a>              
            </div>
          </div>
          <div className="menu-web">
            <Link to="/">{t.home}</Link>
            <Link to="/education">{t.education}</Link>
            <Link to="/projects">{t.projects}</Link>
            <Link to="/contact">{t.contact}</Link>      
          </div>
          <div className='menu-web-mobile'>
            <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
            <nav className={`menu ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
              <Link to="/">{t.home}</Link>
              <Link to="/education">{t.education}</Link>
              <Link to="/projects">{t.projects}</Link>
              <Link to="/contact">{t.contact}</Link>      
            </nav>
          </div>
        </header>
        
        <main className='main'>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/education" element={<Education language={language} />} />
            <Route path="/projects" element={<Projects language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </main>
        <footer className='web-footer'>
          <div className='name-info'>
            <div className='year-info'>
              <p>© 2025</p><small>Brais Varela Sieiro</small>
            </div>     
            <span className="separator">—</span>      
            <p className='built-with'>{t.builtwith}</p>
          </div>
        </footer>
      </Router>
  )
}
export default App
