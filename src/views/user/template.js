'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id2}" className="container">
  <div id="${NavItems.id.id2}" className="${NavItems.id.id2}">
    <div className="row">
      <div className="col s12 m9 ${NavItems.id.id2}-contenido">
        <header className="row">
          <picture className="col s12 m3">
            <img src="images/logo-nestle-negro.png" alt=""/>
          </picture>
          <div className="col s12 m9">
            <p>fabulosos premios puedes ganar acertando con tus pronósticos los partidos del mundial...</p>
          </div>
        </header>
      </div>
      <div className="col s12 m3 ${NavItems.id.id2}-aside">Texto 2</div>
    </div>
  </div>
  <picture className="${NavItems.id.id2}-bg-logo">
    <img src="images/bg-usuario-logo-bottom.png" alt=""/>
  </picture>
</section>
`
module.exports = elem
