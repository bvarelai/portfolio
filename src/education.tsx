import './education.css'

export default function Education() {


  const items = [
    {year: '2019', title: 'C# and Java Programming Course', description: 'Completed a training course at Easy System covering the fundamentals of C# and Java, including object-oriented programming, core programming concepts, debugging, and software development best practices.'},
    {year: '2020-2025', title: 'Degree in Computer Engineering', description: 'Graduated with a Bachelors Degree in Computer Engineering from the University of A Coruña (UDC). Gained solid knowledge in software engineering, object-oriented programming, databases, computer networks, operating systems, and full software development lifecycle through theoretical and practical projects.'},
    {year: '2025-Present', title: 'Masters Degree in Computer Engineering (MUEI)', description: 'Graduated with a Masters Degree in Computer Engineering from the University of A Coruña (UDC). Advanced knowledge in software architecture, distributed systems, cloud computing, cybersecurity, artificial intelligence, and software engineering methodologies. Completed complex software development projects, enhancing problem-solving, teamwork, and technical leadership skills.'}
  ];

  return (
    <div> 
      <div className='education-info'>
        <h2>My Education</h2>
        <span>My educational journey has been shaped by continuous learning, curiosity, and a strong interest in technology. The timeline below highlights the most important milestones in my learning path, showing how my knowledge and experience have evolved over time.
        </span>
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
        <h2>Language Skills</h2>
        <span>Effective communication is essential in software development. I am fluent in Spanish and Galician and have an intermediate level of English, allowing me to understand basic technical documentation and communicate effectively in common situations.</span>
        
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
                    <td>Spanish</td>
                    <td>
                        <span className="badge native">
                            Native
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>Galician</td>
                    <td>
                        <span className="badge native">
                            Native
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>
                        <span className="badge intermediate">
                            Intermediate
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