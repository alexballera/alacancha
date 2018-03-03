'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id2}" className="container grey lighten-5">
  <div id="${NavItems.id.id2}" className="${NavItems.id.id2}">
    <h1>Estoy en Usuario</h1>
  </div>
  <picture className="${NavItems.id.id2}-bg-logo">
    <img src="images/bg-usuario-logo-bottom.png" alt=""/>
  </picture>
</section>
`
module.exports = elem
