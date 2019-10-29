'use strict'

const { buildTestMapFunctionality } = require('./buildTestMapFunctionality')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testMapFunctionality = async (env = {}, credential = '') => {
  const test = await buildTestMapFunctionality(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testMapFunctionality
}
