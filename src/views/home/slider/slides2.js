'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../../components/navigation'

const data = {
  class: {
    div: 'caption center-align slide-text',
    h3: 'light white-text',
    p: 'white-text',
    a: 'waves-effect waves-custom card-panel cyan darken-2'
  },
  slide1: {
    img: {
      src: 'images/banner-vintage.png',
      alt: 'Vintage'
    },
    title: 'Vintage',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis.',
    a: 'Ver Diseños'
  },
  slide2: {
    img: {
      src: 'images/banner-animal-print.png',
      alt: 'Animal Print'
    },
    title: 'Animal Print',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis.',
    a: 'Ver Diseños'
  },
  slide3: {
    img: {
      src: 'images/banner-abstracto.png',
      alt: 'Abstracto'
    },
    title: 'Abstracto',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis.',
    a: 'Ver Diseños'
  }
}

const Slide1 = yo`
<li>
  <img src=${data.slide1.img.src} alt=${data.slide1.img.alt} />
  <div className=${data.class.div}>
    <h3 className=${data.class.h3}>${data.slide1.title}</h3>
    <p className=${data.class.p}>${data.slide1.text}</p>
    <a className=${data.class.a} href=${NavItems.links.link2}>${data.slide1.a}</a>
  </div>
</li>
`
const Slide2 = yo`
<li>
  <img src=${data.slide2.img.src} alt=${data.slide2.img.alt} />
  <div className=${data.class.div}>
    <h3 className=${data.class.h3}>${data.slide2.title}</h3>
    <p className=${data.class.p}>${data.slide2.text}</p>
    <a className=${data.class.a} href=${NavItems.links.link2}>${data.slide1.a}</a>
  </div>
</li>
`
const Slide3 = yo`
<li>
  <img src=${data.slide3.img.src} alt=${data.slide3.img.alt} />
  <div className=${data.class.div}>
    <h3 className=${data.class.h3}>${data.slide3.title}</h3>
    <p className=${data.class.p}>${data.slide3.text}</p>
    <a className=${data.class.a} href=${NavItems.links.link2}>${data.slide1.a}</a>
  </div>
</li>
`
export {Slide1, Slide2, Slide3}
