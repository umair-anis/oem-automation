'use strict'

const isEmptyOrWhitespace = (value = '') => {
  return (value.trim() === '') ? Object.freeze(true) : Object.freeze(false)
}

module.exports = {
  isEmptyOrWhitespace
}
