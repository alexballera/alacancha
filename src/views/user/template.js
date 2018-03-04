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
        <header className="row ${NavItems.id.id2}-contenido-header">
          <picture className="col s12 m2 center">
            <img src="images/avatar.png" alt=""/>
          </picture>
          <div className="col s12 m10">
            <hgroup>
              <h2>Hola, <span>Jose.</span></h2>
              <h3>Estás en el puesto <span>3</span> del ranking con <span>1200</span> pts</h3>
            </hgroup>
            <p>Completa los resultados de los siguientes partidos antes del</p>
            <p><span>viernes 15/6</span> a las <span>18:00</span> Buena suerte!</p>
          </div>
        </header>
      </div>
      <div className="col offset-s2 s10 m3 ${NavItems.id.id2}-aside padding-zero">
        Aside
      </div>
    </div>
  </div>
</section>
`
module.exports = elem
