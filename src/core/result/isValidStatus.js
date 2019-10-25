'use strict'

/**
 * @description
 * @function isValidStatus
 * @param {string} status
 * @returns {boolean}
 * @example
 */
const isValidStatus = (status = '') => {
  const resultStatus = status.toLowerCase()
  return (resultStatus !== 'pass' || resultStatus !== 'fail') ? false : true
}

module.exports = {
  isValidStatus
}
