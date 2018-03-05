'use strict'
import yo from 'yo-yo'
import {path} from '../../../components/data'

const sliderMobile = yo`
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
`

const sliderTablet = yo`
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
`

const sliderDesktop = yo`
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
`
export {sliderMobile, sliderTablet, sliderDesktop}
