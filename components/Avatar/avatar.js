import './avatar.css'
import datos from '../../Data/data.js'

const createAvatar = () => {
  return `
  <div class="avatar-img">
  <img src="${datos.avatar}" alt="avatar"/>
  </div>
  `
}

const Avatar = () => {
  return createAvatar()
}

export default Avatar
