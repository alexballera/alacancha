'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id2}" className="container grey lighten-5">
  <div id="${NavItems.id.id2}" className="${NavItems.id.id2}">
    <h1>Estoy en Usuario</h1>
  </div>
  <img className="${NavItems.id.id2}-bg-logo" src="images/bg-usuario-logo-bottom.png" alt=""/>
</section>
`
module.exports = elem
