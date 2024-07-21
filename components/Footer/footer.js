import datos from '../../Data/data'
import './footer.css'

const createFooter = () => {
  return `
  <footer id="footer">
  <p>©️ Created by ${datos.name}</p>
  </footer>
  `
}

const Footer = () => {
  return createFooter()
}

export default Footer
