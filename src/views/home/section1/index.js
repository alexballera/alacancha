'use strict'
import yo from 'yo-yo'
import {home, body} from '../createHome'
import {path} from '../../../components/data'

const Section1 = yo`
<div class="slider">
    <ul class="slides">
      <li>
        <img src="${path}images/bg-grey.png">
        <div class="caption center-align">
          <img src="${path}images/logo.png" alt=""/>
          <h2>Bienvenidos</h2>
        </div>
      </li>
      <li>
        <img src="${path}images/bg-grey.png">
        <div class="caption center-align">
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
}
