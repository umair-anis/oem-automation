'use strict'

const { ControlBuilder } = require('../control/ControlBuilder')
const { PropertyBuilder } = require('../property/PropertyBuilder')

/**
 * @description
 * @function buildElement
 * @param {*} name
 * @param {*} propertyName
 * @param {*} propertyValue
 * @async
 * @returns {Control}
 * @example
 */
const buildElement = async (name = '', propertyName = '', propertyValue = '') => {
  const property = await PropertyBuilder().setName(propertyName)
    .setPath(propertyValue)
    .build()

  const element = await ControlBuilder().setName(name)
    .setProperty(property)
    .build()

  return Object.freeze(element)
}

module.exports = {
  buildElement
}
