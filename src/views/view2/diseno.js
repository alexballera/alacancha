'use strict'
import data from './data.js'
import yo from 'yo-yo'

const disenos = {
  diseno1: yo`<div className="section">
  <div className="row images-container">
    <div className="col s12 l3">
      <img className="materialboxed" data-caption=${data.section1.images.img1.dataCaption} src=${data.section1.images.img1.src} />
    </div>
    <div className="col s12 l3">
      <img className="materialboxed" data-caption=${data.section2.images.img1.dataCaption} src=${data.section2.images.img1.src} />
    </div>
    <div className="col s12 l3">
      <img className="materialboxed" data-caption=${data.section3.images.img1.dataCaption} src=${data.section3.images.img1.src} />
    </div>
  </div>
</div>`,
  diseno2: yo`<div className="section">
  <h3 className="col s12 yellowtail-fonts">${data.section2.title}</h3>
  <div className="row images-container">
    <div className="col s12 l4">
      <img className="materialboxed" data-caption=${data.section2.images.img1.dataCaption} src=${data.section2.images.img1.src} />
    </div>
    <div className="col s12 l4">
      <img className="materialboxed" data-caption=${data.section2.images.img2.dataCaption} src=${data.section2.images.img2.src} />
    </div>
  </div>
  </div>`,
  diseno3: yo`<div className="section">
  <h3 className="col s12 yellowtail-fonts">${data.section3.title}</h3>
  <div className="row images-container">
    <div className="col s12 l4">
      <img className="materialboxed" data-caption=${data.section3.images.img1.dataCaption} src=${data.section3.images.img1.src} />
    </div>
    <div className="col s12 l4">
      <img className="materialboxed" data-caption=${data.section3.images.img2.dataCaption} src=${data.section3.images.img2.src} />
    </div>
  </div>
</div>`
}
module.exports = disenos
