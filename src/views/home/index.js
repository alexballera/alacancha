'use strict'
import {createHome} from './createHome'
import Slider from './slider'
import JqueryOptions from './slider/jquery.options.js'

export default () => {
  createHome()
  Slider()
  JqueryOptions()
}
