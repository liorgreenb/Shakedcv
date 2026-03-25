import '../cv.css'
import { cvData } from '../data/cv-data'
import { CVHeader } from './CVHeader'
import { MainContent } from './MainContent'

export function CV() {
  return (
    <div className="cv-page cv-page-single">
      <CVHeader data={cvData} />
      <MainContent data={cvData} />
    </div>
  )
}
