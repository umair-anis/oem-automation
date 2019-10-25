'use strict'

const { cloneDeep } = require('lodash')

/**
 * @description
 * @function DynamicDataBuilder
 * @method setKey
 * @method setValues
 * @method build
 * @returns {DynmamicData}
 * @example
 */
const DynamicDataBuilder = (() => {
  const dynamicData = {
    key: '',
    values: []
  }

  this.setKey = (value = '') => {
    dynamicData.key = value
    return this
  }

  this.setValues = (values = []) => {
    dynamicData.values = values
    return this
  }

  this.build = () => {
    const copy = cloneDeep(dynamicData)
    return Object.freeze(copy)
  }

  return this
})

module.exports = {
  DynamicDataBuilder
}
