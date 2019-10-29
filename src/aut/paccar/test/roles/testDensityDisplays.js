'use strict'

const { buildTestDensityDisplays } = require('./buildTestDensityDisplays')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testDensityDisplays = async (env = {}, credential = '') => {
  const test = await buildTestDensityDisplays(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testDensityDisplays
}
