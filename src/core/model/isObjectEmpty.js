'use strict'

const isObjectEmpty = (value = {}) => {
  return (value.trim() === {}) ? Object.freeze(true) : Object.freeze(false)
}

module.exports = {
  isObjectEmpty
}
