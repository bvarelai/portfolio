import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Education from './education'
import Projects from './proyects'
import RoadMap from './roadmap'
import Home from './home'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

function App() {
  return (
      <Router>
        <header className='web-header'>
          <div>
            <span>Brais Varela Sieiro</span>            
            <SunIcon className='icon disabled-link'/> 
          </div>  
          <div>
            <Link to="/portfolio">Home</Link>
            <Link to="/portfolio/education" className="disabled-link">Education</Link>
            <Link to="/portfolio/projects" className="disabled-link">Projects</Link>
            <Link to="/portfolio/roadmap" className="disabled-link">Road Map</Link>      
          </div>
        </header>
        <main className='main'>
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/education" element={<Education />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/roadmap" element={<RoadMap />} />
          </Routes>
        </main>
      </Router>
  )
}
export default App
