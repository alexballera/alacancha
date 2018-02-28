'use strict'
import { app } from './app'
import {setAttributes} from '../../scripts/helpers/setAttributes.js'

const navbar = document.createElement('header')
setAttributes(navbar, {
  'id': 'navbar-top',
  'class': 'top-navbar'
})

export default () => {
  app.appendChild(navbar)
}
