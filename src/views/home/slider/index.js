'use strict'
import yo from 'yo-yo'
import {home} from '../createHome'
import {sliderMobile, sliderTablet, sliderDesktop} from './slider'

const Slider = yo`
<div>
  <div className="margin-top"></div>
  <div className="slider">
    <div id="slider-mobile" className="hide-small-and-up">
      ${sliderMobile}
    </div>
    <div id="slider-tablet" className="hide-on-small-and-down hide-large-and-up">
      ${sliderTablet}
    </div>
    <div id="slider-desktop" className="hide-on-med-and-down">
      ${sliderDesktop}
    </div>
  </div>
</div>
`
export default () => {
  home.appendChild(Slider)
}
