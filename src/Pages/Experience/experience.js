import './experience.css'
import datos from '../../../Data/data'

const experienceTemplate = () => {
  return `
  <div class="experience-content">
  <section class="experience-section">
  <button id="get-back-btn">GET BACK</button>
  <h1>Experience</h1>
  <ul>
  ${datos.workExperience
    .map(
      (value) => `
    <li>
    <h3>${value.startDate} - ${value.endDate}</h3>
    <h2>${value.company}</h2>
    <h2>${value.position}</h2>
    <p>${value.description}</p>
    </li>
    `
    )
    .join('')}
  </ul>
  <button id="button-projects">Check my Projects</button>
  </section>
  </div>
  `
}

const Experience = () => {
  return experienceTemplate()
}

export default Experience
