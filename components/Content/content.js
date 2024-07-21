import AboutMe from '../../src/Pages/AboutMe/aboutme.js'
import Education from '../../src/Pages/Education/education'
import Experience from '../../src/Pages/Experience/experience'
import Projects from '../../src/Pages/Projects/Projects'
import './content.css'

const mainContent = () => {
  return `
  <main id="main">
  ${AboutMe()}
  </main>
  `
}

const contentList = {
  'education-btn': Education,
  'experience-btn': Experience,
  'about-me-btn': AboutMe,
  'projects-btn': Projects,
  'button-projects': Projects
}

const Content = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main')

    document.addEventListener('click', (e) => {
      const contentFunction =
        contentList[e.target.classList[0]] || contentList[e.target.id]
      if (contentFunction) {
        e.preventDefault()
        main.innerHTML = contentFunction()
      } else if (e.target.id === 'get-back-btn') {
        main.innerHTML = AboutMe()
      }
    })
  })

  return mainContent()
}

export default Content
