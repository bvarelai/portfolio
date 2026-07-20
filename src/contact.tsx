import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {

  const items = [
     { icon: faEnvelope, h4: 'Email', span: 'b.varela.sieiro@gmail.com'},
     { icon: faLinkedin, h4: 'Linkedin', span: 'linkedin.com/in/brais-varela-sieiro'},
     { icon: faGithub, h4: 'Github', span: 'github.com/bvarelai'},
     { icon: faLocationDot, h4: 'Location', span: 'A Coruña, Spain'},
    ];

  return (
    <div>
      <div className="roadmap-info">
        <h2>Get in Touch</h2>
        <span>I`m always open to new opportunities, collaborations or just a friends hello.
          Let`s build something amazing together!
        </span>
        <div className="contact-container"> 
          <div className='contact-first'>
            {items.map((item, index) => (
              <div key={index} className="contact-info">
                <div className="contact-elements">
                  <div className="div-contact">
                    <FontAwesomeIcon className='icon-contact' icon={item.icon} size="xl"/>
                  </div>
                    <div className="contact-text">
                      <h4>{item.h4}</h4>
                      <span>{item.span}</span>
                    <div/>
                  </div>
                </div>
              </div>
            ))}          
          </div>            
        </div>
      </div>
     </div>
   )
}