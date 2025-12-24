import {Link } from 'react-router-dom'
import personal_image from '/imagen_real.png'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faJava, faGithub, faNodeJs, faDocker, faFlutter, faSquareLinkedin, faGoogle} from '@fortawesome/free-brands-svg-icons'

export default function Home () {
  
  const items = [
    { icon: faPython, name: 'Python' },
    { icon: faReact, name: 'React' },
    { icon: faJava, name: 'Java' },   
    { icon: faGithub, name: 'GitHub' },
    { icon: faNodeJs, name: 'NodeJS' },
    { icon: faDocker, name: 'Docker' },
    { icon: faFlutter, name: 'Flutter' },
  ];
  
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
             <FontAwesomeIcon className='icon-tecnologies' icon={faGithub} size="2x"/>
          </Link>
        </div>
        <div className='link'>
          <Link rel="stylesheet" to="mailto:b.varela.sieiro@gmail.com" >
             <FontAwesomeIcon className='icon-tecnologies' icon={faGoogle} size="2x"/>
          </Link>
        </div>
        <div className='link'>
          <Link rel="stylesheet" to="https://www.linkedin.com/in/brais-varela-sieiro-939aa6244/" >
             <FontAwesomeIcon className='icon-tecnologies' icon={faSquareLinkedin} size="2x"/>
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
      <div  className='competence-abilities'>
        <h2>Competences and abilities</h2>
        <span>
          There are diferent skills that I have acquired during my career and personal projects. These are some of them:
        </span>
        <div className='tecnologies'>          
            {items.map((item, index) => (
              <div key={index}>
                <FontAwesomeIcon className='icon-tecnologies' icon={item.icon} size="5x"/>
                <span>{item.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}