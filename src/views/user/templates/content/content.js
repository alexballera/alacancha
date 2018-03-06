'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../../../components/navigation'
import contentNavigation from './content-navigation'
import contentPronostic from './content-pronostic'

const Content = yo`
<div className="${NavItems.id.id2}-content-content">
  ${contentNavigation}
  ${contentPronostic}
</div>`

module.exports = Content
