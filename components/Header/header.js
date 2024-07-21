import './header.css'
import Email from '../Email/email'

const links = [
  { href: '#aboutme', text: 'About me', className: 'about-me-btn' },
  { href: '#education', text: 'Education', className: 'education-btn' },
  { href: '#experience', text: 'Experience', className: 'experience-btn' },
  { href: '#projects', text: 'Projects', className: 'projects-btn' }
]

const createHeader = () => {
  return `
  <header id="header">
  <div class="frontal">
    <div>
      <h1>Maksym</h1>
    </div>
    <div class="frontal-links">
      <nav class="nav">
      <ul>
      ${links
        .map(
          (link) => `
        <li>
          <a class="${link.className}" href="${link.href}">${link.text}</a>
        </li>
      `
        )
        .join('')}
    </ul>
      </nav>
    </div>
  </div>
  <div class="social-media">
    <div class="email">${Email()}</div>
    <div class="icons-media">
    <img src="./assets/github.png" alt="github">
    <img src="./assets/instagram.png" alt="instagram">
    <img src="./assets/linkedin.png" alt="linkedin">
    </div>
  </div>
  </header>
`
}

const Header = () => {
  return createHeader()
}

export default Header
