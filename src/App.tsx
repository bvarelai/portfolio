import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import personal_image from '/imagen.png'
import './App.css'
import Education from './education'
import Projects from './proyects'
import RoadMap from './roadmap'


function Home () {
  return(
    <div>
      <div className="presentation">
        <div className="information">
          <h1>Brais Varela Sieiro</h1>
          <h2>IT Engineer</h2>
          <p>Computer engineer specializing in information technology. Passionate about expanding my skills and improving my abilities.</p>
        </div>
        <img src={personal_image} className="logo" alt="React logo" />
      </div>
      <div className='link-info'>
        <div className='link'>
          <Link rel="stylesheet" to="https://github.com/bvarelai" >
            <img src="/portfolio/Git.png" alt="Logo de ubicación"/>
          </Link>
        </div>
        <div className='link'>
          <Link rel="stylesheet" to="mailto:b.varela.sieiro@gmail.com" >
            <img src="/portfolio/email.png" alt="Logo de ubicación"/>
          </Link>
        </div>
        <div className='link'>
          <Link rel="stylesheet" to="https://www.linkedin.com/in/brais-varela-sieiro-939aa6244/" >
            <img src="/portfolio/linkendin.png" alt="Logo de linkedin"/>
          </Link>
        </div>
      </div> 

      
      
    </div>
  )
}


function App() {
  return (
      <Router>
        <header className='web-header'>
          <span>Brais Varela Sieiro</span>
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
