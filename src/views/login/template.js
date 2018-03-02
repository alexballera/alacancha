'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'
import {Form} from './form'
const elem = yo`
<section id="seccion-${NavItems.id.id3}">
  <div id="${NavItems.id.id3}" className="${NavItems.id.id3}">
    <div className="row valign-wrapper ${NavItems.id.id3}-row">
      <div className="col s12 m5 center-align ${NavItems.id.id3}-form">
        <div class="row ${NavItems.id.id3}-form-container">
          <picture className="col s12 ${NavItems.id.id3}-form-logo">
            <img src="images/logo-nestle.png" alt="">
          </picture>
          ${Form}
          <div className="col s12 ${NavItems.id.id3}-form-links">
            <a href="#">Olvidó la contraseña</a>
          </div>
        </div>
        <div className="row ${NavItems.id.id3}-form-text">
          <div className="col s12">
            <p>
              7 rondas donde tendrás que acertar los resultados de los partidos,
              avanzar de ronda e hinchar por tus compañeros
            </p>
          </div>
        </div>
        <div className="row ${NavItems.id.id3}-form-logo-russia">
          <img src="images/logo-menu.png" alt=""/>
        </div>
      </div>
      <div className="col s12 m5 center-align ${NavItems.id.id3}-logo">
        <img src="images/logo.png" alt="">
      </div>
    </div>
  </div>
</section>
`
module.exports = elem
