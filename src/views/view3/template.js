'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'
import {backgroundImageContacto} from '../../components/background-images'

const elem = yo`
<section id="seccion-${NavItems.id.id3}">
  <div className="container grey lighten-5" id="${NavItems.id.id3}">
    <div className="row">
      <h3 className="col s12 handlee-fonts">Contacto</h3>
      <address>
        Calle Santiago  Nro 1  Local , 50180 Utego, Zaragoza.
        Telf.: <a href="tel:876034189">876034189</a>
      </address>
      <div className="s12 center-align show-on-small hide-on-med-and-up">
        <iframe
          width="280"
          height="280"
          frameborder="0"
          style="border:0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDcxOoICiWQMHRKp8guwwf4RQ2xItWPXqw
          &q=Calle+Santiago+Número+1,Utego+Zaragoza"
          allowfullscreen>
        </iframe>
      </div>
      <div className="s12 center-align show-on-medium hide-on-med-and-down hide-on-med-and-up">
        <iframe
          width="500"
          height="500"
          frameborder="0"
          style="border:0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDcxOoICiWQMHRKp8guwwf4RQ2xItWPXqw
          &q=Calle+Santiago+Número+1,Utego+Zaragoza"
          allowfullscreen>
        </iframe>
      </div>
      <div className="s12 center-align hide-on-med-and-down hide-extra-large-and-up">
        <iframe
          width="650"
          height="650"
          frameborder="0"
          style="border:0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDcxOoICiWQMHRKp8guwwf4RQ2xItWPXqw
          &q=Calle+Santiago+Número+1,Utego+Zaragoza"
          allowfullscreen>
        </iframe>
      </div>
      <div className="s12 center-align show-extra-large-and-up">
      <iframe
        width="850"
        height="850"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDcxOoICiWQMHRKp8guwwf4RQ2xItWPXqw
        &q=Calle+Santiago+Número+1,Utego+Zaragoza"
        allowfullscreen>
      </iframe>
    </div>
    </div>
    ${backgroundImageContacto}
  </div>
</section>
`
module.exports = elem
