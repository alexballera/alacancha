'use strict'
import yo from 'yo-yo'
import {Desktop} from './templates/desktop'
import sideNav from './templates/sideNav'
import JqueryOptions from './templates/jquery.options'
import {NavItems} from '../navigation'

const elem = yo`
<div>
  <div class="navbar-fixed">
    <nav class="navbar-top">
      <div class="nav-wrapper">
        <a href=${NavItems.links.home} class="brand-logo">
          <img src="images/logo.png" alt="" class="header__image">
        </a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        ${Desktop}
      </div>
    </nav>
  </div>
  ${sideNav}
</div>
`
export default () => {
  document.getElementById('navbar-top').appendChild(elem)
  JqueryOptions()
}
