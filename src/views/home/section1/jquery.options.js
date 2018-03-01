'use strict'

export default () => {
  // Slider
  $('.slider').slider(
    {
      indicators: false,
      interval: 9000,
      transition: 600,
      height: 200
    }
  )
}
