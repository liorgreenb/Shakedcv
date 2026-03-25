import type { cvData } from '../data/cv-data'
import { HobbyIcon } from './HobbyIcon'

interface Props {
  data: typeof cvData
}

export function Sidebar({ data }: Props) {
  return (
    <aside className="cv-sidebar">
      <img
        src={data.photo}
        alt={data.name}
        className="cv-photo"
      />

      {/* Personal Details */}
      <div className="sidebar-section">
        <h3>Personal details</h3>
        <p className="personal-name">{data.name}</p>
        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>{data.contact.email}</span>
        </div>
        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>{data.contact.phone}</span>
        </div>
        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>Born {data.contact.dateOfBirth}</span>
        </div>
      </div>

      {/* Languages */}
      <div className="sidebar-section">
        <h3>Languages</h3>
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

      {/* Hobbies */}
      <div className="sidebar-section">
        <h3>Hobbies</h3>
        {data.hobbies.map((hobby, i) => (
          <div key={i} className="hobby-item">
            <HobbyIcon type={hobby.type} />
            <span>{hobby.name}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
