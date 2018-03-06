'use strict'

export default () => {
  // Slider

  $('.slider-mobile').slider({
    indicators: false,
    interval: 9000,
    transition: 600,
    height: 200
  })
  
  $('.slider-tablet').slider({
    indicators: false,
    interval: 9000,
    transition: 600,
    height: 300
  })

  $('.slider-desktop').slider({
    indicators: false,
    interval: 9000,
    transition: 600,
    height: 400
  })
}
