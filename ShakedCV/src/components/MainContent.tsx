import type { cvData } from '../data/cv-data'
import { HobbyIcon } from './HobbyIcon'

export function MainContent({ data }: Props) {
  return (
    <main className="cv-body">

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

      {/* Military Service */}
      <section className="cv-section cv-section-small">
        <h2>{data.militaryService.title}</h2>
        <div className="cv-entry">
          <div className="entry-header">
            <span className="entry-title">{data.militaryService.subtitle}</span>
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

      {/* Additional Projects */}
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

      {/* Languages + Hobbies */}
      <div className="bottom-row">
        <section className="cv-section">
          <h2>Languages</h2>
          <div className="inline-list">
            {data.languages.map((lang) => (
              <div key={lang.name} className="language-row">
                <span>{lang.name}</span>
                <div className="language-dots">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`dot${i < lang.level ? '' : ' dot-empty'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>Hobbies</h2>
          <div className="inline-list">
            {data.hobbies.map((hobby, i) => (
              <div key={i} className="hobby-item">
                <HobbyIcon type={hobby.type} />
                <span>{hobby.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

    </main>
  )
}
