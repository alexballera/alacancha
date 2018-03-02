'use strict'

var path
const url = () => {
  var host = window.location.host
  if (host === 'localhost:8000') {
    path = '/'
    return path
  } else {
    path = '/alacancha/'
    return path
  }
}
url()
export {path}
