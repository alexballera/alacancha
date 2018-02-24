'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../navigation'

const elem = yo`
<footer class="page-footer">
  <div class="container">
    <div class="row valign-wrapper">
      <div class="col l4 s12">
        <picture>
          <img src="images/logo.png" />
        </picture>
      </div>
      <div class="col l6 offset-l2 s12">
        <h2 class="yellowtail-fonts">Maillots Que Impresionan!</h2>
      </div>
    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
      <div class="row">
        <div class="col s12 l4">
          © 2017 Copyright Nacha Maillots
        </div>
        <div class="col s12 l8 right-align">
          <a class="waves-effect waves-custom" href=${NavItems.links.legal} >${NavItems.items.legal}</a>
        </div>
      </div>
    </div>
  </div>
</footer>
`
module.exports = elem
