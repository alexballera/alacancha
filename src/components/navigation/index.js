'use strict'

import hideViews from './hideViews'
import initHome from './initHome'
import showHome from './showHome'
import showView1 from './showView1'
import showUser from './showUser'
import showLogin from './showLogin'
import showLegal from './showLegal'
import notFound from './notFound'
import page from 'page'

const baseUri = '/alacancha/'

const id = 'view'

const NavItems = {
  items: {
    home: 'Inicio',
    item1: 'Vista 1',
    item2: 'Usuario',
    item3: 'Login',
    legal: 'Legal',
    nf: 'No Encontrado'
  },
  title: {
    home: 'A La Cancha',
    view1: 'Vista 1',
    view2: 'Usuario',
    view3: 'Login',
    legal: 'Legal',
    nf: 'No Encontrado'
  },
  id: {
    home: 'home',
    id1: id + '-1',
    id2: id + '-user',
    id3: id + '-login',
    legal: id + '-legal',
    nf: 'not-found'
  },
  links: {
    home: baseUri,
    link1: baseUri + 'vista-uno',
    link2: baseUri + 'user',
    link3: baseUri + 'login',
    legal: baseUri + 'legal',
    nf: '*'
  }
}

const Navigation = () => {
  hideViews()
  initHome()
  page(NavItems.links.home, showHome)
  page(NavItems.links.link1, showView1)
  page(NavItems.links.link2, showUser)
  page(NavItems.links.link3, showLogin)
  page(NavItems.links.legal, showLegal)
  page(NavItems.links.nf, notFound)
  page()
}

export {Navigation, NavItems}
