'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'
import {backgroundImageAcerca} from '../../components/background-images'

const elem = yo`
<section id="seccion-${NavItems.id.id1}" className="container grey lighten-5">
  <div id="${NavItems.id.id1}">
    <div className="row valign-wrapper">
      <picture className="col hide-on-med-and-down l4 picture-content">
        <img src="images/silueta-ppal-nacha.png" />
      </picture>
      <div className="col s12 l8">
        <div className="row">
          <div className="col s12">
            <h2 className="handlee-fonts">¿Quiénes Somos?</h2>
            <p>Somos una marca de productos textiles confeccionados
            especialmente para diversas disciplinas olímpicas como
            la gimnasia rítmica.</p>
          </div>
          <div className="col s12">
          <h2 className="handlee-fonts">Nuestra Misión</h2>
          <p>Nuestro objetivo es darle un sentido gráfico original y
          único a las piezas textiles que se confecciona en Nacha para
          que así nuestro  cliente.</p>
        </div>
        </div> 
      </div>
    </div>
    ${backgroundImageAcerca}
  </div>
</section>
`
module.exports = elem
