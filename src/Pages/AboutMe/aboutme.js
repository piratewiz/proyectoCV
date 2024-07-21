import './aboutme.css'
import datos from '../../../Data/data.js'

const createAboutMeTemplate = () => {
  return `
  <div class="presentation-container">
     <div class="presentation">
      <h1>About Me</h1>
      <p>${datos.aboutMe}</p>
       <div class="btns">
       <button type="button" class="education-btn">Education</button>
       <button type="button" class="experience-btn">Experience</button>
       </div>
     </div>
     <div class="marquee">
     <ul class="marquee__content">
      ${datos.skills
        .map(
          (img) => `<li class="marquee__item">
          <img src="${img.skill}" alt="Skill icon" />
      </li>`
        )
        .join('')}
    </ul>
  </div>
`
}

const AboutMe = () => {
  return createAboutMeTemplate()
}

export default AboutMe
