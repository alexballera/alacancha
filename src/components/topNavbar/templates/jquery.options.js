'use strict'

export default () => {
  // Dropdown
  $('.dropdown-button').dropdown(
    {
      hover: true,
      belowOrigin: true,
      constrainWidth: false
    }
  )
  // SideNav
  $('.button-collapse').sideNav()
  $('.slider').slider(
    {
      indicators: false,
      interval: 9000,
      transition: 600,
      height: 600
    }
  )
}
