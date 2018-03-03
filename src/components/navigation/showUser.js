'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {NavItems} from '../navigation'
import {body} from '../../views/home/createHome'
import {path} from '../../components/data'

const showUser = () => {
  hideViews()

  const SectionID = '#seccion-' + `${NavItems.id.id2}`
  const liID = '#li-' + `${NavItems.id.id2}`
  const mql = window.matchMedia('(min-width: 993px)')

  document.title = `${NavItems.title.view2}`
  body.style.backgroundImage = `url(..${path}images/bg-usuario.png)`

  $app.find(SectionID).show('fade', 1000)
  $app.find(liID).addClass('activado')

  $app.find('#brand-logo-top').show()
  $app.find('#navbar-top').show()
  $app.find('#footer').hide()

  var screenTest = e => {
    if (e.matches) {
      $app.find('#informacion-logo-img').hide()
      $app.find('#brand-logo-img').show()
    } else {
      $app.find('#informacion-logo-img').show()
      $app.find('#brand-logo-img').hide()
    }
  }

  mql.addListener(screenTest)
}

module.exports = showUser
