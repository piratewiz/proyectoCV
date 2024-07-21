import './Projects.css'
import datos from '../../../Data/data'

const projectsTemplate = () => {
  return `
  <section class="projects-content">
  <h1>Projects</h1>
  <ul class="ul-content">
  ${datos.projects
    .map(
      (value) => `
    <div class="card">
    <img src=${value.preview} alt=${value.title}/>
    <h3> ${value.title}</h3>
    <p> ${value.description}</p>
    <a href= ${value.link} target="_blank">See Project ></a>
    </div>
    `
    )
    .join('')}
  </ul>
  </section>
  `
}

const Projects = () => {
  return projectsTemplate()
}

export default Projects
