'use strict'

const { buildTestEditDealer_All } = require('./buildTestEditDealer_All')
const { invokeTest } = require('../../../../core/test/invokeTest')

const testEditDealer_All = async (env = {}, credential = '') => {
  const test = await buildTestEditDealer_All(env, credential)
  const result = await invokeTest(test)
  return Object.freeze(result)
}

module.exports = {
  testEditDealer_All
}
