'use strict'
import yo from 'yo-yo'
import {home} from '../createHome'
import {backgroundImageHome} from '../../../components/background-images'

const Section1 = yo`
<section className="container grey lighten-5">
  <div className="row valign-wrapper" >  
    <picture className="col hide-on-med-and-down l5 picture-content">
      <img src="images/silueta-ppal-nacha.png" />
    </picture>
    <div className="col s12 l7">
      <div className="row content">
        <div className="col s12">
        <h2 className="center-align handlee-fonts">¿Sabías qué?</h2>
          <p className="right-align">El Maillot es una pieza textil usada en Gimnasia
          Rítmica y otras disciplinas tanto en presentaciones
          grupales como individuales.</p>
          <p className="right-align">Esta malla (jersey) está elaborada en una tela ligera
          de tejido muy fino y confeccionada para aportar
          comodidad a la gimnasta, proporcionándole
          además estilo y personalidad.</p>
          <p className="right-align">Un Maillot brinda sentido gráfico, describe los
          movimientos y la temática de una presentación,
          que en conjunto con otros elementos acompañan a
          una gimnasta a la victoria dentro de su competencia.</p>
          <p className="right-align">A lo largo de los años los Maillots se han convertido en</p>
          <p className="center-align yellowtail-fonts obra-arte">Una Obra de Arte.</p>
        </div>
      </div>
    </div>
    ${backgroundImageHome}
  </div>
</section>
`
export default () => {
  home.appendChild(Section1)
}
