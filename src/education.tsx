import './education.css'
import { translations } from './translations';


type Language = "es" | "en" | "gal";


export default function Education({ language }: { language: Language }) {

  const t = translations[language];
  
  const items = [
    {year: '2019', title: t.timelinetitle, description: t.timelinedescription1},
    {year: '2020-2025', title: t.timelinetitle2, description: t.timelinedescription2},
    {year: '2025-Present', title: t.timelinetitle3, description: t.timelinedescription3}
  ];
  
  const languages = [
    { name: t.spanish, level: t.levelnative, percentage: 100 },
    { name: t.galician, level: t.levelnative, percentage: 100 },
    { name: t.english, level: t.levelintermediate, percentage: 60}
  ];

  return (
    <div> 
      <div className='education-info'>
        <h2>{t.educationh2}</h2>
        <span>{t.educationh2span}</span>
      </div>
      <div className='timeline'>   
        {items.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='language-skills'>
        <h2>{t.languageSkillh2}</h2>
        <span>{t.languageSkillsspan}</span>
        
        
        <div className="languages-card">
          {languages.map((language) => (
            <div className="language-row" key={language.name}>

              <span className="language-name">
                {language.name}
              </span>

              <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{
                      "--progress": `${language.percentage}%`
                    } as React.CSSProperties}
                  />
              </div>
              <div className="language-level">
                <span>{language.level}</span>
                <small>{language.percentage}%</small>
              </div>
            </div>
          ))}
        </div>
     </div>
    </div>
  )
}