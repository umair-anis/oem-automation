'use strict'

/**
 * @description
 * @function
 * @param {string} type
 * @returns {boolean}
 * @example
 */
const isValidType = (type = '') => {

  const t = type.toLowerCase()

  const isValid = (t === 'delete' || t === 'get' || t === 'patch' || t === 'post' || t === 'put') ? true : false

  return Object.freeze(isValid)
}

module.exports = {
  isValidType
}
