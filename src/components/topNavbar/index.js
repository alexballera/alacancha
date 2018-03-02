'use strict'
import yo from 'yo-yo'
import {Desktop} from './templates/desktop'
import sideNav from './templates/sideNav'
import JqueryOptions from './templates/jquery.options'
import {NavItems} from '../navigation'

const elem = yo`
<div>
  <div className="navbar-fixed">
    <nav className="navbar-top">
      <div className="nav-wrapper">
        <a href=${NavItems.links.home} className="brand-logo-top" id="brand-logo-top">
          <img src="images/logo-usuario.png" alt="" className="">
        </a>
        <a href=${NavItems.links.home} className="brand-logo">
          <img src="images/logo-menu.png" alt="" className="header__image" id="brand-logo-img">
          <img src="images/logo-informacion.png" alt="" className="header__image" id="informacion-logo-img">
        </a>
        <a href="#" data-activates="mobile-demo" className="button-collapse valign-wrapper">
          <i className="material-icons">menu</i>
          <p>Menú</p>
        </a>
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
