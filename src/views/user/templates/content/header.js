'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../../../components/navigation'

const Header = yo`
<header className="row ${NavItems.id.id2}-content-header">
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
</header>`

module.exports = Header
