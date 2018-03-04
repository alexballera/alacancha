'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id2}" className="container">
  <div id="${NavItems.id.id2}" className="${NavItems.id.id2}">
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
    </header>
    <div className="row ${NavItems.id.id2}-contenido">
      <div className="col offset-s2 s10 m9 padding-zero">
        Texto 1
      </div>
      <div className="col offset-s2 s10 m3 ${NavItems.id.id2}-aside padding-zero">
        Texto 2
      </div>
    </div>
  </div>
  <picture className="${NavItems.id.id2}-bg-logo">
    <img src="images/bg-usuario-logo-bottom.png" alt=""/>
  </picture>
</section>
`
module.exports = elem
