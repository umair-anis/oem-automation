'use strict'

const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')

/**
 * @description
 * @function isValidPropertyName
 * @param {*} name
 * @async
 * @returns {boolean}
 * @throws {Error}
 * @example
 */
const isValidPropertyName = async (name = '') => {
  const isEmpty = await isEmptyOrWhitespace(name)
  name = name.toLowerCase()

  if (isEmpty) throw new Error(`Property name is empty.`)
  return (name !== 'css' && name !== 'id' && name !== 'xpath' && name !== 'classname') ? false : true
}

module.exports = {
  isValidPropertyName
}
