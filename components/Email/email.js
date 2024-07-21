import './email.css'
import datos from '../../Data/data'

const emailTemplate = () => {
  return `
  <div class="tooltip-container">
  <span class="tooltip">Contact Me</span>
  <a href=${`mailto:${datos.email} class="text">Contact me</a>`}
</div>
`
}

const Email = () => {
  return emailTemplate()
}

export default Email
