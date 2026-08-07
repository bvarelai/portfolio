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
        
        <div className="table-container">
          <table className="languages-table">
            <thead>
                <tr>
                    <th>Language</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{t.spanish}</td>
                    <td>
                        <span className="badge native">
                            {t.levelnative}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>{t.galician}</td>
                    <td>
                        <span className="badge native">
                            {t.levelnative}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>{t.english}</td>
                    <td>
                        <span className="badge intermediate">
                            {t.levelintermediate}
                        </span>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}