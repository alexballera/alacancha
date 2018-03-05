'use strict'
import yo from 'yo-yo'
import {home} from '../createHome'
import {sliderMobile, sliderTablet, sliderDesktop} from './slider'

const Slider = yo`
<div className="slider">
  <div className="slider-mobile hide-small-and-up">
    ${sliderMobile}
  </div>
  <div className="slider-tablet hide-on-small-and-down hide-large-and-up">
    ${sliderTablet}
  </div>
  <div className="slider-desktop hide-on-med-and-down">
    ${sliderDesktop}
  </div>
</div>
`
export default () => {
  home.appendChild(Slider)
}