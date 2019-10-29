'use strict'

const { buildDefaultSoftwareChipFilters } = require('./buildDefaultSoftwareChipFilters')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testDefaultSoftwareChipFilters = async (env = {}, credential = '') => {
  const test = await buildDefaultSoftwareChipFilters(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDefaultSoftwareChipFilters
}
