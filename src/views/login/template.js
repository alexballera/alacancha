'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.id3}">
  <div id="${NavItems.id.id3}" className="${NavItems.id.id3}">
    <div className="row valign-wrapper ${NavItems.id.id3}-row">
      <div className="col s12 m5 center-align ${NavItems.id.id3}-form">
        <div class="row">
          <picture className="col s12">
            <img src="images/logo-nestle.png" alt="">
          </picture>
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" class="validate">
                <label for="icon_prefix">First Name</label>
              </div>
              <div class="input-field col s12">
                <i class="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" class="validate">
                <label for="icon_telephone">Telephone</label>
              </div>
            </div>
          </form>
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
