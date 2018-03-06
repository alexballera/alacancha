'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../../components/navigation'
import Header from './content/header'
import Contenido from './content/content'
import Aside from './content/aside'

const Content = yo`
<div className="row ${NavItems.id.id2}-content">
  <div className="col offset-s2 s10 m9 padding-zero">
    ${Header}
    ${Contenido}
  </div>
  <div className="col offset-s2 s10 m3 ${NavItems.id.id2}-aside padding-zero">
    ${Aside}
  </div>
</div>`

module.exports = Content
