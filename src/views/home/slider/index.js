'use strict'

import yo from 'yo-yo'
import JqueryOptions from './jquery.options'
import {
  Slide1,
  Slide2,
  Slide3
} from './slides'

const Slider = yo`
<div className="slider hide-on-med-and-down" id="sliderHome">
  <ul className="slides">
    ${Slide1}
    ${Slide2}
    ${Slide3}
  </ul>
</div>
`
export default () => {
  const Home = document.getElementById('home')
  Home.appendChild(Slider)
  JqueryOptions()
}
