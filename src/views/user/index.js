'use strict'

import elem from './template'
import jqueryOptions from './jquery.options'

export default () => {
  const main = document.getElementById('main')
  main.appendChild(elem)
  jqueryOptions()
}
