import './proyects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { translations } from './translations';

type Language = "es" | "en" | "gal";

export default function Projects({ language }: { language: Language }) {

const t = translations[language];

const items = [
   {title: t.proyectitle1, description: t.proyectdescription1, techStack: ['JavaScript', 'React', 'Python', 'FastAPI'], githubLink: 'https://github.com/bvarelai/TFG.git', liveDemoLink: null},
   {title: t.proyectitle2, description: t.proyectdescription2, techStack: ['Python', 'FastAPI', 'Kotlin', 'C++', 'Dart'], githubLink: 'https://github.com/dsocasc/ConsumerWise.git', liveDemoLink: null}
  ];
    
  return (
    <div>
      <div className='projects-info'>
        <h2>{t.proyectsh2}</h2>
        <span>{t.proyectsh2span}</span>
      </div>
      <div className="projects-grid">
        {items.map((item, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{item.title}</h3>
              <span>
                {item.description}
              </span>
              <div className="tech-stack">
                {item.techStack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={item.githubLink}>
                  <FontAwesomeIcon icon={faGithub} size="lg"/> GitHub
                </a>
                {item.liveDemoLink ? (
                  <a href={item.liveDemoLink}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" /> Live Demo
                  </a>
                ) : (
                  <a className="live-demo-disabled">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" /> Live Demo
                  </a>
                )} 
              </div>
            </div>
          </div>
        ))}
        <div className="project-card coming-soon">
          <div className="coming-icon">+</div>
          <h3>{t.commingsoon}</h3>
          <span>
            {t.commingsoonspan}
          </span>
        </div>
      </div>
    </div>
  );
}
