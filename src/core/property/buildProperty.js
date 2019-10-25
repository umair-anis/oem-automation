'use strict'

const { isValidPath } = require('./isValidPath')
const { isValidPropertyName } = require('./isValidPropertyName')

/**
 * @description
 * @function buildProperty
 * @param {*} name
 * @param {*} path
 * @async
 * @returns {Property}
 * @example
 */
const buildProperty = async (name = '', path = '') => {
  const isNameValid = await isValidPropertyName(name)
  const isPathValid = await isValidPath(path)

  if (!isNameValid) throw new Error(`An invalid property name was specified: ${name}.`)
  if (!isPathValid) throw new Error(`An invalid path was specified: ${path}.`)

  return Object.freeze({
    name: name,
    path: path
  })
}

module.exports = {
  buildProperty
}
