import './proyects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faJava, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {

const items = [
   {title: 'SportNexus Website', description: 'SportNexus is a web application developed as my Bachelors Final Project (TFG), designed to simplify the creation, management, and organization of sports events. The platform enables users to create competitions, manage participants, schedule events, and streamline the overall event organization process through an intuitive and user-friendly interface.', techStack: ['JavaScript', 'React', 'Python', 'FastAPI'], githubLink: 'https://github.com/bvarelai/TFG.git', liveDemoLink: null},
   {title: 'ConsumerWise', description: 'ConsumerWise is an intuitive application that helps users make informed decisions about their consumption of resources such as electricity, water, and more. Featuring detailed analytics and interactive data visualizations, it allows users to monitor and better understand their environmental footprint, encouraging a more sustainable lifestyle. The project was developed as part of the HackUDC 2024 hackathon.', techStack: ['Python', 'FastAPI', 'Kotlin', 'C++', 'Dart'], githubLink: 'https://github.com/dsocasc/ConsumerWise.git', liveDemoLink: null}
  ];
    
  return (
    <div>
      <div className='projects-info'>
        <h2>My Projects</h2>
        <span>These projects involved designing, implementing, testing, and maintaining applications while improving my skills in programming, problem-solving, and software architecture.</span>
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
          <h3>More Projects Coming Soon</h3>
          <span>
              I am continuously working on new projects to expand my skills and portfolio.
              Stay tuned for future updates!
          </span>
        </div>
      </div>
    </div>
  );
}
