import {Link } from 'react-router-dom'
import personal_image from '/imagen_real.png'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faJava, faGithub, faNodeJs, faDocker, faFlutter, faSquareLinkedin, faGoogle, faCss, faLinux,faJs} from '@fortawesome/free-brands-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { translations } from "./translations";

type Language = "es" | "en" | "gal";

export default function Home ({ language }: { language: Language }) {
  
  const t = translations[language];
  
  const items = [
    { icon: faPython, name: 'Python' },
    { icon: faReact, name: 'React' },
    { icon: faJava, name: 'Java' },   
    { icon: faGithub, name: 'GitHub' },
    { icon: faNodeJs, name: 'NodeJS' },
    { icon: faDocker, name: 'Docker' },
    { icon: faFlutter, name: 'Flutter' },
    { icon: faCss, name: 'CSS' },
    { icon: faLinux, name: 'Linux' },
    { icon: faJs, name: 'JavaScript' },
  ];
  
  return(
    <div>
      <div className='first-section'>
        <div className="presentation">
          <div className="information">
            <h1>Brais Varela Sieiro</h1>
            <h2>{t.informationh2}</h2>
            <p>{t.informationp}</p>
          </div>
          <img src={personal_image} className="logo" alt="React logo" />
        </div>
        <div className='cv-link'>
          <div className='button-cv'>
            <a href="/portfolio/CV.pdf" target="_blank" rel="noopener noreferrer">{t.downloadCV}<FontAwesomeIcon className='arrow-cv' icon={faArrowRight} size="lg"/></a>
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
        </div>
      </div>
      <div className='about-me'>
        <h2>{t.aboutme}</h2>
        <span>
          {t.aboutmespan} 
          </span>
        <div className='personal-info'>          
           <div>
              <h3>{t.aboutmeh31}</h3>
              <li>
                {t.aboutmeli1}
              </li>
              <li>
                {t.aboutmeli2}
              </li>  
           </div>
           <div>
              <h3>{t.aboutmeh32}</h3>
              <li>
                {t.aboutmeli3}
              </li>
              <li>
                {t.aboutmeli4}
              </li>
           </div>
        </div>
      </div>
      <div  className='competence-abilities'>
        <h2>{t.competences}</h2>
        <span>
          {t.competencespan}
        </span>
        <div className='tecnologies'>          
            {items.map((item, index) => (
              <div key={index}>
                <FontAwesomeIcon className='icon-tecnologies' icon={item.icon} size="4x"/>
                <span>{item.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}