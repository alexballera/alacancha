'use strict'
import yo from 'yo-yo'

const contentNavigation = yo`
<nav className="content-navigation">
  <div class="nav-wrapper">
    <ul id="nav-mobile" class="hide-on-med-and-down">
      <li><a href="#">1ra Fecha</a></li>
      <li><a href="#">2da Fecha</a></li>
      <li><a href="#">Octavos</a></li>
      <li><a href="#">Cuartos</a></li>
      <li><a href="#">Semi Final</a></li>
      <li><a href="#">Final</a></li>
    </ul>
  </div>
</nav>`

module.exports = contentNavigation
