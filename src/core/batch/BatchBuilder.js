'use strict'

const { cloneDeep } = require('lodash')

/**
 * @description
 * @function BatchBuilder
 * @method setName
 * @method setTests
 * @method build
 * @returns {Batch}
 * @example
 */
const BatchBuilder = (() => {
  const batch = {
    name: '',
    tests: []
  }

  this.name = (value = '') => {
    batch.name = value
    return this
  }

  this.tests = (value = []) => {
    batch.tests = value
    return this
  }

  this.build = () => {
    const copy = cloneDeep(batch)

    // Must have a name.
    // Must have tests.

    return Object.freeze(copy)
  }

  return this
})

module.exports = {
  BatchBuilder
}
