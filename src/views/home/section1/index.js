'use strict'
import yo from 'yo-yo'
import {home} from '../createHome'

const Section1 = yo`
<div class="slider">
    <ul class="slides">
      <li>
        <img src="/images/bg-grey.png">
        <div class="caption center-align">
          <img src="/images/logo.png" alt=""/>
          <h2>Bienvenidos</h2>
        </div>
      </li>
      <li>
        <img src="/images/bg-grey.png">
        <div class="caption center-align">
          <img src="/images/logo.png" alt=""/>
          <h2>Bienvenidos</h2>
        </div>
      </li>
    </ul>
  </div>
`
export default () => {
  home.appendChild(Section1)
}
