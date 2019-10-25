'use strict'

const { cloneDeep } = require('lodash')
const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')
const { isNullOrUndefined } = require('../model/isNullOrUndefined')

/**
 * @description
 * @function ControlBuilder
 * @method setName
 * @method setProperty
 * @method build
 * @returns {Control}
 * @example
 */
const ControlBuilder = (() => {
  const control = {
    name: '',
    property: {}
  }

  this.setName = (value = '') => {
    control.name = value
    return this
  }

  this.setProperty = (value = {}) => {
    control.property = value
    return this
  }

  this.build = async () => {

    const isNameEmpty = await isEmptyOrWhitespace(control.name)
    const isPropertyNull = await isNullOrUndefined(control.property)

    if (isNameEmpty) throw new Error(`Control name cannot be empty or whitespace.`)
    if (isPropertyNull) throw new Error(`Property not specified for: ${control.name} when custom search is empty`)

    const copy = cloneDeep(control)
    return Object.freeze(copy)
  }

  return this
})

module.exports = {
  ControlBuilder
}
