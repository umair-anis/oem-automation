'use strict'

const { buildTestLocationRestrictions } = require('./buildTestLocationRestrictions')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testLocationRestrictions = async (env = {}, credential = '') => {
  const test = await buildTestLocationRestrictions(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testLocationRestrictions
}
