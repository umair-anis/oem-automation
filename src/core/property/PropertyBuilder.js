'use strict'

const { cloneDeep } = require('lodash')
const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')

/**
 * @description
 * @function PropertyBuilder
 * @method setName
 * @method setPath
 * @method build
 * @returns {Property}
 * @example
 */
const PropertyBuilder = (() => {
  const property = {
    name: '',
    path: ''
  }

  this.setName = (value = '') => {
    property.name = value
    return this
  }

  this.setPath = (value = '') => {
    property.path = value
    return this
  }

  this.build = async () => {

    const isNameEmpty = await isEmptyOrWhitespace(property.name)
    const isPathEmpty = await isEmptyOrWhitespace(property.path)

    if (isNameEmpty) throw new Error(`The name for a property cannot be empty or whitespace.`)
    if (isPathEmpty) throw new Error(`The path for a property cannot be empty or whitespace.`)

    const copy = cloneDeep(property)
    return Object.freeze(copy)
  }

  return this
})

module.exports = {
  PropertyBuilder
}
