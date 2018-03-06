'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'
import Header from './templates/header'
import Content from './templates/content'

const elem = yo`
<section id="seccion-${NavItems.id.id2}" className="container">
  <div id="${NavItems.id.id2}" className="${NavItems.id.id2}">
    ${Header}
    ${Content}
  </div>
</section>
`
module.exports = elem
