import type { cvData } from '../data/cv-data'

interface Props {
  data: typeof cvData
}

export function CVMainFormat1({ data }: Props) {
  return (
    <main className="cv-main">

      <div className="cv-header">
        <h1>{data.name}</h1>
        <p className="cv-title">{data.title}</p>
      </div>

      {/* Education */}
      <section className="cv-section">
        <h2>Education</h2>
        {data.education.map((entry, i) => (
          <div key={i} className="cv-entry">
            <div className="entry-header">
              <span className="entry-title">{entry.title}</span>
              <span className="entry-dates">{entry.dates}</span>
            </div>
            {entry.note && <p className="entry-note">{entry.note}</p>}
          </div>
        ))}
      </section>

      {/* Employment */}
      <section className="cv-section">
        <h2>Clinical Work Experience</h2>
        {data.employment.map((entry, i) => (
          <div key={i} className="cv-entry">
            <div className="entry-header">
              <span className="entry-title">{entry.title}</span>
              <span className="entry-dates">{entry.dates}</span>
            </div>
            {entry.subtitle && <p className="entry-subtitle">{entry.subtitle}</p>}
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="cv-section cv-section-small">
        <h2>Certifications</h2>
        {data.certifications.map((cert, i) => (
          <div key={i} className="cv-entry">
            <div className="entry-header">
              <span className="entry-title">{cert.title} — {cert.issuer}</span>
              <span className="entry-dates">{cert.date}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Military Service */}
      <section className="cv-section cv-section-small">
        <h2>{data.militaryService.title}</h2>
        <div className="cv-entry">
          <div className="entry-header">
            <span className="entry-subtitle" style={{margin: 0}}>{data.militaryService.subtitle}</span>
            <span className="entry-dates">{data.militaryService.dates}</span>
          </div>
          {data.militaryService.bullets && (
            <ul className="entry-bullets">
              {data.militaryService.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Research Projects & Activities */}
      <section className="cv-section">
        <h2>Research Projects & Activities</h2>
        {data.extracurricular.map((entry, i) => (
          <div key={i} className="cv-entry">
            <div className="entry-header">
              <span className="entry-title">{entry.title}</span>
              {entry.dates && <span className="entry-dates">{entry.dates}</span>}
            </div>
            {entry.subtitle && (
              <p className="entry-subtitle">{entry.subtitle}</p>
            )}
            {entry.bullets && entry.bullets.length > 0 && (
              <ul className="entry-bullets">
                {entry.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
            {entry.afterNote && <p className="entry-after-note">{entry.afterNote}</p>}
          </div>
        ))}
      </section>

    </main>
  )
}
