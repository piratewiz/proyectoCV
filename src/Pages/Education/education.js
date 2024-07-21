import './education.css'
import datos from '../../../Data/data'
import AboutMe from '../AboutMe/aboutme'

const { degree, university, honors } = datos.education
const { image1, image2, image3 } = datos.images

const educationArray = [
  { value: university, image: image2 },
  { value: degree, image: image1 },
  { value: honors, image: image3 }
]

const educationTemplate = () => `
<div class="content-education">
  <div class="div-education">
    <h1>Education</h1>
    <ul>
      ${educationArray
        .map(
          ({ value, image }) => `
        <li>
        <img src="${image}" alt="education image" />
        <h2>${value}</h2>
        </li>
      `
        )
        .join('')}
    </ul>
    <article>
    <p>I earned my Bachelor of Science in Computer Science from The Power MBA ITech School in 2022. During my time there, I maintained a high level of academic excellence, culminating in graduating with Summa Cum Laude honors. <br><br> This distinction reflects my dedication and hard work throughout my studies.</p>
    </article>
    <button id="get-back-btn">GET BACK</button>
  </div>
</div>
`

const Education = () => {
  return educationTemplate()
}

export default Education
