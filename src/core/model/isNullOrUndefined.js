'use strict'

const isNullOrUndefined = (value = {}) => {
  return (value === undefined || value === null) ? Object.freeze(true) : Object.freeze(false)
}

module.exports = {
  isNullOrUndefined
}
