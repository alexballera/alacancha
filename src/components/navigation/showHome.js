'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {NavItems} from '../navigation'
import {body} from '../../views/home/createHome'
import {path} from '../../components/data'

const showHome = () => {
  hideViews()

  document.title = `${NavItems.title.home}`

  $app.find('#sliderHome').show('fade', 1000)
  $app.find('#home').show('fade', 1000)
  $app.find('#brand-logo-top').hide()
  $app.find('#informacion-logo-img').hide()
  $app.find('#brand-logo-img').show()
  $app.find('#navbar-top').show()
  body.style.backgroundImage = `url(..${path}images/bg-main.png)`
}
module.exports = showHome
