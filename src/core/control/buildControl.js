'use strict'

const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')
const { isNullOrUndefined } = require('../model/isNullOrUndefined')

/**
 * @description
 * @function buildControl
 * @param {*} name
 * @param {*} property
 * @async
 * @returns {Control}
 * @example
 */
const buildControl = async (name = '', property = {}) => {
  const isNameValid = await isEmptyOrWhitespace(name)
  const isValidProperty = await isNullOrUndefined(property)

  if (!isNameValid) throw new Error(`A empty or whitespace name was specified while attempting to define a control.`)
  if (!isValidProperty) throw new Error(`A null or undefined property was specified while attempting to define a control.`)

  return Object.freeze({
    name: name,
    property: property
  })
}

module.exports = {
  buildControl
}
