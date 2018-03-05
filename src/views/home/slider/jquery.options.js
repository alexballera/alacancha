'use strict'

export default () => {
  var slider = $('.slider')
  // Slider

  slider.find('.slider-mobile').slider({
    indicators: false,
    interval: 9000,
    transition: 600,
    height: 200
  })
  
  slider.find('.slider-tablet').slider({
    indicators: false,
    interval: 9000,
    transition: 600,
    height: 300
  })

  slider.find('.slider-desktop').slider({
    indicators: false,
    interval: 9000,
    transition: 600,
    height: 400
  })
}
