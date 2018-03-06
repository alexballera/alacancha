'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../../components/navigation'

const Header = yo`
<header className="row ${NavItems.id.id2}-header">
  <div className="col offset-s2 s10 m9 padding-zero">
    <div className="row valign-wrapper ${NavItems.id.id2}-header-container">
      <picture className="col s12 m2 center">
        <img src="images/logo-nestle-negro.png" alt=""/>
      </picture>
      <div className="col s12 m10">
        <p>fabulosos premios puedes ganar acertando con tus pronósticos los partidos del mundial...</p>
      </div>
    </div>
  </div>
</header>`

module.exports = Header
