'use strict'

const { buildTestHealthSoftwareSliderConsistency } = require('./buildTestHealthSoftwareSliderConsistency')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testHealthSoftwareSliderConsistency = async (env = {}, credential = '') => {
  const test = await buildTestHealthSoftwareSliderConsistency(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testHealthSoftwareSliderConsistency
}
