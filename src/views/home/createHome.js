'use strict'

const home = document.createElement('div')
home.setAttribute('class', 'home')

const createHome = () => {
  const main = document.getElementById('main')
  main.appendChild(home)
}

export {createHome, home}
