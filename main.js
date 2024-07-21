import './style.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Content from './components/Content/content'
import Avatar from './components/Avatar/avatar'

const render = () => {
  document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Content()}
  ${Avatar()}
  ${Footer()}
  `
}

render()
