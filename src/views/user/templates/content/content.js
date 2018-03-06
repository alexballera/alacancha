'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../../../components/navigation'
import contentNavigation from './content-navigation'

const Content = yo`
<div className="row ${NavItems.id.id2}-content-content">
  ${contentNavigation}
</div>`

module.exports = Content
