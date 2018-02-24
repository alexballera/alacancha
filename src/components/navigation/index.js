'use strict'

import hideViews from './hideViews'
import initHome from './initHome'
import showHome from './showHome'
import showView1 from './showView1'
import showView2 from './showView2'
import showView3 from './showView3'
import showLegal from './showLegal'
import notFound from './notFound'
import page from 'page'

const baseUri = '/'

const id = 'view'

const NavItems = {
  items: {
    home: 'Inicio',
    item1: 'Quienes Somos',
    item2: 'Diseños',
    item3: 'Contacto',
    legal: 'Legal',
    nf: 'No Encontrado'
  },
  title: {
    home: 'Nacha Maillots',
    view1: 'Quienes Somos',
    view2: 'Diseños',
    view3: 'Contacto',
    legal: 'Legal',
    nf: 'No Encontrado'
  },
  id: {
    home: 'home',
    id1: id + '1',
    id2: id + '2',
    id3: id + '3',
    legal: id + '-legal',
    nf: 'not-found'
  },
  links: {
    home: baseUri,
    link1: baseUri + 'quienes-somos',
    link2: baseUri + 'disenos',
    link3: baseUri + 'contacto',
    legal: baseUri + 'legal',
    nf: '*'
  }
}

const Navigation = () => {
  hideViews()
  initHome()
  page(NavItems.links.home, showHome)
  page(NavItems.links.link1, showView1)
  page(NavItems.links.link2, showView2)
  page(NavItems.links.link3, showView3)
  page(NavItems.links.legal, showLegal)
  page(NavItems.links.nf, notFound)
  page()
}

export {Navigation, NavItems}
