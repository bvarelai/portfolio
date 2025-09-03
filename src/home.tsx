import {Link } from 'react-router-dom'
import personal_image from '/imagen.png'
import './home.css'


export default function Home () {
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
      <div className='about-me'>
        <h2>About Me</h2>
        <span>
          I'm a computer engineer with knowledge about web development and IT. I graduated in Informatics Engineering from the University of A Coruña, where I gained experience across diferent areas of computer engineering. 
          </span>
        <div className='personal-info'>          
           <div>
              <h3>💡 Focus</h3>
              <li>
                Information Technology (IT)
              </li>
              <li>
                Web Development 
              </li>  
           </div>
           <div>
              <h3>🔧 Skills & Interest</h3>
              <li>
                Programming & Sotfware Development
              </li>
              <li>
                Management with React & TypeScrypt
              </li>
           </div>
        </div>
      </div>
    </div>
  )
}