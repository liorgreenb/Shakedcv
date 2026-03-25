import '../cv.css'
import { cvData } from '../data/cv-data'
import { Sidebar } from './Sidebar'
import { CVMainFormat1 } from './CVMainFormat1'

export function CVFormat1() {
  return (
    <div className="cv-page">
      <Sidebar data={cvData} />
      <CVMainFormat1 data={cvData} />
    </div>
  )
}
