'use strict'
import {setAttributes} from '../../scripts/helpers/setAttributes.js'

const home = document.createElement('div')

setAttributes(home, {
  'class': 'home',
  'id': 'home'
})

const createHome = () => {
  const main = document.getElementById('main')
  main.appendChild(home)
}

const body = document.getElementsByTagName('body')[0]

export {createHome, home, body}
