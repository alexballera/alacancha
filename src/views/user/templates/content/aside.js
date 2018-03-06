'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../../../components/navigation'

const Aside = yo`
<div className="row">
  <picture className="col s12 center ${NavItems.id.id2}-aside-logo padding-zero">
    <img src="images/logo.png" alt=""/>
  </picture>
  <div className="col s12 padding-zero center ${NavItems.id.id2}-aside-time">
    <p>Quedan</p>
    <img src="images/logo-usuario-time.png" alt=""/> <span>65:24:32</span>
    <p>para el mundial</p>
  </div>
  <div className="col s12 padding-zero center ${NavItems.id.id2}-aside-selection">
    <p>¿Quién será el</p>
    <p>próximo goleador?</p>
    <div class="input-field col s12">
      <select id="select-goleador">
        <option value="" disabled selected>Seleccionar</option>
        <option value="1">Jugador 1</option>
        <option value="2">Jugador 2</option>
        <option value="3">Jugador 3</option>
      </select>
    </div>
  </div>
  <div className="col s12 padding-zero center ${NavItems.id.id2}-aside-selection">
    <p>Pronostica quien</p>
    <p>ganará el mundial</p>
    <div class="input-field col s12">
      <select id="select-team">
        <option value="" disabled selected>Seleccionar</option>
        <option value="1">Equipo 1</option>
        <option value="2">Equipo 2</option>
        <option value="3">Equipo 3</option>
      </select>
    </div>
  </div>
</div>
`

module.exports = Aside
