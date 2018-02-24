'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'
import {backgroundImageCatalogo} from '../../components/background-images'
import disenos from './diseno.js'

const elem = yo`
<section id="seccion-${NavItems.id.id2}" className="container grey lighten-5">
  <div id="${NavItems.id.id2}">
    <h2 className="handlee-fonts">Diseños</h2>
    <div class="divider"></div>
      ${disenos.diseno1}
    <div class="divider"></div>
    ${backgroundImageCatalogo}
  </div>
</section>
`
module.exports = elem
