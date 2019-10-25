'uset strict'

const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')

/**
 * @description
 * @function isValidBrowserName
 * @param {*} name
 * @async
 * @returns {boolean}
 * @example
 */
const isValidBrowserName = async (name = '') => {

  const isEmpty = await isEmptyOrWhitespace(name)
  const browserName = name.toLowerCase()

  if (isEmpty) throw new Error(`Browser name was not defined.`)
  return (browserName !== 'chrome' && browserName !== 'firefox' && browserName !== 'edge' && browserName !== 'ie' && browserName !== 'safari') ? false : true
}

module.exports = {
  isValidBrowserName
}
