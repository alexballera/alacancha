'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {NavItems} from '../navigation'
import {body} from '../../views/home/createHome'
import {path} from '../../components/data'

const showLogin = () => {
  hideViews()
  const SectionID = '#seccion-' + `${NavItems.id.id3}`
  const liID = '#li-' + `${NavItems.id.id3}`

  document.title = `${NavItems.title.view3}`

  $app.find(SectionID).show('fade', 1000)
  $app.find(liID).addClass('activado')
  $app.find('#navbar-top').hide()
  $app.find('#footer').hide()

  body.style.backgroundImage = `url(..${path}images/bg-login.png)`
}

module.exports = showLogin
