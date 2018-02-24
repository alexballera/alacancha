'use strict'
import yo from 'yo-yo'
import {home} from '../createHome'

const Section1 = yo`
<h1>Estoy en Home</h1>
`
export default () => {
  home.appendChild(Section1)
}
