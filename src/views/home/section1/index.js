'use strict'
import yo from 'yo-yo'
import {home, body} from '../createHome'
import {path} from '../../../components/data'

const Section1 = yo`
<div className="slider">
    <ul className="slides">
      <li>
        <img src="${path}images/bg-grey.png">
        <div className="caption center-align">
          <img src="${path}images/logo.png" alt=""/>
          <h2>Bienvenidos</h2>
        </div>
      </li>
      <li>
        <img src="${path}images/bg-grey.png">
        <div className="caption center-align">
          <img src="${path}images/logo.png" alt=""/>
          <h2>Bienvenidos</h2>
        </div>
      </li>
    </ul>
  </div>
`
export default () => {
  home.appendChild(Section1)
  body.style.backgroundImage = `url(..${path}images/bg-main.png)`
  document.getElementById('brand-logo-top').style.display = 'none'
  document.getElementById('informacion-logo-img').style.display = 'none'
  document.getElementById('brand-logo-img').style.display = 'block'
}
